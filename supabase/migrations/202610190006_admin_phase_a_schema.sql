-- =====================================================================
-- Data Warriors — Admin Phase A, schema chunk (APPLIED but DORMANT).
--
-- NOTE: This is the first chunk of admin Phase A (unified requests inbox,
-- member actions, audit log). It was applied to the live DB, then the
-- feature was paused before the admin RPCs and UI were built. Everything
-- here is additive and inert: no UI calls dw_submit_request yet, and
-- streak_anchor backfills to each member's start_date so dw_calc_challenge
-- behaviour is unchanged. Resume by adding the admin RPCs + UI.
-- =====================================================================
begin;

-- general user->admin requests (freeze / correction / feedback / deletion / other)
create table if not exists public.dw_requests (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  type       text not null check (type in ('freeze','correction','feedback','deletion','other')),
  subject    text check (subject is null or length(subject) <= 160),
  body       text not null check (length(btrim(body)) between 1 and 2000),
  meta       jsonb not null default '{}'::jsonb,
  status     text not null default 'pending' check (status in ('pending','in_review','resolved','rejected')),
  admin_note text check (admin_note is null or length(admin_note) <= 1000),
  decided_by uuid references auth.users(id) on delete set null,
  decided_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists dw_requests_status on public.dw_requests (status, created_at);
create unique index if not exists dw_requests_one_open on public.dw_requests (user_id, type) where status in ('pending','in_review');

-- admin audit trail
create table if not exists public.dw_audit_log (
  id            bigint generated always as identity primary key,
  actor         uuid references auth.users(id) on delete set null,
  action        text not null,
  target_member bigint,
  detail        jsonb not null default '{}'::jsonb,
  created_at    timestamptz not null default now()
);
create index if not exists dw_audit_created on public.dw_audit_log (created_at desc);

-- member flags: streak reset anchor + ban
alter table public.dw_members
  add column if not exists streak_anchor  date,
  add column if not exists is_banned      boolean not null default false,
  add column if not exists banned_reason  text;
update public.dw_members set streak_anchor = start_date where streak_anchor is null;

alter table public.dw_requests   enable row level security;
alter table public.dw_audit_log  enable row level security;
revoke all on public.dw_requests, public.dw_audit_log from anon, authenticated;

-- audit helper (internal; called by SECURITY DEFINER admin fns)
create or replace function public.dw_audit(p_action text, p_target bigint default null, p_detail jsonb default '{}'::jsonb)
returns void language sql security definer set search_path = pg_catalog, public, auth as $$
  insert into public.dw_audit_log(actor, action, target_member, detail)
  values (auth.uid(), p_action, p_target, coalesce(p_detail, '{}'::jsonb));
$$;

-- member submits a request
create or replace function public.dw_submit_request(p_type text, p_subject text, p_body text, p_meta jsonb default '{}'::jsonb)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); ty text; r public.dw_requests%rowtype;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  if not exists (select 1 from public.dw_members where user_id = uid) then raise exception 'Create your workspace first.'; end if;
  ty := lower(coalesce(p_type,''));
  if ty not in ('freeze','correction','feedback','deletion','other') then raise exception 'Choose a valid request type.'; end if;
  if length(btrim(coalesce(p_body,''))) < 1 then raise exception 'Please describe your request.'; end if;
  if exists (select 1 from public.dw_requests where user_id = uid and type = ty and status in ('pending','in_review')) then
    raise exception 'You already have an open % request — we''ll get to it.', ty;
  end if;
  insert into public.dw_requests(user_id, type, subject, body, meta)
  values (uid, ty, nullif(btrim(coalesce(p_subject,'')),''), btrim(p_body), coalesce(p_meta,'{}'::jsonb))
  returning * into r;
  return jsonb_build_object('ok', true, 'id', r.id, 'type', r.type);
end $$;

-- per-member challenge calc: honour the streak reset anchor (no-op until reset is used)
create or replace function public.dw_calc_challenge(p_uid uuid)
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth as $$
declare
  m public.dw_members%rowtype; today date; sd date; active_cats int := 0;
  comp_dates date[]; canchor2 date; cur int := 0; mx int := 0; run int := 0; prev date; dt date; last_missed date;
begin
  select * into m from public.dw_members where user_id = p_uid;
  if m.user_id is null then return jsonb_build_object('day',0,'best',0,'complete_days',0,'today_complete',false,'last_missed',null); end if;
  today := (now() at time zone m.timezone)::date; sd := greatest(m.start_date, coalesce(m.streak_anchor, m.start_date));
  select count(*) into active_cats from public.dw_categories where user_id = p_uid and is_active;
  select array_agg(d order by d) into comp_dates from (
    select dd::date d from generate_series(sd, today, interval '1 day') dd
    where exists (select 1 from public.dw_streak_grace g where g.user_id=p_uid and g.day=dd::date)
       or (
         active_cats > 0
         and (select count(*) from public.dw_applications a where a.user_id=p_uid and a.status<>'saved' and a.date_applied=dd::date) >= m.app_target
         and not exists (
           select 1 from public.dw_categories c
           where c.user_id=p_uid and c.is_active
             and (select count(*) from public.dw_prep_entries p where p.user_id=p_uid and p.category_id=c.id and p.entry_date=dd::date) < c.daily_target
         )
       )
  ) x;
  if comp_dates is not null and today = any(comp_dates) then canchor2 := today;
  elsif comp_dates is not null and (today-1) = any(comp_dates) then canchor2 := today-1;
  else canchor2 := null; end if;
  cur := public.dw_day_streak(comp_dates, canchor2);
  if comp_dates is not null then
    prev := null;
    foreach dt in array comp_dates loop
      if prev is not null and dt = prev + 1 then run := run + 1; else run := 1; end if;
      if run > mx then mx := run; end if; prev := dt;
    end loop;
  end if;
  select max(d) into last_missed from (
    select dd::date d from generate_series(sd, today - 1, interval '1 day') dd
  ) z where not (d = any(coalesce(comp_dates, '{}'::date[])));
  return jsonb_build_object('day',cur,'best',mx,'complete_days',coalesce(array_length(comp_dates,1),0),
                            'today_complete',coalesce(cur>0 and canchor2=today,false),'last_missed',last_missed);
end $$;

revoke all on function public.dw_audit(text,bigint,jsonb) from public, anon, authenticated;
revoke all on function public.dw_submit_request(text,text,text,jsonb) from public, anon, authenticated;
grant execute on function public.dw_submit_request(text,text,text,jsonb) to authenticated;

commit;

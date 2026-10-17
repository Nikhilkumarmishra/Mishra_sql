-- =====================================================================
-- Data Warriors — individual workspace schema.
-- Job-application tracker, interview-prep tracker, combined dashboard,
-- optional 10-day challenge, and a community job board.
-- Additive: creates only dw_* objects; no existing table is altered.
-- Reuses AnalystWorld's auth.users identities. All state changes go
-- through owner-scoped SECURITY DEFINER RPCs; base tables have RLS on
-- and no direct grants.
-- =====================================================================
begin;

create sequence if not exists public.dw_member_seq;

-- ---- members --------------------------------------------------------
create table if not exists public.dw_members (
  user_id       uuid primary key references auth.users(id) on delete cascade,
  member_number bigint not null unique default nextval('public.dw_member_seq'),
  timezone      text not null default 'Asia/Kolkata',
  start_date    date not null,
  app_target    int not null default 5 check (app_target between 1 and 50),
  prep_target   int not null default 5 check (prep_target between 1 and 50),
  settings      jsonb not null default '{}'::jsonb,
  created_at    timestamptz not null default now()
);

-- ---- skill categories ----------------------------------------------
create table if not exists public.dw_categories (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  name       text not null check (length(btrim(name)) between 1 and 40),
  is_active  boolean not null default true,
  is_default boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
create unique index if not exists dw_categories_user_name on public.dw_categories (user_id, lower(btrim(name)));
create index if not exists dw_categories_user on public.dw_categories (user_id);

-- ---- prep entries ---------------------------------------------------
create table if not exists public.dw_prep_entries (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  category_id  uuid not null references public.dw_categories(id) on delete cascade,
  entry_date   date not null,
  type         text not null check (type in ('practice','learn')),
  topic        text not null check (length(btrim(topic)) between 1 and 160),
  resource_url text check (resource_url is null or resource_url ~* '^https?://[^[:space:]]+$'),
  minutes      int  check (minutes is null or minutes between 0 and 1440),
  notes        text check (notes is null or length(notes) <= 500),
  created_at   timestamptz not null default now()
);
create index if not exists dw_prep_user_date on public.dw_prep_entries (user_id, entry_date);
create index if not exists dw_prep_cat_date  on public.dw_prep_entries (category_id, entry_date);

-- ---- job applications ----------------------------------------------
create table if not exists public.dw_applications (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references auth.users(id) on delete cascade,
  company        text not null check (length(btrim(company)) between 1 and 120),
  role           text not null check (length(btrim(role)) between 1 and 120),
  source         text not null default 'Other' check (length(btrim(source)) between 1 and 40),
  job_url        text check (job_url is null or job_url ~* '^https?://[^[:space:]]+$'),
  status         text not null default 'applied' check (status in ('saved','applied','screening','interview','offer','rejected')),
  date_discovered date not null,
  date_applied   date,
  follow_up_date date,
  notes          text check (notes is null or length(notes) <= 500),
  response_at    timestamptz,
  interview_at   timestamptz,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);
create index if not exists dw_app_user_applied on public.dw_applications (user_id, date_applied);
create index if not exists dw_app_user_created on public.dw_applications (user_id, created_at desc);

-- ---- community job board -------------------------------------------
create table if not exists public.dw_shared_jobs (
  id           uuid primary key default gen_random_uuid(),
  shared_by    uuid not null references auth.users(id) on delete cascade,
  company      text not null check (length(btrim(company)) between 1 and 120),
  role         text not null check (length(btrim(role)) between 1 and 120),
  job_url      text not null check (job_url ~* '^https?://[^[:space:]]+$'),
  source       text check (source is null or length(source) <= 40),
  location     text check (location is null or length(location) <= 80),
  work_mode    text check (work_mode is null or work_mode in ('remote','hybrid','onsite','unknown')),
  url_key      text not null unique,
  status       text not null default 'active' check (status in ('active','expired','removed')),
  report_count int not null default 0,
  created_at   timestamptz not null default now()
);
create index if not exists dw_shared_active on public.dw_shared_jobs (status, created_at desc);

create table if not exists public.dw_job_reports (
  id          uuid primary key default gen_random_uuid(),
  job_id      uuid not null references public.dw_shared_jobs(id) on delete cascade,
  reported_by uuid not null references auth.users(id) on delete cascade,
  reason      text not null check (reason in ('expired','broken','duplicate','spam','other')),
  note        text check (note is null or length(note) <= 300),
  created_at  timestamptz not null default now(),
  unique (job_id, reported_by)
);

-- ---- RLS: lock base tables; access only through RPCs ----------------
alter table public.dw_members      enable row level security;
alter table public.dw_categories   enable row level security;
alter table public.dw_prep_entries enable row level security;
alter table public.dw_applications enable row level security;
alter table public.dw_shared_jobs  enable row level security;
alter table public.dw_job_reports  enable row level security;
revoke all on public.dw_members, public.dw_categories, public.dw_prep_entries,
              public.dw_applications, public.dw_shared_jobs, public.dw_job_reports
  from anon, authenticated;

-- =====================================================================
-- helpers
-- =====================================================================
create or replace function public.dw_day_streak(p_dates date[], p_anchor date)
returns int language plpgsql immutable set search_path = pg_catalog as $$
declare n int := 0; a date := p_anchor;
begin
  if p_dates is null or p_anchor is null then return 0; end if;
  while a = any(p_dates) loop n := n + 1; a := a - 1; end loop;
  return n;
end $$;

-- =====================================================================
-- registration + config
-- =====================================================================
create or replace function public.dw_register(p_timezone text default null)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare m public.dw_members%rowtype; tz text; d date;
begin
  if auth.uid() is null then raise exception 'Please log in with your AnalystWorld account.'; end if;
  select * into m from public.dw_members where user_id = auth.uid();
  if m.user_id is not null then
    return jsonb_build_object('registered', true, 'member_number', m.member_number, 'new', false);
  end if;
  tz := coalesce(nullif(btrim(p_timezone),''), 'Asia/Kolkata');
  if not exists (select 1 from pg_catalog.pg_timezone_names where name = tz) then tz := 'Asia/Kolkata'; end if;
  d := (now() at time zone tz)::date;
  insert into public.dw_members(user_id, timezone, start_date) values (auth.uid(), tz, d) returning * into m;
  insert into public.dw_categories(user_id, name, is_active, is_default, sort_order) values
    (auth.uid(),'Excel',true,true,1),
    (auth.uid(),'SQL',true,true,2),
    (auth.uid(),'Communication',true,true,3)
  on conflict do nothing;
  return jsonb_build_object('registered', true, 'member_number', m.member_number, 'new', true);
end $$;

create or replace function public.dw_public_config()
returns jsonb language sql stable security definer set search_path = pg_catalog, public, auth as $$
  select jsonb_build_object(
    'registration_open', true,
    'member_count', (select count(*) from public.dw_members),
    'spots_remaining', greatest(0, 500 - (select count(*) from public.dw_members)),
    'founding_cap', 500
  );
$$;

-- =====================================================================
-- applications
-- =====================================================================
create or replace function public.dw_add_application(p_company text, p_role text, p_source text default 'Other', p_url text default null, p_status text default 'applied')
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare m public.dw_members%rowtype; d date; a public.dw_applications%rowtype; st text; url text;
begin
  select * into m from public.dw_members where user_id = auth.uid();
  if m.user_id is null then raise exception 'Create your workspace first.'; end if;
  d := (now() at time zone m.timezone)::date;
  if btrim(coalesce(p_company,'')) = '' then raise exception 'Company is required.'; end if;
  if btrim(coalesce(p_role,''))    = '' then raise exception 'Role is required.'; end if;
  st := lower(coalesce(p_status,'applied')); if st not in ('saved','applied') then st := 'applied'; end if;
  url := nullif(btrim(coalesce(p_url,'')),'');
  if url is not null and url !~* '^https?://[^[:space:]]+$' then raise exception 'Enter a valid job URL (https://…).'; end if;
  insert into public.dw_applications(user_id, company, role, source, job_url, status, date_discovered, date_applied)
  values (auth.uid(), btrim(p_company), btrim(p_role), coalesce(nullif(btrim(p_source),''),'Other'), url, st, d,
          case when st = 'applied' then d else null end)
  returning * into a;
  return jsonb_build_object('ok', true, 'id', a.id, 'status', a.status);
end $$;

create or replace function public.dw_update_application(p_id uuid, p_status text default null, p_follow_up date default null, p_clear_follow_up boolean default false, p_notes text default null)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare m public.dw_members%rowtype; a public.dw_applications%rowtype; d date; st text;
begin
  select * into m from public.dw_members where user_id = auth.uid();
  if m.user_id is null then raise exception 'Create your workspace first.'; end if;
  d := (now() at time zone m.timezone)::date;
  select * into a from public.dw_applications where id = p_id and user_id = auth.uid();
  if a.id is null then raise exception 'Application not found.'; end if;
  st := case when p_status is null then a.status else lower(p_status) end;
  if st not in ('saved','applied','screening','interview','offer','rejected') then raise exception 'Invalid status.'; end if;
  update public.dw_applications set
    status         = st,
    date_applied   = case when st <> 'saved' and date_applied is null then d else date_applied end,
    response_at    = case when st in ('screening','interview','offer') and response_at is null then now() else response_at end,
    interview_at   = case when st in ('interview','offer') and interview_at is null then now() else interview_at end,
    follow_up_date = case when p_clear_follow_up then null when p_follow_up is not null then p_follow_up else follow_up_date end,
    notes          = coalesce(p_notes, notes),
    updated_at     = now()
  where id = p_id and user_id = auth.uid() returning * into a;
  return jsonb_build_object('ok', true, 'status', a.status);
end $$;

create or replace function public.dw_delete_application(p_id uuid)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
begin
  if auth.uid() is null then raise exception 'Please log in first.'; end if;
  delete from public.dw_applications where id = p_id and user_id = auth.uid();
  return jsonb_build_object('ok', true);
end $$;

-- =====================================================================
-- prep entries
-- =====================================================================
create or replace function public.dw_add_prep(p_category_id uuid, p_type text, p_topic text, p_url text default null, p_minutes int default null, p_notes text default null)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare m public.dw_members%rowtype; d date; e public.dw_prep_entries%rowtype; cat public.dw_categories%rowtype; url text; ty text;
begin
  select * into m from public.dw_members where user_id = auth.uid();
  if m.user_id is null then raise exception 'Create your workspace first.'; end if;
  d := (now() at time zone m.timezone)::date;
  select * into cat from public.dw_categories where id = p_category_id and user_id = auth.uid();
  if cat.id is null then raise exception 'Choose one of your skill categories.'; end if;
  ty := lower(coalesce(p_type,'practice')); if ty not in ('practice','learn') then raise exception 'Choose Practice or Learn.'; end if;
  if btrim(coalesce(p_topic,'')) = '' then raise exception 'Add what you worked on.'; end if;
  url := nullif(btrim(coalesce(p_url,'')),'');
  if url is not null and url !~* '^https?://[^[:space:]]+$' then raise exception 'Enter a valid resource URL (https://…).'; end if;
  insert into public.dw_prep_entries(user_id, category_id, entry_date, type, topic, resource_url, minutes, notes)
  values (auth.uid(), p_category_id, d, ty, btrim(p_topic), url,
          case when p_minutes is not null and p_minutes between 0 and 1440 then p_minutes else null end,
          nullif(btrim(coalesce(p_notes,'')),''))
  returning * into e;
  return jsonb_build_object('ok', true, 'id', e.id);
end $$;

create or replace function public.dw_delete_prep(p_id uuid)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
begin
  if auth.uid() is null then raise exception 'Please log in first.'; end if;
  delete from public.dw_prep_entries where id = p_id and user_id = auth.uid();
  return jsonb_build_object('ok', true);
end $$;

-- =====================================================================
-- categories
-- =====================================================================
create or replace function public.dw_add_category(p_name text)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare c public.dw_categories%rowtype; n text; cnt int; mx int;
begin
  if auth.uid() is null then raise exception 'Please log in first.'; end if;
  n := btrim(coalesce(p_name,''));
  if length(n) < 1 or length(n) > 40 then raise exception 'Enter a skill name (1–40 characters).'; end if;
  select count(*) into cnt from public.dw_categories where user_id = auth.uid();
  if cnt >= 14 then raise exception 'You can track up to 14 skills. Remove one first.'; end if;
  if exists (select 1 from public.dw_categories where user_id = auth.uid() and lower(btrim(name)) = lower(n)) then
    raise exception 'You already have that skill.';
  end if;
  select coalesce(max(sort_order),0)+1 into mx from public.dw_categories where user_id = auth.uid();
  insert into public.dw_categories(user_id, name, is_active, is_default, sort_order)
  values (auth.uid(), n, true, false, mx) returning * into c;
  return jsonb_build_object('ok', true, 'id', c.id, 'name', c.name);
end $$;

create or replace function public.dw_set_category_active(p_id uuid, p_active boolean)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
begin
  if auth.uid() is null then raise exception 'Please log in first.'; end if;
  update public.dw_categories set is_active = coalesce(p_active,true) where id = p_id and user_id = auth.uid();
  if not found then raise exception 'Skill not found.'; end if;
  return jsonb_build_object('ok', true);
end $$;

create or replace function public.dw_rename_category(p_id uuid, p_name text)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare n text;
begin
  if auth.uid() is null then raise exception 'Please log in first.'; end if;
  n := btrim(coalesce(p_name,''));
  if length(n) < 1 or length(n) > 40 then raise exception 'Enter a skill name (1–40 characters).'; end if;
  if exists (select 1 from public.dw_categories where user_id = auth.uid() and lower(btrim(name)) = lower(n) and id <> p_id) then
    raise exception 'You already have that skill.';
  end if;
  update public.dw_categories set name = n where id = p_id and user_id = auth.uid();
  if not found then raise exception 'Skill not found.'; end if;
  return jsonb_build_object('ok', true);
end $$;

create or replace function public.dw_delete_category(p_id uuid)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare c public.dw_categories%rowtype;
begin
  if auth.uid() is null then raise exception 'Please log in first.'; end if;
  select * into c from public.dw_categories where id = p_id and user_id = auth.uid();
  if c.id is null then raise exception 'Skill not found.'; end if;
  if c.is_default then raise exception 'Default skills can be deactivated but not deleted.'; end if;
  delete from public.dw_categories where id = p_id and user_id = auth.uid();
  return jsonb_build_object('ok', true);
end $$;

-- =====================================================================
-- community job board
-- =====================================================================
create or replace function public.dw_share_job(p_company text, p_role text, p_url text, p_source text default null, p_location text default null, p_work_mode text default null)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); k text; wm text; j public.dw_shared_jobs%rowtype;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  if btrim(coalesce(p_company,'')) = '' or btrim(coalesce(p_role,'')) = '' then raise exception 'Company and role are required.'; end if;
  if coalesce(p_url,'') !~* '^https?://[^[:space:]]+$' then raise exception 'Enter a valid job URL (https://…).'; end if;
  k := regexp_replace(lower(btrim(p_url)), '[#?].*$', '');
  k := regexp_replace(k, '/+$', '');
  wm := lower(nullif(btrim(coalesce(p_work_mode,'')),''));
  if wm is not null and wm not in ('remote','hybrid','onsite','unknown') then wm := 'unknown'; end if;
  select * into j from public.dw_shared_jobs where url_key = k;
  if j.id is not null then
    if j.status <> 'active' then update public.dw_shared_jobs set status='active', report_count=0 where id = j.id returning * into j; end if;
    return jsonb_build_object('ok', true, 'duplicate', true, 'id', j.id);
  end if;
  insert into public.dw_shared_jobs(shared_by, company, role, job_url, source, location, work_mode, url_key)
  values (uid, btrim(p_company), btrim(p_role), btrim(p_url),
          nullif(btrim(coalesce(p_source,'')),''), nullif(btrim(coalesce(p_location,'')),''), wm, k)
  returning * into j;
  return jsonb_build_object('ok', true, 'duplicate', false, 'id', j.id);
end $$;

create or replace function public.dw_report_job(p_job_id uuid, p_reason text, p_note text default null)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); rc int;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  if lower(coalesce(p_reason,'')) not in ('expired','broken','duplicate','spam','other') then raise exception 'Choose a valid reason.'; end if;
  if not exists (select 1 from public.dw_shared_jobs where id = p_job_id) then raise exception 'That opportunity no longer exists.'; end if;
  insert into public.dw_job_reports(job_id, reported_by, reason, note)
  values (p_job_id, uid, lower(p_reason), nullif(btrim(coalesce(p_note,'')),''))
  on conflict (job_id, reported_by) do update set reason = excluded.reason, note = excluded.note;
  update public.dw_shared_jobs set report_count = (select count(*) from public.dw_job_reports where job_id = p_job_id) where id = p_job_id returning report_count into rc;
  if rc >= 3 then update public.dw_shared_jobs set status = 'expired' where id = p_job_id and status = 'active'; end if;
  return jsonb_build_object('ok', true, 'reports', rc);
end $$;

create or replace function public.dw_community_feed(p_limit int default 30, p_offset int default 0, p_search text default null)
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); q text;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  p_limit  := greatest(1, least(60, coalesce(p_limit, 30)));
  p_offset := greatest(0, coalesce(p_offset, 0));
  q := nullif(btrim(coalesce(p_search,'')), '');
  return jsonb_build_object(
    'total', (select count(*) from public.dw_shared_jobs s where s.status='active'
                and (q is null or (s.company ilike '%'||q||'%' or s.role ilike '%'||q||'%' or coalesce(s.location,'') ilike '%'||q||'%'))),
    'jobs', coalesce((
      select jsonb_agg(jsonb_build_object(
               'id', s.id, 'company', s.company, 'role', s.role, 'job_url', s.job_url,
               'source', s.source, 'location', s.location, 'work_mode', s.work_mode,
               'shared_date', s.created_at::date, 'mine', s.shared_by = uid,
               'reported', exists (select 1 from public.dw_job_reports r where r.job_id = s.id and r.reported_by = uid)
             ) order by s.created_at desc)
      from (
        select * from public.dw_shared_jobs
        where status='active' and (q is null or (company ilike '%'||q||'%' or role ilike '%'||q||'%' or coalesce(location,'') ilike '%'||q||'%'))
        order by created_at desc limit p_limit offset p_offset
      ) s
    ), '[]'::jsonb)
  );
end $$;

-- =====================================================================
-- dashboard state (one call powers the whole workspace)
-- =====================================================================
create or replace function public.dw_get_state(p_days int default 7)
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth as $$
declare
  uid uuid := auth.uid();
  m public.dw_members%rowtype;
  tz text; today date; sd date; dayn int; rs date;
  cats jsonb := '[]'::jsonb; cat record;
  cdates date[]; canchor date; cstreak int;
  comp_dates date[]; canchor2 date; cur_streak int := 0; max_run int := 0; run int := 0; prev date; dt date; qualified boolean := false;
  res jsonb;
begin
  if uid is null then raise exception 'Please log in with your AnalystWorld account.'; end if;
  select * into m from public.dw_members where user_id = uid;
  if m.user_id is null then return jsonb_build_object('registered', false); end if;
  tz := m.timezone; today := (now() at time zone tz)::date; sd := m.start_date; dayn := (today - sd) + 1;
  p_days := greatest(1, least(90, coalesce(p_days, 7)));
  rs := today - (p_days - 1);

  -- per-category today count + streak (days with >=1 entry)
  for cat in select * from public.dw_categories where user_id = uid order by is_active desc, sort_order, lower(name) loop
    select array_agg(distinct entry_date) into cdates from public.dw_prep_entries where user_id = uid and category_id = cat.id;
    if cdates is not null and today = any(cdates) then canchor := today;
    elsif cdates is not null and (today-1) = any(cdates) then canchor := today-1;
    else canchor := null; end if;
    cstreak := public.dw_day_streak(cdates, canchor);
    cats := cats || jsonb_build_object(
      'id', cat.id, 'name', cat.name, 'is_active', cat.is_active, 'is_default', cat.is_default,
      'today_count', (select count(*) from public.dw_prep_entries where user_id=uid and category_id=cat.id and entry_date=today),
      'streak', cstreak
    );
  end loop;

  -- challenge: complete day = applied >= app_target AND prep >= prep_target
  select array_agg(d order by d) into comp_dates from (
    select dd::date d from generate_series(sd, today, interval '1 day') dd
    where (select count(*) from public.dw_applications a where a.user_id=uid and a.status<>'saved' and a.date_applied = dd::date) >= m.app_target
      and (select count(*) from public.dw_prep_entries  p where p.user_id=uid and p.entry_date   = dd::date) >= m.prep_target
  ) x;
  if comp_dates is not null and today = any(comp_dates) then canchor2 := today;
  elsif comp_dates is not null and (today-1) = any(comp_dates) then canchor2 := today-1;
  else canchor2 := null; end if;
  cur_streak := public.dw_day_streak(comp_dates, canchor2);
  if comp_dates is not null then
    prev := null;
    foreach dt in array comp_dates loop
      if prev is not null and dt = prev + 1 then run := run + 1; else run := 1; end if;
      if run > max_run then max_run := run; end if;
      prev := dt;
    end loop;
  end if;
  qualified := max_run >= 10;

  res := jsonb_build_object(
    'registered', true,
    'member', jsonb_build_object('number', m.member_number, 'is_founding', m.member_number <= 500,
                                 'start_date', sd, 'timezone', tz, 'day_number', dayn),
    'targets', jsonb_build_object('applications', m.app_target, 'prep', m.prep_target),
    'range_days', p_days,
    'today_date', today,
    'today', jsonb_build_object(
      'applications_applied', (select count(*) from public.dw_applications where user_id=uid and status<>'saved' and date_applied=today),
      'prep_total', (select count(*) from public.dw_prep_entries where user_id=uid and entry_date=today),
      'day_complete', coalesce(cur_streak > 0 and canchor2 = today, false)
    ),
    'categories', cats,
    'kpis', (
      select jsonb_build_object(
        'applications', count(*) filter (where status<>'saved' and date_applied between rs and today),
        'responses',    count(*) filter (where response_at is not null and date_applied between rs and today),
        'interviews',   count(*) filter (where interview_at is not null and date_applied between rs and today),
        'offers',       count(*) filter (where status='offer' and date_applied between rs and today),
        'saved',        count(*) filter (where status='saved')
      ) from public.dw_applications where user_id=uid
    ) || (
      select jsonb_build_object(
        'prep_sessions', count(*),
        'prep_practice', count(*) filter (where type='practice'),
        'prep_learn',    count(*) filter (where type='learn')
      ) from public.dw_prep_entries where user_id=uid and entry_date between rs and today
    ) || jsonb_build_object(
      'active_days', (select count(distinct d) from (
         select date_applied d from public.dw_applications where user_id=uid and status<>'saved' and date_applied between rs and today
         union select entry_date from public.dw_prep_entries where user_id=uid and entry_date between rs and today
      ) z where d is not null)
    ),
    'sources', coalesce((
      select jsonb_agg(jsonb_build_object('source', source, 'applied', applied, 'responses', responses, 'interviews', interviews) order by applied desc)
      from (
        select source,
          count(*) filter (where status<>'saved') applied,
          count(*) filter (where response_at is not null) responses,
          count(*) filter (where interview_at is not null) interviews
        from public.dw_applications
        where user_id=uid and status<>'saved' and date_applied between rs and today
        group by source
      ) s
    ), '[]'::jsonb),
    'prep_by_subject', coalesce((
      select jsonb_agg(jsonb_build_object('name', name, 'practice', practice, 'learn', learn, 'total', total) order by total desc)
      from (
        select c.name,
          count(*) filter (where p.type='practice') practice,
          count(*) filter (where p.type='learn') learn,
          count(*) total
        from public.dw_prep_entries p join public.dw_categories c on c.id=p.category_id
        where p.user_id=uid and p.entry_date between rs and today
        group by c.name
      ) q
    ), '[]'::jsonb),
    'streak', jsonb_build_object('current', cur_streak, 'max', max_run, 'qualified', qualified,
                                 'complete_days', coalesce(array_length(comp_dates,1),0), 'phase1_days', 10),
    'follow_ups', coalesce((
      select jsonb_agg(jsonb_build_object('id', id, 'company', company, 'role', role, 'follow_up_date', follow_up_date,
                                          'status', status, 'overdue', follow_up_date < today) order by follow_up_date)
      from public.dw_applications
      where user_id=uid and follow_up_date is not null and status not in ('offer','rejected') and follow_up_date <= today + 10
    ), '[]'::jsonb),
    'recent', coalesce((
      select jsonb_agg(r order by (r->>'at') desc) from (
        (select jsonb_build_object('kind','app','id',id,'at',created_at,'company',company,'role',role,'source',source,'status',status) r
           from public.dw_applications where user_id=uid order by created_at desc limit 12)
        union all
        (select jsonb_build_object('kind','prep','id',p.id,'at',p.created_at,'category',c.name,'type',p.type,'topic',p.topic) r
           from public.dw_prep_entries p join public.dw_categories c on c.id=p.category_id where p.user_id=uid order by p.created_at desc limit 12)
      ) u
    ), '[]'::jsonb),
    'consistency', coalesce((
      select jsonb_agg(jsonb_build_object('date', d, 'apps', apps, 'prep', prep) order by d)
      from (
        select dd::date d,
          (select count(*) from public.dw_applications a where a.user_id=uid and a.status<>'saved' and a.date_applied=dd::date) apps,
          (select count(*) from public.dw_prep_entries  p where p.user_id=uid and p.entry_date=dd::date) prep
        from generate_series(greatest(sd, today - (least(p_days,45)-1)), today, interval '1 day') dd
      ) cc
    ), '[]'::jsonb),
    'applications', coalesce((
      select jsonb_agg(jsonb_build_object('id',id,'company',company,'role',role,'source',source,'job_url',job_url,'status',status,
                                          'date_applied',date_applied,'follow_up_date',follow_up_date,'notes',notes,'created_at',created_at) order by created_at desc)
      from (select * from public.dw_applications where user_id=uid order by created_at desc limit 60) a2
    ), '[]'::jsonb),
    'today_prep', coalesce((
      select jsonb_agg(jsonb_build_object('id',p.id,'category_id',p.category_id,'category',c.name,'type',p.type,'topic',p.topic,
                                          'resource_url',p.resource_url,'created_at',p.created_at) order by p.created_at desc)
      from public.dw_prep_entries p join public.dw_categories c on c.id=p.category_id
      where p.user_id=uid and p.entry_date=today
    ), '[]'::jsonb)
  );
  return res;
end $$;

-- =====================================================================
-- grants: revoke from clients, then grant execute on RPCs only
-- =====================================================================
revoke all on function
  public.dw_day_streak(date[],date),
  public.dw_register(text), public.dw_public_config(),
  public.dw_add_application(text,text,text,text,text),
  public.dw_update_application(uuid,text,date,boolean,text),
  public.dw_delete_application(uuid),
  public.dw_add_prep(uuid,text,text,text,int,text), public.dw_delete_prep(uuid),
  public.dw_add_category(text), public.dw_set_category_active(uuid,boolean),
  public.dw_rename_category(uuid,text), public.dw_delete_category(uuid),
  public.dw_share_job(text,text,text,text,text,text), public.dw_report_job(uuid,text,text),
  public.dw_community_feed(int,int,text), public.dw_get_state(int)
  from public, anon, authenticated;

grant execute on function public.dw_public_config() to anon, authenticated;
grant execute on function
  public.dw_register(text),
  public.dw_add_application(text,text,text,text,text),
  public.dw_update_application(uuid,text,date,boolean,text),
  public.dw_delete_application(uuid),
  public.dw_add_prep(uuid,text,text,text,int,text), public.dw_delete_prep(uuid),
  public.dw_add_category(text), public.dw_set_category_active(uuid,boolean),
  public.dw_rename_category(uuid,text), public.dw_delete_category(uuid),
  public.dw_share_job(text,text,text,text,text,text), public.dw_report_job(uuid,text,text),
  public.dw_community_feed(int,int,text), public.dw_get_state(int)
  to authenticated;

commit;

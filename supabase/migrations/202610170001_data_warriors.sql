-- Data Warriors isolated schema/RPCs. Apply only after reviewing against the
-- linked Supabase project. No existing application table is altered.
begin;

create table if not exists public.dw_challenge_config (
  challenge_id text primary key default 'data-warriors-45',
  start_date date,
  registration_open boolean not null default false,
  phase1_days integer not null default 10 check (phase1_days between 1 and 45),
  challenge_days integer not null default 45 check (challenge_days between 1 and 365),
  timezone text not null default 'Asia/Kolkata',
  daily_deadline time not null default '23:59:59',
  targets jsonb not null default '{"phase1":{"applications":5,"sql":10,"excel":5,"recordings":2},"phase2":{"applications":15,"sql":10,"excel":5,"recordings":2}}'::jsonb,
  qualification_rule text not null default 'Complete every daily requirement on all 10 consecutive Phase 1 cohort days.',
  updated_at timestamptz not null default now(),
  constraint dw_timezone_valid check (timezone = any (array['Asia/Kolkata','UTC','Asia/Dubai','Europe/London','America/New_York']::text[])),
  constraint dw_targets_valid check (
    jsonb_typeof(targets)='object' and
    (targets #>> '{phase1,applications}')::int > 0 and
    (targets #>> '{phase1,sql}')::int > 0 and
    (targets #>> '{phase1,excel}')::int > 0 and
    (targets #>> '{phase1,recordings}')::int > 0 and
    (targets #>> '{phase2,applications}')::int > 0 and
    (targets #>> '{phase2,sql}')::int > 0 and
    (targets #>> '{phase2,excel}')::int > 0 and
    (targets #>> '{phase2,recordings}')::int > 0
  )
);
insert into public.dw_challenge_config (challenge_id) values ('data-warriors-45') on conflict (challenge_id) do nothing;

create table if not exists public.dw_registrations (
  id uuid primary key default gen_random_uuid(),
  challenge_id text not null references public.dw_challenge_config(challenge_id),
  user_id uuid not null references auth.users(id) on delete cascade,
  registered_at timestamptz not null default now(),
  unique (challenge_id,user_id)
);
create index if not exists dw_registrations_user_idx on public.dw_registrations(user_id);

create table if not exists public.dw_activity (
  id uuid primary key default gen_random_uuid(),
  registration_id uuid not null references public.dw_registrations(id) on delete cascade,
  activity_date date not null,
  activity_type text not null check (activity_type in ('application','excel','recording')),
  reference_key text not null,
  label text not null check (length(label) between 1 and 180),
  evidence text not null check (length(evidence) between 1 and 1000),
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (registration_id,activity_date,activity_type,reference_key)
);
create index if not exists dw_activity_day_idx on public.dw_activity(registration_id,activity_date,activity_type);

create table if not exists public.dw_daily_completions (
  id uuid primary key default gen_random_uuid(),
  registration_id uuid not null references public.dw_registrations(id) on delete cascade,
  challenge_date date not null,
  completed_at timestamptz not null default now(),
  evidence_snapshot jsonb not null,
  unique (registration_id,challenge_date)
);
create index if not exists dw_completion_day_idx on public.dw_daily_completions(registration_id,challenge_date);

alter table public.dw_challenge_config enable row level security;
alter table public.dw_registrations enable row level security;
alter table public.dw_activity enable row level security;
alter table public.dw_daily_completions enable row level security;
-- No direct client reads/writes: all state changes go through validated RPCs.
revoke all on public.dw_challenge_config, public.dw_registrations, public.dw_activity, public.dw_daily_completions from anon, authenticated;

create or replace function public.dw_is_admin()
returns boolean language sql stable security definer set search_path = pg_catalog, public, auth
as $$ select coalesce((select up.is_admin from public.user_profiles up where up.id=auth.uid()),false) $$;

create or replace function public.dw_public_config()
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth
as $$
declare c public.dw_challenge_config%rowtype;
begin
 select * into c from public.dw_challenge_config where challenge_id='data-warriors-45';
 return jsonb_build_object('registration_open', c.registration_open and c.start_date is not null, 'start_date', c.start_date,
   'phase1_days',c.phase1_days,'challenge_days',c.challenge_days,'timezone',c.timezone,
   'targets',c.targets,'daily_deadline',c.daily_deadline,'qualification_rule',c.qualification_rule,'is_admin',public.dw_is_admin());
end $$;

create or replace function public.dw_register()
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth
as $$
declare c public.dw_challenge_config%rowtype; r public.dw_registrations%rowtype; d date;
begin
 if auth.uid() is null then raise exception 'Please log in with your AnalystWorld account.'; end if;
 select * into c from public.dw_challenge_config where challenge_id='data-warriors-45' for share;
 if not c.registration_open or c.start_date is null then raise exception 'Registration is not open yet.'; end if;
 d := (now() at time zone c.timezone)::date;
 if d > c.start_date + c.challenge_days - 1 then raise exception 'This cohort registration has closed.'; end if;
 insert into public.dw_registrations(challenge_id,user_id) values ('data-warriors-45',auth.uid())
 on conflict (challenge_id,user_id) do update set user_id=excluded.user_id returning * into r;
 return jsonb_build_object('registered',true,'registration_id',r.id,'registered_at',r.registered_at,'start_date',c.start_date);
end $$;

create or replace function public.dw_log_activity(p_type text,p_label text,p_evidence text,p_company text default '',p_role text default '',p_url text default '',p_status text default '')
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth
as $$
declare c public.dw_challenge_config%rowtype; r public.dw_registrations%rowtype; d date; ky text; detail jsonb; act public.dw_activity%rowtype;
begin
 if auth.uid() is null then raise exception 'Please log in first.'; end if;
 select * into c from public.dw_challenge_config where challenge_id='data-warriors-45';
 if c.start_date is null then raise exception 'The challenge cohort has not been configured.'; end if;
 d := (now() at time zone c.timezone)::date;
 if d < c.start_date or d >= c.start_date+c.challenge_days then raise exception 'Today is outside the challenge window.'; end if;
 if (now() at time zone c.timezone)::time > c.daily_deadline then raise exception 'Today’s submission deadline has passed.'; end if;
 select * into r from public.dw_registrations where challenge_id='data-warriors-45' and user_id=auth.uid();
 if r.id is null then raise exception 'Register for Data Warriors first.'; end if;
 if p_type not in ('application','excel','recording') then raise exception 'Unsupported activity type.'; end if;
 if coalesce(length(trim(p_label)),0)=0 or length(p_label)>180 then raise exception 'Add a short activity title.'; end if;
 if coalesce(length(trim(p_evidence)),0)=0 or length(p_evidence)>1000 then raise exception 'Evidence is required (a note or shareable link).'; end if;
 detail := '{}'::jsonb;
 if p_type='application' then
   if coalesce(length(trim(p_company)),0)=0 or length(trim(p_company))>120 or coalesce(length(trim(p_role)),0)=0 or length(trim(p_role))>160 then raise exception 'Company and role are required.'; end if;
   if p_url !~* '^https://[^[:space:]]+$' or length(p_url)>1000 then raise exception 'Enter a valid HTTPS job posting URL.'; end if;
   if p_status not in ('applied','screening','interview','rejected','offer') then raise exception 'Choose a valid application status.'; end if;
   detail := jsonb_build_object('company',trim(p_company),'role',trim(p_role),'url',trim(p_url),'status',p_status);
   ky := lower(trim(p_url));
 elsif p_type='recording' then
   if p_evidence !~* '^https://[^[:space:]]+$' then raise exception 'Add a shareable HTTPS recording link.'; end if;
   ky := lower(trim(p_evidence));
 else
   ky := lower(trim(p_label)||'|'||trim(p_evidence));
 end if;
 insert into public.dw_activity(registration_id,activity_date,activity_type,reference_key,label,evidence,details)
 values(r.id,d,p_type,ky,trim(p_label),trim(p_evidence),detail)
 on conflict(registration_id,activity_date,activity_type,reference_key) do update set label=excluded.label,evidence=excluded.evidence,details=excluded.details
 returning * into act;
 return jsonb_build_object('saved',true,'activity_id',act.id,'activity_date',act.activity_date,'type',act.activity_type);
end $$;

create or replace function public.dw_get_my_state()
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth
as $$
declare c public.dw_challenge_config%rowtype; r public.dw_registrations%rowtype; d date; n int; ph int; tg jsonb; apps int; ex int; rec int; sq int; done int; phase1done int; streakn int; q boolean; deadline_at timestamp; anchor_day date;
begin
 if auth.uid() is null then raise exception 'Please log in with your AnalystWorld account.'; end if;
 select * into c from public.dw_challenge_config where challenge_id='data-warriors-45';
 select * into r from public.dw_registrations where challenge_id='data-warriors-45' and user_id=auth.uid();
 if r.id is null then return jsonb_build_object('registration',null); end if;
 if c.start_date is null then raise exception 'The challenge cohort start date is not configured.'; end if;
 d := (now() at time zone c.timezone)::date; n := d-c.start_date+1; ph := case when n>c.phase1_days and (select count(*) from public.dw_daily_completions where registration_id=r.id and challenge_date between c.start_date and c.start_date+c.phase1_days-1)=c.phase1_days then 2 else 1 end;
 tg := case when ph=2 then c.targets->'phase2' else c.targets->'phase1' end;
 select count(*) into apps from public.dw_activity where registration_id=r.id and activity_date=d and activity_type='application';
 select count(*) into ex from public.dw_activity where registration_id=r.id and activity_date=d and activity_type='excel';
 select count(*) into rec from public.dw_activity where registration_id=r.id and activity_date=d and activity_type='recording';
 select count(distinct question_id) into sq from public.user_progress where user_id=auth.uid() and solved_at >= (d::timestamp at time zone c.timezone) and solved_at < ((d+1)::timestamp at time zone c.timezone);
 select count(*) into done from public.dw_daily_completions where registration_id=r.id;
 select count(*) into phase1done from public.dw_daily_completions where registration_id=r.id and challenge_date between c.start_date and c.start_date+c.phase1_days-1;
 q := phase1done=c.phase1_days;
 deadline_at := d + c.daily_deadline;
 if exists(select 1 from public.dw_daily_completions where registration_id=r.id and challenge_date=d) then
   anchor_day:=d;
 elsif (now() at time zone c.timezone)::time<=c.daily_deadline and d>c.start_date then
   anchor_day:=d-1;
 else
   anchor_day:=null;
 end if;
 if anchor_day is null or anchor_day<c.start_date then
   streakn:=0;
 else
   select count(*) into streakn from generate_series(0,least(anchor_day-c.start_date,44)) g(i)
   where not exists (select 1 from generate_series(0,g.i) k(i)
     where not exists(select 1 from public.dw_daily_completions dc where dc.registration_id=r.id and dc.challenge_date=anchor_day-k.i));
 end if;
 return jsonb_build_object('registration',jsonb_build_object('id',r.id,'registered_at',r.registered_at), 'start_date',c.start_date,
  'today_date',d,'day_number',n,'challenge_days',c.challenge_days,'phase1_days',c.phase1_days,'phase',ph,'targets',tg,
  'today',jsonb_build_object('applications',apps,'sql',sq,'excel',ex,'recordings',rec,'completed',exists(select 1 from public.dw_daily_completions where registration_id=r.id and challenge_date=d)),
  'activities',coalesce((select jsonb_agg(jsonb_build_object('id',a.id,'date',a.activity_date,'type',a.activity_type,'label',a.label,'evidence',a.evidence,'details',a.details,'created_at',a.created_at) order by a.created_at desc) from (select * from public.dw_activity where registration_id=r.id order by created_at desc limit 50) a),'[]'::jsonb),
  'completed_days',done,'phase1_completed',phase1done,'qualified',q,'streak',streakn,'deadline',c.start_date+c.challenge_days-1,
  'daily_deadline',to_char(date '2000-01-01'+c.daily_deadline,'HH12:MI AM'),'timezone',c.timezone,'qualification_rule',c.qualification_rule,
  'closed',d>c.start_date+c.challenge_days-1,'can_submit',now()<=deadline_at at time zone c.timezone);
end $$;

create or replace function public.dw_update_application_status(p_activity_id uuid,p_status text)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth
as $$
declare r public.dw_registrations%rowtype; a public.dw_activity%rowtype;
begin
 if auth.uid() is null then raise exception 'Please log in first.'; end if;
 if p_status not in ('applied','screening','interview','rejected','offer') then raise exception 'Choose a valid application status.'; end if;
 select * into r from public.dw_registrations where challenge_id='data-warriors-45' and user_id=auth.uid();
 update public.dw_activity set details=jsonb_set(details,'{status}',to_jsonb(p_status),true)
 where id=p_activity_id and activity_type='application' and registration_id=r.id returning * into a;
 if a.id is null then raise exception 'Application not found.'; end if;
 return jsonb_build_object('updated',true,'status',p_status);
end $$;

create or replace function public.dw_complete_day()
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth
as $$
declare c public.dw_challenge_config%rowtype; r public.dw_registrations%rowtype; d date; n int; ph int; tg jsonb; apps int; ex int; rec int; sq int; s jsonb; item jsonb;
begin
 if auth.uid() is null then raise exception 'Please log in first.'; end if;
 select * into c from public.dw_challenge_config where challenge_id='data-warriors-45';
 select * into r from public.dw_registrations where challenge_id='data-warriors-45' and user_id=auth.uid();
 if r.id is null then raise exception 'Register for Data Warriors first.'; end if;
 d := (now() at time zone c.timezone)::date; n:=d-c.start_date+1;
 if n<1 or n>c.challenge_days then raise exception 'Today is outside the challenge window.'; end if;
 if (now() at time zone c.timezone)::time > c.daily_deadline then raise exception 'Today’s submission deadline has passed.'; end if;
 ph := case when n>c.phase1_days and (select count(*) from public.dw_daily_completions where registration_id=r.id and challenge_date between c.start_date and c.start_date+c.phase1_days-1)=c.phase1_days then 2 else 1 end;
 tg:=c.targets->case when ph=2 then 'phase2' else 'phase1' end;
 select count(*) into apps from public.dw_activity where registration_id=r.id and activity_date=d and activity_type='application';
 select count(*) into ex from public.dw_activity where registration_id=r.id and activity_date=d and activity_type='excel';
 select count(*) into rec from public.dw_activity where registration_id=r.id and activity_date=d and activity_type='recording';
 select count(distinct question_id) into sq from public.user_progress where user_id=auth.uid() and solved_at >= (d::timestamp at time zone c.timezone) and solved_at < ((d+1)::timestamp at time zone c.timezone);
 if apps<(tg->>'applications')::int or ex<(tg->>'excel')::int or rec<(tg->>'recordings')::int or sq<(tg->>'sql')::int then
   raise exception 'Targets incomplete: applications %, SQL %, Excel %, recordings %. Keep going, then check again.',apps,sq,ex,rec;
 end if;
 item:=jsonb_build_object('applications',apps,'sql',sq,'excel',ex,'recordings',rec);
 insert into public.dw_daily_completions(registration_id,challenge_date,evidence_snapshot) values(r.id,d,item)
 on conflict(registration_id,challenge_date) do nothing;
 return jsonb_build_object('completed',true,'challenge_date',d,'evidence',item);
end $$;

create or replace function public.dw_admin_update_config(p_start_date date,p_registration_open boolean,p_phase1_days integer default 10,p_challenge_days integer default 45,p_timezone text default 'Asia/Kolkata',p_daily_deadline time default '23:59:59',p_targets jsonb default null)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth
as $$
declare c public.dw_challenge_config%rowtype;
begin
 if auth.uid() is null or not public.dw_is_admin() then raise exception 'Administrator access required.'; end if;
 select * into c from public.dw_challenge_config where challenge_id='data-warriors-45' for update;
 if p_start_date is null then raise exception 'Set the official cohort start date before opening registration.'; end if;
 if p_phase1_days<1 or p_phase1_days>=p_challenge_days or p_challenge_days>365 then raise exception 'Invalid challenge durations.'; end if;
 if not exists(select 1 from pg_catalog.pg_timezone_names where name=p_timezone) then raise exception 'Choose a valid timezone.'; end if;
 if p_targets is not null and (jsonb_typeof(p_targets)<>'object' or coalesce((p_targets #>> '{phase1,applications}')::int,0)<1 or coalesce((p_targets #>> '{phase1,sql}')::int,0)<1 or coalesce((p_targets #>> '{phase1,excel}')::int,0)<1 or coalesce((p_targets #>> '{phase1,recordings}')::int,0)<1 or coalesce((p_targets #>> '{phase2,applications}')::int,0)<1 or coalesce((p_targets #>> '{phase2,sql}')::int,0)<1 or coalesce((p_targets #>> '{phase2,excel}')::int,0)<1 or coalesce((p_targets #>> '{phase2,recordings}')::int,0)<1) then raise exception 'All task targets must be positive integers.'; end if;
 if exists(select 1 from public.dw_registrations where challenge_id='data-warriors-45') and
   (p_start_date is distinct from c.start_date or p_phase1_days is distinct from c.phase1_days or p_challenge_days is distinct from c.challenge_days or p_timezone is distinct from c.timezone or p_daily_deadline is distinct from c.daily_deadline or coalesce(p_targets,c.targets) is distinct from c.targets) then
   raise exception 'Cohort rules are locked after registration begins. Only registration open/closed may be changed.';
 end if;
 update public.dw_challenge_config set start_date=p_start_date,registration_open=p_registration_open,phase1_days=p_phase1_days,challenge_days=p_challenge_days,timezone=p_timezone,daily_deadline=p_daily_deadline,targets=coalesce(p_targets,targets),updated_at=now()
 where challenge_id='data-warriors-45' returning * into c;
 return jsonb_build_object('updated',true,'start_date',c.start_date,'registration_open',c.registration_open);
end $$;

create or replace function public.dw_admin_participants()
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth
as $$
begin
 if auth.uid() is null or not public.dw_is_admin() then raise exception 'Administrator access required.'; end if;
 return coalesce((select jsonb_agg(jsonb_build_object('user_id',r.user_id,'name',coalesce(up.display_name,up.full_name,up.email),'email',up.email,'registered_at',r.registered_at,'completed_days',(select count(*) from public.dw_daily_completions d where d.registration_id=r.id),'phase1_complete',(select count(*) from public.dw_daily_completions d where d.registration_id=r.id and d.challenge_date between c.start_date and c.start_date+c.phase1_days-1)=c.phase1_days,'applications',(select count(*) from public.dw_activity a where a.registration_id=r.id and a.activity_type='application'),'interviews',(select count(*) from public.dw_activity a where a.registration_id=r.id and a.activity_type='application' and a.details->>'status'='interview'),'offers',(select count(*) from public.dw_activity a where a.registration_id=r.id and a.activity_type='application' and a.details->>'status'='offer')) order by r.registered_at desc) from public.dw_registrations r cross join public.dw_challenge_config c left join public.user_profiles up on up.id=r.user_id where r.challenge_id='data-warriors-45' and c.challenge_id='data-warriors-45'),'[]'::jsonb);
end $$;

revoke all on function public.dw_is_admin() from public, anon, authenticated;
revoke all on function public.dw_public_config() from public, anon, authenticated;
revoke all on function public.dw_register() from public, anon, authenticated;
revoke all on function public.dw_log_activity(text,text,text,text,text,text,text) from public, anon, authenticated;
revoke all on function public.dw_get_my_state() from public, anon, authenticated;
revoke all on function public.dw_complete_day() from public, anon, authenticated;
revoke all on function public.dw_update_application_status(uuid,text) from public, anon, authenticated;
revoke all on function public.dw_admin_update_config(date,boolean,integer,integer,text,time,jsonb) from public, anon, authenticated;
revoke all on function public.dw_admin_participants() from public, anon, authenticated;
grant execute on function public.dw_public_config() to anon, authenticated;
grant execute on function public.dw_register(), public.dw_log_activity(text,text,text,text,text,text,text), public.dw_get_my_state(), public.dw_complete_day(), public.dw_update_application_status(uuid,text) to authenticated;
grant execute on function public.dw_admin_update_config(date,boolean,integer,integer,text,time,jsonb), public.dw_admin_participants() to authenticated;

commit;

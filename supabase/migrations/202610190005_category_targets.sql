-- =====================================================================
-- Data Warriors — per-subject daily target.
-- Communication needs only 1 log/day; other subjects need 5. The daily
-- completion rule now checks each active subject against its own target.
-- =====================================================================
begin;

alter table public.dw_categories
  add column if not exists daily_target int not null default 5 check (daily_target between 1 and 50);

-- Communication (default or user-added) only needs 1/day
update public.dw_categories set daily_target = 1 where lower(btrim(name)) = 'communication';

-- new members: seed Communication with a target of 1
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
  insert into public.dw_categories(user_id, name, is_active, is_default, sort_order, daily_target) values
    (auth.uid(),'Excel',true,true,1,5),
    (auth.uid(),'SQL',true,true,2,5),
    (auth.uid(),'Communication',true,true,3,1)
  on conflict do nothing;
  return jsonb_build_object('registered', true, 'member_number', m.member_number, 'new', true);
end $$;

-- challenge calc (admin / per-member) — use each subject's own daily_target
create or replace function public.dw_calc_challenge(p_uid uuid)
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth as $$
declare
  m public.dw_members%rowtype; today date; sd date; active_cats int := 0;
  comp_dates date[]; canchor2 date; cur int := 0; mx int := 0; run int := 0; prev date; dt date; last_missed date;
begin
  select * into m from public.dw_members where user_id = p_uid;
  if m.user_id is null then return jsonb_build_object('day',0,'best',0,'complete_days',0,'today_complete',false,'last_missed',null); end if;
  today := (now() at time zone m.timezone)::date; sd := m.start_date;
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

-- dashboard state — per-subject target in completeness + categories payload
create or replace function public.dw_get_state(p_days int default 7)
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth as $$
declare
  uid uuid := auth.uid();
  m public.dw_members%rowtype;
  tz text; today date; sd date; dayn int; rs date;
  cats jsonb := '[]'::jsonb; cat record;
  cdates date[]; canchor date; cstreak int;
  comp_dates date[]; canchor2 date; cur_streak int := 0; max_run int := 0; run int := 0; prev date; dt date; qualified boolean := false;
  active_cats int := 0; last_missed date; rec jsonb;
  res jsonb;
begin
  if uid is null then raise exception 'Please log in with your AnalystWorld account.'; end if;
  select * into m from public.dw_members where user_id = uid;
  if m.user_id is null then return jsonb_build_object('registered', false); end if;
  tz := m.timezone; today := (now() at time zone tz)::date; sd := m.start_date; dayn := (today - sd) + 1;
  p_days := greatest(1, least(90, coalesce(p_days, 7)));
  rs := today - (p_days - 1);

  select count(*) into active_cats from public.dw_categories where user_id = uid and is_active;

  for cat in select * from public.dw_categories where user_id = uid order by is_active desc, sort_order, lower(name) loop
    select array_agg(distinct entry_date) into cdates from public.dw_prep_entries where user_id = uid and category_id = cat.id;
    if cdates is not null and today = any(cdates) then canchor := today;
    elsif cdates is not null and (today-1) = any(cdates) then canchor := today-1;
    else canchor := null; end if;
    cstreak := public.dw_day_streak(cdates, canchor);
    cats := cats || jsonb_build_object(
      'id', cat.id, 'name', cat.name, 'is_active', cat.is_active, 'is_default', cat.is_default,
      'target', cat.daily_target,
      'today_count', (select count(*) from public.dw_prep_entries where user_id=uid and category_id=cat.id and entry_date=today),
      'streak', cstreak
    );
  end loop;

  select array_agg(d order by d) into comp_dates from (
    select dd::date d from generate_series(sd, today, interval '1 day') dd
    where exists (select 1 from public.dw_streak_grace g where g.user_id=uid and g.day=dd::date)
       or (
         active_cats > 0
         and (select count(*) from public.dw_applications a where a.user_id=uid and a.status<>'saved' and a.date_applied=dd::date) >= m.app_target
         and not exists (
           select 1 from public.dw_categories c
           where c.user_id=uid and c.is_active
             and (select count(*) from public.dw_prep_entries p where p.user_id=uid and p.category_id=c.id and p.entry_date=dd::date) < c.daily_target
         )
       )
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
  qualified := cur_streak >= 10;

  select max(d) into last_missed from (
    select dd::date d from generate_series(sd, today - 1, interval '1 day') dd
  ) z where not (d = any(coalesce(comp_dates, '{}'::date[])));

  if last_missed is not null then
    rec := (select to_jsonb(q) from (
      select missed_day, status, created_at,
             (now() - created_at < interval '24 hours') as within_24h
      from public.dw_recovery_requests
      where user_id = uid and missed_day = last_missed
      order by created_at desc limit 1
    ) q);
  end if;

  res := jsonb_build_object(
    'registered', true,
    'member', jsonb_build_object('number', m.member_number, 'is_founding', m.member_number <= 500,
                                 'start_date', sd, 'timezone', tz, 'day_number', dayn),
    'targets', jsonb_build_object('applications', m.app_target, 'prep', m.prep_target, 'active_subjects', active_cats),
    'range_days', p_days,
    'today_date', today,
    'today', jsonb_build_object(
      'applications_applied', (select count(*) from public.dw_applications where user_id=uid and status<>'saved' and date_applied=today),
      'prep_total', (select count(*) from public.dw_prep_entries where user_id=uid and entry_date=today),
      'day_complete', coalesce(cur_streak > 0 and canchor2 = today, false)
    ),
    'challenge', jsonb_build_object(
      'day', cur_streak, 'target', 45, 'phase1', 10, 'qualified', qualified, 'best', max_run,
      'today_complete', coalesce(cur_streak > 0 and canchor2 = today, false),
      'restart', (cur_streak = 0 and max_run > 0),
      'complete_days', coalesce(array_length(comp_dates,1),0),
      'last_missed', last_missed, 'recovery', rec
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

commit;

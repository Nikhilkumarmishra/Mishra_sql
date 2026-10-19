-- =====================================================================
-- Data Warriors — admin dashboard backend.
-- Owner-only, read/moderation RPCs gated by user_profiles.is_admin.
-- Reuses the dw_* tables; adds a reusable per-member challenge calc.
-- =====================================================================
begin;

-- who is calling an admin?
create or replace function public.dw_is_admin()
returns boolean language sql stable security definer set search_path = pg_catalog, public, auth as $$
  select coalesce((select is_admin from public.user_profiles where id = auth.uid()), false);
$$;

-- per-member challenge calc (same rules as dw_get_state) — internal, admin use
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
             and (select count(*) from public.dw_prep_entries p where p.user_id=p_uid and p.category_id=c.id and p.entry_date=dd::date) < m.prep_target
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

-- lightweight identity probe for the workspace (show the Admin link)
create or replace function public.dw_whoami()
returns jsonb language sql stable security definer set search_path = pg_catalog, public, auth as $$
  select jsonb_build_object('is_admin', public.dw_is_admin());
$$;

-- overview metrics
create or replace function public.dw_admin_overview()
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth as $$
begin
  if not public.dw_is_admin() then raise exception 'Admins only.'; end if;
  return jsonb_build_object(
    'members',           (select count(*) from public.dw_members),
    'profiles_complete', (select count(*) from public.dw_members where profile_completed_at is not null),
    'apps_total',        (select count(*) from public.dw_applications where status<>'saved'),
    'apps_today',        (select count(*) from public.dw_applications a join public.dw_members m on m.user_id=a.user_id
                            where a.status<>'saved' and a.date_applied=(now() at time zone m.timezone)::date),
    'prep_total',        (select count(*) from public.dw_prep_entries),
    'prep_today',        (select count(*) from public.dw_prep_entries p join public.dw_members m on m.user_id=p.user_id
                            where p.entry_date=(now() at time zone m.timezone)::date),
    'active_today',      (select count(distinct uid) from (
                            select a.user_id uid from public.dw_applications a join public.dw_members m on m.user_id=a.user_id
                              where a.status<>'saved' and a.date_applied=(now() at time zone m.timezone)::date
                            union
                            select p.user_id from public.dw_prep_entries p join public.dw_members m on m.user_id=p.user_id
                              where p.entry_date=(now() at time zone m.timezone)::date) z),
    'community_active',  (select count(*) from public.dw_shared_jobs where status='active'),
    'pending_recovery',  (select count(*) from public.dw_recovery_requests where status='pending'),
    'reported_jobs',     (select count(*) from public.dw_shared_jobs where report_count>0 and status='active')
  );
end $$;

-- members list with profile + activity + live challenge day
create or replace function public.dw_admin_members(p_search text default null, p_limit int default 60, p_offset int default 0)
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth as $$
declare q text; arr jsonb := '[]'::jsonb; r record; ch jsonb;
begin
  if not public.dw_is_admin() then raise exception 'Admins only.'; end if;
  q := nullif(btrim(coalesce(p_search,'')), '');
  p_limit := greatest(1, least(200, coalesce(p_limit,60)));
  p_offset := greatest(0, coalesce(p_offset,0));
  for r in
    select m.user_id, m.member_number, m.created_at, m.timezone,
           m.full_name, m.target_role, m.education, m.passout_year,
           m.linkedin_url, m.resume_url, m.github_url, m.profile_completed_at,
           up.email, up.full_name as acct_name, up.last_seen_at,
           (select count(*) from public.dw_applications a where a.user_id=m.user_id and a.status<>'saved') apps,
           (select count(*) from public.dw_prep_entries p where p.user_id=m.user_id) prep,
           (select count(*) from public.dw_categories c where c.user_id=m.user_id and c.is_active) active_cats
    from public.dw_members m
    left join public.user_profiles up on up.id = m.user_id
    where q is null or (coalesce(m.full_name,'') ilike '%'||q||'%' or coalesce(up.full_name,'') ilike '%'||q||'%'
                        or coalesce(up.email,'') ilike '%'||q||'%' or coalesce(m.target_role,'') ilike '%'||q||'%')
    order by m.member_number
    limit p_limit offset p_offset
  loop
    ch := public.dw_calc_challenge(r.user_id);
    arr := arr || jsonb_build_object(
      'member_number', r.member_number,
      'name', coalesce(nullif(btrim(coalesce(r.full_name,'')),''), r.acct_name, split_part(coalesce(r.email,''),'@',1)),
      'email', r.email, 'target_role', r.target_role, 'education', r.education, 'passout_year', r.passout_year,
      'linkedin_url', r.linkedin_url, 'resume_url', r.resume_url, 'github_url', r.github_url,
      'profile_complete', r.profile_completed_at is not null,
      'joined', r.created_at, 'last_seen', r.last_seen_at, 'timezone', r.timezone,
      'apps', r.apps, 'prep', r.prep, 'active_subjects', r.active_cats,
      'day', (ch->>'day')::int, 'best', (ch->>'best')::int, 'complete_days', (ch->>'complete_days')::int,
      'today_complete', (ch->>'today_complete')::boolean
    );
  end loop;
  return jsonb_build_object('total', (select count(*) from public.dw_members), 'members', arr);
end $$;

-- continuation (recovery) requests
create or replace function public.dw_admin_recovery_requests(p_status text default 'pending')
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth as $$
declare st text;
begin
  if not public.dw_is_admin() then raise exception 'Admins only.'; end if;
  st := lower(coalesce(p_status,'pending'));
  return coalesce((
    select jsonb_agg(jsonb_build_object(
      'id', rr.id, 'missed_day', rr.missed_day, 'reason', rr.reason, 'status', rr.status, 'created_at', rr.created_at,
      'within_24h', (now() - rr.created_at < interval '24 hours'),
      'member_number', m.member_number,
      'name', coalesce(nullif(btrim(coalesce(m.full_name,'')),''), up.full_name, split_part(coalesce(up.email,''),'@',1)),
      'email', up.email, 'target_role', m.target_role,
      'current_day', (public.dw_calc_challenge(rr.user_id)->>'day')::int
    ) order by rr.created_at)
    from public.dw_recovery_requests rr
    join public.dw_members m on m.user_id = rr.user_id
    left join public.user_profiles up on up.id = rr.user_id
    where (st = 'all' or rr.status = st)
  ), '[]'::jsonb);
end $$;

-- approve (grant one-day grace) or reject a continuation request
create or replace function public.dw_admin_decide_recovery(p_id uuid, p_approve boolean)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare rr public.dw_recovery_requests%rowtype;
begin
  if not public.dw_is_admin() then raise exception 'Admins only.'; end if;
  select * into rr from public.dw_recovery_requests where id = p_id;
  if rr.id is null then raise exception 'Request not found.'; end if;
  if coalesce(p_approve,false) then
    insert into public.dw_streak_grace(user_id, day, reason, granted_by)
    values (rr.user_id, rr.missed_day, 'Admin-approved continuation', auth.uid())
    on conflict (user_id, day) do nothing;
    update public.dw_recovery_requests set status='approved', decided_by=auth.uid(), decided_at=now() where id=p_id;
  else
    update public.dw_recovery_requests set status='rejected', decided_by=auth.uid(), decided_at=now() where id=p_id;
  end if;
  return jsonb_build_object('ok', true, 'status', case when coalesce(p_approve,false) then 'approved' else 'rejected' end);
end $$;

-- community moderation
create or replace function public.dw_admin_reported_jobs()
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth as $$
begin
  if not public.dw_is_admin() then raise exception 'Admins only.'; end if;
  return coalesce((
    select jsonb_agg(jsonb_build_object(
      'id', s.id, 'company', s.company, 'role', s.role, 'job_url', s.job_url, 'url_key', s.url_key,
      'status', s.status, 'report_count', s.report_count, 'created_at', s.created_at,
      'reasons', (select jsonb_agg(distinct r.reason) from public.dw_job_reports r where r.job_id=s.id)
    ) order by s.report_count desc, s.created_at desc)
    from public.dw_shared_jobs s where s.report_count > 0 or s.status <> 'active'
  ), '[]'::jsonb);
end $$;

create or replace function public.dw_admin_set_job_status(p_id uuid, p_status text)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare st text;
begin
  if not public.dw_is_admin() then raise exception 'Admins only.'; end if;
  st := lower(coalesce(p_status,''));
  if st not in ('active','expired','removed') then raise exception 'Invalid status.'; end if;
  update public.dw_shared_jobs set status=st, report_count = case when st='active' then 0 else report_count end where id=p_id;
  if not found then raise exception 'Job not found.'; end if;
  return jsonb_build_object('ok', true);
end $$;

-- grants: lock down, then expose
revoke all on function
  public.dw_is_admin(), public.dw_calc_challenge(uuid), public.dw_whoami(),
  public.dw_admin_overview(), public.dw_admin_members(text,int,int),
  public.dw_admin_recovery_requests(text), public.dw_admin_decide_recovery(uuid,boolean),
  public.dw_admin_reported_jobs(), public.dw_admin_set_job_status(uuid,text)
  from public, anon, authenticated;

grant execute on function
  public.dw_whoami(),
  public.dw_admin_overview(), public.dw_admin_members(text,int,int),
  public.dw_admin_recovery_requests(text), public.dw_admin_decide_recovery(uuid,boolean),
  public.dw_admin_reported_jobs(), public.dw_admin_set_job_status(uuid,text)
  to authenticated;

commit;

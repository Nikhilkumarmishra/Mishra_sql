-- =====================================================================
-- Data Warriors — admin certificate controls.
-- Surface certificate state in the members list + overview, and let an
-- admin issue or revoke a member's Data Warrior certificate.
-- =====================================================================
begin;

-- overview: add claimed-certificate count
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
    'reported_jobs',     (select count(*) from public.dw_shared_jobs where report_count>0 and status='active'),
    'certs_claimed',     (select count(*) from public.dw_members where certificate_claimed_at is not null)
  );
end $$;

-- members: add certificate claimed state + serial
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
           m.certificate_claimed_at, m.certificate_serial,
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
      'today_complete', (ch->>'today_complete')::boolean,
      'cert_claimed', r.certificate_claimed_at is not null,
      'cert_claimed_at', r.certificate_claimed_at,
      'cert_serial', r.certificate_serial
    );
  end loop;
  return jsonb_build_object('total', (select count(*) from public.dw_members), 'members', arr);
end $$;

-- issue or revoke a member's certificate (admin override)
create or replace function public.dw_admin_set_certificate(p_member_number bigint, p_grant boolean)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare m public.dw_members%rowtype; serial text;
begin
  if not public.dw_is_admin() then raise exception 'Admins only.'; end if;
  select * into m from public.dw_members where member_number = p_member_number;
  if m.user_id is null then raise exception 'Member not found.'; end if;
  if coalesce(p_grant,false) then
    serial := coalesce(m.certificate_serial, 'DW-' || lpad(m.member_number::text, 4, '0'));
    update public.dw_members
      set certificate_claimed_at = coalesce(certificate_claimed_at, now()), certificate_serial = serial
      where member_number = p_member_number;
    return jsonb_build_object('ok', true, 'claimed', true, 'serial', serial);
  else
    update public.dw_members set certificate_claimed_at = null, certificate_serial = null where member_number = p_member_number;
    return jsonb_build_object('ok', true, 'claimed', false);
  end if;
end $$;

revoke all on function public.dw_admin_set_certificate(bigint, boolean) from public, anon, authenticated;
grant execute on function public.dw_admin_set_certificate(bigint, boolean) to authenticated;

commit;

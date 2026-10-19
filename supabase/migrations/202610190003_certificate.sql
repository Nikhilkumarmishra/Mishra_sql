-- =====================================================================
-- Data Warriors — "Data Warrior" certificate.
-- Awarded for completing the 45-day challenge (ever reached a 45-day
-- streak). Members claim it once; it carries their name, the date, and
-- a credential serial (DW-<member#>). Shown blurred/locked until earned.
-- =====================================================================
begin;

alter table public.dw_members
  add column if not exists certificate_claimed_at timestamptz,
  add column if not exists certificate_serial text;

create or replace function public.dw_claim_certificate()
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); m public.dw_members%rowtype; ch jsonb; best int; serial text;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  select * into m from public.dw_members where user_id = uid;
  if m.user_id is null then raise exception 'Create your workspace first.'; end if;
  ch := public.dw_calc_challenge(uid); best := coalesce((ch->>'best')::int, 0);
  if best < 45 then raise exception 'Finish the 45-day challenge to claim your certificate.'; end if;
  if m.certificate_claimed_at is not null then
    return jsonb_build_object('ok', true, 'already', true, 'serial', m.certificate_serial, 'claimed_at', m.certificate_claimed_at);
  end if;
  serial := 'DW-' || lpad(m.member_number::text, 4, '0');
  update public.dw_members set certificate_claimed_at = now(), certificate_serial = serial where user_id = uid;
  return jsonb_build_object('ok', true, 'already', false, 'serial', serial, 'claimed_at', now());
end $$;

-- extend profile read with certificate state + eligibility (via challenge calc)
create or replace function public.dw_get_profile()
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); m public.dw_members%rowtype; ch jsonb;
begin
  select * into m from public.dw_members where user_id = uid;
  if m.user_id is null then return jsonb_build_object('complete', false); end if;
  ch := public.dw_calc_challenge(uid);
  return jsonb_build_object(
    'complete', m.profile_completed_at is not null,
    'full_name', m.full_name, 'target_role', m.target_role, 'education', m.education,
    'passout_year', m.passout_year, 'linkedin_url', m.linkedin_url,
    'resume_url', m.resume_url, 'github_url', m.github_url,
    'member_number', m.member_number,
    'certificate', jsonb_build_object(
      'eligible',   coalesce((ch->>'best')::int, 0) >= 45,
      'best',       coalesce((ch->>'best')::int, 0),
      'day',        coalesce((ch->>'day')::int, 0),
      'target',     45,
      'claimed_at', m.certificate_claimed_at,
      'serial',     m.certificate_serial
    )
  );
end $$;

revoke all on function public.dw_claim_certificate() from public, anon, authenticated;
grant execute on function public.dw_claim_certificate() to authenticated;

commit;

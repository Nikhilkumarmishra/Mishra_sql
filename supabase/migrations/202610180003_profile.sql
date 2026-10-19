-- =====================================================================
-- Data Warriors — member profile (collected after signup, before the
-- first log entry). Additive columns on dw_members + save/read RPCs.
-- =====================================================================
begin;

alter table public.dw_members
  add column if not exists full_name            text,
  add column if not exists github_url           text,
  add column if not exists linkedin_url         text,
  add column if not exists resume_url           text,
  add column if not exists education            text,
  add column if not exists passout_year         int,
  add column if not exists target_role          text,
  add column if not exists profile_completed_at timestamptz;

create or replace function public.dw_save_profile(
  p_full_name text, p_target_role text, p_education text, p_passout_year int,
  p_linkedin text, p_resume text, p_github text default null)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare m public.dw_members%rowtype; ln text; rs text; gh text; yr int;
begin
  if auth.uid() is null then raise exception 'Please log in first.'; end if;
  select * into m from public.dw_members where user_id = auth.uid();
  if m.user_id is null then raise exception 'Create your workspace first.'; end if;
  if length(btrim(coalesce(p_full_name,''))) < 2 then raise exception 'Please add your name.'; end if;
  if btrim(coalesce(p_target_role,'')) = '' then raise exception 'Choose the role you are targeting.'; end if;
  if btrim(coalesce(p_education,''))   = '' then raise exception 'Add your qualification.'; end if;
  yr := p_passout_year;
  if yr is null or yr < 1980 or yr > 2035 then raise exception 'Choose a valid passout year.'; end if;
  ln := nullif(btrim(coalesce(p_linkedin,'')),'');
  if ln is null then raise exception 'Add your LinkedIn profile link.'; end if;
  if ln !~* '^https?://' then ln := 'https://' || regexp_replace(ln, '^/+', ''); end if;
  if ln !~* '^https?://[^[:space:]]+$' then raise exception 'Enter a valid LinkedIn URL.'; end if;
  rs := nullif(btrim(coalesce(p_resume,'')),'');
  if rs is null then raise exception 'Add your resume link (Google Drive, public).'; end if;
  if rs !~* '^https?://' then rs := 'https://' || regexp_replace(rs, '^/+', ''); end if;
  if rs !~* '^https?://[^[:space:]]+$' then raise exception 'Enter a valid resume URL.'; end if;
  gh := nullif(btrim(coalesce(p_github,'')),'');
  if gh is not null then
    if gh !~* '^https?://' then gh := 'https://' || regexp_replace(gh, '^/+', ''); end if;
    if gh !~* '^https?://[^[:space:]]+$' then gh := null; end if;
  end if;
  update public.dw_members set
    full_name = btrim(p_full_name), target_role = btrim(p_target_role), education = btrim(p_education),
    passout_year = yr, linkedin_url = ln, resume_url = rs, github_url = gh,
    profile_completed_at = coalesce(profile_completed_at, now())
  where user_id = auth.uid();
  return jsonb_build_object('ok', true);
end $$;

create or replace function public.dw_get_profile()
returns jsonb language sql stable security definer set search_path = pg_catalog, public, auth as $$
  select coalesce((
    select jsonb_build_object(
      'complete', m.profile_completed_at is not null,
      'full_name', m.full_name, 'target_role', m.target_role, 'education', m.education,
      'passout_year', m.passout_year, 'linkedin_url', m.linkedin_url,
      'resume_url', m.resume_url, 'github_url', m.github_url
    ) from public.dw_members m where m.user_id = auth.uid()
  ), jsonb_build_object('complete', false));
$$;

revoke all on function public.dw_save_profile(text,text,text,int,text,text,text) from public, anon, authenticated;
revoke all on function public.dw_get_profile() from public, anon, authenticated;
grant execute on function public.dw_save_profile(text,text,text,int,text,text,text), public.dw_get_profile() to authenticated;

commit;

-- =====================================================================
-- Data Warriors — community feed becomes a living, aggregated board.
-- The feed is built from every logged application that has a URL (across
-- all members) PLUS explicit shared posts, deduped by a normalized URL and
-- anonymized (identity/status never exposed). Reports now key on the URL.
-- Additive/compatible: only dw_* objects changed.
-- =====================================================================
begin;

-- reports now reference a normalized url (a feed "job" == a url), not a row
drop function if exists public.dw_report_job(uuid, text, text);
drop function if exists public.dw_community_feed(int, int, text);
drop table if exists public.dw_job_reports cascade;

create table public.dw_job_reports (
  id          uuid primary key default gen_random_uuid(),
  url_key     text not null,
  reported_by uuid not null references auth.users(id) on delete cascade,
  reason      text not null check (reason in ('expired','broken','duplicate','spam','other')),
  created_at  timestamptz not null default now(),
  unique (url_key, reported_by)
);
create index if not exists dw_job_reports_url on public.dw_job_reports(url_key);
alter table public.dw_job_reports enable row level security;
revoke all on public.dw_job_reports from anon, authenticated;

-- normalize a url to a dedupe key (strip scheme-casing, query, hash, trailing slash)
create or replace function public.dw_url_key(p_url text)
returns text language sql immutable set search_path = pg_catalog as $$
  select regexp_replace(regexp_replace(lower(btrim(coalesce(p_url,''))), '[#?].*$', ''), '/+$', '')
$$;

-- aggregated, anonymized, date-filterable community feed
create or replace function public.dw_community_feed(p_days int default 0, p_search text default null, p_limit int default 40, p_offset int default 0)
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); q text; since timestamptz; res jsonb;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  p_limit := greatest(1, least(60, coalesce(p_limit, 40)));
  p_offset := greatest(0, coalesce(p_offset, 0));
  q := nullif(btrim(coalesce(p_search,'')), '');
  since := case when coalesce(p_days,0) > 0 then now() - make_interval(days => p_days) else null end;

  with raw as (
    select public.dw_url_key(a.job_url) k, a.job_url, a.company, a.role, a.source,
           null::text location, null::text work_mode, a.created_at, a.user_id member
    from public.dw_applications a
    where a.job_url is not null and btrim(a.job_url) <> ''
    union all
    select public.dw_url_key(s.job_url) k, s.job_url, s.company, s.role, s.source,
           s.location, s.work_mode, s.created_at, s.shared_by member
    from public.dw_shared_jobs s
    where s.status = 'active'
  ),
  agg as (
    select k,
      (array_agg(job_url order by created_at desc))[1] job_url,
      (array_agg(company order by created_at desc))[1] company,
      (array_agg(role    order by created_at desc))[1] role,
      (array_agg(source  order by created_at desc))[1] source,
      max(location) location, max(work_mode) work_mode,
      max(created_at) last_at, count(distinct member) members,
      bool_or(member = uid) mine
    from raw where k <> '' group by k
  ),
  vis as (
    select * from agg a
    where (select count(*) from public.dw_job_reports r where r.url_key = a.k) < 3
      and (since is null or a.last_at >= since)
      and (q is null or a.company ilike '%'||q||'%' or a.role ilike '%'||q||'%' or coalesce(a.location,'') ilike '%'||q||'%')
  )
  select jsonb_build_object(
    'total', (select count(*) from vis),
    'jobs', coalesce((
      select jsonb_agg(jsonb_build_object(
               'url_key', k, 'company', company, 'role', role, 'job_url', job_url,
               'source', source, 'location', location, 'work_mode', work_mode,
               'last_at', last_at, 'members', members, 'mine', mine,
               'reported', exists (select 1 from public.dw_job_reports r where r.url_key = v.k and r.reported_by = uid)
             ) order by last_at desc)
      from (select * from vis order by last_at desc limit p_limit offset p_offset) v
    ), '[]'::jsonb)
  ) into res;
  return res;
end $$;

create or replace function public.dw_report_job(p_url_key text, p_reason text default 'expired')
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); rc int; k text; rs text;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  k := nullif(btrim(coalesce(p_url_key,'')), '');
  if k is null then raise exception 'Nothing to report.'; end if;
  rs := lower(coalesce(p_reason,'expired'));
  if rs not in ('expired','broken','duplicate','spam','other') then rs := 'expired'; end if;
  insert into public.dw_job_reports(url_key, reported_by, reason)
  values (k, uid, rs)
  on conflict (url_key, reported_by) do update set reason = excluded.reason;
  select count(*) into rc from public.dw_job_reports where url_key = k;
  if rc >= 3 then update public.dw_shared_jobs set status='expired' where public.dw_url_key(job_url) = k and status='active'; end if;
  return jsonb_build_object('ok', true, 'reports', rc);
end $$;

revoke all on function public.dw_url_key(text) from public, anon, authenticated;
revoke all on function public.dw_community_feed(int,text,int,int) from public, anon, authenticated;
revoke all on function public.dw_report_job(text,text) from public, anon, authenticated;
grant execute on function public.dw_community_feed(int,text,int,int), public.dw_report_job(text,text) to authenticated;

commit;

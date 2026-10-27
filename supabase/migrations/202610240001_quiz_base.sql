-- =====================================================================
-- AnalystWorld Quizz — base schema (Phase B).
--
-- A standalone, live Kahoot-style classroom quiz product. Everything is
-- additive and quiz_-prefixed; it touches no existing table, column, RPC
-- or publication membership beyond ADDING quiz_ tables to the (currently
-- empty) supabase_realtime publication.
--
-- Security model (same house pattern as Data Warriors):
--   * RLS is enabled on every quiz_ table and privileges revoked from
--     anon/authenticated by default (deny-all).
--   * All writes and every sensitive read go through SECURITY DEFINER
--     RPCs added in this and later phase migrations.
--   * Two tables are deliberately exposed for Supabase Realtime, which
--     honours RLS: quiz_sessions (no secrets — pin is a join code) is
--     readable by everyone for active games so all clients flip together;
--     quiz_participants is readable only by the session's host (for the
--     projector lobby list) and never by anon, so participant tokens stay
--     private. Question text is delivered per-state by RPC, and the
--     answer key (quiz_answer_key) has no grant and no policy at all —
--     only SECURITY DEFINER scoring RPCs can read it.
-- =====================================================================
begin;

-- ── hosts: source tracking only, keyed to the existing auth user ─────
create table if not exists public.quiz_hosts (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  source      text,
  first_seen  timestamptz not null default now(),
  last_active timestamptz not null default now()
);

-- ── quizzes (owned by a host) ────────────────────────────────────────
create table if not exists public.quiz_quizzes (
  id            uuid primary key default gen_random_uuid(),
  owner         uuid not null references auth.users(id) on delete cascade,
  title         text not null check (length(btrim(title)) between 1 and 160),
  description   text check (description is null or length(description) <= 2000),
  cover         text check (cover is null or length(cover) <= 16),
  default_timer int  not null default 20 check (default_timer between 5 and 300),
  status        text not null default 'draft' check (status in ('draft','published','archived')),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create index if not exists quiz_quizzes_owner on public.quiz_quizzes (owner, updated_at desc);

-- ── questions (4 options; no correct answer stored here) ─────────────
create table if not exists public.quiz_questions (
  id            uuid primary key default gen_random_uuid(),
  quiz_id       uuid not null references public.quiz_quizzes(id) on delete cascade,
  idx           int  not null check (idx >= 0),
  text          text not null check (length(btrim(text)) between 1 and 500),
  option_a      text not null check (length(btrim(option_a)) between 1 and 200),
  option_b      text not null check (length(btrim(option_b)) between 1 and 200),
  option_c      text not null check (length(btrim(option_c)) between 1 and 200),
  option_d      text not null check (length(btrim(option_d)) between 1 and 200),
  time_override int  check (time_override is null or time_override between 5 and 300),
  created_at    timestamptz not null default now(),
  unique (quiz_id, idx)
);
create index if not exists quiz_questions_quiz on public.quiz_questions (quiz_id, idx);

-- ── answer key (RLS deny-all; readable only inside definer RPCs) ─────
create table if not exists public.quiz_answer_key (
  question_id   uuid primary key references public.quiz_questions(id) on delete cascade,
  correct_option text not null check (correct_option in ('A','B','C','D')),
  explanation   text check (explanation is null or length(explanation) <= 1000)
);

-- ── live sessions ────────────────────────────────────────────────────
create table if not exists public.quiz_sessions (
  id                uuid primary key default gen_random_uuid(),
  quiz_id           uuid not null references public.quiz_quizzes(id) on delete cascade,
  host_id           uuid not null references auth.users(id) on delete cascade,
  pin               text not null check (pin ~ '^[0-9]{6}$'),
  state             text not null default 'LOBBY'
                      check (state in ('LOBBY','QUESTION_ACTIVE','QUESTION_RESULTS','LEADERBOARD','COMPLETED')),
  current_q         int  not null default -1,
  q_count           int  not null default 0,
  q_started_at      timestamptz,
  q_duration        int,
  participant_count int  not null default 0,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  ended_at          timestamptz
);
-- a pin is unique only among games that are still live
create unique index if not exists quiz_sessions_active_pin
  on public.quiz_sessions (pin) where state <> 'COMPLETED';
create index if not exists quiz_sessions_host on public.quiz_sessions (host_id, created_at desc);

-- ── participants (token is a private reconnect secret) ───────────────
create table if not exists public.quiz_participants (
  id               uuid primary key default gen_random_uuid(),
  session_id       uuid not null references public.quiz_sessions(id) on delete cascade,
  token            text not null,
  display_name     text not null check (length(btrim(display_name)) between 1 and 24),
  score            int  not null default 0,
  correct_count    int  not null default 0,
  total_time_ms    bigint not null default 0,
  connection_state text not null default 'online' check (connection_state in ('online','offline','kicked')),
  joined_at        timestamptz not null default now(),
  last_seen        timestamptz not null default now(),
  unique (session_id, token)
);
create unique index if not exists quiz_participants_name
  on public.quiz_participants (session_id, lower(display_name));
create index if not exists quiz_participants_session on public.quiz_participants (session_id);

-- ── answers (one scored row per participant per question) ────────────
create table if not exists public.quiz_answers (
  id                 uuid primary key default gen_random_uuid(),
  session_id         uuid not null references public.quiz_sessions(id) on delete cascade,
  participant_id     uuid not null references public.quiz_participants(id) on delete cascade,
  question_id        uuid not null references public.quiz_questions(id) on delete cascade,
  option             text not null check (option in ('A','B','C','D')),
  is_correct         boolean not null default false,
  points             int not null default 0,
  elapsed_ms         int not null default 0,
  server_received_at timestamptz not null default now(),
  unique (participant_id, question_id)
);
create index if not exists quiz_answers_session_q on public.quiz_answers (session_id, question_id);
create index if not exists quiz_answers_participant on public.quiz_answers (participant_id);

-- ── RLS: enable everywhere, deny-all by default ──────────────────────
alter table public.quiz_hosts        enable row level security;
alter table public.quiz_quizzes      enable row level security;
alter table public.quiz_questions    enable row level security;
alter table public.quiz_answer_key   enable row level security;
alter table public.quiz_sessions     enable row level security;
alter table public.quiz_participants enable row level security;
alter table public.quiz_answers      enable row level security;

revoke all on public.quiz_hosts, public.quiz_quizzes, public.quiz_questions,
              public.quiz_answer_key, public.quiz_sessions, public.quiz_participants,
              public.quiz_answers
  from anon, authenticated;

-- ── Realtime exposure (grant + policy both required under RLS) ───────
-- quiz_sessions: every client reads active sessions so screens flip together.
grant select on public.quiz_sessions to anon, authenticated;
create policy quiz_sessions_read_active on public.quiz_sessions
  for select to anon, authenticated
  using (state <> 'COMPLETED');

-- quiz_participants: only the owning host reads the row (lobby projector list).
grant select on public.quiz_participants to authenticated;
create policy quiz_participants_host_read on public.quiz_participants
  for select to authenticated
  using (exists (select 1 from public.quiz_sessions s
                 where s.id = quiz_participants.session_id and s.host_id = auth.uid()));

-- Realtime needs the full row to evaluate RLS on changes.
alter table public.quiz_sessions     replica identity full;
alter table public.quiz_participants replica identity full;
alter publication supabase_realtime add table public.quiz_sessions;
alter publication supabase_realtime add table public.quiz_participants;

-- ── Phase B RPC: record / refresh a host's source tracking ───────────
create or replace function public.quiz_touch_host(p_source text default null)
returns jsonb language plpgsql security definer set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); existed boolean;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  select true into existed from public.quiz_hosts where user_id = uid;
  insert into public.quiz_hosts(user_id, source)
  values (uid, nullif(btrim(coalesce(p_source,'')),''))
  on conflict (user_id) do update set last_active = now();
  return jsonb_build_object('ok', true, 'new_host', coalesce(existed,false) = false);
end $$;

revoke all on function public.quiz_touch_host(text) from public, anon, authenticated;
grant execute on function public.quiz_touch_host(text) to authenticated;

commit;

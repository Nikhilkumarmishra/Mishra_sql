-- =====================================================================
-- AnalystWorld Quizz — Lobby / live-session RPCs (Phase D).
--
-- Host: start a session (unique 6-digit PIN), read the lobby, kick a
-- player, end the session, and begin the game. Participants (anon): join
-- by PIN with a private reconnect token, and sync (heartbeat + detect a
-- kick). State transitions and PIN allocation are server-authoritative.
-- Additive, quiz_-prefixed, same SECURITY DEFINER house pattern.
-- =====================================================================
begin;

-- internal: assert caller owns the session, return its row
create or replace function public.quiz_session_owned(p_session_id uuid)
returns public.quiz_sessions language plpgsql stable security definer
set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); s public.quiz_sessions%rowtype;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  select * into s from public.quiz_sessions where id = p_session_id;
  if s.id is null then raise exception 'Session not found.'; end if;
  if s.host_id <> uid then raise exception 'That session isn''t yours.'; end if;
  return s;
end $$;

-- ── host: start a live session with a unique 6-digit PIN ─────────────
create or replace function public.quiz_start_session(p_quiz_id uuid)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); q public.quiz_quizzes%rowtype;
        v_pin text; sid uuid; qc int; attempts int := 0;
begin
  q := public.quiz_owned(p_quiz_id);               -- ownership + existence
  select count(*) into qc from public.quiz_questions where quiz_id = p_quiz_id;
  if qc < 1 then raise exception 'Add some questions before you host.'; end if;

  -- close out any still-live sessions for this quiz (frees their PINs)
  update public.quiz_sessions set state = 'COMPLETED', ended_at = now()
    where quiz_id = p_quiz_id and host_id = uid and state <> 'COMPLETED';

  loop
    v_pin := lpad((floor(random() * 1000000))::int::text, 6, '0');
    begin
      insert into public.quiz_sessions(quiz_id, host_id, pin, state, current_q, q_count)
      values (p_quiz_id, uid, v_pin, 'LOBBY', -1, qc)
      returning id into sid;
      exit;
    exception when unique_violation then
      attempts := attempts + 1;
      if attempts > 50 then raise exception 'Couldn''t allocate a game PIN — please try again.'; end if;
    end;
  end loop;

  insert into public.quiz_hosts(user_id, source) values (uid, 'quizzes_host')
    on conflict (user_id) do update set last_active = now();

  return jsonb_build_object('ok', true, 'session_id', sid, 'pin', v_pin,
    'q_count', qc, 'title', q.title);
end $$;

-- ── participant (anon): join by PIN, or reconnect with a token ───────
create or replace function public.quiz_join(p_pin text, p_name text, p_token text default null)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare s public.quiz_sessions%rowtype; p public.quiz_participants%rowtype;
        v_token text; v_name text; v_title text;
begin
  select * into s from public.quiz_sessions
    where pin = p_pin and state <> 'COMPLETED' order by created_at desc limit 1;
  if s.id is null then raise exception 'That game PIN isn''t active right now.'; end if;
  select title into v_title from public.quiz_quizzes where id = s.quiz_id;

  -- reconnect by token works in any live state
  if p_token is not null and length(p_token) > 0 then
    select * into p from public.quiz_participants where session_id = s.id and token = p_token;
    if p.id is not null then
      if p.connection_state = 'kicked' then raise exception 'You were removed from this game.'; end if;
      update public.quiz_participants set connection_state = 'online', last_seen = now() where id = p.id;
      return jsonb_build_object('ok', true, 'reconnected', true, 'session_id', s.id,
        'participant_id', p.id, 'token', p.token, 'name', p.display_name, 'score', p.score,
        'state', s.state, 'title', v_title);
    end if;
  end if;

  -- a brand-new join is only allowed while the game is still in the lobby
  if s.state <> 'LOBBY' then raise exception 'This game has already started — ask your host to let you in.'; end if;
  v_name := btrim(coalesce(p_name, ''));
  if length(v_name) < 1 then raise exception 'Pick a nickname.'; end if;
  v_name := left(v_name, 24);
  if exists (select 1 from public.quiz_participants
             where session_id = s.id and lower(display_name) = lower(v_name)) then
    raise exception 'That nickname is taken — try another.';
  end if;

  -- 64 hex chars of randomness from two core v4 UUIDs (no pgcrypto dependency)
  v_token := replace(gen_random_uuid()::text, '-', '') || replace(gen_random_uuid()::text, '-', '');
  insert into public.quiz_participants(session_id, token, display_name)
    values (s.id, v_token, v_name) returning * into p;
  update public.quiz_sessions set participant_count = participant_count + 1, updated_at = now()
    where id = s.id;

  return jsonb_build_object('ok', true, 'reconnected', false, 'session_id', s.id,
    'participant_id', p.id, 'token', v_token, 'name', v_name, 'score', 0,
    'state', 'LOBBY', 'title', v_title);
end $$;

-- ── participant (anon): heartbeat + state read (also detects a kick) ─
create or replace function public.quiz_sync(p_session_id uuid, p_token text)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare s public.quiz_sessions%rowtype; p public.quiz_participants%rowtype;
begin
  select * into s from public.quiz_sessions where id = p_session_id;
  if s.id is null then raise exception 'Session not found.'; end if;
  select * into p from public.quiz_participants where session_id = p_session_id and token = p_token;
  if p.id is null then
    return jsonb_build_object('ok', true, 'found', false, 'session_state', s.state);
  end if;
  if p.connection_state <> 'kicked' then
    update public.quiz_participants set last_seen = now(), connection_state = 'online' where id = p.id;
  end if;
  return jsonb_build_object('ok', true, 'found', true, 'connection_state', p.connection_state,
    'session_state', s.state, 'current_q', s.current_q, 'participant_count', s.participant_count,
    'name', p.display_name, 'score', p.score);
end $$;

-- ── host: lobby snapshot (session + non-kicked participants) ─────────
create or replace function public.quiz_lobby(p_session_id uuid)
returns jsonb language plpgsql stable security definer
set search_path = pg_catalog, public, auth as $$
declare s public.quiz_sessions%rowtype; ppl jsonb; v_title text;
begin
  s := public.quiz_session_owned(p_session_id);
  select title into v_title from public.quiz_quizzes where id = s.quiz_id;
  select coalesce(jsonb_agg(x order by x.joined_at), '[]'::jsonb) into ppl
  from (
    select id, display_name as name, score, connection_state, joined_at
    from public.quiz_participants
    where session_id = p_session_id and connection_state <> 'kicked'
  ) x;
  return jsonb_build_object('ok', true, 'title', v_title,
    'session', jsonb_build_object('id', s.id, 'pin', s.pin, 'state', s.state,
      'current_q', s.current_q, 'q_count', s.q_count, 'participant_count', s.participant_count),
    'participants', ppl);
end $$;

-- ── host: kick a participant ─────────────────────────────────────────
create or replace function public.quiz_kick(p_session_id uuid, p_participant_id uuid)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare s public.quiz_sessions%rowtype; n int;
begin
  s := public.quiz_session_owned(p_session_id);
  update public.quiz_participants set connection_state = 'kicked'
    where id = p_participant_id and session_id = p_session_id and connection_state <> 'kicked';
  get diagnostics n = row_count;
  if n > 0 then
    update public.quiz_sessions set participant_count = greatest(participant_count - 1, 0), updated_at = now()
      where id = p_session_id;
  end if;
  return jsonb_build_object('ok', true, 'kicked', n > 0);
end $$;

-- ── host: begin the game (LOBBY -> first question) ───────────────────
-- Minimal transition so lobby->live Realtime sync is usable now; the
-- full question display + scoring loop is built in Phase E on top of this.
create or replace function public.quiz_start_game(p_session_id uuid)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare s public.quiz_sessions%rowtype; dur int; q0 public.quiz_questions%rowtype; deft int;
begin
  s := public.quiz_session_owned(p_session_id);
  if s.state <> 'LOBBY' then raise exception 'The game has already started.'; end if;
  if s.participant_count < 1 then raise exception 'Wait for at least one player to join.'; end if;
  select * into q0 from public.quiz_questions where quiz_id = s.quiz_id and idx = 0;
  select default_timer into deft from public.quiz_quizzes where id = s.quiz_id;
  dur := coalesce(q0.time_override, deft, 20);
  update public.quiz_sessions
    set state = 'QUESTION_ACTIVE', current_q = 0, q_started_at = now(), q_duration = dur, updated_at = now()
    where id = p_session_id;
  return jsonb_build_object('ok', true, 'state', 'QUESTION_ACTIVE', 'current_q', 0, 'duration', dur);
end $$;

-- ── host: end the session ────────────────────────────────────────────
create or replace function public.quiz_end_session(p_session_id uuid)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare s public.quiz_sessions%rowtype;
begin
  s := public.quiz_session_owned(p_session_id);
  update public.quiz_sessions set state = 'COMPLETED', ended_at = now(), updated_at = now()
    where id = p_session_id;
  return jsonb_build_object('ok', true);
end $$;

-- ── grants ───────────────────────────────────────────────────────────
revoke all on function public.quiz_session_owned(uuid)        from public, anon, authenticated;
revoke all on function public.quiz_start_session(uuid)        from public, anon, authenticated;
revoke all on function public.quiz_join(text,text,text)       from public, anon, authenticated;
revoke all on function public.quiz_sync(uuid,text)            from public, anon, authenticated;
revoke all on function public.quiz_lobby(uuid)                from public, anon, authenticated;
revoke all on function public.quiz_kick(uuid,uuid)            from public, anon, authenticated;
revoke all on function public.quiz_start_game(uuid)           from public, anon, authenticated;
revoke all on function public.quiz_end_session(uuid)          from public, anon, authenticated;

grant execute on function public.quiz_start_session(uuid)     to authenticated;
grant execute on function public.quiz_lobby(uuid)             to authenticated;
grant execute on function public.quiz_kick(uuid,uuid)         to authenticated;
grant execute on function public.quiz_start_game(uuid)        to authenticated;
grant execute on function public.quiz_end_session(uuid)       to authenticated;
grant execute on function public.quiz_join(text,text,text)    to anon, authenticated;
grant execute on function public.quiz_sync(uuid,text)         to anon, authenticated;

commit;

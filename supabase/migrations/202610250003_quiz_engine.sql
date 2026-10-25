-- =====================================================================
-- AnalystWorld Quizz — live engine (Phase E).
--
-- Server-authoritative question flow, timing and scoring:
--   * quiz_submit_answer  — anon; validates the deadline with now() vs
--     q_started_at + q_duration, scores deterministically, locks one
--     answer per participant per question. Correctness is NOT returned
--     to the player (answer secrecy) — it's stored and revealed later.
--   * quiz_next           — host; drives the state machine
--     ACTIVE -> RESULTS -> LEADERBOARD -> (next ACTIVE | COMPLETED).
--   * quiz_question       — anon; the current question WITHOUT the correct
--     option while it's live, plus server clock for the countdown.
--   * quiz_results        — reveal + answer distribution AFTER the question
--     closes (the live tally during a question is host-only).
--   * quiz_leaderboard    — ranked standings with deterministic tie-breaks.
-- Additive, quiz_-prefixed, same SECURITY DEFINER house pattern.
-- =====================================================================
begin;

-- helper: current question id of a session (null if none / lobby)
create or replace function public.quiz_current_qid(s public.quiz_sessions)
returns uuid language sql stable security definer
set search_path = pg_catalog, public, auth as $$
  select id from public.quiz_questions
  where quiz_id = s.quiz_id and idx = s.current_q;
$$;

-- ── participant (anon): submit an answer (scored, locked, deadline-checked)
create or replace function public.quiz_submit_answer(
  p_session_id uuid, p_token text, p_question_id uuid, p_option text)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare
  s public.quiz_sessions%rowtype; pt public.quiz_participants%rowtype;
  qid uuid; correct text; deadline timestamptz; dur_ms numeric; elapsed_ms int;
  is_corr boolean; pts int; n int;
begin
  select * into s from public.quiz_sessions where id = p_session_id;
  if s.id is null then raise exception 'Session not found.'; end if;
  if s.state <> 'QUESTION_ACTIVE' then raise exception 'The question isn''t open.'; end if;
  select * into pt from public.quiz_participants where session_id = p_session_id and token = p_token;
  if pt.id is null then raise exception 'You''re not in this game.'; end if;
  if pt.connection_state = 'kicked' then raise exception 'You were removed from this game.'; end if;

  qid := public.quiz_current_qid(s);
  if qid is null or qid <> p_question_id then raise exception 'That question has moved on.'; end if;
  if upper(coalesce(p_option,'')) not in ('A','B','C','D') then raise exception 'Pick an option.'; end if;

  dur_ms   := greatest(coalesce(s.q_duration, 20), 1) * 1000.0;
  deadline := s.q_started_at + make_interval(secs => coalesce(s.q_duration, 20));
  -- small network grace; elapsed is still clamped so scoring stays fair
  if now() > deadline + interval '0.8 second' then raise exception 'Time''s up!'; end if;
  elapsed_ms := greatest(0, least(dur_ms, extract(epoch from (now() - s.q_started_at)) * 1000.0))::int;

  select correct_option into correct from public.quiz_answer_key where question_id = qid;
  is_corr := (upper(p_option) = correct);
  pts := case when is_corr
              then 1000 + round(500 * greatest(0, 1 - elapsed_ms::numeric / dur_ms))::int
              else 0 end;

  insert into public.quiz_answers(session_id, participant_id, question_id, option, is_correct, points, elapsed_ms)
  values (p_session_id, pt.id, qid, upper(p_option), is_corr, pts, elapsed_ms)
  on conflict (participant_id, question_id) do nothing;
  get diagnostics n = row_count;
  if n = 0 then raise exception 'You already locked in an answer.'; end if;

  update public.quiz_participants
    set score = score + pts,
        correct_count = correct_count + (case when is_corr then 1 else 0 end),
        total_time_ms = total_time_ms + elapsed_ms,
        last_seen = now()
  where id = pt.id;

  -- deliberately no correctness in the response (revealed at RESULTS)
  return jsonb_build_object('ok', true, 'received', true, 'option', upper(p_option));
end $$;

-- ── host: advance the state machine ──────────────────────────────────
create or replace function public.quiz_next(p_session_id uuid)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare s public.quiz_sessions%rowtype; nq int; dur int; deft int; q public.quiz_questions%rowtype;
begin
  s := public.quiz_session_owned(p_session_id);
  if s.state = 'QUESTION_ACTIVE' then
    update public.quiz_sessions set state = 'QUESTION_RESULTS', updated_at = now() where id = p_session_id;
    return jsonb_build_object('ok', true, 'state', 'QUESTION_RESULTS', 'current_q', s.current_q);

  elsif s.state = 'QUESTION_RESULTS' then
    update public.quiz_sessions set state = 'LEADERBOARD', updated_at = now() where id = p_session_id;
    return jsonb_build_object('ok', true, 'state', 'LEADERBOARD', 'current_q', s.current_q);

  elsif s.state = 'LEADERBOARD' then
    nq := s.current_q + 1;
    if nq < s.q_count then
      select * into q from public.quiz_questions where quiz_id = s.quiz_id and idx = nq;
      select default_timer into deft from public.quiz_quizzes where id = s.quiz_id;
      dur := coalesce(q.time_override, deft, 20);
      update public.quiz_sessions
        set state = 'QUESTION_ACTIVE', current_q = nq, q_started_at = now(), q_duration = dur, updated_at = now()
        where id = p_session_id;
      return jsonb_build_object('ok', true, 'state', 'QUESTION_ACTIVE', 'current_q', nq, 'duration', dur);
    else
      update public.quiz_sessions set state = 'COMPLETED', ended_at = now(), updated_at = now() where id = p_session_id;
      return jsonb_build_object('ok', true, 'state', 'COMPLETED');
    end if;

  elsif s.state = 'LOBBY' then
    raise exception 'Start the game first.';
  else
    raise exception 'The game is already over.';
  end if;
end $$;

-- ── anon: current question (no correct option while live) ────────────
create or replace function public.quiz_question(p_session_id uuid, p_token text default null)
returns jsonb language plpgsql stable security definer
set search_path = pg_catalog, public, auth as $$
declare s public.quiz_sessions%rowtype; q public.quiz_questions%rowtype;
        ans public.quiz_answers%rowtype; answered boolean := false; your_opt text;
begin
  select * into s from public.quiz_sessions where id = p_session_id;
  if s.id is null then raise exception 'Session not found.'; end if;
  if s.state not in ('QUESTION_ACTIVE', 'QUESTION_RESULTS') then
    return jsonb_build_object('ok', true, 'state', s.state);
  end if;
  select * into q from public.quiz_questions where quiz_id = s.quiz_id and idx = s.current_q;
  if p_token is not null then
    select a.* into ans from public.quiz_answers a
      join public.quiz_participants p on p.id = a.participant_id
      where p.session_id = p_session_id and p.token = p_token and a.question_id = q.id;
    if ans.id is not null then answered := true; your_opt := ans.option; end if;
  end if;
  return jsonb_build_object('ok', true, 'state', s.state,
    'question_id', q.id, 'idx', s.current_q, 'q_count', s.q_count,
    'text', q.text, 'a', q.option_a, 'b', q.option_b, 'c', q.option_c, 'd', q.option_d,
    'q_started_at', s.q_started_at, 'q_duration', s.q_duration, 'server_now', now(),
    'answered', answered, 'your_option', your_opt);
end $$;

-- ── anon/host: results for the current question ──────────────────────
-- During an ACTIVE question only the host sees the live tally; the reveal
-- (correct option + explanation + per-player outcome) is withheld until the
-- question closes.
create or replace function public.quiz_results(p_session_id uuid, p_token text default null)
returns jsonb language plpgsql stable security definer
set search_path = pg_catalog, public, auth as $$
declare s public.quiz_sessions%rowtype; qid uuid; is_host boolean; reveal boolean;
        counts jsonb; total_ans int; res jsonb; correct text; expl text; a2 int;
        pt public.quiz_participants%rowtype; ans public.quiz_answers%rowtype; your_rank int;
begin
  select * into s from public.quiz_sessions where id = p_session_id;
  if s.id is null then raise exception 'Session not found.'; end if;
  qid := public.quiz_current_qid(s);
  is_host := (auth.uid() is not null and auth.uid() = s.host_id);
  reveal  := s.state in ('QUESTION_RESULTS', 'LEADERBOARD', 'COMPLETED');

  if s.state = 'QUESTION_ACTIVE' and not is_host then
    select count(*) into a2 from public.quiz_answers a join public.quiz_participants p on p.id = a.participant_id
      where p.session_id = p_session_id and p.token = coalesce(p_token,'') and a.question_id = qid;
    return jsonb_build_object('ok', true, 'state', s.state, 'answered', a2 > 0,
      'total_players', s.participant_count);
  end if;

  select jsonb_build_object(
      'A', count(*) filter (where option = 'A'),
      'B', count(*) filter (where option = 'B'),
      'C', count(*) filter (where option = 'C'),
      'D', count(*) filter (where option = 'D')),
    count(*)
  into counts, total_ans
  from public.quiz_answers where question_id = qid;

  res := jsonb_build_object('ok', true, 'state', s.state, 'idx', s.current_q, 'q_count', s.q_count,
    'counts', counts, 'total_answered', coalesce(total_ans,0), 'total_players', s.participant_count);

  if reveal then
    select correct_option, explanation into correct, expl from public.quiz_answer_key where question_id = qid;
    res := res || jsonb_build_object('correct_option', correct, 'explanation', expl);
  end if;

  if p_token is not null then
    select * into pt from public.quiz_participants where session_id = p_session_id and token = p_token;
    if pt.id is not null then
      select * into ans from public.quiz_answers where participant_id = pt.id and question_id = qid;
      select 1 + count(*) into your_rank from public.quiz_participants o
        where o.session_id = p_session_id and o.connection_state <> 'kicked'
          and (o.score, o.correct_count, -o.total_time_ms) > (pt.score, pt.correct_count, -pt.total_time_ms);
      res := res || jsonb_build_object('you', jsonb_build_object(
        'name', pt.display_name, 'score', pt.score, 'rank', your_rank,
        'answered', ans.id is not null,
        'option', ans.option,
        'was_correct', case when reveal then ans.is_correct else null end,
        'points_earned', case when reveal then coalesce(ans.points,0) else null end));
    end if;
  end if;

  return res;
end $$;

-- ── anon/host: leaderboard (deterministic tie-breaks) ────────────────
create or replace function public.quiz_leaderboard(p_session_id uuid, p_token text default null)
returns jsonb language plpgsql stable security definer
set search_path = pg_catalog, public, auth as $$
declare s public.quiz_sessions%rowtype; top jsonb; total int; you jsonb; pt public.quiz_participants%rowtype; your_rank int;
begin
  select * into s from public.quiz_sessions where id = p_session_id;
  if s.id is null then raise exception 'Session not found.'; end if;

  select coalesce(jsonb_agg(jsonb_build_object('rank', rnk, 'name', display_name, 'score', score) order by rnk, display_name), '[]'::jsonb)
  into top from (
    select display_name, score,
      rank() over (order by score desc, correct_count desc, total_time_ms asc) rnk
    from public.quiz_participants
    where session_id = p_session_id and connection_state <> 'kicked'
  ) x where rnk <= 10;

  select count(*) into total from public.quiz_participants
    where session_id = p_session_id and connection_state <> 'kicked';

  if p_token is not null then
    select * into pt from public.quiz_participants where session_id = p_session_id and token = p_token;
    if pt.id is not null then
      select 1 + count(*) into your_rank from public.quiz_participants o
        where o.session_id = p_session_id and o.connection_state <> 'kicked'
          and (o.score, o.correct_count, -o.total_time_ms) > (pt.score, pt.correct_count, -pt.total_time_ms);
      you := jsonb_build_object('name', pt.display_name, 'score', pt.score,
        'rank', your_rank, 'correct_count', pt.correct_count);
    end if;
  end if;

  return jsonb_build_object('ok', true, 'top', top, 'total', coalesce(total,0), 'you', you);
end $$;

-- ── grants ───────────────────────────────────────────────────────────
revoke all on function public.quiz_current_qid(public.quiz_sessions)   from public, anon, authenticated;
revoke all on function public.quiz_submit_answer(uuid,text,uuid,text)  from public, anon, authenticated;
revoke all on function public.quiz_next(uuid)                          from public, anon, authenticated;
revoke all on function public.quiz_question(uuid,text)                 from public, anon, authenticated;
revoke all on function public.quiz_results(uuid,text)                  from public, anon, authenticated;
revoke all on function public.quiz_leaderboard(uuid,text)              from public, anon, authenticated;

grant execute on function public.quiz_next(uuid)                       to authenticated;
grant execute on function public.quiz_submit_answer(uuid,text,uuid,text) to anon, authenticated;
grant execute on function public.quiz_question(uuid,text)              to anon, authenticated;
grant execute on function public.quiz_results(uuid,text)               to anon, authenticated;
grant execute on function public.quiz_leaderboard(uuid,text)           to anon, authenticated;

commit;

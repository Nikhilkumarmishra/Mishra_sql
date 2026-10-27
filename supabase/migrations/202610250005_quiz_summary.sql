-- =====================================================================
-- AnalystWorld Quizz — session summary & host history (Phase F).
--
-- quiz_session_summary — the final podium + standings + per-player stats,
--   readable by participants (with their own placement) and the host.
-- quiz_my_sessions — the host's recent games, for the dashboard history.
-- Additive, quiz_-prefixed, same SECURITY DEFINER house pattern.
-- =====================================================================
begin;

-- ── anon/host: final summary (podium, standings, your placement) ─────
create or replace function public.quiz_session_summary(p_session_id uuid, p_token text default null)
returns jsonb language plpgsql stable security definer
set search_path = pg_catalog, public, auth as $$
declare s public.quiz_sessions%rowtype; v_title text; ranked jsonb; total int;
        pt public.quiz_participants%rowtype; your_rank int; you jsonb;
begin
  select * into s from public.quiz_sessions where id = p_session_id;
  if s.id is null then raise exception 'Session not found.'; end if;
  select title into v_title from public.quiz_quizzes where id = s.quiz_id;

  select coalesce(jsonb_agg(jsonb_build_object(
           'rank', rnk, 'name', display_name, 'score', score, 'correct_count', correct_count) order by rnk, display_name), '[]'::jsonb)
  into ranked from (
    select display_name, score, correct_count,
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

  return jsonb_build_object('ok', true, 'title', v_title, 'state', s.state,
    'q_count', s.q_count, 'total_players', coalesce(total,0),
    'standings', ranked, 'you', you);
end $$;

-- ── host: recent games (dashboard history) ───────────────────────────
create or replace function public.quiz_my_sessions(p_limit int default 15)
returns jsonb language plpgsql stable security definer
set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); rows jsonb;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  select coalesce(jsonb_agg(x order by x.created_at desc), '[]'::jsonb) into rows
  from (
    select ses.id, ses.pin, ses.state, ses.participant_count, ses.q_count,
           ses.created_at, ses.ended_at,
           (select title from public.quiz_quizzes qz where qz.id = ses.quiz_id) as title
    from public.quiz_sessions ses
    where ses.host_id = uid
    order by ses.created_at desc
    limit greatest(1, least(coalesce(p_limit,15), 50))
  ) x;
  return jsonb_build_object('ok', true, 'sessions', rows);
end $$;

revoke all on function public.quiz_session_summary(uuid,text) from public, anon, authenticated;
revoke all on function public.quiz_my_sessions(int)           from public, anon, authenticated;
grant execute on function public.quiz_session_summary(uuid,text) to anon, authenticated;
grant execute on function public.quiz_my_sessions(int)           to authenticated;

commit;

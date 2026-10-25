-- =====================================================================
-- AnalystWorld Quizz — widen the quiz_sessions read policy (Phase E).
--
-- The original policy only allowed selecting sessions where
-- state <> 'COMPLETED'. Supabase Realtime evaluates RLS on the changed
-- row, so the final LEADERBOARD -> COMPLETED transition was filtered out
-- and never pushed to participants (only the 15s heartbeat caught it).
-- The session row carries no secrets (the PIN is a public join code;
-- there are no tokens or answers here), so we allow selecting any session
-- row and let Realtime deliver the final transition instantly.
-- =====================================================================
begin;

drop policy if exists quiz_sessions_read_active on public.quiz_sessions;
create policy quiz_sessions_read on public.quiz_sessions
  for select to anon, authenticated
  using (true);

commit;

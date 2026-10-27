# AnalystWorld Quizz

A live, Kahoot-style classroom quiz product built inside the AnalystWorld repo.
A teacher pastes multiple-choice questions, hosts a live game on the projector,
and students join from their phones by a 6-digit PIN or QR code — questions are
synced in real time, answers scored on the server, and the game ends on an
animated podium.

Public URL: **`analystworld.in/quizzes`**

---

## 1. Isolation from the existing site

This feature is fully additive. The only existing file changed is
`vercel.json` (four additive rewrites). Everything else is **new** files and
**new** `quiz_`-prefixed database objects. No existing page, script, table or
RPC was modified, so the live SQL-practice site is untouched.

`git diff main --stat` touches only: `vercel.json`, `quizzes.html`,
`quizzes.css`, `quizzes.js`, `quizzes-play.html`, `quizzes-play.js`,
`quizzes-fx.js`, `QUIZZ.md`, and `supabase/migrations/202610240001…202610270001`.

## 2. Routes (vercel.json rewrites)

| Path                | Serves              | Who          |
|---------------------|---------------------|--------------|
| `/quizzes`, `/quizzes/` | `quizzes.html`  | host         |
| `/quizzes/play`     | `quizzes-play.html` | participant  |
| `/quizzes/join`     | `quizzes-play.html` | participant  |

The rewrites are inserted **before** the catch-all `/(.*) → /index.html`.

## 3. Frontend files

- `quizzes.html` / `quizzes.js` / `quizzes.css` — host app: welcome, auth,
  dashboard, Quiz Studio, live lobby, live projector view, podium, history.
- `quizzes-play.html` / `quizzes-play.js` — participant app: join, lobby,
  live answering, reveal, standings, final placement.
- `quizzes-fx.js` — shared confetti + optional WebAudio chime (reduced-motion aware).

External libraries (loaded on these pages **only**, never on existing pages):
- `@supabase/supabase-js@2.45.4` (jsDelivr UMD) — auth + Realtime + RPC.
- `qrcodejs@1.0.0` (cdnjs) — lobby QR code.

## 4. Auth

The host app loads supabase-js and binds it to the **same** `localStorage` key
the main site uses (`msql_sess`), with a compatible flat session shape, so a
login on either side is shared both ways. Hosts are ordinary AnalystWorld
accounts; no new credentials. `quiz_hosts` records only source + last-active
(keyed to `auth.users.id`). Participants are anonymous — a random reconnect
token is stored in their own `localStorage` (`quizz_play_<pin>`).

## 5. Database (Supabase project `wyxutuqckkdkraawyxff`)

Migrations under `supabase/migrations/` (apply in order):

| File | Adds |
|------|------|
| `202610240001_quiz_base.sql`        | 7 `quiz_` tables, RLS, Realtime publication, `quiz_touch_host` |
| `202610250001_quiz_studio.sql`      | create/update/save_questions/publish/delete/my_quizzes/get_quiz |
| `202610250002_quiz_lobby.sql` (+ token fix) | start_session/join/sync/lobby/kick/start_game/end_session |
| `202610250003_quiz_engine.sql` (+ question_id) | submit_answer/next/question/results/leaderboard |
| `202610250004_quiz_session_read.sql`| widen `quiz_sessions` read policy to `true` (Realtime finale) |
| `202610250005_quiz_summary.sql`     | session_summary + my_sessions |
| `202610270001_quiz_rich.sql`        | widen text→5000 / option→2000 / explanation→4000 limits + `quiz_save_questions` truncation, for SQL/Python quizzes (code blocks, datasets) |

### Rich content (SQL / Python quizzes)

Question stems and options are plain text in the DB; the client renders a
**safe markdown subset** — fenced ```` ``` ```` code blocks, `| pipe tables |`,
inline `` `code` `` and `**bold**` — via `QuizzFX.md()` in `quizzes-fx.js`.
Everything is HTML-escaped first and only a fixed tag whitelist is emitted, so
author content can never inject markup (answer-secrecy / RLS model unchanged).
When a question's options are themselves code/multi-line (`QuizzFX.isCodeOpts`),
the four options render as labelled **A–D code blocks in the question body** and
the tiles become big **A / B / C / D** letters (readable on phones). The paste
importer (`QUIZZ_parseMCQ`) is markdown-aware: it understands `### Qn` headers,
fenced code, tables, multi-line options, `**Correct Answer: X**`,
`**Explanation:**` blocks, and stops at a trailing "Quick Answer Key" section.

All migrations have already been applied to the live project via the Supabase
MCP tooling. If re-applying to a fresh project, run them in filename order.

Tables: `quiz_hosts`, `quiz_quizzes`, `quiz_questions`, `quiz_answer_key`,
`quiz_sessions`, `quiz_participants`, `quiz_answers`.

### Security model
- RLS is enabled on every table; privileges are revoked from `anon` /
  `authenticated` by default. All writes and every sensitive read go through
  `SECURITY DEFINER` RPCs (the same pattern as the existing `dw_` functions),
  each with `set search_path = pg_catalog, public, auth` and an ownership check
  against `auth.uid()`.
- **Realtime** honours RLS, so exactly two tables are readable directly:
  `quiz_sessions` (any state — the row carries no secrets; the PIN is a public
  join code) which is the push channel every client subscribes to, and
  `quiz_participants` (the owning host only — never anon), so participant tokens
  stay private. Both are in the `supabase_realtime` publication with
  `REPLICA IDENTITY FULL`.
- The **answer key** (`quiz_answer_key`) has no grant and no policy — it is
  unreachable by `anon` and `authenticated` alike, and is read only inside the
  definer scoring RPCs. The correct option is never returned to a player while a
  question is live; it is revealed by `quiz_results` only after the question
  closes.
- Scoring is deterministic and server-authoritative:
  `points = correct ? 1000 + round(500·max(0, 1 − elapsed/duration)) : 0`,
  with the deadline checked as `now()` vs `q_started_at + q_duration`; a unique
  `(participant, question)` constraint locks one scored answer and rejects
  replays; late answers are rejected.

### Security review (Phase G) — results
Ran as an anonymous attacker (anon key) and as a second signed-in user:
- Direct table reads of `quiz_answer_key`, `quiz_questions`, `quiz_quizzes`,
  `quiz_participants`, `quiz_answers` → **permission denied**. Embedded-join
  attempt to reach the answer key → denied.
- `quiz_sessions` read → allowed but returns only non-secret columns (pin/state).
- Host RPCs (`quiz_next`, `quiz_lobby`, `quiz_start_game`, `quiz_kick`,
  `quiz_end_session`, `quiz_start_session`) called by `anon` → **denied**.
- A different signed-in user calling `quiz_update/delete/save_questions/publish/
  get_quiz/start_session/lobby/next/kick/start_game/end_session` on another
  host's quiz/session → **"That quiz/session isn't yours."**; `my_quizzes`
  returns only the caller's own.
- `quiz_question` during a live question → no `correct_option`.
  `quiz_results` for a participant during a live question → no counts, no
  correct option (even after they have answered).
- Spoofed/guessed participant token on submit → **"You're not in this game."**;
  replay → **"You already locked in an answer."**; late → **"Time's up!"**.

Supabase security advisor: no new ERRORs from this feature. The two existing
ERRORs (`admin_users_view`) predate it. The `quiz_*` functions appear under the
expected "anon/authenticated can execute SECURITY DEFINER" WARNINGS — this is by
design (they are the public API and all check `auth.uid()` / tokens), identical
to the existing `dw_*`, `log_*`, `register_webinar`, `webinar_dashboard` RPCs.

## 6. Environment & config

- **No new environment variables.** No Vercel env changes. No service-role key
  in the browser. The anon key in the client is the same public key the main
  site already ships.
- **Realtime** must be enabled for the project (it is — the `supabase_realtime`
  publication exists and the two tables were added to it).
- **Google OAuth on `/quizzes`** redirects to `origin + '/quizzes'`. For the
  Google button to work there, the Supabase Auth **Redirect URLs** allowlist
  must include `https://analystworld.in/quizzes` (the main site only registers
  `/index.html`). **Email/password login works regardless** and is the primary
  host path. → verify/add this in the Supabase dashboard if Google sign-in on
  `/quizzes` is wanted.

## 7. Deploy

Standard static deploy on Vercel — no build step. Merging to `main` and letting
Vercel deploy publishes the new pages and the `vercel.json` rewrites. The DB
migrations are already applied to the live project, so no DB step is needed at
deploy time. (For a brand-new environment, apply the migrations in order first.)

## 8. Production-readiness checklist

- [x] Isolated from the live site (only `vercel.json` + new files).
- [x] Existing site regression-checked (renders, no new errors).
- [x] DB migrations applied; RLS deny-all + definer RPCs; answer key locked.
- [x] Security review passed (anon + cross-user); advisor shows no new errors.
- [x] Scoring/timing/state machine server-authoritative; replay/late rejected.
- [x] Realtime sync verified across contexts (host ↔ participant).
- [x] Connection recovery: participant reconnect (token) + host reconnect (history).
- [x] Responsive (mobile tested) + dark/light + reduced-motion + keyboard focus.
- [ ] **Google OAuth redirect allowlist** includes `/quizzes` (owner action, §6).
- [ ] Owner approval before production deploy.

## 9. Known limitations / follow-ups

- Google OAuth redirect allowlist (above) — email/password unaffected.
- Stale `LOBBY`/live sessions are not auto-expired; a periodic cleanup of old
  non-`COMPLETED` sessions would be tidy (not required — PINs are unique only
  among non-completed sessions, so they are reused safely).
- The MCQ parser can misread a **numberless** question whose text starts with a
  label word (`why/reason/explain/correct/answer`). The documented `Q1.`/`Q2.`
  numbered format is unaffected, and the review screen surfaces any misparse.
- Free-tier Realtime message volume scales with players × answers; fine for a
  classroom. The live answer tally is a host-side poll (not per-answer Realtime)
  to keep message volume low.

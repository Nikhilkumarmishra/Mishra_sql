# Data Warriors implementation and rollout

## What is included

- Isolated `/data-warriors` page served by a Vercel rewrite; the existing SPA and routes are not changed.
- White/red responsive public landing page, phase rules, tasks, shared-target disclaimer, and registration CTA.
- Reuses AnalystWorld's Supabase project, `auth.users` identities, and the same `msql_sess` browser session. The feature does not create a second identity store.
- Idempotent registration, self-service daily evidence entry (applications, Excel, recording links), application-status updates, and progress dashboard.
- SQL task counts read from the existing `user_progress` rows for the cohort-local date. Repeat solves of the same question do not increase that day's distinct-question count.
- Server-side completion checks, unique completion per registration/date, Phase 1 qualification, cohort-day streak calculation, and Phase 2 targets.
- An administrator-only control panel on this page using the existing `user_profiles.is_admin` authorization flag. Admins configure the shared cohort start, registration window, duration, deadline/timezone, and task targets, and see participant/application/interview/offer summaries.
- A migration that creates only `dw_*` tables/functions; it does not alter existing tables or policies.

## Important: not production-enabled yet

The SQL migration is **not applied** to the linked Supabase project from this repository. That cannot be safely done from this checkout without authorized database access. Until it is applied, the landing page is intentionally in a closed-registration state and the database-backed functions will not work. The default config has **no start date** and registration closed. No launch date was invented.

### Enable in a preview first

1. Review and run `supabase/migrations/202610170001_data_warriors.sql` in the Supabase SQL Editor for a **staging/preview Supabase project** first. Check the `user_profiles` columns (`id`, `display_name`, `full_name`, `email`, `is_admin`) and `user_progress` columns (`user_id`, `question_id`, `solved_at`) match this repository. The migration refers to these existing columns but does not alter them.
2. In Supabase Auth URL configuration, allow the exact preview origin plus `/data-warriors?join=1` as a redirect URL. The production callback also needs `https://analystworld.in/data-warriors?join=1` allowlisted before enabling Google OAuth or email confirmation redirects for this feature. The page uses the current project’s Auth API and existing `msql_sess` token format.
3. Deploy this branch to a preview only. On `/data-warriors`, log in with an existing test account whose existing profile has `is_admin=true`; set the cohort start date, timezone, targets, and registration state in **Cohort controls**. The admin panel cannot elevate users. After the first registration, the database locks cohort dates/rules/targets to protect the calendar; admins can still close or reopen registration. The initial admin view is a participant summary with application/interview/offer counts; detailed per-day evidence review, interview scheduling, and a distinct hired/placement-outcome workflow remain follow-up work.
4. Test an existing user, a new signup (including email confirmation), Google callback, duplicate registration, activity entries and duplicate submits, status updates, daily completion below/at targets, repeated completion, missed Phase 1 day, date/timezone boundary, Phase 2 targets, and isolation between two test accounts. Also regression-test homepage, authentication, SQL solves, and existing routes. Do not use live student records for test cases.
5. Only after review and acceptance, apply the migration/configuration to production and deploy the branch through the normal production process. No direct production deployment was performed here.

## Evidence/integration limitations

- Applications, Excel evidence, and recording links are self-reported; there is no third-party verification, upload/storage integration, or claim of verification.
- SQL counts come from AnalystWorld's existing `user_progress.solved_at`. That timestamp is currently written by the existing browser client after the question checks pass. The new RPC computes dates and targets server-side, but the legacy table's client-write policy means this integration should not be represented as tamper-proof against a technically sophisticated user. A future hardening step would be a server-verified solve event written by a trusted execution path and a deliberate migration of the existing client progress policy. That is intentionally not changed in this isolated feature.
- Admin summaries report self-entered application statuses. “Offer” is not confirmation of a placement; placement outcomes remain manually reported and are not guaranteed.
- No private dashboard data is fetched directly from client-readable challenge tables. Those tables have RLS enabled, direct grants revoked, and reads/writes are through authenticated, owner-scoped RPCs; admin RPCs additionally check the existing `is_admin` flag.
- The challenge uses one configured cohort start date. Late registration never resets an individual participant's day counter.

## Validation run in this checkout

- `node --check data-warriors.js` — pass.
- `python3 -m json.tool vercel.json` — pass.
- PostgreSQL parser (`pglast`) parsed all 36 migration statements — pass. This is syntax parsing, not a live migration against the AnalystWorld database.
- Live database/auth end-to-end tests and existing-app regression tests remain blocked until a staging environment and the migration are available.

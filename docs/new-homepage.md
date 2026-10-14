# AnalystWorld /new-page — research and implementation plan

## Inspection, before UI implementation (14 October 2026)
- Stack: static HTML, vanilla JS, CSS; no package manifest, bundler, build, lint or test scripts. `index.html` loads `app.js`, `learn.js`, `learn-data.js`, question data, CodeMirror and sql.js. Supabase REST auth/progress is implemented in `app.js`.
- Routing: Vercel rewrites plus `handleRoute`/History API in `app.js`. `/home` renders `landing-page`. Standalone documents already serve `/learn/excel`, `/webinar`, and `/webinar-dashboard`. `/new-page` can use this established document-routing boundary without modifying the legacy SPA or creating another frontend application.
- Live `/home` text was retrieved successfully. It exposes two tracks, topic filters, an editor, hints, lessons, daily challenge, sign-in and progress. Live authenticated operations and deployment access are not established. The existing testimonials and company references were not independently substantiated and will not be reused.
- Real tracks: **Basic → Intermediate** and **Intermediate → Advanced**. Basic question 01 is *Top Spending Departments*, not a first SELECT exercise. Basic question 26 is *Show All Employee Names*, a genuine SELECT-only entry point. Advanced question 01 is *First and Last Page of Each Session*.
- Lessons: Foundation; Introduction to SQL; Querying Data (SELECT); Aggregate Functions; Joins; Subqueries; CTEs & Advanced Queries; Window Functions, among others. Lesson content exists for the selected homepage destinations. The visual is a recommended route through selected real topics, not a claim about question-bank ordering or an enforced curriculum.
- Practice: schema + seeded data + expected output + hint; Run uses sql.js without login. Submit requires login and checks per-question tests. Progress is loaded/saved using existing auth APIs. No API reuse is needed on the new page.
- Returning learners: `/profile` is the existing progress destination; unauthenticated visitors get the existing login modal through that route. No separate `/login` route exists. Use `/profile` for Log in and an explicit saved-progress link, not a simulated session or invented resume state.
- Preview content: basic question 26, `SELECT name FROM employees;`, returns Alice, Bob, Carol. Label as exercise preview, not a live editor. Link to the real editor.

## Focused references
Fetched live page content from Linear, Stripe, Vercel, Brilliant, SQLBolt and Scaler's data-science course page. This was a content/structure review, not pixel-level screenshot research. Reference sites change; no wholesale reproduction intended.
- Linear: concise product positioning followed by product evidence; borrow hierarchy, not its AI positioning.
- Stripe: connect product detail to practical use; use an editorial split rather than its visual spectacle.
- Vercel: concise capability-led language and disciplined hierarchy.
- Brilliant: explain the learning mechanism, not just the subject catalogue; do not borrow tutoring/adaptive features.
- SQLBolt: one concept followed by an exercise; immediate, task-oriented entry.
- Scaler: fundamentals and role relevance are useful local expectations. Avoid brochure funnels, placement implications, urgency and broad catalogue positioning.

## Design rationale
Audience: Indian students, freshers and career switchers, without excluding experienced analysts.
Promise: **Small steps. Serious SQL skills.** Learn a concept, practise it, then combine it with others.
Hierarchy: slim navigation → split hero with a real SELECT preview and topic route → four-step method → three editorial entry rows (beginner lesson + the two existing tracks) → career context and final invitation.
Palette: warm off-white, forest green and fine grey-green borders; independently tuned graphite dark mode and pale sage accent. Avoid decorative imagery, gradients and repeating cards.
Typography: self-hosted Inter variable (Latin, OFL licensed), system sans fallbacks, system monospace for code. No third-party font request.
Motion: a single short entrance and restrained hover/focus transitions; no continuous animation, scroll hiding or content dependent on JavaScript.
Conversion: all primary CTAs open the actual SELECT exercise. Beginners can first read “Your First SQL Query”; more experienced learners get direct real track links. Run remains ungated. Auth, progress and track switching remain owned by the existing app.
Outcome claim: user-supplied “100+ helped into a first analytics job”, explicitly attributed to the AnalystWorld team, not independently verified or a placement guarantee. No employer logos/testimonials. Broader careers described as direction, not available tracks.

## Safety decisions and risks
- Separate `new-page.html`, `/assets/new/` files, route-root-scoped tokens/selectors and private `aw-new-theme` storage key. Do not read/write auth, progress or old theme keys.
- Only existing-file edit: two exact Vercel rewrites for `/new-page` and `/new-page/`, before the catch-all. All other rewrite entries must remain byte-for-byte equivalent as JSON objects and in the same order.
- Legacy app scripts/components are tightly coupled to global DOM/state; reusing their markup or loading them here would create unnecessary risk. Reuse established URLs, not internals.
- New page has no API calls/tracking/editor simulation. Static HTML remains useful without JS.
- The legacy engine requires external CDN/WASM; sandbox network limits can prevent normal initialization. Local regression harness may supply the *same versions* from npm, explicitly reported as test-only substitutes. Never alter production asset loading to solve a sandbox limitation.
- Cannot verify real account login, OAuth, backend writes or production Vercel behavior without live infrastructure access. Do not deploy automatically.

## Delivered implementation
- `new-page.html` — semantic route document, header, hero/progression preview, method, real entry points, outcome context, final CTA and footer.
- `assets/new/homepage.css` — route-scoped tokens, responsive layouts, two themes, focus and reduced-motion states.
- `assets/new/theme.js` — synchronous pre-paint theme selection with safe storage fallback.
- `assets/new/homepage.js` — theme selection/sync, accessible expanding mobile menu and keyboard-operated example tabs.
- `assets/new/inter-latin-variable.woff2` and `assets/new/INTER-LICENSE.txt` — local Inter font and OFL license.
- `vercel.json` — only existing file modified: exact `/new-page` and `/new-page/` document rewrites, ahead of the unchanged rules.
- `scripts/preview.py` — review-only static server using the existing rewrite order; not a production deployment tool.
- `tests/browser-helpers.cjs`, `tests/new-homepage.cjs` — browser, content, SQL and isolation checks.
- `docs/new-homepage.md` — this research, design, QA and handoff record.

No new runtime packages, framework, build step, backend calls or tracking. Route document + CSS + JS + font total approximately 92 KB uncompressed. No SQL engine is loaded on `/new-page`; it loads only when the visitor opens the existing practice experience.

### Existing interfaces reused
- First-query practice: `/problems/26/show-all-employee-names`.
- Basic track: `/problems/01/top-spending-departments`.
- Advanced track: `/problems/01/first-and-last-page-of-each-session?track=advanced`.
- Full existing practice catalogue: `/home#questions-section`.
- Lessons: `/learn`, `/learn/introduction-to-sql/your-first-sql-query`, `/learn/window-functions`.
- Existing login and saved progress entry: `/profile` (legacy router shows login to visitors without a session).
- Existing issue-report form from the original footer.

### QA performed
Chromium browser checks using Playwright, axe-core and the original sql.js 1.10.2 engine:
- Direct `/new-page`, `/new-page/`, `/new-page.html` and refresh.
- Screenshots at 360, 390, 768, 1024 and 1440 px in **both themes**; automated overflow and WCAG 2/2.1 A/AA checks: **zero violations across ten combinations**.
- Manually reviewed full-page screenshots at desktop (1440), tablet (768) and mobile (390) in both themes. The mobile navigation expands the header instead of covering the headline/CTA.
- Preview tabs work with mouse, Left/Right, Home and End. Each preview output was compared with execution against the original question seed, and its query passed the original question's test cases. Added explicit order to the JOIN preview to make the displayed result deterministic.
- All anchor targets, selected lesson content, question names/slugs and advanced entry verified. External report form is reused unchanged; submitting that form was not tested.
- Theme persists after refresh; system preference follows OS changes; manual choice overrides system; storage failures are tolerated; only `aw-new-theme` is written.
- Mobile menu: open/close, Escape + focus restoration, anchor navigation, outside click, and desktop resize.
- Reduced motion disables entrance/transitions/smooth scrolling. Content and dark system theme remain readable with JS disabled. Theme/menu/example switching require JS, as expected.
- No `/new-page` runtime errors, failed assets, third-party network requests or analytics.
- Original `/home` screenshot captured before implementation and after: **byte-identical** using the same renderer and test-only CDN fixtures.
- Primary CTA exercised through the unchanged original router. Existing editor executes `SELECT name FROM employees;` and returns three names without login. Submit still requests login. `/profile` still opens the existing login UI for a logged-out visitor.
- Beginner lesson and advanced track deep links/refresh verified; resource navigation and practice catalogue rendered.
- All original tracked files compared to the starting commit: unchanged except the additive Vercel rules; original rewrite entries preserved exactly.
- `node --check` on both new production JS files and test scripts; `python3 -m py_compile scripts/preview.py`; `git diff --check`.

There is **no existing npm manifest, production build, lint or type-check command** to run in this static repository. These are not reported as passed. The new page uses no transpilation or build step.

### Test limitations / review gates
- Sandbox browser access to the original SQL/CodeMirror CDNs is restricted. Legacy regression tests supply the **same versions** from npm through Playwright request interception; Supabase reads receive empty test responses. Font/logo requests on the legacy homepage are isolated consistently for the before/after comparison. Production source URLs are untouched. The new page requires none of these substitutions.
- Real password/Google login, persisted user progress, serverless endpoints and database writes were **not tested**. No real accounts or production records were modified. Their source files remain unchanged, but that is not a claim of end-to-end live validation.
- Actual Vercel deployment/refresh behavior still needs a deployment preview check. The local server follows the configured rewrites; it does not emulate the complete Vercel platform or serverless APIs.
- Student outcome proof is attributed to the product team based on this brief. Publication remains subject to owner review; it is not independent evidence or a guarantee.
- Automated accessibility is not a substitute for a screen-reader/manual assistive-technology audit. Only Chromium was available; Safari/Firefox and physical-device checks remain review tasks.
- The first implementation was local-only. The owner subsequently authorized publishing this isolated page to Vercel for review; see the deployment follow-up below.

## Preview and repeat testing
From the repository root:

```sh
python3 scripts/preview.py --port 3000
```

Open **`/new-page`** on that server (or on the Arena live-preview host). `/home` remains the original page. In the active sandbox the server is already running as **AnalystWorld review**. The small sun control in the header opens System / Light / Dark choices.

Tests intentionally live outside the production dependency graph. Install tools into a separate directory, not into this repository:

```sh
npm install --prefix /home/user/aw-tools \
  playwright @axe-core/playwright @sparticuz/chromium \
  sql.js@1.10.2 codemirror@5.65.16 @emailjs/browser@4
NODE_PATH=/home/user/aw-tools/node_modules node tests/new-homepage.cjs
```

The active Linux sandbox needed the shared libraries shipped inside `@sparticuz/chromium/bin/al2023.tar.br` extracted into `/home/user/aw-tools/chromium-libs`. Its test command is:

```sh
LD_LIBRARY_PATH=/home/user/aw-tools/chromium-libs/lib \
NODE_PATH=/home/user/aw-tools/node_modules \
node tests/new-homepage.cjs
```

Artifacts are intentionally outside Git at `/home/user/aw-qa/`: ten screenshots, the original-home before/after images and `report.json`. `AW_BASE_URL` and `AW_QA_DIR` override the local server and artifact folder. If no before screenshot exists, the pixel comparison is skipped (the source-isolation assertion still runs). For another environment, capture the original-home baseline with `launch(true)`, `legacyDependencies` and `freezeLegacy` from the helper under identical viewport/browser settings before changing the legacy page.


## Deployment follow-up — /new-page
The owner reported that the sandbox's public URL required a traffic access token and requested a Vercel-hosted review page. Renamed the isolated document to `new-page.html`, changed the two exact rewrites to `/new-page` and `/new-page/`, and updated canonical/wordmark URLs and regression tests. Asset paths remain `/assets/new/`; no existing product source or routes are changed. Publish only the session review branch to the existing GitHub/Vercel integration, without a production merge. Deployment status and the actual preview URL must be checked after the push.

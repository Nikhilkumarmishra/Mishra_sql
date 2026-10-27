/* =====================================================================
   AnalystWorld Quizz — host app (Phases B–C)
   B: foundation + auth (reuses the main site's msql_sess via supabase-js).
   C: Quiz Studio — bulk MCQ paste + parser, editable review, metadata,
      timers, save draft / publish, My Quizzes, preview-as-participant.
   Self-contained; no existing file is touched.
   ===================================================================== */
(function () {
  'use strict';

  // ── config (public anon key — safe in the client, same as main site) ──
  var SUPABASE_URL  = 'https://wyxutuqckkdkraawyxff.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eHV0dXFja2tka3JhYXd5eGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMzQ3NzksImV4cCI6MjA5MzcxMDc3OX0.ale0hHkE36PPQwKiqo5ViS3bi28krpU8gHXiWCKyLAU';
  var SESSION_KEY   = 'msql_sess';

  if (!window.supabase || !window.supabase.createClient) {
    console.error('[quizz] supabase-js failed to load');
  }

  var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
    auth: {
      storageKey: SESSION_KEY,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: 'pkce'
    }
  });
  window.QUIZZ_SB = sb;

  // ── helpers ───────────────────────────────────────────────────────
  function $(id) { return document.getElementById(id); }
  function show(el, on) { if (el) el.classList.toggle('q-hidden', !on); }
  function esc(s) { return (s == null ? '' : String(s)).replace(/[&<>"']/g, function (c) {
    return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]; }); }

  function toast(msg, kind) {
    var wrap = $('toasts'); if (!wrap) return;
    var t = document.createElement('div');
    t.className = 'q-toast' + (kind ? ' ' + kind : '');
    t.textContent = msg; wrap.appendChild(t);
    setTimeout(function () {
      t.style.transition = 'opacity .3s, transform .3s';
      t.style.opacity = '0'; t.style.transform = 'translateY(8px)';
      setTimeout(function () { t.remove(); }, 320);
    }, 2800);
  }

  async function rpc(fn, params) {
    var res = await sb.rpc(fn, params || {});
    if (res.error) throw new Error(res.error.message || 'Request failed.');
    return res.data;
  }

  // =====================================================================
  //  MCQ PARSER — robust, tolerant, and never guesses the correct answer.
  // =====================================================================
  var reQuiz    = /^quiz\s*[:\-=]\s*(.+)$/i;
  var reOpt     = /^([A-Da-d])\s*[\.\)\-:]\s+(.+)$/;          // "A. text" / "A) text"
  var reOptTight= /^([A-Da-d])[\.\)\-:]\s*(.+)$/;             // "A.text" (no space)
  var reCorrect = /^(?:correct(?:\s*answer)?|answer|ans)\b\s*[:\-=\.]?\s*(.+)$/i;
  var reExpl    = /^(?:explanation|explain|reason|why)\b\s*[:\-=\.]?\s*(.+)$/i;
  var reTime    = /^(?:time|timer|seconds?|secs?|duration)\b\s*[:\-=\.]?\s*(\d+)/i;
  var reQNum    = /^(?:q(?:uestion)?\s*)?(\d+)\s*[\.\)\-:]\s*(.+)$/i;

  function resolveCorrect(raw, options) {
    if (!raw) return null;
    var s = String(raw).trim();
    var norm = function (x) { return (x || '').trim().toLowerCase().replace(/\s+/g, ' '); };
    // 1) exact text match against an option (most reliable)
    var ns = norm(s);
    for (var k in options) { if (options[k] && norm(options[k]) === ns) return k; }
    // 2) leading letter: "B", "B)", "B. SUM"
    var lm = s.match(/^([A-Da-d])(?:[\)\.\:\-]|\s|$)/);
    if (lm) { var L = lm[1].toUpperCase(); if (options[L] !== undefined) return L; }
    // 3) an isolated A–D token anywhere: "option C", "answer is B"
    var tok = s.match(/(?:^|\s)([A-Da-d])(?:\s|$|[\)\.\:])/);
    if (tok) { var L2 = tok[1].toUpperCase(); if (options[L2] !== undefined) return L2; }
    // last resort: leading letter even if option text missing
    if (lm) return lm[1].toUpperCase();
    return null;
  }

  function finalizeQ(q) {
    var o = q.options, errors = [];
    var correct = resolveCorrect(q.correctRaw, o);
    var text = (q.text || '').trim();
    if (!text) errors.push('Missing the question text.');
    var missing = ['A', 'B', 'C', 'D'].filter(function (L) { return !o[L] || !o[L].trim(); });
    if (missing.length) errors.push('Missing option' + (missing.length > 1 ? 's' : '') + ' ' + missing.join(', ') + '.');
    if (!q.correctRaw) errors.push('No correct answer marked.');
    else if (!correct) errors.push('Couldn’t match the correct answer “' + q.correctRaw + '” to an option.');
    var time = q.time;
    if (time != null && (isNaN(time) || time < 5 || time > 300)) time = null;
    return { text: text, a: o.A || '', b: o.B || '', c: o.C || '', d: o.D || '',
             correct: correct, explanation: (q.explanation || '').trim(), time: time, errors: errors };
  }

  function parseMCQ(raw) {
    var lines = String(raw || '').split(/\r?\n/);
    var title = null, questions = [], cur = null;
    function pushCur() { if (cur) { questions.push(cur); cur = null; } }
    function newCur(text) { pushCur(); cur = { text: (text || '').trim(), options: {}, correctRaw: null, explanation: null, time: null }; }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line) continue;
      var m;
      if (!title && (m = line.match(reQuiz))) { title = m[1].trim(); continue; }
      if (cur && (m = line.match(reCorrect))) { cur.correctRaw = m[1].trim(); continue; }
      if (cur && (m = line.match(reExpl)))    { cur.explanation = m[1].trim(); continue; }
      if (cur && (m = line.match(reTime)))    { cur.time = parseInt(m[1], 10); continue; }
      if ((m = line.match(reOpt)) || (m = line.match(reOptTight))) {
        if (!cur) newCur('');
        cur.options[m[1].toUpperCase()] = m[2].trim();
        continue;
      }
      if ((m = line.match(reQNum))) { newCur(m[2].trim()); continue; }
      // plain line
      if (!cur) { newCur(line); continue; }
      if (Object.keys(cur.options).length > 0 || cur.correctRaw) { newCur(line); }
      else { cur.text = (cur.text ? cur.text + ' ' : '') + line; }
    }
    pushCur();
    return { title: title, questions: questions.map(finalizeQ) };
  }
  window.QUIZZ_parseMCQ = parseMCQ; // exposed for tests

  var SAMPLE =
'Quiz: Excel Fundamentals\n' +
'Q1. Which function adds a range of values in Excel?\n' +
'A. COUNT\nB. SUM\nC. MAX\nD. AVERAGE\nCorrect: B\n' +
'Explanation: SUM adds the supplied numeric values.\nTime: 20\n\n' +
'Q2. Which symbol makes a cell reference absolute?\n' +
'A. &\nB. #\nC. $\nD. @\nCorrect: C\n\n' +
'Q3. VLOOKUP searches for a value in the...\n' +
'A. first column of a range\nB. last row\nC. active cell\nD. header only\n' +
'Correct: first column of a range\nExplanation: VLOOKUP matches down the leftmost column.';

  // ── theme ─────────────────────────────────────────────────────────
  function initTheme() {
    var saved = null; try { saved = localStorage.getItem('quizz_theme'); } catch (e) {}
    if (saved === 'dark' || saved === 'light') document.documentElement.setAttribute('data-theme', saved);
    var btn = $('qThemeToggle');
    if (btn) btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme')
        || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('quizz_theme', next); } catch (e) {}
    });
  }

  // ── screen router ─────────────────────────────────────────────────
  function goScreen(name) {
    var s = document.querySelectorAll('.q-screen');
    for (var i = 0; i < s.length; i++) s[i].classList.toggle('is-active', s[i].id === 'screen-' + name);
    window.scrollTo(0, 0);
    // keep the URL in step for the two public screens (distinct, shareable)
    try {
      var p = window.location.pathname;
      if (name === 'welcome' && !/\/quizzes\/?$/.test(p)) history.pushState({}, '', '/quizzes');
      else if (name === 'dashboard' && !/\/quizzes\/dashboard\/?$/.test(p)) history.pushState({}, '', '/quizzes/dashboard');
    } catch (e) {}
  }

  function routeByPath() {
    var dash = /\/quizzes\/dashboard\/?$/.test(window.location.pathname);
    if (dash && currentUser) { goScreen('dashboard'); loadDashboard(); }
    else if (dash && !currentUser) { goScreen('welcome'); openAuth(); }
    else { goScreen('welcome'); }
  }

  // scroll-reveal for landing sections
  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(els, function (e) { e.classList.add('revealed'); }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('revealed'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    Array.prototype.forEach.call(els, function (e) { io.observe(e); });
  }

  // ── auth ──────────────────────────────────────────────────────────
  var currentUser = null, authTab = 'login';
  function displayName(u) {
    if (!u) return '';
    var m = u.user_metadata || {};
    return m.full_name || m.name || (u.email ? u.email.split('@')[0] : 'Host');
  }
  function renderAuthUI() {
    var inOn = !!currentUser;
    show($('qTopAuth'), !inOn); show($('qTopUser'), inOn);
    if (inOn) {
      var name = displayName(currentUser);
      $('qUserName').textContent = name;
      $('qAvatar').textContent = (name[0] || '?').toUpperCase();
    }
  }
  function touchHost(src) {
    sb.rpc('quiz_touch_host', { p_source: src || 'quizzes_web' })
      .then(function (r) { if (r.error) console.warn('[quizz] touch_host', r.error.message); })
      .catch(function (e) { console.warn('[quizz] touch_host', e); });
  }
  function openAuth() { $('authError').textContent = ''; $('authModal').classList.add('is-open');
    setTimeout(function () { var e = $('authEmail'); if (e) e.focus(); }, 60); }
  function closeAuth() { $('authModal').classList.remove('is-open'); }
  function setAuthTab(tab) {
    authTab = tab;
    var tabs = document.querySelectorAll('[data-authtab]');
    for (var i = 0; i < tabs.length; i++) tabs[i].classList.toggle('is-active', tabs[i].getAttribute('data-authtab') === tab);
    $('authTitle').textContent = tab === 'signup' ? 'Create a host account' : 'Host login';
    $('authSubmit').textContent = tab === 'signup' ? 'Create account' : 'Sign in';
    $('authPassword').setAttribute('autocomplete', tab === 'signup' ? 'new-password' : 'current-password');
    $('authError').textContent = '';
  }
  function friendlyAuthError(msg) {
    msg = msg || '';
    if (/invalid login/i.test(msg)) return 'Email or password is incorrect.';
    if (/already registered|already been/i.test(msg)) return 'That email already has an account — try signing in.';
    if (/rate/i.test(msg)) return 'Too many attempts — wait a moment and try again.';
    return msg;
  }
  async function submitAuth(e) {
    e.preventDefault();
    var email = ($('authEmail').value || '').trim(), pw = $('authPassword').value || '', errEl = $('authError');
    errEl.textContent = '';
    if (!email || !pw) { errEl.textContent = 'Enter your email and password.'; return; }
    if (authTab === 'signup' && pw.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; return; }
    var btn = $('authSubmit'); btn.disabled = true; var orig = btn.textContent; btn.textContent = '…';
    try {
      var res = authTab === 'signup'
        ? await sb.auth.signUp({ email: email, password: pw })
        : await sb.auth.signInWithPassword({ email: email, password: pw });
      if (res.error) { errEl.textContent = friendlyAuthError(res.error.message); return; }
      if (authTab === 'signup' && res.data && res.data.user && !res.data.session) {
        toast('Check your email to confirm your account.'); closeAuth(); return;
      }
      closeAuth(); touchHost(authTab === 'signup' ? 'quizzes_signup' : 'quizzes_login');
    } catch (err) { errEl.textContent = 'Something went wrong — please try again.'; }
    finally { btn.disabled = false; btn.textContent = orig; }
  }
  async function googleLogin() {
    try {
      var res = await sb.auth.signInWithOAuth({ provider: 'google',
        options: { redirectTo: window.location.origin + '/quizzes' } });
      if (res.error) toast(res.error.message, 'err');
    } catch (e) { toast('Google sign-in failed.', 'err'); }
  }
  async function logout() { try { await sb.auth.signOut(); } catch (e) {} toast('Signed out.'); }

  // =====================================================================
  //  DASHBOARD — list the host's quizzes
  // =====================================================================
  async function loadDashboard() {
    $('dashGreeting').textContent = 'Welcome back, ' + displayName(currentUser).split(' ')[0] + '.';
    var body = $('dashBody');
    body.innerHTML = '<div class="q-center"><div class="q-spinner"></div></div>';
    try {
      var data = await rpc('quiz_my_quizzes');
      var quizzes = (data && data.quizzes) || [];
      renderQuizGrid(quizzes);
    } catch (e) {
      body.innerHTML = '<div class="q-empty"><div class="q-empty-ico">⚠️</div><h3>Couldn’t load your quizzes</h3><p>' + esc(e.message) + '</p></div>';
    }
    loadRecentGames();
  }

  function timeAgo(iso) {
    if (!iso) return '';
    var d = (Date.now() - Date.parse(iso)) / 1000;
    if (d < 60) return 'just now';
    if (d < 3600) return Math.floor(d / 60) + 'm ago';
    if (d < 86400) return Math.floor(d / 3600) + 'h ago';
    if (d < 604800) return Math.floor(d / 86400) + 'd ago';
    try { return new Date(iso).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }); } catch (e) { return ''; }
  }

  async function loadRecentGames() {
    try {
      var data = await rpc('quiz_my_sessions', { p_limit: 12 });
      var sessions = (data && data.sessions) || [];
      var head = $('recentHead'), box = $('recentGames');
      if (!sessions.length) { show(head, false); box.innerHTML = ''; return; }
      show(head, true);
      box.innerHTML = sessions.map(function (s) {
        var live = s.state !== 'COMPLETED';
        var meta = (s.participant_count || 0) + ' player' + (s.participant_count === 1 ? '' : 's') +
          ' · ' + (s.q_count || 0) + ' Qs' + (live ? ' · <b style="color:var(--brand2)">live</b>' : '');
        return '<div class="q-hist-row" data-sid="' + esc(s.id) + '" data-live="' + live + '">' +
          '<span class="q-hist-ico">' + (live ? '🔴' : '🏁') + '</span>' +
          '<div class="q-hist-main"><div class="q-hist-title">' + esc(s.title || 'Quiz') + '</div>' +
          '<div class="q-hist-meta">' + meta + '</div></div>' +
          '<span class="q-hist-when">' + timeAgo(s.created_at) + '</span></div>';
      }).join('');
      Array.prototype.forEach.call(box.querySelectorAll('.q-hist-row'), function (row) {
        row.addEventListener('click', function () {
          viewSession(row.getAttribute('data-sid'), row.getAttribute('data-live') === 'true');
        });
      });
    } catch (e) { /* history is non-critical */ }
  }

  function viewSession(sessionId, isLive) {
    leaveLobby();
    lobby.sessionId = sessionId; lobby.quizId = null;
    goScreen('lobby');
    if (isLive) {
      // reconnect to the running game
      subscribeLobby();
      loadLobby();
    } else {
      // read-only final podium for a past game
      lobby.hostState = 'COMPLETED';
      show($('lobbyBar'), false); show($('lobbyWaiting'), false); show($('lobbyLive'), true);
      hostHideStage();
      hostPodium();
    }
  }

  function renderQuizGrid(quizzes) {
    $('statQuizzes').textContent = quizzes.length;
    $('statPublished').textContent = quizzes.filter(function (q) { return q.status === 'published'; }).length;
    $('statGames').textContent = quizzes.reduce(function (n, q) { return n + (q.games_count || 0); }, 0);
    var body = $('dashBody');
    if (!quizzes.length) {
      body.innerHTML =
        '<div class="q-empty"><div class="q-empty-ico">🗂️</div><h3>No quizzes yet</h3>' +
        '<p>Build your first quiz by pasting your multiple-choice questions — it takes a minute.</p>' +
        '<div style="margin-top:18px"><button class="q-btn q-btn-primary q-btn-lg" id="emptyCreateBtn">+ Create your first quiz</button></div></div>';
      $('emptyCreateBtn').addEventListener('click', function () { openStudio(null); });
      return;
    }
    var html = '<div class="q-grid">';
    quizzes.forEach(function (q) {
      var tag = q.status === 'published'
        ? '<span class="q-tag q-tag-published">Published</span>'
        : '<span class="q-tag q-tag-draft">Draft</span>';
      html +=
        '<div class="q-quiz-card" data-id="' + esc(q.id) + '">' +
          '<div class="q-quiz-cover">' + esc(q.cover || '📝') + '</div>' +
          '<h3>' + esc(q.title) + '</h3>' + tag +
          '<div class="q-quiz-meta"><span>' + (q.question_count || 0) + ' question' + (q.question_count === 1 ? '' : 's') + '</span>' +
            (q.games_count ? '<span>· ' + q.games_count + ' game' + (q.games_count === 1 ? '' : 's') + '</span>' : '') + '</div>' +
          '<div class="q-qcard-foot" style="margin-top:14px">' +
            (q.question_count ? '<button class="q-btn q-btn-primary q-host" data-id="' + esc(q.id) + '">▶ Host</button>' : '') +
            '<button class="q-btn q-btn-ghost q-edit" data-id="' + esc(q.id) + '">Edit</button>' +
            '<button class="q-btn q-btn-ghost q-del" data-id="' + esc(q.id) + '" title="Delete quiz">🗑</button>' +
          '</div>' +
        '</div>';
    });
    html += '</div>';
    body.innerHTML = html;
    // wire
    Array.prototype.forEach.call(body.querySelectorAll('.q-quiz-card'), function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('.q-del') || e.target.closest('.q-edit') || e.target.closest('.q-host')) return;
        openStudio(card.getAttribute('data-id'));
      });
    });
    Array.prototype.forEach.call(body.querySelectorAll('.q-edit'), function (b) {
      b.addEventListener('click', function () { openStudio(b.getAttribute('data-id')); });
    });
    Array.prototype.forEach.call(body.querySelectorAll('.q-del'), function (b) {
      b.addEventListener('click', function () { deleteQuiz(b.getAttribute('data-id')); });
    });
    Array.prototype.forEach.call(body.querySelectorAll('.q-host'), function (b) {
      b.addEventListener('click', function () { hostQuiz(b.getAttribute('data-id')); });
    });
  }

  async function deleteQuiz(id) {
    if (!window.confirm('Delete this quiz for good? This can’t be undone.')) return;
    try { await rpc('quiz_delete', { p_quiz_id: id }); toast('Quiz deleted.'); loadDashboard(); }
    catch (e) { toast(e.message, 'err'); }
  }

  // =====================================================================
  //  STUDIO
  // =====================================================================
  var studio = { id: null, status: 'draft', questions: [] };

  async function openStudio(id) {
    goScreen('studio');
    if (!id) {
      studio = { id: null, status: 'draft', questions: [] };
      $('metaTitle').value = ''; $('metaDesc').value = ''; $('metaCover').value = '';
      $('metaTimer').value = 20;
      $('pasteBox').value = ''; $('parseNote').textContent = '';
      $('pastePanel').open = true;
      renderStatusChip('draft'); renderQuestions();
      setTimeout(function () { $('metaTitle').focus(); }, 60);
      return;
    }
    $('qList').innerHTML = '<div class="q-center"><div class="q-spinner"></div></div>';
    try {
      var data = await rpc('quiz_get_quiz', { p_quiz_id: id });
      var q = data.quiz;
      studio = { id: q.id, status: q.status,
        questions: (data.questions || []).map(function (x) {
          return { text: x.text || '', a: x.a || '', b: x.b || '', c: x.c || '', d: x.d || '',
                   correct: x.correct || null, explanation: x.explanation || '', time: x.time || null, errors: [] };
        }) };
      $('metaTitle').value = q.title || ''; $('metaDesc').value = q.description || '';
      $('metaCover').value = q.cover || ''; $('metaTimer').value = q.default_timer || 20;
      $('pasteBox').value = ''; $('parseNote').textContent = '';
      $('pastePanel').open = (studio.questions.length === 0);
      renderStatusChip(q.status); renderQuestions();
    } catch (e) {
      toast(e.message, 'err'); goScreen('dashboard'); loadDashboard();
    }
  }

  function renderStatusChip(status) {
    var chip = $('studioStatus');
    chip.style.visibility = 'visible';
    chip.className = 'q-tag ' + (status === 'published' ? 'q-tag-published' : 'q-tag-draft');
    chip.textContent = status === 'published' ? 'Published' : 'Draft';
    $('studioPublish').textContent = status === 'published' ? 'Unpublish' : 'Publish';
  }

  var GLYPH = { A: '▲', B: '●', C: '■', D: '◆' };

  function renderQuestions() {
    var list = $('qList');
    $('qCountChip').textContent = studio.questions.length;
    if (!studio.questions.length) {
      list.innerHTML = '<div class="q-empty" style="padding:36px"><div class="q-empty-ico">✏️</div>' +
        '<h3>No questions yet</h3><p>Paste them above, load the sample, or add one manually.</p></div>';
      return;
    }
    list.innerHTML = studio.questions.map(function (q, i) { return qCardHTML(q, i); }).join('');
    // bind each card
    studio.questions.forEach(function (q, i) { bindCard(i); });
  }

  function qCardHTML(q, i) {
    var errs = q.errors && q.errors.length
      ? '<div class="q-qerr">⚠️ ' + q.errors.map(esc).join(' ') + '</div>' : '';
    function opt(L, val) {
      var lc = L.toLowerCase();
      var sel = q.correct === L ? ' is-correct' : '';
      return '<div class="q-opt q-opt-' + lc + sel + '" data-opt="' + L + '">' +
        '<button type="button" class="q-opt-pick" data-pick="' + L + '" title="Mark correct">' + (q.correct === L ? '✓' : '') + '</button>' +
        '<span class="q-opt-glyph">' + GLYPH[L] + '</span>' +
        '<input data-f="' + lc + '" value="' + esc(val) + '" placeholder="Option ' + L + '"/></div>';
    }
    return '<div class="q-qcard' + (q.errors && q.errors.length ? ' has-err' : '') + '" data-i="' + i + '">' +
      '<div class="q-qcard-head">' +
        '<span class="q-qnum">' + (i + 1) + '</span>' +
        '<input class="q-input" data-f="text" value="' + esc(q.text) + '" placeholder="Question text"/>' +
        '<div class="q-qcard-tools">' +
          '<button class="up" title="Move up">↑</button><button class="down" title="Move down">↓</button>' +
          '<button class="del" title="Delete">🗑</button></div>' +
      '</div>' +
      '<div class="q-opts">' + opt('A', q.a) + opt('B', q.b) + opt('C', q.c) + opt('D', q.d) + '</div>' +
      '<div class="q-qcard-foot">' +
        '<input class="q-input q-expl" data-f="explanation" value="' + esc(q.explanation) + '" placeholder="Explanation (optional)"/>' +
        '<div class="q-qtime"><input class="q-input mono" data-f="time" type="number" min="5" max="300" value="' + (q.time || '') + '" placeholder="timer"/><span class="q-timer-unit">sec</span></div>' +
      '</div>' + errs + '</div>';
  }

  function bindCard(i) {
    var card = document.querySelector('.q-qcard[data-i="' + i + '"]');
    if (!card) return;
    // text fields
    Array.prototype.forEach.call(card.querySelectorAll('[data-f]'), function (inp) {
      inp.addEventListener('input', function () {
        var f = inp.getAttribute('data-f');
        if (f === 'time') studio.questions[i].time = inp.value ? parseInt(inp.value, 10) : null;
        else studio.questions[i][f] = inp.value;
      });
    });
    // correct pickers
    Array.prototype.forEach.call(card.querySelectorAll('[data-pick]'), function (btn) {
      btn.addEventListener('click', function () {
        syncFromDOM();
        studio.questions[i].correct = btn.getAttribute('data-pick');
        studio.questions[i].errors = [];
        renderQuestions();
      });
    });
    card.querySelector('.up').addEventListener('click', function () { moveQ(i, -1); });
    card.querySelector('.down').addEventListener('click', function () { moveQ(i, 1); });
    card.querySelector('.del').addEventListener('click', function () {
      syncFromDOM(); studio.questions.splice(i, 1); renderQuestions();
    });
  }

  // read current DOM inputs back into studio.questions (preserves edits across re-render)
  function syncFromDOM() {
    Array.prototype.forEach.call(document.querySelectorAll('.q-qcard'), function (card) {
      var i = parseInt(card.getAttribute('data-i'), 10);
      var q = studio.questions[i]; if (!q) return;
      Array.prototype.forEach.call(card.querySelectorAll('[data-f]'), function (inp) {
        var f = inp.getAttribute('data-f');
        if (f === 'time') q.time = inp.value ? parseInt(inp.value, 10) : null;
        else q[f] = inp.value;
      });
    });
  }

  function moveQ(i, dir) {
    syncFromDOM();
    var j = i + dir;
    if (j < 0 || j >= studio.questions.length) return;
    var tmp = studio.questions[i]; studio.questions[i] = studio.questions[j]; studio.questions[j] = tmp;
    renderQuestions();
  }

  function addBlankQuestion() {
    syncFromDOM();
    studio.questions.push({ text: '', a: '', b: '', c: '', d: '', correct: null, explanation: '', time: null, errors: [] });
    renderQuestions();
    var cards = document.querySelectorAll('.q-qcard');
    if (cards.length) cards[cards.length - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function doParse() {
    var raw = $('pasteBox').value || '';
    var note = $('parseNote');
    if (!raw.trim()) { note.className = 'q-parse-note err'; note.textContent = 'Paste some questions first.'; return; }
    var result = parseMCQ(raw);
    if (!result.questions.length) { note.className = 'q-parse-note err'; note.textContent = 'Couldn’t find any questions in that text.'; return; }
    // adopt title if the quiz has no title yet
    if (result.title && !($('metaTitle').value || '').trim()) $('metaTitle').value = result.title;
    syncFromDOM();
    result.questions.forEach(function (q) { studio.questions.push(q); });
    $('pasteBox').value = '';
    var bad = result.questions.filter(function (q) { return q.errors.length; }).length;
    var good = result.questions.length - bad;
    note.className = 'q-parse-note ' + (bad ? 'err' : 'ok');
    note.textContent = 'Added ' + result.questions.length + ' question' + (result.questions.length === 1 ? '' : 's') +
      (bad ? ' — ' + bad + ' need' + (bad === 1 ? 's' : '') + ' a fix (highlighted below).' : ' — all good!');
    renderQuestions();
    if (bad) { var f = document.querySelector('.q-qcard.has-err'); if (f) f.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  }

  // validate all; mark errors; return true if clean
  function validateStudio() {
    syncFromDOM();
    var anyErr = false;
    studio.questions.forEach(function (q) {
      var f = finalizeQ({ text: q.text, options: { A: q.a, B: q.b, C: q.c, D: q.d },
        correctRaw: q.correct, explanation: q.explanation, time: q.time });
      // when a correct letter is already set, finalizeQ resolves it fine
      q.errors = f.errors;
      if (f.errors.length) anyErr = true;
    });
    renderQuestions();
    return !anyErr;
  }

  function studioPayload() {
    return studio.questions.map(function (q) {
      return { text: q.text, a: q.a, b: q.b, c: q.c, d: q.d,
        correct: q.correct, explanation: q.explanation || '', time: q.time || null };
    });
  }

  async function saveStudio(thenPublish) {
    syncFromDOM();
    var title = ($('metaTitle').value || '').trim();
    if (!title) { toast('Give your quiz a title.', 'err'); $('metaTitle').focus(); return false; }
    if (!studio.questions.length) { toast('Add at least one question.', 'err'); return false; }
    if (!validateStudio()) { toast('Some questions need a fix — see the highlights.', 'err'); return false; }

    var meta = {
      p_title: title,
      p_description: ($('metaDesc').value || '').trim() || null,
      p_cover: ($('metaCover').value || '').trim() || null,
      p_default_timer: parseInt($('metaTimer').value, 10) || 20
    };
    var saveBtn = $('studioSave'), pubBtn = $('studioPublish');
    saveBtn.disabled = true; pubBtn.disabled = true;
    try {
      if (!studio.id) {
        var created = await rpc('quiz_create', meta);
        studio.id = created.id;
      } else {
        await rpc('quiz_update', Object.assign({ p_quiz_id: studio.id }, meta));
      }
      await rpc('quiz_save_questions', { p_quiz_id: studio.id, p_questions: studioPayload() });
      if (thenPublish) {
        var pub = await rpc('quiz_publish', { p_quiz_id: studio.id, p_publish: studio.status !== 'published' });
        studio.status = pub.status;
        renderStatusChip(studio.status);
        toast(studio.status === 'published' ? 'Published! Ready to host 🎉' : 'Moved back to draft.', 'ok');
      } else {
        toast('Draft saved.', 'ok');
      }
      return true;
    } catch (e) {
      toast(e.message, 'err'); return false;
    } finally {
      saveBtn.disabled = false; pubBtn.disabled = false;
    }
  }

  // =====================================================================
  //  HOST LOBBY (live session)
  // =====================================================================
  var ANS_COLORS = ['#ef4e6b', '#2f86ff', '#f5a524', '#2fd27a', '#7c5cff', '#00c896', '#ff8a3d', '#12b5cb'];
  function avatarColor(name) {
    var h = 0; name = name || '?';
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return ANS_COLORS[h % ANS_COLORS.length];
  }

  var lobby = { sessionId: null, pin: null, channel: null, debounce: null };

  async function hostQuiz(quizId) {
    try {
      var info = await rpc('quiz_start_session', { p_quiz_id: quizId });
      info.quiz_id = quizId;
      openLobby(info);
    } catch (e) { toast(e.message, 'err'); }
  }

  function openLobby(info) {
    lobby.sessionId = info.session_id;
    lobby.pin = info.pin;
    lobby.quizId = info.quiz_id || null;
    goScreen('lobby');
    show($('lobbyWaiting'), true); show($('lobbyLive'), false); show($('lobbyBar'), true);
    var titleChip = $('lobbyTitle');
    titleChip.style.visibility = 'visible'; titleChip.textContent = info.title || 'Live game';
    $('lobbyPin').textContent = info.pin;
    var joinUrl = window.location.origin + '/quizzes/join?pin=' + info.pin;
    lobby.joinUrl = joinUrl;
    var host = window.location.host.replace(/^www\./, '');
    $('lobbyUrl').textContent = host + '/quizzes';
    renderQr(joinUrl);
    $('lobbyStart').disabled = true;
    $('playersGrid').innerHTML = '<div class="q-lobby-empty">No players yet — share the PIN above.</div>';
    $('lobbyCount').textContent = '0';
    subscribeLobby();
    loadLobby();
  }

  function renderQr(url) {
    var el = $('lobbyQr'); el.innerHTML = '';
    if (window.QRCode) {
      try { new window.QRCode(el, { text: url, width: 168, height: 168,
        colorDark: '#16131f', colorLight: '#ffffff', correctLevel: window.QRCode.CorrectLevel.M }); return; }
      catch (e) { /* fall through */ }
    }
    el.innerHTML = '<div style="padding:20px;color:#888;font-size:12px">QR unavailable</div>';
  }

  async function loadLobby() {
    if (!lobby.sessionId) return;
    try {
      var data = await rpc('quiz_lobby', { p_session_id: lobby.sessionId });
      var s = data.session;
      if (s.state === 'COMPLETED') { leaveLobby(); goScreen('dashboard'); loadDashboard(); return; }
      if (s.state === 'LOBBY') {
        show($('lobbyWaiting'), true); show($('lobbyLive'), false); show($('lobbyBar'), true);
        renderPlayers(data.participants || []);
        $('lobbyCount').textContent = (data.participants || []).length;
        $('lobbyStart').disabled = (data.participants || []).length < 1;
        $('lobbyHint').textContent = (data.participants || []).length
          ? 'Players are in — start when ready.' : 'Waiting for players to join…';
      } else {
        showLive(s);
      }
    } catch (e) { /* transient; realtime will re-trigger */ }
  }

  function renderPlayers(list) {
    var grid = $('playersGrid');
    if (!list.length) { grid.innerHTML = '<div class="q-lobby-empty">No players yet — share the PIN above.</div>'; return; }
    grid.innerHTML = list.map(function (p) {
      var c = avatarColor(p.name);
      return '<div class="q-player-chip" data-pid="' + esc(p.id) + '">' +
        '<span class="q-player-ava" style="background:' + c + '">' + esc((p.name[0] || '?').toUpperCase()) + '</span>' +
        '<span class="q-player-name">' + esc(p.name) + '</span>' +
        '<button class="q-player-kick" title="Remove ' + esc(p.name) + '">✕</button></div>';
    }).join('');
    Array.prototype.forEach.call(grid.querySelectorAll('.q-player-chip'), function (chip) {
      chip.querySelector('.q-player-kick').addEventListener('click', function () {
        kickPlayer(chip.getAttribute('data-pid'));
      });
    });
  }

  function subscribeLobby() {
    if (lobby.channel) { try { sb.removeChannel(lobby.channel); } catch (e) {} lobby.channel = null; }
    var sid = lobby.sessionId;
    lobby.channel = sb.channel('lobby:' + sid)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'quiz_participants', filter: 'session_id=eq.' + sid }, debouncedLobby)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'quiz_sessions', filter: 'id=eq.' + sid }, function (payload) {
        var st = payload.new;
        $('lobbyCount').textContent = st.participant_count;
        if (st.state === 'LOBBY') debouncedLobby();
        else if (st.state === 'COMPLETED') { leaveLobby(); goScreen('dashboard'); loadDashboard(); }
        else showLive(st);
      })
      .subscribe();
  }
  function debouncedLobby() {
    if (lobby.debounce) clearTimeout(lobby.debounce);
    lobby.debounce = setTimeout(loadLobby, 180);
  }

  async function startGame() {
    $('lobbyStart').disabled = true;
    try { var r = await rpc('quiz_start_game', { p_session_id: lobby.sessionId }); showLive(r); }
    catch (e) { toast(e.message, 'err'); $('lobbyStart').disabled = false; }
  }

  function clearLiveTimers() {
    if (lobby.timer) { clearInterval(lobby.timer); lobby.timer = null; }
    if (lobby.poll) { clearInterval(lobby.poll); lobby.poll = null; }
  }

  function showLive(state) {
    show($('lobbyWaiting'), false); show($('lobbyLive'), true); show($('lobbyBar'), false);
    clearLiveTimers(); show($('liveTimeup'), false);
    if (state.state !== 'COMPLETED') { show($('livePodium'), false); $('liveQ').style.display = ''; }
    lobby.hostState = state.state;
    lobby.curQ = (state.current_q != null ? state.current_q : (lobby.curQ || 0));
    lobby.qCount = state.q_count || lobby.qCount || 1;
    if (state.state === 'QUESTION_ACTIVE') hostActive();
    else if (state.state === 'QUESTION_RESULTS') hostResults();
    else if (state.state === 'LEADERBOARD') hostLeaderboard(false);
    else if (state.state === 'COMPLETED') hostPodium();
  }

  function hostHideStage() {
    $('liveTiles').innerHTML = ''; $('liveMeta').innerHTML = '';
    show($('liveLeader'), false);
    $('liveTimer').style.visibility = 'hidden';
  }

  // ── podium builder (reused host-side) ─────────────────────────────
  function medalAva(name) {
    return '<span class="q-pod-ava" style="background:' + avatarColor(name) + '">' + esc((name[0] || '?').toUpperCase()) + '</span>';
  }
  function podiumHTML(standings) {
    // standings ranked; take distinct top positions for 3 pedestals
    var p1 = standings[0], p2 = standings[1], p3 = standings[2];
    function pod(p, rank, medal) {
      if (!p) return '<div class="q-pod q-pod-' + rank + '" style="visibility:hidden"></div>';
      return '<div class="q-pod q-pod-' + rank + '" data-rank="' + rank + '">' +
        '<div class="q-pod-medal">' + medal + '</div>' + medalAva(p.name) +
        '<div class="q-pod-name">' + esc(p.name) + '</div>' +
        '<div class="q-pod-score">' + p.score + '</div>' +
        '<div class="q-pod-bar">' + rank + '</div></div>';
    }
    // visual order: 2nd, 1st, 3rd
    return '<div class="q-podium">' + pod(p2, 2, '🥈') + pod(p1, 1, '🥇') + pod(p3, 3, '🥉') + '</div>';
  }
  function revealPodium(container, onFirst) {
    var order = ['3', '2', '1'];
    var i = 0;
    (function step() {
      if (i >= order.length) return;
      var el = container.querySelector('.q-pod-' + order[i]);
      if (el && el.getAttribute('data-rank')) {
        el.classList.add('revealed');
        if (order[i] === '1' && onFirst) onFirst();
      }
      i++;
      setTimeout(step, QuizzFX.reduceMotion() ? 0 : 750);
    })();
  }

  async function hostPodium() {
    clearLiveTimers(); hostHideStage();
    $('liveProgress').textContent = 'Final results';
    $('liveQ').textContent = '';
    $('liveNext').textContent = 'Back to dashboard';
    try {
      var sum = await rpc('quiz_session_summary', { p_session_id: lobby.sessionId });
      var st = sum.standings || [];
      var rest = st.slice(3).map(function (p) {
        return '<div class="q-lb-row"><span class="q-lb-rank">' + p.rank + '</span>' +
          '<span class="q-lb-name">' + esc(p.name) + '</span><span class="q-lb-score">' + p.score + '</span></div>';
      }).join('');
      var pod = $('livePodium');
      pod.innerHTML =
        '<div class="q-podium-wrap"><div class="q-podium-title">🏆 ' + esc(sum.title || 'Final results') + '</div>' +
        '<div class="q-podium-sub">' + (sum.total_players || 0) + ' player' + (sum.total_players === 1 ? '' : 's') + ' · ' + (sum.q_count || 0) + ' questions</div>' +
        podiumHTML(st) +
        (rest ? '<div class="q-podium-rest">' + rest + '</div>' : '') +
        '<div class="q-podium-actions">' +
          '<button class="q-btn q-btn-ghost" id="podSkip">Skip animation</button>' +
          (lobby.quizId ? '<button class="q-btn q-btn-primary" id="podAgain">Host again</button>' : '') +
        '</div></div>';
      show(pod, true);
      var skip = $('podSkip');
      if (skip) skip.addEventListener('click', function () {
        Array.prototype.forEach.call(pod.querySelectorAll('.q-pod[data-rank]'), function (e) { e.classList.add('revealed'); });
      });
      var again = $('podAgain');
      if (again) again.addEventListener('click', function () { var qid = lobby.quizId; leaveLobby(); hostQuiz(qid); });
      // sequential reveal + celebration
      revealPodium(pod, function () {
        if (!QuizzFX.reduceMotion()) QuizzFX.confetti();
      });
    } catch (e) { toast(e.message, 'err'); }
  }

  function hostTilesHTML(q, counts, correct) {
    var map = [['a', 'A'], ['b', 'B'], ['c', 'C'], ['d', 'D']];
    return map.map(function (m) {
      var low = m[0], L = m[1];
      var cnt = counts ? (counts[L] || 0) : null;
      var isC = correct && correct === L;
      return '<div class="q-live-tile ' + low + (isC ? ' correct' : '') + '">' +
        '<span class="glyph">' + GLYPH[L] + '</span>' +
        '<span class="txt">' + esc(q[low] || '') + '</span>' +
        (cnt != null ? '<span class="q-tile-count">' + cnt + '</span>' : '') +
        '<span class="q-tile-check">✓</span></div>';
    }).join('');
  }


  async function hostActive() {
    show($('liveLeader'), false); $('liveTiles').classList.remove('revealed');
    $('liveTimer').style.visibility = 'visible';
    $('liveNext').textContent = 'Skip to results →';
    try {
      var q = await rpc('quiz_question', { p_session_id: lobby.sessionId });
      if (q.state && q.state !== 'QUESTION_ACTIVE') { showLive(q); return; }
      lobby.qCount = q.q_count; lobby.curQ = q.idx;
      $('liveProgress').textContent = 'Question ' + (q.idx + 1) + ' / ' + q.q_count;
      $('liveQ').textContent = q.text;
      $('liveTiles').innerHTML = hostTilesHTML(q, null, null);
      $('liveTiles').classList.remove('revealed');
      $('liveMeta').textContent = '0 answered';
      // server-authoritative countdown
      var offset = Date.now() - Date.parse(q.server_now);
      var deadline = Date.parse(q.q_started_at) + q.q_duration * 1000;
      var total = q.q_duration;
      show($('liveTimeup'), false);
      var tick = function () {
        var remaining = (deadline - (Date.now() - offset)) / 1000;
        QuizzFX.updateRing($('liveTimer'), remaining, total);
        if (remaining <= 0) { clearInterval(lobby.timer); lobby.timer = null; show($('liveTimeup'), true); }
      };
      if (lobby.timer) clearInterval(lobby.timer);   // never stack intervals
      tick(); lobby.timer = setInterval(tick, 200);
      // poll live answer count (host-only tally)
      if (lobby.poll) clearInterval(lobby.poll);
      lobby.poll = setInterval(async function () {
        try {
          var r = await rpc('quiz_results', { p_session_id: lobby.sessionId });
          if (r.state !== 'QUESTION_ACTIVE') return;
          $('liveMeta').textContent = (r.total_answered || 0) + ' of ' + (r.total_players || 0) + ' answered';
        } catch (e) {}
      }, 1500);
    } catch (e) { toast(e.message, 'err'); }
  }

  async function hostResults() {
    clearLiveTimers();
    $('liveTimer').style.visibility = 'hidden';
    $('liveNext').textContent = 'Leaderboard →';
    try {
      var r = await rpc('quiz_results', { p_session_id: lobby.sessionId });
      var q = await rpc('quiz_question', { p_session_id: lobby.sessionId });
      $('liveProgress').textContent = 'Question ' + (r.idx + 1) + ' / ' + r.q_count;
      if (q.text) $('liveQ').textContent = q.text;
      $('liveTiles').innerHTML = hostTilesHTML(q, r.counts, r.correct_option);
      $('liveTiles').classList.add('revealed');
      show($('liveLeader'), false);
      var meta = (r.total_answered || 0) + ' of ' + (r.total_players || 0) + ' answered';
      if (r.explanation) meta += '<div class="q-expl-box"><b>Why:</b> ' + esc(r.explanation) + '</div>';
      $('liveMeta').innerHTML = meta;
    } catch (e) { toast(e.message, 'err'); }
  }

  async function hostLeaderboard(isFinal) {
    clearLiveTimers();
    $('liveTimer').style.visibility = 'hidden';
    try {
      var lb = await rpc('quiz_leaderboard', { p_session_id: lobby.sessionId });
      $('liveProgress').textContent = isFinal ? 'Final results' : 'Standings';
      $('liveQ').textContent = isFinal ? '🏆 Final leaderboard' : 'Leaderboard';
      $('liveTiles').innerHTML = ''; $('liveMeta').innerHTML = '';
      var rows = (lb.top || []).map(function (p) {
        var cls = p.rank === 1 ? 'top1' : p.rank === 2 ? 'top2' : p.rank === 3 ? 'top3' : '';
        return '<div class="q-lb-row ' + cls + '"><span class="q-lb-rank">' + p.rank + '</span>' +
          '<span class="q-lb-name">' + esc(p.name) + '</span>' +
          '<span class="q-lb-score">' + p.score + '</span></div>';
      }).join('');
      $('liveLeader').innerHTML = rows || '<div class="q-lobby-empty">No scores yet.</div>';
      show($('liveLeader'), true);
      $('liveNext').textContent = isFinal ? 'Back to dashboard'
        : ((lobby.curQ + 1 < lobby.qCount) ? 'Next question →' : 'Final results →');
    } catch (e) { toast(e.message, 'err'); }
  }

  async function liveNext() {
    if (lobby.hostState === 'COMPLETED') { leaveLobby(); goScreen('dashboard'); loadDashboard(); return; }
    $('liveNext').disabled = true;
    try { var r = await rpc('quiz_next', { p_session_id: lobby.sessionId }); showLive(r); }
    catch (e) { toast(e.message, 'err'); }
    finally { $('liveNext').disabled = false; }
  }

  async function kickPlayer(pid) {
    try { await rpc('quiz_kick', { p_session_id: lobby.sessionId, p_participant_id: pid }); loadLobby(); }
    catch (e) { toast(e.message, 'err'); }
  }

  async function endGame() {
    if (!window.confirm('End this game for everyone?')) return;
    try { await rpc('quiz_end_session', { p_session_id: lobby.sessionId }); } catch (e) {}
    leaveLobby(); toast('Game ended.'); goScreen('dashboard'); loadDashboard();
  }

  function leaveLobby() {
    clearLiveTimers();
    if (lobby.channel) { try { sb.removeChannel(lobby.channel); } catch (e) {} }
    lobby = { sessionId: null, pin: null, channel: null, debounce: null };
  }

  function copyJoinLink() {
    var url = lobby.joinUrl || (window.location.origin + '/quizzes/join?pin=' + lobby.pin);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { toast('Join link copied.', 'ok'); })
        .catch(function () { toast(url); });
    } else { window.prompt('Copy the join link:', url); }
  }

  // =====================================================================
  //  PREVIEW (as a participant)
  // =====================================================================
  var pv = { i: 0, revealed: false };
  function openPreview() {
    syncFromDOM();
    if (!studio.questions.length) { toast('Nothing to preview yet.', 'err'); return; }
    pv.i = 0; pv.revealed = false;
    $('previewModal').classList.add('is-open');
    renderPreview();
  }
  function closePreview() { $('previewModal').classList.remove('is-open'); }
  function renderPreview() {
    var q = studio.questions[pv.i];
    $('pvCount').textContent = (pv.i + 1) + ' / ' + studio.questions.length;
    var letters = ['a', 'b', 'c', 'd'], LMAP = { a: 'A', b: 'B', c: 'C', d: 'D' };
    var tiles = letters.map(function (l) {
      var L = LMAP[l];
      var correct = q.correct === L ? ' correct' : '';
      return '<button class="q-pv-tile ' + l + correct + '"><span class="glyph">' + GLYPH[L] + '</span>' +
        '<span>' + esc(q[l] || ('Option ' + L)) + '</span></button>';
    }).join('');
    var expl = (pv.revealed && q.explanation)
      ? '<div class="q-pv-expl"><b>Why:</b> ' + esc(q.explanation) + '</div>' : '';
    $('pvBody').innerHTML =
      '<div class="q-pv-q">' + esc(q.text || 'Untitled question') + '</div>' +
      '<div class="q-pv-tiles' + (pv.revealed ? ' revealed' : '') + '">' + tiles + '</div>' + expl;
    $('pvReveal').textContent = pv.revealed ? 'Hide answer' : 'Reveal answer';
    $('pvPrev').disabled = pv.i === 0;
    $('pvNext').disabled = pv.i === studio.questions.length - 1;
  }

  // =====================================================================
  //  WIRE UP
  // =====================================================================
  function bind() {
    initTheme();
    // auth
    $('qTopLoginBtn').addEventListener('click', openAuth);
    $('qLogoutBtn').addEventListener('click', logout);
    $('authCancel').addEventListener('click', closeAuth);
    $('googleBtn').addEventListener('click', googleLogin);
    $('authForm').addEventListener('submit', submitAuth);
    $('authModal').addEventListener('click', function (e) { if (e.target === $('authModal')) closeAuth(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeAuth(); closePreview(); }
    });
    var tabs = document.querySelectorAll('[data-authtab]');
    for (var i = 0; i < tabs.length; i++) (function (el) {
      el.addEventListener('click', function () { setAuthTab(el.getAttribute('data-authtab')); });
    })(tabs[i]);

    // welcome
    var goCreate = function () { if (currentUser) { goScreen('dashboard'); loadDashboard(); } else openAuth(); };
    var focusJoin = function () { var el = $('pathJoin'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); setTimeout(function () { $('joinPin').focus(); }, 300); };
    $('pathCreate').addEventListener('click', goCreate);
    $('ctaCreate').addEventListener('click', goCreate);
    $('ctaJoin').addEventListener('click', focusJoin);
    $('pathJoin').addEventListener('click', function () { $('joinPin').focus(); });
    $('joinGoBtn').addEventListener('click', tryJoin);
    $('joinPin').addEventListener('keydown', function (e) { if (e.key === 'Enter') tryJoin(); });
    $('joinPin').addEventListener('input', function () { this.value = this.value.replace(/\D/g, '').slice(0, 6); });

    // dashboard
    $('newQuizBtn').addEventListener('click', function () { openStudio(null); });
    $('dashJoinBtn').addEventListener('click', function () { window.location.href = '/quizzes/play'; });
    $('qDashBtn').addEventListener('click', function () { goScreen('dashboard'); loadDashboard(); });
    document.querySelector('[data-nav="welcome"]').addEventListener('click', function (e) { e.preventDefault(); goScreen('welcome'); });

    // studio
    $('studioBack').addEventListener('click', function () { goScreen('dashboard'); loadDashboard(); });
    $('studioSave').addEventListener('click', function () { saveStudio(false); });
    $('studioPublish').addEventListener('click', function () { saveStudio(true); });
    $('studioPreview').addEventListener('click', openPreview);
    $('addQBtn').addEventListener('click', addBlankQuestion);
    $('parseBtn').addEventListener('click', doParse);
    $('pasteSample').addEventListener('click', function () { $('pasteBox').value = SAMPLE; });

    // lobby
    $('lobbyStart').addEventListener('click', startGame);
    $('lobbyEnd').addEventListener('click', endGame);
    $('liveEnd').addEventListener('click', endGame);
    $('liveNext').addEventListener('click', liveNext);
    $('lobbyCopy').addEventListener('click', copyJoinLink);

    // preview
    $('pvClose').addEventListener('click', closePreview);
    $('previewModal').addEventListener('click', function (e) { if (e.target === $('previewModal')) closePreview(); });
    $('pvPrev').addEventListener('click', function () { if (pv.i > 0) { pv.i--; pv.revealed = false; renderPreview(); } });
    $('pvNext').addEventListener('click', function () { if (pv.i < studio.questions.length - 1) { pv.i++; pv.revealed = false; renderPreview(); } });
    $('pvReveal').addEventListener('click', function () { pv.revealed = !pv.revealed; renderPreview(); });
  }

  function tryJoin() {
    var pin = ($('joinPin').value || '').replace(/\D/g, '');
    if (pin.length !== 6) { toast('Enter the 6-digit game PIN.', 'err'); $('joinPin').focus(); return; }
    window.location.href = '/quizzes/play?pin=' + pin;
  }

  async function init() {
    bind();
    initReveal();
    try {
      var res = await sb.auth.getSession();
      var session = res && res.data ? res.data.session : null;
      currentUser = session ? session.user : null;
      renderAuthUI();
      if (session) touchHost('quizzes_session');
    } catch (e) { currentUser = null; renderAuthUI(); }
    routeByPath();
    window.addEventListener('popstate', routeByPath);
    sb.auth.onAuthStateChange(function (event, session) {
      var wasUser = !!currentUser;
      currentUser = session ? session.user : null;
      renderAuthUI();
      if (event === 'SIGNED_IN' && session && !wasUser) { goScreen('dashboard'); loadDashboard(); touchHost('quizzes_login'); }
      if (event === 'SIGNED_OUT') goScreen('welcome');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

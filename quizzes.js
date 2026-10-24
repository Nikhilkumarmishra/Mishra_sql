/* =====================================================================
   AnalystWorld Quizz — host app (Phase B foundation + auth)
   Self-contained. Loads supabase-js from CDN (this page only) and reuses
   the SAME login as the main site by binding supabase-js to the existing
   `msql_sess` localStorage key. No existing file is touched.
   ===================================================================== */
(function () {
  'use strict';

  // ── config (public anon key — safe in the client, same as main site) ──
  var SUPABASE_URL  = 'https://wyxutuqckkdkraawyxff.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eHV0dXFja2tka3JhYXd5eGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMzQ3NzksImV4cCI6MjA5MzcxMDc3OX0.ale0hHkE36PPQwKiqo5ViS3bi28krpU8gHXiWCKyLAU';
  var SESSION_KEY   = 'msql_sess';   // shared with the main site's Auth client

  if (!window.supabase || !window.supabase.createClient) {
    console.error('[quizz] supabase-js failed to load');
  }

  // supabase-js persists the session under `msql_sess` in the SAME flat shape
  // the main site's hand-rolled Auth client uses (access_token / refresh_token
  // / expires_at / user), so a login here keeps you logged in on the main site
  // and vice-versa.
  var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
    auth: {
      storageKey: SESSION_KEY,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: 'pkce'
    }
  });
  window.QUIZZ_SB = sb; // reused by later-phase scripts on this page

  // ── tiny DOM helpers ──────────────────────────────────────────────
  function $(id) { return document.getElementById(id); }
  function show(el, on) { if (el) el.classList.toggle('q-hidden', !on); }

  function toast(msg, kind) {
    var wrap = $('toasts'); if (!wrap) return;
    var t = document.createElement('div');
    t.className = 'q-toast' + (kind ? ' ' + kind : '');
    t.textContent = msg;
    wrap.appendChild(t);
    setTimeout(function () {
      t.style.transition = 'opacity .3s, transform .3s';
      t.style.opacity = '0'; t.style.transform = 'translateY(8px)';
      setTimeout(function () { t.remove(); }, 320);
    }, 2600);
  }

  // ── theme ─────────────────────────────────────────────────────────
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('quizz_theme'); } catch (e) {}
    if (saved === 'dark' || saved === 'light') {
      document.documentElement.setAttribute('data-theme', saved);
    }
    var btn = $('qThemeToggle');
    if (btn) btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      if (!cur) {
        cur = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('quizz_theme', next); } catch (e) {}
    });
  }

  // ── screen router ─────────────────────────────────────────────────
  function goScreen(name) {
    var screens = document.querySelectorAll('.q-screen');
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.toggle('is-active', screens[i].id === 'screen-' + name);
    }
    window.scrollTo(0, 0);
  }

  // ── auth state ────────────────────────────────────────────────────
  var currentUser = null;

  function displayName(u) {
    if (!u) return '';
    var m = u.user_metadata || {};
    return m.full_name || m.name || (u.email ? u.email.split('@')[0] : 'Host');
  }

  function renderAuthUI() {
    var loggedIn = !!currentUser;
    show($('qTopAuth'), !loggedIn);
    show($('qTopUser'), loggedIn);
    if (loggedIn) {
      var name = displayName(currentUser);
      $('qUserName').textContent = name;
      $('qAvatar').textContent = (name[0] || '?').toUpperCase();
    }
  }

  // record/refresh host source-tracking (fire-and-forget; never blocks UI)
  function touchHost(source) {
    sb.rpc('quiz_touch_host', { p_source: source || 'quizzes_web' })
      .then(function (res) {
        if (res.error) console.warn('[quizz] touch_host:', res.error.message || res.error);
      })
      .catch(function (e) { console.warn('[quizz] touch_host failed', e); });
  }

  // ── dashboard shell (Phase B) ─────────────────────────────────────
  // Real quiz listing/stats arrive in Phase C via a quiz_my_quizzes RPC
  // (quiz_ tables are RLS deny-all, so there's nothing to read directly yet).
  function renderDashboard() {
    $('dashGreeting').textContent = 'Welcome back, ' + displayName(currentUser).split(' ')[0] + '.';
    var body = $('dashBody');
    body.innerHTML =
      '<div class="q-empty">' +
        '<div class="q-empty-ico">🗂️</div>' +
        '<h3>No quizzes yet</h3>' +
        '<p>Build your first quiz by pasting your multiple-choice questions — it takes a minute.</p>' +
        '<div style="margin-top:18px"><button class="q-btn q-btn-primary q-btn-lg" id="emptyCreateBtn">+ Create your first quiz</button></div>' +
      '</div>';
    var b = $('emptyCreateBtn');
    if (b) b.addEventListener('click', openStudioComingSoon);
  }

  function openStudioComingSoon() {
    toast('Quiz Studio lands in the next build 🛠️');
  }

  // ── auth modal ────────────────────────────────────────────────────
  var authTab = 'login';

  function openAuth() {
    $('authError').textContent = '';
    $('authModal').classList.add('is-open');
    setTimeout(function () { var e = $('authEmail'); if (e) e.focus(); }, 60);
  }
  function closeAuth() { $('authModal').classList.remove('is-open'); }

  function setAuthTab(tab) {
    authTab = tab;
    var tabs = document.querySelectorAll('[data-authtab]');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle('is-active', tabs[i].getAttribute('data-authtab') === tab);
    }
    $('authTitle').textContent = tab === 'signup' ? 'Create a host account' : 'Host login';
    $('authSubmit').textContent = tab === 'signup' ? 'Create account' : 'Sign in';
    $('authPassword').setAttribute('autocomplete', tab === 'signup' ? 'new-password' : 'current-password');
    $('authError').textContent = '';
  }

  async function submitAuth(e) {
    e.preventDefault();
    var email = ($('authEmail').value || '').trim();
    var pw    = $('authPassword').value || '';
    var errEl = $('authError');
    errEl.textContent = '';
    if (!email || !pw) { errEl.textContent = 'Enter your email and password.'; return; }
    if (authTab === 'signup' && pw.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; return; }

    var btn = $('authSubmit'); btn.disabled = true;
    var original = btn.textContent; btn.textContent = '…';
    try {
      var res;
      if (authTab === 'signup') {
        res = await sb.auth.signUp({ email: email, password: pw });
      } else {
        res = await sb.auth.signInWithPassword({ email: email, password: pw });
      }
      if (res.error) { errEl.textContent = friendlyAuthError(res.error.message); return; }
      if (authTab === 'signup' && res.data && res.data.user && !res.data.session) {
        toast('Check your email to confirm your account.');
        closeAuth();
        return;
      }
      // signed in — onAuthStateChange will finish the rest
      closeAuth();
      touchHost(authTab === 'signup' ? 'quizzes_signup' : 'quizzes_login');
    } catch (err) {
      errEl.textContent = 'Something went wrong — please try again.';
    } finally {
      btn.disabled = false; btn.textContent = original;
    }
  }

  function friendlyAuthError(msg) {
    msg = msg || '';
    if (/invalid login/i.test(msg)) return 'Email or password is incorrect.';
    if (/already registered|already been/i.test(msg)) return 'That email already has an account — try signing in.';
    if (/rate/i.test(msg)) return 'Too many attempts — wait a moment and try again.';
    return msg;
  }

  async function googleLogin() {
    try {
      var res = await sb.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + '/quizzes' }
      });
      if (res.error) toast(res.error.message, 'err');
    } catch (e) { toast('Google sign-in failed.', 'err'); }
  }

  async function logout() {
    try { await sb.auth.signOut(); } catch (e) {}
    toast('Signed out.');
  }

  // ── join flow ─────────────────────────────────────────────────────
  function tryJoin() {
    var pin = ($('joinPin').value || '').replace(/\D/g, '');
    if (pin.length !== 6) { toast('Enter the 6-digit game PIN.', 'err'); $('joinPin').focus(); return; }
    window.location.href = '/quizzes/play?pin=' + pin;
  }

  // ── wire up ───────────────────────────────────────────────────────
  function bind() {
    initTheme();

    $('qTopLoginBtn').addEventListener('click', openAuth);
    $('qLogoutBtn').addEventListener('click', logout);
    $('authCancel').addEventListener('click', closeAuth);
    $('googleBtn').addEventListener('click', googleLogin);
    $('authForm').addEventListener('submit', submitAuth);
    $('authModal').addEventListener('click', function (e) { if (e.target === $('authModal')) closeAuth(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAuth(); });

    var tabs = document.querySelectorAll('[data-authtab]');
    for (var i = 0; i < tabs.length; i++) {
      (function (el) { el.addEventListener('click', function () { setAuthTab(el.getAttribute('data-authtab')); }); })(tabs[i]);
    }

    // welcome paths
    $('pathCreate').addEventListener('click', function () {
      if (currentUser) { goScreen('dashboard'); } else { openAuth(); }
    });
    $('pathJoin').addEventListener('click', function () { $('joinPin').focus(); });
    $('joinGoBtn').addEventListener('click', tryJoin);
    $('joinPin').addEventListener('keydown', function (e) { if (e.key === 'Enter') tryJoin(); });
    $('joinPin').addEventListener('input', function () {
      this.value = this.value.replace(/\D/g, '').slice(0, 6);
    });

    // dashboard
    $('newQuizBtn').addEventListener('click', openStudioComingSoon);
    document.querySelector('[data-nav="welcome"]').addEventListener('click', function (e) {
      e.preventDefault(); goScreen('welcome');
    });
  }

  function applySession(session) {
    currentUser = session ? session.user : null;
    renderAuthUI();
    if (currentUser) {
      goScreen('dashboard');
      renderDashboard();
    } else {
      goScreen('welcome');
    }
  }

  async function init() {
    bind();
    // detectSessionInUrl handles the OAuth redirect; getSession reads msql_sess
    try {
      var res = await sb.auth.getSession();
      var session = res && res.data ? res.data.session : null;
      applySession(session);
      if (session) touchHost('quizzes_session');
    } catch (e) {
      applySession(null);
    }
    // keep UI in sync with sign-in / sign-out / token refresh
    sb.auth.onAuthStateChange(function (event, session) {
      applySession(session);
      if (event === 'SIGNED_IN' && session) touchHost('quizzes_login');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();

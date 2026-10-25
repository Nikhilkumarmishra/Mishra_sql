/* =====================================================================
   AnalystWorld Quizz — participant app (Phase D: join + lobby + sync)
   Anonymous: joins by PIN with a private reconnect token stored locally,
   subscribes to the session row over Realtime so it flips with the host,
   heartbeats via quiz_sync and detects a kick. No account, no host code.
   Self-contained; loads supabase-js (CDN) on this page only.
   ===================================================================== */
(function () {
  'use strict';

  var SUPABASE_URL  = 'https://wyxutuqckkdkraawyxff.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eHV0dXFja2tka3JhYXd5eGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMzQ3NzksImV4cCI6MjA5MzcxMDc3OX0.ale0hHkE36PPQwKiqo5ViS3bi28krpU8gHXiWCKyLAU';

  // participant uses an isolated storage key so it never collides with the
  // host's msql_sess session; anon access only.
  var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
    auth: { storageKey: 'quizz_anon', persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
  });

  function $(id) { return document.getElementById(id); }
  function toast(msg, kind) {
    var w = $('toasts'); if (!w) return;
    var t = document.createElement('div');
    t.className = 'q-toast' + (kind ? ' ' + kind : ''); t.textContent = msg; w.appendChild(t);
    setTimeout(function () { t.style.transition = 'opacity .3s'; t.style.opacity = '0'; setTimeout(function () { t.remove(); }, 320); }, 2600);
  }
  function go(name) {
    var s = document.querySelectorAll('.q-screen');
    for (var i = 0; i < s.length; i++) s[i].classList.toggle('is-active', s[i].id === name);
    window.scrollTo(0, 0);
  }

  // theme (shared preference with the host page)
  try { var th = localStorage.getItem('quizz_theme'); if (th === 'dark' || th === 'light') document.documentElement.setAttribute('data-theme', th); } catch (e) {}
  $('qThemeToggle').addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('quizz_theme', next); } catch (e) {}
  });

  var me = { sessionId: null, token: null, participantId: null, name: null, pin: null };
  var channel = null, heartbeat = null;

  function saveMe() { try { localStorage.setItem('quizz_play_' + me.pin, JSON.stringify(me)); } catch (e) {} }
  function clearMe() { try { localStorage.removeItem('quizz_play_' + me.pin); } catch (e) {} }

  function setNames() {
    if ($('youName')) $('youName').textContent = me.name || 'You';
    if ($('youName2')) $('youName2').textContent = me.name || 'You';
  }

  async function doJoin(pin, name, token) {
    var res = await sb.rpc('quiz_join', { p_pin: pin, p_name: name || null, p_token: token || null });
    if (res.error) throw new Error(res.error.message || 'Could not join.');
    var d = res.data;
    me.sessionId = d.session_id; me.token = d.token; me.participantId = d.participant_id;
    me.name = d.name; me.pin = pin;
    saveMe(); setNames();
    applyState(d.state);
    subscribe();
    startHeartbeat();
    return d;
  }

  function applyState(state) {
    if (state === 'LOBBY') go('p-lobby');
    else if (state === 'COMPLETED') { go('p-end'); teardown(); }
    else { // QUESTION_ACTIVE / QUESTION_RESULTS / LEADERBOARD
      go('p-live');
    }
  }

  function subscribe() {
    if (channel) { try { sb.removeChannel(channel); } catch (e) {} }
    channel = sb.channel('play:' + me.sessionId)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'quiz_sessions', filter: 'id=eq.' + me.sessionId },
        function (payload) {
          var st = payload.new;
          if ($('playerCount')) {
            $('playerCount').textContent = st.participant_count;
            $('playerCountS').textContent = st.participant_count === 1 ? '' : 's';
          }
          if ($('liveQnum')) $('liveQnum').textContent = 'Question ' + ((st.current_q != null ? st.current_q : 0) + 1);
          applyState(st.state);
        })
      .subscribe();
  }

  function startHeartbeat() {
    stopHeartbeat();
    heartbeat = setInterval(syncNow, 15000);
    document.addEventListener('visibilitychange', onVis);
    syncNow();
  }
  function stopHeartbeat() { if (heartbeat) clearInterval(heartbeat); heartbeat = null; }
  function onVis() { if (!document.hidden) syncNow(); }

  async function syncNow() {
    if (!me.sessionId || !me.token) return;
    try {
      var res = await sb.rpc('quiz_sync', { p_session_id: me.sessionId, p_token: me.token });
      if (res.error) return;
      var d = res.data;
      if (!d.found) { return; }
      if (d.connection_state === 'kicked') { go('p-kicked'); clearMe(); teardown(); return; }
      if ($('playerCount')) $('playerCount').textContent = d.participant_count;
      applyState(d.session_state);
    } catch (e) {}
  }

  function teardown() {
    stopHeartbeat();
    document.removeEventListener('visibilitychange', onVis);
    if (channel) { try { sb.removeChannel(channel); } catch (e) {} channel = null; }
  }

  // ── join form ─────────────────────────────────────────────────────
  function bindJoinForm() {
    var params = new URLSearchParams(window.location.search);
    var pin = (params.get('pin') || '').replace(/\D/g, '').slice(0, 6);
    if (pin) $('pin').value = pin;
    $('pin').addEventListener('input', function () { this.value = this.value.replace(/\D/g, '').slice(0, 6); });
    $('joinBtn').addEventListener('click', submitJoin);
    $('nick').addEventListener('keydown', function (e) { if (e.key === 'Enter') submitJoin(); });
    $('leaveBtn').addEventListener('click', function () {
      clearMe(); teardown(); me = { sessionId: null, token: null, participantId: null, name: null, pin: null };
      go('p-join');
    });
  }

  async function submitJoin() {
    var err = $('joinError'); err.textContent = '';
    var pin = ($('pin').value || '').replace(/\D/g, '');
    var name = ($('nick').value || '').trim();
    if (pin.length !== 6) { err.textContent = 'Enter the 6-digit game PIN.'; return; }
    if (!name) { err.textContent = 'Pick a nickname.'; return; }
    var btn = $('joinBtn'); btn.disabled = true; var o = btn.textContent; btn.textContent = 'Joining…';
    try { await doJoin(pin, name, null); }
    catch (e) { err.textContent = e.message; }
    finally { btn.disabled = false; btn.textContent = o; }
  }

  // ── auto-reconnect if we already have a token for this PIN ─────────
  async function tryReconnect() {
    var params = new URLSearchParams(window.location.search);
    var pin = (params.get('pin') || '').replace(/\D/g, '').slice(0, 6);
    if (!pin) return false;
    var saved = null;
    try { saved = JSON.parse(localStorage.getItem('quizz_play_' + pin) || 'null'); } catch (e) {}
    if (!saved || !saved.token) return false;
    me.pin = pin;
    try { await doJoin(pin, saved.name, saved.token); return true; }
    catch (e) { clearMe(); return false; }
  }

  async function init() {
    bindJoinForm();
    var ok = await tryReconnect();
    if (!ok) go('p-join');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

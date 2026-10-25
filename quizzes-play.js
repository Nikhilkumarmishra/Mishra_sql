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
  var channel = null, heartbeat = null, ptimer = null;
  var GLYPH = { A: '▲', B: '●', C: '■', D: '◆' };
  var live = { state: null, qid: null, answered: false, picked: null, score: 0, renderedQ: -1 };

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

  function esc(s){ return (s==null?'':String(s)).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function clearPTimer(){ if (ptimer){ clearInterval(ptimer); ptimer=null; } }

  function applyState(state) {
    if (state === live.state && (state === 'QUESTION_RESULTS' || state === 'LEADERBOARD')) return; // avoid re-fetch loops
    live.state = state;
    if (state === 'LOBBY') { clearPTimer(); go('p-lobby'); }
    else if (state === 'QUESTION_ACTIVE') { go('p-live'); pActive(); }
    else if (state === 'QUESTION_RESULTS') { clearPTimer(); go('p-live'); pResults(); }
    else if (state === 'LEADERBOARD') { clearPTimer(); go('p-live'); pLeaderboard(); }
    else if (state === 'COMPLETED') { clearPTimer(); pCompleted(); }
  }

  async function pActive() {
    try {
      var q = await sb.rpc('quiz_question', { p_session_id: me.sessionId, p_token: me.token });
      q = q.data; if (!q || q.state !== 'QUESTION_ACTIVE') { if (q) applyState(q.state); return; }
      live.qid = q.question_id;
      live.answered = !!q.answered; live.picked = q.your_option || null;
      live.opts = { A: q.a, B: q.b, C: q.c, D: q.d };
      renderActive(q);
    } catch (e) {}
  }

  function renderActive(q) {
    $('pTimer').style.display = '';
    var map = [['a','A'],['b','B'],['c','C'],['d','D']];
    var tiles = map.map(function (m) {
      var low=m[0], L=m[1];
      return '<button class="q-ptile '+low+(live.picked===L?' picked':'')+'" data-opt="'+L+'">'+
        '<span class="glyph">'+GLYPH[L]+'</span><span>'+esc(q[low]||('Option '+L))+'</span></button>';
    }).join('');
    var locked = live.answered
      ? '<div class="q-plocked"><div class="q-lock-ico">🔒</div>Answer locked in — waiting for the others…</div>' : '';
    $('pLiveBody').innerHTML =
      '<div class="q-plive-q">'+esc(q.text||'')+'</div>'+
      '<div class="q-ptiles'+(live.answered?' locked':'')+'" id="ptiles">'+tiles+'</div>'+locked;
    if (!live.answered) {
      Array.prototype.forEach.call(document.querySelectorAll('#ptiles .q-ptile'), function (b) {
        b.addEventListener('click', function () { submitAnswer(b.getAttribute('data-opt'), q); });
      });
    }
    clearPTimer();
    var offset = Date.now() - Date.parse(q.server_now);
    var deadline = Date.parse(q.q_started_at) + q.q_duration * 1000;
    var tick = function () {
      var remaining = Math.max(0, Math.ceil((deadline - (Date.now() - offset)) / 1000));
      $('pTimer').textContent = remaining; $('pTimer').classList.toggle('low', remaining <= 5);
      if (remaining <= 0) clearPTimer();
    };
    tick(); ptimer = setInterval(tick, 250);
  }

  async function submitAnswer(opt, q) {
    if (live.answered || !live.qid) return;
    live.answered = true; live.picked = opt;          // optimistic lock
    renderActive(q);
    try {
      var res = await sb.rpc('quiz_submit_answer',
        { p_session_id: me.sessionId, p_token: me.token, p_question_id: live.qid, p_option: opt });
      if (res.error) { live.answered = false; live.picked = null; toast(res.error.message, 'err'); renderActive(q); }
    } catch (e) { live.answered = false; live.picked = null; toast('Could not submit.', 'err'); renderActive(q); }
  }

  async function pResults() {
    try {
      var rr = await sb.rpc('quiz_results', { p_session_id: me.sessionId, p_token: me.token });
      var r = rr.data; if (!r) return;
      // option texts (robust even on a reconnect during results)
      if (!live.opts || !live.opts.A) {
        var qq = await sb.rpc('quiz_question', { p_session_id: me.sessionId, p_token: me.token });
        if (qq.data && qq.data.a) live.opts = { A:qq.data.a, B:qq.data.b, C:qq.data.c, D:qq.data.d };
      }
      var you = r.you || {};
      if (you.score != null) { live.score = you.score; $('pScore').textContent = you.score; }
      var answered = you.answered;
      var correct = you.was_correct === true;
      var headline = !answered ? ['no','Too slow!'] : correct ? ['ok','Correct! 🎉'] : ['no','Not this time'];
      var ctext = r.correct_option ? (GLYPH[r.correct_option] + ' ' + esc((live.opts||{})[r.correct_option] || r.correct_option)) : '';
      $('pLiveBody').innerHTML =
        '<div class="q-preveal">'+
          '<div class="q-reveal-badge '+headline[0]+'">'+headline[1]+'</div>'+
          (correct && you.points_earned!=null ? '<div class="q-reveal-pts ok">+'+you.points_earned+'</div>' : '')+
          (!correct && r.correct_option ? '<div class="q-reveal-sub">Correct answer: <b>'+ctext+'</b></div>' : '')+
          (r.explanation?'<div class="q-reveal-sub"><b>Why:</b> '+esc(r.explanation)+'</div>':'')+
          '<div class="q-reveal-sub">Your score: <b>'+(you.score||0)+'</b> · rank <b>#'+(you.rank||'–')+'</b></div>'+
        '</div>';
      $('pTimer').style.display = 'none';
    } catch (e) {}
  }

  async function pLeaderboard() {
    try {
      var lb = await sb.rpc('quiz_leaderboard', { p_session_id: me.sessionId, p_token: me.token });
      lb = lb.data; if (!lb) return;
      var you = lb.you || {};
      if (you.score != null) { live.score = you.score; $('pScore').textContent = you.score; }
      var top = (lb.top||[]).slice(0,5).map(function(p){
        var mine = you && p.name===you.name && p.rank===you.rank;
        return '<div class="q-lb-row'+(p.rank===1?' top1':p.rank===2?' top2':p.rank===3?' top3':'')+'" style="'+(mine?'outline:2px solid var(--brand)':'')+'">'+
          '<span class="q-lb-rank">'+p.rank+'</span><span class="q-lb-name">'+esc(p.name)+'</span><span class="q-lb-score">'+p.score+'</span></div>';
      }).join('');
      $('pLiveBody').innerHTML =
        '<div class="q-standing"><div class="q-standing-rank">#'+(you.rank||'–')+'</div>'+
        '<div class="q-standing-lbl">of '+(lb.total||0)+' players</div>'+
        '<div class="q-standing-score">'+(you.score||0)+' pts</div></div>'+
        '<div style="max-width:420px;margin:0 auto">'+top+'</div>';
      $('pTimer').style.display = 'none';
    } catch (e) {}
  }

  function pAva(name) {
    var colors=['#ef4e6b','#2f86ff','#f5a524','#2fd27a','#7c5cff','#00c896','#ff8a3d','#12b5cb'];
    var h=0; name=name||'?'; for(var i=0;i<name.length;i++) h=(h*31+name.charCodeAt(i))>>>0;
    return '<span class="q-pod-ava" style="background:'+colors[h%colors.length]+'">'+esc((name[0]||'?').toUpperCase())+'</span>';
  }
  function pPodiumHTML(st) {
    function pod(p,rank,medal){
      if(!p) return '<div class="q-pod q-pod-'+rank+'" style="visibility:hidden"></div>';
      return '<div class="q-pod q-pod-'+rank+' revealed"><div class="q-pod-medal">'+medal+'</div>'+pAva(p.name)+
        '<div class="q-pod-name">'+esc(p.name)+'</div><div class="q-pod-score">'+p.score+'</div>'+
        '<div class="q-pod-bar">'+rank+'</div></div>';
    }
    return '<div class="q-podium">'+pod(st[1],2,'🥈')+pod(st[0],1,'🥇')+pod(st[2],3,'🥉')+'</div>';
  }

  async function pCompleted() {
    go('p-end');
    try {
      var r = await sb.rpc('quiz_session_summary', { p_session_id: me.sessionId, p_token: me.token });
      var sum = r.data || {}; var you = sum.you || {}; var st = sum.standings || [];
      var rank = you.rank || null;
      var head = rank === 1 ? 'You won! 🏆' : (rank && rank <= 3) ? 'On the podium! 🎉' : 'Game over';
      $('pEndBody').innerHTML =
        '<div class="q-play-center" style="padding:28px 0 6px">'+
          '<div class="q-play-big" style="margin:0">'+head+'</div>'+
          (rank?'<div class="q-standing-rank">#'+rank+'</div><div class="q-standing-lbl">of '+(sum.total_players||0)+' players</div>':'')+
          '<div class="q-standing-score">'+(you.score||0)+' pts · '+(you.correct_count||0)+' correct</div>'+
        '</div>'+
        '<div class="q-podium-wrap">'+pPodiumHTML(st)+'</div>';
      if (rank && rank <= 3 && window.QuizzFX) QuizzFX.confetti();
    } catch (e) {}
    teardown();
  }

  function subscribe() {
    if (channel) { try { sb.removeChannel(channel); } catch (e) {} }
    channel = sb.channel('play:' + me.sessionId)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'quiz_sessions', filter: 'id=eq.' + me.sessionId },
        function (payload) {
          var st = payload.new;
          if (st.state === 'LOBBY' && $('playerCount')) {
            $('playerCount').textContent = st.participant_count;
            $('playerCountS').textContent = st.participant_count === 1 ? '' : 's';
          }
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
      if (d.score != null) { live.score = d.score; if ($('pScore')) $('pScore').textContent = d.score; }
      if (d.session_state === 'LOBBY' && $('playerCount')) $('playerCount').textContent = d.participant_count;
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

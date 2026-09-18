/* =====================================================================
   PUBLIC SHAREABLE PROFILES  (profile-share.js)
   Self-contained: talks to Supabase SECURITY DEFINER RPCs only.
   Does not modify any existing app.js behaviour.
   ===================================================================== */
(function () {
  'use strict';

  // ---- tiny RPC helper (correctly handles object / array / 204 returns) ----
  async function psRpc(fn, params, needAuth) {
    var token = SUPABASE_ANON;
    if (needAuth) {
      try {
        var s = await Auth.getSession();
        token = (s && s.data && s.data.session && s.data.session.access_token) || SUPABASE_ANON;
      } catch (e) {}
    }
    try {
      var r = await fetch(SUPABASE_URL + '/rest/v1/rpc/' + fn, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + token },
        body: JSON.stringify(params || {})
      });
      if (r.status === 204) return { data: null, error: null };
      var d = await r.json();
      if (!r.ok) return { data: null, error: d };
      return { data: d, error: null };
    } catch (e) { return { data: null, error: { message: e.message } }; }
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function profileUrl(username) { return location.origin + '/u/' + username; }

  // A stable per-browser id so we can dedup views without any PII.
  function viewerSession() {
    try {
      var k = 'aw_vsid', v = localStorage.getItem(k);
      if (!v) { v = (Date.now().toString(36) + Math.random().toString(36).slice(2, 10)); localStorage.setItem(k, v); }
      return v;
    } catch (e) { return null; }
  }

  // ---- referral capture (someone arriving from a profile link) ----
  function captureReferral() {
    try {
      var p = new URLSearchParams(location.search);
      var ref = p.get('ref');
      if (ref) {
        ref = ref.toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 30);
        if (ref) localStorage.setItem('aw_ref', ref);
      }
    } catch (e) {}
  }
  // Called after sign-in: stamp the new user's referrer once.
  async function applyReferralOnSignup() {
    try {
      var ref = localStorage.getItem('aw_ref');
      if (!ref || !currentUser) return;
      if (userProfile && userProfile.referred_by_username) { localStorage.removeItem('aw_ref'); return; }
      // don't let a user refer themselves
      if (userProfile && userProfile.username && userProfile.username.toLowerCase() === ref) { localStorage.removeItem('aw_ref'); return; }
      await Auth.from('user_profiles').eq('id', currentUser.id).update({ referred_by_username: ref });
      if (userProfile) userProfile.referred_by_username = ref;
      localStorage.removeItem('aw_ref');
    } catch (e) {}
  }

  /* ==================================================================
     PUBLIC PROFILE PAGE  (/u/:username)
     ================================================================== */
  async function renderPublicProfile(username) {
    var host = document.getElementById('publicProfileContent');
    if (!host) return;
    username = (username || '').toLowerCase();
    host.innerHTML = '<div class="pp-loading">Loading profile…</div>';

    var res = await psRpc('get_public_profile', { p_username: username }, !!currentUser);
    var d = res.data;
    if (!d || res.error) {
      host.innerHTML =
        '<div class="pp-empty">' +
          '<div class="pp-empty-emoji">🔍</div>' +
          '<h2>Profile not available</h2>' +
          '<p>This profile doesn\'t exist or is set to private.</p>' +
          '<a class="pp-cta" href="/">Explore AnalystWorld →</a>' +
        '</div>';
      return;
    }

    // Map solved question ids -> difficulty using the loaded question banks.
    var all = (typeof getAllQuestions === 'function') ? getAllQuestions() : [];
    var byId = {}; all.forEach(function (q) { byId[q.id] = q; });
    var easy = 0, med = 0, hard = 0;
    var solved = Array.isArray(d.solved) ? d.solved : [];
    solved.forEach(function (s) {
      var q = byId[s.qid]; if (!q) return;
      var diff = (q.difficulty || '').toLowerCase();
      if (diff === 'easy') easy++; else if (diff === 'medium') med++; else if (diff === 'hard') hard++;
    });

    var name = d.name || d.username;
    var initials = name.trim().split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join('').toUpperCase();
    var since = d.member_since ? new Date(d.member_since).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }) : '';
    var certified = !!d.is_certified;

    var links = '';
    if (d.linkedin_url) links += '<a class="pp-link" href="' + esc(d.linkedin_url) + '" target="_blank" rel="noopener nofollow">in · LinkedIn</a>';
    if (d.resume_url)   links += '<a class="pp-link" href="' + esc(d.resume_url) + '" target="_blank" rel="noopener nofollow">📄 Resume</a>';

    host.innerHTML =
      '<div class="pp-card">' +
        '<div class="pp-head">' +
          '<div class="pp-avatar">' + esc(initials) + '</div>' +
          '<div class="pp-id">' +
            '<div class="pp-name">' + esc(name) + (certified ? ' <span class="pp-verified" title="Certified on AnalystWorld">✔ Certified</span>' : '') + '</div>' +
            (d.headline ? '<div class="pp-headline">' + esc(d.headline) + '</div>' : '') +
            (d.qualification ? '<div class="pp-qual">' + esc(d.qualification) + '</div>' : '') +
            '<div class="pp-handle">@' + esc(d.username) + (since ? ' · Member since ' + esc(since) : '') + '</div>' +
          '</div>' +
        '</div>' +
        (d.bio ? '<div class="pp-bio">' + esc(d.bio) + '</div>' : '') +
        (links ? '<div class="pp-links">' + links + '</div>' : '') +

        '<div class="pp-stats">' +
          statTile(d.total_solved, 'Problems Solved') +
          statTile('#' + d.rank, 'Global Rank') +
          statTile(easy, 'Easy') +
          statTile(med, 'Medium') +
          statTile(hard, 'Hard') +
          (certified ? statTile((d.certified_score != null ? d.certified_score : '✓'), 'Cert Score') : '') +
        '</div>' +

        heatmapHtml(solved) +

        '<div class="pp-footer">' +
          '<div class="pp-brand">Verified progress on <strong>Analyst<span>World</span></strong></div>' +
          '<a class="pp-cta" href="/?ref=' + esc(d.username) + '">Start practicing free →</a>' +
        '</div>' +
      '</div>';

    // fire-and-forget view log (deduped server-side)
    var refSrc = '';
    try { refSrc = new URLSearchParams(location.search).get('ref') || ''; } catch (e) {}
    psRpc('log_profile_view', {
      p_username: username, p_session: viewerSession(),
      p_referrer: (document.referrer || '').slice(0, 300), p_ref_source: refSrc
    }, !!currentUser);

    try { document.title = name + ' · AnalystWorld'; } catch (e) {}
  }

  function statTile(v, label) {
    return '<div class="pp-stat"><div class="pp-stat-num">' + esc(v) + '</div><div class="pp-stat-label">' + esc(label) + '</div></div>';
  }

  // Compact ~6-month contribution heatmap from solved timestamps.
  function heatmapHtml(solved) {
    var DAYS = 182;
    var counts = {};
    solved.forEach(function (s) {
      if (!s.at) return;
      var key = new Date(s.at).toISOString().slice(0, 10);
      counts[key] = (counts[key] || 0) + 1;
    });
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var cells = [];
    for (var i = DAYS - 1; i >= 0; i--) {
      var dt = new Date(today); dt.setDate(dt.getDate() - i);
      var key = dt.toISOString().slice(0, 10);
      var n = counts[key] || 0;
      var lvl = n === 0 ? 0 : n === 1 ? 1 : n <= 3 ? 2 : 3;
      cells.push('<div class="pp-hm-cell pp-hm-' + lvl + '" title="' + n + ' on ' + key + '"></div>');
    }
    return '<div class="pp-hm-wrap"><div class="pp-hm-title">Activity (last 6 months)</div>' +
           '<div class="pp-hm">' + cells.join('') + '</div></div>';
  }

  /* ==================================================================
     SETTINGS CARD  (inside the profile page)
     ================================================================== */
  var _unameTimer = null, _unameOk = false;

  function renderShareCard() {
    var card = document.getElementById('pubProfileCard');
    if (!card || !currentUser) return;
    var uname = (userProfile && userProfile.username) || '';
    var isPublic = !!(userProfile && userProfile.is_public);

    var html =
      '<div class="profile-section-title">Your public profile</div>' +
      '<p class="pub-sub">Claim a handle and share a clean link on LinkedIn or your resume. Your email is never shown.</p>' +
      '<div class="form-group">' +
        '<label class="form-label">Username</label>' +
        '<div class="pub-uname-row">' +
          '<span class="pub-uname-prefix">/u/</span>' +
          '<input class="form-input pub-uname-input" id="pubUsername" type="text" maxlength="30" placeholder="your-handle" value="' + esc(uname) + '" oninput="PS.onUsernameInput()"/>' +
        '</div>' +
        '<div class="pub-uname-status" id="pubUnameStatus"></div>' +
        '<button class="form-btn pub-btn" id="pubClaimBtn" onclick="PS.claimUsername()" style="width:auto;padding:9px 22px;margin-top:8px">' + (uname ? 'Update handle' : 'Claim handle') + '</button>' +
      '</div>';

    if (uname) {
      html +=
        '<div class="pub-toggle-row">' +
          '<div><div class="pub-toggle-label">Make profile public</div><div class="pub-toggle-hint">Anyone with the link can view your progress.</div></div>' +
          '<label class="pub-switch"><input type="checkbox" id="pubPublicToggle" ' + (isPublic ? 'checked' : '') + ' onchange="PS.togglePublic(this.checked)"><span class="pub-slider"></span></label>' +
        '</div>';

      if (isPublic) {
        var url = profileUrl(uname);
        html +=
          '<div class="pub-share">' +
            '<div class="pub-link-row">' +
              '<input class="form-input pub-link-input" id="pubShareLink" readonly value="' + esc(url) + '"/>' +
              '<button class="pub-copy-btn" onclick="PS.copyLink()">Copy</button>' +
            '</div>' +
            '<div class="pub-share-actions">' +
              '<a class="pub-share-btn" target="_blank" rel="noopener" href="https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url) + '">Share on LinkedIn</a>' +
              '<a class="pub-share-btn pub-view-btn" target="_blank" rel="noopener" href="' + esc(url) + '">View my profile ↗</a>' +
            '</div>' +
            '<div class="pub-views" id="pubViews"></div>' +
          '</div>';
      }
    }

    card.innerHTML = html;
    if (uname) loadViewCount();
  }

  function setStatus(msg, kind) {
    var el = document.getElementById('pubUnameStatus');
    if (!el) return;
    el.textContent = msg || '';
    el.className = 'pub-uname-status' + (kind ? ' pub-status-' + kind : '');
  }

  function onUsernameInput() {
    _unameOk = false;
    var raw = (document.getElementById('pubUsername').value || '').toLowerCase();
    var cleaned = raw.replace(/[^a-z0-9_-]/g, '');
    if (cleaned !== raw) document.getElementById('pubUsername').value = cleaned;
    if (_unameTimer) clearTimeout(_unameTimer);
    if (!cleaned || cleaned.length < 3) { setStatus(cleaned ? 'At least 3 characters.' : '', 'bad'); return; }
    if ((userProfile && (userProfile.username || '').toLowerCase()) === cleaned) { setStatus('This is your current handle.', 'ok'); _unameOk = true; return; }
    setStatus('Checking…', '');
    _unameTimer = setTimeout(async function () {
      var res = await psRpc('check_username_available', { p_username: cleaned }, !!currentUser);
      var row = res.data && res.data[0];
      if (row && row.available) { setStatus('✓ Available', 'ok'); _unameOk = true; }
      else if (row && row.reason === 'taken') { setStatus('Already taken.', 'bad'); }
      else { setStatus('Not allowed (reserved or invalid).', 'bad'); }
    }, 350);
  }

  async function claimUsername() {
    var btn = document.getElementById('pubClaimBtn');
    var val = (document.getElementById('pubUsername').value || '').toLowerCase();
    if (val.length < 3) { setStatus('At least 3 characters.', 'bad'); return; }
    if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
    var res = await psRpc('set_username', { p_username: val }, true);
    var row = res.data && res.data[0];
    if (btn) btn.disabled = false;
    if (row && row.ok) {
      if (userProfile) userProfile.username = val;
      if (typeof showToast === 'function') showToast('Handle saved!', 'ok');
      renderShareCard();
    } else {
      var why = row ? row.error : (res.error && res.error.message) || 'error';
      setStatus(why === 'taken' ? 'Already taken.' : why === 'invalid' ? 'Not allowed (reserved or invalid).' : 'Could not save.', 'bad');
      if (btn) btn.textContent = (userProfile && userProfile.username) ? 'Update handle' : 'Claim handle';
    }
  }

  async function togglePublic(checked) {
    var res = await psRpc('set_profile_public', { p_public: !!checked }, true);
    var row = res.data && res.data[0];
    if (row && row.ok) {
      if (userProfile) userProfile.is_public = !!checked;
      if (typeof showToast === 'function') showToast(checked ? 'Your profile is now public 🎉' : 'Your profile is now private.', 'ok');
      renderShareCard();
    } else {
      var t = document.getElementById('pubPublicToggle'); if (t) t.checked = !checked;
      if (typeof showToast === 'function') showToast('Could not update. Claim a handle first.', 'error');
    }
  }

  function copyLink() {
    var el = document.getElementById('pubShareLink');
    if (!el) return;
    var done = function () { if (typeof showToast === 'function') showToast('Link copied!', 'ok'); };
    try {
      navigator.clipboard.writeText(el.value).then(done, function () { el.select(); document.execCommand('copy'); done(); });
    } catch (e) { el.select(); document.execCommand('copy'); done(); }
  }

  async function loadViewCount() {
    var el = document.getElementById('pubViews');
    if (!el) return;
    var res = await psRpc('my_profile_view_count', {}, true);
    var row = res.data && res.data[0];
    if (row) el.textContent = '👀 ' + (row.views || 0) + ' total views · ' + (row.views_7d || 0) + ' in the last 7 days';
  }

  // expose
  window.PS = {
    renderPublicProfile: renderPublicProfile,
    renderShareCard: renderShareCard,
    onUsernameInput: onUsernameInput,
    claimUsername: claimUsername,
    togglePublic: togglePublic,
    copyLink: copyLink,
    captureReferral: captureReferral,
    applyReferralOnSignup: applyReferralOnSignup
  };
})();

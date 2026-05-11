// ================================================================
//  MishraSQL — admin.js
//  Admin dashboard. Only accessible when userProfile.is_admin === true.
// ================================================================

// ── NAVIGATION ───────────────────────────────────────────────────
function showAdmin() {
  if (!currentUser || !userProfile || !userProfile.is_admin) {
    alert('Access denied.');
    return;
  }
  _hideAllPages();
  document.getElementById('admin-page').classList.add('active');
  AdminDash.init();
}

function goBackFromAdmin() {
  _hideAllPages();
  document.getElementById('landing-page').classList.add('active');
}

// ── ADMIN DASHBOARD MODULE ────────────────────────────────────────
var AdminDash = (function () {

  var _users       = [];
  var _progress    = [];
  var _certReqs    = [];   // certified users pending email send
  var _solveMap    = {};
  var _userProgMap = {};
  var _minSolves   = 1;
  var _sortCol     = 'created_at';
  var _sortDir     = 'desc';
  var _search      = '';
  var _expandedUser = null;

  // ── DATA LOADING ──────────────────────────────────────────────
  async function init() {
    _showLoading(true);
    await _loadData();
    _showLoading(false);
    _render();
  }

  async function _loadData() {
    try {
      var r = await Auth.from('user_profiles').select('*');
      _users = r.data || [];
    } catch (e) { _users = []; }

    try {
      var r2 = await Auth.from('user_progress').select('*');
      _progress = r2.data || [];
    } catch (e) { _progress = []; }

    _solveMap    = {};
    _userProgMap = {};
    _progress.forEach(function (p) {
      _solveMap[p.user_id] = (_solveMap[p.user_id] || 0) + 1;
      if (!_userProgMap[p.user_id]) _userProgMap[p.user_id] = [];
      _userProgMap[p.user_id].push(p);
    });

    // Cert requests: certified users whose email hasn't been sent yet
    try {
      var cr = await Auth.from('user_profiles')
        .select('*')
        .eq('is_certified', 'true')
        .eq('cert_email_sent', 'false');
      _certReqs = cr.data || [];
    } catch (e) { _certReqs = []; }

    try {
      var cfg = await Auth.from('site_config').select('*').eq('key', 'announcement').single();
      if (cfg.data && cfg.data.value !== undefined) {
        var ta = document.getElementById('adminAnnouncementText');
        if (ta) ta.value = cfg.data.value || '';
      }
    } catch (e) {}
  }

  function _render() {
    _renderKPIs();
    _renderChart();
    _renderCertRequests();
    _renderEngagement();
    _renderUsersTable();
    _renderQuestionAnalytics();
  }

  // ── CERTIFICATE REQUESTS ──────────────────────────────────────
  function _renderCertRequests() {
    var pending = _certReqs.length;
    var badgeEl = document.getElementById('certPendingBadge');
    if (badgeEl) {
      badgeEl.textContent = pending > 0 ? pending + ' pending' : 'All sent ✓';
      badgeEl.style.background = pending > 0 ? '#f59e0b22' : '#16a34a22';
      badgeEl.style.color      = pending > 0 ? '#f59e0b'   : '#4ade80';
      badgeEl.style.border     = pending > 0 ? '1px solid #f59e0b44' : '1px solid #4ade8044';
    }

    var wrap = document.getElementById('certRequestsBody');
    if (!wrap) return;

    if (_certReqs.length === 0) {
      wrap.innerHTML = '<p class="adm-no-data" style="padding:16px 0">No certificate requests yet.</p>';
      return;
    }

    var pendingRows = _certReqs.filter(function(u){ return !u.cert_email_sent; });
    var sentRows    = _certReqs.filter(function(u){ return  u.cert_email_sent; });

    var html = '';

    // ── Pending notification banner ──
    if (pendingRows.length > 0) {
      html += '<div class="cert-req-banner">' +
        '<span class="cert-req-banner-icon">🔔</span>' +
        '<strong>' + pendingRows.length + ' user' + (pendingRows.length > 1 ? 's have' : ' has') + ' earned a certificate and is waiting for it.</strong>' +
        ' Send it manually to their email below.' +
      '</div>';
    }

    // ── Pending table ──
    if (pendingRows.length > 0) {
      html += '<div class="cert-req-group-label">📨 Pending — needs email</div>';
      html += '<div class="adm-table-wrap"><table class="adm-table"><thead><tr>' +
        '<th>Name</th><th>Email</th><th>Score</th><th>Certified On</th><th>Action</th>' +
      '</tr></thead><tbody>';
      pendingRows.forEach(function(u) {
        var name     = _esc(u.display_name || u.full_name || u.email || '—');
        var email    = _esc(u.email || '—');
        var score    = u.certified_score !== null && u.certified_score !== undefined ? u.certified_score + ' / 15' : '—';
        var date     = u.certificate_sent_at ? _fmtDate(u.certificate_sent_at) : '—';
        var mailLink = u.email
          ? 'mailto:' + u.email + '?subject=Your%20MishraSQL%20Certificate&body=Hi%20' + encodeURIComponent(u.display_name || 'there') + '%2C%0A%0ACongratulations%20on%20completing%20the%20MishraSQL%20SQL%20Analyst%20Certification!%0A%0APlease%20find%20your%20certificate%20attached.%0A%0ABest%2C%0AMishraSQL%20Team'
          : '#';
        html += '<tr>' +
          '<td><strong>' + name + '</strong></td>' +
          '<td class="adm-dim">' + email + '</td>' +
          '<td><span class="adm-solve-badge has-solves">' + score + '</span></td>' +
          '<td>' + date + '</td>' +
          '<td>' +
            '<a href="' + mailLink + '" class="cert-req-mail-btn" target="_blank">✉ Open Email</a>' +
            '<button class="cert-req-sent-btn" onclick="AdminDash.markCertSent(\'' + u.id + '\')">✓ Mark Sent</button>' +
          '</td>' +
        '</tr>';
      });
      html += '</tbody></table></div>';
    }

    // ── Sent table (collapsed summary) ──
    if (sentRows.length > 0) {
      html += '<details class="cert-req-sent-details"><summary class="cert-req-sent-summary">✅ Already sent (' + sentRows.length + ')</summary>';
      html += '<div class="adm-table-wrap" style="margin-top:10px"><table class="adm-table"><thead><tr>' +
        '<th>Name</th><th>Email</th><th>Score</th><th>Certified On</th><th>Sent At</th>' +
      '</tr></thead><tbody>';
      sentRows.forEach(function(u) {
        html += '<tr>' +
          '<td>' + _esc(u.display_name || u.full_name || u.email || '—') + '</td>' +
          '<td class="adm-dim">' + _esc(u.email || '—') + '</td>' +
          '<td><span class="adm-solve-badge has-solves">' + (u.certified_score !== null ? u.certified_score + '/15' : '—') + '</span></td>' +
          '<td>' + (u.certificate_sent_at ? _fmtDate(u.certificate_sent_at) : '—') + '</td>' +
          '<td style="color:#4ade80;font-size:0.82rem">' + (u.cert_email_sent_at ? _fmtDate(u.cert_email_sent_at) : '✓') + '</td>' +
        '</tr>';
      });
      html += '</tbody></table></div></details>';
    }

    wrap.innerHTML = html;
  }

  // ── KPI CARDS ─────────────────────────────────────────────────
  function _renderKPIs() {
    var now      = Date.now();
    var ONE_DAY  = 24 * 60 * 60 * 1000;
    var THIRTY_D = 30 * ONE_DAY;
    var dau     = _users.filter(function (u) { return u.last_seen_at && (now - new Date(u.last_seen_at).getTime()) < ONE_DAY; }).length;
    var mau     = _users.filter(function (u) { return u.last_seen_at && (now - new Date(u.last_seen_at).getTime()) < THIRTY_D; }).length;
    var engaged = Object.keys(_solveMap).length;
    _setText('kadTotal',   _users.length);
    _setText('kadDAU',     dau);
    _setText('kadMAU',     mau);
    _setText('kadEngaged', engaged);
  }

  // ── SIGNUP TREND CHART ────────────────────────────────────────
  function _renderChart() {
    var days = [];
    for (var i = 13; i >= 0; i--) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      days.push(d.toISOString().slice(0, 10));
    }
    var counts = {};
    days.forEach(function (d) { counts[d] = 0; });
    _users.forEach(function (u) {
      if (u.created_at) {
        var day = u.created_at.slice(0, 10);
        if (counts.hasOwnProperty(day)) counts[day]++;
      }
    });
    var vals = days.map(function (d) { return counts[d]; });
    var max  = Math.max(1, Math.max.apply(null, vals));
    var html = days.map(function (d) {
      var count = counts[d];
      var pct   = Math.max(Math.round((count / max) * 100), 2);
      var label = new Date(d + 'T12:00:00').toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
      return '<div class="adm-bar-col">' +
        '<span class="adm-bar-val">' + (count > 0 ? count : '') + '</span>' +
        '<div class="adm-bar" style="height:' + pct + '%"></div>' +
        '<div class="adm-bar-label">' + label + '</div>' +
      '</div>';
    }).join('');
    document.getElementById('adminChart').innerHTML = html;
  }

  // ── ENGAGEMENT FILTER ─────────────────────────────────────────
  function _renderEngagement() {
    var n         = parseInt(_minSolves, 10) || 1;
    var qualified = _users.filter(function (u) { return (_solveMap[u.id] || 0) >= n; });
    _setText('engCount', qualified.length + ' user' + (qualified.length !== 1 ? 's' : ''));
    document.getElementById('engList').innerHTML = qualified.length
      ? qualified.map(function (u) {
          var name = u.display_name || u.full_name || u.email || 'User';
          return '<span class="adm-eng-pill">' + _esc(name) + ' <b>(' + (_solveMap[u.id] || 0) + ')</b></span>';
        }).join('')
      : '<span class="adm-no-data">No users match this filter.</span>';
  }

  // ── USERS TABLE ───────────────────────────────────────────────
  function _renderUsersTable() {
    var q = _search.toLowerCase();
    var filtered = _users.filter(function (u) {
      if (!q) return true;
      var haystack = (_str(u.display_name) + _str(u.full_name) + _str(u.email) + _str(u.qualification)).toLowerCase();
      return haystack.indexOf(q) !== -1;
    });

    filtered.sort(function (a, b) {
      var av, bv;
      if (_sortCol === 'solves') {
        av = _solveMap[a.id] || 0;
        bv = _solveMap[b.id] || 0;
      } else {
        av = (a[_sortCol] || '').toString().toLowerCase();
        bv = (b[_sortCol] || '').toString().toLowerCase();
      }
      if (av < bv) return _sortDir === 'asc' ? -1 : 1;
      if (av > bv) return _sortDir === 'asc' ?  1 : -1;
      return 0;
    });

    _setText('adminUserCount', filtered.length + ' user' + (filtered.length !== 1 ? 's' : ''));

    var html = filtered.map(function (u) {
      var name     = u.display_name || u.full_name || u.email || 'Anonymous';
      var email    = u.email        || '—';
      var qual     = u.qualification|| '—';
      var joined   = u.created_at   ? _fmtDate(u.created_at)   : '—';
      var lastSeen = u.last_seen_at ? _timeAgo(u.last_seen_at) : 'Never';
      var solves   = _solveMap[u.id] || 0;
      var initials = typeof getInitials === 'function' ? getInitials(name) : name.slice(0, 2).toUpperCase();
      var expanded = _expandedUser === u.id;

      var row = '<tr class="adm-user-row' + (expanded ? ' adm-row-open' : '') +
        '" onclick="AdminDash.toggleUser(\'' + u.id + '\')">' +
        '<td><div class="adm-avatar">' + _esc(initials) + '</div></td>' +
        '<td><span class="adm-user-name">' + _esc(name) + '</span>' +
          (u.is_admin ? ' <span class="adm-badge-admin">admin</span>' : '') + '</td>' +
        '<td class="adm-dim">' + _esc(email) + '</td>' +
        '<td class="adm-dim">' + _esc(qual)  + '</td>' +
        '<td>' + joined + '</td>' +
        '<td>' + lastSeen + '</td>' +
        '<td><span class="adm-solve-badge' + (solves > 0 ? ' has-solves' : '') + '">' + solves + '</span></td>' +
        '<td class="adm-chevron">' + (expanded ? '▲' : '▼') + '</td>' +
      '</tr>';

      if (expanded) {
        var prog = (_userProgMap[u.id] || []).slice().sort(function (a, b) {
          return new Date(b.solved_at) - new Date(a.solved_at);
        });
        var detail = prog.length
          ? '<div class="adm-detail-pills">' + prog.map(function (p) {
              var qObj  = typeof QUESTIONS !== 'undefined' ? QUESTIONS.find(function (qq) { return qq.id === p.question_id; }) : null;
              var title = qObj ? '#' + qObj.num + ' ' + qObj.title : 'Question ' + p.question_id;
              var when  = p.solved_at ? _fmtDate(p.solved_at) : '';
              var diff  = qObj ? qObj.difficulty.toLowerCase() : '';
              return '<span class="adm-solved-pill diff-' + diff + '">' +
                _esc(title) + '<span class="pill-date"> · ' + when + '</span></span>';
            }).join('') + '</div>'
          : '<span class="adm-no-data">No questions solved yet.</span>';
        row += '<tr class="adm-detail-row"><td colspan="8"><div class="adm-detail-inner">' + detail + '</div></td></tr>';
      }
      return row;
    }).join('');

    document.getElementById('adminUsersBody').innerHTML = html ||
      '<tr><td colspan="8" class="adm-empty-row">No users found</td></tr>';
  }

  // ── QUESTION ANALYTICS ────────────────────────────────────────
  function _renderQuestionAnalytics() {
    var qCounts = {};
    _progress.forEach(function (p) { qCounts[p.question_id] = (qCounts[p.question_id] || 0) + 1; });

    var sorted   = Object.entries(qCounts).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 10);
    var maxCount = sorted.length ? sorted[0][1] : 1;

    document.getElementById('adminTopQ').innerHTML = sorted.length
      ? sorted.map(function (e) {
          var qId   = parseInt(e[0], 10);
          var count = e[1];
          var qObj  = typeof QUESTIONS !== 'undefined' ? QUESTIONS.find(function (qq) { return qq.id === qId; }) : null;
          var title = qObj ? '#' + qObj.num + ' ' + qObj.title : 'Question ' + qId;
          var diff  = qObj ? qObj.difficulty : '';
          var pct   = Math.round((count / maxCount) * 100);
          return '<div class="adm-q-row">' +
            '<div class="adm-q-title">' + _esc(title) +
              (diff ? ' <span class="diff-badge diff-' + diff.toLowerCase() + '">' + diff + '</span>' : '') + '</div>' +
            '<div class="adm-q-bar-wrap">' +
              '<div class="adm-q-bar" style="width:' + pct + '%"></div>' +
              '<span class="adm-q-count">' + count + '</span>' +
            '</div>' +
          '</div>';
        }).join('')
      : '<p class="adm-no-data">No submissions yet.</p>';

    if (typeof QUESTIONS !== 'undefined') {
      var zeros = QUESTIONS.filter(function (q) { return !qCounts[q.id]; });
      document.getElementById('adminZeroQ').innerHTML = zeros.length
        ? zeros.map(function (q) {
            return '<span class="adm-zero-pill diff-' + q.difficulty.toLowerCase() + '">#' + q.num + ' ' + _esc(q.title) + '</span>';
          }).join('')
        : '<p class="adm-ok-msg">🎉 All questions solved at least once!</p>';
    }
  }

  // ── ANNOUNCEMENT ──────────────────────────────────────────────
  async function saveAnnouncement() {
    var val = (document.getElementById('adminAnnouncementText').value || '').trim();
    var btn = document.getElementById('adminAnnSaveBtn');
    var sta = document.getElementById('adminAnnStatus');
    btn.disabled = true; btn.textContent = 'Saving...';
    try {
      await Auth.from('site_config').upsert({ key: 'announcement', value: val, updated_at: new Date().toISOString() });
      sta.textContent = val ? '✓ Published to all users!' : '✓ Cleared.';
      if (typeof updateAnnouncementBanner === 'function') updateAnnouncementBanner(val);
    } catch (e) {
      sta.textContent = '✗ Save failed — try again.';
    }
    btn.disabled = false; btn.textContent = 'Publish';
    setTimeout(function () { sta.textContent = ''; }, 3000);
  }

  async function clearAnnouncement() {
    document.getElementById('adminAnnouncementText').value = '';
    await saveAnnouncement();
  }

  // ── HELPERS ───────────────────────────────────────────────────
  function _showLoading(on) {
    document.getElementById('adminLoadingState').style.display = on ? 'flex' : 'none';
    document.getElementById('adminContent').style.display      = on ? 'none' : 'block';
  }
  function _setText(id, val) { var el = document.getElementById(id); if (el) el.textContent = val; }
  function _esc(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function _str(v) { return v || ''; }
  function _fmtDate(iso) {
    try { return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); }
    catch (e) { return '—'; }
  }
  function _timeAgo(iso) {
    var diff = Date.now() - new Date(iso).getTime();
    var m = Math.floor(diff / 60000);
    if (m <  1)  return 'Just now';
    if (m < 60)  return m + 'm ago';
    var h = Math.floor(m / 60);
    if (h < 24)  return h + 'h ago';
    var d = Math.floor(h / 24);
    if (d < 30)  return d + 'd ago';
    return Math.floor(d / 30) + 'mo ago';
  }

  // ── PUBLIC API ────────────────────────────────────────────────
  return {
    init:    init,
    refresh: init,
    toggleUser: function (id) {
      _expandedUser = (_expandedUser === id) ? null : id;
      _renderUsersTable();
    },
    setSearch:    function (v) { _search = v; _renderUsersTable(); },
    setMinSolves: function (v) { _minSolves = parseInt(v, 10) || 1; _renderEngagement(); },
    setSort:      function (col) {
      if (_sortCol === col) { _sortDir = _sortDir === 'asc' ? 'desc' : 'asc'; }
      else { _sortCol = col; _sortDir = 'desc'; }
      _renderUsersTable();
    },
    saveAnnouncement:  saveAnnouncement,
    clearAnnouncement: clearAnnouncement,
    markCertSent: async function(userId) {
      try {
        await Auth.from('user_profiles')
          .eq('id', userId)
          .update({ cert_email_sent: true, cert_email_sent_at: new Date().toISOString() });
        // Update local data and re-render
        _certReqs = _certReqs.map(function(u) {
          return u.id === userId ? Object.assign({}, u, { cert_email_sent: true, cert_email_sent_at: new Date().toISOString() }) : u;
        });
        _renderCertRequests();
      } catch(e) {
        alert('Failed to mark as sent. Try refreshing.');
      }
    },
    exportCSV: function () {
      var header = [['Name', 'Email', 'Qualification', 'Joined', 'Last Active', 'Questions Solved', 'Is Admin']];
      var rows   = header.concat(_users.map(function (u) {
        return [
          u.display_name || u.full_name || '',
          u.email || '',
          u.qualification || '',
          u.created_at   ? u.created_at.slice(0, 10)   : '',
          u.last_seen_at ? u.last_seen_at.slice(0, 10) : '',
          _solveMap[u.id] || 0,
          u.is_admin ? 'Yes' : 'No'
        ];
      }));
      var csv  = rows.map(function (r) {
        return r.map(function (c) { return '"' + String(c).replace(/"/g, '""') + '"'; }).join(',');
      }).join('\n');
      var blob = new Blob([csv], { type: 'text/csv' });
      var url  = URL.createObjectURL(blob);
      var a    = document.createElement('a');
      a.href = url;
      a.download = 'mishrasql-users-' + new Date().toISOString().slice(0, 10) + '.csv';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

})();

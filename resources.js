// ================================================================
//  RESOURCES HUB  —  /resources  and  /resources/:slug
//  Free downloadable resources gated by login + LinkedIn capture.
//  Depends on globals from app.js: currentUser, userProfile, Auth,
//  openAuthModal, showToast, isValidUrl, loadUserProfile.
// ================================================================

var RESOURCE_BASE = '/resources';

var RESOURCES = [
  {
    slug: 'excel-interview-guide',
    title: 'Excel Interview Guide',
    subtitle: 'A practical guide to thinking, solving, and communicating in Excel interviews.',
    category: 'Interview Guide',
    status: 'available',
    accent: '#1D6F42',
    cover: '/resources/img/excel-interview-guide.jpg',
    file: '/resources/Excel_Interview_Guide.pdf',
    downloadName: 'Excel-Interview-Guide-AnalystWorld.pdf',
    tagline: "India's only Excel book built to make you job-ready.",
    author: 'Nikhil Mishra',
    meta: ['PDF', 'Free', 'Beginner to job-ready'],
    whatsInside: [
      'Real interview questions asked for analyst roles, with how to approach them',
      'Practical problems and business scenarios to solve, not just theory',
      'Pivot Tables, Power Query, lookups, logical and text functions, and dashboards',
      'How to think, solve, and communicate your answer clearly under pressure'
    ],
    whoFor: [
      'Freshers preparing for their first data or analyst interview',
      'Working professionals switching into a data role',
      'Anyone who wants to stop memorising formulas and start solving problems'
    ]
  },
  {
    slug: 'sql-interview-guide',
    title: 'SQL Interview Guide',
    subtitle: 'The queries, patterns, and thinking that land analyst offers.',
    category: 'Interview Guide',
    status: 'coming-soon',
    accent: '#00A87E',
    tagline: 'From SELECT basics to window functions the way interviewers ask them.',
    meta: ['PDF', 'Free'],
    whatsInside: [
      'Interview questions grouped by concept, from basics to window functions',
      'The patterns behind joins, subqueries, CTEs, and aggregations',
      'Common traps and how to reason through a query out loud'
    ],
    whoFor: ['Anyone preparing for a SQL or data analyst interview']
  },
  {
    slug: 'python-interview-guide',
    title: 'Python Interview Guide',
    subtitle: 'Python for analysts, focused on what interviews actually test.',
    category: 'Interview Guide',
    status: 'coming-soon',
    accent: '#3B82F6',
    tagline: 'Pandas, data cleaning, and analysis questions with clear approaches.',
    meta: ['PDF', 'Free'],
    whatsInside: [
      'Core Python and Pandas questions asked in analyst interviews',
      'Data cleaning and manipulation problems with worked solutions',
      'How to explain your logic, not just write code'
    ],
    whoFor: ['Analysts and freshers preparing for a Python-based interview']
  },
  {
    slug: 'powerbi-interview-guide',
    title: 'Power BI Interview Guide',
    subtitle: 'Modelling, DAX, and dashboard questions that come up in interviews.',
    category: 'Interview Guide',
    status: 'coming-soon',
    accent: '#F2C811',
    tagline: 'From data model design to DAX measures and storytelling.',
    meta: ['PDF', 'Free'],
    whatsInside: [
      'Data modelling and relationship questions with the right answers',
      'DAX measures, calculated columns, and common gotchas',
      'How to talk through a dashboard design decision'
    ],
    whoFor: ['Anyone preparing for a Power BI or BI analyst interview']
  },
  {
    slug: 'excel-practice-datasets',
    title: 'Excel Practice Datasets',
    subtitle: 'Topic-wise datasets to practise every Excel skill hands on.',
    category: 'Practice Dataset',
    status: 'coming-soon',
    accent: '#1D6F42',
    tagline: 'Real, messy data to practise formulas, PivotTables, and cleaning.',
    meta: ['Excel files', 'Free'],
    whatsInside: [
      'Separate datasets organised by topic, from lookups to PivotTables',
      'Realistic, slightly messy data so you practise cleaning too',
      'A suggested task with each dataset so you know what to build'
    ],
    whoFor: ['Learners who want to practise Excel on real data, not toy examples']
  },
  {
    slug: 'sql-project-datasets',
    title: 'SQL Project Datasets',
    subtitle: 'Ready-to-load datasets for end-to-end SQL projects.',
    category: 'Practice Dataset',
    status: 'coming-soon',
    accent: '#00A87E',
    tagline: 'Build portfolio-ready SQL projects on real business data.',
    meta: ['SQL / CSV', 'Free'],
    whatsInside: [
      'Multi-table datasets you can load and query straight away',
      'Project briefs so you know the business questions to answer',
      'Ideal for building a portfolio you can show in interviews'
    ],
    whoFor: ['Anyone building SQL projects for a data analyst portfolio']
  },
  {
    slug: 'python-project-datasets',
    title: 'Python Project Datasets',
    subtitle: 'Datasets to power your Pandas and analysis projects.',
    category: 'Practice Dataset',
    status: 'coming-soon',
    accent: '#3B82F6',
    tagline: 'Practise cleaning, analysis, and charts on real data.',
    meta: ['CSV', 'Free'],
    whatsInside: [
      'Real datasets for cleaning, analysis, and visualisation projects',
      'Project ideas and starter questions for each dataset',
      'Great for turning practice into portfolio work'
    ],
    whoFor: ['Learners building Python and Pandas projects for their portfolio']
  }
];

var RESOURCE_CATEGORIES = ['Interview Guide', 'Practice Dataset'];

function resourceBySlug(slug) {
  for (var i = 0; i < RESOURCES.length; i++) if (RESOURCES[i].slug === slug) return RESOURCES[i];
  return null;
}
function escRes(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── Cover (image with a branded CSS fallback) ─────────────────────
function resourceCoverHtml(r, big) {
  var cls = 'res-cover' + (big ? ' res-cover-lg' : '');
  var fallback =
    '<div class="res-cover-fallback" style="--rc-accent:' + r.accent + '">' +
      '<div class="rcf-tag">' + escRes(r.category) + '</div>' +
      '<div class="rcf-title">' + escRes(r.title) + '</div>' +
      '<div class="rcf-brand">AnalystWorld</div>' +
    '</div>';
  if (r.cover) {
    return '<div class="' + cls + '">' +
      '<img src="' + r.cover + '" alt="' + escRes(r.title) + '" ' +
      'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
      '<div class="res-cover-fallback" style="--rc-accent:' + r.accent + ';display:none">' +
        '<div class="rcf-tag">' + escRes(r.category) + '</div>' +
        '<div class="rcf-title">' + escRes(r.title) + '</div>' +
        '<div class="rcf-brand">AnalystWorld</div>' +
      '</div></div>';
  }
  return '<div class="' + cls + '">' + fallback + '</div>';
}

// ── Render: grid or detail ────────────────────────────────────────
function renderResources(slug) {
  var el = document.getElementById('resourcesContent');
  if (!el) return;
  var r = slug ? resourceBySlug(slug) : null;
  el.innerHTML = r ? resourceDetailHtml(r) : resourceGridHtml();
  var wrap = document.getElementById('resources-page');
  if (wrap) wrap.scrollTop = 0;
  window.scrollTo(0, 0);
}

function resourceGridHtml() {
  var sections = RESOURCE_CATEGORIES.map(function (cat) {
    var items = RESOURCES.filter(function (r) { return r.category === cat; });
    if (!items.length) return '';
    var cards = items.map(function (r) {
      var badge = r.status === 'available'
        ? '<span class="res-badge res-badge-live">Available now</span>'
        : '<span class="res-badge res-badge-soon">Coming soon</span>';
      return '<div class="res-card" onclick="openResource(\'' + r.slug + '\')">' +
        resourceCoverHtml(r, false) +
        '<div class="res-card-body">' +
          '<div class="res-card-tag">' + escRes(r.category) + '</div>' +
          '<div class="res-card-title">' + escRes(r.title) + '</div>' +
          '<div class="res-card-sub">' + escRes(r.subtitle) + '</div>' +
          '<div class="res-card-foot">' + badge +
            '<span class="res-card-arrow">View &rarr;</span>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
    return '<div class="res-section"><h2 class="res-section-title">' + escRes(cat) + 's</h2>' +
      '<div class="res-grid">' + cards + '</div></div>';
  }).join('');

  return '<div class="res-hero">' +
      '<div class="res-hero-eyebrow">Free Resources</div>' +
      '<h1 class="res-hero-title">Guides and datasets to make you <span>job-ready</span></h1>' +
      '<p class="res-hero-sub">Free, practical resources built by working analysts. Log in once, and download whatever you need.</p>' +
    '</div>' + sections;
}

function resourceDetailHtml(r) {
  var soon = r.status !== 'available';
  var badge = soon
    ? '<span class="res-badge res-badge-soon">Coming soon</span>'
    : '<span class="res-badge res-badge-live">Available now</span>';
  var metaChips = (r.meta || []).map(function (m) { return '<span class="res-chip">' + escRes(m) + '</span>'; }).join('');
  var inside = (r.whatsInside || []).map(function (x) { return '<li>' + escRes(x) + '</li>'; }).join('');
  var whoFor = (r.whoFor || []).map(function (x) { return '<li>' + escRes(x) + '</li>'; }).join('');
  var btnLabel = soon ? 'Notify me when it is ready' : 'Download for free';
  var insideHeading = soon ? 'What to expect' : "What's inside";

  return '<div class="res-detail">' +
    '<a class="res-back" onclick="backToResources()">&larr; All resources</a>' +
    '<div class="res-detail-hero">' +
      '<div class="res-detail-cover">' + resourceCoverHtml(r, true) + '</div>' +
      '<div class="res-detail-info">' +
        '<div class="res-detail-tagrow">' + badge + '<span class="res-card-tag">' + escRes(r.category) + '</span></div>' +
        '<h1 class="res-detail-title">' + escRes(r.title) + '</h1>' +
        '<p class="res-detail-sub">' + escRes(r.subtitle) + '</p>' +
        (r.tagline ? '<p class="res-detail-tagline">' + escRes(r.tagline) + '</p>' : '') +
        (r.author ? '<p class="res-detail-author">by ' + escRes(r.author) + '</p>' : '') +
        '<div class="res-chips">' + metaChips + '</div>' +
        '<button class="res-dl-btn" onclick="startResourceDownload(\'' + r.slug + '\')">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' +
          escRes(btnLabel) +
        '</button>' +
        '<div class="res-dl-note">' + (soon
          ? 'We will email you the moment it is ready. No spam.'
          : 'One quick step: log in and share your LinkedIn, then download instantly.') + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="res-detail-body">' +
      '<div class="res-block"><h2 class="res-block-title">' + insideHeading + '</h2><ul class="res-list">' + inside + '</ul></div>' +
      (whoFor ? '<div class="res-block"><h2 class="res-block-title">Who it is for</h2><ul class="res-list">' + whoFor + '</ul></div>' : '') +
    '</div>' +
    // Floating download button
    '<button class="res-dl-float" onclick="startResourceDownload(\'' + r.slug + '\')" title="' + escRes(btnLabel) + '">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' +
      '<span>' + (soon ? 'Notify me' : 'Download') + '</span>' +
    '</button>' +
  '</div>';
}

// ── Navigation ────────────────────────────────────────────────────
function showResources() {
  history.pushState({}, '', RESOURCE_BASE);
  if (typeof _hideAllPages === 'function') _hideAllPages();
  document.getElementById('resources-page').classList.add('active');
  renderResources(null);
}
function openResource(slug) {
  history.pushState({}, '', RESOURCE_BASE + '/' + slug);
  if (typeof _hideAllPages === 'function') _hideAllPages();
  document.getElementById('resources-page').classList.add('active');
  renderResources(slug);
}
function backToResources() { showResources(); }

// ── Gated download flow ───────────────────────────────────────────
var _pendingResourceSlug = null;

function startResourceDownload(slug) {
  if (!currentUser) {
    _pendingResourceSlug = slug;
    openAuthModal('login');
    return;
  }
  ensureLinkedInThen(function () { doResourceAction(slug); });
}

// Called by app.js after a successful sign-in.
function resumeResourceFlow() {
  if (!_pendingResourceSlug) return;
  var s = _pendingResourceSlug;
  _pendingResourceSlug = null;
  ensureLinkedInThen(function () { doResourceAction(s); });
}

function ensureLinkedInThen(cb) {
  if (userProfile && userProfile.linkedin_url) { cb(); return; }
  openLinkedInModal(cb);
}

function doResourceAction(slug) {
  var r = resourceBySlug(slug);
  if (!r) return;
  logResourceEvent(slug, r.status === 'available' ? 'download' : 'requested');
  if (r.status === 'available' && r.file) {
    triggerDownload(r.file, r.downloadName || (r.title + '.pdf'));
    if (typeof showToast === 'function') showToast('Your download is starting. Enjoy the guide!', 'ok');
  } else {
    showComingSoonModal(r);
  }
}

function triggerDownload(file, name) {
  var a = document.createElement('a');
  a.href = file;
  a.download = name || '';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

async function logResourceEvent(slug, kind) {
  if (!currentUser || typeof Auth === 'undefined') return;
  try {
    await Auth.from('resource_downloads').insert({
      user_id: currentUser.id,
      resource_slug: slug,
      kind: kind,
      linkedin_url: (userProfile && userProfile.linkedin_url) || null
    });
  } catch (e) { console.warn('logResourceEvent failed:', e && e.message); }
}

// ── Generic modal ─────────────────────────────────────────────────
function showResourceModal(html) {
  closeResourceModal();
  var ov = document.createElement('div');
  ov.className = 'res-modal-overlay';
  ov.id = 'resModalOverlay';
  ov.innerHTML = '<div class="res-modal" onclick="event.stopPropagation()">' + html + '</div>';
  ov.onclick = closeResourceModal;
  document.body.appendChild(ov);
}
function closeResourceModal() {
  var ov = document.getElementById('resModalOverlay');
  if (ov) ov.remove();
}

// ── LinkedIn capture (mandatory, one time) ────────────────────────
var _linkedinCb = null;
function openLinkedInModal(cb) {
  _linkedinCb = cb;
  showResourceModal(
    '<div class="res-modal-icon">in</div>' +
    '<h3 class="res-modal-title">One quick step</h3>' +
    '<p class="res-modal-sub">Share your LinkedIn profile so we can send you more free resources as they launch. This is a one-time step.</p>' +
    '<input id="resLinkedinInput" class="res-modal-input" type="url" placeholder="https://www.linkedin.com/in/your-name" />' +
    '<div id="resLinkedinErr" class="res-modal-err"></div>' +
    '<button id="resLinkedinSave" class="res-modal-btn" onclick="saveLinkedInAndContinue()">Save and continue</button>' +
    '<button class="res-modal-cancel" onclick="closeResourceModal()">Cancel</button>'
  );
  setTimeout(function () { var i = document.getElementById('resLinkedinInput'); if (i) i.focus(); }, 60);
}

async function saveLinkedInAndContinue() {
  var input = document.getElementById('resLinkedinInput');
  var err = document.getElementById('resLinkedinErr');
  var btn = document.getElementById('resLinkedinSave');
  var val = (input.value || '').trim();
  if (!val) { err.textContent = 'Please add your LinkedIn profile link.'; return; }
  if (!/^https?:\/\//i.test(val)) val = 'https://' + val;
  if (val.toLowerCase().indexOf('linkedin.com/') === -1 || (typeof isValidUrl === 'function' && !isValidUrl(val))) {
    err.textContent = 'That does not look like a LinkedIn profile link.'; return;
  }
  err.textContent = '';
  btn.disabled = true; btn.textContent = 'Saving...';
  try {
    var { error } = await Auth.from('user_profiles').upsert({
      id: currentUser.id, linkedin_url: val, updated_at: new Date().toISOString()
    });
    if (error) { err.textContent = 'Could not save: ' + error.message; btn.disabled = false; btn.textContent = 'Save and continue'; return; }
    if (!userProfile) userProfile = { id: currentUser.id };
    userProfile.linkedin_url = val;
    closeResourceModal();
    var cb = _linkedinCb; _linkedinCb = null;
    if (cb) cb();
  } catch (e) {
    err.textContent = 'Could not save. Please try again.';
    btn.disabled = false; btn.textContent = 'Save and continue';
  }
}

// ── Coming-soon message ───────────────────────────────────────────
function showComingSoonModal(r) {
  var email = (currentUser && currentUser.email) ? currentUser.email : 'your email';
  showResourceModal(
    '<div class="res-modal-icon res-modal-icon-soon">&#9203;</div>' +
    '<h3 class="res-modal-title">' + escRes(r.title) + ' is on the way</h3>' +
    '<p class="res-modal-sub">Our team is building this right now. We have noted your interest and will email you at <strong>' + escRes(email) + '</strong> the moment it is ready.</p>' +
    '<p class="res-modal-sub">In the meantime, the <strong>Excel Interview Guide</strong> is ready to download for free.</p>' +
    '<button class="res-modal-btn" onclick="closeResourceModal();openResource(\'excel-interview-guide\')">Check the Excel Interview Guide</button>' +
    '<button class="res-modal-cancel" onclick="closeResourceModal()">Close</button>'
  );
}

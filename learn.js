// ================================================================
//  MishraSQL — learn.js
//  Learn SQL page logic
// ================================================================

var learnCurrentTopicId = null;
var learnOpenModules    = {};   // { modId: true/false }

// ── PUBLIC: called from nav/app ──────────────────────────────────

function showLearn() {
  document.getElementById('landing-page').classList.remove('active');
  document.getElementById('app-page').classList.remove('active');
  if (document.getElementById('profile-page'))
    document.getElementById('profile-page').classList.remove('active');
  document.getElementById('learn-page').classList.add('active');

  if (!learnCurrentTopicId) {
    // Open first module by default, select first topic
    var firstMod   = LEARN_DATA[0];
    var firstTopic = firstMod.topics[0];
    learnOpenModules[firstMod.id] = true;
    learnCurrentTopicId = firstTopic.id;
  }

  buildLearnSidebar();
  renderLearnTopic(learnCurrentTopicId);
  window.scrollTo(0, 0);
}

function goBackFromLearn() {
  document.getElementById('learn-page').classList.remove('active');
  document.getElementById('landing-page').classList.add('active');
  window.scrollTo(0, 0);
}

// ── SIDEBAR ──────────────────────────────────────────────────────

function buildLearnSidebar() {
  var sidebar = document.getElementById('learnSidebar');
  if (!sidebar) return;

  sidebar.innerHTML = LEARN_DATA.map(function(mod, modIdx) {
    var isOpen = !!learnOpenModules[mod.id];
    var topicCount = mod.topics.length;

    var topicsHtml = mod.topics.map(function(topic) {
      var isActive = topic.id === learnCurrentTopicId;
      return '<div class="learn-topic-item' + (isActive ? ' active' : '') + '" ' +
             'onclick="selectLearnTopic(\'' + topic.id + '\')" ' +
             'id="lt-' + topic.id + '">' +
             '<span class="lt-dot"></span>' +
             '<span class="lt-title">' + escapeHtml(topic.title) + '</span>' +
             '</div>';
    }).join('');

    return '<div class="learn-module" id="lm-' + mod.id + '">' +
      '<div class="learn-module-header" onclick="toggleLearnModule(\'' + mod.id + '\')">' +
        '<span class="lm-icon">' + mod.icon + '</span>' +
        '<div class="lm-info">' +
          '<span class="lm-title">' + escapeHtml(mod.title) + '</span>' +
          '<span class="lm-count">' + topicCount + ' topics</span>' +
        '</div>' +
        '<span class="lm-chevron' + (isOpen ? ' open' : '') + '">›</span>' +
      '</div>' +
      '<div class="learn-topics-list' + (isOpen ? ' open' : '') + '">' +
        topicsHtml +
      '</div>' +
    '</div>';
  }).join('');
}

function toggleLearnModule(modId) {
  learnOpenModules[modId] = !learnOpenModules[modId];
  buildLearnSidebar();
}

// ── TOPIC RENDERING ──────────────────────────────────────────────

function selectLearnTopic(topicId) {
  learnCurrentTopicId = topicId;

  // Auto-open the parent module
  LEARN_DATA.forEach(function(mod) {
    mod.topics.forEach(function(t) {
      if (t.id === topicId) learnOpenModules[mod.id] = true;
    });
  });

  buildLearnSidebar();
  renderLearnTopic(topicId);

  // On mobile, scroll content into view
  var content = document.getElementById('learnContent');
  if (content && window.innerWidth < 900) {
    content.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderLearnTopic(topicId) {
  var content = document.getElementById('learnContent');
  if (!content) return;

  // Find topic meta
  var meta = null;
  var modMeta = null;
  LEARN_DATA.forEach(function(mod) {
    mod.topics.forEach(function(t) {
      if (t.id === topicId) { meta = t; modMeta = mod; }
    });
  });
  if (!meta) return;

  // Find flat index for prev/next
  var flatIdx = -1;
  for (var i = 0; i < LEARN_FLAT_TOPICS.length; i++) {
    if (LEARN_FLAT_TOPICS[i].id === topicId) { flatIdx = i; break; }
  }

  var prevTopic = flatIdx > 0 ? LEARN_FLAT_TOPICS[flatIdx - 1] : null;
  var nextTopic = flatIdx < LEARN_FLAT_TOPICS.length - 1 ? LEARN_FLAT_TOPICS[flatIdx + 1] : null;

  var articleHtml = LEARN_CONTENT[topicId] ||
    '<div class="coming-soon-block">' +
    '<div class="cs-icon">🚧</div>' +
    '<div class="cs-title">Article coming soon</div>' +
    '<div class="cs-sub">Our team is working on this content. Check back soon!</div>' +
    '</div>';

  content.innerHTML =
    '<div class="learn-breadcrumb">' +
      '<span class="lbc-mod">' + escapeHtml(modMeta.icon) + ' ' + escapeHtml(modMeta.title) + '</span>' +
      '<span class="lbc-sep">›</span>' +
      '<span class="lbc-topic">' + escapeHtml(meta.title) + '</span>' +
    '</div>' +
    '<div class="learn-article">' + articleHtml + '</div>' +
    '<div class="learn-nav-btns">' +
      (prevTopic ?
        '<button class="learn-nav-btn prev" onclick="selectLearnTopic(\'' + prevTopic.id + '\')">' +
          '<span class="lnb-arrow">‹</span>' +
          '<div class="lnb-info"><span class="lnb-label">Previous</span><span class="lnb-title">' + escapeHtml(prevTopic.title) + '</span></div>' +
        '</button>' : '<div></div>') +
      (nextTopic ?
        '<button class="learn-nav-btn next" onclick="selectLearnTopic(\'' + nextTopic.id + '\')">' +
          '<div class="lnb-info"><span class="lnb-label">Next</span><span class="lnb-title">' + escapeHtml(nextTopic.title) + '</span></div>' +
          '<span class="lnb-arrow">›</span>' +
        '</button>' : '<div></div>') +
    '</div>';

  // Scroll content area to top
  content.scrollTop = 0;
  document.getElementById('learnContentWrap').scrollTo(0, 0);
}

// ── SEARCH ───────────────────────────────────────────────────────

function handleLearnSearch(e) {
  var q = e.target.value.trim().toLowerCase();
  var items = document.querySelectorAll('.learn-topic-item');
  if (!q) {
    items.forEach(function(el) { el.style.display = ''; });
    return;
  }
  // Show all modules when searching
  LEARN_DATA.forEach(function(mod) { learnOpenModules[mod.id] = true; });
  buildLearnSidebar();

  // Re-query after rebuild
  items = document.querySelectorAll('.learn-topic-item');
  items.forEach(function(el) {
    var title = el.querySelector('.lt-title').textContent.toLowerCase();
    el.style.display = title.includes(q) ? '' : 'none';
  });
}

// ── HELPERS ──────────────────────────────────────────────────────

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

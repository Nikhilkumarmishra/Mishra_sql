// Server-rendered Open Graph meta for public profiles (/u/:username).
//
// Why this exists: the site is a static SPA. Social crawlers (LinkedIn,
// WhatsApp, Facebook, X, Slack) do NOT run JavaScript, so a shared profile
// link would otherwise fall back to the generic homepage preview. This
// function fetches the real profile, injects personalized <title> + OG/Twitter
// tags into a copy of index.html, and serves that. Humans get the identical
// SPA (the app boots and renders the profile client-side); crawlers get a
// personalized card. No dependencies, no image generation.

var SUPABASE_URL = 'https://wyxutuqckkdkraawyxff.supabase.co';
var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eHV0dXFja2tka3JhYXd5eGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMzQ3NzksImV4cCI6MjA5MzcxMDc3OX0.ale0hHkE36PPQwKiqo5ViS3bi28krpU8gHXiWCKyLAU';
var OG_IMAGE = 'https://analystworld.in/images/og-cover.png';

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}

function buildTags(profile, pageUrl) {
  var name = profile.name || profile.username;
  var solved = profile.total_solved || 0;
  var bits = [solved + (solved === 1 ? ' problem solved' : ' problems solved')];
  if (profile.rank) bits.push('Rank #' + profile.rank);
  if (profile.is_certified) bits.push('Certified Analyst');
  var headline = profile.headline ? esc(profile.headline) + ' · ' : '';
  var title = name + ' · AnalystWorld Profile';
  var desc = headline + bits.join(' · ') + '. See ' + name + '’s SQL & data-analytics progress on AnalystWorld — and start practicing free.';
  return [
    '<title>' + esc(title) + '</title>',
    '<meta name="description" content="' + esc(desc) + '"/>',
    '<link rel="canonical" href="' + esc(pageUrl) + '"/>',
    '<meta property="og:type" content="profile"/>',
    '<meta property="og:site_name" content="AnalystWorld"/>',
    '<meta property="og:title" content="' + esc(title) + '"/>',
    '<meta property="og:description" content="' + esc(desc) + '"/>',
    '<meta property="og:url" content="' + esc(pageUrl) + '"/>',
    '<meta property="og:image" content="' + OG_IMAGE + '"/>',
    '<meta property="og:image:width" content="1200"/>',
    '<meta property="og:image:height" content="630"/>',
    '<meta property="og:image:alt" content="' + esc(name) + ' on AnalystWorld"/>',
    '<meta name="twitter:card" content="summary_large_image"/>',
    '<meta name="twitter:title" content="' + esc(title) + '"/>',
    '<meta name="twitter:description" content="' + esc(desc) + '"/>',
    '<meta name="twitter:image" content="' + OG_IMAGE + '"/>'
  ].join('\n');
}

// Remove the generic head tags so the personalized ones are unambiguous.
function stripTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta[^>]+name=["']description["'][^>]*>/ig, '')
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/ig, '')
    .replace(/<meta[^>]+property=["']og:[^"']*["'][^>]*>/ig, '')
    .replace(/<meta[^>]+name=["']twitter:[^"']*["'][^>]*>/ig, '');
}

function personalize(baseHtml, profile, pageUrl) {
  return stripTags(baseHtml).replace(/<\/head>/i, buildTags(profile, pageUrl) + '\n</head>');
}

async function handler(req, res) {
  var proto = String(req.headers['x-forwarded-proto'] || 'https').split(',')[0];
  var host = req.headers['x-forwarded-host'] || req.headers.host || 'analystworld.in';
  var indexUrl = proto + '://' + host + '/index.html';

  try {
    var u = (req.query && req.query.u) || '';
    if (!u) { var m = String(req.url || '').match(/\/u\/([^/?#]+)/); if (m) u = decodeURIComponent(m[1]); }
    u = String(u || '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 30);

    var baseHtml = await fetch(indexUrl).then(function (r) { return r.text(); });
    var pageUrl = 'https://analystworld.in/u/' + u;

    var profile = null;
    if (u) {
      try {
        var r = await fetch(SUPABASE_URL + '/rest/v1/rpc/get_public_profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + SUPABASE_ANON },
          body: JSON.stringify({ p_username: u })
        });
        profile = await r.json();
      } catch (e) { /* fall through to generic */ }
    }

    var out = (profile && profile.username) ? personalize(baseHtml, profile, pageUrl) : baseHtml;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=86400');
    return res.status(200).send(out);
  } catch (e) {
    // Never break the page: on any error, serve the plain SPA.
    try {
      var b = await fetch(indexUrl).then(function (r) { return r.text(); });
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(200).send(b);
    } catch (e2) {
      return res.status(302).setHeader('Location', '/').send('');
    }
  }
}

module.exports = handler;
module.exports._test = { buildTags: buildTags, stripTags: stripTags, personalize: personalize };

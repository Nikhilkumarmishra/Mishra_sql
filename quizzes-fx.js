/* =====================================================================
   AnalystWorld Quizz — celebration effects (shared by host + player)
   Restrained canvas confetti + a shared SVG ring-timer updater.
   Both are self-contained (no assets, no CDN) and reduced-motion aware.
   ===================================================================== */
(function () {
  'use strict';
  function reduceMotion() {
    try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; }
  }

  function confetti(opts) {
    opts = opts || {};
    if (reduceMotion()) return;                       // respect the user's setting
    var count = opts.count || 130;
    var colors = opts.colors || ['#7c5cff', '#00c896', '#ef4e6b', '#2f86ff', '#f5a524', '#2fd27a', '#ffd54a'];
    var canvas = document.createElement('canvas');
    canvas.className = 'q-confetti';
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    function size() { canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    size();
    var parts = [];
    for (var i = 0; i < count; i++) {
      parts.push({
        x: innerWidth * (0.2 + Math.random() * 0.6),
        y: innerHeight * 0.35 + (Math.random() * 40 - 20),
        vx: (Math.random() - 0.5) * 9,
        vy: -(8 + Math.random() * 8),
        g: 0.28 + Math.random() * 0.12,
        size: 5 + Math.random() * 6,
        rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3,
        color: colors[(Math.random() * colors.length) | 0],
        life: 0, max: 90 + Math.random() * 50
      });
    }
    var start = performance.now(), raf;
    function frame(t) {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      var alive = false;
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.life++; if (p.life > p.max) continue;
        alive = true;
        p.vy += p.g; p.x += p.vx; p.y += p.vy; p.vx *= 0.99; p.rot += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, 1 - p.life / p.max);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
      if (alive && t - start < 4000) raf = requestAnimationFrame(frame);
      else { cancelAnimationFrame(raf); canvas.remove(); }
    }
    raf = requestAnimationFrame(frame);
    window.addEventListener('resize', size, { once: true });
  }

  // update an SVG ring timer (shared host + participant, so they match exactly)
  var RING_C = 2 * Math.PI * 44; // r = 44 in the 100x100 viewBox
  function updateRing(el, remaining, total) {
    if (!el) return;
    var num = el.querySelector('.q-ring-num');
    var fill = el.querySelector('.q-ring-fill');
    var r = Math.max(0, Math.ceil(remaining));
    if (num) num.textContent = r;
    var frac = total > 0 ? Math.max(0, Math.min(1, remaining / total)) : 0;
    if (fill) { fill.style.strokeDasharray = RING_C.toFixed(1); fill.style.strokeDashoffset = (RING_C * (1 - frac)).toFixed(1); }
    el.classList.toggle('low', r <= 5 && r > 0);
  }

  // =====================================================================
  //  Safe markdown subset — shared by host, participant and preview.
  //  Renders code blocks, pipe tables, inline `code` and **bold** from the
  //  quiz author's plain-text content. Everything is HTML-escaped FIRST and
  //  only a fixed whitelist of tags is ever emitted (pre/code/table/tr/
  //  th/td/strong/em/br/p/span/div with our own classes), so author text
  //  can never inject markup — the answer-secrecy / RLS model is untouched.
  // =====================================================================
  function escapeHtml(s) {
    return (s == null ? '' : String(s)).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // inline emphasis on ALREADY-ESCAPED text (asterisks are literal, so safe)
  function inlineEmph(escaped) {
    return escaped
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
  }

  // inline render: escape + `code` + **bold**; collapse newlines to spaces
  function mdInline(src) {
    var s = String(src == null ? '' : src);
    var parts = s.split('`'), out = '';
    for (var p = 0; p < parts.length; p++) {
      if (p % 2 === 1) out += '<code>' + escapeHtml(parts[p]) + '</code>';
      else out += inlineEmph(escapeHtml(parts[p]));
    }
    return out.replace(/\s*\n\s*/g, ' ');
  }

  function splitRow(r) {
    return r.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(function (c) { return c.trim(); });
  }
  function isSep(l) { return l != null && /\|/.test(l) && /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/.test(l); }
  function renderTable(rows, sep) {
    var aligns = splitRow(sep).map(function (c) {
      var l = /^:/.test(c), r = /:$/.test(c);
      return l && r ? 'c' : r ? 'r' : l ? 'l' : '';
    });
    function cells(arr, tag) {
      return arr.map(function (c, ci) {
        var a = aligns[ci];
        return '<' + tag + (a ? ' class="' + a + '"' : '') + '>' + mdInline(c) + '</' + tag + '>';
      }).join('');
    }
    var head = '<thead><tr>' + cells(splitRow(rows[0]), 'th') + '</tr></thead>';
    var body = '<tbody>' + rows.slice(1).map(function (r) {
      return '<tr>' + cells(splitRow(r), 'td') + '</tr>';
    }).join('') + '</tbody>';
    return '<div class="q-tablewrap"><table class="q-table">' + head + body + '</table></div>';
  }

  // block render: fenced code, tables, paragraphs with inline formatting
  function md(src) {
    var s = String(src == null ? '' : src).replace(/\r\n?/g, '\n');
    var ph = [];
    s = s.replace(/```[ \t]*([A-Za-z0-9_+-]*)[ \t]*\n([\s\S]*?)```/g, function (_, lang, code) {
      code = code.replace(/\n$/, '');
      var html = '<pre class="q-code"' + (lang ? ' data-lang="' + escapeHtml(lang) + '"' : '') +
        '><code>' + escapeHtml(code) + '</code></pre>';
      ph.push(html); return '\u0000' + (ph.length - 1) + '\u0000';
    });
    var lines = s.split('\n'), out = [], i = 0;
    function isPH(l) { return /^\u0000\d+\u0000$/.test(l.trim()); }
    function tableStart(idx) { return idx + 1 < lines.length && /\|/.test(lines[idx]) && !isPH(lines[idx]) && isSep(lines[idx + 1]); }
    while (i < lines.length) {
      var line = lines[i];
      if (line.trim() === '') { i++; continue; }
      if (isPH(line)) { out.push(ph[parseInt(line.trim().replace(/\u0000/g, ''), 10)]); i++; continue; }
      if (tableStart(i)) {
        var tbl = [line], sep = lines[i + 1]; i += 2;
        while (i < lines.length && lines[i].trim() !== '' && /\|/.test(lines[i]) && !isPH(lines[i])) { tbl.push(lines[i]); i++; }
        out.push(renderTable(tbl, sep)); continue;
      }
      var para = [line]; i++;
      while (i < lines.length && lines[i].trim() !== '' && !isPH(lines[i]) && !tableStart(i)) { para.push(lines[i]); i++; }
      out.push('<p>' + para.map(mdInline).join('<br>') + '</p>');
    }
    return out.join('');
  }

  // a question whose OPTIONS carry code/multi-line content → render the four
  // options as labeled A–D code blocks in the body, with letter-only tiles.
  function isCodeOpts(q) {
    if (!q) return false;
    return ['a', 'b', 'c', 'd'].some(function (k) {
      var v = q[k];
      return v && (/\n/.test(v) || /```/.test(v) || String(v).length > 120);
    });
  }
  function codeOptionsHTML(q, correct) {
    var map = [['a', 'A'], ['b', 'B'], ['c', 'C'], ['d', 'D']];
    return '<div class="q-codeopts">' + map.map(function (m) {
      if (q[m[0]] == null) return '';
      var isC = correct && correct === m[1];
      return '<div class="q-codeopt' + (isC ? ' correct' : '') + '">' +
        '<span class="q-codeopt-lbl">' + m[1] + '</span>' +
        '<div class="q-codeopt-body q-md">' + md(q[m[0]] || '') + '</div></div>';
    }).join('') + '</div>';
  }

  window.QuizzFX = {
    confetti: confetti, updateRing: updateRing, reduceMotion: reduceMotion,
    md: md, mdInline: mdInline, escape: escapeHtml,
    isCodeOpts: isCodeOpts, codeOptionsHTML: codeOptionsHTML
  };
})();

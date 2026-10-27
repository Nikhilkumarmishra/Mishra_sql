/* =====================================================================
   AnalystWorld Quizz — celebration effects (shared by host + player)
   Restrained canvas confetti + an optional short WebAudio chime.
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

  // short triumphant arpeggio — must be called from a user gesture (autoplay)
  function chime() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      var ac = new AC();
      var notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
      notes.forEach(function (f, i) {
        var o = ac.createOscillator(), g = ac.createGain();
        o.type = 'triangle'; o.frequency.value = f;
        var t0 = ac.currentTime + i * 0.12;
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(0.18, t0 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.4);
        o.connect(g); g.connect(ac.destination);
        o.start(t0); o.stop(t0 + 0.45);
      });
      setTimeout(function () { try { ac.close(); } catch (e) {} }, 1200);
    } catch (e) {}
  }

  // shared AudioContext for short UI sounds (ticks)
  var _ac = null;
  function audioCtx() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;
      if (!_ac) _ac = new AC();
      if (_ac.state === 'suspended') _ac.resume();
      return _ac;
    } catch (e) { return null; }
  }
  // call from a user gesture to satisfy autoplay policies
  function unlockAudio() { audioCtx(); }

  // a short countdown "tick" — call once per second while a timer runs.
  // urgent = true in the final seconds (higher, a touch louder).
  function tick(urgent) {
    var ac = audioCtx(); if (!ac) return;
    try {
      var o = ac.createOscillator(), g = ac.createGain();
      o.type = 'square';
      o.frequency.value = urgent ? 1500 : 980;
      var t0 = ac.currentTime;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(urgent ? 0.13 : 0.07, t0 + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.05);
      o.connect(g); g.connect(ac.destination);
      o.start(t0); o.stop(t0 + 0.06);
    } catch (e) {}
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

  window.QuizzFX = { confetti: confetti, chime: chime, tick: tick, unlockAudio: unlockAudio,
    updateRing: updateRing, reduceMotion: reduceMotion };
})();

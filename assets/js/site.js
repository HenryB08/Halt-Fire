// HALT Fire — v3 Brand Hub interactions

(function () {
  'use strict';

  // ── Mobile menu toggle ──
  function setupMobileMenu() {
    var btn = document.getElementById('mob-toggle');
    var menu = document.getElementById('mob-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      btn.classList.toggle('open');
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        btn.classList.remove('open');
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Reveal-on-scroll (IntersectionObserver) ──
  function setupReveal() {
    var els = document.querySelectorAll('.reveal, .reveal-scale');
    if (!els.length || !('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('visible'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (e) { obs.observe(e); });
  }

  // ── Count-up stats ──
  function setupCounters() {
    var els = document.querySelectorAll('[data-counter]');
    if (!els.length) return;
    var animate = function (el) {
      var target = parseFloat(el.getAttribute('data-counter'));
      var suffix = el.getAttribute('data-suffix') || '';
      var prefix = el.getAttribute('data-prefix') || '';
      var dur = 1400;
      var start = performance.now();
      var step = function (now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var v = target * eased;
        var display = (target % 1 === 0) ? Math.round(v) : v.toFixed(1);
        el.textContent = prefix + display + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!('IntersectionObserver' in window)) {
      els.forEach(animate);
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    els.forEach(function (e) { obs.observe(e); });
  }

  // ── Typewriter ──
  function setupTypewriter() {
    var el = document.getElementById('typewriter');
    if (!el) return;
    var text = el.getAttribute('data-text') || el.textContent.trim();
    el.textContent = '';
    var cursor = document.createElement('span');
    cursor.className = 'tw-cursor';
    cursor.textContent = '▍';
    cursor.style.color = 'rgba(200,255,42,.7)';
    cursor.style.animation = 'tw-blink .8s steps(1) infinite';
    el.appendChild(cursor);
    var i = 0;
    var step = function () {
      if (i < text.length) {
        cursor.insertAdjacentText('beforebegin', text.charAt(i));
        i++;
        setTimeout(step, 22 + Math.random() * 18);
      }
    };
    setTimeout(step, 400);
  }

  // ── Smooth anchor scroll (offset for fixed nav) ──
  function setupAnchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id === '#' || id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  // ── Footer year ──
  function setupYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', function () {
    setupMobileMenu();
    setupReveal();
    setupCounters();
    setupTypewriter();
    setupAnchorScroll();
    setupYear();
  });
})();

// Inject keyframes for typewriter cursor blink
(function () {
  var style = document.createElement('style');
  style.textContent = '@keyframes tw-blink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }';
  document.head.appendChild(style);
})();

// ============================================
// Runs on every page of the site.
// Renders the homepage ledger + timelines from data.js,
// handles scroll-reveal, progress rail, nav highlight,
// counter animations, and footer year.
//
// To change content, edit data.js — not this file.
// Page-specific logic lives in projects/project.js
// ============================================

// ---------- RENDER HOMEPAGE PROJECTS LEDGER ----------
function renderProjects() {
  const wrap = document.getElementById("project-ledger");
  if (!wrap) return;

  wrap.innerHTML = PROJECTS.map(p => `
    <div class="ledger-item reveal" data-slug="${p.slug}" tabindex="0" role="button" aria-label="View case study: ${p.title}">
      <div class="ledger-left">
        <h3>${p.title}</h3>
        <p class="ledger-meta">${p.meta}</p>
      </div>
      <div class="ledger-right">
        <p class="problem"><span class="label">PROBLEM &rsaquo;</span>${p.problem}</p>
        <p>${p.detail}</p>
        <div class="stack">${p.stack.map(s => `<span>${s}</span>`).join("")}</div>
        <span class="view-link">View case study &rarr;</span>
      </div>
    </div>
  `).join("");

  wrap.querySelectorAll(".ledger-item").forEach(item => {
    const go = () => {
      window.location.href = `projects/project.html?slug=${item.dataset.slug}`;
    };
    item.addEventListener("click", go);
    item.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
    });
  });
}

// ---------- RENDER TIMELINES (experience + education) ----------
function renderTimeline(containerId, items) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;

  wrap.innerHTML = items.map(item => `
    <div class="timeline-item reveal">
      <div class="timeline-left">
        <h3>${item.title}</h3>
        <p class="ledger-meta">${item.org}</p>
        <p class="timeline-meta">${item.dates}</p>
      </div>
      <div class="timeline-right">
        <ul>${item.points.map(pt => `<li>${pt}</li>`).join("")}</ul>
      </div>
    </div>
  `).join("");
}

// ---------- SCROLL REVEAL ----------
// Adds .is-visible to .reveal elements as they enter the viewport
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  // Run on initial elements + re-run after dynamic content is injected
  function observeAll() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => observer.observe(el));
  }

  observeAll();
  // Small delay to catch dynamically rendered items (ledger, timelines)
  setTimeout(observeAll, 100);
}

// ---------- SCROLL PROGRESS RAIL ----------
function initProgressRail() {
  const rail = document.getElementById("progress-rail");
  if (!rail) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    rail.style.width = pct + "%";
  }, { passive: true });
}

// ---------- NAV ACTIVE HIGHLIGHT ----------
function initNavHighlight() {
  // Only applies on homepage where sections with ids exist
  const links = document.querySelectorAll("nav a[href^='#']");
  if (!links.length) return;

  const sections = [...links]
    .map(l => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(s => {
      if (s.getBoundingClientRect().top <= 100) current = s.id;
    });
    links.forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
  }, { passive: true });
}

// ---------- ANIMATED COUNTERS ----------
function initCounters() {
  const counters = document.querySelectorAll(".stat-num[data-count]");
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 900;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ---------- FOOTER YEAR ----------
function initFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ---------- BOOT ----------
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderTimeline("experience-timeline", typeof EXPERIENCE !== "undefined" ? EXPERIENCE : []);
  renderTimeline("education-timeline", typeof EDUCATION !== "undefined" ? EDUCATION : []);
  initScrollReveal();
  initProgressRail();
  initNavHighlight();
  initCounters();
  initFooterYear();
});

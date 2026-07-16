// ============================================
// Runs only on projects/project.html
// Reads ?slug= from the URL, finds the matching project
// in PROJECTS (loaded from ../data.js), and fills the page.
// Also wires up prev/next navigation.
//
// To add content, edit ../data.js — not this file.
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug   = params.get("slug");
  const index  = PROJECTS.findIndex(p => p.slug === slug);

  // Handle bad/missing slug gracefully
  if (index === -1) {
    document.getElementById("page-title").textContent  = "Project not found — Jason T. Navarro";
    document.getElementById("detail-title").textContent = "Project not found";
    document.getElementById("detail-problem").textContent = "Head back to the project list to pick one.";
    document.getElementById("nav-prev").style.display = "none";
    document.getElementById("nav-next").style.display = "none";
    return;
  }

  const p = PROJECTS[index];

  // ---- HEAD ----
  document.getElementById("page-title").textContent = `${p.title} — Jason T. Navarro`;

  // ---- HERO ----
  document.getElementById("detail-title").textContent   = p.title;
  document.getElementById("detail-problem").textContent = p.problem;

  document.getElementById("detail-meta").innerHTML = `
    <div class="detail-meta-block">
      <span class="k">ROLE</span>
      <span class="v">${p.role}</span>
    </div>
    <div class="detail-meta-block">
      <span class="k">TIMELINE</span>
      <span class="v">${p.timeline}</span>
    </div>
    <div class="detail-meta-block">
      <span class="k">STACK</span>
      <span class="v">${p.stack.join(", ")}</span>
    </div>
  `;

  // ---- BODY SECTIONS ----
  document.getElementById("detail-overview").textContent  = p.overview;
  document.getElementById("detail-challenge").textContent = p.challenge;
  document.getElementById("detail-approach").innerHTML    = p.approach.map(a => `<li>${a}</li>`).join("");
  document.getElementById("detail-outcome").textContent   = p.outcome;
  document.getElementById("detail-learned").textContent   = p.learned;

  // Gallery placeholder — swap this out with real <img> tags once you have screenshots
  document.getElementById("detail-gallery").textContent = p.gallery_note || "📷 Add screenshots or a demo GIF here.";

  // GitHub / live link
  if (p.link) {
    const wrap = document.getElementById("detail-link-wrap");
    const link = document.getElementById("detail-link");
    link.href        = p.link.url;
    link.textContent = p.link.label;
    wrap.style.display = "block";
  }

  // ---- PREV / NEXT ----
  const total = PROJECTS.length;
  const prev  = PROJECTS[(index - 1 + total) % total];
  const next  = PROJECTS[(index + 1) % total];

  document.getElementById("nav-prev").href        = `project.html?slug=${prev.slug}`;
  document.getElementById("nav-prev").textContent = `\u2190 ${prev.title}`;
  document.getElementById("nav-next").href        = `project.html?slug=${next.slug}`;
  document.getElementById("nav-next").textContent = `${next.title} \u2192`;
});

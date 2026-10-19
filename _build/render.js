const SITE = {
  name: "BLACKOUT",
  tagline: "Apocalypse Survival Guide",
  description:
    "A practical, offline-ready field manual for water, food, shelter, medicine, radio, planning and disaster response in India.",
  updated: "2026-10-19",
  url: "https://mrzodiac333.github.io/blackout/",
};

const CATEGORIES = {
  core: { label: "Start Here", order: 0 },
  survival: { label: "Survival", order: 1 },
  medical: { label: "Medical", order: 2 },
  comms: { label: "Communication", order: 3 },
  skills: { label: "Skills & Security", order: 4 },
  planning: { label: "Planning", order: 5 },
  scenarios: { label: "Scenarios", order: 6 },
  hazards: { label: "India Hazards", order: 7 },
};

const NAV = [
  { href: "guides.html", label: "Guides" },
  { href: "medical.html", label: "Medical" },
  { href: "communication.html", label: "Comms" },
  { href: "scenarios.html", label: "Scenarios" },
  { href: "tools.html", label: "Tools" },
  { href: "emergency-contacts.html", label: "Contacts" },
];

const FOOTER_COLS = [
  {
    title: "Survive",
    links: [
      ["water.html", "Water"],
      ["food.html", "Food"],
      ["shelter.html", "Shelter"],
      ["fire.html", "Fire"],
      ["power.html", "Power"],
      ["sanitation.html", "Sanitation"],
    ],
  },
  {
    title: "Health",
    links: [
      ["medical.html", "Medical hub"],
      ["first-aid.html", "First aid"],
      ["wound-care.html", "Wound care"],
      ["medications.html", "Medications"],
      ["mental-health.html", "Mental health"],
      ["vulnerable-groups.html", "Vulnerable groups"],
    ],
  },
  {
    title: "Plan & Prepare",
    links: [
      ["family-plan.html", "Family plan"],
      ["bug-in-out.html", "Bug in or out"],
      ["documents-finance.html", "Documents & money"],
      ["offline-library.html", "Offline library"],
      ["tools.html", "Calculators"],
      ["dashboard.html", "Your dashboard"],
      ["guides.html", "All guides"],
    ],
  },
  {
    title: "Reference",
    links: [
      ["emergency-contacts.html", "Emergency contacts"],
      ["communication.html", "Radio & licensing"],
      ["antenna-plans.html", "Antenna plans"],
      ["glossary.html", "Glossary"],
      ["faq.html", "FAQ"],
      ["sources.html", "Sources"],
    ],
  },
];

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const rel = (page, target) => {
  if (target.startsWith("http") || target.startsWith("#") || target.startsWith("mailto:")) return target;
  return target;
};

function head(page, opts = {}) {
  const title = page.title
    ? `${page.title} — ${SITE.name} ${SITE.tagline}`
    : `${SITE.name} — ${SITE.tagline}`;
  const desc = page.summary || SITE.description;
  const canonical = page.slug === "index" ? "index.html" : `${page.slug}.html`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#0a0a0a">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="assets/icons/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/icons/icon-192.png">
<link rel="preload" href="assets/fonts/CourierPrime-Regular.ttf" as="font" type="font/ttf" crossorigin>
<link rel="preload" href="assets/fonts/SpecialElite-Regular.ttf" as="font" type="font/ttf" crossorigin>
<link rel="stylesheet" href="css/styles.css">
<script src="js/main.js" defer></script>
${opts.scripts ? opts.scripts.map((s) => `<script src="${s}" defer></script>`).join("\n") : ""}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${header(page)}
`;
}

function header(page) {
  const links = NAV.map((n) => {
    const active = page.navActive === n.href || page.slug + ".html" === n.href;
    return `<li><a href="${n.href}"${active ? ' aria-current="page"' : ""}>${n.label}</a></li>`;
  }).join("");
  return `<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="index.html">
      <span class="brand-mark" aria-hidden="true">BLK</span>
      <span>${SITE.name}<small>${SITE.tagline}</small></span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav class="site-nav" id="site-nav" aria-label="Primary">
      <ul>${links}</ul>
    </nav>
  </div>
</header>`;
}

function footer() {
  const cols = FOOTER_COLS.map(
    (c) => `<div><h2>${c.title}</h2><ul>${c.links
      .map(([href, label]) => `<li><a href="${href}">${label}</a></li>`)
      .join("")}</ul></div>`
  ).join("");
  return `<footer class="site-footer">
  <div class="wrap">
    <p class="disclaimer"><strong>Read this first:</strong> This guide is for education and preparedness. It does not replace professional training, medical care, or local emergency instructions. In a real emergency, follow official guidance and call the numbers on the <a href="emergency-contacts.html">contacts page</a>. Radio transmission requires a WPC licence in India; medical content is not a prescription.</p>
    <div class="footer-grid">${cols}</div>
    <div class="footer-bottom">
      <span>${SITE.name} ${SITE.tagline} · Last reviewed ${SITE.updated}</span>
      <span><a href="changelog.html">Changelog</a> · <a href="sources.html">Sources</a> · <a href="faq.html">FAQ</a> · <a href="index.html">Home</a></span>
    </div>
  </div>
</footer>
</body>
</html>`;
}

function breadcrumbs(page) {
  if (!page.category || page.category === "core") {
    return `<nav aria-label="Breadcrumb"><ol class="breadcrumbs"><li><a href="index.html">Home</a></li><li aria-current="page">${esc(
      page.shortTitle || page.title
    )}</li></ol></nav>`;
  }
  const cat = CATEGORIES[page.category];
  return `<nav aria-label="Breadcrumb"><ol class="breadcrumbs"><li><a href="index.html">Home</a></li><li><a href="guides.html?cat=${
    page.category
  }">${cat.label}</a></li><li aria-current="page">${esc(page.shortTitle || page.title)}</li></ol></nav>`;
}

function pageHead(page) {
  return `<div class="page-head">
    <div class="wrap">
      ${breadcrumbs(page)}
      <h1>${esc(page.title)}</h1>
      <p class="lede">${page.summary}</p>
      <div class="page-meta">
        <span><span class="dot" aria-hidden="true"></span>${CATEGORIES[page.category]?.label || "Reference"}</span>
        <span>Last reviewed ${page.updated || SITE.updated}</span>
        <span>${page.readTime || "6 min read"}</span>
        <button class="bookmark-btn no-print" type="button" data-bookmark="${page.slug}" aria-pressed="false">Save</button>
        <button class="bookmark-btn no-print" type="button" data-print>Print</button>
      </div>
    </div>
  </div>`;
}

function checklist(items, id) {
  if (!items || !items.length) return "";
  const lis = items
    .map(
      (item, i) =>
        `<li><label><input type="checkbox" data-check="${id}-${i}"><span>${item}</span></label></li>`
    )
    .join("");
  return `<div class="checklist-progress" data-progress="${id}"><span>0 / ${items.length} done</span><span class="progress-track"><span class="progress-bar"></span></span></div>
<ul class="checklist" data-checklist="${id}">${lis}</ul>`;
}

function toc(sections) {
  if (!sections || sections.length < 2) return "";
  return `<aside class="toc no-print" aria-label="On this page">
    <h2>On this page</h2>
    <ol>${sections.map((s) => `<li><a href="#${s.id}">${esc(s.toc || s.title)}</a></li>`).join("")}</ol>
  </aside>`;
}

function guideLayout(page) {
  const body = [];
  body.push(`<div class="page-head"><div class="wrap">${breadcrumbs(page)}<h1>${esc(
    page.title
  )}</h1><p class="lede">${page.summary}</p>
  <div class="page-meta">
    <span><span class="dot" aria-hidden="true"></span>${CATEGORIES[page.category]?.label || "Reference"}</span>
    <span>Last reviewed ${page.updated || SITE.updated}</span>
    <span>${page.readTime || "7 min read"}</span>
    <button class="bookmark-btn no-print" type="button" data-bookmark="${page.slug}" aria-pressed="false">Save</button>
    <button class="bookmark-btn no-print" type="button" data-print>Print</button>
  </div></div></div>`);

  body.push(`<div class="wrap layout"><article class="prose" id="main">`);
  if (page.intro) body.push(`<section id="overview">${page.intro}</section>`);
  if (page.checklist) {
    body.push(
      `<h2 id="checklist">Priority checklist</h2>${checklist(
        page.checklist,
        page.slug
      )}<p class="text-muted" style="font-size:.8rem">Progress is saved on this device only.</p>`
    );
  }
  if (page.sections) {
    for (const s of page.sections) {
      body.push(`<section id="${s.id}"><h2>${esc(s.title)}</h2>${s.html}</section>`);
    }
  }
  body.push(
    `<section id="notes" class="no-print"><h2>Your notes</h2><p class="text-muted" style="font-size:.85rem">Saved on this device only. Use the <a href="dashboard.html">dashboard</a> to export or back up your data.</p><div class="field"><label class="visually-hidden" for="page-notes">Notes for this guide</label><textarea id="page-notes" data-notes="${page.slug}" placeholder="Questions, local phone numbers, supplies to buy…"></textarea></div><p class="text-muted" id="notes-status" style="font-size:.75rem;min-height:1.2em"></p></section>`
  );
  if (page.related && page.related.length) {
    body.push(
      `<section id="related"><h2>Related guides</h2><ul class="tag-list">${page.related
        .map((r) => `<li><a href="${r[0]}.html">${r[1]}</a></li>`)
        .join("")}</ul></section>`
    );
  }
  body.push(`<p class="text-muted" style="font-size:.8rem;margin-top:2.5rem">Last reviewed ${
    page.updated || SITE.updated
  }. Corrections welcome — see <a href="sources.html">sources</a>.</p>`);
  body.push(`</article>${toc(page.sections)}</div>`);
  return body.join("\n");
}

function figure(svg, caption, id) {
  return `<figure class="figure"${id ? ` id="${id}"` : ""}>${svg}<figcaption>${caption}</figcaption></figure>`;
}

function callout(type, title, html) {
  return `<div class="callout callout--${type}"><span class="callout-title">${title}</span>${html}</div>`;
}

function table(caption, headers, rows) {
  return `<div class="table-scroll"><table><caption>${caption}</caption><thead><tr>${headers
    .map((h) => `<th scope="col">${h}</th>`)
    .join("")}</tr></thead><tbody>${rows
    .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`)
    .join("")}</tbody></table></div>`;
}

function page(page) {
  return head(page) + guideLayout(page) + footer();
}

function simplePage(page, content) {
  const body = `<div class="page-head"><div class="wrap">${breadcrumbs(page)}<h1>${esc(
    page.title
  )}</h1><p class="lede">${page.summary}</p><div class="page-meta"><span><span class="dot" aria-hidden="true"></span>${
    CATEGORIES[page.category]?.label || "Reference"
  }</span><span>Last reviewed ${page.updated || SITE.updated}</span></div></div></div>
  <div class="wrap layout"><article class="prose" id="main">${content}</article>${toc(
    page.sections || []
  )}</div>`;
  return head(page) + body + footer();
}

module.exports = {
  SITE,
  CATEGORIES,
  NAV,
  esc,
  page,
  simplePage,
  head,
  header,
  footer,
  pageHead,
  checklist,
  toc,
  guideLayout,
  figure,
  callout,
  table,
  breadcrumbs,
};

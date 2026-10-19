const fs = require("fs");
const path = require("path");
const R = require("./render");

const root = path.join(__dirname, "..");
const content = [
  ...require("./content/core"),
  ...require("./content/survival"),
  ...require("./content/medical"),
  ...require("./content/comms"),
  ...require("./content/skills"),
  ...require("./content/planning"),
  ...require("./content/scenarios"),
];
const custom = require("./content/custom");
const india = require("./content/india");
const { HAZARDS, SOURCES, STATES } = require("./data/india-hazards");

const allPages = [...content];

function validateHazardData() {
  const errors = [];
  const codes = new Set();
  const names = new Set();
  const grids = new Set();
  const pageSlugs = new Set([
    "index",
    "guides",
    "tools",
    "dashboard",
    "404",
    "offline",
    "scenarios",
    "hazards",
    "act-now",
    ...content.map((p) => p.slug),
  ]);

  if (STATES.length !== 36) errors.push(`expected 36 states/UTs, found ${STATES.length}`);
  const stateCount = STATES.filter((s) => s.type === "state").length;
  const utCount = STATES.filter((s) => s.type === "ut").length;
  if (stateCount !== 28) errors.push(`expected 28 states, found ${stateCount}`);
  if (utCount !== 8) errors.push(`expected 8 UTs, found ${utCount}`);

  for (const state of STATES) {
    if (!state.code || !state.name) errors.push("state missing code or name");
    if (codes.has(state.code)) errors.push(`duplicate state code: ${state.code}`);
    if (names.has(state.name)) errors.push(`duplicate state name: ${state.name}`);
    codes.add(state.code);
    names.add(state.name);

    if (!Array.isArray(state.grid) || state.grid.length !== 2) {
      errors.push(`${state.name}: invalid grid position`);
    } else {
      const [col, row] = state.grid;
      if (!Number.isInteger(col) || !Number.isInteger(row) || col < 1 || col > 12 || row < 1 || row > 9) {
        errors.push(`${state.name}: grid position out of range`);
      }
      const key = `${col},${row}`;
      if (grids.has(key)) errors.push(`duplicate grid position: ${key}`);
      grids.add(key);
    }

    if (!state.note || state.note.length < 15) errors.push(`${state.name}: note is too short`);
    if (!Array.isArray(state.hazards) || state.hazards.length < 1 || state.hazards.length > 8) {
      errors.push(`${state.name}: expected 1-8 hazards`);
      continue;
    }

    const seen = new Set();
    for (const entry of state.hazards) {
      if (!Array.isArray(entry) || entry.length !== 2) {
        errors.push(`${state.name}: invalid hazard entry`);
        continue;
      }
      const [key, level] = entry;
      if (!HAZARDS[key]) errors.push(`${state.name}: unknown hazard "${key}"`);
      if (!["higher", "watch"].includes(level)) errors.push(`${state.name}: invalid level "${level}"`);
      if (seen.has(key)) errors.push(`${state.name}: duplicate hazard "${key}"`);
      seen.add(key);
    }

    for (const [label, href] of state.extra || []) {
      if (!label || !href) errors.push(`${state.name}: invalid extra link`);
      if (href) {
        const slug = href.split("#")[0].replace(/\.html$/, "");
        if (slug && !pageSlugs.has(slug)) errors.push(`${state.name}: extra link target missing: ${href}`);
      }
    }
  }

  for (const [key, hazard] of Object.entries(HAZARDS)) {
    if (!hazard.label || !hazard.guide || !hazard.action) errors.push(`hazard ${key}: missing fields`);
    if (!SOURCES[hazard.source]) errors.push(`hazard ${key}: unknown source "${hazard.source}"`);
    const slug = hazard.guide.split("#")[0].replace(/\.html$/, "");
    if (!pageSlugs.has(slug)) errors.push(`hazard ${key}: guide target missing: ${hazard.guide}`);
  }

  for (const [key, source] of Object.entries(SOURCES)) {
    if (!source.label || !source.url) errors.push(`source ${key}: missing label or url`);
    if (!/^https?:\/\//.test(source.url)) errors.push(`source ${key}: invalid url`);
  }

  if (errors.length) throw new Error(`Hazard data validation failed:\n- ${errors.join("\n- ")}`);
}

function write(name, html) {
  fs.writeFileSync(path.join(root, name), html);
  console.log("wrote", name);
}

function renderCustom(p, body, scripts) {
  const page = {
    slug: p.slug,
    title: p.title,
    summary: p.summary,
    category: p.category,
    navActive: p.navActive,
  };
  return `${R.head(page, { scripts, kind: "page" })}
${body}
${R.footer()}
</body>
</html>`;
}

validateHazardData();

for (const p of content) write(`${p.slug}.html`, R.page(p));

write("index.html", renderCustom({ slug: "index", title: "", summary: "" }, custom.index.html, ["js/guide-data.js", "js/hazard-data.js", "js/home.js"]));
write(
  "scenarios.html",
  renderCustom({ slug: "scenarios", title: "Scenarios & Hazards", summary: custom.scenariosHub.summary, category: "scenarios" }, custom.scenariosHub.html)
);
write(
  "guides.html",
  renderCustom({ slug: "guides", title: "All Guides", summary: custom.guides.summary, category: "core" }, custom.guides.html, ["js/guide-data.js", "js/guides.js"])
);
write(
  "tools.html",
  renderCustom({ slug: "tools", title: "Tools & Calculators", summary: custom.tools.summary, category: "core" }, custom.tools.html, ["js/tools.js"])
);
write(
  "dashboard.html",
  renderCustom({ slug: "dashboard", title: "Your Dashboard", summary: custom.dashboard.summary, category: "core" }, custom.dashboard.html, ["js/dashboard.js"])
);
write(
  "hazards.html",
  renderCustom(india.hazardsPage, india.hazardsPage.html, ["js/hazard-data.js", "js/hazards.js"])
);
write("act-now.html", renderCustom(india.actNowPage, india.actNowPage.html));
write("404.html", renderCustom({ slug: "404", title: "Page not found", summary: "" }, custom.notFound.html));

// Guide index data for search
const guideData = content.map((p) => ({
  slug: p.slug,
  title: p.shortTitle || p.title,
  fullTitle: p.title,
  category: p.category,
  summary: p.summary.replace(/<[^>]+>/g, ""),
  read: p.readTime,
}));
fs.writeFileSync(path.join(root, "js", "guide-data.js"), `window.GUIDES = ${JSON.stringify(guideData, null, 2)};\n`);
console.log("wrote js/guide-data.js");

const hazardData = { hazards: HAZARDS, sources: SOURCES, states: STATES };
fs.writeFileSync(
  path.join(root, "js", "hazard-data.js"),
  `window.HAZARD_DATA = ${JSON.stringify(hazardData, null, 2)};\n`
);
console.log("wrote js/hazard-data.js");

// Sitemap
const urls = ["index.html", ...content.map((p) => `${p.slug}.html`), "scenarios.html", "guides.html", "tools.html", "dashboard.html", "hazards.html", "act-now.html"]
  .map((u) => `  <url><loc>${R.SITE.url}${u}</loc><lastmod>${R.SITE.updated}</lastmod></url>`)
  .join("\n");
fs.writeFileSync(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${R.SITE.url}sitemap.xml\n`);

// Service worker file list
const pages = ["index.html", "guides.html", "tools.html", "dashboard.html", "404.html", "offline.html", "scenarios.html", "hazards.html", "act-now.html", ...content.map((p) => `${p.slug}.html`)];
fs.writeFileSync(path.join(root, "_build", "pages.json"), JSON.stringify(pages, null, 2));

const assets = [
  "css/styles.css",
  "js/main.js",
  "js/guides.js",
  "js/tools.js",
  "js/dashboard.js",
  "js/guide-data.js",
  "js/home.js",
  "js/hazards.js",
  "js/hazard-data.js",
  "manifest.webmanifest",
  "offline.html",
  "assets/icons/icon.svg",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/icon-maskable.png",
  "assets/fonts/CourierPrime-Regular.ttf",
  "assets/fonts/CourierPrime-Bold.ttf",
  "assets/fonts/CourierPrime-Italic.ttf",
  "assets/fonts/SpecialElite-Regular.ttf",
  ...fs
    .readdirSync(path.join(root, "assets", "img", "radio"))
    .map((f) => `assets/img/radio/${f}`),
  ...fs
    .readdirSync(path.join(root, "assets", "img", "diagrams"))
    .map((f) => `assets/img/diagrams/${f}`),
];
const precache = [...new Set([...pages, ...assets])];
const sw = `const CACHE = "blackout-v6";
const ASSETS = ${JSON.stringify(precache, null, 2)};
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      const cleanUrl = new URL(event.request.url);
      cleanUrl.search = "";
      cleanUrl.hash = "";
      const clean = cleanUrl.href === event.request.url ? null : caches.match(cleanUrl.href);
      return Promise.resolve(clean).then((cleanCached) => {
        if (cleanCached) return cleanCached;
        return fetch(event.request)
          .then((response) => {
            if (response && response.status === 200) {
              const copy = response.clone();
              caches.open(CACHE).then((cache) => cache.put(event.request, copy));
            }
            return response;
          })
          .catch(() => {
            if (event.request.mode === "navigate") return caches.match("offline.html");
            return new Response("", { status: 503, statusText: "Offline" });
          });
      });
    })
  );
});
`;
fs.writeFileSync(path.join(root, "sw.js"), sw);
console.log(`done: ${pages.length} pages, ${precache.length} precached files`);

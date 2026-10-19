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

const allPages = [...content];

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
  };
  const title = p.title
    ? `${p.title} — ${R.SITE.name} ${R.SITE.tagline}`
    : `${R.SITE.name} — ${R.SITE.tagline}`;
  const desc = p.summary || R.SITE.description;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${R.esc(title)}</title>
<meta name="description" content="${R.esc(desc)}">
<meta name="theme-color" content="#0a0a0a">
<meta property="og:title" content="${R.esc(title)}">
<meta property="og:description" content="${R.esc(desc)}">
<meta property="og:type" content="website">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="assets/icons/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/icons/icon-192.png">
<link rel="preload" href="assets/fonts/CourierPrime-Regular.ttf" as="font" type="font/ttf" crossorigin>
<link rel="preload" href="assets/fonts/SpecialElite-Regular.ttf" as="font" type="font/ttf" crossorigin>
<link rel="stylesheet" href="css/styles.css">
<script src="js/main.js" defer></script>
${(scripts || []).map((s) => `<script src="${s}" defer></script>`).join("\n")}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${R.header(p)}
${body}
${R.footer()}
</body>
</html>`;
}

for (const p of content) write(`${p.slug}.html`, R.page(p));

write("index.html", renderCustom({ slug: "index", title: "", summary: "" }, custom.index.html));
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

// Sitemap
const urls = ["index.html", ...content.map((p) => `${p.slug}.html`), "scenarios.html", "guides.html", "tools.html", "dashboard.html"]
  .map((u) => `  <url><loc>${R.SITE.url}${u}</loc><lastmod>${R.SITE.updated}</lastmod></url>`)
  .join("\n");
fs.writeFileSync(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${R.SITE.url}sitemap.xml\n`);

// Service worker file list
const pages = ["index.html", "guides.html", "tools.html", "dashboard.html", "404.html", "offline.html", "scenarios.html", ...content.map((p) => `${p.slug}.html`)];
fs.writeFileSync(path.join(root, "_build", "pages.json"), JSON.stringify(pages, null, 2));

const assets = [
  "css/styles.css",
  "js/main.js",
  "js/guides.js",
  "js/tools.js",
  "js/dashboard.js",
  "js/guide-data.js",
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
const sw = `const CACHE = "blackout-v5";
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
    })
  );
});
`;
fs.writeFileSync(path.join(root, "sw.js"), sw);
console.log(`done: ${pages.length} pages, ${precache.length} precached files`);

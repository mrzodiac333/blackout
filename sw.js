const CACHE = "blackout-v5";
const ASSETS = [
  "index.html",
  "guides.html",
  "tools.html",
  "dashboard.html",
  "404.html",
  "offline.html",
  "scenarios.html",
  "emergency-contacts.html",
  "glossary.html",
  "faq.html",
  "sources.html",
  "changelog.html",
  "water.html",
  "food.html",
  "shelter.html",
  "fire.html",
  "power.html",
  "transport.html",
  "climate.html",
  "hygiene.html",
  "animals.html",
  "sanitation.html",
  "medical.html",
  "first-aid.html",
  "wound-care.html",
  "medications.html",
  "dental-eye.html",
  "mental-health.html",
  "vulnerable-groups.html",
  "emergency-childbirth.html",
  "communication.html",
  "antenna-plans.html",
  "crafting.html",
  "security.html",
  "navigation.html",
  "food-production.html",
  "ropework.html",
  "sewing-repair.html",
  "weather-signs.html",
  "signaling-rescue.html",
  "fitness-morale.html",
  "opsec-privacy.html",
  "family-plan.html",
  "bug-in-out.html",
  "documents-finance.html",
  "community.html",
  "offline-library.html",
  "grid-collapse.html",
  "pandemic.html",
  "flood.html",
  "earthquake.html",
  "nuclear-emp.html",
  "cyclone.html",
  "heatwave.html",
  "wildfire.html",
  "landslide.html",
  "tsunami.html",
  "air-quality.html",
  "seismic-zones.html",
  "css/styles.css",
  "js/main.js",
  "js/guides.js",
  "js/tools.js",
  "js/dashboard.js",
  "js/guide-data.js",
  "manifest.webmanifest",
  "assets/icons/icon.svg",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/icon-maskable.png",
  "assets/fonts/CourierPrime-Regular.ttf",
  "assets/fonts/CourierPrime-Bold.ttf",
  "assets/fonts/CourierPrime-Italic.ttf",
  "assets/fonts/SpecialElite-Regular.ttf",
  "assets/img/radio/crystal-radio.svg",
  "assets/img/radio/dipole.svg",
  "assets/img/radio/ground-plane.svg",
  "assets/img/radio/india-bands.svg",
  "assets/img/radio/jpole.svg",
  "assets/img/radio/swr-coax.svg",
  "assets/img/radio/transceiver-block.svg",
  "assets/img/radio/yagi.svg",
  "assets/img/diagrams/evacuation-map.svg",
  "assets/img/diagrams/fire-lays.svg",
  "assets/img/diagrams/first-aid-card.svg",
  "assets/img/diagrams/food-preservation.svg",
  "assets/img/diagrams/latrine.svg",
  "assets/img/diagrams/shelter-types.svg",
  "assets/img/diagrams/snakebite-card.svg",
  "assets/img/diagrams/solar-station.svg",
  "assets/img/diagrams/water-filter.svg"
];
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

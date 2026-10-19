const { callout, table, esc } = require("../render");

const featured = [
  ["water", "Water", "Find it, treat it, store enough for two weeks."],
  ["food", "Food", "A pantry you will actually eat, and safe preservation."],
  ["first-aid", "First aid", "Bleeding, CPR, choking, burns and shock."],
  ["communication", "Radio & comms", "India licensing, legal gear, and a family plan."],
  ["power", "Power", "Solar, batteries and generators without the fire risk."],
  ["family-plan", "Family plan", "Meeting points, roles, routes, and the first 72 hours."],
];

const index = {
  slug: "index",
  title: "",
  summary: "",
  html: `
<div class="hero">
  <div class="wrap hero-inner">
    <div>
      <span class="eyebrow">Field manual · India edition</span>
      <h1>The grid can fail.<br><span class="glow">You don't have to.</span></h1>
      <p class="lede">A practical, offline-ready survival guide for water, food, shelter, medicine, radio and disaster response. No fantasy gear lists — just skills, plans and checklists that work when the systems you rely on stop.</p>
      <div class="hero-actions">
        <a class="btn" href="guides.html">Browse the guides</a>
        <a class="btn btn--ghost" href="family-plan.html">Start a family plan</a>
      </div>
    </div>
    <div class="stamp" aria-label="Quick status">
      <strong>72 HOURS</strong>
      <span>minimum self-sufficiency</span><br>
      <span>14 days recommended</span><br>
      <span>52 guides · 4 antenna plans</span><br>
      <span>Works offline</span>
    </div>
  </div>
</div>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>Start with the essentials</h2>
      <p>In a real disruption, this is the order that keeps you alive: water, then communications, then food, then power. Everything else builds on those four.</p>
    </div>
    <div class="grid grid--3">
      ${featured
        .map(
          ([slug, title, desc]) => `<a class="card" href="${slug}.html">
        <span class="card-tag">Priority</span>
        <h3>${title}</h3>
        <p>${desc}</p>
        <span class="card-meta">Open guide →</span>
      </a>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="wrap">
    <div class="section-head">
      <h2>What this guide covers</h2>
      <p>Every section is written for Indian conditions — monsoon, heat, cyclones, seismic zones, WPC radio rules and local emergency numbers.</p>
    </div>
    <div class="grid grid--4">
      <a class="card" href="guides.html?cat=survival"><span class="card-tag">10 guides</span><h3>Survival</h3><p>Water, food, shelter, fire, power, transport, climate, hygiene, animals, sanitation.</p><span class="card-meta">Explore →</span></a>
      <a class="card" href="medical.html"><span class="card-tag">8 guides</span><h3>Medical</h3><p>First aid, wounds, medications, dental and eye care, mental health, vulnerable groups.</p><span class="card-meta">Explore →</span></a>
      <a class="card" href="communication.html"><span class="card-tag">2 guides</span><h3>Communication</h3><p>Licensing, legal gear, voice procedure, and four antenna build plans.</p><span class="card-meta">Explore →</span></a>
      <a class="card" href="guides.html?cat=skills"><span class="card-tag">10 guides</span><h3>Skills & security</h3><p>Crafting, knots, repair, navigation, food production, weather, signalling, opsec.</p><span class="card-meta">Explore →</span></a>
      <a class="card" href="family-plan.html"><span class="card-tag">5 guides</span><h3>Planning</h3><p>Family plans, bug-in/out, documents, community, offline library.</p><span class="card-meta">Explore →</span></a>
      <a class="card" href="scenarios.html"><span class="card-tag">12 guides</span><h3>Scenarios & hazards</h3><p>Grid collapse, pandemic, flood, earthquake, cyclone, heatwave, tsunami and more.</p><span class="card-meta">Explore →</span></a>
      <a class="card" href="tools.html"><span class="card-tag">Interactive</span><h3>Tools</h3><p>Water and food calculators, power budget, antenna length, Morse trainer, go-bag generator.</p><span class="card-meta">Open tools →</span></a>
      <a class="card" href="emergency-contacts.html"><span class="card-tag">Reference</span><h3>Emergency contacts</h3><p>112, disaster helplines, IMD alerts, and a printable family contact card.</p><span class="card-meta">Open →</span></a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="callout callout--warning" style="max-width:64rem">
      <span class="callout-title">Read this first</span>
      <p>This guide is educational. It does not replace professional training, medical care or official instructions. Radio transmission in India requires a WPC licence except on type-approved low-power 446 MHz devices. Medical content is not a prescription. In an emergency, follow local authorities and call <strong>112</strong>.</p>
    </div>
    <div class="grid grid--3" style="margin-top:1.5rem">
      <a class="card card--feature" href="offline-library.html"><span class="card-tag">Make it last</span><h3>Print it. Save it. Keep it offline.</h3><p>Install the site as an app, download maps, and build a printed binder of the pages you need most.</p><span class="card-meta">Build your library →</span></a>
      <a class="card" href="sources.html"><span class="card-tag">Trust</span><h3>Sources & standards</h3><p>NDMA, IMD, WPC, WHO, Red Cross and FEMA guidance behind the content.</p><span class="card-meta">See sources →</span></a>
      <a class="card" href="faq.html"><span class="card-tag">Honest answers</span><h3>FAQ</h3><p>How much to store, what is legal, and what this guide will not teach you.</p><span class="card-meta">Read FAQ →</span></a>
    </div>
  </div>
</section>
`,
};

const scenariosHub = {
  slug: "scenarios",
  title: "Scenarios & Hazards",
  shortTitle: "Scenarios",
  category: "scenarios",
  navActive: "scenarios.html",
  summary:
    "Specific playbooks for grid collapse, pandemic, flood, earthquake, nuclear/EMP, and India's major natural hazards.",
  readTime: "3 min read",
  html: `<div class="page-head"><div class="wrap"><nav aria-label="Breadcrumb"><ol class="breadcrumbs"><li><a href="index.html">Home</a></li><li aria-current="page">Scenarios</li></ol></nav>
  <h1>Scenarios & Hazards</h1><p class="lede">When the emergency has a name, you need a specific plan. Each playbook gives the first 72 hours, the main risks, and what to do after.</p></div></div>
  <div class="wrap" style="padding-bottom:4rem" id="main">
    <div class="section-head"><h2>Worst-case scenarios</h2><p>Low probability, high consequence. Preparation overlaps heavily with everyday resilience.</p></div>
    <div class="grid grid--3">
      <a class="card" href="grid-collapse.html"><span class="card-tag">Infrastructure</span><h3>Grid collapse</h3><p>A long power outage takes out water, fuel and telecoms within hours.</p><span class="card-meta">Open →</span></a>
      <a class="card" href="pandemic.html"><span class="card-tag">Health</span><h3>Pandemic</h3><p>Reduce exposure, care for the sick, keep the household running.</p><span class="card-meta">Open →</span></a>
      <a class="card" href="nuclear-emp.html"><span class="card-tag">Extreme</span><h3>Nuclear & EMP</h3><p>Get inside, stay inside, and protect critical electronics.</p><span class="card-meta">Open →</span></a>
    </div>
    <div class="section-head" style="margin-top:3rem"><h2>India's natural hazards</h2><p>These happen every year. Know your local risk and the early actions that matter.</p></div>
    <div class="grid grid--3">
      <a class="card" href="flood.html"><span class="card-tag">Monsoon</span><h3>Flood</h3><p>Most common disaster. Never enter moving water; treat all flood water as contaminated.</p><span class="card-meta">Open →</span></a>
      <a class="card" href="earthquake.html"><span class="card-tag">Seismic</span><h3>Earthquake</h3><p>Drop, cover, hold on — then expect aftershocks and gas leaks.</p><span class="card-meta">Open →</span></a>
      <a class="card" href="cyclone.html"><span class="card-tag">Coastal</span><h3>Cyclone</h3><p>Wind, rain and storm surge. Evacuate early and avoid the eye's false calm.</p><span class="card-meta">Open →</span></a>
      <a class="card" href="heatwave.html"><span class="card-tag">Summer</span><h3>Heatwave</h3><p>India's silent killer. Water, shade, and checking on the vulnerable.</p><span class="card-meta">Open →</span></a>
      <a class="card" href="wildfire.html"><span class="card-tag">Forest</span><h3>Wildfire</h3><p>Defensible space, early evacuation and smoke protection.</p><span class="card-meta">Open →</span></a>
      <a class="card" href="landslide.html"><span class="card-tag">Hill country</span><h3>Landslide</h3><p>Warning signs appear before the slope fails. Move sideways, not downhill.</p><span class="card-meta">Open →</span></a>
      <a class="card" href="tsunami.html"><span class="card-tag">Coastal</span><h3>Tsunami</h3><p>Natural warnings are your best warning. High ground, immediately.</p><span class="card-meta">Open →</span></a>
      <a class="card" href="air-quality.html"><span class="card-tag">Slow onset</span><h3>Air quality</h3><p>Smog, dust and smoke. Protect lungs indoors and out.</p><span class="card-meta">Open →</span></a>
      <a class="card" href="seismic-zones.html"><span class="card-tag">Reference</span><h3>Seismic zones</h3><p>Know your zone and what it means for your building.</p><span class="card-meta">Open →</span></a>
    </div>
    <div class="callout callout--note" style="margin-top:2rem"><span class="callout-title">Official instructions win</span><p>Every playbook here is general guidance. If the district collector, NDMA, NDRF, IMD or police issue instructions, follow them over anything on this site.</p></div>
  </div>`,
};

const guides = {
  slug: "guides",
  title: "All Guides",
  shortTitle: "All guides",
  category: "core",
  navActive: "guides.html",
  summary:
    "Search and filter every guide by topic — survival, medical, communication, skills, planning, scenarios and India hazards.",
  readTime: "Directory",
  html: `<div class="page-head"><div class="wrap"><nav aria-label="Breadcrumb"><ol class="breadcrumbs"><li><a href="index.html">Home</a></li><li aria-current="page">All guides</li></ol></nav>
  <h1>All Guides</h1><p class="lede">Search by keyword or filter by category. Every guide works offline once the site is installed.</p></div></div>
  <div class="wrap" style="padding-bottom:4rem" id="main">
    <div class="filter-bar">
      <label class="visually-hidden" for="guide-search">Search guides</label>
      <input id="guide-search" type="search" placeholder="Search guides, e.g. water, bleeding, antenna…" autocomplete="off">
      <label class="visually-hidden" for="guide-cat">Filter by category</label>
      <select id="guide-cat">
        <option value="">All categories</option>
        <option value="survival">Survival</option>
        <option value="medical">Medical</option>
        <option value="comms">Communication</option>
        <option value="skills">Skills & security</option>
        <option value="planning">Planning</option>
        <option value="scenarios">Scenarios</option>
        <option value="hazards">India hazards</option>
        <option value="core">Reference</option>
      </select>
    </div>
    <div class="chip-row" id="guide-chips">
      <button class="chip" type="button" data-chip="" aria-pressed="true">All</button>
      <button class="chip" type="button" data-chip="survival" aria-pressed="false">Survival</button>
      <button class="chip" type="button" data-chip="medical" aria-pressed="false">Medical</button>
      <button class="chip" type="button" data-chip="comms" aria-pressed="false">Comms</button>
      <button class="chip" type="button" data-chip="skills" aria-pressed="false">Skills</button>
      <button class="chip" type="button" data-chip="planning" aria-pressed="false">Planning</button>
      <button class="chip" type="button" data-chip="scenarios" aria-pressed="false">Scenarios</button>
      <button class="chip" type="button" data-chip="hazards" aria-pressed="false">Hazards</button>
      <button class="chip" type="button" data-chip="core" aria-pressed="false">Reference</button>
    </div>
    <p class="result-count" id="guide-count" aria-live="polite">Loading guides…</p>
    <div class="grid grid--3" id="guide-list"></div>
    <noscript>
      <div class="empty-state">JavaScript is disabled, so search is unavailable. Browse the guides by category:</div>
      <div class="grid grid--3" style="margin-top:1rem">
        <a class="card" href="water.html"><h3>Water</h3><p>Find, treat, store.</p></a>
        <a class="card" href="food.html"><h3>Food</h3><p>Stock and preserve.</p></a>
        <a class="card" href="shelter.html"><h3>Shelter</h3><p>Stay dry and warm.</p></a>
        <a class="card" href="fire.html"><h3>Fire</h3><p>Start and control it.</p></a>
        <a class="card" href="power.html"><h3>Power</h3><p>Solar and batteries.</p></a>
        <a class="card" href="medical.html"><h3>Medical</h3><p>Prepare and respond.</p></a>
        <a class="card" href="communication.html"><h3>Communication</h3><p>Radio and licensing.</p></a>
        <a class="card" href="family-plan.html"><h3>Family plan</h3><p>Meeting points and roles.</p></a>
        <a class="card" href="scenarios.html"><h3>Scenarios</h3><p>Specific playbooks.</p></a>
      </div>
    </noscript>
  </div>`,
};

const tools = {
  slug: "tools",
  title: "Survival Tools & Calculators",
  shortTitle: "Tools",
  category: "core",
  navActive: "tools.html",
  summary:
    "Size your water and food storage, budget power, calculate antenna lengths, build a go-bag list, and learn Morse.",
  readTime: "Interactive",
  html: `<div class="page-head"><div class="wrap"><nav aria-label="Breadcrumb"><ol class="breadcrumbs"><li><a href="index.html">Home</a></li><li aria-current="page">Tools</li></ol></nav>
  <h1>Tools & Calculators</h1><p class="lede">Everything runs in your browser and works offline. Nothing you type leaves your device.</p></div></div>
  <div class="wrap layout" id="main">
    <article class="prose">
      <section id="water-calc">
        <h2>Water storage calculator</h2>
        <div class="tool">
          <div class="field-row">
            <div class="field"><label for="w-people">People</label><input id="w-people" type="number" min="1" max="30" value="4" inputmode="numeric"></div>
            <div class="field"><label for="w-days">Days</label><input id="w-days" type="number" min="1" max="60" value="14" inputmode="numeric"></div>
            <div class="field"><label for="w-litres">Litres per person per day</label><input id="w-litres" type="number" min="3" max="40" value="10" inputmode="decimal"></div>
          </div>
          <div class="tool-output" id="w-out" aria-live="polite"></div>
        </div>
      </section>
      <section id="food-calc">
        <h2>Food storage calculator</h2>
        <div class="tool">
          <div class="field-row">
            <div class="field"><label for="f-people">People</label><input id="f-people" type="number" min="1" max="30" value="4" inputmode="numeric"></div>
            <div class="field"><label for="f-days">Days</label><input id="f-days" type="number" min="1" max="365" value="14" inputmode="numeric"></div>
            <div class="field"><label for="f-kcal">Calories per person per day</label><input id="f-kcal" type="number" min="1200" max="4000" value="2100" inputmode="numeric"></div>
          </div>
          <div class="tool-output" id="f-out" aria-live="polite"></div>
        </div>
      </section>
      <section id="power-calc">
        <h2>Power budget calculator</h2>
        <div class="tool">
          <p class="text-muted" style="font-size:.85rem">Add the devices you plan to run. The result estimates daily watt-hours and a suggested battery size with 50% usable capacity.</p>
          <div id="power-rows"></div>
          <button class="btn btn--small" type="button" id="power-add">Add device</button>
          <div class="tool-output" id="p-out" aria-live="polite"></div>
        </div>
      </section>
      <section id="antenna-calc">
        <h2>Antenna length calculator</h2>
        <div class="tool">
          <div class="field-row">
            <div class="field"><label for="a-freq">Frequency (MHz)</label><input id="a-freq" type="number" min="1" max="6000" step="0.001" value="146" inputmode="decimal"></div>
            <div class="field"><label for="a-type">Type</label>
              <select id="a-type">
                <option value="dipole">Half-wave dipole (total)</option>
                <option value="leg">Dipole leg (each side)</option>
                <option value="quarter">Quarter-wave vertical</option>
                <option value="jpole">J-pole radiator</option>
                <option value="yagi">Yagi driven element</option>
              </select>
            </div>
          </div>
          <div class="tool-output" id="a-out" aria-live="polite"></div>
        </div>
      </section>
      <section id="gobag">
        <h2>Go-bag generator</h2>
        <div class="tool">
          <div class="field-row">
            <div class="field"><label for="g-people">People</label><input id="g-people" type="number" min="1" max="12" value="2" inputmode="numeric"></div>
            <div class="field"><label for="g-days">Days</label><input id="g-days" type="number" min="1" max="14" value="3" inputmode="numeric"></div>
            <div class="field"><label for="g-pets">Pets</label><input id="g-pets" type="number" min="0" max="10" value="0" inputmode="numeric"></div>
          </div>
          <button class="btn btn--small" type="button" id="g-build">Build list</button>
          <div class="tool-output" id="g-out" aria-live="polite"></div>
        </div>
      </section>
      <section id="morse">
        <h2>Morse trainer</h2>
        <div class="tool">
          <p class="text-muted" style="font-size:.85rem">Type a short message and hear it in Morse code. Useful for practicing recognition.</p>
          <div class="field"><label for="m-text">Message</label><input id="m-text" type="text" maxlength="60" value="SOS" autocomplete="off"></div>
          <div class="field-row">
            <div class="field"><label for="m-wpm">Speed (WPM)</label><input id="m-wpm" type="number" min="5" max="30" value="12" inputmode="numeric"></div>
          </div>
          <button class="btn btn--small" type="button" id="m-play">Play</button>
          <div class="tool-output" id="m-out" aria-live="polite"></div>
        </div>
      </section>
      <section id="cpr">
        <h2>CPR compression metronome</h2>
        <div class="tool">
          <p class="text-muted" style="font-size:.85rem">A 110 beat-per-minute click to pace chest compressions. The click is a guide, not a substitute for a certified CPR course.</p>
          <div class="field-row">
            <div class="field"><label for="cpr-bpm">Beats per minute</label><input id="cpr-bpm" type="number" min="80" max="140" value="110" inputmode="numeric"></div>
          </div>
          <button class="btn btn--small" type="button" id="cpr-toggle">Start</button>
          <div class="tool-output" id="cpr-out" aria-live="polite">Idle.</div>
        </div>
      </section>
      <section id="decision">
        <h2>Bug in or bug out?</h2>
        <div class="tool">
          <p class="text-muted" style="font-size:.85rem">Answer five quick questions for a recommendation. Official evacuation orders always override this tool.</p>
          <div class="field"><label for="d-threat">Is the threat spreading toward you?</label>
            <select id="d-threat"><option value="0">No — localised or short</option><option value="1">Yes — spreading</option></select></div>
          <div class="field"><label for="d-home">Is your home safe and undamaged?</label>
            <select id="d-home"><option value="0">Yes</option><option value="1">No — damage, flood, fire or gas leak</option></select></div>
          <div class="field"><label for="d-supplies">Do you have at least 14 days of water, food and medicine?</label>
            <select id="d-supplies"><option value="0">Yes</option><option value="1">No</option></select></div>
          <div class="field"><label for="d-vulnerable">Is anyone unable to shelter safely (medical need, disability, late pregnancy)?</label>
            <select id="d-vulnerable"><option value="0">No</option><option value="1">Yes</option></select></div>
          <div class="field"><label for="d-order">Has an evacuation order or red warning been issued?</label>
            <select id="d-order"><option value="0">No</option><option value="1">Yes</option></select></div>
          <button class="btn btn--small" type="button" id="d-run">Get recommendation</button>
          <div class="tool-output" id="d-out" aria-live="polite"></div>
        </div>
      </section>
      <section id="print">
        <h2>Printable cards</h2>
        <ul>
          <li><a href="first-aid.html">First-aid quick reference</a> — print the page for the kit.</li>
          <li><a href="emergency-contacts.html">Family contact card</a>.</li>
          <li><a href="family-plan.html">Household emergency plan</a>.</li>
          <li><a href="antenna-plans.html">Antenna dimension sheets</a>.</li>
        </ul>
      </section>
    </article>
    <aside class="toc no-print" aria-label="On this page">
      <h2>On this page</h2>
      <ol>
        <li><a href="#water-calc">Water storage</a></li>
        <li><a href="#food-calc">Food storage</a></li>
        <li><a href="#power-calc">Power budget</a></li>
        <li><a href="#antenna-calc">Antenna length</a></li>
        <li><a href="#gobag">Go-bag generator</a></li>
        <li><a href="#morse">Morse trainer</a></li>
        <li><a href="#cpr">CPR metronome</a></li>
        <li><a href="#decision">Bug in or out</a></li>
        <li><a href="#print">Printable cards</a></li>
      </ol>
    </aside>
  </div>`,
};

const dashboard = {
  slug: "dashboard",
  title: "Your Dashboard",
  shortTitle: "Dashboard",
  category: "core",
  summary:
    "Saved bookmarks, checklist progress and notes — with export, import and clear-data controls.",
  html: `<div class="page-head"><div class="wrap"><nav aria-label="Breadcrumb"><ol class="breadcrumbs"><li><a href="index.html">Home</a></li><li aria-current="page">Dashboard</li></ol></nav>
  <h1>Your Dashboard</h1><p class="lede">Everything here is stored in this browser only. Export a backup before clearing your browser data or changing devices.</p></div></div>
  <div class="wrap" style="padding-bottom:4rem" id="main">
    <div class="grid grid--2">
      <section class="tool"><h2 style="font-family:var(--font-body);font-size:.8rem;letter-spacing:.18em;text-transform:uppercase;color:var(--accent)">Saved guides</h2><div id="dash-bookmarks" class="text-muted">No bookmarks yet.</div></section>
      <section class="tool"><h2 style="font-family:var(--font-body);font-size:.8rem;letter-spacing:.18em;text-transform:uppercase;color:var(--accent)">Checklist progress</h2><div id="dash-checks" class="text-muted">No checklist progress yet.</div></section>
    </div>
    <section class="tool" style="margin-top:1.2rem"><h2 style="font-family:var(--font-body);font-size:.8rem;letter-spacing:.18em;text-transform:uppercase;color:var(--accent)">Your notes</h2><div id="dash-notes" class="text-muted">No notes yet.</div></section>
    <section class="tool" style="margin-top:1.2rem">
      <h2 style="font-family:var(--font-body);font-size:.8rem;letter-spacing:.18em;text-transform:uppercase;color:var(--accent)">Backup</h2>
      <p class="text-muted" style="font-size:.85rem">Export bookmarks, progress and notes as a JSON file. Import restores them on this device.</p>
      <div class="field-row">
        <button class="btn btn--small" type="button" id="dash-export">Export backup</button>
        <label class="btn btn--ghost btn--small" for="dash-import" style="cursor:pointer">Import backup</label>
        <input class="visually-hidden" id="dash-import" type="file" accept="application/json,.json">
        <button class="btn btn--ghost btn--small" type="button" id="dash-clear">Clear all data</button>
      </div>
      <div class="tool-output" id="dash-out" aria-live="polite"></div>
    </section>
  </div>`,
};

const notFound = {
  slug: "404",
  html: `<div class="wrap center-page">
    <div>
      <p class="code" aria-hidden="true">404</p>
      <h1>Signal lost.</h1>
      <p class="lede">That page isn't here. Try the guides directory or head home.</p>
      <div class="hero-actions" style="justify-content:center">
        <a class="btn" href="index.html">Home</a>
        <a class="btn btn--ghost" href="guides.html">All guides</a>
      </div>
    </div>
  </div>`,
};

module.exports = { index, scenariosHub, guides, tools, dashboard, notFound };

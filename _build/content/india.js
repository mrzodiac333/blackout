const { SITE, esc, callout, table } = require("../render");
const { HAZARDS, SOURCES, STATES } = require("../data/india-hazards");

function labelsFor(state, level) {
  return state.hazards
    .filter(([, value]) => value === level)
    .map(([key]) => HAZARDS[key].label);
}

function extraLinks(state) {
  return (state.extra || [])
    .map(([label, href]) => `<a href="${href}">${esc(label)}</a>`)
    .join(" · ");
}

const mapTiles = STATES.map((state) => {
  const higher = labelsFor(state, "higher");
  const watch = labelsFor(state, "watch");
  const aria = [
    state.name,
    higher.length ? `Higher priority: ${higher.join(", ")}.` : "",
    watch.length ? `Watch: ${watch.join(", ")}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
  return `<a class="hazard-tile${higher.length ? " has-higher" : " watch-only"}${state.type === "ut" ? " is-ut" : ""}" href="hazards.html?state=${state.code}" data-state="${state.code}" style="grid-column:${state.grid[0]};grid-row:${state.grid[1]}" aria-label="${esc(aria)}"><span>${state.code}</span><i aria-hidden="true"></i></a>`;
}).join("");

const stateOptions = (type) =>
  STATES.filter((state) => state.type === type)
    .map((state) => `<option value="${state.code}">${esc(state.name)}</option>`)
    .join("");

const tableRows = STATES.map((state) => {
  const higher = labelsFor(state, "higher");
  const watch = labelsFor(state, "watch");
  const extra = extraLinks(state);
  return [
    `<strong>${esc(state.name)}</strong>`,
    higher.length ? higher.join(", ") : "—",
    watch.length ? watch.join(", ") : "—",
    `${esc(state.note)}${extra ? `<br><span class="text-muted">Also relevant: ${extra}</span>` : ""}`,
  ];
});

const sourceCards = Object.values(SOURCES)
  .map(
    (source) => `<div class="source-item">
      <h3>${esc(source.label)}</h3>
      <p>${esc(source.note)}</p>
      <a href="${source.url}" rel="noopener">Official source →</a>
    </div>`
  )
  .join("");

const hazardsPage = {
  slug: "hazards",
  title: "Hazards Where You Live",
  summary:
    "A state and UT preparedness map for India's main natural hazards, with first actions and links to the full guides.",
  category: "hazards",
  navActive: "scenarios.html",
  html: `<div class="page-head">
  <div class="wrap">
    <nav aria-label="Breadcrumb"><ol class="breadcrumbs"><li><a href="index.html">Home</a></li><li><a href="scenarios.html">Scenarios</a></li><li aria-current="page">Hazards</li></ol></nav>
    <h1>Hazards where you live</h1>
    <p class="lede">India's risk changes by state and district. Select your state or UT to see the hazards that deserve priority, the first actions, and the guides that go deeper.</p>
    <div class="page-meta"><span><span class="dot" aria-hidden="true"></span>India Hazards</span><span>Last reviewed ${SITE.updated}</span><button class="bookmark-btn no-print" type="button" data-print>Print</button></div>
  </div>
</div>
<div class="wrap hazard-page" id="main">
  ${callout(
    "note",
    "Preparedness priorities, not an official risk rating",
    "<p>This page is a planning aid. It generalises state-level risk; your district, town and building can be very different. Follow IMD, NDMA, SDMA, DDMA and local officials in an actual emergency.</p>"
  )}
  <p class="hazard-action-link no-print"><a class="btn btn--small" href="act-now.html">Need to act right now? Open immediate actions</a> <a class="btn btn--ghost btn--small" href="emergency-contacts.html">Emergency contacts</a></p>

  <section class="hazard-toolbar no-print" aria-label="Choose a state">
    <div class="field">
      <label for="hazard-state">State or union territory</label>
      <select id="hazard-state">
        <option value="">Select a state or UT</option>
        <optgroup label="States">${stateOptions("state")}</optgroup>
        <optgroup label="Union territories">${stateOptions("ut")}</optgroup>
      </select>
    </div>
    <p class="text-muted">Your choice is saved on this device. The map is a schematic, not a boundary map.</p>
  </section>

  <div class="hazard-layout">
    <div class="hazard-map-wrap no-print">
      <div class="hazard-map" role="group" aria-label="Schematic map of states and union territories">${mapTiles}</div>
      <p class="map-note">Schematic map — not to scale. Each tile is a link.</p>
    </div>
    <section class="state-panel" id="state-panel" aria-live="polite">
      <p class="text-muted">Choose a state or union territory to see its priority hazards and first actions. The full table is below.</p>
    </section>
  </div>

  <noscript><div class="callout callout--note"><span class="callout-title">JavaScript is off</span><p>The interactive panel is unavailable. Use the full state and UT table below.</p></div></noscript>

  <section id="all-states" class="section section--tight">
    <div class="section-head"><h2>All states and union territories</h2><p>Use this table for a quick comparison or when the interactive panel is unavailable.</p></div>
    ${table(
      "State and UT hazard priorities. “Higher” means higher preparedness priority, not an official risk rating.",
      ["State/UT", "Higher priority", "Watch", "Local note"],
      tableRows
    )}
    <p class="text-muted" style="font-size:.8rem;margin-top:.8rem">State flood totals in the source data are historical maximum affected area (1953–2010); flash floods and urban flooding can be worse locally. District-level risk varies.</p>
  </section>

  <section id="how" class="section section--tight">
    <div class="section-head"><h2>How this is classified</h2><p>Each hazard is tied to an official source. The page is deliberately conservative: when in doubt, it says “watch” rather than overstating certainty.</p></div>
    <div class="grid grid--2 source-grid">${sourceCards}</div>
    <div class="callout callout--warning" style="margin-top:1.5rem"><span class="callout-title">Limits of this page</span><p>This is not a substitute for a district disaster management plan, a structural safety assessment or official warnings. If local authorities issue instructions, they override this page.</p></div>
  </section>
</div>`,
};

const actGroups = [
  {
    title: "Medical emergencies",
    intro: "Call 112 early. Do not delay help while looking for a perfect answer.",
    items: [
      {
        title: "Severe bleeding",
        open: true,
        body: `<ul>
<li>Call <strong>112</strong>. Press hard on the wound with a clean cloth or dressing. Keep pressing.</li>
<li>Add more layers if blood soaks through; do not remove the first layer.</li>
<li>If bleeding from an arm or leg is life-threatening and you are trained, use a tourniquet above the wound and note the time.</li>
<li>Keep the person warm and lying down. Watch for shock.</li>
</ul>`,
        link: ["first-aid.html#bleeding", "Full bleeding first aid"],
      },
      {
        title: "Not breathing or unresponsive",
        body: `<ul>
<li>Call <strong>112</strong>. If the person is unresponsive and not breathing normally, start CPR.</li>
<li>Push hard and fast in the centre of the chest at 100–120 compressions per minute.</li>
<li>Use an AED if one is available and follow its voice prompts.</li>
<li>Swap with another trained person every two minutes if possible.</li>
</ul>`,
        link: ["first-aid.html#cpr", "Full CPR guidance"],
      },
      {
        title: "Choking",
        body: `<ul>
<li>If they can cough, speak or breathe, encourage coughing.</li>
<li>If they cannot breathe, speak or cough, give 5 back blows between the shoulder blades.</li>
<li>If not cleared, give 5 abdominal thrusts. Repeat the cycle.</li>
<li>Call <strong>112</strong> if the object does not come out or the person collapses.</li>
</ul>`,
        link: ["first-aid.html#choking", "Full choking guidance"],
      },
      {
        title: "Burns",
        body: `<ul>
<li>Stop the burning. Remove hot or smouldering clothing unless it is stuck to the skin.</li>
<li>Cool the burn with cool running water for 20 minutes. Do not use ice, butter or toothpaste.</li>
<li>Cover loosely with clean, non-stick cloth.</li>
<li>Seek urgent care for large, deep, facial, hand, joint or electrical burns.</li>
</ul>`,
        link: ["first-aid.html#burns", "Full burn first aid"],
      },
      {
        title: "Heat stroke",
        body: `<ul>
<li>Call <strong>112</strong>. Move the person to shade or a cool room.</li>
<li>Remove excess clothing and cool aggressively with water and fanning.</li>
<li>Do not give fluids to a confused or unconscious person.</li>
<li>Heat stroke is a medical emergency; do not wait for the person to “cool down naturally”.</li>
</ul>`,
        link: ["climate.html#heat", "Heat illness guidance"],
      },
      {
        title: "Snakebite",
        body: `<ul>
<li>Call <strong>112</strong> and get to a hospital with antivenom.</li>
<li>Keep the person calm and still. Remove rings, watches and tight clothing.</li>
<li>Immobilise the limb and keep it below heart level if possible.</li>
<li>Do not cut, suck, apply a tight bandage or try to catch the snake.</li>
</ul>`,
        link: ["animals.html#snake", "Full snakebite guidance"],
      },
    ],
  },
  {
    title: "Natural hazards",
    intro: "Move first, then refine. Do not wait for perfect information.",
    items: [
      {
        title: "Flood",
        body: `<ul>
<li>Move to higher ground early. Do not wait for the water to reach the stairs.</li>
<li>Never walk or drive through moving water. Turn around.</li>
<li>Avoid bridges, underpasses, riverbanks and electrical equipment.</li>
<li>Drink only treated water. Flood water contaminates everything it touches.</li>
</ul>`,
        link: ["flood.html#during", "Full flood playbook"],
      },
      {
        title: "Earthquake",
        body: `<ul>
<li>Drop, cover and hold on. Stay away from windows and tall furniture.</li>
<li>If outdoors, move away from buildings, walls and power lines.</li>
<li>After shaking, check for injuries, gas leaks and structural damage. Expect aftershocks.</li>
<li>Do not use lifts. Evacuate only if the building is unsafe.</li>
</ul>`,
        link: ["earthquake.html#during", "Full earthquake playbook"],
      },
      {
        title: "Cyclone",
        body: `<ul>
<li>Follow evacuation orders. Move to a sturdy shelter away from the coast.</li>
<li>Stay away from windows. Shelter in an interior room on the lowest safe floor.</li>
<li>Avoid the calm eye; the wind will return from the other direction.</li>
<li>Keep away from downed power lines and flood water.</li>
</ul>`,
        link: ["cyclone.html#during", "Full cyclone playbook"],
      },
      {
        title: "Wildfire",
        body: `<ul>
<li>Leave early if warned. Do not wait for the fire to arrive.</li>
<li>Close windows and vents. Protect your lungs with a mask or damp cloth.</li>
<li>Choose a route away from smoke and active fire.</li>
<li>Follow fire-service instructions; do not return until it is declared safe.</li>
</ul>`,
        link: ["wildfire.html#evacuate", "Full wildfire playbook"],
      },
      {
        title: "Landslide",
        body: `<ul>
<li>Move sideways, away from the slope. Do not try to outrun a slide downhill.</li>
<li>If you cannot escape, curl up and protect your head.</li>
<li>Stay alert for more slides; they often repeat.</li>
<li>Stay away from the toe of the slope and damaged buildings.</li>
</ul>`,
        link: ["landslide.html#during", "Full landslide playbook"],
      },
      {
        title: "Tsunami",
        body: `<ul>
<li>Move inland or to high ground immediately. Do not wait for an official warning.</li>
<li>Natural warnings include strong shaking, a sudden sea retreat or a loud roar.</li>
<li>Stay away from the coast until authorities say it is safe; waves can continue for hours.</li>
<li>Do not return to the beach to watch.</li>
</ul>`,
        link: ["tsunami.html#evacuate", "Full tsunami playbook"],
      },
    ],
  },
  {
    title: "Utilities and shelter",
    intro: "Assume the system is unsafe until you can verify it.",
    items: [
      {
        title: "Downed power line or outage",
        body: `<ul>
<li>Treat every downed line as live. Stay at least 10 metres away and keep others back.</li>
<li>Do not touch fences, water or vehicles near a line.</li>
<li>Report it to the utility and emergency services.</li>
<li>Use torches, not candles. Never run a generator indoors.</li>
</ul>`,
        link: ["power.html", "Power safety guide"],
      },
      {
        title: "Contaminated water",
        body: `<ul>
<li>Assume flood water is contaminated. Do not drink it.</li>
<li>Boil water for at least 1 minute at a rolling boil, or use a proven treatment method.</li>
<li>Do not use water that smells of fuel or chemicals.</li>
<li>Store treated water in clean, covered containers.</li>
</ul>`,
        link: ["water.html", "Water treatment guide"],
      },
      {
        title: "Gas leak",
        body: `<ul>
<li>Do not switch lights, fans or appliances on or off. Do not use a phone inside.</li>
<li>Open windows and doors if safe, then leave the building.</li>
<li>Turn off the gas supply at the cylinder or meter if you can do so safely.</li>
<li>Call the gas emergency service from outside. Keep flames and sparks away.</li>
</ul>`,
        link: ["fire.html", "Fire and gas safety"],
      },
      {
        title: "Trapped or buried",
        body: `<ul>
<li>Stay calm and conserve air and energy. Cover your mouth and nose against dust.</li>
<li>Tap on a pipe or wall in a regular pattern. Use a whistle or torch if available.</li>
<li>Do not light a flame; there may be gas.</li>
<li>Signal rescuers and avoid unnecessary movement.</li>
</ul>`,
        link: ["signaling-rescue.html", "Signalling and rescue"],
      },
    ],
  },
  {
    title: "Security",
    intro: "Avoid confrontation. Escape, shelter and call for help when it is safe.",
    items: [
      {
        title: "Violence or intruder",
        body: `<ul>
<li>Get to a safe room. Lock or barricade the door and stay quiet.</li>
<li>Call <strong>112</strong> when it is safe; leave the line open if instructed.</li>
<li>Do not confront an armed intruder. Escape if you can do so without crossing their path.</li>
<li>De-escalate only if escape and shelter are not possible.</li>
</ul>`,
        link: ["security.html#deescalate", "Security and de-escalation"],
      },
      {
        title: "Civil unrest",
        body: `<ul>
<li>Avoid crowds, rumours and flashpoints. Keep indoors if it is safe.</li>
<li>Monitor official alerts and tell someone your plan.</li>
<li>Choose a safe route and avoid roads that may be blocked.</li>
<li>Do not carry anything that could escalate a confrontation.</li>
</ul>`,
        link: ["security.html", "Security guide"],
      },
    ],
  },
];

const actDetails = (items) =>
  items
    .map(
      (item) => `<details${item.open ? " open" : ""}>
        <summary>${esc(item.title)}</summary>
        <div class="act-now-body">${item.body}<a class="act-now-link" href="${item.link[0]}">${esc(item.link[1])} →</a></div>
      </details>`
    )
    .join("");

const actNowPage = {
  slug: "act-now",
  title: "Act Now",
  summary:
    "Immediate actions for injury, natural hazards, utilities and security — with links to the full guides.",
  category: "hazards",
  html: `<div class="page-head">
  <div class="wrap">
    <nav aria-label="Breadcrumb"><ol class="breadcrumbs"><li><a href="index.html">Home</a></li><li aria-current="page">Act now</li></ol></nav>
    <h1>Act now</h1>
    <p class="lede">Immediate actions for the first minutes. Find the situation, open it and act. Call 112 early if life is at risk.</p>
    <div class="page-meta"><span><span class="dot" aria-hidden="true"></span>Immediate actions</span><span>Last reviewed ${SITE.updated}</span><button class="bookmark-btn no-print" type="button" data-print>Print</button></div>
  </div>
</div>
<div class="wrap act-now-page" id="main">
  <div class="callout callout--danger act-now-callout">
    <span class="callout-title">Life-threatening emergency</span>
    <p><a class="act-now-call" href="tel:112">Call 112</a></p>
    <p>Police, fire and ambulance. Follow the operator's instructions. If you cannot speak safely, use the emergency SMS or app service available in your area.</p>
  </div>

  <div class="act-now-grid">
    ${actGroups
      .map(
        (group) => `<section class="act-now-group">
          <h2>${esc(group.title)}</h2>
          <p class="text-muted">${esc(group.intro)}</p>
          ${actDetails(group.items)}
        </section>`
      )
      .join("")}
  </div>

  <div class="callout callout--warning" style="margin-top:2rem">
    <span class="callout-title">After the immediate danger</span>
    <p>Use the full guides for water, sanitation, recovery, damage checks and mental health. This page is not a substitute for first-aid training or professional care.</p>
    <p><a href="first-aid.html">First aid</a> · <a href="emergency-contacts.html">Emergency contacts</a> · <a href="hazards.html">Hazards where you live</a> · <a href="family-plan.html">Family plan</a></p>
  </div>
  <a class="act-now-sticky no-print" href="tel:112">Call 112</a>
</div>`,
};

module.exports = { hazardsPage, actNowPage };

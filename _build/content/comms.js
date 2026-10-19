const { callout, table, figure } = require("../render");
const fs = require("fs");
const path = require("path");
const svg = (name) =>
  fs.readFileSync(path.join(__dirname, "..", "..", "assets", "img", name), "utf8");

module.exports = [
  {
    slug: "communication",
    title: "Communication & Radio",
    shortTitle: "Communication",
    category: "comms",
    summary:
      "Build a communications plan, choose legal gear, and understand Indian radio licensing — including what you can build and what you must not transmit without a licence.",
    readTime: "12 min read",
    intro: `<p>When networks fail, radio still works. But in India, <strong>transmitting without a licence is illegal</strong> except on specific low-power, type-approved devices. This page separates what you can legally do today from what requires training and a licence.</p>
${callout(
  "warning",
  "Legal first",
  "<p>Listening is generally unrestricted. Transmitting on amateur, business or public-safety bands requires a WPC licence. Only WPC-approved low-power 446 MHz devices are licence-free. Never use jammers, amplifiers or modified export radios.</p>"
)}`,
    checklist: [
      "Write a family communication plan with an out-of-area contact",
      "Buy a battery or hand-crank FM/AM radio",
      "Buy only WPC-approved 446 MHz handhelds for licence-free use",
      "Learn the amateur radio licence process if you want long-range comms",
      "Practise radio voice procedure and a daily check-in time",
      "Store spare batteries and a charging plan",
    ],
    sections: [
      {
        id: "plan",
        title: "A communication plan",
        html: `<ul>
<li><strong>Primary:</strong> mobile phones with saved contacts and offline maps.</li>
<li><strong>Secondary:</strong> SMS — texts often get through when calls fail.</li>
<li><strong>Tertiary:</strong> FM/AM radio for official information (All India Radio).</li>
<li><strong>Local:</strong> licence-free handhelds for household or neighbourhood use within a few hundred metres to a few kilometres.</li>
<li><strong>Long range:</strong> amateur radio with a licensed operator.</li>
<li><strong>Out-of-area contact:</strong> someone outside your region who can relay messages. Everyone in the family calls them.</li>
</ul>
${callout(
  "note",
  "Check-in discipline",
  "Agree a daily check-in time and a backup time. Keep messages short: who, where, status, needs. Write a simple message form and practise it."
)}`,
      },
      {
        id: "india",
        title: "India licensing primer (WPC)",
        html: `<p>The <strong>Wireless Planning and Coordination Wing (WPC)</strong> of the Department of Telecommunications regulates all radio transmission in India.</p>
<h3>Amateur radio grades</h3>
${table(
  "Indian amateur licence grades. Verify current fees and power limits with WPC — rules change.",
  ["Grade", "Call sign", "Exam", "Notes"],
  [
    ["Restricted", "VU3", "ASOC written (radio theory + regulations)", "No Morse requirement; lower power limits"],
    ["General", "VU2", "ASOC written + 8 wpm Morse test", "Higher power; broader privileges"],
  ]
)}
<ul>
<li>Applications and exams are handled through WPC and the SaralSanchar portal; local ham clubs help with scheduling and training.</li>
<li>Fees have historically been around ₹1,000 for 20 years or ₹2,000 for a lifetime licence — confirm current amounts.</li>
<li>Minimum age and citizenship rules apply; clubs and institutions can hold station licences.</li>
<li>Your licence carries your call sign and station location. Portable operation rules have relaxed, but restricted areas remain off-limits.</li>
</ul>
<h3>Licence-free devices</h3>
<ul>
<li>Only low-power <strong>446 MHz</strong> handhelds with WPC Equipment Type Approval (ETA) are licence-free.</li>
<li>Since 2025, e-commerce listings must disclose frequency and ETA status. If a listing does not, treat it as suspect.</li>
<li>FRS, GMRS, MURS and many imported "walkie-talkies" are <strong>not legal</strong> to transmit with in India.</li>
<li>Wi-Fi, Bluetooth and similar low-power devices are covered by separate exemption rules.</li>
</ul>
${callout(
  "danger",
  "Prohibited",
  "<p>Jammers, signal boosters, modified radios, and transmitters on public-safety or aviation frequencies are illegal and dangerous. Do not buy, build or use them.</p>"
)}`,
      },
      {
        id: "bands",
        title: "Bands you should know",
        html: `${figure(
  svg("radio/india-bands.svg"),
  "<strong>Common Indian amateur bands.</strong> HF (160–10 m) reaches long distances; VHF/UHF (2 m/70 cm) is best for local communication. Band plans and power limits are set by WPC."
)}
${table(
  "Practical band behaviour.",
  ["Band", "Range", "Best use"],
  [
    ["40 m (7 MHz)", "Regional to national, day and night", "Reliable emergency HF net"],
    ["20 m (14 MHz)", "Long distance", "Daytime long-haul"],
    ["2 m (144 MHz)", "Local, repeaters", "Neighbourhood and city nets"],
    ["70 cm (434 MHz)", "Local, short", "Urban handhelds, repeaters"],
  ]
)}`,
      },
      {
        id: "gear",
        title: "Gear tiers",
        html: `<h3>Tier 0 — receive only (no licence)</h3>
<ul>
<li>Battery/hand-crank AM/FM radio for All India Radio and IMD warnings.</li>
<li>An RTL-SDR dongle with an antenna lets you listen to a wide range of signals from a laptop. Receiving is legal; do not transmit.</li>
<li>A crystal radio is a zero-power receive-only project — see below.</li>
</ul>
<h3>Tier 1 — licence-free local</h3>
<ul>
<li>A pair of WPC-approved 446 MHz handhelds for your household or neighbourhood group.</li>
<li>Spare rechargeable batteries, a charging plan, and a printed channel plan.</li>
</ul>
<h3>Tier 2 — licensed amateur</h3>
<ul>
<li>VHF/UHF handheld or mobile after passing ASOC Restricted Grade.</li>
<li>HF transceiver and a wire antenna after General Grade.</li>
<li>Licensed kit builds such as a Pixie 40 m CW transceiver or uBITX SSB kit (advanced).</li>
</ul>`,
      },
      {
        id: "build",
        title: "What you can build",
        html: `<p>Building receivers and licensed transceiver kits is legal. <strong>Transmitting</strong> still requires a licence and must stay within your privileges.</p>
<h3>Crystal radio (receive only)</h3>
${figure(
  svg("radio/crystal-radio.svg"),
  "<strong>Crystal radio schematic.</strong> No battery, no transmitter. A long wire antenna and good earth improve reception. Use a germanium diode for weak signals and a high-impedance earphone."
)}
<h3>Kit transceivers</h3>
<ul>
<li><strong>Pixie 40 m CW kit:</strong> low-cost, low-power Morse transceiver. Good for learning; requires a licensed operator to transmit.</li>
<li><strong>uBITX SSB transceiver:</strong> a more advanced multi-band kit for experienced builders.</li>
<li><strong>Antennas:</strong> build your own dipole, ground plane, J-pole or Yagi — see <a href="antenna-plans.html">antenna plans</a>.</li>
</ul>
${figure(
  svg("radio/transceiver-block.svg"),
  "<strong>Transceiver blocks.</strong> Understanding the chain helps with kit assembly and troubleshooting."
)}
${callout(
  "warning",
  "RF safety",
  "<p>Keep antennas away from people when transmitting, never touch an antenna while transmitting, and keep all antennas clear of power lines. RF exposure and electrocution are real hazards.</p>"
)}`,
      },
      {
        id: "procedure",
        title: "Voice procedure",
        html: `<ul>
<li><strong>Listen first.</strong> Do not interrupt an emergency net.</li>
<li><strong>Identify</strong> with your call sign on licensed bands.</li>
<li><strong>Be brief:</strong> who you are, where you are, what you need.</li>
<li><strong>Use plain language</strong> — avoid codes unless your group has trained on them.</li>
<li><strong>Spell difficult words</strong> with a phonetic alphabet (Alpha, Bravo, Charlie…).</li>
<li><strong>Confirm</strong> critical messages by repeating them back.</li>
<li><strong>Priority:</strong> distress, urgency, safety, then routine. Never transmit false distress calls.</li>
</ul>
<h3>Example message</h3>
<pre>THIS IS VU3ABC, VU3ABC.
LOCATION: KALYAN NAGAR, BLOCK C.
STATUS: FOUR ADULTS, ONE CHILD, SAFE, WATER LOW.
NEED: DRINKING WATER, 20 LITRES.
WILL MONITOR 145.500 SIMPLEX AT 18:00.
OVER.</pre>`,
      },
      {
        id: "emergency",
        title: "Emergency communication",
        html: `<ul>
<li>In a disaster, amateur radio operators often support official relief. The Amateur Radio Society of India (ARSI) and local clubs coordinate nets.</li>
<li>If you are unlicensed, do not transmit on amateur bands — even in an emergency, use official channels and licensed operators.</li>
<li>Use SMS and messaging apps where data works; keep messages short and battery use low.</li>
<li>Write down information you receive: time, source, message. Rely on official sources, not rumours.</li>
<li>Keep a paper list of frequencies and contacts; do not rely on a phone that may die.</li>
</ul>
<p>Related: <a href="antenna-plans.html">Antenna plans</a> · <a href="power.html">Power</a> · <a href="family-plan.html">Family plan</a> · <a href="signaling-rescue.html">Signalling</a></p>`,
      },
    ],
    related: [
      ["antenna-plans", "Antenna plans"],
      ["power", "Power"],
      ["family-plan", "Family plan"],
    ],
  },
  {
    slug: "antenna-plans",
    title: "Antenna Build Plans",
    shortTitle: "Antenna plans",
    category: "comms",
    summary:
      "Printable plans for four practical antennas: half-wave dipole, quarter-wave ground plane, 2 m J-pole and a tape-measure Yagi.",
    readTime: "14 min read",
    intro: `<p>These plans are for licensed amateur operators or receive-only use. Antennas are simple, cheap and effective — but they must be installed safely. <strong>Never install an antenna near power lines.</strong></p>
${callout(
  "warning",
  "Before you build",
  "<p>You need a WPC amateur licence to transmit. Receive-only use of these antennas with a scanner or SDR is legal. All dimensions are starting points — trim and tune for lowest SWR with a meter.</p>"
)}
<div class="tool no-print">
  <h3>Antenna length calculator</h3>
  <p class="text-muted" style="font-size:.85rem">Enter a frequency in MHz to get starting lengths. Results are approximate; real installations need tuning.</p>
  <div class="field-row">
    <div class="field"><label for="ant-freq">Frequency (MHz)</label><input id="ant-freq" type="number" min="1" max="6000" step="0.001" value="146" inputmode="decimal"></div>
    <div class="field"><label for="ant-type">Antenna type</label>
      <select id="ant-type">
        <option value="dipole">Half-wave dipole (total)</option>
        <option value="dipole-leg">Dipole leg (each side)</option>
        <option value="quarter">Quarter-wave vertical</option>
        <option value="jpole">J-pole radiator</option>
        <option value="yagi">Yagi driven element</option>
      </select>
    </div>
  </div>
  <div class="tool-output" id="ant-out" aria-live="polite"></div>
  <p class="text-muted" style="font-size:.8rem">Formulas: dipole total ≈ 143/f, quarter-wave ≈ 71.5/f, all in metres, f in MHz. Use the <a href="tools.html">tools page</a> for the full calculator.</p>
</div>`,
    checklist: [
      "Licence checked (transmit) or receive-only confirmed",
      "Site clear of power lines",
      "Tape measure, cutters, coax, connectors, soldering iron",
      "SWR meter for tuning",
      "Weatherproofing tape and sealant",
      "Someone to help with installation",
    ],
    sections: [
      {
        id: "dipole",
        title: "Half-wave dipole",
        html: `${figure(
  svg("radio/dipole.svg"),
  "<strong>Half-wave dipole.</strong> Total length L = 143 ÷ f (MHz), split into two equal legs. Feed the centre with coax through a 1:1 balun. Hang horizontally as high as practical."
)}
${table(
  "Dipole cut list (starting lengths, trim for tuning).",
  ["Band", "Frequency", "Total length", "Each leg"],
  [
    ["40 m", "7.1 MHz", "20.1 m", "10.07 m"],
    ["20 m", "14.2 MHz", "10.1 m", "5.03 m"],
    ["2 m", "146 MHz", "0.98 m", "0.49 m"],
  ]
)}
<h3>Build steps</h3>
<ol>
<li>Cut two equal wires about 3% longer than the table.</li>
<li>Attach insulators at the outer ends and a centre insulator/balun.</li>
<li>Solder or clamp the coax centre conductor to one leg and the shield to the other.</li>
<li>Support the ends with rope; keep the wire taut but not tight enough to snap.</li>
<li>Measure SWR at low power and trim both legs equally in small steps.</li>
</ol>
<p><strong>Tuning:</strong> if the resonant frequency is too low, shorten the legs; too high, lengthen them. Aim for SWR below 1.5:1.</p>`,
      },
      {
        id: "ground-plane",
        title: "Quarter-wave ground plane",
        html: `${figure(
  svg("radio/ground-plane.svg"),
  "<strong>Quarter-wave ground plane.</strong> A vertical radiator of 71.5 ÷ f (MHz), with four radials about 5% longer, sloping down at roughly 45 degrees. Feed at the base through a SO-239 connector."
)}
${table(
  "Ground plane dimensions.",
  ["Band", "Radiator", "Radials (each)"],
  [
    ["2 m (146 MHz)", "0.49 m", "0.51 m"],
    ["70 cm (435 MHz)", "0.16 m", "0.17 m"],
  ]
)}
<h3>Build steps</h3>
<ol>
<li>Mount an SO-239 connector through a small metal plate or bracket.</li>
<li>Solder the radiator to the centre pin; solder four radials to the shield/body.</li>
<li>Bend radials down at about 45 degrees.</li>
<li>Seal the connector with self-amalgamating tape.</li>
<li>Mount on a mast clear of metal and wiring; check SWR and adjust radiator length.</li>
</ol>`,
      },
      {
        id: "jpole",
        title: "Two-metre J-pole",
        html: `${figure(
  svg("radio/jpole.svg"),
  "<strong>2 m J-pole.</strong> Dimensions for 146 MHz from 300-ohm twin-lead or copper pipe. The feed point slides along the stub for tuning."
)}
${table(
  "J-pole dimensions for 146 MHz (copper pipe version).",
  ["Section", "Length"],
  [
    ["Long radiator", "1480 mm"],
    ["Short stub", "495 mm"],
    ["Gap at bottom", "50 mm"],
    ["Feed point (from bottom of stub)", "≈ 60–90 mm, tune by sliding"],
  ]
)}
<h3>Build steps</h3>
<ol>
<li>Cut pipe or twin-lead to the dimensions; keep the two conductors parallel and spaced.</li>
<li>Join the top of the stub to the radiator; leave the bottom gap open.</li>
<li>Connect coax: centre to the radiator side, shield to the stub side, at the feed point.</li>
<li>Seal the coax joint and mount the antenna vertically.</li>
<li>Tune by moving the feed point for lowest SWR; mark the final position.</li>
</ol>
<p>J-poles are DC-grounded at the feed and work well without a balun, but they still need weatherproofing and safe mounting.</p>`,
      },
      {
        id: "yagi",
        title: "Three-element tape-measure Yagi",
        html: `${figure(
  svg("radio/yagi.svg"),
  "<strong>3-element Yagi.</strong> A directional antenna for foxhunting or reaching a distant repeater. Elements are made from steel tape measure, mounted through a timber or plastic boom."
)}
${table(
  "Yagi dimensions for 146 MHz.",
  ["Element", "Length", "Position on boom"],
  [
    ["Reflector", "1000 mm", "0 mm (rear)"],
    ["Driven", "950 mm", "410 mm"],
    ["Director", "900 mm", "718 mm"],
  ]
)}
<h3>Build steps</h3>
<ol>
<li>Cut three elements from a steel tape measure; file the ends smooth.</li>
<li>Mark the boom positions and drill clearance holes.</li>
<li>Mount elements through insulating spacers so they do not short to the boom.</li>
<li>Feed the driven element at its centre with coax; a simple gamma match or balun improves matching.</li>
<li>Aim the director toward the target and tune SWR; keep the antenna away from metal and your body.</li>
</ol>
${callout(
  "note",
  "Directional tips",
  "Yagis are directional: point the director (shortest element) toward the signal. Elevate slightly for distant repeaters. Handheld use detunes the antenna — mount it on a short mast or boom."
)}`,
      },
      {
        id: "safety",
        title: "Safety, grounding and weatherproofing",
        html: `${figure(
  svg("radio/swr-coax.svg"),
  "<strong>SWR test setup.</strong> Radio → meter → antenna, with a separate earth. Test at low power and never transmit without an antenna connected."
)}
<ul>
<li><strong>Power lines:</strong> keep every part of the antenna and mast at least twice its height away from power lines. Assume lines are live.</li>
<li><strong>Lightning:</strong> disconnect coax and ground the mast when storms are forecast. Do not rely on a surge protector alone.</li>
<li><strong>Grounding:</strong> bond the mast and coax shield to a separate earth rod; do not use the mains earth as your RF earth.</li>
<li><strong>Weatherproofing:</strong> wrap connectors with self-amalgamating tape, then electrical tape; seal coax entry points.</li>
<li><strong>Mechanical:</strong> use guy ropes or a proper mast; wind loading on a wet antenna is significant.</li>
<li><strong>RF exposure:</strong> do not transmit with people close to the antenna, especially at high power.</li>
<li><strong>SWR:</strong> below 1.5:1 good, 1.5–2.0:1 usable, above 2.0:1 stop and fix.</li>
</ul>
<p>Related: <a href="communication.html">Communication & radio</a> · <a href="power.html">Power</a> · <a href="tools.html">Tools</a></p>`,
      },
    ],
    related: [
      ["communication", "Communication & radio"],
      ["power", "Power"],
      ["tools", "Tools"],
    ],
  },
];

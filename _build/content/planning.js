const { callout, table, figure } = require("../render");
const fs = require("fs");
const path = require("path");
const svg = (name) =>
  fs.readFileSync(path.join(__dirname, "..", "..", "assets", "img", name), "utf8");

module.exports = [
  {
    slug: "family-plan",
    title: "Family Emergency Plan",
    shortTitle: "Family plan",
    category: "planning",
    summary:
      "A one-page plan every household needs: meeting points, contacts, roles, evacuation routes and a 72-hour timeline.",
    readTime: "7 min read",
    intro: `<p>The most valuable preparedness document is a <strong>single page</strong> that everyone knows. Fill it in, print copies, and practise it. Revisit it every six months.</p>`,
    checklist: [
      "Two meeting points agreed and visited",
      "Out-of-area contact named",
      "Roles assigned for each household member",
      "Evacuation routes written and driven",
      "Documents copied and stored safely",
      "Plan practised and dated",
    ],
    sections: [
      {
        id: "meeting",
        title: "Meeting points and contacts",
        html: `<ul>
<li><strong>Meeting point A:</strong> immediately outside your home, in the open, away from glass and trees.</li>
<li><strong>Meeting point B:</strong> a nearby public place everyone can reach on foot, e.g. a school or temple.</li>
<li><strong>Out-of-area contact:</strong> a relative or friend outside your city. Everyone memorises their number.</li>
<li><strong>School and workplace plans:</strong> know their evacuation procedures and pickup points.</li>
<li>Write these on paper and keep copies in wallets, bags and the fridge.</li>
</ul>`,
      },
      {
        id: "roles",
        title: "Roles and responsibilities",
        html: `${table(
          "Assign roles in advance. Everyone should know more than one role.",
          ["Role", "Responsibility"],
          [
            ["Lead", "Decides when to shelter or evacuate; carries the go-bag"],
            ["Comms", "Keeps phones charged; contacts out-of-area person; monitors radio"],
            ["Medical", "Carries medical kit and records; knows medications"],
            ["Children", "Stays with their adult; carries their own small bag"],
            ["Pets", "Carries pet kit and leads animals"],
            ["Documents", "Carries the document folder"],
          ]
        )}`,
      },
      {
        id: "routes",
        title: "Evacuation routes",
        html: `<ul>
<li>Plan two routes out of your neighbourhood, in different directions.</li>
<li>Walk and drive them in advance; note bottlenecks and flood-prone underpasses.</li>
<li>Choose destinations: a relative's home, a shelter, or a safe town.</li>
<li>Agree on a trigger to leave early — e.g. an orange IMD warning or a mandatory order.</li>
<li>Keep the vehicle fuelled and the go-bag near the door.</li>
</ul>`,
      },
      {
        id: "72",
        title: "The first 72 hours",
        html: `<h3>Hour 0–1: safety</h3>
<ul>
<li>Get to safety; account for everyone; treat injuries.</li>
<li>Listen to official information; do not spread rumours.</li>
<li>Shut off gas/electricity if instructed or if you smell gas.</li>
</ul>
<h3>Hour 1–6: stabilise</h3>
<ul>
<li>Water and food; check on vulnerable neighbours.</li>
<li>Charge devices and radios; fill water containers.</li>
<li>Secure the home; check for damage and hazards.</li>
</ul>
<h3>Hour 6–24: communicate</h3>
<ul>
<li>Contact the out-of-area person; send status messages.</li>
<li>Decide whether to stay or leave.</li>
<li>Record decisions and information received.</li>
</ul>
<h3>Hour 24–72: sustain</h3>
<ul>
<li>Ration water and food; maintain hygiene.</li>
<li>Rest in shifts; keep a routine.</li>
<li>Reassess daily and adapt.</li>
</ul>`,
      },
      {
        id: "map",
        title: "Draw your evacuation map",
        html: `${figure(
          svg("diagrams/evacuation-map.svg"),
          "<strong>Printable evacuation map template.</strong> Draw your streets, mark home, both meeting points, the hospital, water sources and safe high ground. Note blocked roads and a north arrow."
        )}
<p>Keep a copy in the go-bag, one in the car and one on the fridge. Walk the routes with every household member, including children.</p>`,
      },
      {
        id: "print",
        title: "Printable plan",
        html: `<div class="print-card" style="border:2px solid #ff6b00;padding:1.2rem;margin:1.2rem 0;max-width:40rem">
  <p style="margin:0 0 .8rem;letter-spacing:.18em;text-transform:uppercase;font-weight:700">Household Emergency Plan</p>
  <table style="width:100%;font-size:.85rem">
    <tbody>
      <tr><td style="width:40%">Meeting point A</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Meeting point B</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Out-of-area contact</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Evacuation route 1</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Evacuation route 2</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Destination</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Nearest hospital</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Nearest police</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Lead</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Comms</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Medical</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Plan practised</td><td><span class="fill-line"></span></td></tr>
    </tbody>
  </table>
</div>
<p>Print this page, fill it in with a pen, and pin it where everyone can see it. Review it every six months.</p>`,
      },
    ],
    related: [
      ["emergency-contacts", "Emergency contacts"],
      ["bug-in-out", "Bug in or out"],
      ["documents-finance", "Documents and money"],
    ],
  },
  {
    slug: "bug-in-out",
    title: "Bug In or Bug Out",
    shortTitle: "Bug in or out",
    category: "planning",
    summary:
      "A decision framework for sheltering in place versus evacuating — with triggers, thresholds and a checklist for each.",
    readTime: "7 min read",
    intro: `<p>Most emergencies are survived by <strong>sheltering in place</strong>. Evacuation is right when the danger is worse than the road. Decide in advance, using triggers rather than panic.</p>`,
    checklist: [
      "Home has 14 days of supplies",
      "Two evacuation destinations identified",
      "Transport and fuel ready",
      "Triggers written down",
      "Practice evacuation completed",
    ],
    sections: [
      {
        id: "factors",
        title: "The decision factors",
        html: `${table(
          "Weigh these factors, not just fear.",
          ["Factor", "Bug in", "Bug out"],
          [
            ["Threat", "Localised, short, your home is safe", "Spreading, long, home at risk"],
            ["Supplies", "14+ days of water, food, power", "Limited or contaminated"],
            ["Mobility", "Vulnerable people can shelter safely", "Need medical care or access"],
            ["Routes", "Roads clear or no need to travel", "Evacuation advised and routes open"],
            ["Community", "Neighbours can support each other", "Isolation and no help nearby"],
          ]
        )}`,
      },
      {
        id: "triggers",
        title: "Evacuation triggers",
        html: `<ul>
<li>Official mandatory evacuation order.</li>
<li>Red IMD warning for cyclone, flood or severe storm in your area.</li>
<li>Water entering your home or rising fast.</li>
<li>Fire, gas leak, or structural damage.</li>
<li>No safe water for more than 24 hours and no way to treat it.</li>
<li>Medical emergency needing hospital care.</li>
<li>Civil unrest moving toward your area.</li>
</ul>
${callout(
  "warning",
  "Leave early",
  "<p>Leaving before the rush is safer than leaving at the peak. If you have vulnerable people or pets, use a lower threshold.</p>"
)}`,
      },
      {
        id: "bugin",
        title: "Shelter-in-place checklist",
        html: `<ul>
<li>Close and lock doors and windows; seal gaps if airborne hazard.</li>
<li>Fill water containers and bathtub (for washing).</li>
<li>Charge devices and power banks; set up radio.</li>
<li>Check food, medications and first-aid kit.</li>
<li>Identify the safest room and an escape route.</li>
<li>Check on neighbours; share information.</li>
<li>Keep a written log of events and decisions.</li>
</ul>`,
      },
      {
        id: "bugout",
        title: "Bug-out checklist",
        html: `<ul>
<li>Grab go-bags, documents folder, medications and cash.</li>
<li>Wear sturdy shoes and layers; carry water.</li>
<li>Tell your out-of-area contact your route and destination.</li>
<li>Lock the house; shut off utilities if instructed.</li>
<li>Take the planned route; avoid the obvious one if congested.</li>
<li>Keep the radio on for updates; avoid flood water and downed lines.</li>
<li>Check in on arrival.</li>
</ul>
<p>Related: <a href="family-plan.html">Family plan</a> · <a href="transport.html">Transport</a> · <a href="scenarios.html">Scenarios</a></p>`,
      },
    ],
    related: [
      ["family-plan", "Family plan"],
      ["transport", "Transport"],
      ["scenarios", "Scenarios"],
    ],
  },
  {
    slug: "documents-finance",
    title: "Documents, Money & Records",
    shortTitle: "Documents & money",
    category: "planning",
    summary:
      "Protect identity documents, keep cash and backups, and prepare for financial disruption.",
    readTime: "6 min read",
    intro: `<p>After a disaster, paperwork determines whether you can access relief, healthcare, banking and insurance. Keep originals safe and <strong>copies accessible</strong>.</p>`,
    checklist: [
      "Originals in a waterproof, fire-resistant folder",
      "Digital copies on encrypted USB and cloud",
      "Cash in small notes",
      "Emergency fund",
      "Insurance and bank contacts written down",
    ],
    sections: [
      {
        id: "docs",
        title: "Essential documents",
        html: `<ul>
<li>Identity: Aadhaar, PAN, passport, voter ID, driving licence.</li>
<li>Property: deeds, rent agreement, utility bills.</li>
<li>Financial: bank details, insurance policies, investment records.</li>
<li>Medical: prescriptions, vaccination records, medical history.</li>
<li>Family: birth and marriage certificates, school records.</li>
<li>Vehicle: RC, insurance, licence.</li>
</ul>
<p>Scan everything, store encrypted copies in two places, and keep a printed set with a trusted relative.</p>`,
      },
      {
        id: "cash",
        title: "Cash and banking",
        html: `<ul>
<li>Keep ₹5,000–₹20,000 in small notes at home and in go-bags.</li>
<li>ATMs and card networks fail in outages; cash works.</li>
<li>Keep a small emergency fund in a separate account.</li>
<li>Photograph bank cards and keep the numbers somewhere safe — not in the same wallet.</li>
<li>Be alert to fraud and price gouging after disasters.</li>
</ul>`,
      },
      {
        id: "insurance",
        title: "Insurance and relief",
        html: `<ul>
<li>Review home, health and vehicle insurance before the monsoon season.</li>
<li>Photograph your home and belongings for claims.</li>
<li>Know how to file a claim and keep policy numbers offline.</li>
<li>Register for government relief through official channels; beware of middlemen demanding money.</li>
<li>Keep receipts for emergency expenses.</li>
</ul>`,
      },
      {
        id: "identity",
        title: "If documents are lost",
        html: `<ul>
<li>File a police report (FIR) for lost or stolen documents.</li>
<li>Use digital copies to apply for duplicates.</li>
<li>Aadhaar and PAN can be re-downloaded or reissued through official portals.</li>
<li>Keep a list of offices and helplines for replacements.</li>
<li>After recovery, replace documents stored in damaged locations.</li>
</ul>
<p>Related: <a href="family-plan.html">Family plan</a> · <a href="offline-library.html">Offline library</a> · <a href="opsec-privacy.html">Opsec</a></p>`,
      },
    ],
    related: [
      ["family-plan", "Family plan"],
      ["offline-library", "Offline library"],
      ["opsec-privacy", "Opsec and privacy"],
    ],
  },
  {
    slug: "community",
    title: "Community & Mutual Aid",
    shortTitle: "Community",
    category: "planning",
    summary:
      "Build a neighbourhood network before a crisis: skills mapping, shared resources, communication, leadership and conflict resolution.",
    readTime: "7 min read",
    intro: `<p>No household survives alone. A street or apartment block that knows each other, shares skills and communicates calmly is dramatically more resilient than a street of well-stocked strangers.</p>`,
    checklist: [
      "Know ten neighbours by name",
      "A simple contact group",
      "A skills and resources list",
      "Shared water and tools plan",
      "Agreed check-in times",
    ],
    sections: [
      {
        id: "network",
        title: "Starting a network",
        html: `<ul>
<li>Start small: immediate neighbours, one conversation at a time.</li>
<li>Create a messaging group for routine notices and emergencies.</li>
<li>Hold one short meeting: who has medical training, tools, vehicles, generators, spare rooms.</li>
<li>Agree on a check-in time and a simple "all okay" signal.</li>
<li>Keep it practical and non-political; avoid doomsday talk that scares people away.</li>
</ul>`,
      },
      {
        id: "skills",
        title: "Skills and resources mapping",
        html: `${table(
          "A simple neighbourhood resource list. Keep it private.",
          ["Skill / resource", "Who", "Contact"],
          [
            ["First aid / nursing", "", ""],
            ["Electrician / plumber", "", ""],
            ["Vehicle / driver", "", ""],
            ["Generator / solar", "", ""],
            ["Water storage / pump", "", ""],
            ["Elderly or disabled neighbours", "", ""],
            ["Pets needing help", "", ""],
          ]
        )}`,
      },
      {
        id: "leadership",
        title: "Leadership and decisions",
        html: `<ul>
<li>Choose a coordinator, not a boss; rotate roles so no one is indispensable.</li>
<li>Make decisions transparently and record them.</li>
<li>Use simple majority for routine choices; protect minority needs.</li>
<li>Assign tasks by ability, not status.</li>
<li>Plan for disagreement: set a rule that safety decisions are made by the person with relevant expertise.</li>
</ul>`,
      },
      {
        id: "conflict",
        title: "Conflict and fairness",
        html: `<ul>
<li>Share resources by agreed rules, not by who shouts loudest.</li>
<li>Prioritise vulnerable people and medical needs.</li>
<li>Address rumours quickly with verified information.</li>
<li>De-escalate disputes; separate people and revisit later.</li>
<li>Never allow vigilante justice or scapegoating.</li>
</ul>
${callout(
  "note",
  "Barter and trade",
  "In prolonged disruption, skills and goods become currency. Keep small items for trade — batteries, soap, matches, salt, tools — but never trade critical supplies you need to survive."
)}
<p>Related: <a href="security.html">Security</a> · <a href="mental-health.html">Mental health</a> · <a href="family-plan.html">Family plan</a></p>`,
      },
    ],
    related: [
      ["security", "Security"],
      ["mental-health", "Mental health"],
      ["family-plan", "Family plan"],
    ],
  },
  {
    slug: "offline-library",
    title: "Build an Offline Library",
    shortTitle: "Offline library",
    category: "planning",
    summary:
      "Keep the knowledge you need when the internet is down: printed binders, offline apps, USB archives and power-efficient devices.",
    readTime: "6 min read",
    intro: `<p>The internet is a single point of failure. A small, well-chosen offline library — printed and digital — keeps critical knowledge available when networks fail.</p>`,
    checklist: [
      "Printed core manual in a waterproof folder",
      "Offline maps downloaded",
      "Offline copies of this guide",
      "E-reader or tablet charged and loaded",
      "Solar or power bank for devices",
      "USB backup stored separately",
    ],
    sections: [
      {
        id: "what",
        title: "What to keep",
        html: `<ul>
<li>This guide, printed or saved for offline reading.</li>
<li>Offline maps of your city and region.</li>
<li>First-aid and medical reference cards.</li>
<li>Local emergency numbers and radio frequencies.</li>
<li>Documents and family plan.</li>
<li>Practical skills: knots, repairs, food preservation, gardening.</li>
<li>A few books for morale.</li>
</ul>`,
      },
      {
        id: "print",
        title: "Printed library",
        html: `<ul>
<li>Use a ring binder with plastic sleeves; it survives damp better than loose paper.</li>
<li>Print the most critical pages: first aid, water treatment, contacts, family plan, antenna plans.</li>
<li>Keep one copy at home and one in the go-bag.</li>
<li>Store in a sealed plastic bag with a desiccant.</li>
<li>Update pages as the site updates.</li>
</ul>`,
      },
      {
        id: "digital",
        title: "Digital library",
        html: `<ul>
<li>Save pages as PDF or use the site's offline PWA install.</li>
<li>Download offline maps for your whole region, not just your city.</li>
<li>Keep an encrypted USB drive with documents, maps and references.</li>
<li>Store a copy with a trusted relative outside your area.</li>
<li>Test your offline library before you need it — put the phone in airplane mode and find the guide.</li>
</ul>`,
      },
      {
        id: "power",
        title: "Powering your library",
        html: `<ul>
<li>An e-ink reader lasts weeks on a charge and is ideal for reading.</li>
<li>A tablet with a large battery and a solar panel covers maps and PDFs.</li>
<li>Keep cables with each device and a power bank dedicated to the library.</li>
<li>Download content while you have connectivity; do not rely on streaming.</li>
</ul>
<p>Related: <a href="power.html">Power</a> · <a href="documents-finance.html">Documents</a> · <a href="tools.html">Printable tools</a></p>`,
      },
    ],
    related: [
      ["power", "Power"],
      ["documents-finance", "Documents and money"],
      ["tools", "Tools"],
    ],
  },
];

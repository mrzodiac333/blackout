const { callout, table } = require("../render");

module.exports = [
  {
    slug: "emergency-contacts",
    title: "Emergency Contacts & Alerts",
    shortTitle: "Emergency Contacts",
    category: "core",
    navActive: "emergency-contacts.html",
    summary:
      "India emergency numbers, disaster helplines, radio and alert sources, and a printable family contact card.",
    readTime: "4 min read",
    intro: `<p>Save these numbers in every phone and write them on paper. In a wide-area outage, mobile data may fail before voice calls do — and both may fail before FM radio does. Program the numbers now, while you have connectivity.</p>
${callout(
  "danger",
  "Life-threatening emergency",
  "<p><strong>Call 112</strong> — the national emergency response number for police, fire and ambulance. It works from mobile phones and is toll-free.</p>"
)}`,
    sections: [
      {
        id: "numbers",
        title: "National numbers",
        html: table(
          "India emergency and disaster numbers. Verify locally — services and numbers change.",
          ["Service", "Number", "Notes"],
          [
            ["Emergency response (police, fire, ambulance)", "<strong>112</strong>", "Single emergency number; works on mobile"],
            ["Ambulance", "108", "Many states; 102 in some areas"],
            ["Police", "100", "Also reachable via 112"],
            ["Fire", "101", "Also reachable via 112"],
            ["Disaster management (NDMA control room)", "1078", "National disaster helpline"],
            ["Women's helpline", "181", "24×7 support"],
            ["Child helpline", "1098", "24×7"],
            ["Mental health helpline (Tele-MANAS)", "14416", "Government mental health support"],
            ["Railway helpline", "139", "Train emergencies and enquiries"],
            ["National highway emergency", "1033", "Road accidents on highways"],
          ]
        ),
      },
      {
        id: "alerts",
        title: "Official alerts and information",
        html: `<ul>
<li><strong>NDMA / Sachet</strong> — the National Disaster Management Authority runs the Sachet alert system; alerts also arrive as government SMS broadcasts. Do not disable emergency alerts on your phone.</li>
<li><strong>India Meteorological Department (IMD)</strong> — cyclone, heatwave, heavy-rain and thunderstorm warnings at <a href="https://mausam.imd.gov.in" rel="noopener">mausam.imd.gov.in</a>. Colour codes: green (no action), yellow (be aware), orange (be prepared), red (take action).</li>
<li><strong>INCOIS</strong> — tsunami bulletins for the Indian coast at <a href="https://tsunami.incois.gov.in" rel="noopener">tsunami.incois.gov.in</a>.</li>
<li><strong>Central Water Commission</strong> — flood forecasts at <a href="https://ffs.india-water.gov.in" rel="noopener">ffs.india-water.gov.in</a>.</li>
<li><strong>All India Radio (AIR)</strong> — the most resilient public information channel. Learn your local AIR frequencies; a battery or hand-crank FM radio is a core preparedness item.</li>
<li><strong>District Collector / Municipal Corporation</strong> — local evacuation orders and relief camp locations. Follow them over anything in this guide.</li>
</ul>`,
      },
      {
        id: "card",
        title: "Printable family contact card",
        html: `<p>Fill one card per household member, laminate or tape it inside a notebook, and keep a copy in every go-bag.</p>
${callout(
  "note",
  "Print tip",
  "Use your browser's Print command on this page. The card below prints without site navigation.",
  ""
)}
<div class="print-card" style="border:2px solid #ff6b00;padding:1.2rem;margin:1.2rem 0;max-width:38rem">
  <p style="margin:0 0 .6rem;letter-spacing:.18em;text-transform:uppercase;font-weight:700">Family Emergency Card</p>
  <table style="width:100%;font-size:.85rem">
    <tbody>
      <tr><td style="width:38%">Name</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Blood group</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Medical conditions</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Allergies</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Medications</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Emergency contact 1</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Emergency contact 2</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Out-of-area contact</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Meeting point A</td><td><span class="fill-line"></span></td></tr>
      <tr><td>Meeting point B</td><td><span class="fill-line"></span></td></tr>
    </tbody>
  </table>
</div>
<p class="text-muted" style="font-size:.8rem">An out-of-area contact is someone outside your city. During local outages, long-distance calls often work when local networks are congested.</p>`,
      },
      {
        id: "prepare",
        title: "Before the network fails",
        html: `<ul>
<li>Save numbers as contacts, but also write them on paper — phones lock, die and get lost.</li>
<li>Keep a power bank charged and a charging cable in your bag.</li>
<li>Download offline maps for your city and your evacuation route.</li>
<li>Agree on an out-of-area contact and a physical meeting point.</li>
<li>Keep ₹2,000–₹5,000 in small cash notes; ATMs and card networks fail in outages.</li>
<li>Keep a battery or hand-crank FM radio and spare cells.</li>
</ul>
<p>Related: <a href="family-plan.html">Family emergency plan</a> · <a href="communication.html">Communication & radio</a> · <a href="offline-library.html">Offline library</a></p>`,
      },
    ],
    related: [
      ["family-plan", "Family emergency plan"],
      ["communication", "Communication & radio"],
      ["tools", "Printable tools"],
    ],
  },
  {
    slug: "glossary",
    title: "Glossary",
    shortTitle: "Glossary",
    category: "core",
    summary:
      "Plain-language definitions of survival, medical, radio and disaster terms used across this guide.",
    readTime: "8 min read",
    intro: `<p>Terms are grouped by topic. Use your browser's find function (Ctrl+F) to jump to a word.</p>`,
    sections: [
      {
        id: "water-food",
        title: "Water, food and shelter",
        html: `<dl>
<dt><strong>Potable</strong></dt><dd>Water safe to drink. Clear water is not automatically potable.</dd>
<dt><strong>Boil-water advisory</strong></dt><dd>Official notice that tap water must be boiled before drinking, brushing teeth or washing food.</dd>
<dt><strong>Rolling boil</strong></dt><dd>Water heated until it boils vigorously; the standard disinfection method. Bring to a rolling boil for at least 1 minute at low altitude.</dd>
<dt><strong>SODIS</strong></dt><dd>Solar disinfection: clear plastic bottles filled with filtered water left in strong sun for at least 6 hours.</dd>
<dt><strong>Greywater</strong></dt><dd>Wastewater from sinks, laundry and bathing. Not safe to drink, but reusable for flushing or irrigation after treatment.</dd>
<dt><strong>Cache</strong></dt><dd>A hidden or stored supply of food, water or gear, kept away from your main home.</dd>
<dt><strong>Bug-in / bug-out</strong></dt><dd>Sheltering in place versus evacuating to another location.</dd>
<dt><strong>Go-bag</strong></dt><dd>A packed bag ready to leave with on short notice.</dd>
</dl>`,
      },
      {
        id: "medical",
        title: "Medical",
        html: `<dl>
<dt><strong>Triage</strong></dt><dd>Sorting casualties by urgency when resources are limited.</dd>
<dt><strong>Hemostatic dressing</strong></dt><dd>A dressing containing an agent that promotes clotting in severe bleeding.</dd>
<dt><strong>Tourniquet</strong></dt><dd>A device that stops arterial bleeding on a limb by compression. Training required.</dd>
<dt><strong>Shock</strong></dt><dd>A life-threatening drop in effective blood flow. Signs: pale/cold skin, rapid weak pulse, confusion, thirst.</dd>
<dt><strong>Sepsis</strong></dt><dd>A whole-body response to infection; a medical emergency.</dd>
<dt><strong>Debridement</strong></dt><dd>Professional removal of dead or contaminated tissue from a wound. Do not attempt at home.</dd>
<dt><strong>Oral rehydration salts (ORS)</strong></dt><dd>A measured glucose-salt mix used to treat dehydration from diarrhoea.</dd>
</dl>`,
      },
      {
        id: "radio",
        title: "Radio and antennas",
        html: `<dl>
<dt><strong>WPC</strong></dt><dd>Wireless Planning and Coordination Wing of India's Department of Telecommunications; issues amateur licences and regulates spectrum.</dd>
<dt><strong>ASOC</strong></dt><dd>Amateur Station Operator's Certificate examination.</dd>
<dt><strong>SWR</strong></dt><dd>Standing Wave Ratio: how well an antenna matches the transmitter. Lower is better; below 1.5:1 is good.</dd>
<dt><strong>Dipole</strong></dt><dd>A centre-fed half-wave antenna; a reliable baseline wire antenna.</dd>
<dt><strong>Balun</strong></dt><dd>A device matching a balanced antenna to unbalanced coax.</dd>
<dt><strong>Simplex</strong></dt><dd>Direct radio-to-radio communication without a repeater.</dd>
<dt><strong>Repeater</strong></dt><dd>A station that receives and retransmits to extend range.</dd>
<dt><strong>ETA</strong></dt><dd>Equipment Type Approval from WPC for legal sale and use of radio equipment in India.</dd>
<dt><strong>FRS/GMRS/MURS</strong></dt><dd>US licence-free or licensed services. Not legal to use in India.</dd>
<dt><strong>PMR446</strong></dt><dd>European licence-free 446 MHz service. In India, only WPC-approved low-power 446 MHz devices are permitted.</dd>
</dl>`,
      },
      {
        id: "disaster",
        title: "Disaster and planning",
        html: `<dl>
<dt><strong>NDMA</strong></dt><dd>National Disaster Management Authority, India.</dd>
<dt><strong>NDRF</strong></dt><dd>National Disaster Response Force; central specialised rescue teams.</dd>
<dt><strong>IMD</strong></dt><dd>India Meteorological Department.</dd>
<dt><strong>Storm surge</strong></dt><dd>Rise in sea level driven by a cyclone; the leading cause of cyclone deaths.</dd>
<dt><strong>Epicentre</strong></dt><dd>Point on the surface directly above an earthquake's origin.</dd>
<dt><strong>Mains</strong></dt><dd>The public electricity grid supply.</dd>
<dt><strong>EMP</strong></dt><dd>Electromagnetic pulse; can damage electronics over a wide area.</dd>
<dt><strong>Opsec</strong></dt><dd>Operational security: limiting what others can learn about your supplies, plans and movements.</dd>
</dl>`,
      },
    ],
    related: [
      ["guides", "All guides"],
      ["faq", "FAQ"],
    ],
  },
  {
    slug: "faq",
    title: "Frequently Asked Questions",
    shortTitle: "FAQ",
    category: "core",
    summary:
      "Honest answers about what this guide can and cannot do, how to start preparing, and the limits of DIY survival advice.",
    readTime: "6 min read",
    intro: `<p>These are the questions people ask first. If you only read one page before starting, read this and the <a href="family-plan.html">family plan</a>.</p>`,
    sections: [
      {
        id: "start",
        title: "Where do I start?",
        html: `<p>In this order: <strong>water, then communications, then food, then power.</strong> A household with 72 hours of water, a charged radio and a family meeting point is better prepared than one with a year of freeze-dried food and no plan. Work through the <a href="guides.html">guides directory</a> from the Start Here category.</p>`,
      },
      {
        id: "how-long",
        title: "How much should I store?",
        html: `<p>The Indian government and international agencies recommend at least <strong>72 hours</strong> of self-sufficiency for households, and <strong>two weeks</strong> is a sensible personal target. Cyclones, floods and landslides can isolate communities for longer. Use the <a href="tools.html">calculators</a> to size water and food storage for your household.</p>`,
      },
      {
        id: "license",
        title: "Do I need a licence to use a walkie-talkie in India?",
        html: `<p>It depends on the device. Only WPC-approved, low-power 446 MHz units with Equipment Type Approval are licence-free. Anything that transmits on amateur, business or public-safety bands requires a licence. Imported FRS/GMRS radios sold online are usually <strong>not legal</strong> to transmit with in India. See <a href="communication.html">Communication & radio</a>.</p>`,
      },
      {
        id: "medical",
        title: "Can this site teach me to treat wounds or perform procedures?",
        html: `<p>No. It teaches recognition, first aid and when to evacuate. It does not teach surgery, prescribing, dosing, or improvised procedures. Take a certified first-aid and CPR course — the <a href="medical.html">medical hub</a> lists what to learn and how to find training.</p>`,
      },
      {
        id: "weapons",
        title: "Do you cover weapons?",
        html: `<p>No weapon-making, explosives or illegal-device instructions. Security content focuses on awareness, hardening your home, alarms, community coordination, de-escalation and legal self-defence options. See <a href="security.html">Security</a>.</p>`,
      },
      {
        id: "real",
        title: "Is an apocalypse realistic?",
        html: `<p>Total societal collapse is unlikely. Localised disasters are not: floods, cyclones, earthquakes, fires, grid failures and disease outbreaks happen every year in India. Preparing for a bad week also prepares you for a very bad month. Treat worst-case planning as insurance, not prophecy.</p>`,
      },
      {
        id: "help",
        title: "What if I have no money to prepare?",
        html: `<p>Start with free actions: learn your evacuation routes, agree a meeting point, learn to purify water by boiling, save documents in a waterproof bag, charge a power bank, and learn basic first aid. Store a little extra of what you already eat. Preparedness is a habit more than a shopping list.</p>`,
      },
    ],
    related: [
      ["family-plan", "Family emergency plan"],
      ["water", "Water"],
      ["sources", "Sources"],
    ],
  },
  {
    slug: "sources",
    title: "Sources & Further Reading",
    shortTitle: "Sources",
    category: "core",
    summary:
      "The standards and agencies behind this guide, plus suggested training and reading.",
    readTime: "4 min read",
    intro: `<p>Content is aligned with established preparedness and public-health guidance. Where Indian rules apply, WPC and NDMA material takes priority. Rules and contact numbers change; verify before relying on them.</p>`,
    sections: [
      {
        id: "standards",
        title: "Primary standards and agencies",
        html: `<ul>
<li><strong>NDMA (India)</strong> — National Disaster Management Authority guidelines on floods, cyclones, earthquakes, heatwaves and urban flooding. <a href="https://ndma.gov.in" rel="noopener">ndma.gov.in</a></li>
<li><strong>NDRF</strong> — National Disaster Response Force operational guidance.</li>
<li><strong>IMD</strong> — weather warnings and colour-coded alerts. <a href="https://mausam.imd.gov.in" rel="noopener">mausam.imd.gov.in</a></li>
<li><strong>WPC / DoT</strong> — Indian amateur radio licensing and spectrum rules. <a href="https://www.dot.gov.in" rel="noopener">dot.gov.in</a></li>
<li><strong>WHO</strong> — water safety, sanitation and outbreak guidance.</li>
<li><strong>IFRC / Indian Red Cross Society</strong> — first aid, CPR and household preparedness.</li>
<li><strong>FEMA / Ready.gov</strong> — household emergency planning frameworks.</li>
<li><strong>CDC</strong> — infection control, water treatment and emergency sanitation.</li>
<li><strong>ARRL</strong> — antenna fundamentals and amateur operating practice.</li>
<li><strong>INCOIS</strong> — tsunami warning bulletins for India.</li>
</ul>`,
      },
      {
        id: "training",
        title: "Training worth taking",
        html: `<ul>
<li>Red Cross or St John Ambulance basic first aid and CPR/AED.</li>
<li>NDMA/NDRF community disaster response programmes.</li>
<li>Amateur radio ASOC (Restricted or General Grade) through WPC-recognised clubs.</li>
<li>Fire safety and extinguisher training.</li>
<li>Basic swimming and water safety.</li>
<li>Food preservation and safe canning workshops.</li>
</ul>`,
      },
      {
        id: "notes",
        title: "Accuracy and corrections",
        html: `<p>This guide is reviewed periodically and every page carries a review date. If you find an error — especially a phone number, a legal rule or a medical instruction — treat the official source as authoritative and, if you can, report the correction. The site is a static project; see the <a href="changelog.html">changelog</a> for the review history.</p>
${callout(
  "warning",
  "No warranty",
  "<p>This material is provided for general education. It is not medical, legal or engineering advice. Use at your own risk and follow local authorities.</p>"
)}`,
      },
    ],
    related: [
      ["glossary", "Glossary"],
      ["faq", "FAQ"],
    ],
  },
  {
    slug: "changelog",
    title: "Changelog",
    shortTitle: "Changelog",
    category: "core",
    summary: "Site history and content review dates.",
    readTime: "2 min read",
    intro: `<p>All content reviewed against current guidance where noted. Dates are review dates, not publication dates.</p>`,
    sections: [
      {
        id: "v1",
        title: "v1.0 — initial release",
        html: `<p><strong>2026-10-19</strong></p>
<ul>
<li>Launched core survival, medical, communication, planning, scenario and India hazard guides.</li>
<li>Added antenna build plans, calculators, printable cards and offline PWA support.</li>
<li>Self-hosted Courier Prime and Special Elite typefaces; black-and-orange field-manual theme.</li>
</ul>`,
      },
    ],
    related: [
      ["sources", "Sources"],
      ["guides", "All guides"],
    ],
  },
];

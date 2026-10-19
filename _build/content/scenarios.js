const { callout, table } = require("../render");

module.exports = [
  {
    slug: "grid-collapse",
    title: "Scenario: Grid Collapse",
    shortTitle: "Grid collapse",
    category: "scenarios",
    summary:
      "A prolonged nationwide or regional power failure: what fails first, how to stay safe, and a 72-hour action plan.",
    readTime: "8 min read",
    intro: `<p>India's grid is large but not invulnerable. A long outage takes out water pumping, fuel pumps, telecoms, refrigeration and traffic lights within hours. Plan for <strong>two weeks</strong> without mains power.</p>`,
    checklist: [
      "Water stored and treatment ready",
      "Power banks and solar charging",
      "Cash in small notes",
      "Battery radio",
      "Medications and cool storage",
      "Plan for heat or cold without AC/heating",
    ],
    sections: [
      {
        id: "first",
        title: "What fails first",
        html: `<ol>
<li>Traffic lights and street lighting.</li>
<li>Water pumping and pressure.</li>
<li>ATMs, card payments and mobile data.</li>
<li>Fuel pumps and public transport.</li>
<li>Refrigeration and food supply.</li>
<li>Hospitals, unless on backup power.</li>
</ol>
${callout(
  "warning",
  "Water is the first priority",
  "<p>Fill containers and the bathtub as soon as the power fails or an outage is announced. Water pressure may last only hours.</p>"
)}`,
      },
      {
        id: "action",
        title: "72-hour action plan",
        html: `<h3>Hour 0–1</h3>
<ul>
<li>Fill all containers with water; treat before drinking.</li>
<li>Charge phones and power banks while the network still works.</li>
<li>Turn off appliances to avoid a surge when power returns.</li>
<li>Check on vulnerable neighbours.</li>
</ul>
<h3>Hour 1–6</h3>
<ul>
<li>Move food from the fridge to a cooler if you can; keep the fridge closed.</li>
<li>Set up lighting and radio; conserve battery.</li>
<li>Withdraw cash if ATMs work.</li>
</ul>
<h3>Day 1–3</h3>
<ul>
<li>Ration water and food; maintain hygiene.</li>
<li>Keep one room as a living space to conserve heat or cooling.</li>
<li>Listen to official updates; avoid rumours.</li>
<li>Use generators only outdoors, away from windows.</li>
</ul>`,
      },
      {
        id: "risks",
        title: "Specific risks",
        html: `<ul>
<li><strong>Carbon monoxide:</strong> generators and charcoal indoors kill. Ventilate and use CO alarms.</li>
<li><strong>Heat:</strong> without fans or AC, watch for heat illness; use shade and wet cloths.</li>
<li><strong>Food safety:</strong> discard refrigerated food after 4 hours without power if it is above 4 °C; when in doubt, throw it out.</li>
<li><strong>Water contamination:</strong> assume tap water is unsafe during repairs.</li>
<li><strong>Crime:</strong> dark streets increase opportunism; coordinate with neighbours.</li>
<li><strong>Medication:</strong> insulin and some drugs need cold storage; use a cooler and monitor temperature.</li>
</ul>`,
      },
      {
        id: "recover",
        title: "When power returns",
        html: `<ul>
<li>Wait for official confirmation before using the grid.</li>
<li>Turn on appliances gradually to avoid a surge.</li>
<li>Check food and water; discard anything suspect.</li>
<li>Recharge everything and restock what you used.</li>
<li>Review what worked and fix gaps.</li>
</ul>
<p>Related: <a href="power.html">Power</a> · <a href="water.html">Water</a> · <a href="food.html">Food</a></p>`,
      },
    ],
    related: [
      ["power", "Power"],
      ["water", "Water"],
      ["food", "Food"],
    ],
  },
  {
    slug: "pandemic",
    title: "Scenario: Pandemic",
    shortTitle: "Pandemic",
    category: "scenarios",
    summary:
      "Reduce exposure, care for the sick at home, and keep a household running through an infectious outbreak.",
    readTime: "8 min read",
    intro: `<p>Pandemics are slow emergencies. The goal is to <strong>reduce contacts, protect the vulnerable and keep essential care going</strong> without overwhelming hospitals.</p>`,
    checklist: [
      "Masks, gloves, soap, sanitiser",
      "Two weeks of food and medicine",
      "A separate room and bathroom if possible",
      "A care plan for vulnerable members",
      "Vaccination records",
    ],
    sections: [
      {
        id: "prevent",
        title: "Reducing exposure",
        html: `<ul>
<li>Limit contacts; work from home if possible.</li>
<li>Wear a well-fitted N95/FFP2 mask in crowded indoor spaces.</li>
<li>Wash hands frequently; avoid touching your face.</li>
<li>Ventilate rooms; meet outdoors when possible.</li>
<li>Isolate early if symptomatic; test if available.</li>
<li>Protect high-risk household members by separating sleeping and eating spaces.</li>
</ul>`,
      },
      {
        id: "care",
        title: "Caring for someone at home",
        html: `<ul>
<li>Designate one caregiver and one room; keep the door closed.</li>
<li>The caregiver wears a mask and gloves; washes hands after contact.</li>
<li>Use separate utensils, towels and bedding; wash at high temperature.</li>
<li>Monitor temperature, breathing and hydration; keep a written log.</li>
<li>Give fluids and rest; use paracetamol per label for fever.</li>
<li>Clean high-touch surfaces daily with detergent or diluted bleach.</li>
<li>Dispose of waste in a tied bag, then another bag.</li>
</ul>
${callout(
  "danger",
  "Seek urgent care",
  "<p>Difficulty breathing, chest pain, confusion, bluish lips, persistent high fever, or inability to keep fluids down. Call 112 or the local health helpline.</p>"
)}`,
      },
      {
        id: "supply",
        title: "Supplies and logistics",
        html: `<ul>
<li>Two weeks of food, water and medicine minimum; four weeks is better.</li>
<li>Thermometer, pulse oximeter if available, ORS, paracetamol, masks, gloves.</li>
<li>Plan for medicine refills and teleconsultations.</li>
<li>Arrange contactless delivery or a neighbour to drop supplies.</li>
<li>Keep cash and a list of emergency contacts.</li>
</ul>`,
      },
      {
        id: "after",
        title: "After the wave",
        html: `<ul>
<li>Rest and recover fully; watch for lingering symptoms.</li>
<li>Replace used supplies and medicines.</li>
<li>Check on neighbours and vulnerable people.</li>
<li>Review what you would do differently.</li>
</ul>
<p>Related: <a href="medical.html">Medical hub</a> · <a href="hygiene.html">Hygiene</a> · <a href="sanitation.html">Sanitation</a></p>`,
      },
    ],
    related: [
      ["medical", "Medical hub"],
      ["hygiene", "Hygiene"],
      ["sanitation", "Sanitation"],
    ],
  },
  {
    slug: "flood",
    title: "Scenario: Flood",
    shortTitle: "Flood",
    category: "scenarios",
    summary:
      "Monsoon and flash floods: evacuate early, avoid moving water, and stay safe during and after inundation.",
    readTime: "8 min read",
    intro: `<p>Floods are India's most common disaster. Most deaths are from <strong>driving or walking through moving water</strong> and from electrocution. Water is stronger and dirtier than it looks.</p>`,
    checklist: [
      "Know your flood risk and nearest high ground",
      "Keep documents and go-bags in waterproof bags",
      "Move valuables and electricals above flood level",
      "Never enter moving water",
      "Plan for pets and livestock",
    ],
    sections: [
      {
        id: "before",
        title: "Before the water arrives",
        html: `<ul>
<li>Monitor IMD and CWC forecasts; heed orange and red warnings.</li>
<li>Move to higher floors early; do not wait for the water to reach the stairs.</li>
<li>Raise furniture, electricals and documents; shut off power at the mains if safe.</li>
<li>Fill containers with clean water before contamination.</li>
<li>Prepare a go-bag and move vehicles to high ground.</li>
<li>Turn off gas and electricity if instructed.</li>
</ul>`,
      },
      {
        id: "during",
        title: "During a flood",
        html: `${callout(
          "danger",
          "Moving water",
          "<p>Never walk, swim or drive through flood water. 15 cm of moving water can knock you down; 30 cm can move a car. Turn around, don't drown.</p>"
        )}
<ul>
<li>Move to the highest safe floor; avoid the attic unless you can reach the roof.</li>
<li>Do not touch electrical equipment or wiring while wet.</li>
<li>Avoid bridges, underpasses and riverbanks.</li>
<li>Drink only treated water; flood water contaminates everything it touches.</li>
<li>Watch for snakes and insects displaced by water.</li>
<li>Signal for help with a torch or bright cloth if trapped.</li>
</ul>`,
      },
      {
        id: "after",
        title: "After the flood",
        html: `<ul>
<li>Wait for official clearance before returning.</li>
<li>Do not enter a building with structural damage; check for gas leaks and downed lines.</li>
<li>Wear boots and gloves; wash hands after contact with flood water.</li>
<li>Discard food exposed to flood water, including sealed packages.</li>
<li>Disinfect surfaces and boil all drinking water.</li>
<li>Photograph damage for insurance before cleaning.</li>
<li>Watch for waterborne disease and seek care for fever or diarrhoea.</li>
</ul>`,
      },
      {
        id: "india",
        title: "India-specific notes",
        html: `<ul>
<li>Monsoon flooding peaks June–September; check local flood forecasts.</li>
<li>Urban flooding is common in Mumbai, Chennai, Bengaluru and Kolkata; underpasses and basements fill fast.</li>
<li>Dam releases can cause sudden downstream flooding; follow official warnings.</li>
<li>NDRF teams are deployed by state authorities; follow district collector instructions.</li>
<li>Keep important documents in a waterproof bag; floods destroy paper quickly.</li>
</ul>
<p>Related: <a href="water.html">Water</a> · <a href="sanitation.html">Sanitation</a> · <a href="transport.html">Transport</a></p>`,
      },
    ],
    related: [
      ["water", "Water"],
      ["sanitation", "Sanitation"],
      ["transport", "Transport"],
    ],
  },
  {
    slug: "earthquake",
    title: "Scenario: Earthquake",
    shortTitle: "Earthquake",
    category: "scenarios",
    summary:
      "Drop, cover and hold on — then deal with aftershocks, damaged buildings and trapped victims.",
    readTime: "7 min read",
    intro: `<p>Earthquakes give little or no warning. The first seconds are about <strong>not being hit by falling objects</strong>. After shaking stops, the risks are aftershocks, gas leaks, fires and structural collapse.</p>`,
    checklist: [
      "Identify safe spots in each room",
      "Secure tall furniture and water heaters",
      "Store a torch and shoes by the bed",
      "Know how to shut off gas and power",
      "A family meeting point outside",
    ],
    sections: [
      {
        id: "during",
        title: "During shaking",
        html: `<ol>
<li><strong>Drop</strong> to hands and knees.</li>
<li><strong>Cover</strong> your head and neck under a sturdy table; if none, cover with your arms near an interior wall.</li>
<li><strong>Hold on</strong> until shaking stops.</li>
<li>If in bed, stay there and cover your head with a pillow.</li>
<li>If outdoors, move away from buildings, trees and power lines.</li>
<li>If driving, pull over away from overpasses and stay in the vehicle.</li>
</ol>
${callout(
  "danger",
  "Do not",
  "<p>Do not run outside during shaking, use lifts, or stand in doorways. Do not light matches after a quake — gas leaks are common.</p>"
)}`,
      },
      {
        id: "after",
        title: "After the shaking",
        html: `<ul>
<li>Check yourself and others for injuries; treat bleeding first.</li>
<li>Expect aftershocks; drop, cover and hold on when they occur.</li>
<li>Shut off gas if you smell it; do not use electrical switches or open flames.</li>
<li>Check for structural damage; leave if the building is unsafe.</li>
<li>Use stairs, never lifts.</li>
<li>Listen to the radio; avoid rumours.</li>
<li>Do not enter damaged buildings to retrieve belongings.</li>
</ul>`,
      },
      {
        id: "trapped",
        title: "If trapped",
        html: `<ul>
<li>Cover your mouth and nose with cloth to avoid dust.</li>
<li>Avoid shouting for long periods; tap on pipes or walls in threes.</li>
<li>Conserve energy and air.</li>
<li>Use a torch sparingly; do not light matches.</li>
<li>Signal when you hear rescuers.</li>
</ul>`,
      },
      {
        id: "india",
        title: "India-specific notes",
        html: `<ul>
<li>Seismic zones II–V; Zone V includes parts of Kashmir, Himachal, Uttarakhand, northeast India, Kutch and Andaman.</li>
<li>Older masonry buildings are the biggest risk; retrofit or identify safe rooms.</li>
<li>NDRF and state disaster response teams handle major rescues; local volunteers should not enter collapsed structures.</li>
<li>Keep a pair of sturdy shoes and a torch by the bed.</li>
</ul>
<p>Related: <a href="seismic-zones.html">Seismic zones</a> · <a href="shelter.html">Shelter</a> · <a href="first-aid.html">First aid</a></p>`,
      },
    ],
    related: [
      ["seismic-zones", "Seismic zones"],
      ["shelter", "Shelter"],
      ["first-aid", "First aid"],
    ],
  },
  {
    slug: "nuclear-emp",
    title: "Scenario: Nuclear & EMP Basics",
    shortTitle: "Nuclear & EMP",
    category: "scenarios",
    summary:
      "What to do in a radiation release or an electromagnetic pulse event — shelter, distance, time and information.",
    readTime: "7 min read",
    intro: `<p>Nuclear and EMP events are low-probability but high-consequence. The core principles are simple: <strong>get inside, stay inside, stay tuned</strong> — and for EMP, protect the electronics that matter most.</p>
${callout(
  "danger",
  "Follow official instructions",
  "<p>In any radiological emergency, official guidance overrides this page. Do not evacuate into the path of a plume unless authorities tell you to.</p>"
)}`,
    checklist: [
      "Know the nearest designated shelter",
      "Battery radio and spare cells",
      "Water and food for 14 days",
      "Plastic sheeting and tape",
      "Faraday bags for critical electronics",
    ],
    sections: [
      {
        id: "radiation",
        title: "Radiological release",
        html: `<ol>
<li><strong>Get inside</strong> a building, ideally a basement or interior room with few windows.</li>
<li><strong>Stay inside</strong> for at least 24 hours, or until authorities say it is safe.</li>
<li><strong>Seal</strong> windows, doors and vents; turn off fans and AC.</li>
<li><strong>Remove outer clothing</strong> and bag it; shower with soap and water if exposed.</li>
<li><strong>Stay tuned</strong> to official radio and alerts.</li>
</ol>
<p>Distance, shielding and time reduce exposure. Dense materials (concrete, earth, brick) shield best. Do not go outside to look for the source.</p>`,
      },
      {
        id: "emp",
        title: "Electromagnetic pulse",
        html: `<ul>
<li>An EMP can damage electronics over a wide area, especially connected to long wires and antennas.</li>
<li>Unplug devices and disconnect antennas if warned.</li>
<li>Store critical electronics in a Faraday bag or metal box; a microwave can work as a makeshift enclosure but is not guaranteed.</li>
<li>Keep paper maps, printed contacts and cash — they are immune.</li>
<li>A vehicle with electronic ignition may fail; older mechanical vehicles are more resilient.</li>
<li>Plan for communications loss and grid failure — see <a href="grid-collapse.html">grid collapse</a>.</li>
</ul>`,
      },
      {
        id: "prep",
        title: "Preparation",
        html: `<ul>
<li>Two weeks of water, food and medicine.</li>
<li>Battery radio and spare batteries.</li>
<li>Plastic sheeting and tape for sealing a room.</li>
<li>Printed documents, maps and this guide.</li>
<li>A Faraday bag for a phone, radio and flashlight.</li>
<li>Cash in small notes.</li>
</ul>`,
      },
      {
        id: "myths",
        title: "Myths and limits",
        html: `<ul>
<li>Iodine tablets protect only the thyroid and only against radioactive iodine; they are not a general anti-radiation pill. Take them only on official advice.</li>
<li>You cannot outrun fallout; sheltering is usually safer than fleeing.</li>
<li>An EMP is not the same as a nuclear blast; effects differ by altitude and device.</li>
<li>Preparedness for grid failure, communications loss and sheltering covers most of the practical response.</li>
</ul>
<p>Related: <a href="grid-collapse.html">Grid collapse</a> · <a href="shelter.html">Shelter</a> · <a href="communication.html">Communication</a></p>`,
      },
    ],
    related: [
      ["grid-collapse", "Grid collapse"],
      ["shelter", "Shelter"],
      ["communication", "Communication"],
    ],
  },
  {
    slug: "cyclone",
    title: "Cyclone",
    shortTitle: "Cyclone",
    category: "hazards",
    summary:
      "Prepare for cyclones on India's coasts: evacuate early, avoid the eye's false calm, and survive the storm surge.",
    readTime: "7 min read",
    intro: `<p>Cyclones bring wind, rain and <strong>storm surge</strong> — the rise in sea level that kills most people. India's east coast is especially exposed. Follow evacuation orders immediately.</p>`,
    checklist: [
      "Know your nearest cyclone shelter",
      "Secure roof, windows and loose objects",
      "Stock water, food, radio and medicines",
      "Keep documents waterproofed",
      "Plan for pets and livestock",
    ],
    sections: [
      {
        id: "before",
        title: "Before landfall",
        html: `<ul>
<li>Track IMD bulletins and colour warnings; prepare when orange is issued.</li>
<li>Evacuate if ordered, especially from low-lying coastal areas and kutcha houses.</li>
<li>Secure roofs with ropes or sandbags; board or tape windows.</li>
<li>Move valuables and documents to high ground; pack a go-bag.</li>
<li>Fill water containers; charge devices.</li>
<li>Move livestock to high ground; do not tie animals where they can drown.</li>
</ul>`,
      },
      {
        id: "during",
        title: "During the storm",
        html: `<ul>
<li>Stay indoors, away from windows; go to the strongest interior room.</li>
<li>If the eye passes, there is a false calm — do not go outside until the all-clear.</li>
<li>Keep the radio on; conserve phone battery.</li>
<li>Watch for flooding and structural damage; move to a higher floor if needed.</li>
<li>Do not touch downed power lines.</li>
</ul>
${callout(
  "danger",
  "Storm surge",
  "<p>Surge can raise sea level by metres and arrive before the strongest winds. If you are near the coast and told to evacuate, go immediately.</p>"
)}`,
      },
      {
        id: "after",
        title: "After the cyclone",
        html: `<ul>
<li>Wait for official clearance; roads and power lines may be down.</li>
<li>Check for injuries and structural damage; beware snakes and debris.</li>
<li>Boil or treat all drinking water.</li>
<li>Photograph damage for insurance; avoid scams.</li>
<li>Check on vulnerable neighbours.</li>
</ul>`,
      },
      {
        id: "india",
        title: "India-specific notes",
        html: `<ul>
<li>Cyclone season: pre-monsoon (April–June) and post-monsoon (October–December), mainly Bay of Bengal and Arabian Sea.</li>
<li>States most affected: Odisha, West Bengal, Andhra Pradesh, Tamil Nadu, Gujarat, Kerala.</li>
<li>NDRF and state teams pre-position before landfall; follow district collector instructions.</li>
<li>Cyclone shelters are public buildings; know the route.</li>
</ul>
<p>Related: <a href="flood.html">Flood</a> · <a href="weather-signs.html">Weather signs</a> · <a href="emergency-contacts.html">Emergency contacts</a></p>`,
      },
    ],
    related: [
      ["flood", "Flood"],
      ["weather-signs", "Weather signs"],
      ["emergency-contacts", "Emergency contacts"],
    ],
  },
  {
    slug: "heatwave",
    title: "Heatwave",
    shortTitle: "Heatwave",
    category: "hazards",
    summary:
      "Survive extreme heat: recognise heat illness, cool your home, and protect vulnerable people.",
    readTime: "6 min read",
    intro: `<p>Heatwaves are India's deadliest natural hazard by some counts. They are silent and slow. The old, the young, outdoor workers and the poor are most at risk.</p>`,
    checklist: [
      "Water and ORS at home",
      "Know the cooling centres nearby",
      "Check on elderly and isolated neighbours twice daily",
      "Keep curtains closed by day",
      "Avoid outdoor work midday",
    ],
    sections: [
      {
        id: "protect",
        title: "Protecting yourself",
        html: `<ul>
<li>Drink water before you are thirsty; add salt to food.</li>
<li>Stay indoors 11:00–16:00; avoid direct sun.</li>
<li>Wear loose, light-coloured clothing; use a hat and sunglasses.</li>
<li>Close curtains on sun-facing windows; open at night for ventilation.</li>
<li>Use wet cloths, cool showers and fans; a damp sheet over an open window cools incoming air.</li>
<li>Never leave anyone in a parked car.</li>
</ul>`,
      },
      {
        id: "illness",
        title: "Heat illness",
        html: `${table(
          "Heat illness: recognise and act.",
          ["Condition", "Signs", "Action"],
          [
            ["Heat cramps", "Muscle spasms, heavy sweating", "Rest in shade, fluids with salt/ORS"],
            ["Heat exhaustion", "Weakness, dizziness, nausea, clammy skin", "Cool, shade, ORS, monitor"],
            ["Heat stroke", "Hot skin, confusion, collapse, high temperature", "Call 112; cool rapidly, do not give fluids if unconscious"],
          ]
        )}`,
      },
      {
        id: "home",
        title: "Cooling without AC",
        html: `<ul>
<li>Use cross-ventilation at night; close windows and curtains by day.</li>
<li>Create a cooler sleeping area on the lowest floor.</li>
<li>Hang damp sheets in front of windows; evaporation cools the air.</li>
<li>Use a hand fan or battery fan; charge during solar hours.</li>
<li>Take cool showers; keep a wet towel on the neck and wrists.</li>
<li>Cook early or outdoors to avoid heating the house.</li>
</ul>`,
      },
      {
        id: "india",
        title: "India-specific notes",
        html: `<ul>
<li>IMD issues heatwave alerts when temperatures exceed 40 °C in the plains or 30 °C in the hills.</li>
<li>States with severe heat: Rajasthan, Gujarat, Maharashtra, Madhya Pradesh, Andhra Pradesh, Telangana, Odisha.</li>
<li>NDMA recommends avoiding outdoor work midday and checking on the elderly.</li>
<li>Water shortages often accompany heatwaves; store and treat water.</li>
</ul>
<p>Related: <a href="climate.html">Heat and cold</a> · <a href="water.html">Water</a> · <a href="vulnerable-groups.html">Vulnerable groups</a></p>`,
      },
    ],
    related: [
      ["climate", "Heat and cold"],
      ["water", "Water"],
      ["vulnerable-groups", "Vulnerable groups"],
    ],
  },
  {
    slug: "wildfire",
    title: "Wildfire",
    shortTitle: "Wildfire",
    category: "hazards",
    summary:
      "Prepare for forest and grass fires: defensible space, evacuation, and smoke protection.",
    readTime: "6 min read",
    intro: `<p>India's forest fires peak in summer, especially in Uttarakhand, Himachal, Odisha, Madhya Pradesh and the northeast. Most are started by people. Prepare your home and leave early if fire threatens.</p>`,
    checklist: [
      "Clear dry vegetation around your home",
      "Keep gutters and roofs free of leaves",
      "A go-bag and evacuation route",
      "N95 masks for smoke",
      "Water hoses and buckets ready",
    ],
    sections: [
      {
        id: "prepare",
        title: "Defensible space",
        html: `<ul>
<li>Clear dry grass, leaves and branches within 10–30 m of the house.</li>
<li>Prune low branches and keep trees away from the roof.</li>
<li>Store firewood, fuel and gas cylinders away from the house.</li>
<li>Keep gutters and roofs clear of debris.</li>
<li>Use fire-resistant roofing and screens where possible.</li>
<li>Keep a hose, buckets and a ladder accessible.</li>
</ul>`,
      },
      {
        id: "evacuate",
        title: "Evacuating",
        html: `<ul>
<li>Leave early on official orders; do not wait to see flames.</li>
<li>Close all windows and doors; shut off gas.</li>
<li>Wear cotton or wool, not synthetics; cover your skin and face.</li>
<li>Drive with headlights on; avoid smoke-filled roads.</li>
<li>Tell your out-of-area contact where you are going.</li>
<li>If trapped in a vehicle, park away from vegetation, close vents and lie low.</li>
</ul>`,
      },
      {
        id: "smoke",
        title: "Smoke and air quality",
        html: `<ul>
<li>Stay indoors with windows closed; use a purifier or a damp cloth over vents.</li>
<li>Wear an N95/FFP2 mask outdoors; cloth masks do not filter smoke well.</li>
<li>Avoid exercise outdoors; keep children and the elderly inside.</li>
<li>Seek medical help for chest pain, severe breathlessness or wheezing.</li>
</ul>`,
      },
      {
        id: "india",
        title: "India-specific notes",
        html: `<ul>
<li>Forest fire season: February–June, peaking March–May.</li>
<li>Report fires to the forest department or fire services; do not attempt to fight a large fire.</li>
<li>Village fire lines and community patrols help prevent spread.</li>
<li>Smoke from fires worsens air quality across north India.</li>
</ul>
<p>Related: <a href="air-quality.html">Air quality</a> · <a href="climate.html">Heat and weather</a> · <a href="bug-in-out.html">Bug in or out</a></p>`,
      },
    ],
    related: [
      ["air-quality", "Air quality"],
      ["climate", "Heat and weather"],
      ["bug-in-out", "Bug in or out"],
    ],
  },
  {
    slug: "landslide",
    title: "Landslide",
    shortTitle: "Landslide",
    category: "hazards",
    summary:
      "Recognise landslide warning signs in hill country and know how to react when the ground moves.",
    readTime: "6 min read",
    intro: `<p>Landslides kill in the Himalayan states and the Western Ghats every monsoon, often after heavy rain. Warning signs appear hours or minutes before a slope fails — learn them.</p>`,
    checklist: [
      "Know if you live below a steep slope",
      "Watch for new cracks and tilting trees",
      "Monitor IMD rainfall warnings",
      "Evacuation route to high, stable ground",
      "A go-bag ready",
    ],
    sections: [
      {
        id: "signs",
        title: "Warning signs",
        html: `<ul>
<li>New cracks or bulges in the ground, roads or walls.</li>
<li>Doors and windows sticking suddenly.</li>
<li>Tilting trees, poles or fences.</li>
<li>Springs or seeps appearing where none were before.</li>
<li>Rumbling or cracking sounds; faint vibrations.</li>
<li>Muddy water or debris suddenly in a stream.</li>
<li>Fences, retaining walls or stairs moving away from structures.</li>
</ul>`,
      },
      {
        id: "during",
        title: "During a landslide",
        html: `<ul>
<li>Move away from the path of the slide — sideways and uphill, not downhill.</li>
<li>If you cannot escape, curl into a tight ball and protect your head.</li>
<li>Stay away from the slide's edges and the valley below; more debris may follow.</li>
<li>Do not cross a slide; the ground may be unstable.</li>
<li>Listen for trapped people and call for help; do not dig without training.</li>
</ul>`,
      },
      {
        id: "prepare",
        title: "Preparing your home",
        html: `<ul>
<li>Avoid building below steep slopes or in old slide paths.</li>
<li>Maintain drainage; water is the main trigger.</li>
<li>Do not cut trees on steep slopes; roots hold soil.</li>
<li>Build retaining walls and check them before monsoon.</li>
<li>Plan an evacuation route to high, stable ground.</li>
<li>Evacuate early if heavy rain persists and you see warning signs.</li>
</ul>`,
      },
      {
        id: "india",
        title: "India-specific notes",
        html: `<ul>
<li>High-risk areas: Uttarakhand, Himachal Pradesh, Jammu & Kashmir, Sikkim, Arunachal, Nagaland, Kerala and the Western Ghats.</li>
<li>Monsoon rainfall is the main trigger; earthquakes also destabilise slopes.</li>
<li>NDRF and state teams carry out rescues; local volunteers should not enter slide zones.</li>
<li>Roads in hill areas can be blocked for days; keep extra supplies.</li>
</ul>
<p>Related: <a href="flood.html">Flood</a> · <a href="earthquake.html">Earthquake</a> · <a href="seismic-zones.html">Seismic zones</a></p>`,
      },
    ],
    related: [
      ["flood", "Flood"],
      ["earthquake", "Earthquake"],
      ["seismic-zones", "Seismic zones"],
    ],
  },
  {
    slug: "tsunami",
    title: "Tsunami",
    shortTitle: "Tsunami",
    category: "hazards",
    summary:
      "Coastal survival: recognise natural warnings, evacuate to high ground immediately, and stay away until the all-clear.",
    readTime: "6 min read",
    intro: `<p>India's coast is vulnerable to tsunamis from the Indian Ocean. Waves can arrive within minutes. <strong>Natural warnings are your best warning</strong>: strong shaking, a sudden sea retreat, or a loud roar.</p>`,
    checklist: [
      "Know the nearest high ground and evacuation route",
      "Know tsunami evacuation signs",
      "Keep a go-bag and radio",
      "Never go to the beach to watch",
      "INCOIS bulletins bookmarked",
    ],
    sections: [
      {
        id: "signs",
        title: "Natural warning signs",
        html: `<ul>
<li>Strong or prolonged earthquake shaking near the coast.</li>
<li>Sudden withdrawal of the sea, exposing the seabed.</li>
<li>A loud roar like a train or jet from the ocean.</li>
<li>Waves that look unusually large or behave strangely.</li>
</ul>
${callout(
  "danger",
  "Do not wait",
  "<p>If you see or feel any of these, evacuate immediately to high ground or inland. Do not wait for an official warning.</p>"
)}`,
      },
      {
        id: "evacuate",
        title: "Evacuation",
        html: `<ul>
<li>Move to high ground — at least 30 m above sea level or 3 km inland if possible.</li>
<li>Use designated tsunami evacuation routes and signs.</li>
<li>Do not use vehicles if roads are congested; walk fast.</li>
<li>Stay away from rivers and estuaries; tsunamis travel up them.</li>
<li>Do not return until officials give the all-clear; waves come in sets.</li>
<li>If caught in water, grab something floating and let the current carry you; do not swim against it.</li>
</ul>`,
      },
      {
        id: "prepare",
        title: "Preparing a coastal household",
        html: `<ul>
<li>Know the evacuation zone and route; practise it.</li>
<li>Keep a go-bag by the door with documents, water, radio and medicines.</li>
<li>Know the local tsunami siren and alert system.</li>
<li>Keep the boat ready if you are a fisher, but do not go to sea on a tsunami warning.</li>
<li>Agree a family meeting point inland.</li>
</ul>`,
      },
      {
        id: "india",
        title: "India-specific notes",
        html: `<ul>
<li>The 2004 Indian Ocean tsunami hit Tamil Nadu, Andhra Pradesh, Kerala and the Andaman & Nicobar Islands hard.</li>
<li>INCOIS issues tsunami bulletins; sirens are installed in some coastal villages.</li>
<li>The east coast is more exposed to Sunda Arc earthquakes; the west coast to Makran events.</li>
<li>Tsunami travel time to the Indian mainland can be 2–4 hours; to the Andamans, minutes.</li>
</ul>
<p>Related: <a href="flood.html">Flood</a> · <a href="emergency-contacts.html">Emergency contacts</a> · <a href="navigation.html">Navigation</a></p>`,
      },
    ],
    related: [
      ["flood", "Flood"],
      ["emergency-contacts", "Emergency contacts"],
      ["navigation", "Navigation"],
    ],
  },
  {
    slug: "air-quality",
    title: "Air Quality & Smog",
    shortTitle: "Air quality",
    category: "hazards",
    summary:
      "Protect your lungs during severe smog, dust storms and wildfire smoke — indoors and outdoors.",
    readTime: "5 min read",
    intro: `<p>Air pollution is a slow disaster that becomes acute in winter across north India. Fine particles (PM2.5) penetrate deep into the lungs and blood. Protect the vulnerable first.</p>`,
    checklist: [
      "N95/FFP2 masks fitted",
      "Indoor purifier or a clean room",
      "Windows sealed on bad days",
      "Know the AQI and alerts",
      "Plan for children, elderly and asthmatics",
    ],
    sections: [
      {
        id: "outdoors",
        title: "Outdoors",
        html: `<ul>
<li>Check the AQI; avoid outdoor exercise when it is high.</li>
<li>Wear a well-fitted N95/FFP2 mask; cloth and surgical masks do not filter PM2.5 well.</li>
<li>Avoid busy roads; walk on quieter streets away from traffic.</li>
<li>Keep car windows closed and use recirculated air.</li>
<li>Do not burn waste or use fireworks during smog episodes.</li>
</ul>`,
      },
      {
        id: "indoors",
        title: "Indoors",
        html: `<ul>
<li>Keep windows and doors closed on high-pollution days.</li>
<li>Use an air purifier with a HEPA filter in the room you use most.</li>
<li>Create a clean room: seal gaps, run a purifier, keep it closed.</li>
<li>Avoid incense, candles and frying that add indoor particles.</li>
<li>Wet-mop floors rather than sweeping dry dust.</li>
</ul>`,
      },
      {
        id: "health",
        title: "Health effects",
        html: `<ul>
<li>Irritated eyes, nose and throat; coughing and wheezing.</li>
<li>Worsening asthma and COPD; chest pain.</li>
<li>Increased risk of heart attack and stroke.</li>
<li>Children and the elderly are most vulnerable.</li>
<li>Seek care for severe breathlessness, chest pain or blue lips.</li>
</ul>`,
      },
      {
        id: "india",
        title: "India-specific notes",
        html: `<ul>
<li>North India smog peaks October–January due to stubble burning, traffic, industry and weather.</li>
<li>Delhi, Gurugram, Noida, Ghaziabad and Faridabad regularly record severe AQI.</li>
<li>GRAP restrictions on construction, traffic and schools are imposed by the CAQM.</li>
<li>Dust storms in Rajasthan and Gujarat reduce visibility and worsen air quality.</li>
</ul>
<p>Related: <a href="wildfire.html">Wildfire</a> · <a href="climate.html">Heat and weather</a> · <a href="vulnerable-groups.html">Vulnerable groups</a></p>`,
      },
    ],
    related: [
      ["wildfire", "Wildfire"],
      ["climate", "Heat and weather"],
      ["vulnerable-groups", "Vulnerable groups"],
    ],
  },
  {
    slug: "seismic-zones",
    title: "Seismic Zones of India",
    shortTitle: "Seismic zones",
    category: "hazards",
    summary:
      "Understand India's earthquake zones, assess your risk, and retrofit or plan accordingly.",
    readTime: "5 min read",
    intro: `<p>India is divided into four seismic zones (II–V) by the Bureau of Indian Standards, based on expected shaking. Zone V is the highest risk. Knowing your zone guides construction, insurance and planning.</p>`,
    sections: [
      {
        id: "zones",
        title: "The zones",
        html: `${table(
          "Seismic zones of India. Zone I is no longer used.",
          ["Zone", "Risk", "Regions"],
          [
            ["II", "Low", "Most of peninsular India, parts of the northeast"],
            ["III", "Moderate", "Kerala, Goa, Mumbai, Kolkata, parts of the Ganga plain"],
            ["IV", "High", "Delhi, parts of Himachal, Uttarakhand, Bihar, West Bengal, Sikkim, Andaman"],
            ["V", "Very high", "Kashmir, Himachal, Uttarakhand, northeast states, Kutch, Andaman & Nicobar"],
          ]
        )}
<p>Check your address against the BIS seismic zone map or local municipal building code. Zone IV and V require earthquake-resistant construction.</p>`,
      },
      {
        id: "risk",
        title: "Assessing your building",
        html: `<ul>
<li>Older masonry buildings without reinforcement are the highest risk.</li>
<li>Look for cracks, tilting walls, heavy roofs and unsupported parapets.</li>
<li>Soft-storey buildings (open ground floor for parking) are vulnerable.</li>
<li>Get a structural engineer's assessment if you are in Zone IV or V.</li>
<li>Retrofit where possible; anchor shelves and water heaters.</li>
<li>Keep heavy objects off high shelves and beds.</li>
</ul>`,
      },
      {
        id: "prepare",
        title: "Preparing for earthquakes",
        html: `<ul>
<li>Identify safe spots: under sturdy tables, against interior walls, away from windows.</li>
<li>Practise drop, cover and hold on with the household.</li>
<li>Keep shoes, a torch and a whistle by the bed.</li>
<li>Know how to shut off gas and electricity.</li>
<li>Keep a go-bag and documents ready.</li>
<li>Insure your home and contents.</li>
</ul>
<p>Related: <a href="earthquake.html">Earthquake</a> · <a href="shelter.html">Shelter</a> · <a href="family-plan.html">Family plan</a></p>`,
      },
    ],
    related: [
      ["earthquake", "Earthquake"],
      ["shelter", "Shelter"],
      ["family-plan", "Family plan"],
    ],
  },
];

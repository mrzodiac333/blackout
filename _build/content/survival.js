const { callout, table, figure } = require("../render");
const fs = require("fs");
const path = require("path");
const svg = (name) =>
  fs.readFileSync(path.join(__dirname, "..", "..", "assets", "img", name), "utf8");

module.exports = [
  {
    slug: "water",
    title: "Water: Find, Treat, Store",
    shortTitle: "Water",
    category: "survival",
    summary:
      "How to find water, make it safe to drink, and store enough for your household — the single highest-priority survival skill.",
    readTime: "10 min read",
    intro: `<p>A person needs roughly <strong>3 litres of drinking water per day</strong>; cooking and basic hygiene push household use to 10–20 litres per person per day. You can survive weeks without food but only days without water. Treat water as your first supply problem.</p>
${callout(
  "danger",
  "Assume all untreated water is contaminated",
  "<p>Flood water, river water, roof runoff and open wells can carry bacteria, viruses, protozoa and chemicals. Clear water is not safe water. Always treat before drinking.</p>"
)}`,
    checklist: [
      "Store at least 3 litres of drinking water per person per day for 14 days",
      "Keep a backup treatment method: fuel or stove for boiling, plus chlorine or filter",
      "Identify two nearby water sources and a route to each",
      "Keep a clean, food-grade container with a lid for transport",
      "Learn to recognise dehydration and heat illness",
      "Store water away from sunlight and chemicals",
    ],
    sections: [
      {
        id: "needs",
        title: "How much water you need",
        html: `${table(
          "Minimum planning figures for a household. Hot climates, pregnancy, illness and hard work increase needs.",
          ["Use", "Litres per person per day"],
          [
            ["Drinking", "3–4"],
            ["Cooking", "2–3"],
            ["Basic hygiene (hands, face, dishes)", "3–5"],
            ["Total minimum", "<strong>8–12</strong>"],
            ["Comfortable with laundry", "15–20"],
          ]
        )}
<p>For a family of four, two weeks at 10 L/day/person is <strong>560 litres</strong> — about 28 standard 20-litre cans. That is a lot of space. Most households cannot store it all, so pair storage with treatment capability.</p>`,
      },
      {
        id: "find",
        title: "Finding water",
        html: `<ul>
<li><strong>Your own tank and geyser.</strong> Overhead tanks, sumps and even a water heater hold usable water. Shut off incoming mains first if supply is contaminated.</li>
<li><strong>Rainwater.</strong> Collect from a clean roof into covered containers; first flush is dirtiest.</li>
<li><strong>Wells and borewells.</strong> Usually reliable but vulnerable to flood contamination.</li>
<li><strong>Rivers, streams and lakes.</strong> Prefer moving water upstream of settlements and livestock.</li>
<li><strong>Groundwater.</strong> A seep dug downslope in a depression, filtered through soil, may collect clearer water. Still treat it.</li>
</ul>
${callout(
  "warning",
  "Do not drink",
  "<p>Flood water, water with a chemical smell, water near industrial sites or fuel spills, and seawater. Chemical and salt contamination cannot be removed by boiling or household filters.</p>"
)}`,
      },
      {
        id: "treat",
        title: "Treating water",
        html: `<h3>1. Boiling (most reliable)</h3>
<p>Bring water to a <strong>rolling boil for at least 1 minute</strong> (3 minutes above 2,000 m). Boiling kills bacteria, viruses and protozoa. It does not remove chemicals or make muddy water clear. Filter cloudy water through cloth first, and let boiled water cool covered.</p>
<h3>2. Chlorination</h3>
<p>Use unscented household bleach (sodium hypochlorite) or chlorine tablets. Follow the product label; generally <strong>2 drops of 5% bleach per litre</strong> of clear water, wait 30 minutes. Cloudy water needs double the dose or pre-filtering. If it does not smell faintly of chlorine after 30 minutes, re-dose. Do not use bleach with additives or fragrance.</p>
<h3>3. Filters</h3>
<p>Commercial hollow-fibre or ceramic filters remove bacteria and protozoa but usually <strong>not viruses</strong>. A DIY sand-and-charcoal filter improves clarity and removes some chemicals but is <strong>not a disinfectant</strong> — always disinfect afterwards.</p>
<h3>4. Solar disinfection (SODIS)</h3>
<p>Fill clear PET bottles with filtered water, lay them in strong sun for at least 6 hours (2 days if cloudy). Effective against viruses and bacteria; less so in turbid water.</p>
${figure(
  svg("diagrams/water-filter.svg"),
  "<strong>Three-stage bucket filter.</strong> Layers settle and adsorb contaminants. Output must still be boiled, chlorinated or SODIS-treated. Never use charcoal from treated timber or chemical fire-lighters."
)}
${table(
  "What each method handles. No household method handles every contaminant.",
  ["Method", "Bacteria", "Viruses", "Protozoa", "Chemicals"],
  [
    ["Boiling", "Yes", "Yes", "Yes", "No"],
    ["Chlorine", "Yes", "Yes", "Partly", "No"],
    ["Filter (ceramic/hollow-fibre)", "Yes", "Usually no", "Yes", "Some"],
    ["SODIS", "Yes", "Yes", "Partly", "No"],
    ["DIY bucket filter", "Some", "No", "Some", "Some"],
  ]
)}`,
      },
      {
        id: "store",
        title: "Storing water",
        html: `<ul>
<li>Use food-grade containers with tight lids; keep them out of sunlight.</li>
<li>Label with the fill date. Commercially sealed water lasts about two years; home-filled water should be rotated every 6 months.</li>
<li>Store in a cool place away from fuel, paint and cleaning chemicals.</li>
<li>Do not store water in old milk jugs or chemical drums — they are hard to clean and can leach.</li>
<li>Freeze water bottles in the freezer for both storage and fridge backup.</li>
<li>Keep at least one portable container per person for evacuation.</li>
</ul>
${callout(
  "note",
  "A note on bathtubs",
  "Filling a clean bathtub before a known emergency gives you flushing and washing water, not drinking water unless treated."
)}`,
      },
      {
        id: "hot",
        title: "Heat, dehydration and water discipline",
        html: `<ul>
<li>Drink before you feel thirsty; thirst is a late sign.</li>
<li>Urine should be pale yellow. Dark urine means drink more.</li>
<li>In extreme heat, rest during midday, wear loose light clothing, and add salt to food.</li>
<li>Never ration water to the point of dehydration. Ration activity instead.</li>
<li>Treat dehydration with oral rehydration salts (ORS), not just plain water.</li>
</ul>
<p>Related: <a href="sanitation.html">Sanitation</a> · <a href="climate.html">Heat and cold</a> · <a href="tools.html">Water calculator</a></p>`,
      },
    ],
    related: [
      ["sanitation", "Sanitation"],
      ["food", "Food"],
      ["tools", "Water calculator"],
    ],
  },
  {
    slug: "food",
    title: "Food: Stock, Preserve, Cook",
    shortTitle: "Food",
    category: "survival",
    summary:
      "Build a two-week food stock you will actually eat, preserve food safely, and cook without mains power.",
    readTime: "9 min read",
    intro: `<p>Food security is mostly logistics, not survival foraging. Store what you eat, eat what you store, and rotate it. Aim for <strong>two weeks of calories</strong> per person, plus a way to cook without grid power.</p>`,
    checklist: [
      "Two weeks of familiar, shelf-stable food per person",
      "Manual can opener and cooking fuel for at least 7 days",
      "Water for cooking counted in your water plan",
      "A food rotation system with dates",
      "Basic preservation supplies: salt, sugar, vinegar, jars",
      "Pest-proof, cool, dry storage",
    ],
    sections: [
      {
        id: "stock",
        title: "What to stock",
        html: `${table(
          "A practical two-week pantry. Quantities are per adult; adjust for children and activity.",
          ["Category", "Examples", "Notes"],
          [
            ["Grains", "Rice, wheat flour, oats, poha, rava", "Main calorie base; store in sealed bins"],
            ["Pulses", "Dal, chana, rajma, moong", "Protein; long shelf life"],
            ["Fats", "Oil, ghee, peanut butter", "Calorie dense; rotate"],
            ["Canned/packed protein", "Tinned fish, beans, paneer (long-life)", "Check dates"],
            ["Dry goods", "Biscuits, khakhra, noodles, sugar, tea, coffee", "Comfort and quick energy"],
            ["Spices & salt", "Salt is critical for preservation and health", "Store dry"],
            ["Powdered milk", "Fortified milk powder", "Protein and calcium"],
            ["Treats", "Chocolate, sweets", "Morale matters"],
          ]
        )}
<p>Buy one extra of each staple per shopping trip until you reach your target. This spreads the cost and keeps stock fresh.</p>`,
      },
      {
        id: "rotation",
        title: "Rotation and storage",
        html: `<ul>
<li><strong>First in, first out.</strong> New items go behind old ones; write dates on everything.</li>
<li>Store in airtight containers — steel, food-grade plastic, or mylar bags with oxygen absorbers for long-term grain.</li>
<li>Keep cool, dark and dry; heat and humidity destroy food and invite pests.</li>
<li>Inspect monthly for insects, damp or swollen cans. Discard bulging cans.</li>
<li>Keep a written inventory on the inside of the pantry door.</li>
</ul>
${callout(
  "warning",
  "Never eat",
  "<p>Food from bulging, leaking or badly dented cans, food with mould beyond the surface of hard cheese or bread, or anything with an off smell you cannot explain. When in doubt, throw it out.</p>"
)}`,
      },
      {
        id: "preserve",
        title: "Preserving food",
        html: `${figure(
          svg("diagrams/food-preservation.svg"),
          "<strong>Preservation methods at a glance.</strong> Shelf lives are approximate and depend on storage conditions and technique."
)}
<h3>Drying</h3>
<p>Slice thinly and dry in sun, a solar dryer, or a low oven. Drying works best in low humidity. Store in airtight containers; add a moisture absorber if available. Vegetables and fruit rehydrate well; meat drying requires care and is not recommended without training.</p>
<h3>Salting and curing</h3>
<p>Salt draws out moisture and inhibits bacteria. Use non-iodised salt for curing where possible, keep the food fully covered, and store cool. Uneven curing leaves pockets where bacteria survive.</p>
<h3>Pickling</h3>
<p>Vinegar or a strong salt brine plus acid (lemon) preserves vegetables. Keep vegetables submerged. Use clean jars and lids; discard if cloudy, mouldy or fizzy.</p>
<h3>Canning</h3>
<p>Low-acid foods (meat, beans, vegetables) require a <strong>pressure canner</strong> to reach 116–121 °C. Boiling-water canning is only safe for high-acid foods (fruit, pickles, tomatoes with added acid). Improper canning causes botulism, which can be fatal. If you have not been trained, do not attempt low-acid canning.</p>
${callout(
  "danger",
  "Botulism",
  "<p>Never taste food from a jar with a bulging lid, a broken seal, or an off smell. Boiling does not reliably destroy botulinum toxin already formed in food. Discard it.</p>"
)}`,
      },
      {
        id: "cook",
        title: "Cooking without power",
        html: `<ul>
<li><strong>Camp stove + fuel canisters.</strong> Most reliable; use outdoors or in a ventilated space only.</li>
<li><strong>LPG cylinder.</strong> Store upright, secure, and check the hose; never store indoors in a bedroom.</li>
<li><strong>Rocket stove or wood fire.</strong> Efficient with small sticks; use outdoors.</li>
<li><strong>Solar cooker.</strong> Slow but fuel-free on clear days.</li>
<li><strong>Thermal cooking (haybox).</strong> Bring food to a boil, then insulate the pot for hours — saves fuel for rice, dal and stews.</li>
</ul>
${callout(
  "danger",
  "Carbon monoxide",
  "<p>Never burn charcoal, wood or LPG in an enclosed room, tent or garage. Carbon monoxide is invisible and odourless and kills quickly. Always ventilate.</p>"
)}
<p>Cooking also purifies water and makes food safer; a hot meal is a major morale boost. Keep a manual can opener, matches in a waterproof bag, and a lighter in every kit.</p>`,
      },
      {
        id: "forage",
        title: "Foraging — with extreme caution",
        html: `<p>Foraging is a supplement, not a plan. Many edible-looking plants are toxic, and misidentification can be fatal.</p>
<ul>
<li>Learn a small number of unmistakable local plants from a qualified person, not from photos alone.</li>
<li>Avoid plants with milky sap, umbrella-shaped flower heads (hemlock family), or unknown berries.</li>
<li>Do not eat mushrooms unless identified by an expert in person.</li>
<li>Wash all forage and treat water used to wash it.</li>
<li>Avoid foraging near roads, industrial sites and sprayed fields.</li>
</ul>
<p>Related: <a href="food-production.html">Food production</a> · <a href="water.html">Water</a> · <a href="hygiene.html">Hygiene</a></p>`,
      },
    ],
    related: [
      ["water", "Water"],
      ["food-production", "Food production"],
      ["power", "Power"],
    ],
  },
  {
    slug: "shelter",
    title: "Shelter: Stay Dry, Stay Warm",
    shortTitle: "Shelter",
    category: "survival",
    summary:
      "How to shelter in place, seal a room, and build an emergency shelter outdoors that keeps you dry and warm.",
    readTime: "8 min read",
    intro: `<p>Exposure kills faster than hunger. Shelter is about the <strong>microclimate next to your body</strong>: dry, wind-blocked, insulated from the ground. In most urban emergencies, the best shelter is your home with the utilities managed safely.</p>`,
    checklist: [
      "Choose one safe room per home for storms or contamination",
      "Store plastic sheeting and strong tape for sealing",
      "Keep blankets, sleeping bags and warm layers accessible",
      "Know how to shut off gas, water and electricity",
      "Have a plan for pets and vulnerable household members",
    ],
    sections: [
      {
        id: "in-place",
        title: "Sheltering in place",
        html: `<ul>
<li><strong>Storm/cyclone:</strong> interior room on the lowest floor, away from windows; lie under a sturdy table if debris risk is high.</li>
<li><strong>Flood:</strong> move to higher floors, not the attic unless you can reach the roof. Never walk or drive through moving water.</li>
<li><strong>Earthquake:</strong> drop, cover, hold on. Stay away from glass and heavy furniture.</li>
<li><strong>Chemical/airborne hazard:</strong> interior room, windows and doors closed, vents and gaps taped, plastic sheeting over openings. Turn off AC and fans that draw outside air.</li>
<li><strong>Extreme heat:</strong> lowest floor, shaded side, cross-ventilation at night; close curtains by day.</li>
<li><strong>Extreme cold:</strong> smallest room, close off unused rooms, layer clothing, use safe heating only.</li>
</ul>`,
      },
      {
        id: "seal",
        title: "Sealing a room",
        html: `<ol>
<li>Choose a room with few windows and an interior wall; bring water, food, radio, medications, buckets and bedding.</li>
<li>Close and lock windows and doors; seal gaps with tape or damp towels.</li>
<li>Tape plastic sheeting over windows and vents; overlap edges.</li>
<li>Turn off fans, AC, and any system that pulls in outside air.</li>
<li>Listen to the radio or official alerts for the all-clear.</li>
</ol>
<p>Sealing is temporary. It buys hours, not days, and can cause heat build-up in hot climates — monitor occupants.</p>`,
      },
      {
        id: "outdoor",
        title: "Emergency shelter outdoors",
        html: `${figure(
  svg("diagrams/shelter-types.svg"),
  "<strong>Shelter options by time available.</strong> A tarp A-frame takes minutes; a debris hut takes hours but insulates far better."
)}
<ul>
<li><strong>Site:</strong> high, dry ground; clear of dead trees, rockfall, flood paths and animal trails.</li>
<li><strong>Insulation first:</strong> a thick layer of dry leaves, pine needles or cardboard between you and the ground.</li>
<li><strong>Wind and rain:</strong> orient the opening away from prevailing wind; use a tarp or branches layered like shingles.</li>
<li><strong>Size:</strong> just big enough to lie down — smaller shelters trap heat.</li>
<li><strong>Ventilation:</strong> never seal a shelter with a fire inside.</li>
</ul>
${callout(
  "note",
  "Urban alternative",
  "In a city, a parked car, a stairwell or a corridor can be a better shelter than an improvised outdoor structure. Prefer solid buildings over tents in high winds and civil unrest."
)}`,
      },
      {
        id: "cold",
        title: "Cold, wet and heat",
        html: `<h3>Hypothermia</h3>
<p>Watch for shivering, confusion, slurred speech and drowsiness. Move the person to shelter, remove wet clothing, insulate from the ground, wrap in dry layers and share body heat. Warm the core, not the limbs. Give warm sweet drinks only if fully conscious.</p>
<h3>Heat illness</h3>
<p>Heat exhaustion: heavy sweating, weakness, dizziness, nausea. Move to shade, loosen clothing, cool with wet cloths, sip water or ORS. Heat stroke: hot dry skin, confusion, collapse — a medical emergency; cool aggressively and call for help.</p>
<p>Related: <a href="climate.html">Heat, cold and weather</a> · <a href="fire.html">Fire</a> · <a href="first-aid.html">First aid</a></p>`,
      },
    ],
    related: [
      ["fire", "Fire"],
      ["climate", "Heat and cold"],
      ["first-aid", "First aid"],
    ],
  },
  {
    slug: "fire",
    title: "Fire: Start, Control, Cook",
    shortTitle: "Fire",
    category: "survival",
    summary:
      "Reliable fire lighting in wet conditions, safe fire management, and using fire for warmth, cooking and signalling.",
    readTime: "7 min read",
    intro: `<p>Fire provides warmth, cooking, water purification, light and a signal. It also causes house fires, burns and carbon-monoxide deaths. The skill is not just lighting one — it is controlling it.</p>`,
    checklist: [
      "Two independent ignition sources in every kit",
      "Dry tinder stored in a waterproof bag",
      "A fire extinguisher or sand bucket at home",
      "A safe, ventilated cooking area",
      "Knowledge of local fire bans and rules",
    ],
    sections: [
      {
        id: "prep",
        title: "Preparation: tinder, kindling, fuel",
        html: `<ul>
<li><strong>Tinder:</strong> dry grass, birch bark, char cloth, cotton with petroleum jelly, dryer lint.</li>
<li><strong>Kindling:</strong> pencil-thin dry twigs, split small wood.</li>
<li><strong>Fuel:</strong> dry dead wood, sorted by size.</li>
<li><strong>Ignition:</strong> lighter, ferro rod, matches in a waterproof case, magnifying lens.</li>
</ul>
<p>In rain, look for dead branches still attached to trees, or split wet logs to reach dry wood inside.</p>`,
      },
      {
        id: "light",
        title: "Lighting a fire",
        html: `<ol>
<li>Clear a circle at least 3 metres wide down to bare soil; never light under overhanging branches.</li>
<li>Build a small tinder bundle; light it and add kindling gradually.</li>
<li>Add larger wood only once the kindling is burning steadily.</li>
<li>Keep a water container and a shovel or sand nearby.</li>
</ol>
${figure(
  svg("diagrams/fire-lays.svg"),
  "<strong>Three reliable fire lays.</strong> Teepee lights fast; log cabin burns steadily; star fire is easy to feed and control."
)}
${callout(
  "danger",
  "Indoors",
  "<p>Never use charcoal or wood fires indoors, in tents, or in enclosed courtyards without ventilation. Carbon monoxide kills silently. Use a battery CO alarm where possible.</p>"
)}`,
      },
      {
        id: "safety",
        title: "Fire safety at home",
        html: `<ul>
<li>Keep extinguishers on every floor; know PASS — Pull, Aim, Squeeze, Sweep.</li>
<li>Never leave cooking unattended; keep cloth away from flames.</li>
<li>Store LPG upright, away from heat, with the valve closed when not in use.</li>
<li>Check electrical wiring and avoid overloading extension boards.</li>
<li>Plan two exits from every room and practise them at night.</li>
<li>If a fire starts: alert everyone, get out, stay out, call 101/112. Do not re-enter.</li>
</ul>`,
      },
      {
        id: "uses",
        title: "Fire as a tool",
        html: `<ul>
<li><strong>Boiling water:</strong> rolling boil for 1 minute.</li>
<li><strong>Cooking:</strong> coals give steadier heat than flames; a bed of embers is ideal for rice and stews.</li>
<li><strong>Warmth:</strong> reflect heat with a wall of logs or a space blanket behind you.</li>
<li><strong>Signalling:</strong> three fires in a triangle is a distress signal; at night, three evenly spaced fires.</li>
<li><strong>Drying:</strong> dry clothing and tinder near — never over — the fire.</li>
<li><strong>Repellent:</strong> smoke reduces mosquitoes; do not rely on it as your only protection.</li>
</ul>
<p>Related: <a href="shelter.html">Shelter</a> · <a href="water.html">Water</a> · <a href="signaling-rescue.html">Signalling</a></p>`,
      },
    ],
    related: [
      ["shelter", "Shelter"],
      ["water", "Water"],
      ["signaling-rescue", "Signalling and rescue"],
    ],
  },
  {
    slug: "power",
    title: "Power: Solar, Batteries, Generators",
    shortTitle: "Power",
    category: "survival",
    summary:
      "Keep phones, lights and medical devices running during an outage with solar, battery banks and safe generator use.",
    readTime: "9 min read",
    intro: `<p>Modern survival is mostly about <strong>electrons</strong>: light, communications, refrigeration for medicine, and pumping water. Plan for a two-week outage. The safest system is small, solar-charged and fuse-protected.</p>`,
    checklist: [
      "Power banks charged and rotated",
      "A small solar panel and charge controller",
      "Headlamps and spare cells",
      "Fuses and correct cable sizes",
      "A plan for medicines that need refrigeration",
      "No generators indoors, ever",
    ],
    sections: [
      {
        id: "budget",
        title: "Start with a power budget",
        html: `${table(
          "Typical small loads. Multiply watts by hours used per day to get watt-hours.",
          ["Device", "Power", "Daily use", "Watt-hours"],
          [
            ["Phone charging", "10 W", "2 hours", "20"],
            ["LED lamp", "5 W", "5 hours", "25"],
            ["Headlamp", "2 W", "3 hours", "6"],
            ["Radio (receive)", "3 W", "6 hours", "18"],
            ["Laptop", "45 W", "2 hours", "90"],
            ["Small fan", "20 W", "6 hours", "120"],
          ]
        )}
<p>A 20,000 mAh power bank stores roughly <strong>74 Wh</strong> — enough for phones and lights for days, not for a fan or fridge. Use the <a href="tools.html">power calculator</a> to size a system.</p>`,
      },
      {
        id: "solar",
        title: "Small solar setup",
        html: `${figure(
  svg("diagrams/solar-station.svg"),
  "<strong>Solar charging chain.</strong> Panel → controller → battery → fused loads. Every positive feed is fused close to the battery."
)}
<ul>
<li><strong>Panel:</strong> a 50–100 W folding panel can charge a battery bank and run small loads.</li>
<li><strong>Controller:</strong> MPPT is more efficient; PWM is cheaper. Match controller to panel voltage and battery chemistry.</li>
<li><strong>Battery:</strong> LiFePO4 is lighter and safer for indoor use; lead-acid is cheaper but needs ventilation.</li>
<li><strong>Inverter:</strong> only if you need mains AC; expect losses and buy a pure sine-wave unit.</li>
</ul>
${callout(
  "warning",
  "Lithium safety",
  "<p>Use quality cells and a proper BMS. Never charge a cold Li-ion pack, never puncture or crush cells, and never charge unattended on a flammable surface. Swollen cells are a fire risk — isolate and dispose of them safely.</p>"
)}`,
      },
      {
        id: "generator",
        title: "Generators and fuel",
        html: `<ul>
<li>Run generators <strong>outdoors only</strong>, at least 5 metres from doors and windows, with the exhaust pointing away.</li>
<li>Never store fuel indoors or near a flame; use approved containers and rotate stock.</li>
<li>Let the generator cool before refuelling.</li>
<li>Use a CO alarm in the house if you run any fuel-burning appliance.</li>
<li>Connect appliances directly or use a proper transfer switch — never backfeed a socket.</li>
</ul>`,
      },
      {
        id: "conservation",
        title: "Making power last",
        html: `<ul>
<li>Turn off background apps, Wi-Fi and Bluetooth; use airplane mode when not needed.</li>
<li>Lower screen brightness and shorten screen timeout.</li>
<li>Charge devices during peak solar hours rather than at night.</li>
<li>Use one central charging station and keep it off the floor.</li>
<li>Prefer headlamps over room lights; light only the space you use.</li>
<li>Keep devices cool — heat degrades batteries.</li>
</ul>
<p>Related: <a href="communication.html">Radio</a> · <a href="medications.html">Medication storage</a> · <a href="tools.html">Power calculator</a></p>`,
      },
    ],
    related: [
      ["communication", "Communication"],
      ["tools", "Power calculator"],
      ["documents-finance", "Documents and money"],
    ],
  },
  {
    slug: "transport",
    title: "Transport & Evacuation",
    shortTitle: "Transport",
    category: "survival",
    summary:
      "Vehicle preparation, fuel storage, evacuation routes and how to move safely on foot or by bicycle.",
    readTime: "8 min read",
    intro: `<p>Evacuation is a decision, not a default. When you must move, the goal is to leave <strong>early, light and with a destination</strong> — not to join a panicked exodus on a blocked highway.</p>`,
    checklist: [
      "Two evacuation routes out of your area, practised",
      "Vehicle fuel tank above half at all times",
      "Go-bag in the vehicle, not buried in the boot",
      "Offline maps downloaded",
      "Cash for fuel and tolls",
      "A destination and a backup destination",
    ],
    sections: [
      {
        id: "vehicle",
        title: "Vehicle readiness",
        html: `<ul>
<li>Keep at least half a tank; refuel early, not when everyone else does.</li>
<li>Service the vehicle, check tyres, coolant, oil and brakes.</li>
<li>Carry a jump starter, tyre inflator, tow strap, spare tyre and tools.</li>
<li>Keep water, blankets, a torch, first-aid kit, phone charger and a paper map in the car.</li>
<li>Store fuel only in approved containers, secured and ventilated — never in the passenger cabin.</li>
</ul>
${callout(
  "danger",
  "Flood water",
  "<p>Never drive through moving water. 30 cm of moving water can move a car; 60 cm can float it. Turn around, don't drown.</p>"
)}`,
      },
      {
        id: "routes",
        title: "Routes and timing",
        html: `<ul>
<li>Leave before official evacuation orders become mandatory if you have vulnerable people, pets or medical needs.</li>
<li>Use secondary roads; highways become car parks.</li>
<li>Avoid bridges, underpasses and river crossings in flood conditions.</li>
<li>Drive with headlights on, keep space, and never stop in the road to film.</li>
<li>Tell your out-of-area contact your route and expected arrival time.</li>
</ul>`,
      },
      {
        id: "foot",
        title: "On foot and by bicycle",
        html: `<ul>
<li>A bicycle is the most efficient evacuation vehicle for most city distances — quiet, fast, easy to repair.</li>
<li>On foot, carry weight on your hips, not shoulders; 10–15% of body weight is a realistic load.</li>
<li>Walk early and rest during heat; drink before thirst.</li>
<li>Wear broken-in shoes, a hat and high-visibility clothing if moving near roads.</li>
<li>Avoid crowds, checkpoints and confrontation; move around, not through.</li>
</ul>`,
      },
      {
        id: "pets",
        title: "Pets and livestock",
        html: `<ul>
<li>Prepare a pet go-bag: food, water, bowl, leash, carrier, vaccination record, medications.</li>
<li>Many shelters do not accept animals; identify pet-friendly shelters or boarding in advance.</li>
<li>For livestock, plan water, feed and transport; evacuate early.</li>
<li>Never leave animals locked in a vehicle in heat.</li>
</ul>
<p>Related: <a href="bug-in-out.html">Bug in or out</a> · <a href="animals.html">Animals</a> · <a href="navigation.html">Navigation</a></p>`,
      },
    ],
    related: [
      ["bug-in-out", "Bug in or out"],
      ["navigation", "Navigation"],
      ["animals", "Animals"],
    ],
  },
  {
    slug: "climate",
    title: "Heat, Cold & Severe Weather",
    shortTitle: "Heat & Weather",
    category: "survival",
    summary:
      "Recognise and treat heat illness and hypothermia, and prepare for India's heatwaves, cold snaps and storms.",
    readTime: "7 min read",
    intro: `<p>India's climate ranges from Himalayan cold to coastal heat and monsoon humidity. Weather is the most common disaster driver in the country. Know the signs of heat illness and cold injury; both escalate fast.</p>`,
    checklist: [
      "Drinking water and ORS at home and in every bag",
      "Wide-brim hat, loose light clothing, sunscreen",
      "Blankets and dry layers for cold snaps",
      "Battery radio for IMD warnings",
      "A plan for the hottest and coldest hours of the day",
    ],
    sections: [
      {
        id: "heat",
        title: "Heat illness",
        html: `${table(
          "Heat illness progression. Heat stroke is a medical emergency — call 112.",
          ["Condition", "Signs", "Action"],
          [
            ["Heat cramps", "Painful muscle spasms, heavy sweating", "Rest, shade, fluids with salt/ORS"],
            ["Heat exhaustion", "Weakness, dizziness, nausea, headache, cool clammy skin", "Shade, cool, loosen clothing, sip ORS, monitor"],
            ["Heat stroke", "Hot skin, confusion, collapse, high temperature", "Call 112; cool rapidly with water/ice, fan, do not give fluids if unconscious"],
          ]
        )}
<p>Prevention: drink before thirst, avoid midday exertion, wear light loose clothing, check on the elderly and children, and never leave anyone in a parked car.</p>`,
      },
      {
        id: "cold",
        title: "Cold injury",
        html: `<h3>Hypothermia</h3>
<p>Signs: shivering, confusion, slurred speech, clumsiness, drowsiness. Move to shelter, remove wet clothes, insulate from the ground, wrap in dry layers, share body heat. Warm the core first. Give warm sweet drinks only if fully alert.</p>
<h3>Frostbite</h3>
<p>Signs: pale, numb, hard skin. Do not rub. Warm gradually in 37–39 °C water if there is no risk of refreezing; protect the area and seek medical help.</p>
<p>Cold snaps in northern India kill people every winter, especially outdoors and in unheated homes. Keep dry layers, blankets and a safe heat source.</p>`,
      },
      {
        id: "storm",
        title: "Storms, lightning and wind",
        html: `<ul>
<li>Secure loose outdoor items before a storm; move indoors.</li>
<li>Stay away from windows and doors; avoid concrete floors and walls during lightning.</li>
<li>Do not shelter under isolated trees or hold metal objects outdoors.</li>
<li>Unplug sensitive electronics before a storm if time permits.</li>
<li>After a storm, watch for downed power lines — assume they are live.</li>
<li>Use IMD colour-coded warnings: yellow = be aware, orange = be prepared, red = take action.</li>
</ul>`,
      },
      {
        id: "air",
        title: "Air quality and dust",
        html: `<ul>
<li>During severe smog, stay indoors, close windows, and run a purifier if you have one.</li>
<li>Wear an N95/FFP2 mask outdoors, fitted to the face.</li>
<li>Avoid outdoor exercise; keep children and the elderly indoors.</li>
<li>During dust storms, seal gaps and cover food and water.</li>
</ul>
<p>Related: <a href="heatwave.html">Heatwave</a> · <a href="air-quality.html">Air quality</a> · <a href="cyclone.html">Cyclone</a> · <a href="first-aid.html">First aid</a></p>`,
      },
    ],
    related: [
      ["heatwave", "Heatwave"],
      ["air-quality", "Air quality"],
      ["first-aid", "First aid"],
    ],
  },
  {
    slug: "hygiene",
    title: "Hygiene Without Running Water",
    shortTitle: "Hygiene",
    category: "survival",
    summary:
      "Keep hands, body, laundry and living areas clean when taps, toilets and waste collection fail.",
    readTime: "6 min read",
    intro: `<p>In disasters, <strong>disease spreads faster than anything else</strong>. Hand hygiene and safe waste management prevent more illness than any medicine you can store. Plan for hygiene as seriously as food.</p>`,
    checklist: [
      "Soap in every kit and at every water point",
      "A tippy-tap or hand-wash station",
      "Sanitary supplies for all household members",
      "A covered waste bin and a latrine plan",
      "Nail clippers, toothbrushes, towels",
      "Disinfectant or bleach",
    ],
    sections: [
      {
        id: "hands",
        title: "Hand hygiene",
        html: `<p>Wash hands with soap and water for at least 20 seconds:</p>
<ul>
<li>Before preparing or eating food</li>
<li>After using the toilet or changing a child</li>
<li>After handling waste, animals or flood water</li>
<li>After coughing, sneezing or caring for a sick person</li>
</ul>
<p>If water is scarce, use a tippy-tap: a container with a small hole and a string-operated lever that releases a trickle. Soap and a small amount of water beat hand sanitiser when hands are visibly dirty. Use alcohol sanitiser (60%+) only when hands are not visibly soiled.</p>`,
      },
      {
        id: "body",
        title: "Body and dental care",
        html: `<ul>
<li>Sponge-bathe with a small amount of water; prioritise face, hands, armpits and groin.</li>
<li>Brush teeth with safe water; do not swallow.</li>
<li>Keep nails short to reduce infection and dirt.</li>
<li>Wash and dry feet daily; damp feet lead to fungal infection and trench foot.</li>
<li>Wash menstrual cloths thoroughly, dry in direct sun, and dispose of pads safely.</li>
<li>Keep clothing dry; change socks often.</li>
</ul>`,
      },
      {
        id: "laundry",
        title: "Laundry and cleaning",
        html: `<ul>
<li>Wash clothing in a bucket with a small amount of detergent, agitate, rinse, and dry in sun.</li>
<li>Prioritise underwear, socks and anything soiled.</li>
<li>Sunlight is a disinfectant; hang items in direct sun.</li>
<li>Clean high-touch surfaces (handles, switches, phones) with diluted bleach or soap.</li>
<li>Separate cleaning cloths by area; do not use the toilet cloth on dishes.</li>
</ul>`,
      },
      {
        id: "waste",
        title: "Waste and pests",
        html: `<ul>
<li>Keep food waste in covered bins away from living areas; empty daily.</li>
<li>Bury or bag waste if collection stops; never dump near water sources.</li>
<li>Control flies and mosquitoes: screens, nets, and standing-water removal.</li>
<li>Store food in sealed containers; keep grains off the floor.</li>
<li>Wash hands after any waste handling and wear gloves if available.</li>
</ul>
<p>Related: <a href="sanitation.html">Sanitation</a> · <a href="water.html">Water</a> · <a href="animals.html">Animals</a></p>`,
      },
    ],
    related: [
      ["sanitation", "Sanitation"],
      ["water", "Water"],
      ["animals", "Animals"],
    ],
  },
  {
    slug: "animals",
    title: "Animals, Snakebite & Pests",
    shortTitle: "Animals",
    category: "survival",
    summary:
      "Snakebite and rabies first aid, pet and livestock care in emergencies, and keeping pests out of your supplies.",
    readTime: "7 min read",
    intro: `<p>India has some of the world's highest snakebite and rabies burdens. Most encounters are avoidable. Know the first aid that helps and the myths that harm.</p>`,
    checklist: [
      "Know the nearest antivenom-equipped hospital",
      "Torch for walking at night",
      "Closed shoes and long trousers for outdoor work",
      "Pet vaccination and emergency kit",
      "Safe, sealed food storage",
    ],
    sections: [
      {
        id: "snake",
        title: "Snakebite",
        html: `${figure(
          svg("diagrams/snakebite-card.svg"),
          "<strong>Snakebite quick card.</strong> Print and keep it with your first-aid kit. The only effective treatment is antivenom in hospital."
        )}
${callout(
          "danger",
          "Do this — and only this",
          "<p>Call 112 or get to a hospital immediately. Keep the person still and calm, immobilise the bitten limb at or below heart level, remove rings and tight items, and note the time of the bite. Do not cut, suck, burn, tourniquet or apply ice.</p>"
        )}
<ul>
<li>Most Indian bites occur at night, on the lower leg, in rural areas and during monsoon.</li>
<li>Use a torch, wear closed shoes, and shake out bedding and footwear before use.</li>
<li>Do not try to catch or kill the snake; a photo from a safe distance helps treatment.</li>
<li>Antivenom is the only effective treatment and is given in hospital.</li>
<li>Watch for swelling, bleeding, drooping eyelids, difficulty breathing or paralysis — these are emergencies.</li>
</ul>`,
      },
      {
        id: "rabies",
        title: "Animal bites and rabies",
        html: `<ul>
<li>Wash the wound immediately with soap and running water for <strong>15 minutes</strong>.</li>
<li>Apply an antiseptic (povidone-iodine) and cover loosely.</li>
<li>Go to a hospital or anti-rabies clinic the same day. Rabies is fatal once symptoms start, but post-exposure vaccination is highly effective if started promptly.</li>
<li>Do not apply chilli, ash, turmeric or herbal pastes to the wound.</li>
<li>Note the animal, its behaviour, and whether it is vaccinated; report stray bites to local authorities.</li>
</ul>`,
      },
      {
        id: "pets",
        title: "Pets in emergencies",
        html: `<ul>
<li>Prepare a pet go-bag: 7 days of food, water, bowls, leash, carrier, medications, vaccination record and a photo.</li>
<li>Keep pets indoors during storms and civil unrest; never leave them tied outside.</li>
<li>Microchip and tag pets; keep a current photo on your phone.</li>
<li>Identify pet-friendly shelters or boarding before you need them.</li>
<li>Comfort animals during displacement — they show stress through hiding, pacing and refusal to eat.</li>
</ul>`,
      },
      {
        id: "pests",
        title: "Pests and disease vectors",
        html: `<ul>
<li>Remove standing water to control mosquitoes; use nets and repellent.</li>
<li>Keep grains and dry food in sealed metal or thick plastic containers.</li>
<li>Set traps rather than poison where children and pets are present.</li>
<li>Wear gloves when handling dead animals and disinfect afterwards.</li>
<li>Rats and cockroaches signal sanitation problems — clean, seal entry points and remove food sources.</li>
</ul>
<p>Related: <a href="sanitation.html">Sanitation</a> · <a href="hygiene.html">Hygiene</a> · <a href="first-aid.html">First aid</a></p>`,
      },
    ],
    related: [
      ["first-aid", "First aid"],
      ["sanitation", "Sanitation"],
      ["hygiene", "Hygiene"],
    ],
  },
  {
    slug: "sanitation",
    title: "Sanitation & Waste",
    shortTitle: "Sanitation",
    category: "survival",
    summary:
      "Emergency toilets, waste handling and disease prevention when plumbing and collection stop working.",
    readTime: "7 min read",
    intro: `<p>When toilets stop flushing, human waste becomes the fastest route to disease. Plan a latrine <strong>before</strong> the emergency, and keep it well away from water sources and food.</p>`,
    checklist: [
      "A bucket toilet or trench plan",
      "Lime, ash or sawdust for covering waste",
      "Soap and hand-wash station beside the latrine",
      "Gloves and a dedicated waste bin",
      "A plan for menstrual and medical waste",
    ],
    sections: [
      {
        id: "latrine",
        title: "Emergency latrines",
        html: `${figure(
  svg("diagrams/latrine.svg"),
  "<strong>Latrine siting rules.</strong> Distance from water and shelter matters more than the design."
)}
<ul>
<li><strong>Distance:</strong> at least 30 m from wells and surface water, and downhill from them.</li>
<li><strong>Depth:</strong> 1–1.2 m; cover each use with soil, ash or lime.</li>
<li><strong>Privacy:</strong> a screen, curtain or tarp.</li>
<li><strong>Hand-washing:</strong> soap and water immediately beside the exit path.</li>
<li><strong>Never:</strong> site latrines in flood paths or near kitchens.</li>
</ul>`,
      },
      {
        id: "bucket",
        title: "Bucket toilets indoors",
        html: `<p>For apartment dwellers and people sheltering in place:</p>
<ul>
<li>Use a sturdy bucket with a fitted lid and a toilet seat if possible.</li>
<li>Line with a strong bag; add sawdust, ash or cat litter after each use to control smell and moisture.</li>
<li>Separate urine where possible — it can be diluted and used on non-edible plants.</li>
<li>Empty only into a designated disposal point, never into storm drains or open ground near water.</li>
<li>Clean the bucket with disinfectant after each emptying and wash hands.</li>
</ul>`,
      },
      {
        id: "waste",
        title: "Solid waste",
        html: `<ul>
<li>Separate food waste, recyclables and hazardous waste (batteries, medical sharps).</li>
<li>Bag and tie waste; store away from living and food areas.</li>
<li>Bury food waste at least 30 m from water if collection has stopped.</li>
<li>Sharps go in a rigid container with a lid; never in loose bags.</li>
<li>Medical waste from caring for a sick person should be bagged separately and disposed of per local guidance.</li>
</ul>`,
      },
      {
        id: "disease",
        title: "Preventing outbreaks",
        html: `<ul>
<li>Water, sanitation and hygiene are one system — protect all three together.</li>
<li>Watch for diarrhoea clusters; treat dehydration with ORS and seek care.</li>
<li>Isolate sick household members where possible and use separate utensils.</li>
<li>Disinfect surfaces and bedding; wash hands constantly.</li>
<li>Report unusual illness clusters to local health authorities.</li>
</ul>
<p>Related: <a href="hygiene.html">Hygiene</a> · <a href="water.html">Water</a> · <a href="pandemic.html">Pandemic</a></p>`,
      },
    ],
    related: [
      ["hygiene", "Hygiene"],
      ["water", "Water"],
      ["pandemic", "Pandemic"],
    ],
  },
];

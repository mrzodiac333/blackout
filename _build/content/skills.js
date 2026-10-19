const { callout, table } = require("../render");

module.exports = [
  {
    slug: "crafting",
    title: "Crafting & Repair",
    shortTitle: "Crafting",
    category: "skills",
    summary:
      "Cordage, fire starters, shelter building, tool repair, sewing and repurposing — practical skills that multiply what you already own.",
    readTime: "9 min read",
    intro: `<p>Crafting in a crisis is about <strong>making what you need from what you have</strong>. Prioritise skills that use common materials and can be practised now: cordage, repair, fire, containers and shelter.</p>`,
    checklist: [
      "Learn three knots and practise them monthly",
      "Keep a repair kit: needle, thread, wire, tape, glue, zip ties",
      "Store raw materials: cord, cloth, plastic sheeting, timber offcuts",
      "Practise one craft per month",
      "Teach a household member each skill",
    ],
    sections: [
      {
        id: "cordage",
        title: "Cordage and knots",
        html: `<ul>
<li><strong>Paracord</strong> is strong, reusable and cheap; keep 30 m in your kit.</li>
<li><strong>Natural cordage:</strong> nettle fibre, inner bark, and braided grass are workable but slow to make.</li>
<li><strong>Three-knot baseline:</strong> bowline (fixed loop), taut-line hitch (adjustable tension), and sheet bend (join two ropes).</li>
<li>Inspect cord for abrasion and UV damage; retire damaged cord.</li>
</ul>`,
      },
      {
        id: "fire",
        title: "Fire starters and char cloth",
        html: `<ul>
<li><strong>Char cloth:</strong> cotton cloth baked in a sealed tin over a fire until black; catches a spark easily.</li>
<li><strong>Petroleum-jelly cotton balls</strong> light reliably and burn for minutes.</li>
<li><strong>Ferro rod</strong> works wet and lasts for thousands of strikes; practise before you need it.</li>
<li><strong>Magnesium block</strong> shavings ignite with a spark.</li>
<li>Store tinder in a waterproof container and keep a lighter in every kit.</li>
</ul>`,
      },
      {
        id: "repair",
        title: "Repair skills",
        html: `<ul>
<li><strong>Sewing:</strong> buttons, seams, patches and gear repair; a heavy needle and waxed thread handle canvas.</li>
<li><strong>Electrical:</strong> replacing plugs, splicing wires, soldering; always disconnect power first.</li>
<li><strong>Plumbing:</strong> washers, tape and pipe clamps fix most leaks.</li>
<li><strong>Woodwork:</strong> basic joints, wedges and handles.</li>
<li><strong>Metalwork:</strong> filing, drilling and simple bending; rivets and bolts beat glue for load-bearing repairs.</li>
<li><strong>Tape:</strong> duct tape and self-amalgamating tape fix an astonishing range of problems.</li>
</ul>`,
      },
      {
        id: "repurpose",
        title: "Repurposing safely",
        html: `<ul>
<li><strong>Containers:</strong> food-grade plastic only for food and water; never use chemical drums.</li>
<li><strong>Metal cans:</strong> watch for sharp edges and lead solder; do not cook in cans with plastic linings.</li>
<li><strong>Tires:</strong> excellent for sandals and fire rings; burning them releases toxic smoke.</li>
<li><strong>Plastic bottles:</strong> cloches, funnels, drip irrigation; avoid using heated plastic for food.</li>
<li><strong>Timber:</strong> never burn treated or painted wood indoors — toxic fumes.</li>
</ul>
<p>Related: <a href="ropework.html">Ropework</a> · <a href="sewing-repair.html">Sewing and repair</a> · <a href="food-production.html">Food production</a></p>`,
      },
    ],
    related: [
      ["ropework", "Ropework"],
      ["sewing-repair", "Sewing and repair"],
      ["fire", "Fire"],
    ],
  },
  {
    slug: "security",
    title: "Security & Self-Defence",
    shortTitle: "Security",
    category: "skills",
    summary:
      "Home hardening, situational awareness, alarms, community coordination, de-escalation and legal self-defence — without weapons or vigilantism.",
    readTime: "10 min read",
    intro: `<p>Security in a crisis is mostly <strong>avoidance, awareness and community</strong>. Violence is rare but panic, rumours and opportunism are not. Plan to be boring, prepared and connected.</p>
${callout(
  "warning",
  "Legal and ethical",
  "<p>This guide does not provide weapon-making instructions. In India, firearms and many weapons are tightly regulated. Self-defence law permits reasonable force in imminent danger — it does not permit revenge, traps or vigilante violence. Follow the law.</p>"
)}`,
    checklist: [
      "Locks, lights and visibility checked",
      "Neighbours known and a contact group formed",
      "A safe room or rally point identified",
      "Emergency numbers saved and written",
      "Family code word for verifying identity",
      "No weapons beyond legal, safe self-defence tools",
    ],
    sections: [
      {
        id: "awareness",
        title: "Situational awareness",
        html: `<ul>
<li>Know your exits wherever you are; identify two ways out.</li>
<li>Watch for behaviour, not appearance: loitering, following, unusual interest in your home.</li>
<li>Avoid crowds, protests and checkpoints; move around, not through.</li>
<li>Trust unease; leave early rather than explain later.</li>
<li>Keep your routines less predictable; vary routes and times.</li>
<li>Limit what you post online about supplies, travel and valuables — see <a href="opsec-privacy.html">opsec</a>.</li>
</ul>`,
      },
      {
        id: "home",
        title: "Hardening your home",
        html: `<ul>
<li>Solid doors with deadbolts, security bars on ground-floor windows, and good lighting.</li>
<li>Trim bushes that hide entry points; keep the perimeter visible.</li>
<li>Use timers and motion lights to make the house look occupied.</li>
<li>Keep gates locked, tools and ladders secured, and fuel stored out of sight.</li>
<li>Install a door chain and peephole; verify identity before opening.</li>
<li>Prepare a safe room with water, a phone, a torch and a first-aid kit.</li>
<li>Know how to shut off gas and power in an emergency.</li>
</ul>`,
      },
      {
        id: "community",
        title: "Neighbourhood coordination",
        html: `<ul>
<li>Exchange phone numbers with immediate neighbours; create a simple WhatsApp or SMS group.</li>
<li>Agree on a check-in time and a signal for "I need help".</li>
<li>Map who has medical skills, tools, vehicles, generators or vulnerable members.</li>
<li>Organise a shared watch only if it is safe and lawful; never confront armed strangers.</li>
<li>Share information cautiously; rumours cause more harm than shortages.</li>
<li>Plan for pets and vulnerable neighbours.</li>
</ul>`,
      },
      {
        id: "deescalate",
        title: "De-escalation and self-defence",
        html: `<ul>
<li><strong>Avoid</strong> confrontation whenever possible; distance is the best defence.</li>
<li>Speak calmly, keep hands visible, and do not corner anyone.</li>
<li>Give an aggressor a way out; do not humiliate them.</li>
<li>If attacked, use the minimum force needed to escape and get help — then report it.</li>
<li>Legal self-defence tools in India are limited; carry a torch, whistle or personal alarm rather than an illegal weapon.</li>
<li>Never set traps, booby-traps or electrified fences — they are illegal and often hurt the innocent.</li>
</ul>
${callout(
  "note",
  "If you are followed",
  "Cross the street, enter a shop or public place, call someone, and head toward people and light. Do not go home until you are sure you are not being followed."
)}`,
      },
      {
        id: "scams",
        title: "Scams and misinformation",
        html: `<ul>
<li>Be sceptical of urgent demands for money, donations or personal information.</li>
<li>Verify relief offers through official channels.</li>
<li>Do not share OTPs, bank details or copies of documents with strangers.</li>
<li>Check forwarding-chain messages before acting; official alerts come from official sources.</li>
<li>Report price gouging and fraud to local authorities.</li>
</ul>
<p>Related: <a href="opsec-privacy.html">Opsec and privacy</a> · <a href="community.html">Community</a> · <a href="family-plan.html">Family plan</a></p>`,
      },
    ],
    related: [
      ["opsec-privacy", "Opsec and privacy"],
      ["community", "Community"],
      ["family-plan", "Family plan"],
    ],
  },
  {
    slug: "navigation",
    title: "Navigation Without GPS",
    shortTitle: "Navigation",
    category: "skills",
    summary:
      "Read a paper map, use a compass, navigate by sun and stars, and plan routes when GPS or phones fail.",
    readTime: "8 min read",
    intro: `<p>GPS is convenient but fragile. A paper map, a compass and basic skills get you home when batteries die or networks fail. Learn to navigate in your own city first.</p>`,
    checklist: [
      "Paper map of your city and region",
      "Baseplate compass",
      "Offline maps downloaded on your phone",
      "Known evacuation routes and landmarks",
      "A written route plan for your family",
    ],
    sections: [
      {
        id: "map",
        title: "Reading a map",
        html: `<ul>
<li><strong>Scale:</strong> 1:50,000 means 1 cm = 500 m. Check the scale bar.</li>
<li><strong>North:</strong> orient the map so north is up, or use the compass to set it.</li>
<li><strong>Contours:</strong> closer lines mean steeper ground; V-shapes point upstream.</li>
<li><strong>Grid references:</strong> read easting then northing; practise with your local map.</li>
<li><strong>Landmarks:</strong> towers, rivers, railway lines and major roads are reliable; shops and signs change.</li>
</ul>`,
      },
      {
        id: "compass",
        title: "Compass basics",
        html: `<ol>
<li>Hold the compass level, away from metal and magnets.</li>
<li>Let the needle settle; the red end points magnetic north.</li>
<li>Rotate the bezel to set your bearing.</li>
<li>Turn your body until the orienting arrow aligns with the needle.</li>
<li>Follow the direction-of-travel arrow.</li>
</ol>
<p>Magnetic declination varies across India; check your map's declination note. A smartphone compass can help but is unreliable near metal and when the battery dies.</p>`,
      },
      {
        id: "natural",
        title: "Natural navigation",
        html: `<ul>
<li><strong>Sun:</strong> rises roughly east, sets roughly west; at noon it is roughly south in India.</li>
<li><strong>Shadows:</strong> mark a shadow tip, wait 15 minutes, mark again — the line runs roughly east–west.</li>
<li><strong>Stars:</strong> Polaris (the North Star) sits nearly due north; find it from the Big Dipper.</li>
<li><strong>Moon:</strong> not reliable for direction; use it only as a rough guide.</li>
<li><strong>Land:</strong> moss and moisture are not reliable direction indicators — do not depend on them.</li>
</ul>`,
      },
      {
        id: "route",
        title: "Route planning",
        html: `<ul>
<li>Plan two routes: a primary and a backup, with printed turn-by-turn notes.</li>
<li>Estimate time generously; add 50% for crowds, weather and carrying loads.</li>
<li>Identify water, shelter and medical points along the route.</li>
<li>Set a turnaround time; tell someone your route and expected arrival.</li>
<li>Mark your position on the map as you go; keep the map dry.</li>
<li>If lost: stop, think, observe, plan. Do not wander. Follow water downstream to settlements only if safe.</li>
</ul>
<p>Related: <a href="transport.html">Transport and evacuation</a> · <a href="signaling-rescue.html">Signalling</a> · <a href="offline-library.html">Offline library</a></p>`,
      },
    ],
    related: [
      ["transport", "Transport"],
      ["signaling-rescue", "Signalling and rescue"],
      ["offline-library", "Offline library"],
    ],
  },
  {
    slug: "food-production",
    title: "Food Production",
    shortTitle: "Food production",
    category: "skills",
    summary:
      "Gardening, seed saving, composting, small livestock and fishing for longer-term food security.",
    readTime: "8 min read",
    intro: `<p>Stored food runs out. Growing food takes months, so start <strong>before</strong> you need it. Even a balcony can produce greens, herbs and tomatoes; a small plot can supplement a household.</p>`,
    checklist: [
      "Seeds for easy crops: greens, beans, tomatoes, chillies",
      "Compost bin or pile",
      "Water source and a watering plan",
      "Basic tools: spade, hoe, watering can",
      "A local seed-saving or gardening group",
    ],
    sections: [
      {
        id: "garden",
        title: "Starting a garden",
        html: `<ul>
<li><strong>Sun:</strong> most vegetables need 6+ hours of direct light.</li>
<li><strong>Soil:</strong> loose, dark and crumbly; add compost generously.</li>
<li><strong>Water:</strong> deep watering less often beats shallow daily watering.</li>
<li><strong>Easy crops:</strong> spinach, methi, coriander, beans, tomatoes, chillies, radish, pumpkin.</li>
<li><strong>Containers:</strong> 30 cm depth for greens and herbs; deeper for tomatoes and root crops.</li>
<li><strong>Mulch:</strong> reduces evaporation and weeds — critical in Indian heat.</li>
</ul>`,
      },
      {
        id: "seeds",
        title: "Seed saving",
        html: `<ul>
<li>Save from open-pollinated (non-hybrid) plants for reliable seed.</li>
<li>Choose the healthiest plants; let seeds mature fully on the plant.</li>
<li>Dry seeds thoroughly and store in a cool, dark, dry place with a desiccant.</li>
<li>Label with crop, variety and year.</li>
<li>Avoid saving seed from diseased plants; rotate crops to prevent soil-borne disease.</li>
</ul>`,
      },
      {
        id: "compost",
        title: "Composting",
        html: `<ul>
<li>Mix greens (kitchen scraps, fresh leaves) with browns (dry leaves, cardboard, straw).</li>
<li>Keep it as damp as a wrung-out sponge; turn weekly for faster compost.</li>
<li>Do not compost meat, dairy, oily food or diseased plants.</li>
<li>Bury food scraps in a trench if you have no bin — it builds soil directly.</li>
<li>Compost needs 2–3 months in warm weather.</li>
</ul>`,
      },
      {
        id: "livestock",
        title: "Small livestock and fishing",
        html: `<ul>
<li><strong>Chickens:</strong> eggs and pest control; need secure housing against predators and a daily routine.</li>
<li><strong>Goats:</strong> milk and brush control; a serious daily commitment.</li>
<li><strong>Bees:</strong> honey and pollination; requires training and calm handling.</li>
<li><strong>Fishing:</strong> a line, hooks and local knowledge beat elaborate gear. Follow local laws and avoid polluted water.</li>
<li><strong>Trapping:</strong> only legal, humane traps for food; never set traps where children or pets can reach them.</li>
</ul>
<p>Related: <a href="food.html">Food</a> · <a href="water.html">Water</a> · <a href="community.html">Community</a></p>`,
      },
    ],
    related: [
      ["food", "Food"],
      ["water", "Water"],
      ["community", "Community"],
    ],
  },
  {
    slug: "ropework",
    title: "Ropework & Knots",
    shortTitle: "Ropework",
    category: "skills",
    summary:
      "Six knots that cover most survival needs, plus basic rope care and improvised lashing.",
    readTime: "6 min read",
    intro: `<p>A handful of knots, practised until they are automatic, is worth more than a bag of fancy hardware. Learn these with a 2 m length of cord today.</p>`,
    checklist: [
      "2–5 m of 6–8 mm cord",
      "Practise each knot five times",
      "Know the failure modes",
      "Store rope dry and coiled",
    ],
    sections: [
      {
        id: "knots",
        title: "The essential six",
        html: `${table(
          "Knots to learn first.",
          ["Knot", "Use", "Watch out"],
          [
            ["Bowline", "Fixed loop that will not slip", "Learn the one-handed method"],
            ["Taut-line hitch", "Adjustable tension on a line", "Slips under heavy load"],
            ["Sheet bend", "Join two ropes of different thickness", "Use a double sheet bend for safety"],
            ["Clove hitch", "Quick attachment to a post", "Can slip; back it up"],
            ["Round turn and two half hitches", "Secure a line under load", "Best for tying off"],
            ["Figure-eight", "Stopper knot at rope end", "Prevents rope running through gear"],
          ]
        )}`,
      },
      {
        id: "care",
        title: "Rope care",
        html: `<ul>
<li>Inspect for cuts, glazing and UV damage; retire compromised rope.</li>
<li>Coil loosely and hang; avoid knots stored under tension.</li>
<li>Keep synthetic rope away from heat and sharp edges.</li>
<li>Wash dirty rope in lukewarm water and dry in shade.</li>
<li>Use the right rope: static for hauling, dynamic for climbing loads.</li>
</ul>`,
      },
      {
        id: "lashing",
        title: "Improvised lashing",
        html: `<ul>
<li><strong>Square lashing:</strong> joins two poles at right angles.</li>
<li><strong>Diagonal lashing:</strong> braces an X-frame.</li>
<li><strong>Shear lashing:</strong> makes an A-frame for a tripod or shelter.</li>
<li>Use wet rawhide or paracord and tighten progressively; finish with frapping turns.</li>
<li>Test any structure with light loads before trusting it.</li>
</ul>
<p>Related: <a href="crafting.html">Crafting</a> · <a href="shelter.html">Shelter</a> · <a href="sewing-repair.html">Sewing and repair</a></p>`,
      },
    ],
    related: [
      ["crafting", "Crafting"],
      ["shelter", "Shelter"],
      ["sewing-repair", "Sewing and repair"],
    ],
  },
  {
    slug: "sewing-repair",
    title: "Sewing & Gear Repair",
    shortTitle: "Sewing & repair",
    category: "skills",
    summary:
      "Hand-sewing, patching, zipper and tent repair, and keeping footwear and clothing functional.",
    readTime: "6 min read",
    intro: `<p>Clothing and gear fail at the worst time. Basic repair skills keep you warm, dry and mobile — and are easy to learn now.</p>`,
    checklist: [
      "Needles, thread, thimble, scissors",
      "Patches and seam sealant",
      "Spare buttons and zipper pulls",
      "Shoe glue and cord for laces",
      "A small repair kit in every bag",
    ],
    sections: [
      {
        id: "basics",
        title: "Hand-sewing basics",
        html: `<ul>
<li><strong>Running stitch:</strong> quick seams and basting.</li>
<li><strong>Backstitch:</strong> strong seam for repairs.</li>
<li><strong>Whip stitch:</strong> joining edges and patching.</li>
<li><strong>Button:</strong> use a spacer (toothpick) to leave thread room.</li>
<li>Use waxed thread for canvas and outdoor gear; knot the end and finish with a few backstitches.</li>
</ul>`,
      },
      {
        id: "gear",
        title: "Outdoor gear repair",
        html: `<ul>
<li><strong>Tent tears:</strong> clean and dry the area, apply a patch with seam grip, and press flat.</li>
<li><strong>Zippers:</strong> rub with candle wax or graphite; replace sliders with a kit.</li>
<li><strong>Sleeping pads:</strong> patch with the supplied kit; clean with alcohol first.</li>
<li><strong>Backpacks:</strong> reinforce stress points with a bar tack or heavy stitching.</li>
<li><strong>Waterproofing:</strong> reapply DWR or seam sealant as needed.</li>
</ul>`,
      },
      {
        id: "footwear",
        title: "Footwear and clothing",
        html: `<ul>
<li>Re-glue separating soles with proper shoe adhesive; clamp overnight.</li>
<li>Replace worn laces with paracord or strong cord.</li>
<li>Patch trousers at the knee before they tear further.</li>
<li>Keep feet dry: change socks, dry boots slowly away from direct heat.</li>
<li>Layer clothing; repair insulation before cold weather.</li>
</ul>
<p>Related: <a href="crafting.html">Crafting</a> · <a href="ropework.html">Ropework</a> · <a href="shelter.html">Shelter</a></p>`,
      },
    ],
    related: [
      ["crafting", "Crafting"],
      ["ropework", "Ropework"],
      ["shelter", "Shelter"],
    ],
  },
  {
    slug: "weather-signs",
    title: "Reading Weather Without Forecasts",
    shortTitle: "Weather signs",
    category: "skills",
    summary:
      "Use clouds, wind, pressure and animal behaviour to anticipate weather — and know IMD's colour codes.",
    readTime: "6 min read",
    intro: `<p>Forecasts are better than folklore, but when the network is down, the sky still tells you a lot. Learn the basics and keep a barometer if you can.</p>`,
    checklist: [
      "Battery radio for IMD bulletins",
      "Barometer or altimeter app",
      "Knowledge of local seasonal patterns",
      "A safe place to shelter",
    ],
    sections: [
      {
        id: "clouds",
        title: "Clouds and wind",
        html: `<ul>
<li><strong>Cumulonimbus</strong> (tall, anvil-topped): thunderstorms, hail, heavy rain — shelter early.</li>
<li><strong>Cirrus</strong> thickening and lowering: a front may be approaching within 12–24 hours.</li>
<li><strong>Dark, low clouds with gusty wind:</strong> squall or storm imminent.</li>
<li><strong>Wind shifting and strengthening</strong> often precedes a storm; note direction changes.</li>
<li><strong>Calm, humid and oppressive</strong> conditions can precede severe thunderstorms.</li>
</ul>`,
      },
      {
        id: "pressure",
        title: "Pressure and humidity",
        html: `<ul>
<li>Falling pressure generally means worsening weather; a rapid fall warns of a storm.</li>
<li>Rising pressure usually means improving weather.</li>
<li>High humidity, fog and dew point close to temperature increase fog and rain likelihood.</li>
<li>A barometer trend is more useful than a single reading.</li>
</ul>`,
      },
      {
        id: "imd",
        title: "IMD alerts",
        html: `${table(
          "IMD colour-coded warnings.",
          ["Colour", "Meaning", "Action"],
          [
            ["Green", "No severe weather expected", "Normal activity"],
            ["Yellow", "Be aware", "Monitor updates; secure loose items"],
            ["Orange", "Be prepared", "Prepare to shelter; avoid travel if possible"],
            ["Red", "Take action", "Shelter, follow official instructions, avoid travel"],
          ]
        )}
<p>IMD issues warnings for cyclones, heavy rain, thunderstorms, heatwaves, cold waves and fog. Check <a href="https://mausam.imd.gov.in" rel="noopener">mausam.imd.gov.in</a> when connectivity exists.</p>`,
      },
      {
        id: "local",
        title: "Local signs and limits",
        html: `<ul>
<li>Ants moving nests, birds flying low, and livestock seeking shelter are weak but sometimes useful signs.</li>
<li>Folk sayings vary by region and are not reliable for severe weather.</li>
<li>Do not rely on a single sign — combine observations with official warnings.</li>
<li>In coastal areas, know cyclone season and evacuation routes; a storm surge is the biggest killer.</li>
</ul>
<p>Related: <a href="climate.html">Heat and weather</a> · <a href="cyclone.html">Cyclone</a> · <a href="flood.html">Flood</a></p>`,
      },
    ],
    related: [
      ["climate", "Heat and weather"],
      ["cyclone", "Cyclone"],
      ["flood", "Flood"],
    ],
  },
  {
    slug: "signaling-rescue",
    title: "Signalling & Rescue",
    shortTitle: "Signalling",
    category: "skills",
    summary:
      "Attract attention when lost or trapped: visual signals, sound, radio, and ground-to-air markers.",
    readTime: "6 min read",
    intro: `<p>Rescue depends on being <strong>found</strong>. Stay put when you can, make yourself visible, and conserve energy and water. Signal consistently — three of anything is the universal distress signal.</p>`,
    checklist: [
      "Whistle around your neck",
      "Torch or mirror",
      "High-visibility clothing or bright cloth",
      "Knowledge of your location",
      "A written message left at your last known point",
    ],
    sections: [
      {
        id: "rules",
        title: "The rules of three",
        html: `<ul>
<li>Three whistle blasts, three flashes, three fires — distress.</li>
<li>Six blasts per minute, then a minute's pause, is the international distress pattern.</li>
<li>Respond to another signal with the same pattern to acknowledge.</li>
<li>Conserve energy; do not shout continuously.</li>
</ul>`,
      },
      {
        id: "visual",
        title: "Visual signals",
        html: `<ul>
<li><strong>Mirror:</strong> flash sunlight toward aircraft or searchers; visible for kilometres.</li>
<li><strong>Torch:</strong> flash SOS at night; conserve battery.</li>
<li><strong>Bright cloth:</strong> tie to a high point or spread on open ground.</li>
<li><strong>Smoke:</strong> white smoke for day (green leaves), black smoke for snow; build three fires.</li>
<li><strong>Ground markers:</strong> large letters or symbols cleared in snow/sand; use international symbols (V = need help, X = need medical help).</li>
</ul>`,
      },
      {
        id: "sound",
        title: "Sound and radio",
        html: `<ul>
<li>A whistle carries farther than a voice and costs little energy.</li>
<li>Bang pots or use a torch strobe to attract attention.</li>
<li>If you have a licensed radio, transmit on a recognised emergency frequency and follow net instructions.</li>
<li>If unlicensed, do not transmit on amateur or public-safety bands; use a phone, whistle or visual signals.</li>
<li>Leave a written note with your name, time, direction and condition.</li>
</ul>`,
      },
      {
        id: "rescue",
        title: "Being rescued safely",
        html: `<ul>
<li>Stay put once you have signalled; rescuers search where you were.</li>
<li>Make yourself visible and keep signalling until contact.</li>
<li>Do not approach helicopters from the rear; follow crew signals and secure loose items.</li>
<li>Conserve water and food; rest and stay warm.</li>
<li>If trapped, cover your mouth and nose, tap on structures in threes, and avoid shouting for long periods.</li>
</ul>
<p>Related: <a href="navigation.html">Navigation</a> · <a href="fire.html">Fire</a> · <a href="communication.html">Communication</a></p>`,
      },
    ],
    related: [
      ["navigation", "Navigation"],
      ["fire", "Fire"],
      ["communication", "Communication"],
    ],
  },
  {
    slug: "fitness-morale",
    title: "Fitness, Morale & Daily Life",
    shortTitle: "Fitness & morale",
    category: "skills",
    summary:
      "Stay physically capable and mentally steady through a prolonged disruption: movement, sleep, play and purpose.",
    readTime: "6 min read",
    intro: `<p>Endurance is a survival skill. Fitness makes evacuation, carrying water and recovery easier; morale keeps a household functioning. Both are built before the emergency.</p>`,
    checklist: [
      "30 minutes of daily movement",
      "A sleep routine",
      "Games, books and music stored offline",
      "A daily household routine",
      "Roles and purpose for everyone",
    ],
    sections: [
      {
        id: "fitness",
        title: "Fitness for real tasks",
        html: `<ul>
<li><strong>Walking:</strong> build to 5–10 km with a loaded backpack.</li>
<li><strong>Carrying:</strong> practise lifting and carrying water containers safely.</li>
<li><strong>Strength:</strong> squats, push-ups, rows and core work; bodyweight is enough.</li>
<li><strong>Mobility:</strong> stretch hips, shoulders and back daily.</li>
<li><strong>Swimming:</strong> a life-saving skill in flood-prone regions.</li>
<li>Train in heat and cold gradually; hydrate and pace.</li>
</ul>`,
      },
      {
        id: "sleep",
        title: "Sleep and recovery",
        html: `<ul>
<li>Protect 7–9 hours; sleep debt impairs judgement.</li>
<li>Keep a consistent bedtime even in a shelter.</li>
<li>Use earplugs and an eye mask; darkness matters.</li>
<li>Avoid caffeine late in the day and alcohol as a sleep aid.</li>
<li>Nap strategically if night duties are shared.</li>
</ul>`,
      },
      {
        id: "morale",
        title: "Morale and routine",
        html: `<ul>
<li>Keep a daily rhythm: wake, meals, chores, rest, check-in, wind down.</li>
<li>Give everyone a meaningful role — children included.</li>
<li>Celebrate small wins and mark birthdays and festivals.</li>
<li>Tell stories, play cards, listen to music, read aloud.</li>
<li>Limit doom-scrolling; set two information checks per day.</li>
<li>Laugh when you can. It genuinely helps.</li>
</ul>`,
      },
      {
        id: "purpose",
        title: "Purpose and community",
        html: `<ul>
<li>Helping others reduces helplessness and builds trust.</li>
<li>Share skills: teaching is one of the best ways to learn.</li>
<li>Plan for the future, even small plans — they signal hope.</li>
<li>Check on people living alone and include them.</li>
</ul>
<p>Related: <a href="mental-health.html">Mental health</a> · <a href="community.html">Community</a> · <a href="family-plan.html">Family plan</a></p>`,
      },
    ],
    related: [
      ["mental-health", "Mental health"],
      ["community", "Community"],
      ["family-plan", "Family plan"],
    ],
  },
  {
    slug: "opsec-privacy",
    title: "Opsec & Privacy",
    shortTitle: "Opsec",
    category: "skills",
    summary:
      "Protect your family's information, location and supplies — and avoid becoming a target during disruption.",
    readTime: "6 min read",
    intro: `<p>Operational security is about <strong>not advertising</strong> what you have or where you are. It is not paranoia; it is basic risk reduction in uncertain times.</p>`,
    checklist: [
      "Social media privacy reviewed",
      "No public posts about supplies or travel plans",
      "Documents backed up securely",
      "Family agreed on what not to share",
      "Device passwords and backups",
    ],
    sections: [
      {
        id: "digital",
        title: "Digital hygiene",
        html: `<ul>
<li>Do not post real-time locations, supply hauls or evacuation plans.</li>
<li>Disable location tagging on photos and social posts.</li>
<li>Use strong, unique passwords and two-factor authentication.</li>
<li>Keep offline backups of important documents.</li>
<li>Be careful with QR codes and links in forwarded messages.</li>
<li>Use encrypted messaging where appropriate; know that no system is perfect.</li>
</ul>`,
      },
      {
        id: "physical",
        title: "Physical security",
        html: `<ul>
<li>Keep supplies out of sight from windows and visitors.</li>
<li>Do not discuss stockpiles with acquaintances.</li>
<li>Secure fuel, tools and generators.</li>
<li>Vary routines and avoid showing cash or valuables.</li>
<li>Know your neighbours; mutual trust is better than secrecy alone.</li>
</ul>`,
      },
      {
        id: "family",
        title: "Family agreement",
        html: `<ul>
<li>Agree what information is private: supplies, routes, meeting points, medical details.</li>
<li>Teach children not to share plans with strangers or online.</li>
<li>Use a code word to verify identity if someone claims to be sent by family.</li>
<li>Keep a list of who knows what, so information does not leak by accident.</li>
</ul>`,
      },
      {
        id: "balance",
        title: "Balance with community",
        html: `<p>Total secrecy isolates you. In a real crisis, trusted neighbours are a lifeline. Share what is necessary for mutual aid, keep the rest private, and build relationships before you need them.</p>
<p>Related: <a href="security.html">Security</a> · <a href="community.html">Community</a> · <a href="documents-finance.html">Documents and money</a></p>`,
      },
    ],
    related: [
      ["security", "Security"],
      ["community", "Community"],
      ["documents-finance", "Documents and money"],
    ],
  },
];

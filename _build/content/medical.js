const { callout, table, figure } = require("../render");
const fs = require("fs");
const path = require("path");
const svg = (name) =>
  fs.readFileSync(path.join(__dirname, "..", "..", "assets", "img", name), "utf8");

const disclaimer = callout(
  "danger",
  "This is not medical training",
  "<p>Read this to recognise emergencies and act until help arrives — not to replace a certified course. Take a Red Cross or St John Ambulance first-aid and CPR class. Never perform procedures you have not been trained for.</p>"
);

module.exports = [
  {
    slug: "medical",
    title: "Medical: Prepare, Recognise, Respond",
    shortTitle: "Medical",
    category: "medical",
    summary:
      "The medical hub: what to learn, what to store, and how to handle emergencies when professional care is delayed.",
    readTime: "6 min read",
    intro: `<p>Medical preparedness has three parts: <strong>training</strong>, <strong>supplies</strong> and <strong>records</strong>. Training matters most — a well-stocked kit is useless without the skill to use it. This hub links to the detailed guides.</p>
${disclaimer}`,
    checklist: [
      "Take a certified first-aid and CPR/AED course",
      "Build a home medical kit and a portable kit",
      "Keep 30 days of regular prescription medicines if possible",
      "Write a medical record for every household member",
      "Know the nearest hospital, trauma centre and anti-rabies clinic",
      "Learn to control severe bleeding",
    ],
    sections: [
      {
        id: "learn",
        title: "What to learn first",
        html: `<ol>
<li><strong>Severe bleeding control</strong> — direct pressure, wound packing, tourniquet (with training).</li>
<li><strong>CPR and AED use.</strong></li>
<li><strong>Choking relief</strong> for adults, children and infants.</li>
<li><strong>Recovery position</strong> for an unconscious but breathing person.</li>
<li><strong>Burns, fractures and sprains.</strong></li>
<li><strong>Recognising shock, stroke and heart attack.</strong></li>
<li><strong>Anaphylaxis and auto-injector use</strong> if anyone in the household has severe allergies.</li>
</ol>`,
      },
      {
        id: "kit",
        title: "Medical kit",
        html: `${table(
          "A practical household kit. Add prescription medicines and specialised items as needed.",
          ["Category", "Items"],
          [
            ["Bleeding & wounds", "Sterile gauze, bandages, elastic wrap, medical tape, antiseptic, saline, tweezers, scissors, gloves"],
            ["Tools", "Thermometer, BP cuff (if trained), torch, pen and paper, CPR face shield"],
            ["Medicines (OTC)", "Pain/fever relief, ORS, antihistamine, antiseptic cream, anti-diarrhoeal — follow labels"],
            ["Burns", "Cool water, sterile non-stick dressings, cling film"],
            ["Fractures", "Splint materials, triangular bandages, instant cold packs"],
            ["Hygiene", "Soap, hand sanitiser, waste bags, sharps container"],
            ["Records", "Medication list, allergies, emergency contacts, vaccination records"],
          ]
        )}
${callout(
  "warning",
  "Medicine caution",
  "<p>Do not stockpile antibiotics without a doctor's guidance. Incorrect use causes resistance and can harm. Never give prescription medicines to someone they were not prescribed for.</p>"
)}`,
      },
      {
        id: "emergencies",
        title: "When to call 112",
        html: `<ul>
<li>Chest pain, difficulty breathing, or sudden weakness on one side of the body</li>
<li>Severe bleeding that does not stop with pressure</li>
<li>Unconsciousness, seizure, or a head injury with confusion</li>
<li>Severe burns, electrocution, or a fall from height</li>
<li>Snakebite, animal bite, or suspected poisoning</li>
<li>Labour complications, severe abdominal pain, or a high fever in an infant</li>
</ul>
<p>Call early. In a wide-area emergency, lines may be congested — keep trying and send someone for help.</p>`,
      },
      {
        id: "guides",
        title: "Detailed guides",
        html: `<ul>
<li><a href="first-aid.html">First aid basics</a> — bleeding, CPR, choking, burns, fractures, shock.</li>
<li><a href="wound-care.html">Wound care</a> — cleaning, dressing, infection signs.</li>
<li><a href="medications.html">Medications</a> — stockpiling, storage, records.</li>
<li><a href="dental-eye.html">Dental and eye care</a> — pain, trauma, hygiene.</li>
<li><a href="mental-health.html">Mental health</a> — stress, grief, sleep.</li>
<li><a href="vulnerable-groups.html">Vulnerable groups</a> — children, elderly, disabled, pregnancy.</li>
<li><a href="emergency-childbirth.html">Emergency childbirth</a> — recognition and immediate support only.</li>
</ul>`,
      },
    ],
    related: [
      ["first-aid", "First aid"],
      ["medications", "Medications"],
      ["vulnerable-groups", "Vulnerable groups"],
    ],
  },
  {
    slug: "first-aid",
    title: "First Aid Basics",
    shortTitle: "First aid",
    category: "medical",
    summary:
      "Life-saving basics: severe bleeding, CPR, choking, burns, fractures, shock and the recovery position.",
    readTime: "11 min read",
    intro: `<p>In the first minutes, simple actions save lives. Learn these skills hands-on, then use this page as a refresher.</p>
${disclaimer}`,
    checklist: [
      "Scene safety checked before helping",
      "112 called or directed",
      "Gloves or barrier used",
      "Bleeding controlled",
      "Breathing and responsiveness checked",
      "Recovery position or CPR as needed",
    ],
    sections: [
      {
        id: "card",
        title: "Quick reference card",
        html: `${figure(
          svg("diagrams/first-aid-card.svg"),
          "<strong>Print this card</strong> and keep a copy in every first-aid kit and go-bag. It summarises the actions below; it does not replace training."
        )}`,
      },
      {
        id: "approach",
        title: "Approach and primary survey",
        html: `<ol>
<li><strong>Safety:</strong> traffic, fire, electricity, unstable structures, animals. Do not become a second casualty.</li>
<li><strong>Response:</strong> shout and tap the shoulders.</li>
<li><strong>Airway:</strong> open the airway; look for obvious obstruction.</li>
<li><strong>Breathing:</strong> look, listen, feel for up to 10 seconds.</li>
<li><strong>Circulation:</strong> check for severe bleeding.</li>
<li><strong>Call 112</strong> and send for an AED if available.</li>
</ol>
${callout(
  "note",
  "Consent",
  "Identify yourself and ask for consent if the person is conscious. If unconscious, proceed under implied consent."
)}`,
      },
      {
        id: "bleeding",
        title: "Severe bleeding",
        html: `<ol>
<li>Put on gloves if available.</li>
<li>Apply <strong>firm direct pressure</strong> with a sterile dressing or clean cloth.</li>
<li>Do not lift the dressing to check; add more layers if it soaks through.</li>
<li>If bleeding continues from a limb and you are trained, apply a tourniquet 5–7 cm above the wound, tighten until bleeding stops, and note the time.</li>
<li>Keep the person warm and lying down; treat for shock.</li>
<li>Get to hospital immediately.</li>
</ol>
${callout(
  "danger",
  "Do not",
  "<p>Do not remove an embedded object — pad around it. Do not use a tourniquet on the neck or head. Do not loosen a tourniquet once applied unless medical staff tell you to.</p>"
)}`,
      },
      {
        id: "cpr",
        title: "CPR and AED",
        html: `<p>For an adult who is unresponsive and not breathing normally:</p>
<ol>
<li>Call 112 and get an AED.</li>
<li>Place the heel of your hand in the centre of the chest; interlock fingers.</li>
<li>Push hard and fast — 5–6 cm deep, 100–120 compressions per minute.</li>
<li>Allow full recoil between compressions.</li>
<li>If trained, give 2 rescue breaths after every 30 compressions; if not, continue compressions only.</li>
<li>Use the AED as soon as it arrives and follow its voice prompts.</li>
<li>Continue until help arrives, the person starts breathing, or you are exhausted.</li>
</ol>
<p>For children and infants, use one hand or two fingers and gentler depth; follow the AED prompts. Hands-only CPR is appropriate if you are untrained or unwilling to give breaths.</p>`,
      },
      {
        id: "choking",
        title: "Choking",
        html: `<p><strong>Adult or child conscious:</strong> encourage coughing. If the airway is blocked, give up to 5 back blows between the shoulder blades, then up to 5 abdominal thrusts (Heimlich). Alternate until the object clears or the person becomes unresponsive, then start CPR.</p>
<p><strong>Infant:</strong> 5 back blows face-down on your forearm, then 5 chest thrusts with two fingers. Do not use abdominal thrusts on infants.</p>
<p><strong>Unconscious:</strong> call 112, start CPR, and check the mouth for visible objects only.</p>`,
      },
      {
        id: "burns",
        title: "Burns",
        html: `<ol>
<li>Stop the burning: remove the source, smother flames, or rinse chemicals with copious water.</li>
<li>Cool the burn with <strong>cool running water for 20 minutes</strong>; never use ice.</li>
<li>Remove jewellery and clothing that is not stuck to the skin.</li>
<li>Cover with a sterile non-stick dressing or cling film.</li>
<li>Do not pop blisters or apply toothpaste, butter, oil or turmeric.</li>
<li>Seek care for burns larger than the person's palm, burns on the face, hands, feet, joints or genitals, electrical burns, chemical burns, or any burn in a child or elderly person.</li>
</ol>
${callout(
  "danger",
  "Electrical burns",
  "<p>Switch off the power before touching the person. Electrical burns can cause internal injury and heart rhythm problems — always seek medical care.</p>"
)}`,
      },
      {
        id: "fractures",
        title: "Fractures, sprains and head injury",
        html: `<h3>Fractures</h3>
<ul>
<li>Do not move a suspected spinal injury unless there is immediate danger.</li>
<li>Support the limb in the position found; immobilise with a splint extending beyond the joints above and below.</li>
<li>Check circulation beyond the injury (colour, warmth, pulse) before and after splinting.</li>
<li>Apply cold packs wrapped in cloth for 15–20 minutes for sprains; elevate and rest.</li>
</ul>
<h3>Head injury</h3>
<p>Seek emergency care for any loss of consciousness, vomiting, worsening headache, confusion, unequal pupils, clear fluid from nose/ears, or seizures. Keep the person still and monitor breathing.</p>`,
      },
      {
        id: "shock",
        title: "Shock and the recovery position",
        html: `<p><strong>Shock signs:</strong> pale, cold, clammy skin; rapid weak pulse; rapid breathing; thirst; confusion; anxiety.</p>
<ul>
<li>Lay the person down and raise the legs unless a spinal or leg injury is suspected.</li>
<li>Keep warm with blankets; do not overheat.</li>
<li>Do not give food or drink.</li>
<li>Control bleeding and treat the cause; call 112.</li>
</ul>
<p><strong>Recovery position</strong> for an unconscious but breathing person: lie on the side, lower arm forward, upper leg bent, head tilted slightly back, mouth downward to allow drainage. Monitor breathing continuously.</p>
<p>Related: <a href="wound-care.html">Wound care</a> · <a href="medical.html">Medical hub</a> · <a href="emergency-contacts.html">Emergency contacts</a></p>`,
      },
    ],
    related: [
      ["wound-care", "Wound care"],
      ["medical", "Medical hub"],
      ["emergency-contacts", "Emergency contacts"],
    ],
  },
  {
    slug: "wound-care",
    title: "Wound Care & Infection",
    shortTitle: "Wound care",
    category: "medical",
    summary:
      "Clean, dress and monitor wounds when medical care is delayed — and know the signs that demand evacuation.",
    readTime: "8 min read",
    intro: `<p>Most wounds heal with thorough cleaning and protection. Infection is the main danger when care is delayed. Clean early, cover properly, and check daily.</p>
${disclaimer}`,
    checklist: [
      "Clean water and soap for wound washing",
      "Sterile dressings and saline",
      "Gloves and a sharps container",
      "Tetanus vaccination status known",
      "Daily wound check",
    ],
    sections: [
      {
        id: "clean",
        title: "Cleaning a wound",
        html: `<ol>
<li>Wash your hands and put on gloves.</li>
<li>Stop bleeding with direct pressure.</li>
<li>Rinse the wound with clean running water or saline for several minutes; use soap around the wound.</li>
<li>Remove visible dirt with clean tweezers; do not dig deep into tissue.</li>
<li>Apply an antiseptic (povidone-iodine or chlorhexidine) around the wound edges.</li>
<li>Cover with a sterile non-stick dressing; change daily or when wet/soiled.</li>
</ol>
${callout(
  "warning",
  "Do not",
  "<p>Do not pour hydrogen peroxide or alcohol into deep wounds — it damages tissue. Do not close deep, dirty or bite wounds yourself. Do not use cotton wool directly on the wound; fibres stick.</p>"
)}`,
      },
      {
        id: "types",
        title: "Special wounds",
        html: `${table(
          "Wound types and priorities.",
          ["Type", "Key action"],
          [
            ["Deep cut with fat/muscle visible", "Control bleeding, cover, evacuate for closure"],
            ["Puncture", "Clean, do not close, check tetanus status"],
            ["Animal bite", "Wash 15 minutes with soap and water, antiseptic, same-day rabies care"],
            ["Burn", "Cool 20 minutes, non-stick dressing, no ice or toothpaste"],
            ["Crush injury", "Control bleeding, immobilise, watch for shock, evacuate"],
            ["Embedded object", "Do not remove; pad around and stabilise"],
          ]
        )}`,
      },
      {
        id: "infection",
        title: "Infection warning signs",
        html: `<ul>
<li>Increasing pain, swelling, redness or warmth</li>
<li>Pus or foul smell</li>
<li>Red streaks spreading from the wound</li>
<li>Fever or chills</li>
<li>Swollen lymph nodes</li>
<li>Worsening general condition or confusion</li>
</ul>
<p>Any of these means <strong>seek medical care immediately</strong>. Do not try to treat spreading infection with leftover antibiotics.</p>`,
      },
      {
        id: "tetanus",
        title: "Tetanus and vaccination",
        html: `<p>Tetanus is caused by bacteria in soil and manure entering wounds. It is preventable by vaccination and can be fatal. Check your tetanus status before an emergency; booster doses are recommended every 10 years. Deep or dirty wounds may need a booster within 48 hours — see a doctor.</p>`,
      },
      {
        id: "evacuate",
        title: "When to evacuate",
        html: `<ul>
<li>Bleeding you cannot control</li>
<li>Deep or gaping wounds needing closure</li>
<li>Wounds with embedded objects or significant contamination</li>
<li>Bites, especially from unvaccinated animals</li>
<li>Any sign of infection or fever</li>
<li>Burns beyond minor size, or on sensitive areas</li>
<li>Loss of movement, sensation or circulation beyond the wound</li>
</ul>
<p>Related: <a href="first-aid.html">First aid</a> · <a href="medications.html">Medications</a> · <a href="emergency-contacts.html">Emergency contacts</a></p>`,
      },
    ],
    related: [
      ["first-aid", "First aid"],
      ["medications", "Medications"],
      ["hygiene", "Hygiene"],
    ],
  },
  {
    slug: "medications",
    title: "Medications & Prescriptions",
    shortTitle: "Medications",
    category: "medical",
    summary:
      "Stock, store and track essential medicines safely — without prescribing or self-medicating.",
    readTime: "7 min read",
    intro: `<p>For people with chronic conditions, medicines are survival equipment. Plan a buffer, store them correctly, and keep records. This page is about <strong>management</strong>, not prescribing.</p>
${disclaimer}`,
    checklist: [
      "Current medication list with doses",
      "30-day buffer of essential medicines where legally possible",
      "Cool, dry, dark storage",
      "Expiry dates recorded and rotated",
      "A plan for refrigerated medicines",
    ],
    sections: [
      {
        id: "stock",
        title: "Building a buffer",
        html: `<ul>
<li>Ask your doctor for a longer prescription where appropriate and legal.</li>
<li>Refill early enough to build a gradual buffer — never skip doses to stockpile.</li>
<li>Keep at least 7 days in your go-bag and 30 days at home if possible.</li>
<li>Include over-the-counter essentials: ORS, pain/fever relief, antihistamine, antiseptic.</li>
<li>Keep a copy of prescriptions and a doctor's letter for controlled medicines.</li>
</ul>
${callout(
  "warning",
  "Controlled medicines",
  "<p>Some medicines are legally restricted. Stockpiling or transporting them without documentation can be illegal. Follow your doctor's and pharmacist's guidance.</p>"
)}`,
      },
      {
        id: "storage",
        title: "Storage and expiry",
        html: `<ul>
<li>Store below 25 °C, away from light and moisture — not in a bathroom.</li>
<li>Keep medicines in original labelled containers.</li>
<li>Record expiry dates; use older stock first.</li>
<li>Most tablets remain effective past expiry but potency declines; do not rely on expired medicines for serious conditions. Never use expired insulin, liquids, or antibiotics.</li>
<li>Dispose of medicines safely — not down the drain; use a pharmacy take-back scheme where available.</li>
</ul>
<h3>Refrigerated medicines</h3>
<p>Insulin and some biologics need 2–8 °C. During outages, use a cooler with ice packs and a thermometer; do not freeze. Have a plan with a neighbour, clinic or pharmacy.</p>`,
      },
      {
        id: "records",
        title: "Medication records",
        html: `<p>Keep a written card for each person, in the wallet and in the go-bag:</p>
<ul>
<li>Name, blood group, allergies</li>
<li>Conditions and current medicines with doses and times</li>
<li>Prescribing doctor and pharmacy contacts</li>
<li>Vaccination history</li>
<li>Emergency contact</li>
</ul>
<p>Photograph the cards and store the images offline on your phone.</p>`,
      },
      {
        id: "safety",
        title: "Using medicines safely",
        html: `<ul>
<li>Follow the prescribed dose exactly; do not double up after a missed dose unless your doctor says so.</li>
<li>Check for interactions with alcohol and other medicines.</li>
<li>Do not share prescription medicines.</li>
<li>Do not use antibiotics without a prescription — resistance and side effects are serious.</li>
<li>If someone has a reaction (rash, swelling, breathing difficulty), stop the medicine and seek urgent care.</li>
</ul>
<p>Related: <a href="medical.html">Medical hub</a> · <a href="power.html">Power for refrigeration</a> · <a href="documents-finance.html">Documents</a></p>`,
      },
    ],
    related: [
      ["medical", "Medical hub"],
      ["power", "Power"],
      ["documents-finance", "Documents and money"],
    ],
  },
  {
    slug: "dental-eye",
    title: "Dental & Eye Care",
    shortTitle: "Dental & eye",
    category: "medical",
    summary:
      "Manage toothache, dental trauma and eye injuries when a dentist or ophthalmologist is not available.",
    readTime: "6 min read",
    intro: `<p>Dental and eye problems are rarely fatal but can become disabling. The goal is to <strong>reduce pain, prevent infection and preserve the tooth or eye</strong> until professional care is possible.</p>
${disclaimer}`,
    checklist: [
      "Salt, clove oil and a small dental kit",
      "Eye wash/saline and sterile pads",
      "Safety glasses for work",
      "Pain relief per label",
      "Knowledge of the nearest dental and eye hospital",
    ],
    sections: [
      {
        id: "tooth",
        title: "Toothache and dental infection",
        html: `<ul>
<li>Rinse with warm salt water; floss gently to remove trapped food.</li>
<li>Apply clove oil on a cotton pledget near the tooth for temporary relief.</li>
<li>Use over-the-counter pain relief per the label.</li>
<li>Cold compress for swelling; do not apply heat to a swollen face.</li>
<li>See a dentist as soon as possible. Facial swelling, fever or difficulty swallowing or breathing is an emergency — go to hospital.</li>
</ul>`,
      },
      {
        id: "trauma",
        title: "Knocked-out tooth",
        html: `<ol>
<li>Handle the tooth by the crown, not the root.</li>
<li>Rinse gently with saline or milk; do not scrub.</li>
<li>If an adult tooth, reinsert into the socket and bite gently on gauze; if you cannot, store it in milk or saline.</li>
<li>Get to a dentist within 30–60 minutes.</li>
<li>Do not reinsert baby teeth.</li>
</ol>`,
      },
      {
        id: "eye",
        title: "Eye injuries",
        html: `<ul>
<li><strong>Chemical splash:</strong> rinse with clean water or saline for at least 15–20 minutes, from the inner corner outward, and seek urgent care. Remove contact lenses if present.</li>
<li><strong>Foreign object:</strong> do not rub. Try flushing; if the object is embedded or on the cornea, do not remove it — cover both eyes lightly and seek care.</li>
<li><strong>Blunt trauma:</strong> cold compress, do not press on the eye, seek care.</li>
<li><strong>Penetrating injury:</strong> do not remove the object; cover with a rigid shield (a paper cup) and go to hospital immediately.</li>
</ul>`,
      },
      {
        id: "prevention",
        title: "Prevention and hygiene",
        html: `<ul>
<li>Wear safety glasses when cutting, drilling or handling chemicals.</li>
<li>Do not share towels or eye drops.</li>
<li>Wash hands before touching your eyes.</li>
<li>Replace toothbrushes after illness; store upright and separate.</li>
<li>Limit sugary snacks between meals; rinse with water after eating when brushing is impossible.</li>
</ul>
<p>Related: <a href="hygiene.html">Hygiene</a> · <a href="first-aid.html">First aid</a> · <a href="vulnerable-groups.html">Vulnerable groups</a></p>`,
      },
    ],
    related: [
      ["hygiene", "Hygiene"],
      ["first-aid", "First aid"],
      ["medical", "Medical hub"],
    ],
  },
  {
    slug: "mental-health",
    title: "Mental Health in Crisis",
    shortTitle: "Mental health",
    category: "medical",
    summary:
      "Understand stress reactions, support people through loss, protect sleep, and know when to seek professional help.",
    readTime: "7 min read",
    intro: `<p>Disasters produce fear, anger, grief and exhaustion. These are normal responses to abnormal events. What protects people is <strong>connection, routine, information and rest</strong> — not toughness.</p>`,
    checklist: [
      "A daily routine, even a simple one",
      "Regular contact with family and friends",
      "Sleep and hydration protected",
      "A plan for children and vulnerable people",
      "Helpline numbers saved: 14416 (Tele-MANAS)",
    ],
    sections: [
      {
        id: "reactions",
        title: "Common stress reactions",
        html: `<ul>
<li>Anxiety, irritability, anger, numbness</li>
<li>Difficulty sleeping, nightmares, fatigue</li>
<li>Poor concentration and memory</li>
<li>Headaches, stomach upset, appetite changes</li>
<li>Withdrawal from others</li>
<li>Increased alcohol or substance use</li>
</ul>
<p>Most reactions ease over days to weeks with support. They are not weakness.</p>`,
      },
      {
        id: "support",
        title: "Supporting others",
        html: `<ul>
<li><strong>Be present.</strong> Listen without forcing someone to talk.</li>
<li><strong>Practical help</strong> — water, food, a phone call, childcare — matters more than advice.</li>
<li><strong>Keep information honest</strong> and age-appropriate, especially with children.</li>
<li><strong>Reunite families</strong> as soon as possible; separation is a major stressor.</li>
<li><strong>Watch for people at higher risk:</strong> those bereaved, injured, isolated, or with prior mental illness.</li>
<li><strong>Do not</strong> tell people to "just be strong" or compare their suffering to others'.</li>
</ul>`,
      },
      {
        id: "children",
        title: "Children and adolescents",
        html: `<ul>
<li>Give simple, honest explanations; avoid graphic details.</li>
<li>Maintain routines — meals, bedtime, schoolwork, play.</li>
<li>Allow extra closeness and reassurance.</li>
<li>Limit media exposure to the disaster.</li>
<li>Watch for regression (bedwetting, clinginess), aggression, sleep problems or withdrawal; seek help if persistent.</li>
</ul>`,
      },
      {
        id: "help",
        title: "When to get professional help",
        html: `<p>Seek help promptly if someone:</p>
<ul>
<li>Talks about suicide or self-harm</li>
<li>Cannot function for more than two weeks</li>
<li>Stops eating or sleeping for days</li>
<li>Shows severe agitation or confusion</li>
<li>Increases alcohol or drug use</li>
<li>Experiences hallucinations or paranoia</li>
</ul>
<p>India: <strong>Tele-MANAS 14416</strong> (24×7, free). In immediate danger, call <strong>112</strong>. Never leave a person at risk of suicide alone; remove access to means and stay with them.</p>
${callout(
  "success",
  "Small things that help",
  "<p>Sleep, water, food, movement, sunlight, a routine, and one person who listens. Repeat them daily.</p>"
)}`,
      },
    ],
    related: [
      ["community", "Community"],
      ["vulnerable-groups", "Vulnerable groups"],
      ["fitness-morale", "Fitness and morale"],
    ],
  },
  {
    slug: "vulnerable-groups",
    title: "Vulnerable Groups",
    shortTitle: "Vulnerable groups",
    category: "medical",
    summary:
      "Planning for children, older adults, people with disabilities, pregnant women and those with chronic illness.",
    readTime: "8 min read",
    intro: `<p>Standard plans fail the people who need them most. Build your household plan around the person with the <strong>greatest needs</strong>, not the average adult.</p>
${disclaimer}`,
    checklist: [
      "A written care plan for each vulnerable person",
      "Extra medication, food and water for their needs",
      "Mobility and communication aids with spares",
      "A named caregiver and a backup",
      "Evacuation practice including them",
    ],
    sections: [
      {
        id: "children",
        title: "Children",
        html: `<ul>
<li>Store formula, bottles, nappies and wipes for at least two weeks.</li>
<li>Keep oral rehydration salts and a thermometer.</li>
<li>Maintain routines and reassure; children read adult anxiety closely.</li>
<li>Practise meeting points and who to call.</li>
<li>Keep a current photo and identification in their bag.</li>
</ul>`,
      },
      {
        id: "elderly",
        title: "Older adults",
        html: `<ul>
<li>Extra medications, glasses, hearing-aid batteries and mobility aids.</li>
<li>Consider heat and cold sensitivity; check on them twice daily in extreme weather.</li>
<li>Keep a list of conditions, allergies and doctors.</li>
<li>Plan for moving someone with limited mobility — identify helpers in advance.</li>
<li>Social isolation is a health risk; include them in planning and daily contact.</li>
</ul>`,
      },
      {
        id: "disability",
        title: "People with disabilities",
        html: `<ul>
<li>Ask the person what they need; do not assume.</li>
<li>Store spare batteries, chargers, catheters, hearing-aid supplies or other consumables.</li>
<li>Plan accessible evacuation routes and transport.</li>
<li>Keep a communication card if speech is affected.</li>
<li>Ensure shelters and toilets are accessible; advocate if they are not.</li>
</ul>`,
      },
      {
        id: "pregnancy",
        title: "Pregnancy and infants",
        html: `<ul>
<li>Know the nearest hospital with maternity services and a backup.</li>
<li>Keep antenatal records, medications and a delivery kit.</li>
<li>Plan transport that works at any hour; identify a neighbour with a vehicle.</li>
<li>For infants: formula, sterile bottles, nappies, blankets, ORS.</li>
<li>Signs needing urgent care: bleeding, severe headache, blurred vision, reduced fetal movement, contractions before term, fever.</li>
<li>See <a href="emergency-childbirth.html">emergency childbirth</a> for immediate support only — it is not a substitute for maternity care.</li>
</ul>`,
      },
      {
        id: "chronic",
        title: "Chronic illness",
        html: `<ul>
<li>Keep a 30-day medicine buffer where possible and a written care plan.</li>
<li>Store devices and supplies: glucose meter, inhaler, oxygen, dialysis information.</li>
<li>Know which hospitals can provide your treatment.</li>
<li>Wear a medical ID or carry a card.</li>
<li>Include your condition in the family plan and tell your support network.</li>
</ul>
<p>Related: <a href="medications.html">Medications</a> · <a href="family-plan.html">Family plan</a> · <a href="emergency-childbirth.html">Emergency childbirth</a></p>`,
      },
    ],
    related: [
      ["medications", "Medications"],
      ["family-plan", "Family plan"],
      ["emergency-childbirth", "Emergency childbirth"],
    ],
  },
  {
    slug: "emergency-childbirth",
    title: "Emergency Childbirth: Immediate Support",
    shortTitle: "Emergency childbirth",
    category: "medical",
    summary:
      "What to do if birth is imminent before help arrives. Support and safety only — not a substitute for maternity care.",
    readTime: "6 min read",
    intro: `${callout(
      "danger",
      "Call for help first",
      "<p>Call 112 or your local emergency number immediately. This page covers only immediate support when birth is imminent and help cannot arrive in time. It is not a childbirth course. Complications require professional care.</p>"
    )}
<p>Birth can progress faster than expected, especially in a second or later pregnancy. Prepare a clean space, keep the mother warm and calm, and do not pull on the baby.</p>`,
    checklist: [
      "Emergency number called",
      "Clean towels, gloves, warm blankets",
      "Clean surface and good lighting",
      "Transport plan ready",
      "Mother kept warm and calm",
    ],
    sections: [
      {
        id: "signs",
        title: "Signs birth is imminent",
        html: `<ul>
<li>Regular contractions less than 2 minutes apart</li>
<li>Strong urge to push</li>
<li>Bulging or visible baby's head at the vaginal opening</li>
<li>Waters broken with strong contractions</li>
</ul>
<p>If any of these are present, do not try to travel far; call for help and prepare to support birth where you are.</p>`,
      },
      {
        id: "support",
        title: "Supporting the birth",
        html: `<ol>
<li>Wash hands and wear gloves if available. Prepare clean towels and a warm, dry space.</li>
<li>Help the mother into a comfortable position; encourage slow breathing and pushing with contractions.</li>
<li>As the head appears, support it gently with a clean cloth. <strong>Do not pull.</strong></li>
<li>After the head delivers, check whether the cord is around the neck; if so, gently slip it over the head.</li>
<li>Support the body as it delivers; the baby will be wet and slippery.</li>
<li>Dry the baby immediately with a clean towel, cover the head, and place skin-to-skin on the mother's chest.</li>
<li>Note the time of birth. Do not cut the cord unless trained and the baby is stable; if you must, use a sterile tie and clean blade.</li>
<li>Keep the mother and baby warm; encourage breastfeeding if both are well.</li>
</ol>`,
      },
      {
        id: "urgent",
        title: "When to get urgent help",
        html: `<ul>
<li>Heavy bleeding after birth</li>
<li>Baby not breathing or not crying after drying and stimulation</li>
<li>Cord prolapse (cord comes out before the baby)</li>
<li>Baby's arm or foot appears first</li>
<li>Labour lasting many hours with no progress</li>
<li>Mother confused, pale, or with a seizure</li>
<li>Fever or foul-smelling discharge</li>
</ul>
<p>For a baby not breathing: call for help, dry and stimulate, and begin newborn resuscitation if trained. Keep the baby warm — hypothermia kills newborns quickly.</p>`,
      },
      {
        id: "after",
        title: "After birth",
        html: `<ul>
<li>Keep mother and baby warm and together; skin-to-skin regulates the baby's temperature.</li>
<li>Monitor bleeding; massage the lower abdomen if trained and bleeding is heavy.</li>
<li>Give fluids and food to the mother; rest is essential.</li>
<li>Watch for infection signs in both mother and baby.</li>
<li>Get professional postnatal care as soon as possible — check the baby, the mother and feeding.</li>
</ul>
<p>Related: <a href="vulnerable-groups.html">Vulnerable groups</a> · <a href="first-aid.html">First aid</a> · <a href="emergency-contacts.html">Emergency contacts</a></p>`,
      },
    ],
    related: [
      ["vulnerable-groups", "Vulnerable groups"],
      ["first-aid", "First aid"],
      ["emergency-contacts", "Emergency contacts"],
    ],
  },
];

(function () {
  "use strict";

  function $(id) {
    return document.getElementById(id);
  }
  function num(id, fallback) {
    var el = $(id);
    var v = el ? parseFloat(el.value) : NaN;
    return isNaN(v) ? fallback : v;
  }
  function fmt(n, digits) {
    return Number(n).toLocaleString("en-IN", { maximumFractionDigits: digits === undefined ? 1 : digits });
  }
  function out(id, html) {
    var el = $(id);
    if (el) el.innerHTML = html;
  }

  /* ---------- Water ---------- */
  function water() {
    var people = num("w-people", 4);
    var days = num("w-days", 14);
    var litres = num("w-litres", 10);
    var total = people * days * litres;
    var cans = Math.ceil(total / 20);
    out(
      "w-out",
      "<strong>" + fmt(total, 0) + " litres</strong> total for " + fmt(people, 0) + " people over " + fmt(days, 0) + " days.<br>" +
        "That is about <strong>" + cans + "</strong> standard 20-litre cans.<br>" +
        "Drinking minimum at 3 L/person/day: <strong>" + fmt(people * days * 3, 0) + " litres</strong>."
    );
  }

  /* ---------- Food ---------- */
  function food() {
    var people = num("f-people", 4);
    var days = num("f-days", 14);
    var kcal = num("f-kcal", 2100);
    var totalKcal = people * days * kcal;
    var kgRice = (totalKcal * 0.5) / 3600;
    var kgDal = (totalKcal * 0.2) / 3400;
    var kgOil = (totalKcal * 0.15) / 8800;
    out(
      "f-out",
      "<strong>" + fmt(totalKcal / 1000, 1) + " Mcal</strong> total (" + fmt(totalKcal, 0) + " kcal).<br>" +
        "Rough split if 50% rice, 20% dal, 15% oil:<br>" +
        "Rice ≈ <strong>" + fmt(kgRice, 1) + " kg</strong> · Dal ≈ <strong>" + fmt(kgDal, 1) + " kg</strong> · Oil ≈ <strong>" + fmt(kgOil, 1) + " kg</strong>.<br>" +
        "Add vegetables, spices, milk powder and treats for nutrition and morale."
    );
  }

  /* ---------- Power ---------- */
  var powerRows = $("power-rows");
  function addRow(name, watts, hours) {
    if (!powerRows) return;
    var row = document.createElement("div");
    row.className = "field-row";
    row.style.marginBottom = ".6rem";
    row.innerHTML =
      '<div class="field"><label>Device</label><input type="text" class="p-name" value="' + (name || "Device") + '"></div>' +
      '<div class="field"><label>Watts</label><input type="number" class="p-watts" min="0" step="1" value="' + (watts || 10) + '"></div>' +
      '<div class="field"><label>Hours/day</label><input type="number" class="p-hours" min="0" max="24" step="0.5" value="' + (hours || 2) + '"></div>' +
      '<div class="field" style="align-self:end"><button class="btn btn--small" type="button" data-remove>Remove</button></div>';
    powerRows.appendChild(row);
    row.querySelector("[data-remove]").addEventListener("click", function () {
      row.remove();
      power();
    });
    row.querySelectorAll("input").forEach(function (i) {
      i.addEventListener("input", power);
    });
  }
  function power() {
    if (!powerRows) return;
    var wh = 0;
    powerRows.querySelectorAll(".p-watts").forEach(function (w, i) {
      var h = powerRows.querySelectorAll(".p-hours")[i];
      wh += (parseFloat(w.value) || 0) * (parseFloat(h.value) || 0);
    });
    var battery = wh / 0.5;
    out(
      "p-out",
      "<strong>" + fmt(wh, 0) + " Wh/day</strong> estimated use.<br>" +
        "Suggested battery (50% usable): <strong>" + fmt(battery, 0) + " Wh</strong> ≈ " + fmt(battery / 12, 1) + " Ah at 12 V.<br>" +
        "Solar to recharge in 4 peak hours: at least <strong>" + fmt(wh / 4 / 0.7, 0) + " W</strong> of panel."
    );
  }
  if (powerRows) {
    addRow("Phone charging", 10, 2);
    addRow("LED lamp", 5, 5);
    addRow("Radio", 3, 6);
    var addBtn = $("power-add");
    if (addBtn) addBtn.addEventListener("click", function () { addRow(); power(); });
  }

  /* ---------- Antenna ---------- */
  function antenna() {
    var f = num("a-freq", 146);
    var type = $("a-type") ? $("a-type").value : "dipole";
    if (f <= 0) return;
    var m = 0;
    var label = "";
    if (type === "dipole") { m = 143 / f; label = "Half-wave dipole total length"; }
    else if (type === "leg") { m = 143 / f / 2; label = "Each dipole leg"; }
    else if (type === "quarter") { m = 71.5 / f; label = "Quarter-wave vertical"; }
    else if (type === "jpole") { m = 143 / f; label = "J-pole long radiator"; }
    else if (type === "yagi") { m = 143 / f * 0.95; label = "Yagi driven element"; }
    out(
      "a-out",
      "<strong>" + label + ": " + fmt(m, 3) + " m</strong> (" + fmt(m * 100, 1) + " cm).<br>" +
        "Cut 2–3% long and trim for lowest SWR. Height and surroundings affect tuning.<br>" +
        "Wavelength: " + fmt(300 / f, 2) + " m."
    );
  }

  /* ---------- Go bag ---------- */
  function gobag() {
    var people = num("g-people", 2);
    var days = num("g-days", 3);
    var pets = num("g-pets", 0);
    var water = people * days * 3;
    var food = people * days * 2;
    var items = [
      water + " L drinking water (" + Math.ceil(water / 20) + " × 20 L cans)",
      food + " meals (ready-to-eat or no-cook)",
      "Battery/hand-crank radio + spare cells",
      "Torch or headlamp per person + spare batteries",
      "Power bank, cables, charger",
      "First-aid kit and personal medicines",
      "Copies of documents in a waterproof bag",
      "Cash in small notes",
      "Whistle, multitool, duct tape, cord",
      "Warm layer, rain shell, spare socks",
      "Soap, sanitiser, toothbrush, sanitary items",
      "Masks and gloves",
      "Paper map and written contacts",
      "Notebook and pen",
    ];
    if (pets > 0) {
      items.push(pets + " × pet: food, water, bowl, leash, carrier, vaccination record");
    }
    out(
      "g-out",
      "<strong>Go-bag for " + fmt(people, 0) + " people, " + fmt(days, 0) + " days" + (pets ? ", " + pets + " pet(s)" : "") + ":</strong>" +
        "<ul style=\"margin:.7rem 0 0\"><li>" + items.join("</li><li>") + "</li></ul>"
    );
  }

  /* ---------- Morse ---------- */
  var MORSE = {
    A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....", I: "..", J: ".---",
    K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-",
    U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
    0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....", 6: "-....", 7: "--...",
    8: "---..", 9: "----.", ".": ".-.-.-", ",": "--..--", "?": "..--..", "/": "-..-.", "-": "-....-",
  };
  var audioCtx = null;
  function playMorse() {
    var text = ($("m-text") ? $("m-text").value : "SOS").toUpperCase();
    var wpm = num("m-wpm", 12);
    var unit = 1.2 / wpm;
    var code = [];
    text.split("").forEach(function (ch) {
      if (ch === " ") { code.push({ gap: unit * 4 }); return; }
      var m = MORSE[ch];
      if (!m) return;
      m.split("").forEach(function (sym, i) {
        if (i) code.push({ gap: unit });
        code.push({ on: sym === "-" ? unit * 3 : unit });
      });
      code.push({ gap: unit * 3 });
    });
    out("m-out", "Playing at " + wpm + " WPM: " + code.filter(function (c) { return c.on; }).length + " elements.");
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var t = audioCtx.currentTime + 0.05;
      code.forEach(function (c) {
        if (c.on) {
          var osc = audioCtx.createOscillator();
          var gain = audioCtx.createGain();
          osc.frequency.value = 600;
          osc.type = "sine";
          gain.gain.setValueAtTime(0.0001, t);
          gain.gain.exponentialRampToValueAtTime(0.25, t + 0.005);
          gain.gain.exponentialRampToValueAtTime(0.0001, t + c.on - 0.005);
          osc.connect(gain).connect(audioCtx.destination);
          osc.start(t);
          osc.stop(t + c.on);
          t += c.on;
        }
        if (c.gap) t += c.gap;
      });
    } catch (e) {
      out("m-out", "Audio is not available in this browser.");
    }
  }

  /* ---------- CPR metronome ---------- */
  var cprTimer = null;
  var cprCtx = null;
  function cprClick() {
    try {
      if (!cprCtx) cprCtx = new (window.AudioContext || window.webkitAudioContext)();
      var osc = cprCtx.createOscillator();
      var gain = cprCtx.createGain();
      osc.frequency.value = 880;
      osc.type = "square";
      gain.gain.setValueAtTime(0.0001, cprCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, cprCtx.currentTime + 0.004);
      gain.gain.exponentialRampToValueAtTime(0.0001, cprCtx.currentTime + 0.05);
      osc.connect(gain).connect(cprCtx.destination);
      osc.start();
      osc.stop(cprCtx.currentTime + 0.06);
    } catch (e) {}
  }
  function cprStop() {
    clearInterval(cprTimer);
    cprTimer = null;
    if ($("cpr-toggle")) $("cpr-toggle").textContent = "Start";
    out("cpr-out", "Stopped.");
  }
  function cprToggle() {
    if (cprTimer) return cprStop();
    var bpm = num("cpr-bpm", 110);
    if (bpm < 80) bpm = 80;
    if (bpm > 140) bpm = 140;
    cprClick();
    cprTimer = setInterval(cprClick, 60000 / bpm);
    if ($("cpr-toggle")) $("cpr-toggle").textContent = "Stop";
    out("cpr-out", "Pacing at " + Math.round(bpm) + " per minute. Push hard, push fast, allow full recoil.");
  }

  /* ---------- Decision tree ---------- */
  function decide() {
    var v = function (id) { var el = $(id); return el ? parseInt(el.value, 10) || 0 : 0; };
    var score = v("d-threat") + v("d-home") + v("d-supplies") + v("d-vulnerable") + v("d-order");
    var msg;
    var cls;
    if (v("d-order") || v("d-home")) {
      msg = "<strong>Leave now.</strong> An evacuation order or an unsafe home overrides everything else. Take your go-bag, documents, medicines and cash. Tell your out-of-area contact your route and destination.";
      cls = "danger";
    } else if (score >= 3) {
      msg = "<strong>Prepare to leave.</strong> Conditions are trending unsafe. Fuel the vehicle, pack the go-bag, charge devices and monitor official alerts. Leave early rather than late.";
      cls = "warning";
    } else if (score === 2) {
      msg = "<strong>Shelter in place and monitor.</strong> Your home and supplies are adequate for now. Stay informed, check on neighbours, and re-run this decision if anything changes.";
      cls = "note";
    } else {
      msg = "<strong>Shelter in place.</strong> Your home is safe and stocked. Conserve water and power, keep the radio on, and check on vulnerable neighbours.";
      cls = "success";
    }
    out("d-out", '<div class="callout callout--' + cls + '" style="margin:0"><span class="callout-title">Recommendation</span><p style="margin:0">' + msg + "</p></div>");
  }

  /* ---------- Bind ---------- */
  ["w-people", "w-days", "w-litres"].forEach(function (id) { if ($(id)) $(id).addEventListener("input", water); });
  ["f-people", "f-days", "f-kcal"].forEach(function (id) { if ($(id)) $(id).addEventListener("input", food); });
  ["a-freq", "a-type"].forEach(function (id) { if ($(id)) $(id).addEventListener("input", antenna); });
  if ($("a-type")) $("a-type").addEventListener("change", antenna);
  if ($("g-build")) $("g-build").addEventListener("click", gobag);
  if ($("m-play")) $("m-play").addEventListener("click", playMorse);

  if ($("cpr-toggle")) $("cpr-toggle").addEventListener("click", cprToggle);
  if ($("d-run")) $("d-run").addEventListener("click", decide);

  if ($("w-out")) water();
  if ($("f-out")) food();
  if ($("p-out")) power();
  if ($("a-out")) antenna();
  if ($("g-out")) gobag();
})();

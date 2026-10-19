(function () {
  "use strict";

  var data = window.GUIDES || [];
  var list = document.getElementById("guide-list");
  var input = document.getElementById("guide-search");
  var select = document.getElementById("guide-cat");
  var count = document.getElementById("guide-count");
  var chips = Array.prototype.slice.call(document.querySelectorAll("[data-chip]"));
  if (!list) return;

  var labels = {
    survival: "Survival",
    medical: "Medical",
    comms: "Comms",
    skills: "Skills",
    planning: "Planning",
    scenarios: "Scenarios",
    hazards: "Hazard",
    core: "Reference",
  };

  var state = { q: "", cat: "" };

  function render() {
    var q = state.q.trim().toLowerCase();
    var matches = data.filter(function (g) {
      var inCat = !state.cat || g.category === state.cat;
      if (!inCat) return false;
      if (!q) return true;
      return (g.title + " " + g.fullTitle + " " + g.summary + " " + g.category).toLowerCase().indexOf(q) !== -1;
    });
    if (!matches.length) {
      list.innerHTML = '<div class="empty-state" style="grid-column:1/-1">No guides match that search. Try "water", "bleeding" or "antenna".</div>';
      count.textContent = "0 guides";
      return;
    }
    list.innerHTML = matches
      .map(function (g) {
        return (
          '<a class="card" href="' + g.slug + '.html">' +
          '<span class="card-tag">' + (labels[g.category] || g.category) + "</span>" +
          "<h3>" + g.title + "</h3>" +
          "<p>" + g.summary + "</p>" +
          '<span class="card-meta">' + g.read + " →</span></a>"
        );
      })
      .join("");
    count.textContent = matches.length + (matches.length === 1 ? " guide" : " guides");
  }

  function setCat(cat) {
    state.cat = cat;
    if (select) select.value = cat;
    chips.forEach(function (c) {
      c.setAttribute("aria-pressed", c.getAttribute("data-chip") === cat ? "true" : "false");
    });
    render();
  }

  if (input) {
    input.addEventListener("input", function () {
      state.q = input.value;
      render();
    });
  }
  if (select) {
    select.addEventListener("change", function () {
      setCat(select.value);
    });
  }
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      setCat(chip.getAttribute("data-chip"));
    });
  });

  var params = new URLSearchParams(location.search);
  if (params.get("cat")) setCat(params.get("cat"));
  if (params.get("q")) {
    state.q = params.get("q");
    if (input) input.value = state.q;
  }
  render();
})();

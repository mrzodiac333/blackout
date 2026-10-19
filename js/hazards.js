(function () {
  "use strict";

  var data = window.HAZARD_DATA;
  if (!data || !Array.isArray(data.states)) return;

  var select = document.getElementById("hazard-state");
  var panel = document.getElementById("state-panel");
  if (!select || !panel) return;

  var byCode = {};
  data.states.forEach(function (state) {
    byCode[state.code] = state;
  });

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function labels(state, level) {
    return state.hazards
      .filter(function (entry) {
        return entry[1] === level;
      })
      .map(function (entry) {
        return data.hazards[entry[0]].label;
      });
  }

  function pills(state, level) {
    var items = state.hazards.filter(function (entry) {
      return entry[1] === level;
    });
    if (!items.length) return '<p class="text-muted">None in this state-level view.</p>';
    return (
      '<ul class="pill-list">' +
      items
        .map(function (entry) {
          var hazard = data.hazards[entry[0]];
          return (
            '<li><a class="pill pill--' +
            level +
            '" href="' +
            hazard.guide +
            '">' +
            esc(hazard.label) +
            "</a></li>"
          );
        })
        .join("") +
      "</ul>"
    );
  }

  function actions(state) {
    var order = state.hazards.slice().sort(function (a, b) {
      return a[1] === b[1] ? 0 : a[1] === "higher" ? -1 : 1;
    });
    return (
      '<ul class="action-list">' +
      order
        .map(function (entry) {
          var hazard = data.hazards[entry[0]];
          return (
            "<li><strong>" +
            esc(hazard.label) +
            '</strong> <span class="pill pill--' +
            entry[1] +
            '">' +
            (entry[1] === "higher" ? "Higher priority" : "Watch") +
            "</span><br>" +
            esc(hazard.action) +
            ' <a href="' +
            hazard.guide +
            '">Guide →</a></li>'
          );
        })
        .join("") +
      "</ul>"
    );
  }

  function extras(state) {
    if (!state.extra || !state.extra.length) return "";
    return (
      '<div class="state-extra"><h3>Also relevant</h3><ul class="link-list">' +
      state.extra
        .map(function (item) {
          return '<li><a href="' + item[1] + '">' + esc(item[0]) + "</a></li>";
        })
        .join("") +
      "</ul></div>"
    );
  }

  function render(code) {
    var state = byCode[code];
    if (!state) {
      panel.innerHTML =
        '<p class="text-muted">Choose a state or union territory to see its priority hazards and first actions. The full table is below.</p>';
      return;
    }

    var higher = labels(state, "higher");
    var watch = labels(state, "watch");

    panel.innerHTML =
      '<div class="state-panel-head">' +
      '<p class="eyebrow">' +
      (state.type === "ut" ? "Union territory" : "State") +
      "</p>" +
      "<h2>" +
      esc(state.name) +
      "</h2>" +
      '<p class="text-muted">' +
      esc(state.note) +
      "</p>" +
      '<p class="state-count">' +
      higher.length +
      " higher priority · " +
      watch.length +
      " watch</p>" +
      "</div>" +
      '<div class="hazard-groups">' +
      "<div><h3>Higher priority</h3>" +
      pills(state, "higher") +
      "</div>" +
      "<div><h3>Watch</h3>" +
      pills(state, "watch") +
      "</div>" +
      "</div>" +
      '<div class="state-actions"><h3>First actions</h3>' +
      actions(state) +
      "</div>" +
      extras(state) +
      '<p class="state-footer"><a href="act-now.html">Immediate actions</a> · <a href="#all-states">Full table</a> · <a href="#how">How this is classified</a></p>';
  }

  function selectState(code, options) {
    options = options || {};
    var state = byCode[code];

    if (!state) {
      select.value = "";
      render("");
      panel.removeAttribute("data-state");
      document.querySelectorAll(".hazard-tile.is-selected").forEach(function (tile) {
        tile.classList.remove("is-selected");
        tile.removeAttribute("aria-current");
      });
      try {
        window.localStorage.removeItem("blackout:state");
      } catch (error) {
        /* storage may be unavailable */
      }
      if (options.updateUrl !== false) {
        var emptyUrl = new URL(window.location.href);
        emptyUrl.searchParams.delete("state");
        window.history.replaceState({}, "", emptyUrl);
      }
      return;
    }

    select.value = state.code;
    render(state.code);
    panel.setAttribute("data-state", state.code);

    document.querySelectorAll(".hazard-tile").forEach(function (tile) {
      var selected = tile.getAttribute("data-state") === state.code;
      tile.classList.toggle("is-selected", selected);
      if (selected) tile.setAttribute("aria-current", "true");
      else tile.removeAttribute("aria-current");
    });

    try {
      window.localStorage.setItem("blackout:state", JSON.stringify(state.code));
    } catch (error) {
      /* storage may be unavailable */
    }

    if (options.updateUrl !== false) {
      var url = new URL(window.location.href);
      url.searchParams.set("state", state.code);
      window.history.replaceState({}, "", url);
    }
  }

  select.addEventListener("change", function () {
    selectState(select.value);
  });

  document.querySelectorAll(".hazard-tile").forEach(function (tile) {
    tile.addEventListener("click", function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      selectState(tile.getAttribute("data-state"));
    });
  });

  function readSavedState() {
    var raw = "";
    try {
      raw = window.localStorage.getItem("blackout:state") || "";
    } catch (error) {
      return "";
    }
    if (!raw) return "";
    try {
      var parsed = JSON.parse(raw);
      return typeof parsed === "string" ? parsed : "";
    } catch (error) {
      return raw;
    }
  }

  var params = new URLSearchParams(window.location.search);
  var requested = (params.get("state") || "").toUpperCase();
  var saved = readSavedState();

  if (byCode[requested]) {
    selectState(requested, { updateUrl: false });
  } else if (byCode[saved]) {
    selectState(saved, { updateUrl: false });
  } else {
    render("");
  }
})();

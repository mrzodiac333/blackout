(function () {
  "use strict";

  var PREFIX = "blackout:";
  var guides = window.GUIDES || [];
  var hazardData = window.HAZARD_DATA;

  function $(id) {
    return document.getElementById(id);
  }
  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(PREFIX + key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }
  function write(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (error) {
      /* storage may be unavailable */
    }
  }
  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------- Quick search ---------- */
  var searchForm = $("home-search");
  var searchInput = $("home-search-input");
  var searchResults = $("home-search-results");

  if (searchForm && searchInput && searchResults) {
    var quickPages = [
      {
        slug: "hazards",
        title: "Hazards where you live",
        fullTitle: "Hazards where you live",
        category: "hazards",
        summary: "State and UT hazard priorities, first actions and source notes.",
        read: "Toolkit",
      },
      {
        slug: "act-now",
        title: "Act now",
        fullTitle: "Act now",
        category: "hazards",
        summary: "Immediate actions for injury, natural hazards, utilities and security.",
        read: "Immediate",
      },
    ];
    var searchIndex = guides.concat(
      quickPages.filter(function (page) {
        return !guides.some(function (guide) {
          return guide.slug === page.slug;
        });
      })
    );

    function closeSearch() {
      searchResults.hidden = true;
      searchInput.setAttribute("aria-expanded", "false");
    }

    function resultMarkup(items, query) {
      var rows = items
        .map(
          function (item) {
            return (
              '<a class="search-result" role="option" aria-selected="false" href="' +
              item.slug +
              '.html"><span class="search-result-title">' +
              esc(item.title) +
              '</span><span class="search-result-meta">' +
              esc(item.category) +
              " · " +
              esc(item.read || "Guide") +
              "</span></a>"
            );
          }
        )
        .join("");
      if (query) {
        rows +=
          '<a class="search-result search-result--all" role="option" aria-selected="false" href="guides.html?q=' +
          encodeURIComponent(query) +
          '"><span class="search-result-title">See all results for “' +
          esc(query) +
          '”</span></a>';
      }
      return rows;
    }

    function runSearch() {
      var query = searchInput.value.trim();
      if (!query) {
        closeSearch();
        return;
      }
      var terms = query.toLowerCase().split(/\s+/);
      var matches = searchIndex
        .filter(function (item) {
          var haystack = (item.title + " " + (item.fullTitle || "") + " " + (item.summary || "") + " " + item.category).toLowerCase();
          return terms.every(function (term) {
            return haystack.indexOf(term) !== -1;
          });
        })
        .slice(0, 7);

      if (!matches.length) {
        searchResults.innerHTML =
          '<p class="search-empty">No matches. Try “water”, “bleeding”, “cyclone” or “radio”.</p>';
      } else {
        searchResults.innerHTML = resultMarkup(matches, query);
      }
      searchResults.hidden = false;
      searchInput.setAttribute("aria-expanded", "true");
    }

    searchInput.addEventListener("input", runSearch);
    searchInput.addEventListener("focus", function () {
      if (searchInput.value.trim()) runSearch();
    });
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeSearch();
        return;
      }
      if (event.key === "ArrowDown" && !searchResults.hidden) {
        var first = searchResults.querySelector(".search-result");
        if (first) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    searchResults.addEventListener("keydown", function (event) {
      var links = Array.prototype.slice.call(searchResults.querySelectorAll(".search-result"));
      var current = links.indexOf(document.activeElement);
      if (event.key === "ArrowDown" && current < links.length - 1) {
        event.preventDefault();
        links[current + 1].focus();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (current > 0) links[current - 1].focus();
        else searchInput.focus();
      } else if (event.key === "Escape") {
        closeSearch();
        searchInput.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!searchForm.contains(event.target)) closeSearch();
    });
  }

  /* ---------- Readiness ---------- */
  var readinessForm = $("readiness-form");
  var readinessBoxes = readinessForm
    ? Array.prototype.slice.call(readinessForm.querySelectorAll('input[name="readiness"]'))
    : [];
  var readinessRing = $("readiness-ring");
  var readinessScore = $("readiness-score");
  var readinessTier = $("readiness-tier");
  var readinessSummary = $("readiness-summary");
  var readinessBar = $("readiness-bar");

  function tierFor(score) {
    if (score >= 80) {
      return {
        key: "resilient",
        label: "Resilient",
        summary: "Strong base. Review quarterly, rotate supplies and keep documents current.",
      };
    }
    if (score >= 50) {
      return {
        key: "two-week",
        label: "Two-week ready",
        summary: "Good progress. Close the gaps in power, documents and local hazard planning.",
      };
    }
    if (score >= 25) {
      return {
        key: "base",
        label: "72-hour ready",
        summary: "You have a base. Push toward two weeks of water and food next.",
      };
    }
    return {
      key: "none",
      label: "Not ready yet",
      summary: "Start with water and a written plan. Two weeks of water is the biggest single step.",
    };
  }

  function updateReadiness(save) {
    if (!readinessBoxes.length) return;
    var answers = {};
    var score = 0;
    readinessBoxes.forEach(function (box) {
      if (box.checked) {
        answers[box.value] = true;
        score += Number(box.getAttribute("data-points") || 0);
      }
    });
    var tier = tierFor(score);

    if (readinessRing) readinessRing.style.setProperty("--score", score);
    if (readinessScore) readinessScore.textContent = score;
    if (readinessBar) readinessBar.style.width = score + "%";
    if (readinessTier) {
      readinessTier.textContent = tier.label;
      readinessTier.setAttribute("data-tier", tier.key);
    }
    if (readinessSummary) readinessSummary.textContent = tier.summary;
    var kitScore = $("kit-readiness");
    if (kitScore) kitScore.textContent = score + "%";

    if (save) {
      write("readiness", {
        answers: answers,
        score: score,
        tier: tier.label,
        date: new Date().toISOString(),
      });
    }
  }

  if (readinessForm) {
    var savedReadiness = read("readiness", null);
    if (savedReadiness && savedReadiness.answers) {
      readinessBoxes.forEach(function (box) {
        box.checked = !!savedReadiness.answers[box.value];
      });
    }
    updateReadiness(false);
    readinessForm.addEventListener("change", function () {
      updateReadiness(true);
    });

    var reset = $("readiness-reset");
    if (reset) {
      reset.addEventListener("click", function () {
        readinessBoxes.forEach(function (box) {
          box.checked = false;
        });
        try {
          localStorage.removeItem(PREFIX + "readiness");
        } catch (error) {}
        updateReadiness(false);
      });
    }
  }

  /* ---------- Personal kit ---------- */
  function checklistProgress() {
    var total = 0;
    var done = 0;
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (!key || key.indexOf(PREFIX + "check:") !== 0) continue;
      var slug = key.slice((PREFIX + "check:").length);
      var meta = read("checkmeta:" + slug, { total: 0 });
      var state = read("check:" + slug, {});
      var count = Number(meta.total) || 0;
      if (!count) continue;
      total += count;
      done += Object.keys(state).filter(function (id) {
        return state[id];
      }).length;
    }
    return total ? Math.round((done / total) * 100) : 0;
  }

  function noteCount() {
    var count = 0;
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (!key || key.indexOf(PREFIX + "notes:") !== 0) continue;
      var note = read(key.slice(PREFIX.length), null);
      if (note && note.text) count++;
    }
    return count;
  }

  function renderKit() {
    var bookmarks = read("bookmarks", {});
    var readiness = read("readiness", null);
    var kitBookmarks = $("kit-bookmarks");
    var kitChecks = $("kit-checks");
    var kitNotes = $("kit-notes");
    var kitReadiness = $("kit-readiness");

    if (kitBookmarks) kitBookmarks.textContent = Object.keys(bookmarks).length;
    if (kitChecks) kitChecks.textContent = checklistProgress() + "%";
    if (kitNotes) kitNotes.textContent = noteCount();
    if (kitReadiness) kitReadiness.textContent = (readiness && Number(readiness.score) ? Number(readiness.score) : 0) + "%";

    var recent = read("recent", []);
    var recentList = $("kit-recent-list");
    if (!recentList) return;
    if (!Array.isArray(recent) || !recent.length) {
      recentList.innerHTML = '<p class="text-muted">Open a guide and it will appear here.</p>';
      return;
    }
    recentList.innerHTML =
      '<ul class="kit-recent-list">' +
      recent
        .slice(0, 3)
        .map(function (item) {
          return '<li><a href="' + item.slug + '.html">' + esc(item.title || item.slug) + "</a></li>";
        })
        .join("") +
      "</ul>";
  }

  renderKit();

  /* ---------- Home hazard preview ---------- */
  var homeState = $("home-state");
  var homePreview = $("home-state-preview");

  if (homeState && homePreview && hazardData && Array.isArray(hazardData.states)) {
    var byCode = {};
    hazardData.states.forEach(function (state) {
      byCode[state.code] = state;
    });

    function hazardPills(state, level) {
      var items = state.hazards.filter(function (entry) {
        return entry[1] === level;
      });
      if (!items.length) return '<p class="text-muted">None in this state-level view.</p>';
      return (
        '<ul class="pill-list">' +
        items
          .map(function (entry) {
            var hazard = hazardData.hazards[entry[0]];
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

    function renderHomeState(code) {
      var state = byCode[code];
      if (!state) {
        homePreview.innerHTML =
          '<p class="text-muted">Choose a state or union territory to see its priority hazards.</p>';
        return;
      }
      homePreview.innerHTML =
        '<div class="hazard-preview-head"><span class="eyebrow">' +
        (state.type === "ut" ? "Union territory" : "State") +
        "</span><h3>" +
        esc(state.name) +
        '</h3><p class="text-muted">' +
        esc(state.note) +
        "</p></div>" +
        '<div class="hazard-preview-groups"><div><h4>Higher priority</h4>' +
        hazardPills(state, "higher") +
        "</div><div><h4>Watch</h4>" +
        hazardPills(state, "watch") +
        "</div></div>" +
        '<a class="btn btn--small" href="hazards.html?state=' +
        state.code +
        '">See the full plan</a>';
    }

    function chooseHomeState(code, updateUrl) {
      var state = byCode[code];
      homeState.value = state ? state.code : "";
      renderHomeState(state ? state.code : "");
      if (state) {
        write("state", state.code);
      } else {
        try {
          localStorage.removeItem(PREFIX + "state");
        } catch (error) {}
      }
      if (updateUrl !== false) {
        var url = new URL(window.location.href);
        if (state) url.searchParams.set("state", state.code);
        else url.searchParams.delete("state");
        window.history.replaceState({}, "", url);
      }
    }

    homeState.addEventListener("change", function () {
      chooseHomeState(homeState.value);
    });

    function readSavedState() {
      var raw = "";
      try {
        raw = localStorage.getItem(PREFIX + "state") || "";
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
    if (byCode[requested]) chooseHomeState(requested, false);
    else if (byCode[saved]) chooseHomeState(saved, false);
    else renderHomeState("");
  }

  /* ---------- Install / offline status ---------- */
  var installButton = $("install-btn");
  var installStatus = $("install-status");
  var cacheStatus = $("cache-status");

  function isStandalone() {
    return (
      (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
      window.navigator.standalone === true
    );
  }

  function updateInstall() {
    if (installStatus) {
      if (isStandalone()) {
        installStatus.textContent = "Installed. Open it from your home screen.";
      } else if (window.BLACKOUT_INSTALL && window.BLACKOUT_INSTALL.get()) {
        installStatus.textContent = "Install for offline access.";
      } else if (navigator.onLine) {
        installStatus.textContent = "Use your browser menu > Install app or Add to Home Screen.";
      } else {
        installStatus.textContent = "You are offline. This page is coming from the offline cache.";
      }
    }
    if (installButton) {
      installButton.hidden = isStandalone() || !(window.BLACKOUT_INSTALL && window.BLACKOUT_INSTALL.get());
    }
    if (cacheStatus) {
      if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        cacheStatus.textContent = "Offline cache active · " + (navigator.onLine ? "online" : "offline") + ".";
      } else if (navigator.onLine) {
        cacheStatus.textContent = "Offline cache starts after the first visit.";
      } else {
        cacheStatus.textContent = "Offline; cache status unknown.";
      }
    }
  }

  if (installButton) {
    installButton.addEventListener("click", function () {
      var prompt = window.BLACKOUT_INSTALL && window.BLACKOUT_INSTALL.get();
      if (!prompt) return;
      prompt.prompt();
      prompt.userChoice.then(function () {
        window.BLACKOUT_INSTALL.clear();
        updateInstall();
      });
    });
  }

  window.addEventListener("blackout:installready", updateInstall);
  window.addEventListener("blackout:installed", updateInstall);
  window.addEventListener("blackout:cacheupdated", updateInstall);
  window.addEventListener("online", updateInstall);
  window.addEventListener("offline", updateInstall);
  updateInstall();
})();

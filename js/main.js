(function () {
  "use strict";

  var STORE = "blackout:";

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(STORE + key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(STORE + key, JSON.stringify(value));
    } catch (e) {}
  }

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  /* ---------- Install prompt ---------- */
  var deferredInstallPrompt = null;
  window.BLACKOUT_INSTALL = {
    get: function () {
      return deferredInstallPrompt;
    },
    clear: function () {
      deferredInstallPrompt = null;
    },
  };
  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredInstallPrompt = event;
    window.dispatchEvent(new Event("blackout:installready"));
  });
  window.addEventListener("appinstalled", function () {
    deferredInstallPrompt = null;
    window.dispatchEvent(new Event("blackout:installed"));
  });

  /* ---------- Recently viewed guides ---------- */
  var pageKind = document.body.getAttribute("data-kind");
  var pageSlug = document.body.getAttribute("data-page");
  if (pageKind === "guide" && pageSlug) {
    var recent = read("recent", []);
    if (!Array.isArray(recent)) recent = [];
    var heading = $(".page-head h1") || $("h1");
    var pageTitle = heading ? heading.textContent.trim() : document.title.replace(/ .*$/, "");
    recent = recent.filter(function (item) {
      return item && item.slug !== pageSlug;
    });
    recent.unshift({ slug: pageSlug, title: pageTitle, at: Date.now() });
    write("recent", recent.slice(0, 6));
  }

  /* ---------- Mobile nav ---------- */
  var toggle = $(".nav-toggle");
  var nav = $("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  /* ---------- Checklists ---------- */
  $$("[data-checklist]").forEach(function (list) {
    var id = list.getAttribute("data-checklist");
    var boxes = $$('input[type="checkbox"]', list);
    var saved = read("check:" + id, {});
    boxes.forEach(function (box) {
      if (saved[box.getAttribute("data-check")]) box.checked = true;
    });
    function update() {
      var state = {};
      var done = 0;
      boxes.forEach(function (box) {
        if (box.checked) {
          state[box.getAttribute("data-check")] = true;
          done++;
        }
      });
      write("check:" + id, state);
      write("checkmeta:" + id, { total: boxes.length, title: document.title.replace(/ — .*$/, "") });
      var prog = $('[data-progress="' + id + '"]');
      if (prog) {
        var label = prog.querySelector("span");
        var bar = prog.querySelector(".progress-bar");
        if (label) label.textContent = done + " / " + boxes.length + " done";
        if (bar) bar.style.width = (done / boxes.length) * 100 + "%";
      }
    }
    list.addEventListener("change", update);
    update();
  });

  /* ---------- Bookmarks ---------- */
  $$("[data-bookmark]").forEach(function (btn) {
    var slug = btn.getAttribute("data-bookmark");
    var saved = read("bookmarks", {});
    btn.setAttribute("aria-pressed", saved[slug] ? "true" : "false");
    btn.textContent = saved[slug] ? "Saved" : "Save";
    btn.addEventListener("click", function () {
      var current = read("bookmarks", {});
      if (current[slug]) {
        delete current[slug];
      } else {
        current[slug] = { title: document.title, saved: Date.now() };
      }
      write("bookmarks", current);
      btn.setAttribute("aria-pressed", current[slug] ? "true" : "false");
      btn.textContent = current[slug] ? "Saved" : "Save";
    });
  });

  /* ---------- Per-page notes ---------- */
  var notes = $("[data-notes]");
  if (notes) {
    var notesKey = "notes:" + notes.getAttribute("data-notes");
    var status = $("#notes-status");
    var savedNote = read(notesKey, "");
    notes.value = typeof savedNote === "string" ? savedNote : savedNote.text || "";
    var timer;
    notes.addEventListener("input", function () {
      clearTimeout(timer);
      if (status) status.textContent = "Saving…";
      timer = setTimeout(function () {
        write(notesKey, {
          text: notes.value,
          updated: Date.now(),
          title: document.title.replace(/ — .*$/, ""),
        });
        if (status) status.textContent = "Saved on this device.";
      }, 400);
    });
  }

  /* ---------- Print ---------- */
  $$("[data-print]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.print();
    });
  });

  var printDetails = [];
  window.addEventListener("beforeprint", function () {
    printDetails = [];
    $$(".act-now-page details:not([open])").forEach(function (detail) {
      printDetails.push(detail);
      detail.open = true;
    });
  });
  window.addEventListener("afterprint", function () {
    printDetails.forEach(function (detail) {
      detail.open = false;
    });
    printDetails = [];
  });

  /* ---------- TOC active state ---------- */
  var tocLinks = $$('.toc a[href^="#"]');
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) {
      map[a.getAttribute("href").slice(1)] = a;
    });
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            tocLinks.forEach(function (a) {
              a.classList.remove("is-active");
            });
            var link = map[entry.target.id];
            if (link) link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  /* ---------- Service worker ---------- */
  if ("serviceWorker" in navigator && (location.protocol === "http:" || location.protocol === "https:")) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      window.dispatchEvent(new Event("blackout:cacheupdated"));
    });
  }
})();

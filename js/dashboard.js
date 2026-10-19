(function () {
  "use strict";

  var PREFIX = "blackout:";
  function $(id) {
    return document.getElementById(id);
  }
  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(PREFIX + key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function write(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (e) {}
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function when(ts) {
    if (!ts) return "";
    try {
      return new Date(ts).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    } catch (e) {
      return "";
    }
  }

  function render() {
    var readiness = read("readiness", null);
    if ($("dash-readiness")) {
      if (readiness && typeof readiness.score === "number") {
        $("dash-readiness").innerHTML =
          '<p style="font-size:2.2rem;line-height:1;margin:0 0 .3rem"><strong>' +
          readiness.score +
          '</strong><span class="text-muted" style="font-size:1rem">/100</span></p>' +
          '<p style="margin:0 0 .5rem">' +
          esc(readiness.tier || "Readiness checked") +
          "</p>" +
          '<p class="text-muted" style="font-size:.78rem;margin:0 0 .5rem">Checked ' +
          when(readiness.date) +
          "</p>" +
          '<a href="index.html#readiness">Update readiness →</a>';
      } else {
        $("dash-readiness").innerHTML =
          '<p class="text-muted">No readiness check yet. <a href="index.html#readiness">Take the check</a>.</p>';
      }
    }

    var bookmarks = read("bookmarks", {});
    var bm = Object.keys(bookmarks)
      .map(function (slug) {
        return '<li><a href="' + slug + '.html">' + esc(bookmarks[slug].title || slug.replace(/-/g, " ")) + "</a> <span class=\"text-muted\" style=\"font-size:.75rem\">saved " + when(bookmarks[slug].saved) + "</span></li>";
      })
      .join("");
    if ($("dash-bookmarks")) $("dash-bookmarks").innerHTML = bm ? "<ul style=\"margin:0\">" + bm + "</ul>" : '<p class="text-muted">No bookmarks yet. Use the Save button on any guide.</p>';

    var checks = [];
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.indexOf(PREFIX + "check:") === 0) {
        var slug = key.slice((PREFIX + "check:").length);
        var state = read("check:" + slug, {});
        var meta = read("checkmeta:" + slug, { total: 0, title: slug.replace(/-/g, " ") });
        var done = Object.keys(state).filter(function (k) { return state[k]; }).length;
        if (meta.total > 0 && done > 0) checks.push({ slug: slug, done: done, total: meta.total, title: meta.title });
      }
    }
    checks.sort(function (a, b) { return b.done / b.total - a.done / a.total; });
    var ch = checks
      .map(function (c) {
        var pct = Math.round((c.done / c.total) * 100);
        return '<div style="margin-bottom:.8rem"><div style="display:flex;justify-content:space-between;gap:.5rem;font-size:.85rem"><a href="' + c.slug + '.html">' + esc(c.title) + "</a><span class=\"text-muted\">" + c.done + "/" + c.total + "</span></div><div class=\"progress-track\"><div class=\"progress-bar\" style=\"width:" + pct + "%\"></div></div></div>";
      })
      .join("");
    if ($("dash-checks")) $("dash-checks").innerHTML = ch ? ch : '<p class="text-muted">No checklist progress yet. Open a guide and tick something off.</p>';

    var notes = [];
    for (var j = 0; j < localStorage.length; j++) {
      var nkey = localStorage.key(j);
      if (nkey.indexOf(PREFIX + "notes:") === 0) {
        var nslug = nkey.slice((PREFIX + "notes:").length);
        var note = read("notes:" + nslug, {});
        if (note.text) notes.push({ slug: nslug, note: note });
      }
    }
    var nt = notes
      .map(function (n) {
        return '<div style="margin-bottom:1rem;padding-bottom:.8rem;border-bottom:1px solid var(--border)"><div style="display:flex;justify-content:space-between;gap:.5rem"><a href="' + n.slug + '.html">' + esc(n.note.title || n.slug.replace(/-/g, " ")) + '</a><span class="text-muted" style="font-size:.75rem">' + when(n.note.updated) + '</span></div><p style="white-space:pre-wrap;margin:.4rem 0 0;font-size:.88rem">' + esc(n.note.text) + "</p></div>";
      })
      .join("");
    if ($("dash-notes")) $("dash-notes").innerHTML = nt ? nt : '<p class="text-muted">No notes yet. Each guide has a notes box at the bottom.</p>';
  }

  function out(msg) {
    if ($("dash-out")) $("dash-out").innerHTML = msg;
  }

  if ($("dash-export")) {
    $("dash-export").addEventListener("click", function () {
      var data = {};
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.indexOf(PREFIX) === 0) data[key] = localStorage.getItem(key);
      }
      var blob = new Blob([JSON.stringify({ app: "blackout", version: 1, exported: new Date().toISOString(), data: data }, null, 2)], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "blackout-backup.json";
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        URL.revokeObjectURL(a.href);
        a.remove();
      }, 500);
      out("Backup exported.");
    });
  }

  if ($("dash-import")) {
    $("dash-import").addEventListener("change", function (e) {
      var file = e.target.files && e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var parsed = JSON.parse(reader.result);
          if (!parsed.data || parsed.app !== "blackout") throw new Error("bad file");
          var count = 0;
          Object.keys(parsed.data).forEach(function (key) {
            if (key.indexOf(PREFIX) === 0) {
              localStorage.setItem(key, parsed.data[key]);
              count++;
            }
          });
          out("Imported " + count + " saved items. Refreshing…");
          setTimeout(function () { location.reload(); }, 900);
        } catch (err) {
          out("That file could not be imported. Choose a BLACKOUT backup JSON file.");
        }
      };
      reader.readAsText(file);
    });
  }

  if ($("dash-clear")) {
    $("dash-clear").addEventListener("click", function () {
      if (!confirm("Delete all bookmarks, checklist progress and notes on this device?")) return;
      var keys = [];
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.indexOf(PREFIX) === 0) keys.push(key);
      }
      keys.forEach(function (k) { localStorage.removeItem(k); });
      out("All saved data cleared.");
      render();
    });
  }

  render();
})();

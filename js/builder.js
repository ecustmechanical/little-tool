/* ============================================================
   TackleCalc — Species Rig Builder  v1.0
   Renders a complete rig sheet for a selected species from
   window.TackleSpecies. Supports #hash deep-links so pages can
   link straight to "largemouth-bass rig setup" style queries.
   ============================================================ */

(function () {
  "use strict";

  var SPECIES = window.TackleSpecies || [];
  var select, chipsBox, sheet, emptyEl;

  function qs(s) { return document.querySelector(s); }

  function init() {
    select = qs("#species-select");
    chipsBox = qs("#species-chips");
    sheet = qs("#rig-sheet");
    emptyEl = qs("#sheet-empty");

    if (!select || !sheet) return;

    SPECIES.forEach(function (sp) {
      var opt = document.createElement("option");
      opt.value = sp.id;
      opt.textContent = sp.name + " (" + sp.scientific + ")";
      select.appendChild(opt);

      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.dataset.id = sp.id;
      chip.textContent = sp.name;
      chip.addEventListener("click", function () { selectSpecies(sp.id); });
      chipsBox.appendChild(chip);
    });

    select.addEventListener("change", function () {
      if (select.value) selectSpecies(select.value);
    });

    // deep-link: /species-gear-builder/#largemouth-bass
    var hashId = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    if (hashId && speciesIndex(hashId) > -1) {
      selectSpecies(hashId);
      setTimeout(function () {
        var el = document.getElementById("builder-app");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    } else if (SPECIES.length) {
      // Default to the first species so the page always shows a filled tool.
      selectSpecies(SPECIES[0].id, true);
    }
  }

  function speciesIndex(id) {
    for (var i = 0; i < SPECIES.length; i++) if (SPECIES[i].id === id) return i;
    return -1;
  }

  function esc(txt) {
    return String(txt == null ? "" : txt)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function selectSpecies(id, noHistory) {
    var i = speciesIndex(id);
    if (i < 0) return;
    var sp = SPECIES[i];

    select.value = id;
    select.classList.remove("active");

    // highlight active chip
    var chips = chipsBox.querySelectorAll(".chip");
    for (var c = 0; c < chips.length; c++) {
      chips[c].classList.toggle("active", chips[c].dataset.id === id);
    }

    if (!noHistory) {
      try { history.replaceState(null, "", "#" + sp.id); } catch (e) {}
    }
    renderSheet(sp);
  }

  function renderSheet(sp) {
    var rs = sp.rigSheet;

    var rigsHtml = rs.rigs.map(function (r) {
      return '<div class="rig-item"><div class="rig-name">' + esc(r.name) +
        '</div><p>' + esc(r.detail) + "</p></div>";
    }).join("");

    var tipsHtml = rs.tips.map(function (t) {
      return "<li>" + esc(t) + "</li>";
    }).join("");

    var tableRows =
      row("Rod", rs.rod) +
      row("Reel", rs.reel) +
      row("Main line", rs.mainLine) +
      row("Leader", rs.leader) +
      row("Hooks & weights", rs.hooks) +
      row("Size", sp.size.typical + " — trophy: " + sp.size.trophy) +
      row("Water", sp.water.join(", ") + ". " + sp.habitat);

    sheet.innerHTML =
      '<div class="rig-sheet">' +
        '<h2>' + esc(sp.name) + ' rig setup</h2>' +
        '<p class="sub">' + esc(sp.scientific) + " &middot; " + esc(sp.family) + "</p>" +
        "<p>" + esc(sp.blurb) + "</p>" +
        '<div class="sheet-actions">' +
          '<button type="button" class="btn secondary" id="btn-print">Print / Save PDF</button>' +
          '<button type="button" class="btn ghost" id="btn-copy">Copy rig sheet</button>' +
        "</div>" +
        '<table class="sheet-table">' +
          "<tbody>" + tableRows +
            '<tr><th>Recommended rigs</th><td>' + rigsHtml + "</td></tr>" +
            '<tr><th>Live / natural bait</th><td>' + esc(rs.naturalBaits) + "</td></tr>" +
            '<tr><th>Artificials</th><td>' + esc(rs.artificials) + "</td></tr>" +
            '<tr><th>Pro tips</th><td><ul class="tip-list">' + tipsHtml + "</ul></td></tr>" +
          "</tbody>" +
        "</table>" +
        '<div class="notes-box"><strong>Field notes:</strong> ' + esc(sp.notes) + "</div>" +
        '<p class="small muted mt-2">Affiliate disclosure: if you buy gear after using this sheet, we may earn a small commission at no extra cost to you. This rig data is editorial advice, hand-compiled by Marcus Reed — always check local regulations.</p>' +
      "</div>";

    var btnPrint = qs("#btn-print");
    if (btnPrint) btnPrint.addEventListener("click", function () { window.print(); });

    var btnCopy = qs("#btn-copy");
    if (btnCopy) btnCopy.addEventListener("click", function () { copySheet(sp); });

    if (emptyEl) emptyEl.style.display = "none";
    sheet.scrollTop = 0;
  }

  function row(label, val) {
    return "<tr><th>" + esc(label) + "</th><td>" + esc(val) + "</td></tr>";
  }

  function copySheet(sp) {
    var rs = sp.rigSheet;
    var lines = [
      sp.name + " (" + sp.scientific + ") — rig sheet",
      "From TackleCalc.com — " + location.href.split("#")[0],
      "",
      "Rod: " + rs.rod,
      "Reel: " + rs.reel,
      "Main line: " + rs.mainLine,
      "Leader: " + rs.leader,
      "Hooks & weights: " + rs.hooks,
      "Typical size: " + sp.size.typical,
      "",
      "Recommended rigs:"
    ];
    rs.rigs.forEach(function (r) { lines.push("• " + r.name + " — " + r.detail); });
    lines.push("");
    lines.push("Natural bait: " + rs.naturalBaits);
    lines.push("Artificials: " + rs.artificials);
    lines.push("Pro tips:");
    rs.tips.forEach(function (t) { lines.push("• " + t); });
    lines.push("");
    lines.push("Field notes: " + sp.notes);

    var text = lines.join("\n");
    function done() { alert("Rig sheet copied. Paste it anywhere, or keep it for your next trip."); }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else { fallbackCopy(text); done(); }
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  document.addEventListener("DOMContentLoaded", init);
})();

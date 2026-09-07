/* ============================================================
   TackleCalc — Line Capacity Calculator  v1.0
   Diameter² conversion: how much braid/fluoro/mono fits a reel
   that is rated for a known mono capacity. Pure client-side.
   ============================================================ */

(function () {
  "use strict";

  // Typical diameter in mm by lb-test. Averages across common brands —
  // actual line diameter varies by brand, so we print a caveat.
  var DIAM = {
    mono:    { "2": 0.17, "4": 0.20, "6": 0.23, "8": 0.26, "10": 0.28, "12": 0.32, "15": 0.36, "17": 0.38, "20": 0.42, "25": 0.47, "30": 0.52 },
    fluoro:  { "4": 0.20, "6": 0.24, "8": 0.28, "10": 0.31, "12": 0.35, "15": 0.39, "17": 0.41, "20": 0.46, "25": 0.51, "30": 0.56 },
    braid:   { "6": 0.10, "8": 0.12, "10": 0.14, "12": 0.16, "15": 0.18, "20": 0.21, "30": 0.25, "40": 0.29, "50": 0.33, "65": 0.38, "80": 0.42 }
  };
  var LABELS = {
    mono: "Monofilament (reference rating on the spool)",
    fluoro: "Fluorocarbon",
    braid: "Braid"
  };

  function qs(s) { return document.querySelector(s); }

  function populateMaterialSelect(sel, material, skip) {
    sel.innerHTML = "";
    Object.keys(DIAM[material]).forEach(function (lb) {
      if (String(lb) === String(skip)) return;
      var o = document.createElement("option");
      o.value = lb;
      o.textContent = lb + " lb (" + DIAM[material][lb].toFixed(2) + " mm)";
      sel.appendChild(o);
    });
  }

  function compute() {
    var refLb = qs("#ref-lb").value;
    var refYards = parseFloat(qs("#ref-yards").value);
    var targetType = qs("#target-type").value;
    var targetLb = qs("#target-lb").value;
    var fill = parseFloat(qs("#fill-pct").value) / 100;

    if (!refLb || !refYards || !targetLb || !(refYards > 0)) return;

    var dRef = DIAM.mono[refLb];
    var dTar = DIAM[targetType][targetLb];
    var base = refYards * Math.pow(dRef / dTar, 2);
    var yards = base * fill;

    var rows = "";
    Object.keys(DIAM[targetType]).forEach(function (lb) {
      var y = Math.round(refYards * Math.pow(dRef / DIAM[targetType][lb], 2) * fill);
      rows += "<tr><td>" + lb + " lb " + LABELS[targetType].toLowerCase().split(" ")[0] + "</td><td><strong>" + y.toLocaleString() + " yd</strong></td></tr>";
    });

    qs("#result-amount").textContent = Math.round(yards).toLocaleString() + " yd";
    qs("#result-detail").textContent =
      "Reference: " + refYards + " yd of " + refLb + " lb mono (~" + dRef.toFixed(2) + " mm). Target: " +
      targetLb + " lb " + targetType + " (~" + dTar.toFixed(2) + " mm) at " + Math.round(fill * 100) + "% fill. Volume scales by diameter².";

    qs("#result-table").innerHTML = rows;
    qs("#result-box").style.display = "block";
  }

  function bind() {
    var typeSel = qs("#target-type");
    var lbSel = qs("#target-lb");

    populateMaterialSelect(lbSel, typeSel.value);

    typeSel.addEventListener("change", function () {
      populateMaterialSelect(lbSel, typeSel.value);
      compute();
    });

    ["#ref-lb", "#ref-yards", "#target-type", "#target-lb", "#fill-pct"].forEach(function (id) {
      qs(id).addEventListener("change", compute);
      qs(id).addEventListener("input", compute);
    });

    compute();
  }

  document.addEventListener("DOMContentLoaded", bind);
})();

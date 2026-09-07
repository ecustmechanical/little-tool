// TackleCalc 广告加载器: 仅在配置开启(审核通过)后加载 AdSense。
// 配置为空时 .ad-slot 保持空占位(CSS display:none), 页面零外链零展示。
(function () {
  var cfg = window.TACKLEADS || {};
  function slotEls() {
    return Array.prototype.slice.call(document.querySelectorAll('.ad-slot[data-slot]'));
  }
  function loadAdSense() {
    var s = document.createElement('script');
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(cfg.publisher);
    s.onload = function () {
      slotEls().forEach(function (el) {
        var name = el.getAttribute('data-slot');
        var unit = cfg.slots && cfg.slots[name];
        if (!unit) return;
        var ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        ins.setAttribute('data-ad-client', cfg.publisher);
        ins.setAttribute('data-ad-slot', unit);
        ins.setAttribute('data-ad-format', 'auto');
        ins.setAttribute('data-full-width-responsive', 'true');
        el.appendChild(ins);
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      });
    };
    document.head.appendChild(s);
  }
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    if (cfg.enabled !== true || !cfg.publisher || !slotEls().length) return;
    loadAdSense();
  });
})();

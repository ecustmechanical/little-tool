/**
 * AstroLens — site configuration (single source of truth)
 * 品牌 / 站点根路径 / 统计 / 广告位 都在这里改，页面与脚本统一引用。
 */
window.ASTRO = {
  brand: 'AstroLens',
  tagline: 'Free zodiac, numerology & tarot tools',
  // 部署在子路径时保持带尾斜杠；换正式域名时只改这一处 + 各页 canonical/og:url
  base: 'https://ecustmechanical.github.io/little-tool/',
  gaId: 'G-YWD0Z35ZZ9',
  author: 'Elena Voss',
  year: 2026,
  disclaimer: 'Astrology and tarot content on this site is provided for entertainment and self-reflection. It is not medical, legal, financial or psychological advice.'
};

/* 广告位开关：AdSense 审核通过后填 enabled=true + publisher + 各 slot 单元 ID */
window.ASTROADS = {
  enabled: false,
  publisher: '',
  slots: {
    'home-leader': '',
    'zodiac-hub-mid': '',
    'zodiac-mid': '',
    'tool-mid': ''
  }
};

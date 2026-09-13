/**
 * AstroLens — shared astrology & numerology logic
 * 纯函数、无依赖、可离线运行。所有"每日运势"按 (日期+星座) 播种生成，
 * 同一天内稳定可复现，跨天变化 —— 不访问任何外部服务。
 */
(function () {
  var SIGNS = window.ZODIAC || [];
  var bySlug = {};
  SIGNS.forEach(function (s) { bySlug[s.slug] = s; });

  /* ---------------- 太阳星座推算 ---------------- */
  // 边界按通行日期；交界日逐年有±1天浮动，页面已注明
  var CUTOFFS = [
    { slug: 'capricorn', end: [1, 19] },
    { slug: 'aquarius', end: [2, 18] },
    { slug: 'pisces', end: [3, 20] },
    { slug: 'aries', end: [4, 19] },
    { slug: 'taurus', end: [5, 20] },
    { slug: 'gemini', end: [6, 20] },
    { slug: 'cancer', end: [7, 22] },
    { slug: 'leo', end: [8, 22] },
    { slug: 'virgo', end: [9, 22] },
    { slug: 'libra', end: [10, 22] },
    { slug: 'scorpio', end: [11, 21] },
    { slug: 'sagittarius', end: [12, 21] },
    { slug: 'capricorn', end: [12, 31] }
  ];

  function signFromDate(month, day) {
    for (var i = 0; i < CUTOFFS.length; i++) {
      var c = CUTOFFS[i];
      if (month < c.end[0] || (month === c.end[0] && day <= c.end[1])) return c.slug;
    }
    return 'capricorn';
  }

  function getSign(slug) { return bySlug[slug] || null; }
  function elementOf(slug) { var s = bySlug[slug]; return s ? s.element : null; }

  /* ---------------- 确定性伪随机（播种） ---------------- */
  function hashStr(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function mulberry32(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* ---------------- 每日运势 ---------------- */
  var FIRE_LINES = [
    'Momentum is on your side — the first move you make today sets the tone for the rest of the week.',
    'Your instinct is running ahead of your reasoning, and today that is an advantage. Act on the first clear impulse.',
    'Channel the extra energy into one thing rather than five; scattered force achieves nothing today.',
    'A direct conversation you have been avoiding will go better than you expect. Say the thing plainly.',
    'Competitive energy is high. Aim it at a goal, not at a person.'
  ];
  var EARTH_LINES = [
    'Steady, unglamorous progress is today\'s win. Finish the small thing you keep postponing.',
    'Your patience is being tested by someone moving faster and less carefully. Let them; your pace is correct.',
    'Money and practical matters respond well to attention today. Check the detail you usually skip.',
    'Comfort is not laziness today — rest is what makes the next stretch of work possible.',
    'Something you built quietly is starting to hold weight. Trust the structure.'
  ];
  var AIR_LINES = [
    'An idea lands today that connects two things you had kept separate. Write it down before it evaporates.',
    'Conversation is your best tool today — the answer arrives through talking, not thinking alone.',
    'You are seeing every side of a decision, which is useful right up until you must choose. Choose by evening.',
    'Social energy is high but focus is thin. Protect one hour for the thing that matters.',
    'Someone will say something careless today. It is not about you; let it pass through.'
  ];
  var WATER_LINES = [
    'You are picking up on something unspoken. Trust the feeling, but ask the question before you act on it.',
    'Emotions run deeper than usual today. Give yourself permission to feel it without fixing it immediately.',
    'A boundary you have been reluctant to set is the kindest thing you can do — for both of you.',
    'Nostalgia is strong today. Let it inform you, but do not let it make your decisions.',
    'Your intuition is unusually accurate. The first read you had of the situation was the right one.'
  ];
  var MOODS = ['focused', 'restless', 'reflective', 'magnetic', 'practical', 'expansive', 'tender', 'decisive', 'curious', 'grounded'];
  var COLORS = ['deep violet', 'warm gold', 'sea green', 'midnight blue', 'burnt orange', 'soft rose', 'silver grey', 'forest green', 'crimson', 'cream'];

  function linesFor(element) {
    if (element === 'Fire') return FIRE_LINES;
    if (element === 'Earth') return EARTH_LINES;
    if (element === 'Air') return AIR_LINES;
    return WATER_LINES;
  }

  function dailyReading(slug, date) {
    var d = date || new Date();
    var key = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    var rnd = mulberry32(hashStr(key + '|' + slug));
    var sign = bySlug[slug];
    var el = sign ? sign.element : 'Fire';
    var pool = linesFor(el);
    var idx = Math.floor(rnd() * pool.length);
    var scores = {
      love: 45 + Math.floor(rnd() * 51),
      career: 45 + Math.floor(rnd() * 51),
      money: 45 + Math.floor(rnd() * 51),
      energy: 45 + Math.floor(rnd() * 51)
    };
    return {
      dateLabel: d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      text: pool[idx],
      mood: MOODS[Math.floor(rnd() * MOODS.length)],
      color: COLORS[Math.floor(rnd() * COLORS.length)],
      number: 1 + Math.floor(rnd() * 9),
      scores: scores
    };
  }

  function meterHTML(label, value) {
    return '<div class="meter"><div class="m-label"><span>' + label + '</span><span>' + value + '%</span></div>' +
      '<div class="m-track"><div class="m-fill" style="width:' + value + '%"></div></div></div>';
  }

  /* ---------------- 星座配对 ---------------- */
  // 依据：元素相容(火风/土水最合) + 性质(同性质易内耗) + 对宫互补吸引
  var ELEMENT_SCORE = {
    'Fire|Air': 88, 'Air|Fire': 88,
    'Earth|Water': 88, 'Water|Earth': 88,
    'Fire|Fire': 82, 'Earth|Earth': 82, 'Air|Air': 82, 'Water|Water': 82,
    'Fire|Earth': 63, 'Earth|Fire': 63,
    'Air|Water': 60, 'Water|Air': 60,
    'Fire|Water': 61, 'Water|Fire': 61,
    'Air|Earth': 60, 'Earth|Air': 60
  };
  var OPPOSITES = {
    aries: 'libra', libra: 'aries',
    taurus: 'scorpio', scorpio: 'taurus',
    gemini: 'sagittarius', sagittarius: 'gemini',
    cancer: 'capricorn', capricorn: 'cancer',
    leo: 'aquarius', aquarius: 'leo',
    virgo: 'pisces', pisces: 'virgo'
  };

  function compatibility(a, b) {
    var sa = bySlug[a], sb = bySlug[b];
    if (!sa || !sb) return null;
    var score;
    if (a === b) {
      score = 74;
    } else {
      score = ELEMENT_SCORE[sa.element + '|' + sb.element] || 65;
      if (sa.quality === sb.quality) score -= 6; else score += 4;
      if (OPPOSITES[a] === b) score += 8;
    }
    score = Math.max(35, Math.min(96, score));

    var band = score >= 85 ? 'Exceptional' : score >= 74 ? 'Strong' : score >= 62 ? 'Workable' : 'Challenging';
    var note;
    if (a === b) {
      note = 'Two ' + sa.name + ' natives understand each other instantly — the same instincts, the same pace. The risk is that neither provides the friction that forces growth, and small irritations get amplified because they are so familiar.';
    } else if (OPPOSITES[a] === b) {
      note = sa.name + ' and ' + sb.name + ' sit opposite each other on the zodiac wheel. This is the classic "opposites attract" pairing: magnetic and complementary, but it demands real negotiation, because you approach everything from opposite ends.';
    } else if (sa.element === sb.element) {
      note = 'Both ' + sa.element + ' signs, so you share a basic language — the same values, the same rhythm. The bond is easy and deep. The caution is a shared blind spot: you will both avoid the same things, and nothing pushes either of you to change.';
    } else if ((sa.element === 'Fire' && sb.element === 'Air') || (sa.element === 'Air' && sb.element === 'Fire')) {
      note = sa.name + ' and ' + sb.name + ' are a classic Fire–Air match: Air feeds Fire with ideas and conversation, Fire gives Air momentum and direction. Warm, lively and low-friction — as long as the Air sign gets room to think and the Fire sign gets attention.';
    } else if ((sa.element === 'Earth' && sb.element === 'Water') || (sa.element === 'Water' && sb.element === 'Earth')) {
      note = sa.name + ' and ' + sb.name + ' form a grounding Earth–Water pairing: Water supplies emotional depth and intuition, Earth supplies stability and follow-through. One of the most naturally nurturing combinations in the zodiac.';
    } else if ((sa.element === 'Fire' && sb.element === 'Water') || (sa.element === 'Water' && sb.element === 'Fire')) {
      note = 'Fire and Water can build real steam — intense attraction, real passion — but they work on different emotional speeds. ' + sa.name + ' acts, ' + sb.name + ' feels, and each can read the other as either exciting or exhausting. Honest communication decides which.';
    } else if ((sa.element === 'Air' && sb.element === 'Earth') || (sa.element === 'Earth' && sb.element === 'Air')) {
      note = 'Air and Earth approach life differently: one lives in concepts, the other in what can be touched and built. That can be a genuinely useful division of labour — vision plus execution — if each respects the other\'s way of knowing.';
    } else {
      note = sa.name + ' and ' + sb.name + ' bring different temperaments to the same relationship. The attraction is real, but the pairing asks more negotiation than most: you will need to translate, not just assume.';
    }
    if (sa.quality === sb.quality && a !== b) {
      note += ' Both are ' + sa.quality.toLowerCase() + ' signs, so neither naturally yields — expect the occasional standoff.';
    }
    return { score: score, band: band, note: note };
  }

  /* ---------------- 数字命理 ---------------- */
  var LETTER = { a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:1,k:2,l:3,m:4,n:5,o:6,p:7,q:8,r:9,s:1,t:2,u:3,v:4,w:5,x:6,y:7,z:8 };
  var VOWELS = { a:1,e:1,i:1,o:1,u:1 };

  function reduceNum(n, keepMaster) {
    while (n > 9) {
      if (keepMaster && (n === 11 || n === 22 || n === 33)) return n;
      n = String(n).split('').reduce(function (a, c) { return a + Number(c); }, 0);
    }
    return n;
  }

  var NUMBER_MEANINGS = {
    1: { title: 'The Leader', text: 'Independence, initiative and originality. A 1 is built to start things and stand alone — self-reliant, pioneering and allergic to being managed. The lesson is learning to collaborate without losing authority.' },
    2: { title: 'The Diplomat', text: 'Partnership, sensitivity and balance. A 2 works through relationship — diplomatic, intuitive and quietly influential. The lesson is holding your own needs alongside everyone else\'s.' },
    3: { title: 'The Communicator', text: 'Expression, creativity and joy. A 3 is wired to create and connect — social, imaginative and articulate. The lesson is finishing what you start and going deeper than the surface.' },
    4: { title: 'The Builder', text: 'Structure, discipline and reliability. A 4 makes things that last — methodical, hardworking and trustworthy. The lesson is flexibility, and allowing yourself to rest.' },
    5: { title: 'The Explorer', text: 'Freedom, change and experience. A 5 needs movement and variety — adaptable, curious and magnetic. The lesson is committing deeply to one thing long enough to master it.' },
    6: { title: 'The Nurturer', text: 'Responsibility, care and beauty. A 6 builds homes and communities — devoted, protective and aesthetically alive. The lesson is healthy boundaries and not carrying others\' burdens.' },
    7: { title: 'The Seeker', text: 'Analysis, depth and inner truth. A 7 needs to understand — introspective, perceptive and original. The lesson is trusting people with your inner world.' },
    8: { title: 'The Achiever', text: 'Power, abundance and authority. An 8 is built for scale — strategic, ambitious and resilient. The lesson is separating self-worth from achievement.' },
    9: { title: 'The Humanitarian', text: 'Compassion, wisdom and completion. A 9 gives broadly — idealistic, generous and wise. The lesson is releasing what is finished and letting yourself be cared for.' },
    11: { title: 'The Illuminator (Master Number)', text: 'Heightened intuition and spiritual insight. An 11 is a visionary channel — inspiring, sensitive and ahead of its time. The lesson is grounding the vision in real life.' },
    22: { title: 'The Master Builder (Master Number)', text: 'The ability to turn large visions into concrete reality. A 22 combines the dreamer and the engineer. The lesson is trusting the scale of your own ambition.' },
    33: { title: 'The Master Teacher (Master Number)', text: 'Rare, unconditional compassion and healing. A 33 is here to lift others — selfless, wise and deeply caring. The lesson is giving without dissolving yourself.' }
  };

  function lifePath(year, month, day) {
    var digits = String(year) + String(month) + String(day);
    var total = 0;
    // 先按整段日期求和再归约，保留主数
    total = String(digits).split('').reduce(function (a, c) { return a + Number(c); }, 0);
    return reduceNum(total, true);
  }

  function nameNumber(name, mode) {
    var clean = String(name || '').toLowerCase().replace(/[^a-z]/g, '');
    if (!clean) return 0;
    var total = 0;
    for (var i = 0; i < clean.length; i++) {
      var ch = clean[i];
      if (mode === 'vowels' && !VOWELS[ch]) continue;
      if (mode === 'consonants' && VOWELS[ch]) continue;
      total += LETTER[ch] || 0;
    }
    return reduceNum(total, true);
  }

  function birthdayNumber(day) { return reduceNum(Number(day), false); }

  function numMeaning(n) { return NUMBER_MEANINGS[n] || null; }

  /* ---------------- 导出 ---------------- */
  window.Astro = {
    signs: SIGNS,
    getSign: getSign,
    elementOf: elementOf,
    signFromDate: signFromDate,
    dailyReading: dailyReading,
    meterHTML: meterHTML,
    compatibility: compatibility,
    lifePath: lifePath,
    nameNumber: nameNumber,
    birthdayNumber: birthdayNumber,
    numMeaning: numMeaning,
    hashStr: hashStr,
    mulberry32: mulberry32,
    slugify: function (s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  };
})();

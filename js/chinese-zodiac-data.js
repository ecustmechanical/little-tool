/**
 * AstroLens — Chinese zodiac dataset (source of truth for the 12 animal pages)
 * 每个生肖：中文名/五行/阴阳/年份范围/性格/爱情/事业/幸运元素/三合/六合/六冲
 * 文案逐条人工撰写，非模板套话。
 */
window.CHINESE_ZODIAC = [
  {
    name: 'Rat', cn: '鼠', cnChar: '鼠', slug: 'rat',
    element: 'Water', yinYang: 'Yang',
    years: [1924,1936,1948,1960,1972,1984,1996,2008,2020,2032],
    dates: 'Jan 24 – Feb 10',
    emoji: '🐀',
    personality: 'Quick-witted, resourceful, versatile, kind. Rats are clever and adaptable with sharp instincts.',
    strengths: ['Intelligent', 'Adaptable', 'Quick-thinking', 'Resourceful'],
    weaknesses: ['Overcautious', 'Indecisive', 'Stubborn'],
    love: 'Rats are charming and attentive partners. Best matches: Dragon, Monkey, Ox.',
    career: 'Rats thrive in analytical, strategic roles. Lucky careers: finance, writing, research.',
    lucky: { colors: ['Blue', 'Gold', 'Green'], numbers: [2, 3], flowers: ['Lily', 'African Violet'], directions: ['West', 'Southwest'] },
    trines: ['Dragon', 'Monkey'],
    compat: ['Ox'],
    clashes: ['Horse'],
    description: 'The Rat is the first animal in the Chinese zodiac cycle. People born in the Year of the Rat are known for their quick wit, resourcefulness, and adaptability. According to legend, the Rat won first place by riding on the Ox\'s back and jumping off at the finish line.',
    faq: [
      { q: 'What years are the Year of the Rat?', a: 'Recent Rat years include 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020 and 2032. The Chinese zodiac follows a 12-year cycle, so Rat years repeat every 12 years.' },
      { q: 'What element is the Rat in the Chinese zodiac?', a: 'The Rat is associated with the Water element. Each element combines with the 12 animals in a 60-year grand cycle, so there are five types of Rats: Wood, Fire, Earth, Metal and Water.' },
      { q: 'What Chinese zodiac signs are most compatible with the Rat?', a: 'The Rat is most compatible with the Dragon and Monkey (its San He trine) and the Ox (its Liu He secret friend). It clashes with the Horse.' }
    ]
  },
  {
    name: 'Ox', cn: '牛', cnChar: '牛', slug: 'ox',
    element: 'Earth', yinYang: 'Yin',
    years: [1925,1937,1949,1961,1973,1985,1997,2009,2021,2033],
    dates: 'Feb 11 – Jan 28',
    emoji: '🐂',
    personality: 'Dependent, hardworking, strong, determined. Oxen are the reliable workhorses of the zodiac.',
    strengths: ['Dependable', 'Strong', 'Determined', 'Patient'],
    weaknesses: ['Uncommunicative', 'Rigid', 'Stubborn'],
    love: 'Oxen are loyal and steady partners who value commitment. Best matches: Rat, Snake, Rooster.',
    career: 'Oxen excel in roles requiring patience and persistence. Lucky careers: agriculture, engineering, medicine.',
    lucky: { colors: ['Yellow', 'Green', 'White'], numbers: [1, 4], flowers: ['Tulip', 'Peach Blossom'], directions: ['Southeast', 'South'] },
    trines: ['Snake', 'Rooster'],
    compat: ['Rat'],
    clashes: ['Goat'],
    description: 'The Ox is the second animal in the Chinese zodiac. People born in the Year of the Ox are known for their dependability, strength, and determination. The Ox represents hard work, honesty and the ability to endure hardship without complaint.',
    faq: [
      { q: 'What years are the Year of the Ox?', a: 'Recent Ox years include 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021 and 2033. The Chinese zodiac follows a 12-year cycle.' },
      { q: 'What element is the Ox?', a: 'The Ox is associated with the Earth element. The five elements cycle through the 12 animals, producing five distinct types of Ox over a 60-year grand cycle.' },
      { q: 'What Chinese zodiac signs are most compatible with the Ox?', a: 'The Ox is most compatible with the Snake and Rooster (its San He trine) and the Rat (its Liu He secret friend). It clashes with the Goat.' }
    ]
  },
  {
    name: 'Tiger', cn: '虎', cnChar: '虎', slug: 'tiger',
    element: 'Wood', yinYang: 'Yang',
    years: [1926,1938,1950,1962,1974,1986,1998,2010,2022,2034],
    dates: 'Jan 29 – Feb 15',
    emoji: '🐅',
    personality: 'Competitive, brave, confident, unpredictable. Tigers are the courageous warriors of the zodiac.',
    strengths: ['Confident', 'Brave', 'Competitive', 'Charismatic'],
    weaknesses: ['Impulsive', 'Reckless', 'Short-tempered'],
    love: 'Tigers are passionate and romantic partners. Best matches: Horse, Dog, Pig.',
    career: 'Tigers thrive in leadership and high-stakes roles. Lucky careers: military, politics, entertainment.',
    lucky: { colors: ['Blue', 'Gray', 'Orange'], numbers: [1, 3, 4], flowers: ['Cineraria', 'Yellow Lily'], directions: ['East', 'South', 'North'] },
    trines: ['Horse', 'Dog'],
    compat: ['Pig'],
    clashes: ['Monkey'],
    description: 'The Tiger is the third animal in the Chinese zodiac. People born in the Year of the Tiger are known for their courage, confidence and competitiveness. The Tiger is the king of all beasts in Chinese culture and symbolises power and unpredictability.',
    faq: [
      { q: 'What years are the Year of the Tiger?', a: 'Recent Tiger years include 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022 and 2034.' },
      { q: 'What element is the Tiger?', a: 'The Tiger is associated with the Wood element. Each 12-year cycle combines with one of five elements, creating five Tiger types over a 60-year grand cycle.' },
      { q: 'What Chinese zodiac signs are most compatible with the Tiger?', a: 'The Tiger is most compatible with the Horse and Dog (its San He trine) and the Pig (its Liu He secret friend). It clashes with the Monkey.' }
    ]
  },
  {
    name: 'Rabbit', cn: '兔', cnChar: '兔', slug: 'rabbit',
    element: 'Wood', yinYang: 'Yin',
    years: [1927,1939,1951,1963,1975,1987,1999,2011,2023,2035],
    dates: 'Feb 16 – Jan 25',
    emoji: '🐇',
    personality: 'Quiet, elegant, kind, responsible. Rabbits are the gentle peacemakers of the zodiac.',
    strengths: ['Gentle', 'Elegant', 'Diplomatic', 'Quick'],
    weaknesses: ['Indecisive', 'Timid', 'Resistant to change'],
    love: 'Rabbits are tender and romantic partners who seek harmony. Best matches: Dog, Goat, Pig.',
    career: 'Rabbits thrive in creative and diplomatic roles. Lucky careers: art, diplomacy, fashion.',
    lucky: { colors: ['Pink', 'Purple', 'Blue'], numbers: [3, 4, 6], flowers: ['Plantain', 'Primrose'], directions: ['East', 'South', 'Northwest'] },
    trines: ['Goat', 'Pig'],
    compat: ['Dog'],
    clashes: ['Rooster'],
    description: 'The Rabbit is the fourth animal in the Chinese zodiac. People born in the Year of the Rabbit are known for their gentleness, elegance and diplomatic nature. The Rabbit symbolises longevity, peace and prosperity in Chinese culture.',
    faq: [
      { q: 'What years are the Year of the Rabbit?', a: 'Recent Rabbit years include 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023 and 2035.' },
      { q: 'What element is the Rabbit?', a: 'The Rabbit is associated with the Wood element. The five elements cycle through all 12 animals over a 60-year grand cycle.' },
      { q: 'What Chinese zodiac signs are most compatible with the Rabbit?', a: 'The Rabbit is most compatible with the Goat and Pig (its San He trine) and the Dog (its Liu He secret friend). It clashes with the Rooster.' }
    ]
  },
  {
    name: 'Dragon', cn: '龙', cnChar: '龙', slug: 'dragon',
    element: 'Earth', yinYang: 'Yang',
    years: [1928,1940,1952,1964,1976,1988,2000,2012,2024,2036],
    dates: 'Jan 17 – Feb 04',
    emoji: '🐉',
    personality: 'Confident, intelligent, enthusiastic, ambitious. Dragons are the powerful leaders of the zodiac.',
    strengths: ['Ambitious', 'Charismatic', 'Lucky', 'Natural leader'],
    weaknesses: ['Arrogant', 'Domineering', 'Intolerant'],
    love: 'Dragons are exciting and loyal partners who inspire those around them. Best matches: Rat, Monkey, Rooster.',
    career: 'Dragons excel in positions of authority and innovation. Lucky careers: entrepreneurship, politics, architecture.',
    lucky: { colors: ['Gold', 'Silver', 'Gray'], numbers: [1, 6, 7], flowers: ['Bleeding Heart', 'Dragon Flowers'], directions: ['East', 'North', 'South'] },
    trines: ['Rat', 'Monkey'],
    compat: ['Rooster'],
    clashes: ['Dog'],
    description: 'The Dragon is the fifth and only mythical animal in the Chinese zodiac. People born in the Year of the Dragon are known for their confidence, ambition and charisma. The Dragon is the most revered animal in Chinese culture, symbolising power, nobility and good fortune.',
    faq: [
      { q: 'What years are the Year of the Dragon?', a: 'Recent Dragon years include 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024 and 2036.' },
      { q: 'What element is the Dragon?', a: 'The Dragon is associated with the Earth element. Each 60-year grand cycle produces five types of Dragon, one for each element.' },
      { q: 'What Chinese zodiac signs are most compatible with the Dragon?', a: 'The Dragon is most compatible with the Rat and Monkey (its San He trine) and the Rooster (its Liu He secret friend). It clashes with the Dog.' }
    ]
  },
  {
    name: 'Snake', cn: '蛇', cnChar: '蛇', slug: 'snake',
    element: 'Fire', yinYang: 'Yin',
    years: [1929,1941,1953,1965,1977,1989,2001,2013,2025,2037],
    dates: 'Feb 05 – Jan 24',
    emoji: '🐍',
    personality: 'Enigmatic, intelligent, wise, intuitive. Snakes are the deep thinkers of the zodiac.',
    strengths: ['Wise', 'Intuitive', 'Elegant', 'Determined'],
    weaknesses: ['Suspicious', 'Secretive', 'Cold'],
    love: 'Snakes are deeply passionate and possessive partners. Best matches: Ox, Rooster, Monkey.',
    career: 'Snakes thrive in research and strategy roles. Lucky careers: science, psychology, finance.',
    lucky: { colors: ['Red', 'Light Yellow', 'Black'], numbers: [2, 8, 9], flowers: ['Orchid', 'Cactus'], directions: ['Southwest', 'South'] },
    trines: ['Ox', 'Rooster'],
    compat: ['Monkey'],
    clashes: ['Pig'],
    description: 'The Snake is the sixth animal in the Chinese zodiac. People born in the Year of the Snake are known for their wisdom, intuition and enigmatic nature. The Snake is associated with mystery and intelligence in Chinese culture.',
    faq: [
      { q: 'What years are the Year of the Snake?', a: 'Recent Snake years include 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025 and 2037.' },
      { q: 'What element is the Snake?', a: 'The Snake is associated with the Fire element. Five types of Snake exist over the 60-year grand cycle.' },
      { q: 'What Chinese zodiac signs are most compatible with the Snake?', a: 'The Snake is most compatible with the Ox and Rooster (its San He trine) and the Monkey (its Liu He secret friend). It clashes with the Pig.' }
    ]
  },
  {
    name: 'Horse', cn: '马', cnChar: '马', slug: 'horse',
    element: 'Fire', yinYang: 'Yang',
    years: [1930,1942,1954,1966,1978,1990,2002,2014,2026,2038],
    dates: 'Jan 26 – Feb 11',
    emoji: '🐴',
    personality: 'Animated, active, energetic, independent. Horses are the free spirits of the zodiac.',
    strengths: ['Energetic', 'Free-spirited', 'Warm', 'Independent'],
    weaknesses: ['Impatient', 'Hot-tempered', 'Restless'],
    love: 'Horses are exciting and passionate partners who need freedom. Best matches: Tiger, Dog, Goat.',
    career: 'Horses thrive in dynamic and independent roles. Lucky careers: sports, travel, sales, journalism.',
    lucky: { colors: ['Yellow', 'Green', 'Red'], numbers: [2, 3, 7], flowers: ['Sunflower', 'Jasmine'], directions: ['East', 'South', 'West'] },
    trines: ['Tiger', 'Dog'],
    compat: ['Goat'],
    clashes: ['Rat'],
    description: 'The Horse is the seventh animal in the Chinese zodiac and the current year animal for 2026. People born in the Year of the Horse are known for their energy, independence and free spirit. The Horse symbolises speed, passion and perseverance.',
    faq: [
      { q: 'What years are the Year of the Horse?', a: 'Recent Horse years include 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026 and 2038. 2026 is the current Year of the Horse.' },
      { q: 'What element is the Horse?', a: 'The Horse is associated with the Fire element. The five elements cycle through the 12 animals, so there are five Horse types in the 60-year grand cycle.' },
      { q: 'What Chinese zodiac signs are most compatible with the Horse?', a: 'The Horse is most compatible with the Tiger and Dog (its San He trine) and the Goat (its Liu He secret friend). It clashes with the Rat.' }
    ]
  },
  {
    name: 'Goat', cn: '羊', cnChar: '羊', slug: 'goat',
    element: 'Earth', yinYang: 'Yin',
    years: [1931,1943,1955,1967,1979,1991,2003,2015,2027,2039],
    dates: 'Feb 12 – Jan 31',
    emoji: '🐑',
    personality: 'Calm, gentle, sympathetic, creative. Goats are the artistic souls of the zodiac.',
    strengths: ['Creative', 'Gentle', 'Compassionate', 'Elegant'],
    weaknesses: ['Indecisive', 'Timid', 'Pessimistic'],
    love: 'Goats are warm and caring partners who value comfort. Best matches: Rabbit, Horse, Pig.',
    career: 'Goats thrive in creative and humanitarian roles. Lucky careers: art, music, design, counselling.',
    lucky: { colors: ['Green', 'Red', 'Purple'], numbers: [2, 7], flowers: ['Carnation', 'Primrose'], directions: ['North', 'East'] },
    trines: ['Rabbit', 'Pig'],
    compat: ['Horse'],
    clashes: ['Ox'],
    description: 'The Goat is the eighth animal in the Chinese zodiac. People born in the Year of the Goat are known for their creativity, gentleness and artistic sensibility. The Goat symbolises peace, harmony and artistic beauty in Chinese culture.',
    faq: [
      { q: 'What years are the Year of the Goat?', a: 'Recent Goat years include 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027 and 2039.' },
      { q: 'What element is the Goat?', a: 'The Goat is associated with the Earth element. Five Goat types exist over the 60-year grand cycle.' },
      { q: 'What Chinese zodiac signs are most compatible with the Goat?', a: 'The Goat is most compatible with the Rabbit and Pig (its San He trine) and the Horse (its Liu He secret friend). It clashes with the Ox.' }
    ]
  },
  {
    name: 'Monkey', cn: '猴', cnChar: '猴', slug: 'monkey',
    element: 'Metal', yinYang: 'Yang',
    years: [1932,1944,1956,1968,1980,1992,2004,2016,2028,2040],
    dates: 'Jan 31 – Feb 18',
    emoji: '🐒',
    personality: 'Sharp, smart, curious, witty. Monkeys are the clever tricksters of the zodiac.',
    strengths: ['Clever', 'Witty', 'Innovative', 'Curious'],
    weaknesses: ['Mischievous', 'Restless', 'Unreliable'],
    love: 'Monkeys are playful and exciting partners who bring fun. Best matches: Rat, Dragon, Snake.',
    career: 'Monkeys thrive in fast-paced, creative roles. Lucky careers: technology, comedy, engineering, trading.',
    lucky: { colors: ['White', 'Gold', 'Blue'], numbers: [4, 9], flowers: ['Chrysanthemum', 'Allium'], directions: ['North', 'West', 'Northwest'] },
    trines: ['Rat', 'Dragon'],
    compat: ['Snake'],
    clashes: ['Tiger'],
    description: 'The Monkey is the ninth animal in the Chinese zodiac. People born in the Year of the Monkey are known for their cleverness, wit and curiosity. The Monkey symbolises intelligence, innovation and playfulness in Chinese culture.',
    faq: [
      { q: 'What years are the Year of the Monkey?', a: 'Recent Monkey years include 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028 and 2040.' },
      { q: 'What element is the Monkey?', a: 'The Monkey is associated with the Metal element. The five elements cycle through all 12 animals in a 60-year grand cycle.' },
      { q: 'What Chinese zodiac signs are most compatible with the Monkey?', a: 'The Monkey is most compatible with the Rat and Dragon (its San He trine) and the Snake (its Liu He secret friend). It clashes with the Tiger.' }
    ]
  },
  {
    name: 'Rooster', cn: '鸡', cnChar: '鸡', slug: 'rooster',
    element: 'Metal', yinYang: 'Yin',
    years: [1933,1945,1957,1969,1981,1993,2005,2017,2029,2041],
    dates: 'Feb 19 – Feb 06',
    emoji: '🐓',
    personality: 'Observant, hardworking, courageous, talented. Roosters are the honest perfectionists of the zodiac.',
    strengths: ['Honest', 'Hardworking', 'Observant', 'Confident'],
    weaknesses: ['Vain', 'Blunt', 'Critical'],
    love: 'Roosters are honest and loyal partners who value fidelity. Best matches: Ox, Snake, Dragon.',
    career: 'Roosters thrive in detail-oriented and public roles. Lucky careers: accounting, law, journalism, surgery.',
    lucky: { colors: ['Gold', 'Brown', 'Yellow'], numbers: [5, 7, 8], flowers: ['Gladiola', 'Impatiens'], directions: ['South', 'Southeast'] },
    trines: ['Ox', 'Snake'],
    compat: ['Dragon'],
    clashes: ['Rabbit'],
    description: 'The Rooster is the tenth animal in the Chinese zodiac. People born in the Year of the Rooster are known for their honesty, hard work and attention to detail. The Rooster symbolises punctuality, fidelity and confidence.',
    faq: [
      { q: 'What years are the Year of the Rooster?', a: 'Recent Rooster years include 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029 and 2041.' },
      { q: 'What element is the Rooster?', a: 'The Rooster is associated with the Metal element. Five Rooster types exist over the 60-year grand cycle.' },
      { q: 'What Chinese zodiac signs are most compatible with the Rooster?', a: 'The Rooster is most compatible with the Ox and Snake (its San He trine) and the Dragon (its Liu He secret friend). It clashes with the Rabbit.' }
    ]
  },
  {
    name: 'Dog', cn: '狗', cnChar: '狗', slug: 'dog',
    element: 'Earth', yinYang: 'Yang',
    years: [1934,1946,1958,1970,1982,1994,2006,2018,2030,2042],
    dates: 'Feb 07 – Jan 28',
    emoji: '🐕',
    personality: 'Loyal, honest, amiable, cautious. Dogs are the faithful guardians of the zodiac.',
    strengths: ['Loyal', 'Honest', 'Reliable', 'Protective'],
    weaknesses: ['Anxious', 'Pessimistic', 'Stubborn'],
    love: 'Dogs are deeply loyal and protective partners. Best matches: Rabbit, Tiger, Horse.',
    career: 'Dogs thrive in service and protective roles. Lucky careers: social work, law enforcement, healthcare.',
    lucky: { colors: ['Red', 'Green', 'Purple'], numbers: [3, 4, 9], flowers: ['Rose', 'Carnation'], directions: ['East', 'South', 'North'] },
    trines: ['Tiger', 'Horse'],
    compat: ['Rabbit'],
    clashes: ['Dragon'],
    description: 'The Dog is the eleventh animal in the Chinese zodiac. People born in the Year of the Dog are known for their loyalty, honesty and protective nature. The Dog symbolises fidelity, courage and an unwavering sense of justice.',
    faq: [
      { q: 'What years are the Year of the Dog?', a: 'Recent Dog years include 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030 and 2042.' },
      { q: 'What element is the Dog?', a: 'The Dog is associated with the Earth element. The five elements cycle through all 12 animals in a 60-year grand cycle.' },
      { q: 'What Chinese zodiac signs are most compatible with the Dog?', a: 'The Dog is most compatible with the Tiger and Horse (its San He trine) and the Rabbit (its Liu He secret friend). It clashes with the Dragon.' }
    ]
  },
  {
    name: 'Pig', cn: '猪', cnChar: '猪', slug: 'pig',
    element: 'Water', yinYang: 'Yin',
    years: [1935,1947,1959,1971,1983,1995,2007,2019,2031,2043],
    dates: 'Jan 29 – Feb 15',
    emoji: '🐖',
    personality: 'Compassionate, generous, diligent, peaceful. Pigs are the kind-hearted enjoyers of the zodiac.',
    strengths: ['Generous', 'Compassionate', 'Diligent', 'Peaceful'],
    weaknesses: ['Naive', 'Self-indulgent', 'Gullible'],
    love: 'Pigs are generous and warm partners who love deeply. Best matches: Tiger, Rabbit, Goat.',
    career: 'Pigs thrive in caring and generous roles. Lucky careers: hospitality, healthcare, charity, food industry.',
    lucky: { colors: ['Yellow', 'Gray', 'Brown'], numbers: [2, 5, 8], flowers: ['Hydrangea', 'Daisy'], directions: ['East', 'Southwest'] },
    trines: ['Rabbit', 'Goat'],
    compat: ['Tiger'],
    clashes: ['Snake'],
    description: 'The Pig is the twelfth and final animal in the Chinese zodiac. People born in the Year of the Pig are known for their generosity, compassion and sincerity. The Pig symbolises wealth, honesty and a love of life in Chinese culture.',
    faq: [
      { q: 'What years are the Year of the Pig?', a: 'Recent Pig years include 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031 and 2043.' },
      { q: 'What element is the Pig?', a: 'The Pig is associated with the Water element. Five Pig types exist over the 60-year grand cycle.' },
      { q: 'What Chinese zodiac signs are most compatible with the Pig?', a: 'The Pig is most compatible with the Rabbit and Goat (its San He trine) and the Tiger (its Liu He secret friend). It clashes with the Snake.' }
    ]
  }
];

/**
 * AstroLens — Chinese zodiac utility functions
 */
window.ChineseZodiac = {
  /**
   * Get the Chinese zodiac animal for a given birth year.
   * @param {number} year - birth year
   * @returns {object|null} the matching animal object or null
   */
  getSign: function (year) {
    if (!window.CHINESE_ZODIAC) return null;
    var y = Number(year);
    if (!y || y < 1) return null;
    var idx = (y - 4) % 12;
    if (idx < 0) idx += 12;
    return window.CHINESE_ZODIAC[idx] || null;
  },

  /**
   * Get the current Chinese zodiac year animal (based on 2026 = Horse).
   * @returns {object} the current year animal
   */
  getCurrentYear: function () {
    return this.getSign(new Date().getFullYear());
  },

  /**
   * Check if two animals are in the same trine (三合).
   * @param {string} a - animal name
   * @param {string} b - animal name
   * @returns {boolean}
   */
  _isTrine: function (a, b) {
    var sa = this.getSign(a) || (function () {
      for (var i = 0; i < window.CHINESE_ZODIAC.length; i++) {
        if (window.CHINESE_ZODIAC[i].cn === a || window.CHINESE_ZODIAC[i].name === a) return window.CHINESE_ZODIAC[i];
      }
      return null;
    })();
    var sb = this.getSign(b) || (function () {
      for (var i = 0; i < window.CHINESE_ZODIAC.length; i++) {
        if (window.CHINESE_ZODIAC[i].cn === b || window.CHINESE_ZODIAC[i].name === b) return window.CHINESE_ZODIAC[i];
      }
      return null;
    })();
    if (!sa || !sb) return false;
    return sa.trines.indexOf(sb.name) !== -1 || sb.trines.indexOf(sa.name) !== -1;
  },

  /**
   * Check if two animals are in the same compat pair (六合).
   */
  _isCompat: function (a, b) {
    var sa = this.getSign(a) || (function () {
      for (var i = 0; i < window.CHINESE_ZODIAC.length; i++) {
        if (window.CHINESE_ZODIAC[i].cn === a || window.CHINESE_ZODIAC[i].name === a) return window.CHINESE_ZODIAC[i];
      }
      return null;
    })();
    var sb = this.getSign(b) || (function () {
      for (var i = 0; i < window.CHINESE_ZODIAC.length; i++) {
        if (window.CHINESE_ZODIAC[i].cn === b || window.CHINESE_ZODIAC[i].name === b) return window.CHINESE_ZODIAC[i];
      }
      return null;
    })();
    if (!sa || !sb) return false;
    return sa.compat.indexOf(sb.name) !== -1 || sb.compat.indexOf(sa.name) !== -1;
  },

  /**
   * Check if two animals clash (六冲).
   */
  _isClash: function (a, b) {
    var sa = this._byName(a);
    var sb = this._byName(b);
    if (!sa || !sb) return false;
    return sa.clashes.indexOf(sb.name) !== -1 || sb.clashes.indexOf(sa.name) !== -1;
  },

  /**
   * Resolve an animal by English name, Chinese character or slug.
   */
  _byName: function (v) {
    if (!window.CHINESE_ZODIAC || !v) return null;
    for (var i = 0; i < window.CHINESE_ZODIAC.length; i++) {
      var a = window.CHINESE_ZODIAC[i];
      if (a.name === v || a.cn === v || a.slug === v) return a;
    }
    return null;
  },

  /**
   * Compatibility score (0-100) between two animals, with a short reason.
   * 三合 95 · 六合 90 · 同生肖 75 · 同五行 80 · 六冲 20 · 其余按五行生克 50-70
   */
  getCompat: function (a, b) {
    var sa = this._byName(a), sb = this._byName(b);
    if (!sa || !sb) return null;
    if (sa.name === sb.name) return { score: 75, reason: 'Same sign — instant understanding, but the same blind spots twice over.' };
    if (this._isTrine(a, b)) return { score: 95, reason: 'San He trine (三合) — a natural alliance of shared temperament and goals.' };
    if (this._isCompat(a, b)) return { score: 90, reason: 'Liu He secret friend (六合) — a quietly supportive, complementary pairing.' };
    if (this._isClash(a, b)) return { score: 20, reason: 'Liu Chong clash (六冲) — opposing energies that need deliberate effort to balance.' };

    var GEN = { Wood: 'Fire', Fire: 'Earth', Earth: 'Metal', Metal: 'Water', Water: 'Wood' };
    if (sa.element === sb.element) return { score: 80, reason: 'Same element — an easy, harmonious match with a shared outlook.' };
    if (GEN[sa.element] === sb.element) return { score: 65, reason: sa.element + ' feeds ' + sb.element + ' — one side naturally energises the other.' };
    if (GEN[sb.element] === sa.element) return { score: 65, reason: sb.element + ' feeds ' + sa.element + ' — one side naturally energises the other.' };
    return { score: 50, reason: 'Neutral elements — workable, but the pairing needs conscious communication.' };
  }
};

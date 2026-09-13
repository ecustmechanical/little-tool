/**
 * AstroLens — zodiac dataset (source of truth for the 12 sign pages)
 * 每个星座：日期/元素/性质/守护星/身体部位 + 性格/爱情/事业/金钱/友情 +
 * 幸运元素 + 名人 + FAQ。文案逐条人工撰写，非模板套话。
 * 注：星座交界日期逐年略有浮动，页面上已注明。
 */
window.ZODIAC = [
  {
    slug: 'aries', name: 'Aries', symbol: '♈', dates: 'March 21 – April 19',
    element: 'Fire', quality: 'Cardinal', ruler: 'Mars', polarity: 'Yang (active)',
    bodyPart: 'Head and face', tagline: 'The Initiator',
    summary: 'Aries is the first sign of the zodiac and the spark that starts everything. Ruled by Mars — the planet of drive and conflict — Aries leads with instinct, courage and an almost physical need to begin. Waiting is the one thing this sign cannot do.',
    strengths: ['Decisive under pressure', 'Genuinely brave, not just bold', 'Refreshingly direct', 'Fast to act and fast to recover', 'Natural starter of things'],
    weaknesses: ['Impatient with process', 'Can run over quieter people', 'Loses interest after the launch', 'Short fuse', 'Hates admitting boredom or doubt'],
    personality: [
      'Aries energy is pure forward motion. Where other signs weigh options, Aries has already moved — and is often right, because hesitation costs more than an imperfect first step. That instinct is why Aries shows up first in a crisis: the sign does not freeze.',
      'The flip side is stamina. Aries is built for the sprint and the ignition, not the long middle of a project. Learning to hand off, delegate and stay interested after the exciting part is the core lesson of this sign — and the difference between an Aries who starts ten things and an Aries who finishes something that matters.'
    ],
    love: {
      text: 'Aries loves the chase. The early stage — the spark, the pursuit, the electricity — is where this sign feels most alive, and it brings real generosity and honesty to a relationship. What Aries has to learn is that intimacy after the fireworks is not a downgrade; the quiet middle is where trust is actually built. Aries partners need space, honesty and a partner who can match their energy without competing with it.',
      best: ['leo', 'sagittarius', 'gemini', 'aquarius'],
      challenging: ['cancer', 'capricorn', 'virgo']
    },
    career: {
      text: 'Aries thrives where decisions are fast and the stakes are visible: launching, selling, leading, rescuing. It struggles in slow committees and roles with no authority to act. Put an Aries in charge of getting something off the ground, give them a clear scoreboard, then let them hand the maintenance to someone else.',
      fields: ['Entrepreneurship', 'Sales and business development', 'Emergency and first response', 'Sports and coaching', 'Surgery and acute medicine', 'Military and security', 'Creative direction']
    },
    money: 'Aries earns boldly and spends the same way — fast, on impulse, often on something exciting. The sign is not naturally careful with money, but it is naturally good at making more of it. The fix is not frugality; it is automation. Move a fixed share to savings the moment money arrives, so impulse never gets a vote.',
    friendship: 'Aries friends are the ones who show up when something has gone wrong. Loyal, blunt and allergic to gossip, they would rather solve your problem than discuss it for three hours. They need friends who can keep up and who will not take a blunt opinion personally.',
    family: 'In family life Aries is the protective, energetic presence — the one organising the trip, defending the sibling, pushing everyone out the door. Patience with slower family members is the growth edge.',
    lucky: { number: '1 and 9', days: 'Tuesday', colors: 'Red, scarlet, white', stones: 'Bloodstone, diamond, red jasper', metals: 'Iron, steel', flowers: 'Tulip, thistle' },
    famous: ['Lady Gaga', 'Robert Downey Jr.', 'Serena Williams', 'Marlon Brando', 'Reese Witherspoon'],
    faq: [
      { q: 'What are Aries dates?', a: 'Aries runs roughly from March 21 to April 19. Because the Sun crosses the sign boundary at a slightly different moment each year, people born on the first or last day should check their exact birth date and year to confirm whether they are Aries or Pisces/Taurus cusp.' },
      { q: 'Who is Aries most compatible with?', a: 'Aries tends to pair most easily with fellow Fire signs Leo and Sagittarius, and with Air signs Gemini and Aquarius — Air feeds Fire with ideas and conversation. Aries can find Water and Earth signs slower to act, though Cancer and Capricorn can offer the steadiness Aries lacks.' },
      { q: 'What is the Aries personality like?', a: 'Direct, energetic, competitive and quick to act. Aries is the zodiac\'s starter: brave in a crisis, impatient with routine, honest to the point of bluntness, and happiest when something new is beginning.' }
    ]
  },
  {
    slug: 'taurus', name: 'Taurus', symbol: '♉', dates: 'April 20 – May 20',
    element: 'Earth', quality: 'Fixed', ruler: 'Venus', polarity: 'Yin (receptive)',
    bodyPart: 'Throat and neck', tagline: 'The Stabiliser',
    summary: 'Taurus is the zodiac\'s anchor: ruled by Venus, it values what is real, lasting and pleasurable. Where other signs chase novelty, Taurus builds something solid — and then defends it with legendary stubbornness.',
    strengths: ['Reliable in a way people can plan around', 'Calm in a crisis', 'Excellent with money and resources', 'Deeply loyal', 'Genuinely good taste'],
    weaknesses: ['Resistant to change even when it is needed', 'Can confuse comfort with safety', 'Slow to forgive', 'Possessive', 'Avoids necessary conflict'],
    personality: [
      'Taurus is ruled by Venus, the planet of love and value, which is why this sign is associated with the senses — good food, good fabric, good music, good land. But the deeper Taurus trait is patience. This is a sign that will work the same field for years, and win because it did not leave.',
      'The shadow is inertia. Taurus resists change not because it is lazy but because it has correctly learned that most change is noise. The trouble is telling real change from noise, and moving before the ground shifts under you. Taurus grows by choosing its changes deliberately rather than waiting to be forced.'
    ],
    love: {
      text: 'Taurus is one of the most committed signs in the zodiac once it decides. It does not need drama; it needs consistency, physical affection and a shared life that feels built rather than performed. Courtship is slow and sensual — Taurus notices effort, reliability and small daily kindnesses far more than grand gestures. It can hold onto a relationship well past its end, simply because it does not like losing what it invested in.',
      best: ['virgo', 'capricorn', 'cancer', 'pisces'],
      challenging: ['leo', 'aquarius', 'aries']
    },
    career: {
      text: 'Taurus is built for craft, stewardship and long horizons. It is the sign most likely to still be excellent at the same job in twenty years, and most likely to be the person everyone trusts with the money. Suited to roles that reward depth, quality and care over speed and improvisation.',
      fields: ['Finance and accounting', 'Real estate and property', 'Agriculture and food', 'Design and craft', 'Banking and investment', 'Construction', 'Hospitality and cooking']
    },
    money: 'Money is a Taurus strength. This sign saves naturally, invests patiently and hates being in debt. The risk is over-attachment: hoarding out of fear, or refusing to spend on things that would genuinely improve life. Taurus does best with tangible assets it can see, hold and understand.',
    friendship: 'Taurus friendships are long, low-maintenance and durable. It will not text daily, but it will remember what you said you needed six months ago and quietly help. Taurus dislikes flaky people and groups that never commit to a plan.',
    family: 'Taurus is the family member who hosts, feeds everyone, and keeps the traditions alive. It provides stability for the whole family tree, sometimes at the cost of its own flexibility.',
    lucky: { number: '2 and 6', days: 'Friday', colors: 'Green, pink, earth tones', stones: 'Emerald, rose quartz, jade', metals: 'Copper', flowers: 'Rose, poppy, violet' },
    famous: ['Adele', 'David Beckham', 'Cher', 'George Clooney', 'Dwayne Johnson'],
    faq: [
      { q: 'What are Taurus dates?', a: 'Taurus runs roughly from April 20 to May 20. People born on the boundary days should confirm their exact Sun sign using their full birth date, because the crossing point shifts slightly year to year.' },
      { q: 'Who is Taurus most compatible with?', a: 'Taurus pairs naturally with fellow Earth signs Virgo and Capricorn, and with Water signs Cancer and Pisces, who bring emotional depth to Taurus\'s steadiness. Leo and Aquarius can feel too unpredictable for Taurus\'s taste.' },
      { q: 'What is the Taurus personality like?', a: 'Patient, dependable, sensual and stubborn. Taurus values security, quality and comfort, moves slowly but does not retreat, and is one of the most loyal signs in the zodiac once committed.' }
    ]
  },
  {
    slug: 'gemini', name: 'Gemini', symbol: '♊', dates: 'May 21 – June 20',
    element: 'Air', quality: 'Mutable', ruler: 'Mercury', polarity: 'Yang (active)',
    bodyPart: 'Hands, arms, shoulders, lungs', tagline: 'The Messenger',
    summary: 'Gemini is the zodiac\'s communicator, ruled by Mercury — the planet of language, learning and trade. Curious, quick and endlessly adaptable, Gemini collects ideas the way other signs collect objects.',
    strengths: ['Extremely quick to learn', 'Brilliant conversationalist', 'Flexible in any environment', 'Sees every side of an argument', 'Genuinely fun to be around'],
    weaknesses: ['Scattered focus', 'Can say things it does not mean', 'Avoids depth and commitment', 'Restless', 'Sometimes uses wit as a shield'],
    personality: [
      'Gemini processes the world through information. It is the sign that asks why until it understands, then moves to the next question. This makes Gemini superb in any situation requiring agility, translation or fast synthesis — and terrible at anything requiring patience with a single, slow subject.',
      'Gemini has a reputation for being two-faced. The truth is less dramatic: Gemini simply holds more than one honest perspective at once, and adapts its expression to the room. The sign\'s real work is not choosing a single voice but learning to stay long enough to finish something — to let an idea mature past the exciting stage.'
    ],
    love: {
      text: 'Gemini falls in love with minds first. Wit, curiosity and conversation matter more than looks, and a partner who cannot keep the dialogue interesting will lose Gemini\'s attention. Gemini needs freedom and novelty within a relationship — not to be unfaithful, but because sameness drains it. The sign\'s challenge is showing up consistently rather than only when things are stimulating.',
      best: ['libra', 'aquarius', 'aries', 'leo'],
      challenging: ['virgo', 'pisces', 'scorpio']
    },
    career: {
      text: 'Gemini is a natural in roles built on words, speed and variety: media, teaching, sales, writing, research, anything with a changing brief. It wilts in a silent, repetitive job with no conversation and no new input. Give a Gemini three projects instead of one and output doubles.',
      fields: ['Journalism and writing', 'Marketing and PR', 'Teaching and training', 'Sales and negotiation', 'Software and product', 'Broadcasting and podcasting', 'Translation and interpretation']
    },
    money: 'Gemini is good at spotting opportunity and bad at routine. Income often comes from several streams rather than one, which suits the sign but demands discipline. Gemini should automate bills and savings, because manual money admin is the first thing it forgets.',
    friendship: 'Gemini has a wide, loose network rather than a tight circle, and is the friend who connects other people to each other. It brings news, ideas and introductions — but must be careful not to trade real listening for clever commentary.',
    family: 'Gemini is the family explainer and entertainer, the one who keeps the group talking. It can struggle with the emotionally heavy, wordless parts of family life.',
    lucky: { number: '3 and 5', days: 'Wednesday', colors: 'Yellow, light blue, silver', stones: 'Agate, citrine, aquamarine', metals: 'Quicksilver (mercury), aluminium', flowers: 'Lily of the valley, lavender' },
    famous: ['Marilyn Monroe', 'Kanye West', 'Angelina Jolie', 'Johnny Depp', 'Natalie Portman'],
    faq: [
      { q: 'What are Gemini dates?', a: 'Gemini runs roughly from May 21 to June 20. Because the Sun enters Gemini at a slightly different time each year, birthdays on the very first or last day should be verified with an exact birth date and year.' },
      { q: 'Who is Gemini most compatible with?', a: 'Gemini connects most easily with Air signs Libra and Aquarius, and with Fire signs Aries and Leo — both supply the energy and novelty Gemini craves. Earth signs Virgo and Capricorn can feel too slow, though Virgo shares Gemini\'s ruler and often understands it deeply.' },
      { q: 'What is the Gemini personality like?', a: 'Curious, quick-witted, adaptable, social and restless. Gemini is a communicator and a learner, excellent with words and ideas, but tends to struggle with consistency and depth over the long term.' }
    ]
  },
  {
    slug: 'cancer', name: 'Cancer', symbol: '♋', dates: 'June 21 – July 22',
    element: 'Water', quality: 'Cardinal', ruler: 'The Moon', polarity: 'Yin (receptive)',
    bodyPart: 'Chest and stomach', tagline: 'The Protector',
    summary: 'Cancer is ruled by the Moon and governed by feeling, memory and home. Deeply intuitive and fiercely protective, Cancer defends the people it loves with a loyalty that borders on the elemental.',
    strengths: ['Profound emotional intelligence', 'Fiercely protective of loved ones', 'Excellent memory for what matters', 'Patient and nurturing', 'Reads a room instantly'],
    weaknesses: ['Takes things personally', 'Retreats into the shell when hurt', 'Holds grudges quietly', 'Moody', 'Can be manipulative through guilt'],
    personality: [
      'Cancer is the sign of belonging. Its instinct is to create a safe base — a home, a family, a team — and then defend it. That protective drive is genuine and powerful, and it is why Cancer shows up for people in a way that other signs simply do not sustain.',
      'The difficulty is that Cancer feels everything at full volume while showing very little of it. Hurt goes inward, where it is remembered for years. The mature Cancer learns to say the vulnerable thing out loud instead of withdrawing and waiting to be asked — which is the single biggest upgrade available to this sign.'
    ],
    love: {
      text: 'Cancer loves completely, domestically and for a long time. It wants to build a home and a shared life, and it shows love through care — food, attention, remembering. It needs reassurance and consistency and can read a small absence as rejection. A partner who is warm, steady and emotionally available gets the most loyal love in the zodiac.',
      best: ['scorpio', 'pisces', 'taurus', 'virgo'],
      challenging: ['aries', 'libra', 'aquarius']
    },
    career: {
      text: 'Cancer works best where care, memory, trust or belonging are the product. It leads through loyalty rather than command and is superb at looking after people and long-term relationships. It struggles in coldly competitive environments with no human warmth.',
      fields: ['Healthcare and nursing', 'Teaching and childcare', 'Hospitality', 'Counselling and therapy', 'HR and people operations', 'Real estate', 'Food and catering']
    },
    money: 'Cancer is cautious and saving comes naturally — security matters more than display. It tends to invest in property and family. The risk is emotional spending on family or comfort, and anxiety-driven hoarding.',
    friendship: 'Cancer is the friend who remembers your birthday, checks in after hard weeks, and feeds you. Friendships are few, deep and lifelong. It needs to be careful not to keep score silently.',
    family: 'Family is the centre of a Cancer\'s world. It is the one who keeps everyone connected, hosts the gatherings and carries the family memory. Boundaries with family are the recurring lesson.',
    lucky: { number: '2 and 7', days: 'Monday', colors: 'Silver, white, sea blue', stones: 'Moonstone, pearl, selenite', metals: 'Silver', flowers: 'Lily, white rose, iris' },
    famous: ['Tom Hanks', 'Princess Diana', 'Meryl Streep', 'Elon Musk', 'Ariana Grande'],
    faq: [
      { q: 'What are Cancer dates?', a: 'Cancer runs roughly from June 21 to July 22. The exact start and end shift slightly each year, so birthdays on the boundary should be confirmed with a full birth date.' },
      { q: 'Who is Cancer most compatible with?', a: 'Cancer pairs most naturally with Water signs Scorpio and Pisces, who match its emotional depth, and with Earth signs Taurus and Virgo, who provide the security Cancer needs. Aries and Aquarius can feel too detached or blunt.' },
      { q: 'What is the Cancer personality like?', a: 'Nurturing, intuitive, protective, sentimental and private. Cancer feels deeply, remembers everything that matters, builds a safe home base, and defends the people it loves with unusual loyalty.' }
    ]
  },
  {
    slug: 'leo', name: 'Leo', symbol: '♌', dates: 'July 23 – August 22',
    element: 'Fire', quality: 'Fixed', ruler: 'The Sun', polarity: 'Yang (active)',
    bodyPart: 'Heart and upper back', tagline: 'The Performer',
    summary: 'Leo is ruled by the Sun — the centre of the chart — and behaves accordingly. Warm, generous, dramatic and proud, Leo needs to create, to be seen, and to give. Its confidence is real, but so is the vulnerability underneath it.',
    strengths: ['Magnetic warmth and generosity', 'Natural leader', 'Genuinely loyal', 'Creative and playful', 'Brave about being visible'],
    weaknesses: ['Needs validation', 'Pride makes apologising hard', 'Can dominate a room', 'Dramatic when hurt', 'Stubborn about being wrong'],
    personality: [
      'Leo is the sign of creative self-expression. Its instinct is to shine — not from vanity, but because Leo understands that being fully visible is a form of generosity. Leo gives warmth freely and expects to be appreciated in return, and when that appreciation stops, the sign suffers in a way it rarely admits.',
      'The growth path for Leo is moving from needing an audience to being its own witness. A Leo who creates for the joy of it rather than the applause becomes almost unstoppable — generous, steady and genuinely charismatic without needing to be the loudest person in the room.'
    ],
    love: {
      text: 'Leo loves grandly, romantically and loyally. It wants to adore and be adored, and it brings real generosity to a relationship — attention, gifts, celebration. What Leo cannot tolerate is being taken for granted or embarrassed in public. Praise works; criticism in front of others is a wound.',
      best: ['aries', 'sagittarius', 'gemini', 'libra'],
      challenging: ['taurus', 'scorpio', 'virgo']
    },
    career: {
      text: 'Leo belongs in front: leading, presenting, performing, creating a brand. It needs autonomy, recognition and a stage of some kind. It does poorly in invisible back-office roles with no credit, and tends to attract followers rather than seek permission.',
      fields: ['Entertainment and performance', 'Leadership and executive roles', 'Creative direction', 'Marketing and branding', 'Teaching and public speaking', 'Fashion and design', 'Politics']
    },
    money: 'Leo earns well and spends generously — often on others, often visibly. It is not naturally frugal, but it is naturally good at earning through presence and reputation. Leo should separate "money for the show" from "money for the future" deliberately.',
    friendship: 'Leo is the friend who champions you publicly and celebrates your wins. It is warm, fun and protective of its circle. It needs friends who boost rather than compete.',
    family: 'Leo brings warmth, tradition and celebration to family life — the one who makes occasions feel special. Learning to share the spotlight with family members is the lesson.',
    lucky: { number: '1 and 5', days: 'Sunday', colors: 'Gold, orange, royal purple', stones: 'Citrine, amber, tiger\'s eye', metals: 'Gold', flowers: 'Sunflower, marigold, rose' },
    famous: ['Barack Obama', 'Madonna', 'Jennifer Lopez', 'Chris Hemsworth', 'Kylie Jenner'],
    faq: [
      { q: 'What are Leo dates?', a: 'Leo runs roughly from July 23 to August 22. Boundary birthdays should be checked against the exact year, because the Sun\'s entry into Leo varies slightly.' },
      { q: 'Who is Leo most compatible with?', a: 'Leo matches best with Fire signs Aries and Sagittarius and Air signs Gemini and Libra — Air feeds Leo\'s fire and appreciates its warmth. Taurus and Scorpio tend to clash over control and attention.' },
      { q: 'What is the Leo personality like?', a: 'Warm, confident, generous, dramatic and loyal. Leo is a natural performer and leader who needs to create and be appreciated, and who gives back loyalty and warmth in equal measure.' }
    ]
  },
  {
    slug: 'virgo', name: 'Virgo', symbol: '♍', dates: 'August 23 – September 22',
    element: 'Earth', quality: 'Mutable', ruler: 'Mercury', polarity: 'Yin (receptive)',
    bodyPart: 'Digestive system, intestines', tagline: 'The Analyst',
    summary: 'Virgo is ruled by Mercury but uses it for analysis rather than talk. Precision, service and self-improvement define this sign: Virgo sees what is wrong and, more than any other sign, wants to fix it properly.',
    strengths: ['Exceptional attention to detail', 'Genuinely helpful and practical', 'Reliable and methodical', 'Excellent at systems and quality', 'Modest about real skill'],
    weaknesses: ['Perfectionism that blocks finishing', 'Over-critical, especially of self', 'Worries constantly', 'Struggles to delegate', 'Can be hard to please'],
    personality: [
      'Virgo\'s instinct is discernment. It sees the flaw, the gap, the inconsistency — and unlike most people, it feels a real obligation to fix it. That makes Virgo invaluable: the editor, the diagnostician, the person who catches the error before it ships. It is service in its purest form.',
      'The cost is anxiety. Virgo applies the same ruthless standard to itself that it applies to work, which produces relentless self-criticism and a habit of delaying until things are perfect. The growth edge is learning that "done and good" beats "perfect and unfinished", and that not every flaw needs fixing.'
    ],
    love: {
      text: 'Virgo shows love practically — through acts of service, solving your problems, remembering your preferences. It is not effusive, but it is exceptionally attentive and reliable. Virgo needs a partner who appreciates quiet effort and who will not mistake honesty for criticism. It must also learn to say what it wants rather than hint at it.',
      best: ['taurus', 'capricorn', 'cancer', 'scorpio'],
      challenging: ['gemini', 'sagittarius', 'aquarius']
    },
    career: {
      text: 'Virgo excels where precision matters: analysis, editing, health, quality control, process design. It is the person who makes a good system excellent. It struggles when forced to present or self-promote, and can be held back by refusing to ship anything less than perfect.',
      fields: ['Medicine and healthcare', 'Editing and writing', 'Data and analytics', 'Quality assurance and compliance', 'Accounting and audit', 'Research', 'Nutrition and wellness']
    },
    money: 'Virgo is careful, analytical and good at budgeting. It researches before spending and rarely overspends. The downside is anxiety about money and difficulty spending on pleasure even when it is affordable.',
    friendship: 'Virgo is a quietly devoted friend — the one who remembers your allergies, helps you move, and gives the advice you actually needed. It dislikes drama and appreciates friends who are thoughtful and low-maintenance.',
    family: 'Virgo is the family fixer and organiser, the one who handles the practical details when something goes wrong. It can over-function for relatives, and needs to let others be imperfect.',
    lucky: { number: '5 and 14', days: 'Wednesday', colors: 'Navy blue, beige, sage', stones: 'Sapphire, peridot, jade', metals: 'Mercury, stainless steel', flowers: 'Lavender, hydrangea, buttercup' },
    famous: ['Beyoncé', 'Keanu Reeves', 'Michael Jackson', 'Zendaya', 'Pink'],
    faq: [
      { q: 'What are Virgo dates?', a: 'Virgo runs roughly from August 23 to September 22. Because the Sun\'s entry time changes year to year, birthdays right on the boundary should be confirmed with an exact date.' },
      { q: 'Who is Virgo most compatible with?', a: 'Virgo pairs best with Earth signs Taurus and Capricorn, who share its practicality, and with Water signs Cancer and Scorpio, who supply the emotional warmth Virgo finds hard to express. Gemini and Sagittarius can feel too chaotic.' },
      { q: 'What is the Virgo personality like?', a: 'Practical, analytical, modest, hardworking and detail-obsessed. Virgo is a fixer and a helper, precise and reliable, but prone to perfectionism and self-criticism.' }
    ]
  },
  {
    slug: 'libra', name: 'Libra', symbol: '♎', dates: 'September 23 – October 22',
    element: 'Air', quality: 'Cardinal', ruler: 'Venus', polarity: 'Yang (active)',
    bodyPart: 'Kidneys, lower back, skin', tagline: 'The Diplomat',
    summary: 'Libra is ruled by Venus and obsessed with balance: fairness, beauty, partnership and harmony. It is the sign most aware of other people — which makes it a superb diplomat and a chronic conflict-avoider.',
    strengths: ['Natural mediator', 'Genuinely fair-minded', 'Charming and socially skilled', 'Great aesthetic sense', 'Sees both sides instinctively'],
    weaknesses: ['Indecisive', 'Avoids confrontation at all costs', 'Can be people-pleasing', 'Struggles to know its own wants', 'Conflict-avoidance breeds resentment'],
    personality: [
      'Libra thinks in terms of relationships. It understands the world by weighing perspectives against each other, which makes it uniquely fair and uniquely indecisive. Libra sees the validity of every side so clearly that choosing one can feel like a betrayal of the others.',
      'This is also why Libra is essential: it is the sign that insists on justice, beauty and the other person\'s point of view. The work for Libra is learning that harmony built by avoiding conflict is fragile, and that honest disagreement — handled gracefully — is actually what real peace is made of.'
    ],
    love: {
      text: 'Partnership is Libra\'s natural habitat. It is romantic, attentive and superb at making the other person feel special. Libra will compromise generously and forgive quickly, but it can lose itself in a relationship — agreeing to things it never wanted in order to keep the peace. The sign needs a partner who asks what Libra actually wants.',
      best: ['gemini', 'aquarius', 'leo', 'sagittarius'],
      challenging: ['cancer', 'capricorn', 'aries']
    },
    career: {
      text: 'Libra succeeds wherever taste, negotiation or relationships drive the result: law, design, diplomacy, client work, curation. It works best in partnership rather than alone, and is capable of extraordinary diplomacy. It needs deadlines to overcome its indecision.',
      fields: ['Law and mediation', 'Design and interior architecture', 'Diplomacy and public relations', 'Fashion and beauty', 'Client relations and business development', 'Art curation', 'HR and culture']
    },
    money: 'Libra spends on beauty, comfort and nice things — and on other people. It is generous and often reluctant to discuss money, which can lead to vague financial arrangements. Clarity and a written budget serve Libra well.',
    friendship: 'Libra is the friend who brings people together and smooths over tensions in the group. Charming, warm and reliable in social settings. It must avoid becoming the group\'s permanent conflict-absorber.',
    family: 'Libra works to keep family harmony, often at personal cost. It is the peacemaker between relatives and the one who organises the gathering. Learning to voice its own needs in the family is the growth edge.',
    lucky: { number: '6 and 7', days: 'Friday', colors: 'Pink, pastel blue, lavender', stones: 'Opal, lapis lazuli, rose quartz', metals: 'Copper', flowers: 'Rose, daisy, orchid' },
    famous: ['Kim Kardashian', 'Will Smith', 'Kate Winslet', 'Gwen Stefani', 'Bruno Mars'],
    faq: [
      { q: 'What are Libra dates?', a: 'Libra runs roughly from September 23 to October 22. As with every sign, the exact boundary shifts slightly each year, so boundary birthdays should be confirmed with an exact birth date.' },
      { q: 'Who is Libra most compatible with?', a: 'Libra connects best with Air signs Gemini and Aquarius, and with Fire signs Leo and Sagittarius. Both appreciate Libra\'s charm and social grace. Cancer and Capricorn can frustrate Libra\'s need for lightness and balance.' },
      { q: 'What is the Libra personality like?', a: 'Charming, fair, diplomatic, aesthetic and indecisive. Libra lives for partnership and balance, excels at seeing both sides, and dislikes conflict enough that it sometimes avoids the very conversations it needs.' }
    ]
  },
  {
    slug: 'scorpio', name: 'Scorpio', symbol: '♏', dates: 'October 23 – November 21',
    element: 'Water', quality: 'Fixed', ruler: 'Pluto (traditional: Mars)', polarity: 'Yin (receptive)',
    bodyPart: 'Reproductive system, pelvis', tagline: 'The Investigator',
    summary: 'Scorpio is the zodiac\'s depth sign: intense, private, penetrating and fiercely loyal. Ruled by Pluto, it deals in truth, transformation and control — and it does not do anything halfway.',
    strengths: ['Extraordinary emotional depth', 'Unbreakable loyalty once committed', 'Reads people with unnerving accuracy', 'Courageous in crisis', 'Capable of total transformation'],
    weaknesses: ['Extremely private and guarded', 'Can be controlling or possessive', 'Holds grudges indefinitely', 'Jealous', 'Power struggles'],
    personality: [
      'Scorpio needs to know what is really going on. Surface answers do not satisfy it; Scorpio wants the truth under the truth, and it is usually right about what it finds. That instinct makes it a superb ally, a dangerous opponent and a person people instinctively trust with secrets.',
      'The intensity is real, and so is the fear underneath it — Scorpio protects a deeply vulnerable core with an armour of secrecy and control. Its lifelong work is allowing itself to be known without needing to hold all the cards, and to release a grudge without needing to win first.'
    ],
    love: {
      text: 'Scorpio loves with total intensity or not at all. It wants merging, honesty and absolute loyalty, and it gives the same in return. Betrayal is unforgivable. Sexuality and emotional depth are inseparable for Scorpio. A partner must be able to handle real honesty — superficiality will never hold this sign.',
      best: ['cancer', 'pisces', 'virgo', 'capricorn'],
      challenging: ['leo', 'gemini', 'aquarius']
    },
    career: {
      text: 'Scorpio is drawn to power, investigation and transformation: research, psychology, finance, medicine, crisis work. It is superb at handling what other people avoid — secrets, death, money, conflict. It should avoid roles with no depth, and must be careful not to turn work into a power struggle.',
      fields: ['Psychology and psychotherapy', 'Investigative journalism', 'Finance and investment', 'Surgery and pathology', 'Law enforcement and intelligence', 'Crisis management', 'Research science']
    },
    money: 'Scorpio is strategic and private about money, often excellent at investing and at understanding leverage. It dislikes being dependent and values financial control. The risk is secrecy about money within relationships, and risk-taking for the thrill of power.',
    friendship: 'Scorpio has few friends and trusts fewer. The ones it does trust get absolute loyalty and a person who will defend them without hesitation. It dislikes small talk and superficial socialising.',
    family: 'Scorpio is the family\'s protective force and secret-keeper — intense, loyal, and often the one who confronts what the family avoids. Control dynamics with relatives are the recurring theme.',
    lucky: { number: '8 and 4', days: 'Tuesday', colors: 'Black, deep red, maroon', stones: 'Topaz, obsidian, garnet', metals: 'Iron, plutonium', flowers: 'Chrysanthemum, geranium, red rose' },
    famous: ['Bill Gates', 'Leonardo DiCaprio', 'Katy Perry', 'Ryan Gosling', 'Whoopi Goldberg'],
    faq: [
      { q: 'What are Scorpio dates?', a: 'Scorpio runs roughly from October 23 to November 21. The exact transition varies slightly by year, so birthdays on the first or last day should be checked against the full birth date.' },
      { q: 'Who is Scorpio most compatible with?', a: 'Scorpio pairs most deeply with Water signs Cancer and Pisces, and with Earth signs Virgo and Capricorn, who can match its intensity and provide steadiness. Leo and Aquarius often end up in power struggles with Scorpio.' },
      { q: 'What is the Scorpio personality like?', a: 'Intense, private, perceptive, loyal and transformative. Scorpio seeks the truth beneath appearances, commits completely once it trusts, and is capable of reinventing itself more thoroughly than any other sign.' }
    ]
  },
  {
    slug: 'sagittarius', name: 'Sagittarius', symbol: '♐', dates: 'November 22 – December 21',
    element: 'Fire', quality: 'Mutable', ruler: 'Jupiter', polarity: 'Yang (active)',
    bodyPart: 'Hips and thighs', tagline: 'The Explorer',
    summary: 'Sagittarius is ruled by Jupiter — the planet of expansion, meaning and luck. Optimistic, blunt and endlessly curious, this sign is on a lifelong search for truth, freedom and the next horizon.',
    strengths: ['Genuinely optimistic', 'Broad-minded and philosophical', 'Adventurous and brave', 'Honest and direct', 'Natural teacher with big vision'],
    weaknesses: ['Tactless', 'Committed to freedom over consistency', 'Over-promises', 'Restless and easily bored', 'Can be preachy'],
    personality: [
      'Sagittarius is the sign of the quest. It gathers experience the way Gemini gathers ideas, and it needs to believe there is always more — more world, more understanding, more possibility. That optimism is not naivety; it is a working philosophy that repeatedly proves useful.',
      'The shadow is follow-through. Sagittarius falls in love with beginnings and grand plans, then chafes against the daily grind that would actually complete them. Its growth comes from discovering that freedom and commitment are not opposites — that a chosen commitment can be the very thing that sets it free.'
    ],
    love: {
      text: 'Sagittarius needs a partner, not a keeper. It loves adventure, laughter, honesty and shared horizons, and it will run from anything that feels like a cage. It is honest to the point of bluntness and expects the same. Given space and trust, Sagittarius is one of the most joyful and loyal partners in the zodiac; confined, it leaves.',
      best: ['aries', 'leo', 'libra', 'aquarius'],
      challenging: ['virgo', 'pisces', 'cancer']
    },
    career: {
      text: 'Sagittarius works best with freedom, variety and a sense of purpose: travel, education, publishing, entrepreneurship, anything that expands. It needs to believe in what it is doing and will not tolerate a meaningless routine. It needs structure imposed externally, because self-discipline is not its strength.',
      fields: ['Teaching and academia', 'Travel and tourism', 'Publishing and media', 'Entrepreneurship', 'Sports and outdoor industries', 'Foreign relations', 'Philosophy and religion']
    },
    money: 'Sagittarius is generous, optimistic and casual about money — often spending on travel and experiences rather than assets. It earns well when it believes in the work. It needs automatic saving, because "there will be more later" is a costly assumption.',
    friendship: 'Sagittarius is the friend who suggests the trip, tells you the truth you avoided, and introduces you to a whole new subject. It has friends on every continent and can be hard to pin down locally.',
    family: 'Sagittarius brings energy, humour and big conversation to family life, and often wanders far from where it grew up. It can seem distant to family members who value closeness and routine.',
    lucky: { number: '3 and 9', days: 'Thursday', colors: 'Purple, deep blue, violet', stones: 'Turquoise, amethyst, lapis', metals: 'Tin', flowers: 'Carnation, narcissus, dandelion' },
    famous: ['Taylor Swift', 'Brad Pitt', 'Billie Eilish', 'Jake Gyllenhaal', 'Scarlett Johansson'],
    faq: [
      { q: 'What are Sagittarius dates?', a: 'Sagittarius runs roughly from November 22 to December 21. Because the Sun\'s exact entry time shifts year to year, birthdays on the boundary should be verified with a full birth date.' },
      { q: 'Who is Sagittarius most compatible with?', a: 'Sagittarius matches best with Fire signs Aries and Leo and Air signs Libra and Aquarius, who share its love of freedom and ideas. Virgo and Pisces often struggle with Sagittarius\'s bluntness and restlessness.' },
      { q: 'What is the Sagittarius personality like?', a: 'Optimistic, honest, adventurous, philosophical and freedom-loving. Sagittarius is a lifelong explorer and natural teacher who seeks meaning and experience, but can struggle with tact and follow-through.' }
    ]
  },
  {
    slug: 'capricorn', name: 'Capricorn', symbol: '♑', dates: 'December 22 – January 19',
    element: 'Earth', quality: 'Cardinal', ruler: 'Saturn', polarity: 'Yin (receptive)',
    bodyPart: 'Knees, bones, joints', tagline: 'The Builder',
    summary: 'Capricorn is ruled by Saturn — the planet of time, structure and consequence. Ambitious, disciplined and patient, Capricorn is the sign that plays the long game and wins it by not quitting.',
    strengths: ['Exceptional discipline and patience', 'Reliable and responsible', 'Strategic long-term thinking', 'Handles real pressure', 'Quietly very funny'],
    weaknesses: ['Pessimistic and self-critical', 'Workaholic', 'Emotionally guarded', 'Status-conscious', 'Struggles to relax or ask for help'],
    personality: [
      'Capricorn understands time in a way other signs do not. It knows that real achievement is compounded — that ten years of consistent effort beats ten bursts of brilliance. That patience, combined with Saturn\'s seriousness, makes Capricorn the zodiac\'s natural builder of institutions, careers and lasting things.',
      'The cost is that Capricorn often feels it must earn the right to be loved, rest or enjoy itself. It carries responsibility early and rarely puts it down. The growth edge is learning that worth is not a performance metric, and that play and vulnerability are not indulgences but requirements.'
    ],
    love: {
      text: 'Capricorn is slow to open and utterly serious once it does. It shows love through commitment, reliability and building a shared future — not through spontaneous romance. It needs a partner who understands that its reserve is not coldness. Capricorn loosens up beautifully with someone patient, and is capable of deep, decades-long devotion.',
      best: ['taurus', 'virgo', 'scorpio', 'pisces'],
      challenging: ['aries', 'libra', 'gemini']
    },
    career: {
      text: 'Capricorn is built for long-term authority: management, finance, law, engineering, anything with structure and a ladder. It is patient, strategic and thrives on real responsibility. It must guard against overwork and against measuring its entire worth by professional status.',
      fields: ['Executive management', 'Finance and banking', 'Law', 'Engineering', 'Government and policy', 'Architecture', 'Consulting']
    },
    money: 'Capricorn is excellent with money — disciplined, patient and long-term. It saves, invests and avoids debt. The risk is over-identification of money with security, which can make it stingy with itself and anxious even when financially safe.',
    friendship: 'Capricorn keeps a small circle and invests in it for decades. It is the dependable friend who gives practical help and honest counsel. It dislikes unreliability and performs poorly with flaky or chaotic people.',
    family: 'Capricorn often takes on the responsible role in the family — the provider, the one who handles things, the one who grew up early. It is deeply loyal to family, but must resist carrying everyone\'s burdens alone.',
    lucky: { number: '8 and 10', days: 'Saturday', colors: 'Dark green, brown, charcoal', stones: 'Garnet, onyx, smoky quartz', metals: 'Lead, silver', flowers: 'Carnation, ivy, pansy' },
    famous: ['Michelle Obama', 'Jeff Bezos', 'Kate Middleton', 'Denzel Washington', 'Dolly Parton'],
    faq: [
      { q: 'What are Capricorn dates?', a: 'Capricorn runs roughly from December 22 to January 19. It is a sign that spans the new year, so boundary birthdays should always be verified with an exact birth date and year.' },
      { q: 'Who is Capricorn most compatible with?', a: 'Capricorn pairs best with Earth signs Taurus and Virgo and Water signs Scorpio and Pisces — the Earth signs share its pragmatism and the Water signs open its guarded heart. Aries and Libra can clash with Capricorn\'s caution.' },
      { q: 'What is the Capricorn personality like?', a: 'Disciplined, ambitious, patient, responsible and reserved. Capricorn is a long-game builder who values structure and achievement, and who needs to learn that rest and vulnerability are not weaknesses.' }
    ]
  },
  {
    slug: 'aquarius', name: 'Aquarius', symbol: '♒', dates: 'January 20 – February 18',
    element: 'Air', quality: 'Fixed', ruler: 'Uranus (traditional: Saturn)', polarity: 'Yang (active)',
    bodyPart: 'Ankles, circulation', tagline: 'The Visionary',
    summary: 'Aquarius is ruled by Uranus — the planet of disruption and innovation. Independent, humanitarian and stubbornly original, Aquarius thinks in systems and futures, and refuses to follow a crowd.',
    strengths: ['Original and inventive thinker', 'Genuinely open-minded', 'Principled and humanitarian', 'Independent of peer pressure', 'Great at seeing the big picture'],
    weaknesses: ['Emotionally detached', 'Contrarian for its own sake', 'Aloof and hard to reach', 'Stubborn about its ideas', 'Can be preachy about ideals'],
    personality: [
      'Aquarius processes the world as a system to be improved. It is less interested in individuals than in structures, and less interested in tradition than in what should come next. That gives Aquarius genuine originality — it can see solutions that the rest of the room is too close to notice.',
      'The difficulty is emotional distance. Aquarius can analyse a feeling without having it, and its insistence on independence can read as coldness to people who want closeness. Its work is to let people in — to accept that intimacy is not a loss of freedom but a different kind of it.'
    ],
    love: {
      text: 'Aquarius needs friendship inside romance. It wants a partner who is also a co-conspirator — someone intellectually equal, independent and slightly unconventional. It is loyal in its own way, but dislikes possessiveness and conventional expectations. A partner who gives Aquarius freedom usually gets its unwavering commitment in return.',
      best: ['gemini', 'libra', 'aries', 'sagittarius'],
      challenging: ['taurus', 'scorpio', 'cancer']
    },
    career: {
      text: 'Aquarius belongs where innovation matters: technology, science, social reform, design, anything that changes a system. It works best with autonomy and a mission it believes in, and worst in rigid hierarchies where it must defer to convention. It is often ahead of its time and needs patience with slower institutions.',
      fields: ['Technology and software', 'Science and research', 'Social activism and NGOs', 'Design and innovation', 'Astronomy and space', 'Education reform', 'Policy and think tanks']
    },
    money: 'Aquarius is unconventional about money — not necessarily careless, but unmotivated by accumulation. It will fund what it believes in and ignore status spending. It needs a partner or system for long-term financial discipline.',
    friendship: 'Aquarius has a wide, diverse network and values friendship enormously — often more than romance. It is the friend who gives a completely fresh perspective and who accepts you without judgement.',
    family: 'Aquarius can feel like the outsider in its own family, seeing the family system from a distance. It is loyal but needs space, and often builds a chosen family of friends.',
    lucky: { number: '4 and 11', days: 'Saturday', colors: 'Electric blue, turquoise, silver', stones: 'Amethyst, aquamarine, labradorite', metals: 'Uranium, aluminium', flowers: 'Orchid, snowdrop, fern' },
    famous: ['Oprah Winfrey', 'Harry Styles', 'Jennifer Aniston', 'Ed Sheeran', 'Paris Hilton'],
    faq: [
      { q: 'What are Aquarius dates?', a: 'Aquarius runs roughly from January 20 to February 18. The exact entry point shifts slightly each year, so birthdays near the boundaries should be confirmed with a full birth date.' },
      { q: 'Who is Aquarius most compatible with?', a: 'Aquarius matches best with Air signs Gemini and Libra and Fire signs Aries and Sagittarius, who respect its independence and match its ideas. Taurus and Scorpio often clash with Aquarius over emotional and physical closeness.' },
      { q: 'What is the Aquarius personality like?', a: 'Original, independent, humanitarian, intellectually driven and emotionally reserved. Aquarius thinks in systems and futures, resists convention, and values freedom and friendship above almost everything.' }
    ]
  },
  {
    slug: 'pisces', name: 'Pisces', symbol: '♓', dates: 'February 19 – March 20',
    element: 'Water', quality: 'Mutable', ruler: 'Neptune (traditional: Jupiter)', polarity: 'Yin (receptive)',
    bodyPart: 'Feet, lymphatic system', tagline: 'The Dreamer',
    summary: 'Pisces is ruled by Neptune — the planet of dreams, imagination and dissolution. The most empathic sign in the zodiac, Pisces absorbs the feelings of everyone around it and turns that sensitivity into art, compassion and quiet wisdom.',
    strengths: ['Profound empathy and intuition', 'Naturally artistic and imaginative', 'Genuinely compassionate', 'Spiritually open', 'Gives without keeping score'],
    weaknesses: ['Boundaries are a struggle', 'Escapist', 'Over-idealises people', 'Absorbs others\' emotions', 'Avoids hard practical realities'],
    personality: [
      'Pisces is the ocean of the zodiac — boundaryless, deep and moved by invisible currents. It feels other people\'s emotions as its own, which makes it extraordinarily kind and extraordinarily easy to drain. Pisces understands suffering in a way that cannot be learned from books.',
      'The trap is escape. When reality becomes too sharp, Pisces slips into imagination, fantasy or anything that blurs the edges. Its growth is learning to stay present to the difficult thing — to build gentle boundaries and bring its enormous sensitivity into actual, practical form rather than letting it dissolve.'
    ],
    love: {
      text: 'Pisces loves romantically and completely, often idealising the person it loves. It is devoted, forgiving and deeply intuitive about a partner\'s needs, sometimes to its own cost. It needs a partner who is kind and grounded, and who will protect Pisces from its own tendency to absorb everything. Pisces must learn to see people clearly, not as it hopes they are.',
      best: ['cancer', 'scorpio', 'taurus', 'capricorn'],
      challenging: ['gemini', 'sagittarius', 'virgo']
    },
    career: {
      text: 'Pisces thrives in work that uses imagination, empathy or healing: art, music, film, therapy, care. It needs meaning and some beauty in its work, and it wilts in harsh, purely transactional environments. It benefits from external structure to turn its visions into finished things.',
      fields: ['Art, music and film', 'Psychotherapy and counselling', 'Healthcare and healing', 'Writing and poetry', 'Photography', 'Spiritual and charitable work', 'Marine and environmental fields']
    },
    money: 'Pisces is generous and vague about money, and can be vulnerable to being taken advantage of. It needs simple, automated financial systems and, ideally, a trusted advisor. It spends on others and on escape, and rarely tracks it.',
    friendship: 'Pisces is the friend who truly listens, who forgives almost anything, and who understands without needing the full explanation. It draws people in and must guard against becoming everyone\'s emotional sponge.',
    family: 'Pisces is the soft, empathic centre of a family, often the one who absorbs the family\'s unspoken feelings. It needs protection from family dynamics that overwhelm it.',
    lucky: { number: '3 and 7', days: 'Thursday', colors: 'Sea green, lavender, soft pink', stones: 'Aquamarine, amethyst, moonstone', metals: 'Tin', flowers: 'Water lily, lotus, jasmine' },
    famous: ['Rihanna', 'Steve Jobs', 'Albert Einstein', 'Drew Barrymore', 'Kurt Cobain'],
    faq: [
      { q: 'What are Pisces dates?', a: 'Pisces runs roughly from February 19 to March 20. Since the Sun\'s exact entry time varies by year, birthdays on the first or last days should be confirmed with an exact birth date.' },
      { q: 'Who is Pisces most compatible with?', a: 'Pisces pairs most naturally with fellow Water signs Cancer and Scorpio, and with Earth signs Taurus and Capricorn, who provide the stability Pisces needs. Gemini and Sagittarius can feel too blunt or restless.' },
      { q: 'What is the Pisces personality like?', a: 'Empathic, imaginative, gentle, intuitive and dreamy. Pisces feels everything, creates beauty out of sensitivity, and gives compassion freely — but struggles with boundaries and with staying grounded in practical reality.' }
    ]
  }
];

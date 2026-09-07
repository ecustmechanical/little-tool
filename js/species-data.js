/* ============================================================
   TackleCalc — Species Rig Data  v1.0
   First batch: 10 freshwater / inshore species.
   Each record = a complete, field-tested rig sheet
   (rod → reel → line → leader → hooks → rigs → bait → tips).
   Authored & hand-checked by Marcus Reed, TackleCalc.
   Licensed for use only on tacklecalc.com.
   ============================================================ */

window.TackleSpecies = [
  {
    id: "largemouth-bass",
    name: "Largemouth Bass",
    scientific: "Micropterus salmoides",
    family: "Sunfish (Centrarchidae)",
    water: ["Freshwater"],
    habitat: "Ponds, lakes, reservoirs and slow rivers with cover — weed beds, laydowns, docks, brush piles and pads.",
    metaLongTail: [
      "largemouth bass rig setup",
      "best bass rod and reel combo",
      "texas rig size hooks",
      "bass fishing line weight",
      "how to rig a soft plastic worm"
    ],
    blurb: "North America's most-targeted gamefish. Largemouth are ambush predators that sit tight to cover, so every link in your rig — from a sensitive rod down to a snag-resistant hook — is chosen to get a bait into the strike zone and turn a fish fast once it bites.",
    size: { typical: "12–20 in · 1–6 lb", trophy: "8 lb+ (wall-class: 12 lb+ in the South & California)" },
    rigSheet: {
      rod: "7'0\"–7'3\" medium-heavy, fast action baitcast rod for general casting. Drop a 6'10\"–7'0\" medium spinning rod into the boat for finesse (drop shot, Neko).",
      reel: "Low-profile baitcaster, 7.1:1–8.1:1 (good all-round retrieve speed). Finesse spinning reel: 2500–3000 size.",
      mainLine: "15–20 lb braid for casting baits around open cover; step to 30–50 lb braid for punching mats, slop and heavy weed. Straight 12–17 lb fluorocarbon when you want invisibility in clear water.",
      leader: "2–3 ft of 12–17 lb fluorocarbon on braid for most moving and soft baits; 20 lb fluoro around laydowns and timber.",
      hooks: "3/0–5/0 EWG worm hooks for soft plastics (match the bait length); 4/0–5/0 flipping hooks with the same weight class; 1/16–3/16 oz jigheads for finesse; 3/0–5/0 skirted jigs with trailers.",
      rigs: [
        { name: "Texas Rig", detail: "The #1 all-around bass presentation — weedless, snag-resistant, ideal around wood, grass and pads. Weight 1/8–1/2 oz, size the EWG hook to the plastic." },
        { name: "Carolina Rig", detail: "Use it for suspended fish on points, drops and flats. Long 18–24 in leader from a 3/8–1 oz egg sinker." },
        { name: "Jig + Trailer", detail: "Best for flipping docks and heavy cover in cooler water; a slow, bottom-bumping presentation that big fish can't refuse." },
        { name: "Drop Shot", detail: "The clear-water, high-pressure lake equalizer. Small hook up-line with a light-weight bait sitting above the bottom." },
        { name: "Spinnerbait / Chatterbait", detail: "Search baits that draw reaction strikes when bass are active; skirt colors match shad or bluegill." }
      ],
      naturalBaits: "Live shiners and bluegill (mostly used by trophy hunters); soft-plastic worms, craws, lizards and frogs matter far more to everyday bass anglers.",
      artificials: "Worms/creatures (Texas-rigged), buzzbaits and frogs on top, crankbaits and lipless rattlers for covering water, swimbaits in shad sizes.",
      tips: [
        "Target cover, not open water — if a cast lands within 2 ft of wood, grass or a dock post, you are fishing correctly.",
        "Slow down in cold water; speed up a retrieve when bass are actively feeding or shad are on top.",
        "After a short strike on a Texas rig, drop the rod tip for two seconds before setting — fish often grab the bait a second time.",
        "When one technique stops producing, scale down (smaller bait, lighter line) instead of switching to something louder."
      ]
    },
    notes: "The single biggest rookie mistake on bass is fishing too fast around cover. Work each piece of structure with several different angles and retrieve speeds before moving on."
  },

  {
    id: "smallmouth-bass",
    name: "Smallmouth Bass",
    scientific: "Micropterus dolomieu",
    family: "Sunfish (Centrarchidae)",
    water: ["Freshwater"],
    habitat: "Clear lakes and cool rivers — rocks, shoals, current seams and deep gravel humps.",
    metaLongTail: [
      "smallmouth bass rig",
      "drop shot rig for smallmouth",
      "ned rig setup",
      "best line for smallmouth bass",
      "smallmouth river fishing tackle"
    ],
    blurb: "The hardest-fighting fish per pound in freshwater. Smallmouth live in clean, rocky water and see far better than largemouth, so presentation finesse and low-visibility line usually beat bulk.",
    size: { typical: "11–18 in · 1–4 lb", trophy: "5 lb+ (rare: 7 lb in Great Lakes/St. Lawrence)" },
    rigSheet: {
      rod: "6'8\"–7'0\" medium power, fast-to-extra-fast action spinning rod for finesse; a 7' medium baitcast rod handles crankbaits and spinnerbaits when they want a moving target.",
      reel: "2500–3000 spinning reel (smooth drag matters more than speed); a 7:1 baitcaster for reaction baits.",
      mainLine: "10–15 lb braid as your main line, because smallmouth live around rock and current that abrades mono; drop to 8 lb braid for ultra-clear lakes.",
      leader: "8–12 lb fluorocarbon leader of 3–4 ft — invisibility is critical in gin-clear smallmouth water.",
      hooks: "Size 1 and 1/0 drop-shot hooks; 1/16–3/16 oz NED heads; tube jig heads with 1/8–1/4 oz; trebles already on your jerkbaits and cranks.",
      rigs: [
        { name: "Drop Shot", detail: "The proven smallmouth pattern on deep, clear lakes. Keep the bait 1–3 ft off bottom on a 10–14 in leader." },
        { name: "Ned Rig", detail: "Half a finesse worm on a flat NED head. Deadly when fish are negative and hugging bottom." },
        { name: "Tube", detail: "Hop a 3-in tube along rock shoals and river current — the classic river smallmouth bait." },
        { name: "Jerkbait", detail: "A suspending minnow bait twitched over drop-offs triggers reaction strikes from suspended fish." },
        { name: "Crankbait / Spinnerbait", detail: "Use them to cover water fast and find the depth band the fish are holding in." }
      ],
      naturalBaits: "Crayfish (real or imitation) are the #1 food; hellgrammites and minnows work in rivers.",
      artificials: "3-in finesse worms (NED), tubes, jerkbaits, small crankbaits, inline spinners in current, hair jigs in winter.",
      tips: [
        "In rivers, cast upstream and let the bait drift naturally through the seam before you start the retrieve.",
        "Find rocks first — if you aren't catching smallmouth on rock, move until you are.",
        "Smallmouth school by size: when you catch a 12-incher, larger fish are usually deeper in the same area.",
        "In summer, target deep offshore structure (20–40 ft) where 'smallies' retreat from warm water."
      ]
    },
    notes: "Smallmouth are daylight fish of clear water — long, invisible leaders and a natural, drifting presentation will out-catch any bright, aggressive bait in most conditions."
  },

  {
    id: "walleye",
    name: "Walleye",
    scientific: "Sander vitreus",
    family: "Perch (Percidae)",
    water: ["Freshwater"],
    habitat: "Large lakes, reservoirs and rivers; low-light bottom-dwellers near rock, sand, current breaks and deep structure.",
    metaLongTail: [
      "walleye rig setup",
      "best walleye rod and reel",
      "walleye jig size",
      "bottom bouncer walleye rig",
      "walleye fishing line"
    ],
    blurb: "Walleye feed by feel and by low-light vision, which is why the right jig weight, the right bait and keeping the line tight to bottom matter more than flash. This rig sheet is built around the two pillars of walleye fishing: vertical jigging and bottom-bouncing.",
    size: { typical: "15–26 in · 1–6 lb", trophy: "10 lb+ (classic 28 in+ fish)" },
    rigSheet: {
      rod: "6'6\"–7'0\" medium power, moderate-to-fast action spinning rod — sensitive enough to feel a finicky bite at 30 ft.",
      reel: "2500–3000 spinning reel with a smooth drag and a line roller that won't kink braid.",
      mainLine: "10–15 lb braid for bottom contact sensitivity; straight 8–10 lb monofilament when fish are line-shy in clear water.",
      leader: "3–4 ft of 6–10 lb fluorocarbon when using braid — walleye can be leader-sensitive in stained-to-clear lakes.",
      hooks: "1/8–3/8 oz jig heads (match to depth and wind); size 2 to 1/0 live-bait hooks for rigging crawlers; single hooks for blade baits.",
      rigs: [
        { name: "Vertical Jig + Live Bait", detail: "The bread-and-butter walleye rig. Tip a jig with a minnow, leech or crawler chunk and work it along bottom." },
        { name: "Bottom Bouncer + Crawler Harness", detail: "The standard trolling rig. The bouncer keeps your spinner rig in the strike zone while covering ground." },
        { name: "Slip Bobber (Lind rig)", detail: "Suspend live bait at a precise depth over deep structure when fish are holding suspended." },
        { name: "Blade Bait / Jigging Rap", detail: "Snap-and-drop metal or hard baits imitate baitfish on hard-bottom structures in fall and winter." },
        { name: "Crankbait Trolling", detail: "Troll crankbaits off planner boards or downriggers to cover depth bands until you mark fish." }
      ],
      naturalBaits: "Minnows, nightcrawlers and leeches are the top live baits. Freshness beats size — walleye turn off stale bait.",
      artificials: "Blade baits, jigging Rapalas, minnow-imitating crankbaits and swimbaits; soft plastic tails on jig heads in summer.",
      tips: [
        "Walleye bite best in low light — the last hour of light and the first hour after dark are prime time.",
        "Keep the line at a sharp angle to bottom and maintain bottom contact; a walleye bite often feels like a 'tap-tap' or weight gain.",
        "In wind, move to the wind-blown shore — waves stack bait and walleye feed up the bank.",
        "When jigging, let the bait sit for 5–10 seconds between hops; walleye often take it on the pause."
      ]
    },
    notes: "Depth control is everything with walleye. Find fish on your electronics first, then size your jig so it touches bottom on every drop in that depth."
  },

  {
    id: "northern-pike",
    name: "Northern Pike",
    scientific: "Esox lucius",
    family: "Pike (Esocidae)",
    water: ["Freshwater"],
    habitat: "Weedy bays, river backwaters and shallow flats in cool lakes across the north.",
    metaLongTail: [
      "northern pike rig setup",
      "pike fishing leader wire",
      "best line for pike fishing",
      "pike rod and reel combo",
      "pike lure size"
    ],
    blurb: "Pike are toothy ambush predators that live in weed. Your entire setup is built around two things: a wire or heavy fluoro leader so you don't get bitten off, and gear strong enough to stop a fish that charges straight back into the grass.",
    size: { typical: "20–32 in · 2–8 lb", trophy: "40 in+ (15–20 lb in big shield lakes)" },
    rigSheet: {
      rod: "7'0\"–7'6\" medium-heavy to heavy, fast action — enough backbone to turn a fish away from weeds.",
      reel: "Baitcast 300-size or a 4000–5000 spinning reel; smooth drag, high line capacity for long runs.",
      mainLine: "30–50 lb braid. Never fish pike with mono or fluoro as your only line — their teeth will cut it.",
      leader: "6–12 in of 30–50 lb wire (single-strand or coated) OR 40–60 lb fluorocarbon for lure fishing where you want less visibility.",
      hooks: "Replace stock trebles with heavy-duty split-ring trebles one size up; use quick-strike rigs with 2/0–4/0 hooks for deadbait.",
      rigs: [
        { name: "Spoon (casting or trolling)", detail: "The classic pike catcher. Retrieve at a speed that makes the spoon wobble just above the weed tops." },
        { name: "Inline Spinner", detail: "A big Mepps-style bucktail spinner is lethal along weed edges and current." },
        { name: "Jerkbait / Crankbait", detail: "Erratic pauses trigger reaction strikes from pike holding in pockets." },
        { name: "Spinnerbait", detail: "A weedless way to sweep through cabbage beds and over shallow flats." },
        { name: "Deadbait Under Bobber", detail: "For giants: a whole sucker or large cisco suspended over deep weed edges in cool weather." }
      ],
      naturalBaits: "Suckers, ciscoes, perch and large shiners — fished whole on quick-strike rigs for trophy pike.",
      artificials: "Spoons (5-of-5 sizes), bucktail spinners, glide baits, big soft plastics and jerkbaits in shad/sucker patterns.",
      tips: [
        "Fish the weed edge, not the middle of the bay — pike hold just inside the first wall of cabbage.",
        "Never set the hook on a short strike; sweep-set and keep the rod low to pull the fish away from grass.",
        "A follow to the boat is a chance: a figure-8 at the boat converts many pike followers.",
        "Cold-water pike (spring/fall) are often the biggest — don't limit pike trips to summer."
      ]
    },
    notes: "Wire leaders are non-negotiable — the difference between a trophy pike and a bitten-off lure is one 40 lb wire leader. Everything else is presentation."
  },

  {
    id: "channel-catfish",
    name: "Channel Catfish",
    scientific: "Ictalurus punctatus",
    family: "Catfish (Ictaluridae)",
    water: ["Freshwater"],
    habitat: "Rivers, reservoirs and lakes — current breaks, deep holes, submerged timber and mud flats.",
    metaLongTail: [
      "channel catfish rig setup",
      "best catfish circle hook size",
      "catfishing rod and reel",
      "slip sinker rig for catfish",
      "what bait for channel catfish"
    ],
    blurb: "Channel cats are bottom-feeding opportunists that locate food by smell and taste. The rig is simple on purpose: a slip sinker, a circle hook and bait sitting on the bottom — because over-engineering a catfish rig is the fastest way to lose the subtle 'don't set the hook' circle-hook advantage.",
    size: { typical: "14–26 in · 1–8 lb", trophy: "30 lb+ (river monsters to 40 lb)" },
    rigSheet: {
      rod: "7'0\" medium-heavy to heavy — a moderate, parabolic bend keeps pressure on with circle hooks.",
      reel: "Baitcaster or 4000–6000 spinning reel with 20+ lb drag and room for 150+ yd of line.",
      mainLine: "20–30 lb monofilament (stretch helps against head-shakes) or 30–40 lb braid if you want maximum feel in current.",
      leader: "1–2 ft of 20–30 lb mono/fluoro from the barrel swivel to the hook.",
      hooks: "Circle hooks, 2/0–5/0 for channels (bigger for bigger fish). Circle hooks set themselves — never sweep-set hard.",
      rigs: [
        { name: "Slip Sinker Rig", detail: "The default catfish rig: an egg sinker sliding on the main line above a barrel swivel, then a leader to the hook. Keeps bait on bottom." },
        { name: "Fish-Finder (Carolina-style) Rig", detail: "Identical principle with a snap-swivel sinker for faster changes in current." },
        { name: "Santee Cooper Rig", detail: "A three-way swivel rig that floats the bait just off bottom — best over soft mud where bait gets buried." },
        { name: "Chunk + Drift Rig", detail: "For big river channels, drift cut bait with a heavier sinker along current seams." }
      ],
      naturalBaits: "Cut shad/herring, shad guts, live minnows, nightcrawlers, shrimp — and for channels, dip/cured baits (stink bait, blood bait) work extremely well.",
      artificials: "Catfish rarely chase artificials; keep bait natural. In winter, small live baits fished very slowly out-fish everything.",
      tips: [
        "Fish where the current meets calm water — a seam or eddy line holds scent and baitfish.",
        "Do not set the hook on a circle hook. When the rod loads up, reel steadily — the hook rotates into the corner of the mouth.",
        "Fish bait on the bottom in summer (channels feed deep and hot), but try 5–15 ft shallower at dawn/dusk.",
        "Chum lightly (cracked corn or canned corn mixed with mud) to pull fish into your zone on slack water."
      ]
    },
    notes: "Channel cats are everywhere and bite year-round. The single upgrade that improves most anglers: bigger circle hooks and patience — let the fish run before reeling into it."
  },

  {
    id: "bluegill",
    name: "Bluegill",
    scientific: "Lepomis macrochirus",
    family: "Sunfish (Centrarchidae)",
    water: ["Freshwater"],
    habitat: "Ponds, lakes and slow rivers — docks, brush piles, weed lines and spawning beds in spring.",
    metaLongTail: [
      "bluegill fishing rig setup",
      "best bluegill hook size",
      "ultralight rod for panfish",
      "bluegill bobber rig",
      "best line for bluegill"
    ],
    blurb: "The classic kid's first fish and an endlessly fun light-tackle target. Bluegill are small but sharp-eyed — you need ultralight line, small hooks and bait presented naturally around cover, not heavy gear that telegraphs everything.",
    size: { typical: "6–10 in · 0.5–1 lb", trophy: "10 in+ (a true 'bull' gill)" },
    rigSheet: {
      rod: "5'0\"–6'0\" ultralight or light action — enough bend to protect light line and make a 6-in gill feel like a whale.",
      reel: "500–1000 size spinning reel, spooled with light line.",
      mainLine: "2–6 lb monofilament or fluorocarbon. Light line = more bites from a fish that can see line in clear water.",
      leader: "Not required, but a short 2–4 lb fluoro leader helps in ultra-clear ponds.",
      hooks: "Size 6–8 baitholder or Aberdeen hooks for bait; size 8–10 for small jigs. Keep hooks small — bluegill have small mouths.",
      rigs: [
        { name: "Slip Bobber + Bait", detail: "The top producer. Set the depth so bait sits just above the brush pile or dock shadow." },
        { name: "Small Jig under a Float", detail: "A 1/32–1/16 oz crappie-style jig twitched under a float covers water and catches bigger gills." },
        { name: "Bottom Rig (slow days)", detail: "A tiny splitshot and a worm on bottom, with the lightest tip possible to detect the bite." },
        { name: "Casting Small Spinners", detail: "A size-0 to size-1 inline spinner can trigger aggressive reaction bites in summer." }
      ],
      naturalBaits: "Red worms, crickets, waxworms and mealworms are king. Pieces of worm beat whole worms on small hooks.",
      artificials: "1/32–1/16 oz micro jigs (chartreuse/white), small inline spinners, tiny poppers and flies on warm evenings.",
      tips: [
        "In spring, fish the spawning beds shallower — sight-fish the saucer-shaped nests in 1–4 ft of water.",
        "Docks and laydowns hold the biggest gills; cast past the cover and reel the bait back into the shadow.",
        "Match your bait size to the fish: small baits catch numbers, bigger baits (and bigger hooks) catch the bulls.",
        "Move quietly — bluegill in shallow water spook easily and will stop biting for 30 minutes."
      ]
    },
    notes: "If you want big bluegill, stop fishing the bank with kids' gear and start targeting structure with light line and small baits — the 9–10 in bulls live on deep brush piles and docks."
  },

  {
    id: "rainbow-trout",
    name: "Rainbow Trout",
    scientific: "Oncorhynchus mykiss",
    family: "Trout (Salmonidae)",
    water: ["Freshwater"],
    habitat: "Cold streams, rivers and lakes — stocked ponds too. Trout need oxygen-rich water: riffles, runs, inlets and thermoclines.",
    metaLongTail: [
      "rainbow trout rig setup",
      "best trout fishing line",
      "powerbait rig for trout",
      "trout spinner sizes",
      "ultralight trout rod setup"
    ],
    blurb: "Whether you're casting to stocked rainbows at the lake or wild fish in a freestone stream, the pattern is the same: light line, small presentation, natural drift. Rainbow trout have excellent vision and will reject anything that feels or looks wrong.",
    size: { typical: "10–18 in (stocked 9–14 in)", trophy: "20 in+ / 8 lb+ in lakes & tailwaters" },
    rigSheet: {
      rod: "6'0\"–7'0\" light-power, fast-tip spinning rod (ultralight for creeks, light for lakes).",
      reel: "1000–2500 spinning reel with a smooth, light drag.",
      mainLine: "4–6 lb monofilament for lakes; 8–10 lb braid (with leader) for longer casts in wind.",
      leader: "2–4 ft of 4–6 lb fluorocarbon on braid; wild-stream trout call for 4X–6X light fluoro/mono tippet.",
      hooks: "Size 8–10 baitholder hooks for PowerBait and worms; size 6–8 for egg patterns; small single hooks or #10–#12 trebles for spoons and spinners.",
      rigs: [
        { name: "PowerBait / Dough Bait Rig", detail: "The stocked-lake standby: a sliding sinker, then a 12–18 in leader with floating dough bait suspended just off the bottom." },
        { name: "Bobber + Worm / PowerEggs", detail: "Set the bobber 2–5 ft deep over planted fish or along shore drop-offs." },
        { name: "Cast & Retrieve Spinner/Spoon", detail: "Kastmasters, Mepps and Panther Martins for covering stream runs and lake points." },
        { name: "Drift Rig (stream)", detail: "A small splitshot and a worm or salmon egg drifted naturally through riffles and runs." }
      ],
      naturalBaits: "Worms, salmon eggs, maggots and crickets. For stocked fish, scented dough baits (PowerBait) in chartreuse/orange dominate.",
      artificials: "Inline spinners, casting spoons, small crankbaits, and flies (woolly buggers, nymphs, egg patterns) when fishing pressure is high.",
      tips: [
        "Trout are cold-water fish: focus on inlets, springs and deep thermoclines in summer; move shallow in spring and fall.",
        "Let the current do the work — a drifted bait with slack line gets more bites than a retrieved one on streams.",
        "Stocked trout often hold within 15 minutes of a stocking point for days — follow the truck.",
        "Set the drag light: trout have soft mouths, and a heavy hook-set or tight drag tears the hook free."
      ]
    },
    notes: "For most trout fishing, 'less is more' — lighter line and smaller bait catch more fish. Upgrade line visibility and you upgrade your catch rate more than any lure change."
  },

  {
    id: "striped-bass",
    name: "Striped Bass",
    scientific: "Morone saxatilis",
    family: "Temperate bass (Moronidae)",
    water: ["Freshwater", "Saltwater (coastal)"],
    habitat: "Coastal surf, bays and rivers on the Atlantic; landlocked freshwater lakes with baitfish like shad and herring.",
    metaLongTail: [
      "striped bass rig setup",
      "surf fishing rig for stripers",
      "best rod for striped bass",
      "striped bass circle hook size",
      "landlocked striper fishing tackle"
    ],
    blurb: "Stripers are roaming, aggressive feeders that chase schools of bait. Your rig changes with the venue — a surf outfit built for casting distance on the coast, or a lake outfit for trolling and casting around bait schools — but heavy line and sturdy hooks are common to both.",
    size: { typical: "18–36 in · 3–20 lb", trophy: "40 lb+ (coastal); landlocked trophies 20–40 lb" },
    rigSheet: {
      rod: "7'0\"–8'0\" medium-heavy spinning/baitcast for boats and landlocked lakes; 10–12 ft surf rod (or 8–9 ft conventional) for beach fishing.",
      reel: "4000–6000 spinning (lakes/inshore); surf 6500+ or conventional 5500–6500 for casting distance.",
      mainLine: "20–30 lb mono/fluoro for jigging and casting; 30–50 lb braid in the surf (long casts, abrasion around rocks).",
      leader: "2–4 ft of 20–40 lb fluorocarbon for jigging; 40–60 lb for rock-hopping surf and live bait.",
      hooks: "4/0–8/0 circle hooks for bait (they self-set and lip-hook); bucktail jigs and soft plastics on 1/2–3 oz jigheads.",
      rigs: [
        { name: "Live Bait (Herring/Shad/Menhadden)", detail: "The big-fish pattern in both ocean and freshwater. Fish a whole bait on a circle hook — freelined or below a fish-finder sinker." },
        { name: "Bucktail Jig / Metal Jig", detail: "The #1 artificial pattern for current and deep structure. Work it along the bottom in a rhythmic lift-drop." },
        { name: "Topwater (Pencil/Spook)", detail: "Dawn and dusk surface explosions — a plug twitched fast over breaking fish." },
        { name: "Swim Shad / Soft Plastic", detail: "Match the local baitfish size and color on a weighted jighead; cast to blitzes or troll through holding zones." },
        { name: "Surf Rig (high/low)", detail: "A high-low rig with bait on a pyramid sinker for soaking bait beyond the breakers." }
      ],
      naturalBaits: "Menhadden, bunker, herring, shad, eels and mackerel — cut or whole. Freshness is everything for striper bait.",
      artificials: "Bucktails, metals, pencil poppers, walk-the-dog plugs, swim shads and soft-plastic paddletails in baitfish patterns.",
      tips: [
        "Find the bait, find the bass — stripers key on bunker/shadow schools; cast to the edges, not the middle of the blitz.",
        "Stripers push bait to the surface at dawn/dusk; at night they roam shallows and flats.",
        "Circle hooks + live bait: point the rod at the fish, let it run, then reel tight — never a hard hook-set.",
        "In rivers and inlets, fish the outbound tide (moving water stacks bait on points)."
      ]
    },
    notes: "Striped bass live by the baitfish school. When the surface erupts you have minutes — keep a topwater tied on at dawn, and a metal jig for the depths when they sound."
  },

  {
    id: "redfish",
    name: "Redfish (Red Drum)",
    scientific: "Sciaenops ocellatus",
    family: "Drum (Sciaenidae)",
    water: ["Saltwater", "Inshore"],
    habitat: "Inshore flats, grass beds, oyster bars and marsh creeks along the Gulf and Atlantic coasts.",
    metaLongTail: [
      "redfish rig setup",
      "best redfish rod and reel",
      "redfish circle hook size",
      "inshore fishing rig for redfish",
      "redfish soft plastic rig"
    ],
    blurb: "Redfish are the inshore angler's bread-and-butter: hard-fighting, sight-fishable and willing to eat both bait and artificials. Because they tail in inches of water over oyster and grass, your rig needs abrasion-resistant leader and gear that can turn a fish away from the nearest shell bed.",
    size: { typical: "18–30 in · 3–10 lb", trophy: "27 in+ slot fish; bulls 30–40 lb in winter surf" },
    rigSheet: {
      rod: "7'0\" medium-to-medium-heavy, fast action spinning rod — a good all-round inshore stick.",
      reel: "2500–4000 spinning reel, sealed drag recommended (saltwater), 15–20 lb of drag.",
      mainLine: "15–30 lb braid. Braid casts better in wind and gives you feel for soft bites over grass.",
      leader: "2–4 ft of 20–40 lb fluorocarbon (or 30 lb mono) to resist oyster abrasion.",
      hooks: "1/0–4/0 circle hooks for live/cut bait; 1/4–1/2 oz jigheads for soft plastics; weedless hooks for sight-fishing in grass.",
      rigs: [
        { name: "Paddletail on a Jighead", detail: "The #1 artificial redfish bait — a 3–5 in swimbait on a weighted hook, crawled or twitched across the bottom." },
        { name: "Popping Cork + Shrimp/Live", detail: "The classic marsh pattern: pop the cork to draw attention, let the bait drop in the disturbance." },
        { name: "Carolina/Bottom Rig with Cut Bait", detail: "Soak cut mullet or shrimp over deeper channels and drop-offs for larger fish." },
        { name: "Topwater", detail: "A noisy topwater walked over shallow flats at dawn draws explosive strikes." },
        { name: "Sight-Fishing with Weedless Plastic", detail: "When tailing reds are visible, skip a weedless-rigged bait ahead of the fish and work it past their face." }
      ],
      naturalBaits: "Live shrimp and finger mullet are tops; cut mullet, ladyfish and blue crab work for bigger fish in deeper water.",
      artificials: "Paddletails, spoons, topwaters (spook-style), soft-plastic shrimp imitations and Gulp-style baits in natural brown/chartreuse.",
      tips: [
        "Learn to sight-fish: tailing reds in 6–12 in of water will eat a quietly presented bait — cast well ahead, don't spook them.",
        "Redfish hug structure: grass edges, potholes, points and drains hold fish; work the edges, not open flats.",
        "If a redfish runs for the grass or oysters, apply steady side pressure to turn it before the leader hits the shell.",
        "Cold front? Fish deeper marsh drains where reds stack up in the warmer water."
      ]
    },
    notes: "Stealth beats casting distance with redfish. Quiet approach, long leader, natural bait color — the tailing red you can see is the one you should catch."
  },

  {
    id: "muskie",
    name: "Muskellunge (Muskie)",
    scientific: "Esox masquinongy",
    family: "Pike (Esocidae)",
    water: ["Freshwater"],
    habitat: "Large, cool lakes and big rivers — deep weed beds, drop-offs, current breaks and structure edges.",
    metaLongTail: [
      "muskie fishing rig setup",
      "best muskie rod and reel",
      "muskie leader wire size",
      "figure 8 muskie fishing",
      "muskie lure size"
    ],
    blurb: "The 'fish of 10,000 casts' demands purpose-built heavy tackle: an 80 lb braid main line, a wire leader that no tooth can cut, and a rod with the backbone to stop a 50-in fish. Every component here exists to survive a single, violent strike.",
    size: { typical: "30–45 in · 8–30 lb", trophy: "50 in+ (world class 55 lb+)" },
    rigSheet: {
      rod: "7'6\"–8'0\" heavy-power, fast action — long enough for big lure casts and figure-8s, stout enough to turn a giant.",
      reel: "Baitcast 300–400 size (or a 6500 conventional for casting big bucktails). 20 lb+ smooth drag, high capacity.",
      mainLine: "65–80 lb braid. No thinner — you need the diameter and the confidence to horse a muskie out of cabbage.",
      leader: "8–12 in of 60–100 lb single-strand or coated wire, OR heavy 80+ lb fluorocarbon for glide baits. Test your knots.",
      hooks: "Upgrade stock trebles to heavy-duty 4X-strong trebles; quick-strike rigs with 2/0–6/0 hooks for deadbait suckers.",
      rigs: [
        { name: "Bucktail Spinner", detail: "The #1 muskie producer — cast across weed edges and vary your retrieve speed until you find the strike zone." },
        { name: "Topwater (Walker/Prop)", detail: "Slow, erratic action over shallow structure; expect violent surface strikes at dusk." },
        { name: "Glide Bait", detail: "A slow, wide 'S' glide is deadly in clear water when muskies follow but won't commit." },
        { name: "Deep Crankbait / Jerkbait", detail: "Covers deeper structure and suspended fish; troll or cast-and-pause." },
        { name: "Deadbait Under Bobber", detail: "For cold-water giants: a whole sucker suspended at depth near a drop-off." }
      ],
      naturalBaits: "Large suckers (8–14 in), ciscoes and perch on quick-strike rigs for trophy muskies.",
      artificials: "Bucktails (1–2 oz), topwaters, glide baits, jerkbaits, big crankbaits and soft plastics in perch/white patterns.",
      tips: [
        "The figure-8 is mandatory: on every cast, when the lure reaches the boat, sweep it into a tight figure-8 at the surface — many muskies strike in the last 5 ft.",
        "Fish slow. Muskies prefer a lure that looks wounded, and the 'follow without striking' usually means speed the bait up or down.",
        "Go big: 6–12 in baits match the forage. Small lures catch small muskies.",
        "Sunscreen and polarized glasses help you spot the dark shadow following your bait to the boat."
      ]
    },
    notes: "Muskie fishing is a numbers game with heavy gear — check your line and leaders after every fish, retie often, and commit to the figure-8 on every single cast."
  }
];

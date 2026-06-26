export const themes = {
  editorial: {
    paper: "#f3ecda",
    paper2: "#e9dfc6",
    ink: "#23201a",
    ink2: "#5e564a",
    teal: "#1f5560",
    rust: "#b4542a",
    line: "#bcae8d",
    gold: "#bf8f3a",
    card: "#fbf6e9",
    land: "#ddd0ad",
    landStroke: "#c3b48f",
    ocean: "#eee6d0",
    label: "#3a3326",
    ice: "#f8f4e8",
    shelf: "#d7c69f",
  },
};

export const eras = [
  {
    id: "iceage",
    eyebrow: "c. 20,000 BCE",
    name: "The Last Glacial Maximum",
    short: "Ice Age",
    blurb:
      "A paleo-conceptual view: sea level is roughly 120 meters lower, continental shelves emerge, and ice sheets cover the north. This is not modern borders recolored; it is a geographic layer for explaining change.",
    ice: true,
    stats: [
      { value: "-120 m", label: "Sea level" },
      { value: "3 M", label: "Humans alive" },
    ],
    landBridges: [
      { a: [150, 300], b: [120, 300], label: "Beringia" },
      { a: "gb", b: "fr", label: "Doggerland" },
      { a: "id", b: "au", label: "Sahul" },
    ],
    article: {
      tag: "Geography",
      title: "Why Warm Countries Are Poorer",
      url: "https://unchartedterritories.tomaspueyo.com/p/mountains",
    },
  },
  {
    id: "antiquity",
    eyebrow: "c. 500 BCE",
    name: "Egypt and Persia",
    short: "Persia",
    blurb:
      "The Achaemenid Persian Empire becomes the largest polity the world has seen, stretching from the Balkans to the Indus. Egypt, ancient and wealthy, becomes one of its most valuable satrapies.",
    regions: {
      "#c98a2e": ["ir", "iq", "tr", "sy", "lb", "il", "jo", "af", "tm", "uz", "tj", "az", "am", "ge", "pk", "kw", "ae", "cy"],
      "#7a8a3a": ["eg", "sd"],
    },
    legend: [
      ["#c98a2e", "Achaemenid Persia"],
      ["#7a8a3a", "Egypt"],
    ],
    routes: [
      { from: "ir", to: "tr", color: "#8a5a18" },
      { from: "ir", to: "pk", color: "#8a5a18" },
    ],
    labels: [
      { iso: "ir", text: "Persepolis" },
      { iso: "eg", text: "Memphis" },
    ],
    stats: [
      { value: "5.5M km2", label: "Extent" },
      { value: "44%", label: "Humanity under Persia" },
    ],
    article: {
      tag: "Cartography",
      title: "Maps Distort How We See the World",
      url: "https://unchartedterritories.tomaspueyo.com/p/maps-distort-how-we-see-the-world",
    },
  },
  {
    id: "rome",
    eyebrow: "117 CE",
    name: "The Roman Empire",
    short: "Rome",
    blurb:
      "At its peak under Trajan, Rome surrounds the Mediterranean, Mare Nostrum, from Britain to Mesopotamia. Roads, ports, and law turn geography into infrastructure.",
    regions: {
      "#a6402a": ["it", "fr", "es", "pt", "gb", "be", "nl", "ch", "at", "si", "hr", "ba", "rs", "me", "mk", "al", "gr", "bg", "ro", "hu", "tr", "sy", "lb", "il", "jo", "eg", "ly", "tn", "dz", "ma", "cy", "lu"],
    },
    routes: [
      { from: "gb", to: "it", color: "#7a2a1a" },
      { from: "it", to: "eg", color: "#7a2a1a" },
      { from: "es", to: "tr", color: "#7a2a1a" },
    ],
    labels: [
      { iso: "it", text: "Rome" },
      { iso: "tr", text: "Byzantium" },
    ],
    stats: [
      { value: "5.0M km2", label: "Extent" },
      { value: "80,000 km", label: "Roads" },
    ],
    article: {
      tag: "History",
      title: "Maps Distort How We See the World",
      url: "https://unchartedterritories.tomaspueyo.com/p/maps-distort-how-we-see-the-world",
    },
  },
  {
    id: "islam",
    eyebrow: "750 CE",
    name: "The Islamic Expansion",
    short: "Islam",
    blurb:
      "In little more than a century, the Umayyad Caliphate stretches from Iberia to the Indus Valley: a desert-born movement becomes the largest empire of its time.",
    regions: {
      "#2f7d5b": ["sa", "ye", "om", "ae", "qa", "kw", "iq", "ir", "sy", "jo", "il", "lb", "eg", "ly", "tn", "dz", "ma", "es", "pt", "af", "tm", "uz", "tj", "pk"],
    },
    routes: [
      { from: "sa", to: "es", color: "#1d5840" },
      { from: "sa", to: "pk", color: "#1d5840" },
    ],
    labels: [
      { iso: "sa", text: "Medina" },
      { iso: "sy", text: "Damascus" },
      { iso: "es", text: "Al-Andalus" },
    ],
    stats: [
      { value: "11M km2", label: "By 750" },
      { value: "120 years", label: "Village to empire" },
    ],
    article: {
      tag: "History",
      title: "How Did Islam Spread So Fast?",
      url: "https://unchartedterritories.tomaspueyo.com/p/how-did-islam-spread-so-fast",
    },
  },
  {
    id: "colonial",
    eyebrow: "1914",
    name: "The Colonial Empires",
    short: "Colonial",
    blurb:
      "On the eve of World War I, a handful of European powers dominate much of the planet. The British Empire alone covers about a quarter of the world’s land area.",
    regions: {
      "#9c3b2e": ["gb", "in", "pk", "bd", "mm", "au", "nz", "ca", "za", "eg", "sd", "ng", "ke", "tz", "gh", "ie", "my"],
      "#2f6f8f": ["fr", "dz", "ma", "tn", "ml", "ne", "td", "mg", "vn", "la", "kh", "sn", "ci"],
      "#5f8a4a": ["pt", "ao", "mz", "br"],
      "#b86b2f": ["nl", "id"],
      "#6b6f76": ["de", "na"],
      "#8a6d3b": ["be", "cd"],
      "#7a8a3a": ["it", "ly"],
      "#c98a2e": ["es"],
    },
    legend: [
      ["#9c3b2e", "British"],
      ["#2f6f8f", "French"],
      ["#5f8a4a", "Portuguese"],
      ["#b86b2f", "Dutch"],
      ["#6b6f76", "German"],
      ["#8a6d3b", "Belgian"],
    ],
    routes: [
      { from: "gb", to: "in", color: "#7a2a1a" },
      { from: "gb", to: "au", color: "#7a2a1a" },
    ],
    stats: [
      { value: "1/4", label: "Land under UK" },
      { value: "84%", label: "World colonized" },
    ],
    article: {
      tag: "Geopolitics",
      title: "Why Warm Countries Are Poorer",
      url: "https://unchartedterritories.tomaspueyo.com/p/mountains",
    },
  },
  {
    id: "modern",
    eyebrow: "2026",
    name: "The World Today",
    short: "Today",
    blurb:
      "195 sovereign states with borders inherited from everything that came before. Geography still helps explain why the world is the way it is.",
    modern: true,
    labels: [
      { iso: "us", text: "United States" },
      { iso: "cn", text: "China" },
      { iso: "in", text: "India" },
      { iso: "br", text: "Brazil" },
    ],
    stats: [
      { value: "195", label: "States" },
      { value: "8.1B", label: "People" },
    ],
    article: {
      tag: "Current world",
      title: "Maps Distort How We See the World",
      url: "https://unchartedterritories.tomaspueyo.com/p/maps-distort-how-we-see-the-world",
    },
  },
];

export const countryNames = {
  eg: "Egypt",
  ir: "Iran (Persia)",
  it: "Italy",
  gr: "Greece",
  tr: "Turkey",
  es: "Spain",
  pt: "Portugal",
  fr: "France",
  gb: "United Kingdom",
  de: "Germany",
  in: "India",
  cn: "China",
  us: "United States",
  ru: "Russia",
  sa: "Saudi Arabia",
  iq: "Iraq",
  sy: "Syria",
  ma: "Morocco",
  dz: "Algeria",
  ly: "Libya",
  sd: "Sudan",
  pk: "Pakistan",
  af: "Afghanistan",
  uz: "Uzbekistan",
  au: "Australia",
  ca: "Canada",
  za: "South Africa",
  br: "Brazil",
  mx: "Mexico",
  ar: "Argentina",
  jp: "Japan",
  id: "Indonesia",
  ng: "Nigeria",
  ke: "Kenya",
  vn: "Vietnam",
  gl: "Greenland",
  il: "Israel",
  jo: "Jordan",
  ye: "Yemen",
  om: "Oman",
  ae: "United Arab Emirates",
  cy: "Cyprus",
};

export const selectedTools = [
  {
    title: "Living UT Atlas",
    role: "Product + Visual Design",
    why:
      "A cartographic product surface that matches UT’s identity and shows how articles can become interactive exploration tools.",
    output: "Temporal map layers, article links, search, and expandable datasets for future topic or geography coverage.",
    effort: "Already prototyped",
  },
  {
    title: "Live Fact-checker",
    role: "Product",
    why:
      "Directly maps to the role description: systems that help AI improve truth-seeking instead of generating slop.",
    output: "Paste an article excerpt; get claims, evidence, source links, confidence, and unresolved questions.",
    effort: "MVP in 2-4 days",
  },
  {
    title: "Article to Video Script",
    role: "Growth",
    why:
      "Turns UT’s long-form thinking into a distribution machine for YouTube, shorts, and social-native formats.",
    output: "A UT URL becomes a long-form script, short hooks, scene beats, voiceover notes, and visual prompts.",
    effort: "MVP in 1-2 days",
  },
  {
    title: "Personalized Briefing",
    role: "Product",
    why:
      "A concrete way to make the UT archive more useful: readers choose interests and receive tailored context.",
    output: "A weekly briefing with relevant articles, maps, summaries, and why each topic matters now.",
    effort: "MVP in 3-5 days",
  },
];

export const essays = [
  {
    tag: "Geography",
    title: "Why Warm Countries Are Poorer",
    desc: "A strong source article for testing geography, development, and visual explanation workflows.",
    url: "https://unchartedterritories.tomaspueyo.com/p/mountains",
  },
  {
    tag: "Cartography",
    title: "Maps Distort How We See the World",
    desc: "Useful for the atlas, visual identity, and product tools that make map bias visible.",
    url: "https://unchartedterritories.tomaspueyo.com/p/maps-distort-how-we-see-the-world",
  },
  {
    tag: "History",
    title: "How Did Islam Spread So Fast?",
    desc: "Good material for video-script generation, timeline interaction, and claim extraction.",
    url: "https://unchartedterritories.tomaspueyo.com/p/how-did-islam-spread-so-fast",
  },
];

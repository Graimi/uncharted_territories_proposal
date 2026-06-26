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
  },
};

export const eras = [
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

export const archiveArticles = [
  {
    title: "The Future of Petrostates After Oil",
    dek: "Petrostates, failed states, and what happens after oil money breaks.",
    date: "Mar 5",
    topic: "Energy & Geopolitics",
  },
  {
    title: "Iran: The Day After",
    dek: "What could happen in the coming days and weeks.",
    date: "Mar 3",
    topic: "Geopolitics",
  },
  {
    title: "Saudi Arabia’s Ordeal",
    dek: "Between the Sandworm and the Quicksand.",
    date: "Feb 25",
    topic: "GeoHistory",
  },
  {
    title: "Can We Build AI in Space?",
    dek: "Radiation, cooling, shipping costs, and space datacenters.",
    date: "Feb 18",
    topic: "AI + Space",
  },
  {
    title: "The Resource Cliff",
    dek: "What happens when countries run out of resources.",
    date: "Feb 10",
    topic: "Energy",
  },
  {
    title: "Dubai",
    dek: "The Anti-Petrostate.",
    date: "Feb 6",
    topic: "Cities",
  },
  {
    title: "Peak Oil Is Coming",
    dek: "How hybrids, infrastructure, and adoption curves interact.",
    date: "Feb 3",
    topic: "Energy",
  },
  {
    title: "AI in 2026",
    dek: "Bubble, winners, AGI, jobs, and the rate of AI progress.",
    date: "Jan 24",
    topic: "AI",
  },
];

export const missionConcept = {
  title: "UT Mission Control",
  role: "Agentic Media OS",
  article: "The Media Company of the 21st Century",
  problem:
    "UT does not want to be just a newsletter. It wants to become an institution spanning essays, videos, products, experiences, education, and decision tools.",
  demo:
    "A visual agent workflow turns one research brief into an article, social clips, a video script, a map, a course module, a product concept, and a reader feedback loop.",
  build:
    "Orchestrate specialized agents for research, editorial structure, fact-checking, visual briefing, video scripting, social adaptation, product ideation, and analytics.",
  impact: "Shows the biggest version of the role: not one tool, but the operating system for a 21st-century media company.",
};

export const featuredConcepts = [
  {
    title: "Reading Time Optimizer",
    role: "Product + Editorial UX",
    article: "The Future of Petrostates After Oil",
    problem:
      "Long UT essays are a strength, but long-form readers still need rhythm: where to pause, where to visualize, and where the argument risks losing momentum.",
    demo:
      "A visual scan of a petrostate essay marks friction points, likely drop-off zones, and opportunities for maps, timelines, or comparison graphics.",
    build:
      "Parse article structure, estimate cognitive load per section, flag dense passages, and generate editorial interventions with before/after previews.",
    impact: "Keeps deep essays deep while making them easier to finish, share, and convert into derivative formats.",
  },
  {
    title: "UT Content Graph",
    role: "Systems + Data Viz",
    article: "AI in 2026 + Can We Build AI in Space? + Peak Oil Is Coming",
    problem:
      "UT’s archive is not a list of posts. It is a network of geography, incentives, technology, energy, and history.",
    demo:
      "A living graph connects articles by concept, region, causal force, and audience intent, turning the archive into a discovery engine.",
    build:
      "Embed articles, extract entities and concepts, cluster themes, and render a network that can open briefings, maps, scripts, or fact-checks.",
    impact: "Shows system thinking, gives readers a new way to explore UT, and creates a foundation for personalization.",
  },
];

export const proposalGroups = [
  {
    type: "Product tools",
    items: [
      "UT Mission Control",
      "Live fact-checker",
      "Personalized briefing",
      "UT semantic article search",
      "Topic market demo",
      "Interactive tools inside articles",
      "Reading Time Optimizer",
      "UT Content Graph",
    ],
  },
  {
    type: "Growth machines",
    items: [
      "Article to video script",
      "Article to social posts generator",
      "Newsletter to podcast script",
      "Cross-posting engine",
      "Subscriber growth simulator",
      "Synthetic creator demo",
    ],
  },
  {
    type: "Visual and brand systems",
    items: [
      "Living UT Atlas",
      "Brand consistency checker",
      "Geopolitical impact map",
      "Animated explainer cards",
      "Physical product concept builder",
      "Visual brief generator for illustrators",
    ],
  },
];

export const newIdeas = [
  {
    title: "Causal Map Builder",
    pitch:
      "Turn an essay into an explorable cause-and-effect map: oil revenue, state capacity, geography, demographics, incentives, and downstream outcomes.",
  },
  {
    title: "Counterfactual Article Lab",
    pitch:
      "Let readers change one assumption in a UT essay and watch the argument update: oil price, birth rate, shipping cost, AI compute price, or migration flow.",
  },
  {
    title: "Visual Claim Ledger",
    pitch:
      "A beautiful public ledger of the strongest claims in an article, each linked to evidence, uncertainty, opposing views, and update history.",
  },
  {
    title: "Worldview Simulator",
    pitch:
      "A compact interactive model where readers tune forces like energy, AI, geography, fertility, and institutions to see which futures become plausible.",
  },
];

export const missionAgents = [
  {
    label: "Research brief",
    title: "One UT idea",
    detail: "Petrostates after oil, AI in space, Dubai, peak oil, or a new geopolitical thesis.",
    lane: "input",
  },
  {
    label: "Editorial agent",
    title: "Essay architecture",
    detail: "Outline, argument map, section rhythm, claim ledger, and reading friction analysis.",
    lane: "core",
  },
  {
    label: "Truth agent",
    title: "Evidence swarm",
    detail: "Claims, citations, counterarguments, confidence levels, and unresolved questions.",
    lane: "core",
  },
  {
    label: "Visual agent",
    title: "Maps and explainers",
    detail: "Cartography prompts, diagrams, data visuals, cover art, and brand-consistent graphics.",
    lane: "core",
  },
  {
    label: "Growth agent",
    title: "Distribution machine",
    detail: "Threads, LinkedIn posts, shorts hooks, YouTube descriptions, podcast scripts, and A/B variants.",
    lane: "output",
  },
  {
    label: "Institution agent",
    title: "Beyond content",
    detail: "Salons, site visits, courses, kits, maps, shop concepts, and community coordination.",
    lane: "output",
  },
];

export const missionOutputs = [
  "Long-form essay",
  "YouTube script",
  "Shorts package",
  "Interactive map",
  "Fact-check ledger",
  "Course module",
  "Event concept",
  "Physical product brief",
  "Reader feedback loop",
];

export const readingSegments = [
  { label: "Hook", width: "16%", tone: "strong", note: "Keep. High narrative pull." },
  { label: "Context", width: "22%", tone: "dense", note: "Add map before the policy detail." },
  { label: "Mechanism", width: "26%", tone: "risk", note: "Likely drop-off. Split and visualize causal chain." },
  { label: "Scenario", width: "20%", tone: "strong", note: "Good place for interactive slider." },
  { label: "Action", width: "16%", tone: "dense", note: "Convert to checklist and share card." },
];

export const essays = [
  {
    tag: "Energy & Geopolitics",
    title: "The Future of Petrostates After Oil",
    desc: "A strong test case for reading optimization, causal maps, and geopolitical impact visuals.",
    url: "https://unchartedterritories.tomaspueyo.com/archive?sort=new",
  },
  {
    tag: "AI + Space",
    title: "Can We Build AI in Space?",
    desc: "Useful for video-script generation, visual explainers, and the content graph.",
    url: "https://unchartedterritories.tomaspueyo.com/archive?sort=new",
  },
  {
    tag: "AI",
    title: "AI in 2026",
    desc: "Good material for fact-checking, prediction markets, and personalized briefings.",
    url: "https://unchartedterritories.tomaspueyo.com/archive?sort=new",
  },
];

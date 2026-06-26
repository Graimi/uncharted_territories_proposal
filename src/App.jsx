import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Factory,
  FileSearch,
  Film,
  Globe2,
  Layers3,
  Lightbulb,
  Map,
  MessageSquare,
  MousePointer2,
  Pause,
  Play,
  Search,
  Share2,
  Sparkles,
  Star,
  Wand2,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import worldMap from "../world-map.min.svg?raw";
import {
  archiveArticles,
  countryNames,
  eras,
  essays,
  featuredConcepts,
  missionConcept,
  newIdeas,
  proposalGroups,
  readingSegments,
  themes,
} from "./data";

const theme = themes.editorial;

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Eyebrow({ children, className = "" }) {
  return (
    <p className={cx("font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-rust", className)}>
      {children}
    </p>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line/80 bg-paper/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:px-12">
        <a href="#top" className="flex min-w-0 items-center gap-3 no-underline">
          <img src="/uploads/ut-mark.webp" alt="Uncharted Territories" className="h-9 w-10 object-contain" />
          <span className="hidden font-serif text-lg font-semibold text-ink sm:block">Uncharted Territories</span>
        </a>
        <div className="flex items-center gap-2 sm:gap-5">
          {[
            ["Fit", "#fit"],
            ["Atlas", "#atlas"],
            ["Mission", "#mission"],
            ["Featured", "#featured"],
            ["Ideas", "#ideas"],
            ["Roadmap", "#roadmap"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="hidden font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-muted no-underline transition hover:text-rust md:inline"
            >
              {label}
            </a>
          ))}
          <a
            href="#featured"
            className="inline-flex h-10 items-center gap-2 rounded-sm bg-teal px-4 font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-paper no-underline transition hover:bg-rust"
          >
            <Sparkles className="h-4 w-4" />
            Star ideas
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="relative overflow-hidden border-b border-line bg-paper">
      <div className="absolute inset-0 paper-grain opacity-70" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.8fr)] lg:px-12 lg:py-20">
        <div className="relative z-10 max-w-4xl">
          <Eyebrow>Product design + software development + growth systems</Eyebrow>
          <h1 className="mt-5 max-w-5xl font-serif text-[clamp(44px,7vw,96px)] font-medium leading-[0.96] text-ink">
            The product layer for a 21st-century media company.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            A product-led proposal for Uncharted Territories: fast AI-assisted software, sharp editorial interfaces,
            and agentic systems that turn ideas into essays, videos, products, experiences, and tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#atlas" className="btn-primary">
              <Map className="h-4 w-4" />
              View living atlas
            </a>
            <a href="#featured" className="btn-secondary">
              <Layers3 className="h-4 w-4" />
              Explore star concepts
            </a>
          </div>
        </div>

        <div className="relative z-10 self-end">
          <div className="command-card border border-line bg-card p-4 shadow-cartouche">
            <div className="grid gap-1 border-b border-line pb-4 sm:grid-cols-3">
              {[
                ["Ship fast", "Visible MVPs in days"],
                ["Design sharp", "Brand, UI, and narrative"],
                ["Systemize", "What works becomes a machine"],
              ].map(([title, body]) => (
                <div key={title} className="p-3">
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-rust">{title}</p>
                  <p className="mt-2 font-serif text-lg leading-6 text-ink">{body}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-1 pt-4 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="min-h-44 border border-line bg-paper2 p-4">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-muted">Role target</p>
                <p className="mt-5 font-serif text-3xl leading-none text-teal">Designer Vibe-Coder</p>
                <p className="mt-3 text-sm leading-6 text-muted">Software, visual design, and AI-native tools.</p>
              </div>
              <div className="hero-core-card relative min-h-44 overflow-hidden bg-teal p-4 text-paper">
                <div className="absolute inset-x-4 top-12 h-px bg-paper/20" />
                <div className="absolute inset-x-8 top-20 h-px bg-paper/20" />
                <div className="absolute inset-x-12 top-28 h-px bg-paper/20" />
                <div className="compass-ring absolute bottom-5 right-5 grid h-24 w-24 place-items-center border border-paper/35">
                  <Globe2 className="h-12 w-12" />
                </div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-paper/70">Core demo</p>
                <p className="mt-5 max-w-[12rem] font-serif text-3xl leading-none">A lab for UT ideas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FitSection() {
  const items = [
    {
      icon: Wand2,
      title: "Vibe-code real product",
      body: "The site does not just say I use AI. It turns the application into a navigable, expandable product demo.",
    },
    {
      icon: FileSearch,
      title: "Truth infrastructure",
      body: "Fact-checking, personalized briefings, and tools inside articles directly address the AI slop problem.",
    },
    {
      icon: Share2,
      title: "Growth loops",
      body: "Each article can branch into videos, shorts, posts, simulations, and channel-native formats.",
    },
  ];

  return (
    <section id="fit" className="border-b border-line bg-paper2">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12 lg:py-18">
        <div>
          <Eyebrow>Why this fits</Eyebrow>
          <h2 className="mt-4 max-w-xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Not a passive portfolio. A demo of how I would work inside UT.
          </h2>
        </div>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <article key={title} className="bg-card p-6">
              <Icon className="h-6 w-6 text-teal" />
              <h3 className="mt-8 font-serif text-2xl font-semibold leading-tight text-ink">{title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Atlas() {
  const [eraIndex, setEraIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [search, setSearch] = useState("");
  const [searchHint, setSearchHint] = useState("5 eras · interactive SVG map");
  const [mapReady, setMapReady] = useState(false);
  const hostRef = useRef(null);
  const svgRef = useRef(null);
  const overlayRef = useRef(null);
  const countriesRef = useRef([]);
  const centroidsRef = useRef({});
  const timerRef = useRef(null);
  const currentEra = eras[eraIndex];

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    host.innerHTML = worldMap;
    const svg = host.querySelector("svg");
    if (!svg) return;
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.classList.add("h-full", "w-full");

    const viewBox = svg.viewBox.baseVal;
    const ocean = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    ocean.setAttribute("id", "ut-ocean");
    ocean.setAttribute("x", viewBox.x);
    ocean.setAttribute("y", viewBox.y);
    ocean.setAttribute("width", viewBox.width);
    ocean.setAttribute("height", viewBox.height);
    ocean.setAttribute("fill", theme.ocean);
    svg.insertBefore(ocean, svg.firstChild);

    const countries = Array.from(svg.querySelectorAll("path[id],g[id]")).filter((el) => !el.id.startsWith("ut-"));
    countriesRef.current = countries;
    centroidsRef.current = {};
    countries.forEach((el) => {
      try {
        const box = el.getBBox();
        centroidsRef.current[el.id] = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
      } catch {
        // Some SVG groups do not expose boxes until painted. They are simply skipped.
      }
    });

    const overlay = document.createElementNS("http://www.w3.org/2000/svg", "g");
    overlay.setAttribute("id", "ut-overlay");
    svg.appendChild(overlay);
    svgRef.current = svg;
    overlayRef.current = overlay;
    setMapReady(true);
  }, []);

  useEffect(() => {
    if (!mapReady) return;
    paintEra(eraIndex);
    if (search) highlightSearch(search, false);
  }, [eraIndex, mapReady]);

  useEffect(() => {
    if (!playing) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = window.setInterval(() => {
      setEraIndex((value) => {
        if (value >= eras.length - 1) {
          setPlaying(false);
          return value;
        }
        return value + 1;
      });
    }, 2600);
    return () => clearInterval(timerRef.current);
  }, [playing]);

  function point(ref) {
    if (Array.isArray(ref)) return { x: ref[0], y: ref[1] };
    return centroidsRef.current[ref];
  }

  function addLabel(x, y, text, color = theme.label, size = 8.5, weight = "500") {
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", x);
    label.setAttribute("y", y);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("font-size", size);
    label.setAttribute("font-weight", weight);
    label.setAttribute("fill", color);
    label.setAttribute("stroke", theme.ocean);
    label.setAttribute("stroke-width", "0.8");
    label.setAttribute("paint-order", "stroke");
    label.setAttribute("class", "ut-map-label");
    label.textContent = text;
    overlayRef.current.appendChild(label);
    return label;
  }

  function paintEra(index) {
    const svg = svgRef.current;
    const overlay = overlayRef.current;
    if (!svg || !overlay) return;
    const era = eras[index];
    const ocean = svg.querySelector("#ut-ocean");
    if (ocean) ocean.setAttribute("fill", theme.ocean);

    const isoColor = {};
    if (!era.modern && era.regions) {
      Object.entries(era.regions).forEach(([color, isos]) => {
        isos.forEach((iso) => {
          isoColor[iso] = color;
        });
      });
    }

    countriesRef.current.forEach((el) => {
      const color = isoColor[el.id];
      if (color) {
        el.setAttribute("fill", color);
        el.style.opacity = "1";
      } else {
        el.setAttribute("fill", theme.land);
        el.style.opacity = era.modern ? "1" : "0.48";
      }
      el.setAttribute("stroke", theme.landStroke);
      el.setAttribute("stroke-width", era.modern ? "0.52" : "0.36");
    });

    overlay.innerHTML = "";

    if (era.routes) {
      era.routes.forEach((route) => {
        const a = point(route.from);
        const b = point(route.to);
        if (!a || !b) return;
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2 - Math.hypot(b.x - a.x, b.y - a.y) * 0.22;
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", `M${a.x} ${a.y} Q${mx} ${my} ${b.x} ${b.y}`);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", route.color || theme.rust);
        path.setAttribute("stroke-width", "1.25");
        path.setAttribute("stroke-dasharray", "2 2.4");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("opacity", "0.92");
        overlay.appendChild(path);

        [a, b].forEach((position) => {
          const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          dot.setAttribute("cx", position.x);
          dot.setAttribute("cy", position.y);
          dot.setAttribute("r", "1.8");
          dot.setAttribute("fill", route.color || theme.rust);
          overlay.appendChild(dot);
        });
      });
    }

    if (era.labels) {
      era.labels.forEach((item) => {
        const c = centroidsRef.current[item.iso];
        if (c) addLabel(c.x, c.y, item.text, theme.label, 8.5);
      });
    }
  }

  function highlightSearch(value, announce = true) {
    setSearch(value);
    if (!mapReady || !svgRef.current) return;
    paintEra(eraIndex);
    const q = value.trim().toLowerCase();
    if (!q) {
      if (announce) setSearchHint("5 eras · interactive SVG map");
      return;
    }

    let iso = Object.keys(countryNames).find((key) => countryNames[key].toLowerCase() === q);
    if (!iso) iso = Object.keys(countryNames).find((key) => countryNames[key].toLowerCase().includes(q));
    if (!iso && q.length === 2 && centroidsRef.current[q]) iso = q;

    const el = iso ? svgRef.current.querySelector(`#${CSS.escape(iso)}`) : null;
    if (!el) {
      if (announce) setSearchHint("No results");
      return;
    }

    el.style.stroke = theme.rust;
    el.style.strokeWidth = "1.8";
    el.style.opacity = "1";
    const c = centroidsRef.current[iso];
    if (c) addLabel(c.x, c.y - 4, countryNames[iso], theme.rust, 10, "800");
    if (announce) setSearchHint(`Found: ${countryNames[iso]}`);
  }

  function scrub(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    setPlaying(false);
    setEraIndex(Math.round(ratio * (eras.length - 1)));
  }

  const progress = (eraIndex / (eras.length - 1)) * 100;

  return (
    <section id="atlas" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <Eyebrow>Main demo</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
              A living UT atlas: content, history, and visual storytelling in one tool.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            This is not just a map. It is an editorial product surface: temporal navigation, search, visual layers,
            and an architecture ready to connect articles, briefings, or topic markets.
          </p>
        </div>

        <div className="mt-9 border border-line bg-card p-3 shadow-cartouche">
          <div className="flex flex-wrap items-center gap-3 border-b border-line pb-3">
            <div className="flex flex-wrap gap-2">
              {eras.map((era, index) => (
                <button
                  key={era.id}
                  type="button"
                  onClick={() => {
                    setPlaying(false);
                    setEraIndex(index);
                  }}
                  className={cx(
                    "h-9 rounded-sm border px-3 font-sans text-[12px] font-bold text-muted transition",
                    index === eraIndex ? "border-rust bg-rust text-paper" : "border-line bg-paper hover:border-rust hover:text-rust",
                  )}
                >
                  {era.short}
                </button>
              ))}
            </div>
            <div className="ml-auto flex min-w-[220px] flex-1 items-center gap-2 border border-line bg-paper px-3 py-2 sm:max-w-md">
              <Search className="h-4 w-4 text-muted" />
              <input
                value={search}
                onChange={(event) => highlightSearch(event.target.value)}
                list="ut-countries"
                placeholder="Search a country..."
                className="min-w-0 flex-1 bg-transparent font-serif text-[15px] text-ink outline-none placeholder:text-muted/70"
              />
              <datalist id="ut-countries">
                {Object.values(countryNames)
                  .sort()
                  .map((name) => (
                    <option key={name} value={name} />
                  ))}
              </datalist>
            </div>
            <p className="min-w-36 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-muted">{searchHint}</p>
          </div>

          <div className="grid min-h-[600px] lg:grid-cols-[360px_minmax(0,1fr)]">
            <aside className="border-b border-line bg-card p-5 lg:border-b-0 lg:border-r">
              <div className="flex items-baseline gap-3 border-b border-line pb-4">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-rust">{currentEra.eyebrow}</p>
                <p className="ml-auto font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                  {String(eraIndex + 1).padStart(2, "0")} / {String(eras.length).padStart(2, "0")}
                </p>
              </div>
              <h3 className="mt-5 font-serif text-4xl font-semibold leading-none text-ink">{currentEra.name}</h3>
              <p className="mt-5 text-[15px] leading-7 text-muted">{currentEra.blurb}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {currentEra.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl font-bold leading-none text-teal">{stat.value}</p>
                    <p className="mt-2 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
              {currentEra.legend ? (
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-5">
                  {currentEra.legend.map(([color, name]) => (
                    <div key={name} className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-[2px]" style={{ background: color }} />
                      <span className="font-sans text-[11px] font-semibold text-muted">{name}</span>
                    </div>
                  ))}
                </div>
              ) : null}
              <a
                href={currentEra.article.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center gap-3 border border-line bg-paper p-3 text-ink no-underline transition hover:border-rust hover:text-rust"
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
                <span>
                  <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-rust">
                    Essay · {currentEra.article.tag}
                  </span>
                  <span className="mt-1 block font-serif text-[15px] font-semibold leading-tight">{currentEra.article.title}</span>
                </span>
              </a>
            </aside>

            <div className="relative min-h-[520px] overflow-hidden bg-ocean">
              <div className="absolute right-4 top-4 z-10 flex gap-2">
                <button
                  type="button"
                  aria-label="Previous era"
                  className="icon-btn"
                  onClick={() => {
                    setPlaying(false);
                    setEraIndex((value) => Math.max(0, value - 1));
                  }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button type="button" className="btn-primary h-10 px-4" onClick={() => setPlaying((value) => !value)}>
                  {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  {playing ? "Pause" : "Play"}
                </button>
                <button
                  type="button"
                  aria-label="Next era"
                  className="icon-btn"
                  onClick={() => {
                    setPlaying(false);
                    setEraIndex((value) => Math.min(eras.length - 1, value + 1));
                  }}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute left-4 top-4 z-10 hidden items-center gap-2 bg-card/90 px-3 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-muted backdrop-blur sm:flex">
                <MousePointer2 className="h-4 w-4 text-rust" />
                Scrub timeline
              </div>
              <div id="ut-map-host" ref={hostRef} className="absolute inset-0 p-4 sm:p-8" />
            </div>
          </div>

          <div className="border-t border-line px-2 py-4 sm:px-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-muted">Drag the timeline</p>
              <p className="font-serif text-sm italic text-rust">{currentEra.eyebrow}</p>
            </div>
            <div className="relative h-16 cursor-pointer select-none" onPointerDown={scrub}>
              <div className="absolute left-0 right-0 top-3 h-px bg-line" />
              <div className="absolute left-0 top-[10px] h-1.5 rounded-full bg-rust transition-all" style={{ width: `${progress}%` }} />
              <div
                className="absolute top-0 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full border-2 border-rust bg-paper shadow"
                style={{ left: `${progress}%` }}
              >
                <span className="h-2 w-2 rounded-full bg-rust" />
              </div>
              {eras.map((era, index) => {
                const left = (index / (eras.length - 1)) * 100;
                return (
                  <button
                    key={era.id}
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setPlaying(false);
                      setEraIndex(index);
                    }}
                    className="absolute top-9 max-w-[8rem] -translate-x-1/2 text-center font-sans text-[10px] font-bold uppercase tracking-[0.04em] text-muted transition hover:text-rust"
                    style={{ left: `${left}%` }}
                  >
                    <span className={index === eraIndex ? "text-rust" : ""}>{era.eyebrow}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionControl() {
  return (
    <section id="mission" className="border-b border-line bg-ink">
      <div className="mx-auto max-w-[1720px] px-0 py-0">
        <h2 className="sr-only">{missionConcept.title}</h2>
        <img
          src="/uploads/mission-control.png"
          alt="Mission Control media operating system: one research idea branching into essay, fact-checking, maps, video, social clips, courses, events, products, and reader feedback."
          className="block h-auto w-full"
        />
      </div>
    </section>
  );
}

function ReadingOptimizerDemo() {
  const toneClass = {
    strong: "bg-teal text-paper",
    dense: "bg-gold text-ink",
    risk: "bg-rust text-paper",
  };

  return (
    <div className="relative overflow-hidden border border-line bg-card p-5 shadow-cartouche">
      <div className="scanline" aria-hidden="true" />
      <div className="absolute inset-x-5 top-20 h-px bg-line" />
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-rust">Visual trial</p>
          <h3 className="mt-2 font-serif text-3xl font-semibold leading-none text-ink">The Future of Petrostates After Oil</h3>
        </div>
        <div className="border border-line bg-paper px-3 py-2 text-right">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-muted">Predicted completion</p>
          <p className="font-serif text-3xl font-semibold text-teal">+18%</p>
        </div>
      </div>

      <div className="mt-10 flex h-16 overflow-hidden border border-line bg-paper">
        {readingSegments.map((segment) => (
          <div
            key={segment.label}
            className={cx("group relative grid place-items-center border-r border-paper/50 font-sans text-[10px] font-bold uppercase tracking-[0.08em]", toneClass[segment.tone])}
            style={{ width: segment.width }}
          >
            {segment.label}
            <span className="absolute left-1/2 top-full z-10 mt-2 hidden w-44 -translate-x-1/2 border border-line bg-card p-2 text-left font-serif text-sm normal-case leading-5 tracking-normal text-ink group-hover:block">
              {segment.note}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
        {[
          ["Cut", "Split the mechanism section into two screens and move the core causal claim up."],
          ["Add visual", "Insert a map comparing oil rents, population pressure, and state capacity."],
          ["Repurpose", "Turn the scenario section into a short video script and a shareable card."],
        ].map(([label, body]) => (
          <div key={label} className="bg-paper p-4">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-rust">{label}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const cgNodeBase = {
  position: "absolute",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  background: "linear-gradient(165deg,#f6efdd,#e9ddc2)",
  boxShadow: "0 14px 30px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.7),inset 0 -8px 18px rgba(140,120,80,.12)",
};

function ContentGraphDemo() {
  return (
    <div className="overflow-hidden border border-line bg-card shadow-cartouche">
      <div className="border-b border-line p-5">
        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-rust">Archive system map</p>
        <h3 className="mt-2 max-w-lg font-serif text-3xl font-semibold leading-none text-ink">
          A discovery engine for UT's hidden structure
        </h3>
      </div>
      <div className="grid min-h-[420px] lg:grid-cols-[1fr_180px]">
        {/* Graph canvas */}
        <div
          className="relative min-h-[390px] overflow-hidden"
          style={{
            background: "radial-gradient(120% 100% at 50% 38%,#2d626d 0%,#234e58 55%,#1d434c 100%)",
          }}
        >
          {/* Grid overlay */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
              backgroundSize: "42px 42px",
              maskImage: "radial-gradient(130% 110% at 50% 42%,#000 55%,transparent 100%)",
              WebkitMaskImage: "radial-gradient(130% 110% at 50% 42%,#000 55%,transparent 100%)",
            }}
          />
          {/* Vignette */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 180px rgba(0,0,0,.30)", pointerEvents: "none" }} />

          {/* Connector SVG */}
          <svg viewBox="0 0 960 680" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <g
              fill="none"
              stroke="#ece2cb"
              strokeOpacity=".34"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeDasharray="2 7"
              style={{ animation: "cgFlow 22s linear infinite" }}
            >
              <line x1="411.4" y1="181.2" x2="268.5" y2="266.9" />
              <line x1="548.6" y1="181.2" x2="691.5" y2="266.9" />
              <line x1="261.3" y1="353.1" x2="361.5" y2="438.8" />
              <line x1="698.7" y1="353.1" x2="598.5" y2="438.8" />
              <line x1="446" y1="470" x2="514" y2="470" />
              <line x1="425.9" y1="509.1" x2="449.8" y2="542.7" />
              <line x1="534.1" y1="509.1" x2="510.2" y2="542.7" />
            </g>
          </svg>

          {/* Root node */}
          <div
            style={{
              ...cgNodeBase,
              left: "41.7%",
              top: "8.8%",
              width: 160,
              height: 160,
            }}
          >
            <span style={{ color: "#3a3224", fontSize: 15, fontWeight: 600, letterSpacing: "1.6px", textTransform: "uppercase", lineHeight: 1.3 }}>
              AI in 2026
            </span>
          </div>

          {/* Left branch */}
          <div
            style={{
              ...cgNodeBase,
              left: "13.6%",
              top: "34%",
              width: 148,
              height: 148,
              boxShadow: "0 12px 26px rgba(0,0,0,.26),inset 0 1px 0 rgba(255,255,255,.7),inset 0 -8px 18px rgba(140,120,80,.12)",
              padding: "0 18px",
            }}
          >
            <span style={{ color: "#3a3224", fontSize: 13.5, fontWeight: 600, letterSpacing: "1.4px", textTransform: "uppercase", lineHeight: 1.4 }}>
              Peak oil is coming
            </span>
          </div>

          {/* Right branch */}
          <div
            style={{
              ...cgNodeBase,
              left: "70.9%",
              top: "34%",
              width: 148,
              height: 148,
              boxShadow: "0 12px 26px rgba(0,0,0,.26),inset 0 1px 0 rgba(255,255,255,.7),inset 0 -8px 18px rgba(140,120,80,.12)",
              padding: "0 18px",
            }}
          >
            <span style={{ color: "#3a3224", fontSize: 13.5, fontWeight: 600, letterSpacing: "1.4px", textTransform: "uppercase", lineHeight: 1.4 }}>
              Can we build AI in space?
            </span>
          </div>

          {/* Category tag: Energy */}
          <div
            style={{
              position: "absolute",
              left: "36.5%",
              top: "62.1%",
              width: 96,
              height: 96,
              borderRadius: "50%",
              border: "1.5px solid rgba(236,226,203,.55)",
              background: "rgba(236,226,203,.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#ece2cb", fontSize: 11.5, fontWeight: 500, letterSpacing: "1.6px", textTransform: "uppercase" }}>Energy</span>
          </div>

          {/* Category tag: Compute */}
          <div
            style={{
              position: "absolute",
              left: "53.5%",
              top: "62.1%",
              width: 96,
              height: 96,
              borderRadius: "50%",
              border: "1.5px solid rgba(236,226,203,.55)",
              background: "rgba(236,226,203,.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#ece2cb", fontSize: 11.5, fontWeight: 500, letterSpacing: "1.6px", textTransform: "uppercase" }}>Compute</span>
          </div>

          {/* Category tag: Geography */}
          <div
            style={{
              position: "absolute",
              left: "44.6%",
              top: "78.4%",
              width: 104,
              height: 104,
              borderRadius: "50%",
              border: "1.5px solid rgba(236,226,203,.55)",
              background: "rgba(236,226,203,.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#ece2cb", fontSize: 11.5, fontWeight: 500, letterSpacing: "1.6px", textTransform: "uppercase" }}>Geography</span>
          </div>
        </div>

        {/* Sidebar */}
        <div className="border-t border-line bg-paper p-4 lg:border-l lg:border-t-0">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Graph actions</p>
          <div className="mt-4 space-y-3">
            {[
              ["Open briefing", "Generate a reader-specific path."],
              ["Find bridge", "Connect energy, AI, and geography."],
              ["Create package", "Turn cluster into video + posts."],
            ].map(([title, body]) => (
              <div key={title} className="border border-line bg-card p-3">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-rust">{title}</p>
                <p className="mt-2 text-sm leading-5 text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedConcepts() {
  return (
    <section id="featured" className="border-b border-line bg-paper2">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Star concepts</Eyebrow>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl font-medium leading-tight text-ink sm:text-6xl">
              Two proposals worth making spectacular first.
            </h2>
          </div>
          <a href="#ideas" className="btn-secondary">
            Full idea library
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {featuredConcepts.map((concept, index) => (
            <article key={concept.title} className="border border-line bg-card p-5">
              <div className="flex items-start gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center border border-rust bg-rust text-paper">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-rust">{concept.role}</p>
                  <h3 className="mt-2 font-serif text-4xl font-semibold leading-none text-ink">{concept.title}</h3>
                  <p className="mt-3 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                    Example article: {concept.article}
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-px border border-line bg-line">
                {[
                  ["Problem", concept.problem],
                  ["Demo", concept.demo],
                  ["Build", concept.build],
                  ["Impact", concept.impact],
                ].map(([label, body]) => (
                  <div key={label} className="grid gap-3 bg-paper p-4 sm:grid-cols-[96px_1fr]">
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-rust">{label}</p>
                    <p className="text-[15px] leading-7 text-muted">{body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5">{index === 0 ? <ReadingOptimizerDemo /> : <ContentGraphDemo />}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProposalLibrary() {
  const iconMap = [FileSearch, Film, Map];
  const starred = new Set(["Reading Time Optimizer", "UT Content Graph"]);

  return (
    <section id="ideas" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <Eyebrow>Complete proposal map</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
              All candidate tools, grouped by what they prove.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              The starred ideas are the ones I would lead with because they combine product thinking, visual design,
              systems thinking, and a concrete UT article workflow.
            </p>
          </div>
          <div className="grid gap-px border border-line bg-line lg:grid-cols-3">
            {proposalGroups.map((group, index) => {
              const Icon = iconMap[index] || Factory;
              return (
                <article key={group.type} className="bg-card p-5">
                  <Icon className="h-6 w-6 text-teal" />
                  <h3 className="mt-5 font-serif text-3xl font-semibold leading-none text-ink">{group.type}</h3>
                  <ul className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[15px] leading-6 text-muted">
                        {starred.has(item) ? (
                          <Star className="mt-1 h-4 w-4 shrink-0 fill-rust text-rust" />
                        ) : (
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal" />
                        )}
                        <span className={starred.has(item) ? "font-semibold text-ink" : ""}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchiveSource() {
  return (
    <section className="border-b border-line bg-paper2">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <Eyebrow>Archive context</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl font-medium text-ink">Recent UT articles used as raw material.</h2>
          </div>
          <a href="https://unchartedterritories.tomaspueyo.com/archive?sort=new" target="_blank" rel="noreferrer" className="btn-secondary">
            Open archive
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
          {archiveArticles.map((article) => (
            <article key={article.title} className="group bg-card p-5 transition hover:bg-paper">
              <div className="flex items-center justify-between gap-3">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-rust">{article.topic}</p>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-muted">{article.date}</p>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-ink">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{article.dek}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewIdeas() {
  return (
    <section className="border-b border-line bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <Eyebrow className="text-gold">Bigger swings</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Extra ideas that could feel genuinely new.
            </h2>
            <p className="mt-5 text-lg leading-8 text-paper/72">
              These are not the first MVPs I would build, but they are more memorable. They show how UT could turn
              essays into interactive models and public truth infrastructure.
            </p>
          </div>
          <div className="grid gap-px border border-paper/25 bg-paper/25 md:grid-cols-2">
            {newIdeas.map((idea, index) => (
              <article key={idea.title} className="relative overflow-hidden bg-ink p-6">
                <div className="absolute right-5 top-5 font-serif text-6xl text-paper/10">0{index + 1}</div>
                <Lightbulb className="h-6 w-6 text-gold" />
                <h3 className="mt-8 max-w-sm font-serif text-3xl font-semibold leading-none">{idea.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-paper/72">{idea.pitch}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeedbackSection() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-18">
        <div>
          <Eyebrow>Feedback loop</Eyebrow>
          <h2 className="mt-4 max-w-xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            A proposal page that can learn what UT actually likes.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            In production this would save reactions, priorities, objections, and new ideas. For the proposal, the UI
            shows the intent: make selection collaborative instead of guessing in private.
          </p>
        </div>
        <div className="border border-line bg-card p-5 shadow-cartouche">
          <div className="grid gap-px border border-line bg-line sm:grid-cols-3">
            {[
              ["Most exciting", "UT Content Graph"],
              ["Fastest MVP", "Reading Time Optimizer"],
              ["Most on-brief", "Live Fact-checker"],
            ].map(([label, value]) => (
              <div key={label} className="bg-paper p-4">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-rust">{label}</p>
                <p className="mt-3 font-serif text-xl font-semibold leading-tight text-ink">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-4">
            <label className="block">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-muted">What do you like?</span>
              <textarea className="mt-2 h-24 w-full resize-none border border-line bg-paper p-3 font-serif text-base text-ink outline-none focus:border-rust" defaultValue="The graph idea feels closest to UT's archive and worldview." />
            </label>
            <label className="block">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-muted">What should be cut?</span>
              <textarea className="mt-2 h-20 w-full resize-none border border-line bg-paper p-3 font-serif text-base text-ink outline-none focus:border-rust" defaultValue="Anything that feels like generic AI tooling instead of UT-native product." />
            </label>
            <button type="button" className="btn-primary w-full">
              <MessageSquare className="h-4 w-4" />
              Mock submit feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const phases = [
    {
      title: "Week 1",
      body: "Public landing, living atlas, proposal UX, and the first article-to-video-script flow.",
    },
    {
      title: "Week 2",
      body: "Fact-checker with claims, sources, evidence status, and UT article context.",
    },
    {
      title: "Week 3",
      body: "Personalized briefing plus social distribution outputs to test growth loops.",
    },
  ];

  return (
    <section id="roadmap" className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-14 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 lg:py-18">
        <div>
          <Eyebrow>How I would ship it</Eyebrow>
          <h2 className="mt-4 max-w-xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Ship, measure, keep the winners.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            The application should show taste, but also speed: small visible releases, measurable usage, and a path
            to turn the winners into systems.
          </p>
        </div>
        <div className="grid gap-px border border-line bg-line">
          {phases.map((phase, index) => (
            <article key={phase.title} className="grid gap-4 bg-card p-6 sm:grid-cols-[130px_1fr]">
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-rust">{phase.title}</p>
                <p className="mt-2 font-serif text-4xl text-teal">0{index + 1}</p>
              </div>
              <p className="text-lg leading-8 text-muted">{phase.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Essays() {
  return (
    <section className="bg-paper2">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b-2 border-ink pb-5">
          <h2 className="font-serif text-4xl font-medium text-ink">UT articles used as product material.</h2>
          <a
            href="https://unchartedterritories.tomaspueyo.com/"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-[12px] font-bold uppercase tracking-[0.12em] text-rust no-underline"
          >
            View newsletter
          </a>
        </div>
        <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3">
          {essays.map((essay) => (
            <a key={essay.title} href={essay.url} target="_blank" rel="noreferrer" className="bg-card p-6 text-ink no-underline transition hover:bg-paper">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-rust">{essay.tag}</p>
              <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight">{essay.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-muted">{essay.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-teal text-paper">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <img src="/uploads/ut-mark.webp" alt="" className="h-8 w-9 object-contain invert-[0.92]" />
          <p className="font-serif text-xl font-semibold">Uncharted Territories proposal</p>
        </div>
        <p className="max-w-xl text-sm leading-6 text-paper/78">
          A product-led proposal built with React, Tailwind, an interactive SVG map, editorial design, and a structure
          ready for deeper demos.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const cssVars = useMemo(
    () => ({
      "--paper": theme.paper,
      "--paper2": theme.paper2,
      "--ink": theme.ink,
      "--muted": theme.ink2,
      "--teal": theme.teal,
      "--rust": theme.rust,
      "--line": theme.line,
      "--card": theme.card,
    }),
    [],
  );

  return (
    <div style={cssVars} className="min-h-screen bg-paper font-serif text-ink antialiased">
      <Nav />
      <Hero />
      <FitSection />
      <Atlas />
      <MissionControl />
      <FeaturedConcepts />
      <ProposalLibrary />
      <ArchiveSource />
      <NewIdeas />
      <FeedbackSection />
      <Roadmap />
      <Essays />
      <Footer />
    </div>
  );
}

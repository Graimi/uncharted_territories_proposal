import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Factory,
  FileSearch,
  Film,
  Gauge,
  Globe2,
  Layers3,
  Map,
  MousePointer2,
  Network,
  Pause,
  Play,
  Search,
  Share2,
  Sparkles,
  Wand2,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import worldMap from "../world-map.min.svg?raw";
import { countryNames, eras, essays, selectedTools, themes } from "./data";

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
            ["Demos", "#demos"],
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
            href="#demos"
            className="inline-flex h-10 items-center gap-2 rounded-sm bg-teal px-4 font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-paper no-underline transition hover:bg-rust"
          >
            <Sparkles className="h-4 w-4" />
            Proposal
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
            Interactive tools for a more truthful internet.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            A product-led proposal for Uncharted Territories: fast AI-assisted software, sharp editorial interfaces,
            and content systems that can become growth engines.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#atlas" className="btn-primary">
              <Map className="h-4 w-4" />
              View living atlas
            </a>
            <a href="#demos" className="btn-secondary">
              <Layers3 className="h-4 w-4" />
              Explore selected tools
            </a>
          </div>
        </div>

        <div className="relative z-10 self-end">
          <div className="border border-line bg-card p-4 shadow-cartouche">
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
              <div className="relative min-h-44 overflow-hidden bg-teal p-4 text-paper">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-paper/25" />
                <div className="absolute bottom-5 right-5 grid h-24 w-24 place-items-center border border-paper/35">
                  <Globe2 className="h-12 w-12" />
                </div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-paper/70">Core demo</p>
                <p className="mt-5 max-w-[12rem] font-serif text-3xl leading-none">A living atlas for UT ideas</p>
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
  const [searchHint, setSearchHint] = useState("6 eras · interactive SVG map");
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

  function drawPaleoLayer(svg, overlay) {
    const viewBox = svg.viewBox.baseVal;
    const shelf = (cx, cy, rx, ry, rotation = 0) => {
      const shape = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
      shape.setAttribute("cx", cx);
      shape.setAttribute("cy", cy);
      shape.setAttribute("rx", rx);
      shape.setAttribute("ry", ry);
      shape.setAttribute("fill", theme.shelf);
      shape.setAttribute("opacity", "0.62");
      if (rotation) shape.setAttribute("transform", `rotate(${rotation} ${cx} ${cy})`);
      overlay.appendChild(shape);
    };
    const ice = (cx, cy, rx, ry, opacity = 0.58) => {
      const shape = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
      shape.setAttribute("cx", cx);
      shape.setAttribute("cy", cy);
      shape.setAttribute("rx", rx);
      shape.setAttribute("ry", ry);
      shape.setAttribute("fill", "#ffffff");
      shape.setAttribute("opacity", opacity);
      overlay.appendChild(shape);
    };

    shelf(viewBox.x + viewBox.width * 0.16, viewBox.y + viewBox.height * 0.31, viewBox.width * 0.08, viewBox.height * 0.04, -8);
    shelf(viewBox.x + viewBox.width * 0.49, viewBox.y + viewBox.height * 0.42, viewBox.width * 0.05, viewBox.height * 0.035, 8);
    shelf(viewBox.x + viewBox.width * 0.73, viewBox.y + viewBox.height * 0.68, viewBox.width * 0.13, viewBox.height * 0.06, 12);
    shelf(viewBox.x + viewBox.width * 0.81, viewBox.y + viewBox.height * 0.74, viewBox.width * 0.13, viewBox.height * 0.08, -12);

    ice(viewBox.x + viewBox.width * 0.21, viewBox.y + viewBox.height * 0.12, viewBox.width * 0.23, viewBox.height * 0.15);
    ice(viewBox.x + viewBox.width * 0.61, viewBox.y + viewBox.height * 0.1, viewBox.width * 0.3, viewBox.height * 0.13);
    ice(viewBox.x + viewBox.width * 0.52, viewBox.y + viewBox.height * 1.03, viewBox.width * 0.64, viewBox.height * 0.13, 0.5);
  }

  function paintEra(index) {
    const svg = svgRef.current;
    const overlay = overlayRef.current;
    if (!svg || !overlay) return;
    const era = eras[index];
    const ocean = svg.querySelector("#ut-ocean");
    if (ocean) ocean.setAttribute("fill", era.ice ? "#e6ddc6" : theme.ocean);

    const isoColor = {};
    if (!era.modern && !era.ice && era.regions) {
      Object.entries(era.regions).forEach(([color, isos]) => {
        isos.forEach((iso) => {
          isoColor[iso] = color;
        });
      });
    }

    countriesRef.current.forEach((el) => {
      const color = isoColor[el.id];
      if (era.ice) {
        el.setAttribute("fill", theme.land);
        el.style.opacity = "0.36";
      } else if (color) {
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
    if (era.ice) {
      drawPaleoLayer(svg, overlay);
    }

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

    if (era.landBridges) {
      era.landBridges.forEach((bridge) => {
        const a = point(bridge.a);
        const b = point(bridge.b);
        if (!a || !b) return;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", a.x);
        line.setAttribute("y1", a.y);
        line.setAttribute("x2", b.x);
        line.setAttribute("y2", b.y);
        line.setAttribute("stroke", theme.rust);
        line.setAttribute("stroke-width", "1.35");
        line.setAttribute("stroke-dasharray", "1.5 1.8");
        line.setAttribute("opacity", "0.9");
        overlay.appendChild(line);
        addLabel((a.x + b.x) / 2, (a.y + b.y) / 2 - 3, bridge.label, theme.rust, 8.6, "700");
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
      if (announce) setSearchHint("6 eras · interactive SVG map");
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
                    Ensayo · {currentEra.article.tag}
                  </span>
                  <span className="mt-1 block font-serif text-[15px] font-semibold leading-tight">{currentEra.article.title}</span>
                </span>
              </a>
            </aside>

            <div className="relative min-h-[520px] overflow-hidden bg-ocean">
              <div className="absolute right-4 top-4 z-10 flex gap-2">
                <button
                  type="button"
                  aria-label="Era anterior"
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
                  {playing ? "Pausa" : "Play"}
                </button>
                <button
                  type="button"
                  aria-label="Era siguiente"
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

function ProposalDemos() {
  const icons = [Map, FileSearch, Film, Sparkles];

  return (
    <section id="demos" className="border-b border-line bg-paper2">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Selected tools</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Four tools selected from the role brief, not a grab bag of ideas.
            </h2>
          </div>
          <a href="#roadmap" className="btn-secondary">
            View roadmap
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-9 grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
          {selectedTools.map((proposal, index) => {
            const Icon = icons[index] || Factory;
            return (
              <article key={proposal.title} className="group bg-card p-6 transition hover:bg-paper">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center border border-line bg-paper2 text-teal transition group-hover:border-rust group-hover:text-rust">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Selected</p>
                </div>
                <p className="mt-6 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-rust">{proposal.role}</p>
                <h3 className="mt-2 font-serif text-3xl font-semibold leading-none text-ink">{proposal.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-muted">{proposal.fit}</p>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-muted">Demo output</p>
                  <p className="mt-2 font-serif text-lg leading-6 text-ink">{proposal.output}</p>
                  <p className="mt-4 inline-flex border border-line bg-paper px-2 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-teal">
                    {proposal.effort}
                  </p>
                </div>
              </article>
            );
          })}
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
      <ProposalDemos />
      <Roadmap />
      <Essays />
      <Footer />
    </div>
  );
}

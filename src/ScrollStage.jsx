import { useEffect, useRef, useState } from "react";

// Scroll-driven cinematic intro.
// Storyboard (scroll progress p, 0..1):
//   0.00-0.12  world fades in, starts slow rotation
//   0.18-0.42  dragon flies in from the left, orbits, wings flap
//   0.42-0.66  ship emerges from behind the planet, bobs on waves
//   0.66-0.90  sun rises behind the ship, halo grows
//   0.90-1.00  all layers composed like the logo, title resolves

const ASSET = {
  world: "/uploads/scroll/world.webp",
  dragon: "/uploads/scroll/dragon-4.webp", // long dynamic flyer reads best in orbit
  ship: "/uploads/scroll/ship.webp",
  sun: "/uploads/scroll/sun.webp",
};

// Inline SVG placeholders (theme palette) so the scene is demonstrable before
// the real art is dropped in. Each <img> falls back to these on a 404.
const svgURI = (svg) => `data:image/svg+xml,${encodeURIComponent(svg)}`;
const FALLBACK = {
  world: svgURI(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><circle cx='100' cy='100' r='96' fill='#1f5560'/><circle cx='100' cy='100' r='96' fill='none' stroke='#bf8f3a' stroke-width='2'/><g fill='#687a45' opacity='.9'><path d='M52 70q22-14 44 2t38-2-6 30-30 10-26-6-18 4-6-22 10-30z'/><path d='M118 120q18-6 30 6t-2 26-26 4-14-18 12-18z'/></g><g stroke='#bf8f3a' stroke-width='.6' fill='none' opacity='.5'><ellipse cx='100' cy='100' rx='96' ry='40'/><ellipse cx='100' cy='100' rx='40' ry='96'/></g></svg>`,
  ),
  sun: svgURI(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><g stroke='#bf8f3a' stroke-width='3'>${Array.from({ length: 24 }, (_, i) => { const a = (i * Math.PI) / 12; return `<line x1='${100 + Math.cos(a) * 64}' y1='${100 + Math.sin(a) * 64}' x2='${100 + Math.cos(a) * 92}' y2='${100 + Math.sin(a) * 92}'/>`; }).join("")}</g><circle cx='100' cy='100' r='56' fill='#bf8f3a'/></svg>`,
  ),
  ship: svgURI(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><g fill='#f3ecda' stroke='#23201a' stroke-width='2'><path d='M64 70 l4 50 60 0 4-50-34 26z'/><path d='M104 60 l40 4-40 46z'/></g><path d='M40 150 q20-14 60-14t60 14-30 16-30-8-30 8-30-16z' fill='#1f5560'/><line x1='100' y1='40' x2='100' y2='150' stroke='#23201a' stroke-width='3'/></svg>`,
  ),
  dragon: svgURI(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><g fill='#b4542a' stroke='#23201a' stroke-width='2'><path d='M40 80 q30-30 60-10l-6 26q-30-6-54 4z'/><path d='M160 80 q-30-30-60-10l6 26q30-6 54 4z'/><path d='M86 86 q14-10 28 0 8 30-4 60-10-6-20 0-12-30-4-60z'/><path d='M150 70 q14-6 20 6-10 4-18 0z'/></g></svg>`,
  ),
};

const clamp = (v, lo = 0, hi = 1) => Math.min(Math.max(v, lo), hi);
const lerp = (a, b, t) => a + (b - a) * t;
// Normalize p into 0..1 across [start,end], clamped.
const phase = (p, start, end) => clamp((p - start) / (end - start));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function useScrollProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const passed = clamp(-rect.top, 0, total);
      setP(total > 0 ? passed / total : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);
  return p;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = (e) => setReduced(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

// On a 404, swap to the theme placeholder once (guard against loops).
function fallbackOnError(key) {
  return (e) => {
    const img = e.currentTarget;
    if (img.dataset.fallback) return;
    img.dataset.fallback = "1";
    img.src = FALLBACK[key];
  };
}

export default function ScrollStage() {
  const sectionRef = useRef(null);
  const reduced = usePrefersReducedMotion();
  const raw = useScrollProgress(sectionRef);
  const p = reduced ? 1 : raw;

  // All layers are centered on the stage; positions are vmin offsets from
  // center. Every element's END value is its spot in the final logo lockup:
  // world centred, ship cresting the top rim, dragon at the lower-left.

  // ---- World: centred, fades in, turns forever ----
  const worldIn = phase(p, 0, 0.12);
  const worldOpacity = easeOut(worldIn);
  const worldRotate = p * 130; // continuous slow turn
  const worldScale = lerp(0.82, 1, easeOut(worldIn));

  // ---- Dragon: faces left (logo), so it flies in from the RIGHT, crosses the
  //      front of the globe, and settles big on the left edge ----
  const dragonT = easeOut(phase(p, 0.18, 0.52));
  const dragonDX = lerp(80, -20, dragonT);
  const dragonDY = lerp(-6, 2, dragonT) + Math.sin(p * Math.PI * 4) * 1.6;
  const dragonScale = lerp(0.6, 0.74, dragonT);
  const dragonOpacity = easeOut(phase(p, 0.18, 0.28));

  // ---- Ship: rises from behind the globe, crests, sits on the top rim ----
  const shipT = easeOut(phase(p, 0.42, 0.82));
  const shipDX = 2;
  const shipDY = lerp(40, -23, shipT) + Math.sin(p * Math.PI * 6) * 1.1;
  const shipScale = lerp(0.4, 0.54, shipT);
  const shipOpacity = easeOut(phase(p, 0.42, 0.54));
  const shipBehind = p < 0.7; // occluded by the globe while emerging, then in front

  // ---- Sun: rises behind everything, settles up behind the ship's sails ----
  const sunT = easeOut(phase(p, 0.66, 0.92));
  const sunDY = lerp(48, -28, sunT);
  const sunScale = lerp(0.5, 0.72, sunT);
  const sunOpacity = easeOut(phase(p, 0.66, 0.82));
  const haloOpacity = easeInOut(phase(p, 0.7, 1));

  // ---- Final title resolve ----
  const titleIn = phase(p, 0.88, 1);
  const titleOpacity = easeOut(titleIn);
  const titleY = lerp(24, 0, easeOut(titleIn));

  // Scroll cue fades the moment you start moving.
  const cueOpacity = clamp(1 - p * 12);

  // Build a centered transform from vmin offsets + scale.
  const tf = (dx, dy, s) =>
    `translate(calc(-50% + ${dx}vmin), calc(-50% + ${dy}vmin)) scale(${s})`;

  return (
    <section
      ref={sectionRef}
      aria-label="Uncharted Territories intro"
      className="relative bg-[#1a1813]"
      style={{ height: reduced ? "100vh" : "420vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Night sky */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 30%, #2c281f 0%, #1a1813 55%, #111009 100%)",
          }}
        />
        <Stars />

        {/* Sun + halo (deepest layer) */}
        <div
          className="absolute left-1/2 top-1/2 z-10"
          style={{
            opacity: sunOpacity,
            transform: tf(0, sunDY, sunScale),
            filter: "drop-shadow(0 0 90px rgba(191,143,58,0.5))",
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 -z-10 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              opacity: haloOpacity,
              background:
                "radial-gradient(circle, rgba(191,143,58,0.45) 0%, rgba(180,84,42,0.18) 35%, transparent 68%)",
            }}
          />
          <img
            src={ASSET.sun}
            alt=""
            onError={fallbackOnError("sun")}
            className="h-[58vmin] w-[58vmin] select-none object-contain"
            draggable="false"
          />
        </div>

        {/* Ship — behind the globe while emerging, in front once it crests */}
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            zIndex: shipBehind ? 20 : 35,
            opacity: shipOpacity,
            transform: tf(shipDX, shipDY, shipScale),
            filter: "drop-shadow(0 16px 26px rgba(0,0,0,0.45))",
          }}
        >
          <img
            src={ASSET.ship}
            alt=""
            onError={fallbackOnError("ship")}
            className="h-[52vmin] w-[52vmin] select-none object-contain"
            draggable="false"
          />
        </div>

        {/* World (rotating, centred) */}
        <div
          className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: worldOpacity }}
        >
          <img
            src={ASSET.world}
            alt="Old-world map globe"
            onError={fallbackOnError("world")}
            className="h-[60vmin] w-[60vmin] select-none object-contain"
            draggable="false"
            style={{
              transform: `rotate(${worldRotate}deg) scale(${worldScale})`,
              filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.45))",
            }}
          />
        </div>

        {/* Dragon (front, flies in). Single sprite; wings beat via a CSS
            scaleY pulse — distinct engravings cycled fast would just strobe. */}
        <div
          className="absolute left-1/2 top-1/2 z-40"
          style={{
            opacity: dragonOpacity,
            // negative X scale mirrors the sprite to face left, as in the logo
            transform: `translate(calc(-50% + ${dragonDX}vmin), calc(-50% + ${dragonDY}vmin)) scale(${-dragonScale}, ${dragonScale})`,
          }}
        >
          <img
            src={ASSET.dragon}
            alt="Dragon"
            onError={fallbackOnError("dragon")}
            draggable="false"
            className={reduced ? "" : "dragon-fly"}
            style={{
              height: "48vmin",
              width: "48vmin",
              objectFit: "contain",
              filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.5))",
            }}
          />
        </div>

        {/* Final title */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-[12vh] z-50 px-6 text-center"
          style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)` }}
        >
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.32em] text-gold">
            Here be product
          </p>
          <h1 className="mt-3 font-serif text-[clamp(34px,6vw,76px)] font-medium leading-[0.98] text-paper">
            Uncharted Territories
          </h1>
        </div>

        {/* Scroll cue */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-7 z-50 flex flex-col items-center gap-2"
          style={{ opacity: cueOpacity }}
        >
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-paper/70">
            Scroll to chart the map
          </span>
          <span className="h-9 w-5 rounded-full border border-paper/40">
            <span className="mx-auto mt-1.5 block h-1.5 w-1 animate-bounce rounded-full bg-paper/70" />
          </span>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  // Deterministic scatter so the field is stable across renders.
  const stars = [];
  let seed = 7;
  const rng = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < 70; i += 1) {
    stars.push({
      x: rng() * 100,
      y: rng() * 100,
      s: rng() * 2 + 0.5,
      o: rng() * 0.5 + 0.2,
    });
  }
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {stars.map((st, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${st.x}%`,
            top: `${st.y}%`,
            width: `${st.s}px`,
            height: `${st.s}px`,
            opacity: st.o,
          }}
        />
      ))}
    </div>
  );
}

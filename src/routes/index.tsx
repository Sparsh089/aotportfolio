import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import heroWalls from "@/assets/hero-walls.jpg";
import parchment from "@/assets/parchment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sparsh Jaiswal (Eren) — Web Developer · AI Enthusiast · Vibe Coder" },
      { name: "description", content: "Mission dossier of Sparsh Jaiswal — B.Tech CSE student at Invertis University, freelance web developer building for real businesses across Tier-2 India." },
      { property: "og:title", content: "Sparsh Jaiswal — Dedicate Your Craft" },
      { property: "og:description", content: "Web Developer · AI Enthusiast · Vibe Coder." },
    ],
  }),
  component: Index,
});

function TornDivider() {
  return (
    <div className="relative h-12 w-full" aria-hidden>
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path
          d="M0,20 L60,12 L120,28 L200,8 L280,30 L360,14 L450,32 L540,10 L640,28 L740,12 L840,34 L950,14 L1060,30 L1170,10 L1280,28 L1370,16 L1440,24 L1440,48 L0,48 Z"
          fill="oklch(0.18 0.012 130)"
        />
        <path
          d="M0,20 L60,12 L120,28 L200,8 L280,30 L360,14 L450,32 L540,10 L640,28 L740,12 L840,34 L950,14 L1060,30 L1170,10 L1280,28 L1370,16 L1440,24"
          stroke="oklch(0.45 0.18 28 / 0.6)" strokeWidth="1.2" fill="none"
        />
      </svg>
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function AshParticles() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current; if (!root) return;
    const n = 28;
    for (let i = 0; i < n; i++) {
      const d = document.createElement("div");
      d.className = "ash";
      d.style.left = Math.random() * 100 + "%";
      d.style.animationDuration = 12 + Math.random() * 18 + "s";
      d.style.animationDelay = -Math.random() * 20 + "s";
      d.style.opacity = String(0.3 + Math.random() * 0.5);
      d.style.transform = `scale(${0.5 + Math.random() * 1.6})`;
      root.appendChild(d);
    }
  }, []);
  return <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden />;
}

function StampHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12 flex flex-col items-start gap-3">
      <span className="stamp text-[0.7rem]">{kicker}</span>
      <h2 className="text-4xl md:text-6xl font-black uppercase text-parchment" style={{ color: "var(--color-parchment)" }}>
        {title}
      </h2>
      <div className="h-[2px] w-24 bg-accent" />
    </div>
  );
}

function Index() {
  useReveal();
  const projects = [
    { name: "Goonj 2.0", status: "DEPLOYED", brief: "Lounge bar website for a Bareilly venue — atmospheric, booking-ready.", tag: "Hospitality · Bareilly" },
    { name: "The Posh Table", status: "DEPLOYED", brief: "Vegetarian restaurant site with a refined visual identity and menu.", tag: "Restaurant · Brand" },
    { name: "GharRation", status: "ACTIVE", brief: "Civic-tech proposal for smart ration delivery, submitted to NITI Aayog.", tag: "Civic Tech · Policy" },
  ];
  const skills = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "NETLIFY", "AI"];

  return (
    <main className="relative min-h-screen overflow-x-hidden text-foreground">
      {/* Top nav */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md" style={{ background: "oklch(0.18 0.012 130 / 0.65)", borderBottom: "1px solid oklch(0.45 0.18 28 / 0.2)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 border-2 border-accent" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", background: "var(--leather)" }} />
            <span className="font-stencil text-sm tracking-[0.3em]" style={{ fontFamily: "var(--font-stencil)" }}>SJ&nbsp;</span>
            <span className="font-stencil text-sm tracking-[0.3em]" style={{ fontFamily: "var(--font-stencil)" }}>· EREN</span>
            <span className="font-stencil text-sm tracking-[0.3em]" style={{ fontFamily: "var(--font-stencil)" }}>Sparsh Jaiswal&nbsp;</span>
          </div>
          <nav className="hidden gap-8 text-xs font-medium uppercase tracking-[0.25em] md:flex" style={{ fontFamily: "var(--font-stencil)" }}>
            <a href="#about" className="hover:text-accent transition-colors">Wall Maria</a>
            <a href="#skills" className="hover:text-accent transition-colors">Wall Rose</a>
            <a href="#projects" className="hover:text-accent transition-colors">Wall Sina</a>
            <a href="#contact" className="hover:text-accent transition-colors">Outside</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative grain flex min-h-screen items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, oklch(0.18 0.012 130 / 0.5) 0%, oklch(0.14 0.01 130 / 0.85) 60%, oklch(0.12 0.008 130) 100%), url(${heroWalls})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <AshParticles />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-accent" />
            <span className="stamp text-[0.65rem]">EXPEDITION No. 057</span>
          </div>
          <h1 className="max-w-4xl text-[3.2rem] md:text-[6.5rem] font-black uppercase leading-[0.95]" style={{ color: "var(--color-parchment)", textShadow: "0 4px 20px oklch(0 0 0 / 0.8), 2px 2px 0 oklch(0.45 0.18 28 / 0.15)" }}>
            Dedicate<br />Your <span style={{ color: "var(--blood)" }}>Craft</span>.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg uppercase tracking-[0.3em]" style={{ color: "var(--color-ash)", fontFamily: "var(--font-stencil)" }}>
            Web Developer · AI Enthusiast · Vibe Coder
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Sparsh Jaiswal — known to the squad as Eren. Building beyond the walls of templates, one expedition at a time.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#projects" className="wax-button text-xs">▣ Begin Expedition</a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-border px-7 py-4 text-xs uppercase tracking-[0.22em] transition-colors hover:border-accent hover:text-accent" style={{ fontFamily: "var(--font-stencil)" }}>
              Send Transmission
            </a>
          </div>
          <div className="mt-24 flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground" style={{ fontFamily: "var(--font-stencil)" }}>
            <span>⌖ Bareilly · IN</span>
            <span className="h-px w-8 bg-border" />
            <span>EST. 2023</span>
            <span className="h-px w-8 bg-border" />
            <span>Status: Active</span>
          </div>
        </div>
      </section>

      <TornDivider />

      {/* ABOUT — Wall Maria */}
      <section id="about" className="relative px-6 py-32">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.4fr]">
          <div className="reveal">
            <StampHeading kicker="Wall Maria · Origin" title="First Line of Defense" />
          </div>
          <div className="reveal space-y-6 text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ash)" }}>
            <p>
              A B.Tech CSE student at <span className="text-parchment" style={{ color: "var(--color-parchment)" }}>Invertis University</span>, building things that actually ship.
              The wall fell early — staring at template-shaped websites and AI tools written for somebody else's reality.
            </p>
            <p>
              Now I build for real businesses in <span style={{ color: "var(--color-parchment)" }}>Tier-2 India</span> — restaurants, lounges, civic-tech proposals — and explore where AI can finally serve the markets it usually skips.
            </p>
            <p className="border-l-2 border-accent pl-4 italic" style={{ color: "var(--color-parchment)" }}>
              "If you win, you live. If you lose, you die. If you don't fight, you can't win." — the only deployment strategy that's ever made sense.
            </p>
          </div>
        </div>
      </section>

      <TornDivider />

      {/* SKILLS — Wall Rose */}
      <section id="skills" className="relative px-6 py-32" style={{ background: "oklch(0.16 0.012 130)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <StampHeading kicker="Wall Rose · Arsenal" title="Squad Insignia" />
          </div>
          <div className="reveal mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {skills.map((s) => (
              <div key={s} className="insignia text-center text-[0.7rem]">
                <span className="text-2xl mb-2" style={{ color: "var(--blood)" }}>◈</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <p className="reveal mt-12 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Stack chosen for combat readiness — ship fast, stay maintainable, run anywhere from Netlify edges to a client's borrowed laptop.
          </p>
        </div>
      </section>

      <TornDivider />

      {/* PROJECTS — Wall Sina */}
      <section id="projects" className="relative px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <StampHeading kicker="Wall Sina · Mission Reports" title="Field Operations" />
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className="reveal torn-card group relative"
                style={{
                  backgroundImage: `url(${parchment})`,
                  backgroundSize: "cover",
                  backgroundBlendMode: "multiply",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="absolute -top-3 right-4 stamp text-[0.6rem]" style={{ background: p.status === "DEPLOYED" ? "oklch(0.96 0.02 85)" : "oklch(0.96 0.02 85)" }}>
                  {p.status}
                </div>
                <div className="text-[0.65rem] uppercase tracking-[0.25em] mb-3" style={{ color: "oklch(0.4 0.05 60)", fontFamily: "var(--font-stencil)" }}>
                  Report № 00{i + 1} · {p.tag}
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-3" style={{ color: "oklch(0.2 0.02 60)" }}>
                  {p.name}
                </h3>
                <div className="h-[2px] w-12 bg-accent mb-4" />
                <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.3 0.02 60)" }}>
                  {p.brief}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] transition-colors group-hover:text-accent" style={{ color: "oklch(0.25 0.05 28)", fontFamily: "var(--font-stencil)" }}>
                  ✉ Open Sealed Envelope →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TornDivider />

      {/* FIELD REPORT — github */}
      <section className="relative px-6 py-32" style={{ background: "oklch(0.16 0.012 130)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <StampHeading kicker="Intel · Field Report" title="Commits From The Front" />
          </div>
          <div className="reveal grid gap-6 md:grid-cols-4 mt-8">
            {[
              { k: "Commits", v: "1,240+" },
              { k: "Repositories", v: "32" },
              { k: "Live Sites", v: "8" },
              { k: "Languages", v: "6" },
            ].map((s) => (
              <div key={s.k} className="grain border border-border p-6" style={{ background: "oklch(0.2 0.014 130)" }}>
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground mb-2" style={{ fontFamily: "var(--font-stencil)" }}>
                  {s.k}
                </div>
                <div className="text-4xl font-black" style={{ color: "var(--color-parchment)", fontFamily: "var(--font-display)" }}>
                  {s.v}
                </div>
                <div className="mt-4 h-1 w-full" style={{ background: "oklch(0.3 0.02 90)" }}>
                  <div className="h-full bg-accent" style={{ width: Math.random() * 50 + 40 + "%" }} />
                </div>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 max-w-2xl text-xs uppercase tracking-[0.25em] text-muted-foreground" style={{ fontFamily: "var(--font-stencil)" }}>
            ⌗ Last transmission received — 0600 hours · Status nominal
          </p>
        </div>
      </section>

      <TornDivider />

      {/* CONTACT — Outside the Walls */}
      <section id="contact" className="relative px-6 py-32">
        <div className="mx-auto max-w-4xl text-center reveal">
          <span className="stamp text-[0.7rem]">Outside The Walls</span>
          <h2 className="mt-6 text-4xl md:text-7xl font-black uppercase" style={{ color: "var(--color-parchment)" }}>
            Open A <span style={{ color: "var(--blood)" }}>Channel</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            For freelance expeditions, AI collaborations, or anything worth fighting for. Lines open on the frequencies below.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <a href="mailto:sparsh@example.com" className="grain group flex items-center justify-between border border-border p-6 text-left transition-colors hover:border-accent" style={{ background: "oklch(0.2 0.014 130)" }}>
              <div>
                <div className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground" style={{ fontFamily: "var(--font-stencil)" }}>
                  FREQ. 01 · EMAIL
                </div>
                <div className="mt-1 font-mono text-sm" style={{ color: "var(--color-parchment)" }}>sparsh@example.com</div>
              </div>
              <span className="text-2xl text-accent transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="grain group flex items-center justify-between border border-border p-6 text-left transition-colors hover:border-accent" style={{ background: "oklch(0.2 0.014 130)" }}>
              <div>
                <div className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground" style={{ fontFamily: "var(--font-stencil)" }}>
                  FREQ. 02 · LINKEDIN
                </div>
                <div className="mt-1 font-mono text-sm" style={{ color: "var(--color-parchment)" }}>/in/sparsh-jaiswal</div>
              </div>
              <span className="text-2xl text-accent transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          <p className="mt-16 text-xs uppercase tracking-[0.35em]" style={{ color: "var(--blood)", fontFamily: "var(--font-stencil)" }}>
            Keep moving forward. The road is built by walking it.
          </p>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex-row" style={{ fontFamily: "var(--font-stencil)" }}>
          <span>© 2026 Sparsh Jaiswal · Eren</span>
          <span>Dedicate your heart.</span>
        </div>
      </footer>
    </main>
  );
}

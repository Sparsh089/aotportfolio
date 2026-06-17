# Sparsh Jaiswal — Portfolio (Attack on Titan Themed)

> "Dedicate your craft." — a cinematic, military-dossier styled personal portfolio for **Sparsh Jaiswal (Eren)**, B.Tech CSE student at Invertis University and freelance web developer.

Built with **TanStack Start**, **React 19**, and **Tailwind CSS v4**, scaffolded and maintained through **Lovable**. The site frames Sparsh's work as "expeditions beyond the walls" — Survey Corps olive, weathered leather, and a single sharp crimson accent, all built with original CSS/SVG, with no copyrighted character art or official IP.

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR) |
| Routing | TanStack Router — file-based, see `src/routes/` |
| Styling | Tailwind CSS v4 (CSS-first config via `@theme`/`@utility` in `src/styles.css`) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) (`new-york` style) on top of Radix UI primitives |
| Icons | lucide-react |
| Build | Vite 8 + Nitro (Cloudflare target by default) |
| Package manager | Bun (`bun.lock`) |
| Tooling | TypeScript (strict), ESLint 9 + typescript-eslint, Prettier |
| Hosting | Cloudflare Workers via Nitro, deployable through Lovable's own publish flow or any Nitro-compatible host |

## Design Direction

The whole UI leans on metaphor rather than fan art: walls, expeditions, mission dossiers.

- **Palette** — near-black background, Survey Corps olive and weathered leather, parchment-colored cards, one crimson accent used sparingly for CTAs and emphasis.
- **Typography** — Cinzel for display headings, Black Ops One for stenciled/stamped labels, Inter for body copy.
- **Motifs** — wax-seal buttons, torn-paper "mission report" project cards, hexagonal squad-insignia skill badges, jagged SVG section dividers, drifting ash particles in the hero, and scroll-triggered "crack-in" reveals.
- **Section mapping** — About → *Wall Maria (Origin)*, Skills → *Wall Rose (Arsenal)*, Projects → *Wall Sina (Mission Reports)*, plus a GitHub-stats "Field Report" panel and a contact section framed as *Outside the Walls*.

## Project Structure

```
.
├── index.html                  # static fallback shell (meta/OG tags, standalone preview markup)
├── src/
│   ├── routes/
│   │   ├── __root.tsx           # app shell: <html>, head/meta, error & 404 boundaries
│   │   └── index.tsx            # the actual portfolio page (hero, about, skills, projects, contact)
│   ├── components/ui/           # shadcn/ui primitives (button, card, dialog, sidebar, etc.)
│   ├── lib/
│   │   ├── utils.ts              # `cn()` class merge helper
│   │   ├── config.server.ts      # server-only env config
│   │   ├── error-capture.ts      # captures SSR errors swallowed by h3
│   │   ├── error-page.ts         # fallback HTML error page
│   │   ├── lovable-error-reporting.ts
│   │   └── api/example.functions.ts  # sample TanStack Start server function
│   ├── hooks/use-mobile.tsx
│   ├── styles.css               # Tailwind v4 theme tokens + AoT utilities/animations
│   ├── router.tsx
│   ├── server.ts                # Worker fetch entry, wraps SSR errors
│   └── start.ts                 # TanStack Start instance + error middleware
├── components.json              # shadcn/ui config
├── vite.config.ts               # wraps @lovable.dev/vite-tanstack-config
├── eslint.config.js / .prettierrc
└── package.json
```

> Routing follows TanStack Start's file-based convention — every `.tsx` under `src/routes/` becomes a route. `src/routes/__root.tsx` is the only root layout; don't add Next.js-style `pages/` or `app/` directories.

## Getting Started

```bash
# install dependencies (Bun recommended — see bun.lock)
bun install

# start the dev server
bun run dev

# type-check, lint
bun run lint

# format with Prettier
bun run format

# production build
bun run build

# preview the production build locally
bun run preview
```

## Deployment

This project was created with **Lovable** and can be:

1. **Published directly from Lovable** — built-in hosting with a `*.lovable.app` URL.
2. **Pushed to GitHub** via Lovable's GitHub integration (OAuth connect → auto-synced commits), then deployed from the repo to Netlify, Vercel, or Cloudflare Pages/Workers.
3. **Self-hosted** — `vite.config.ts` wires up Nitro with a Cloudflare Workers target by default; `src/server.ts` is the Worker `fetch` entry point and can be adapted to other Nitro presets if needed.

## Content Sections

| Section | Anchor | Content |
|---|---|---|
| Hero | `#hero` | Name, title, location (Bareilly, IN), status |
| About — Wall Maria | `#about` | Bio: Invertis University CSE student, Tier-2 India focus |
| Skills — Wall Rose | `#skills` | HTML, CSS, JavaScript, Python, Netlify, AI |
| Projects — Wall Sina | `#projects` | Goonj 2.0 (lounge bar), The Posh Table (restaurant), GharRation (civic tech, NITI Aayog) |
| Field Report | — | GitHub-style stats panel (commits, repos, live sites, languages) |
| Contact — Outside the Walls | `#contact` | Email and LinkedIn |

## Notes for Future Edits

- Update project cards and skill badges directly in `src/routes/index.tsx` — content there mirrors the GitHub profile README but is meant to evolve as new freelance/civic-tech work ships.
- Theme tokens (colors, fonts) live in `src/styles.css` under `:root` and `@theme inline` — change these to retint the whole site without touching component markup.
- `index.html` contains a self-contained static version of the same design (useful as a reference or for quick previews outside the React app) — keep it in sync manually if the React version changes meaningfully.

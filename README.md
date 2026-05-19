# Personal Engineering Portfolio

Minimalist, dark-mode-first portfolio site. Built with Vite + React + TypeScript + Tailwind CSS.

## Quick start

```bash
npm install
cp .env.example .env       # then paste your Formspree endpoint
npm run dev
```

Opens at http://localhost:5173.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over `src/` |

## How to fill in your content

All content lives in typed files under `src/data/`. Edit these and the site updates — no component changes needed.

| File | What to edit |
|---|---|
| `src/data/profile.ts` | Name, headline, bio paragraphs, location, email, LinkedIn, GitHub |
| `src/data/projects.ts` | Project list. Set `featured: true` on the 3 you want on the home page |
| `src/data/experience.ts` | Work experience timeline + education |
| `src/data/skills.ts` | Skill categories shown on `/skills` |
| `src/data/coursework.ts` | Course groupings shown on `/skills` |

Drop your resume at **`public/resume.pdf`** — the download button serves it from there. (Replace the placeholder file before deploying.)

## Contact form

The form posts to a Formspree endpoint set via `VITE_FORMSPREE_ENDPOINT` in `.env`.

1. Create a free account at <https://formspree.io>
2. Create a new form, copy the endpoint URL (looks like `https://formspree.io/f/abcd1234`)
3. Paste it into `.env`
4. Restart the dev server

If the env var is missing, the form will render and validate but show a clear error on submit.

## Customizing the theme

All colors flow from CSS variables in `src/index.css`. To re-theme, change the RGB triples — every component picks it up automatically.

```css
:root {
  /* Primary accent — safety orange (orange-500 / orange-400) */
  --accent: 249 115 22;
  --accent-soft: 251 146 60;

  /* Secondary accent — instrument amber */
  --warn: 245 158 11;
  --warn-soft: 252 211 77;

  /* Midnight navy surfaces */
  --bg: 10 16 32;
  --surface: 14 21 41;
  --surface-hover: 19 27 51;
  --border: 27 38 64;
  --border-hover: 39 52 90;
}
```

These feed `text-accent`, `bg-accent`, `text-warn`, `border-navy-800`, etc. Components never hardcode `orange-*` or `amber-*` — they always go through the variables.

### Blueprint grid

A faint drafting-paper grid sits behind everything via the `.bg-blueprint` utility (also in `src/index.css`). Tune `--grid-fine-opacity`, `--grid-bold-opacity`, `--grid-fine`, and `--grid-bold` to make it more/less visible or change the spacing.

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

The included `vercel.json` adds an SPA rewrite so deep-links (`/projects`, `/resume`, …) work after a page reload.

For Netlify, add a `_redirects` file in `public/`:
```
/*  /index.html  200
```

## Stack

- **Framework**: Vite 5, React 18, TypeScript 5
- **Routing**: React Router v6
- **Styling**: Tailwind CSS 3, dark mode via `<html class="dark">`
- **Icons**: `lucide-react`
- **Forms**: Formspree
- **Fonts**: Inter (sans) + JetBrains Mono (data readouts), both preconnected from Google Fonts
- **Theme**: midnight navy + safety orange + instrument amber, all driven by CSS variables
- **Aesthetic**: instrumentation panel meets blueprint draft paper (subtle grid backdrop, thin borders, monospaced metadata)

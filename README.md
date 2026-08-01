# Elyonware

Marketing site for Elyonware, built with [Vite](https://vitejs.dev) + React + TypeScript and deployed to [GitHub Pages](https://pages.github.com).

## Tech Stack

- React 19 + TypeScript, bundled with Vite
- Tailwind CSS 4
- GSAP for animation, Three.js/OGL for WebGL effects (hero background, orb, smoke cursor)
- React Router for client-side routing

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

## Project Structure

- `src/pages/` — route-level pages (Home, About, Careers, Contact, Careers Apply flows)
- `src/components/` — shared UI (Header, Footer, buttons, SEO, animated effects) and `lib/` helpers
- `public/` — static assets, `CNAME`, `robots.txt`, `llms.txt`

## Building

```bash
npm run build
```

Outputs a static site to `dist/`, ready for GitHub Pages.

## Linting

```bash
npm run lint
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it via GitHub Pages. The custom domain is configured via `public/CNAME`.

## Notes

- Contact, internship, and full-time application forms are UI-only — they validate input and show a success state, but do not send data anywhere. Wire up a form backend (e.g. Formspree, EmailJS, or a serverless function) before relying on them.

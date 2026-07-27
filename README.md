This is a [Vite](https://vitejs.dev) + React project, deployed to [GitHub Pages](https://pages.github.com).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

## Building

```bash
npm run build
```

Outputs a static site to `dist/`, ready for GitHub Pages.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it via GitHub Pages. The custom domain is configured via `public/CNAME`.

## Notes

- Contact, internship, and full-time application forms are UI-only — they validate input and show a success state, but do not send data anywhere. Wire up a form backend (e.g. Formspree, EmailJS, or a serverless function) before relying on them.

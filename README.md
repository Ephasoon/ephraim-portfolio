# Ephraim Shibru — Portfolio

Personal portfolio and case-study site for Ephraim Shibru, a full-stack developer working across
web applications, business systems, and AI-enabled solutions.

**Production domain:** https://ephraim.withunion.net

## Stack

- React 19 + TypeScript
- Vite
- React Router (client-side routing)
- Hand-written CSS with design tokens and light/dark themes
- Local variable fonts (Inter, Space Grotesk, Instrument Serif)

## Development

```bash
npm install
npm run dev
```

## Scripts

| Script            | Purpose                                                        |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                                      |
| `npm run build`   | Type-check and build the production bundle into `dist/`        |
| `npm run preview` | Serve the production build locally                             |
| `npm run lint`    | Run Oxlint                                                     |
| `npm run audit`   | Visual, responsive, and content audit against the dev server   |
| `npm run og`      | Regenerate `public/og-image.png` from `design/og.html`         |
| `npm run icons`   | Regenerate favicons from `public/favicon.svg`                  |
| `npm run images`  | Regenerate optimized project screenshots from `design/screenshots` |

`npm run audit` expects the dev server at `http://127.0.0.1:5173` and Microsoft Edge installed.
It writes screenshots and `audit.json` to `design/review/`.

## Content

- `src/data/site.ts` — name, positioning, social links, navigation, education
- `src/data/projects.ts` — case studies, statuses, features, previews
- `src/data/services.ts` — service cards
- `src/data/skills.ts` — skill groups

Project previews are real captures of the public demos. Private and in-progress projects use
conceptual SVG previews from `src/components/PreviewArt.tsx` and are labelled as such.

## CV

No CV asset is currently bundled with the site. To enable a "Download CV" link:

1. Add a verified PDF at `public/cv/ephraim-shibru-cv.pdf`.
2. Add a CV entry to `src/data/site.ts` and a link in the navigation or contact section.
3. Confirm the file downloads correctly in the production build.

## Deployment

The site is a static SPA and requires a fallback route to `index.html`.

- **Vercel:** `vercel.json` contains the SPA rewrite plus cache and security headers.
- **Netlify:** `public/_redirects` handles the SPA fallback.
- **Apache / LiteSpeed:** `public/.htaccess` handles the SPA fallback, compression, caching, and
  security headers.

Build output is written to `dist/`. Deploy the contents of that directory.

Before going live, confirm:

1. DNS for `ephraim.withunion.net` points to the chosen host.
2. A valid TLS certificate covers `ephraim.withunion.net`.
3. `https://ephraim.withunion.net/`, a case-study URL, and a missing URL all resolve correctly.
4. `/sitemap.xml` and `/robots.txt` are reachable and reference the production domain.

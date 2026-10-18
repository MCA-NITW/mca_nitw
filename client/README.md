# client

React 19 frontend for the MCA NITW portal, built with Vite 8. See the
[root README](../README.md) for the full setup.

| Command                | What it does                                         |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Dev server on port 3000, `/api` proxied to port 5000 |
| `npx vite --mode demo` | Dev server on bundled demo data, no backend needed   |
| `npm run build`        | Production build into `dist/`                        |
| `npm run preview`      | Serve `dist/` on port 4173                           |
| `npm run screenshots`  | Rebuild `docs/screenshots/*.webp` with Playwright    |
| `npm run og-image`     | Render `public/og.png` from `public/logo.svg`        |

Build-time variables:

- `BASE_PATH`: URL prefix, `/mca_nitw/` on GitHub Pages (default `/`)
- `VITE_API_URL`: API origin when it is not same-origin (default: same origin)
- `--mode demo`: use `src/lib/demo.js` and `src/data/alumni.json` instead of
  the API

# CLAUDE.md

> This file stacks on top of the workspace root at `C:\Code\GitHub\`:
>
> - Root [`CLAUDE.md`](../../CLAUDE.md) -- voice, rules, routing map, references, skills, slash commands, conventions.
> - Root [`MEMORY.md`](../../MEMORY.md) -- live facts across repos.
> - Root [`STATUS.md`](../../STATUS.md) -- live PR/CI/security dashboard.
> - [`.claude/resources/`](../../.claude/resources/README.md) -- deep reference for collaboration, workflow, git, OSS, debugging, voice.
>
> Read those first. The guidance below only adds **repo-specific context** -- it does not override anything in the root.

## Project

Official web portal for the MCA department at NIT Warangal: alumni network, student directory, study materials, placement cell, CR cell. Maintained under the [MCA-NITW org](https://github.com/MCA-NITW/mca_nitw).

## Stack

- **Language**: JavaScript (no TypeScript)
- **Frontend**: React 19 on Vite 8 (moved off Create React App in 1.6.0), CSS
  Modules, Bootstrap 5, `react-router` 8 (import from `react-router`, not
  `react-router-dom`); MUI 9 is installed but unused
- **Backend**: Express 5 (ESM), Mongoose 9, bcryptjs, jsonwebtoken,
  cookie-parser, express-rate-limit
- **Database**: MongoDB (Atlas or local)
- **Package manager**: npm (org convention, package-lock.json committed)
- **Deploy target**: GitHub Pages for the client via
  `.github/workflows/pages.yml` (`BASE_PATH=/mca_nitw/`, router `basename` from
  `import.meta.env.BASE_URL`, `404.html` SPA fallback). It builds in demo mode
  unless the `VITE_API_URL` repo variable is set. `render.yaml` is a Render
  blueprint for the API; nothing is deployed there yet

## Run

```
npm install && npm run set-env    # root deps + client/ and server/ deps
npm run seed                      # 10 sample alumni (+ demo@example.com if SEED_DEMO_PASSWORD)
npm run dev                       # frontend :3000 + backend :5000 via concurrently
cd client && npm run build        # production build (Vite, dist/)
cd client && npx vite --mode demo # frontend only, bundled data, no backend
```

## Test

No test suite. Root `npm test` exits 1 by design. CI covers format check,
security scan, client build (normal and `--mode demo`), and `node --check` on
every server file. For a live server check, run it against a throwaway MongoDB
(a cached `mongod` binary works), `npm run seed`, then curl
`/api/auth/login` and `/api/users` with a cookie jar.

## Entry points

- `client/src/main.jsx` -- React root (loaded by `client/index.html`)
- `client/src/App.jsx` -- router, session restore, member-route redirects
- `client/src/lib/api.js` -- every fetch; swaps to `lib/demo.js` in demo mode
- `server/server.js` -- loads `.env`, connects to Mongo, then listens
- `server/app.js` -- Express app: CORS allowlist, JSON limit, routes, errors

## Key files

- `server/models/User.js` -- the only Mongoose schema (`passwordHash` is
  `select: false` and stripped in `toJSON`)
- `server/auth.js` -- JWT cookie helpers and `requireAuth`
- `client/src/data/alumni.json` -- demo data and the seed source, one file
- `client/scripts/screenshots.js` -- regenerates `docs/screenshots/*.webp`
- `package.json` (root) -- orchestration scripts only; real deps live in `client/` and `server/`
- `.github/workflows/ci.yml` -- calls org reusable workflows (`mca-nitw/.github`) for format + security

## Gotchas

- Server needs `.env` in `server/` with `CONNECTION_URL` and `JWT_SECRET`
  (`PORT` defaults to 5000) or it exits. Never commit it.
- `server.js` imports `dotenv/config` first on purpose: `app.js` and
  `auth.js` read env at import time.
- `overrides` blocks in root and server package.json pin transitive deps for
  security alerts -- keep them when bumping deps. The client needs none since
  the Vite move.
- `RouterProvider` keeps the first router's state, so `App.jsx` keys it on a
  session counter; without the key a swapped router with no loader renders
  stale.
- Cross-site cookies: Pages and a Render API are different sites, so the API
  needs `COOKIE_SAMESITE=none` (HTTPS only) and Safari still drops it.
- Never pass `useNewUrlParser`/`useUnifiedTopology` to `mongoose.connect`:
  Mongoose 9 throws `MongoParseError` and the server never listens (fixed in
  1.5.0).
- `BASE_PATH=/mca_nitw/` in Git Bash gets rewritten to a Windows path; prefix
  local builds with `MSYS_NO_PATHCONV=1`.

## Repo-specific rules

- Use npm here, not pnpm -- org repo with npm lockfiles.

## Routes / Pages

- `/` -- home landing
- About, Alumni (+ per-alumnus detail), Students, StudyMaterial, PlacementCell, CRCell, Contact, Authentication, Fullprofile, Error -- one folder each under `client/src/pages/`

## API routes

- `GET /api/health` -- liveness
- `POST /api/auth/signup|login|logout`, `GET /api/auth/me` -- cookie session
- `GET /api/users?q=` -- alumni directory, `requireAuth`, max 100, no emails

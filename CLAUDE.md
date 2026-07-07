# CLAUDE.md

> This file stacks on top of the workspace root at `C:\Code\GitHub\`:
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
- **Frontend**: React 19 on Create React App (react-scripts 5), MUI 6, Bootstrap 5, React Router 7
- **Backend**: Express 5 (ESM), Mongoose 8
- **Database**: MongoDB (Atlas or local)
- **Package manager**: npm (org convention, package-lock.json committed)
- **Deploy target**: none yet -- runs locally only

## Run

```
npm install && npm run set-env    # root deps + client/ and server/ deps
npm run dev                       # frontend :3000 + backend :5000 via concurrently
cd client && npm run build        # production build (CRA)
```

## Test

No test suite. Root and server `npm test` exit 1 by design. CI covers format check, security scan, client build, and `node --check server.js` only.

## Entry points

- `client/src/index.js` -- React root
- `client/src/App.js` -- routing hub for all pages
- `server/server.js` -- Express entry: CORS, body-parser, Mongo connect, listen

## Key files

- `server/models/User.js` -- the only Mongoose schema
- `package.json` (root) -- orchestration scripts only; real deps live in `client/` and `server/`
- `.github/workflows/ci.yml` -- calls org reusable workflows (`mca-nitw/.github`) for format + security

## Gotchas

- Server needs `.env` in `server/` with `CONNECTION_URL` and `PORT` before it starts (dotenv). Never commit it.
- `npm ci --legacy-peer-deps` is required in `client/` (React 19 vs CRA peer ranges); CI already does this.
- Heavy `overrides` blocks in all three package.json files pin transitive deps for security alerts -- keep them when bumping deps.
- README says PRs target `develop`, but CI triggers on `main` and origin/HEAD is `main`. Confirm target before opening PRs.
- README's stack table says Express 4; `server/package.json` actually has Express 5.
- Backend has exactly one route so far; the Authentication pages are client-side forms with no server endpoints behind them yet.
- Mongoose connect passes `useNewUrlParser`/`useUnifiedTopology` -- deprecated no-ops in Mongoose 8, harmless but drop on touch.

## Repo-specific rules

- Use npm here, not pnpm -- org repo with npm lockfiles and CRA tooling.

## Routes / Pages

- `/` -- home landing
- About, Alumni (+ per-alumnus detail), Students, StudyMaterial, PlacementCell, CRCell, Contact, Authentication, Fullprofile, Error -- one folder each under `client/src/pages/`

## API routes

- `GET /users/all` -- returns all users (only endpoint; note the artificial 1s setTimeout in `server/server.js`)

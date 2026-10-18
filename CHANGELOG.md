# Changelog

## [1.5.0] - 2026-10-18

- Fix server startup: Mongoose 9 rejects the `useNewUrlParser` and
  `useUnifiedTopology` options, so the server failed with `MongoParseError` and
  never listened
- Serve `/users/all` with `app.get` instead of `app.use`, so other methods
  return 404
- Rate limit `/users/all` to 60 requests per minute per IP with
  `express-rate-limit` (CodeQL `js/missing-rate-limiting`)
- Patch critical shell-quote advisory GHSA-pqg4-j6r4-53mv by raising the
  override to `>=1.11.0` in root and client
- Refresh server and root dependencies within their ranges (Express 5.3,
  Mongoose 9.11, dotenv 18.0.8, concurrently 10.0.6, Prettier 3.9)
- Deploy the client to GitHub Pages from `main` with a `basename`-aware router
  and an SPA 404 fallback
- Make the layout mobile friendly: top nav wraps, side nav becomes a bottom tab
  bar, sections and the profile page no longer overflow at 375px
- Fix the wrong LinkedIn link on the contact card, the missing list `key`, and
  the empty "School" field on the profile page
- CI: least-privilege `permissions: contents: read` and `npm ci --ignore-scripts`
- Docs: correct README license (GPL-3.0), stack versions and target branch, add
  project status, architecture diagram, live demo link, the `server/.env`
  variables, and a real CONTRIBUTING guide

## [1.4.1] - 2026-10-06

- Monthly dependency updates, dotenv v18, hold `@babel/core` below 8 for
  react-scripts, pin underscore, and resolve the Dependabot alerts raised after
  1.4.0 (#412, #414, #415, #416, #417, #418)

## [1.4.0] - 2026-09-03

- Resolve all 47 open Dependabot alerts across client, server, and root (including critical websocket-driver CVE)
- Extend security overrides: patch webpack-dev-server, react-router, fast-uri, postcss, qs, shell-quote, js-yaml, brace-expansion, browserslist, nanoid, svgo, form-data, http-proxy-middleware, body-parser, @babel/core

## [1.3.0] - 2026-03-07

- Fix security vulnerabilities
- Upgrade Express to v5

## [1.2.0] - 2026-02-22

- Revamp README with project overview, features, tech stack, simplified structure

## [1.1.0] - 2025-07-26

- Add GitHub Actions workflow for auto-merging bot PRs
- Switch from Dependabot to Renovate for dependency management

## [1.0.0] - 2023-02-19

- MCA NIT Warangal department portal
- MERN stack (Express + React + MongoDB)
- Student and faculty management

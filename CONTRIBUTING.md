# Contributing

Thanks for helping build the MCA NITW portal. Members of the MCA-NITW org and
outside contributors are both welcome.

## Workflow

1. Org members: create a branch from `main`. External contributors: fork the
   repo, then branch from `main`.
2. Name the branch after the change, for example `feat/alumni-search` or `fix/navbar-mobile`.
3. Make the change, run the checks below, and open a pull request to `main`.
4. Keep one topic per pull request and describe what changed and how you
   checked it. Screenshots help for UI changes, including a phone-width one.

## Local setup

See [Getting Started](README.md#getting-started) in the README. The backend
needs `server/.env` with `CONNECTION_URL`, `PORT` and `JWT_SECRET`, as shown
there; `npm run seed` loads sample alumni. Without MongoDB, run the client in
demo mode with `npx vite --mode demo`. Never
commit `.env`.

## Checks

CI runs these on every pull request. Run them locally from the repo root first:

```bash
npm run format                    # Prettier, must leave no diff

cd client
npm ci
npm run build                     # Vite production build
npm run build -- --mode demo      # demo build, the one GitHub Pages ships

cd ../server
npm ci
for f in *.js models/*.js routes/*.js; do node --check "$f"; done
```

For UI changes, `npm run screenshots` in `client/` regenerates the README
screenshots (run `npx playwright install chromium` once first).

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/): `feat:`,
`fix:`, `docs:`, `chore:`, `refactor:`, `test:`.

## Code of conduct

By taking part you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).

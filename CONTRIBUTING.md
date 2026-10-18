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
needs `server/.env` with `CONNECTION_URL` and `PORT`, as shown there. Never
commit `.env`.

## Checks

CI runs these on every pull request. Run them locally from the repo root first:

```bash
npm run format                    # Prettier, must leave no diff

cd client
npm ci --legacy-peer-deps
npm run build                     # CRA production build

cd ../server
npm ci --legacy-peer-deps
node --check server.js            # server syntax check
```

`--legacy-peer-deps` is needed in `client/` because Create React App 5 declares
older React peer ranges.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/): `feat:`,
`fix:`, `docs:`, `chore:`, `refactor:`, `test:`.

## Code of conduct

By taking part you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).

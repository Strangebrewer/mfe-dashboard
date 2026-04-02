# mfe-dashboard

This is a React micro-frontend (MFE) that runs as part of a larger frontend ecosystem coordinated by a shell application. The shell handles auth, the header, and the sidebar. This MFE owns:

- **Dashboard** – currently minimal; intended to eventually summarize data from other MFEs
- **Budgeting** – the primary feature under active development, centered around bills and transactions

The only other MFE in the ecosystem currently handles job search.

## Running the app

```bash
pnpm start   # dev server on port 3001
```

The backend (separate Go repo) must be running first. Starting the frontend without the backend will cause the browser to invalidate any stored auth tokens.

There is no test framework set up yet.

## Stack

- **React 18**, **TypeScript**, **React Router v7**
- **Zustand** – global client state
- **@tanstack/react-query** – server state, caching, mutations
- **Axios** – HTTP, configured in `src/utils/axios.ts`
- **Tailwind v4** – scoped with the `tw:` prefix to avoid conflicts with the shell
- **date-fns** – date formatting
- **pnpm** – package manager
- **Webpack** – bundler, config shared via `@bka-stuff/mfe-utils`
- **@bka-stuff/mfe-utils** – internal shared library (auth, webpack config, nascent component library)

## Project structure

```
src/
  api/          # One class per resource, all extending BaseApi, exported via index.ts
  components/   # Feature-scoped components (e.g. components/bills/)
  hooks/        # One file per resource, groups all hooks for that resource
  pages/        # Page-level and page-adjacent components
  state/        # Zustand stores, named use[Domain].ts
  utils/        # Pure utility functions, grouped by domain (e.g. billUtils.ts)
```

## Conventions

- **Components**: PascalCase `.tsx`
- **Hooks files**: camelCase, `use` prefix not required on the file (e.g. `billHooks.ts`), but individual hooks follow the `use` prefix convention
- **API classes**: camelCase, one per resource, extending `BaseApi` — exceptions are acceptable when there's little overlap with base methods (ask first)
- **Stores**: `src/state/use[Domain].ts`
- **Utils**: pure functions with no React dependencies go in `src/utils/`, grouped by domain
- **Strict typing**: `any` is used freely for now; don't enforce strict types unless asked
- **Tailwind**: always use the `tw:` prefix

Conventions can be bent with good reason — raise it before doing it.

## Data conventions

- Monetary amounts are stored as integers (cents) on the backend. Divide by 100 for display, multiply by 100 before sending. See `src/utils/billUtils.ts` for `toDisplayAmount` / `toStoredAmount`.
- `billMonth` is formatted as `"YYYY-MM"` and is the standard way to identify which month a transaction belongs to.
- When creating bill transactions, use `usePayBill` (not `useCreateTransaction`). Updates go through `useUpdateTransaction`.
- Mutations that affect transactions should invalidate both `get-bills` and `get-transactions` query keys.

# mfe-dashboard

A React micro-frontend for budgeting and dashboard summary features. Runs as part of a larger MFE ecosystem coordinated by a shell application that handles auth, the header, and the sidebar.

## Requirements

- Node.js
- pnpm

## Getting started

```bash
pnpm install
pnpm start   # dev server on port 3001
```

## Stack

- React 18, TypeScript, React Router v7
- Zustand, @tanstack/react-query, Axios
- Tailwind v4, date-fns
- Webpack (config via @bka-stuff/mfe-utils)

# Ocean & Road

Take-home for Iguana Technology / Prague Labs. ~1 hour, stack from the job ad: Next.js, TypeScript, styled-components, Redux.

## Run it

```bash
npm install
npm run dev
```

Other scripts: `npm run lint`, `npm run typecheck`, `npm run build`.

## What's in here

- Home page loads mock vehicles on the server, filter runs client-side
- Detail page at `/vehicle/[id]`, book button pushes into Redux
- Cart at `/cart` — list, remove, total. Navbar badge links there
- No API, no dates, no checkout. Didn't have time and didn't want fake backend fluff

## Stack

Next.js App Router, TypeScript, styled-components (with SSR registry), Redux Toolkit.

## If this were real

Route handlers instead of `data/vehicles.ts`, a DB, date overlap checks, actual checkout. Standard stuff — out of scope for a 1h demo.

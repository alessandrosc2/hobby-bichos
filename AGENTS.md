# Hobby Bichos — Base44 Dev Environment

## Stack
TanStack Start (SSR) + Vite + React 19 + Tailwind v4. Frontend-only — no backend,
database, or external services. No secrets required.

## Running here
`docker compose -f docker-compose.base44.yml up -d` (then `reload_preview` after
code/compose changes that aren't picked up by live reload).

- Service `web` runs `pnpm install --frozen-lockfile && pnpm dev` on `node:22-slim`,
  with the repo bind-mounted at `/app` (node_modules in a named volume).
- The `@lovable.dev/vite-tanstack-config` hard-forces the Vite dev server to
  **port 8080** with `strictPort: true` (sandbox mode), so the compose maps
  **host 3000 → container 8080**.
- The preview is served through a proxy hostname that changes whenever the
  environment is recreated. `vite.config.ts` sets `server.allowedHosts: true`
  so Vite accepts it — do NOT remove this or the preview returns 403.

## Verifying it works
- `curl -sf -H "Host: external-preview.example.com" http://localhost:3000/`
  must return HTTP 200 with the Hobby Bichos HTML.
- A request to `/src/routes/index.tsx` must return 200 (confirms live source,
  not a prebuilt bundle).

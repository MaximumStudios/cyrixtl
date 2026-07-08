# Cloudflare Pages Deploy — Handover

## Goal
Deploy this repo (Next.js, client-side only, no backend/DB) to Cloudflare Pages via
Git-connected builds, serving from the `main` branch, project name `linkup-studios`.

## Repo changes already made (done, committed to `main` and `dev`)
- `next.config.ts`: switched from `output: "standalone"` to `output: "export"` +
  `images: { unoptimized: true }`. Required because the site has no API routes,
  server actions, or dynamic routes — a static export works and is what Cloudflare
  Pages needs (it serves static files, not a Node server).
- Verified locally: `npm run build` produces `out/index.html` + static assets successfully.
- No client-side router (no React Router, only Next's file-based routing) → no
  `_redirects` file needed; static export emits real `.html` per route.
- No `process.env`/`NEXT_PUBLIC_*` usage anywhere in `app/` or `components/` → no
  build-time environment variables needed.
- `.gitignore` already correctly ignores `/node_modules` and `/out/`.
- Removed dead Docker deploy path: `Dockerfile`, `docker-compose.yml`,
  `.dockerignore`, `.github/workflows/deploy-dev.yml` (all deleted from `main`;
  **`dev` branch still has these files** — not yet cleaned up there).

## Cloudflare dashboard config used
- Project type: Workers & Pages → "Connect a Worker to Git" (the newer unified
  **Workers Builds** flow, not the older classic "Pages" project type).
- Project name: `linkup-studios`
- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler pages deploy out --project-name=linkup-studios`
- Root directory: `/`
- Build-time secrets added (under the Git-connection page's own "Variables and
  secrets" section, NOT the separate runtime "Variables and secrets" panel under
  the Worker's main Settings — those are two different scopes and only the
  Git-connection one affects the build/deploy shell):
  - `CLOUDFLARE_API_TOKEN` — custom token created with Account → Cloudflare Pages
    → Edit permission, scoped to account `2bc35715f6c98ed69c4422fc19cd3f46`
    (Maximumtab@outlook.com's Account). Token name: "linkup-studios build token"
    (note: same display name was also used for Cloudflare's own internal build
    token — this may be confusing/colliding, worth renaming if retrying).
  - `CLOUDFLARE_ACCOUNT_ID` = `2bc35715f6c98ed69c4422fc19cd3f46`

## Problem encountered (unresolved)
Every Git-triggered build fails at the deploy step with:

```
Failed: The build token selected for this build has been deleted or rolled and
cannot be used for this build. Please update your build token in the Worker
Builds settings and retry the build.
```

This is Cloudflare's own **internal build token** (used to clone the repo /
run the build environment itself — distinct from the `CLOUDFLARE_API_TOKEN`
secret used by the `wrangler pages deploy` command). Troubleshooting steps
already tried, all unsuccessful:
1. Added `CLOUDFLARE_API_TOKEN` under the wrong (runtime) "Variables and
   secrets" panel first — confirmed wrong scope, moved to correct build-scoped
   panel. Did not fix the build-token error (this was a separate token anyway).
2. Regenerated the "API token" / build token shown under Settings → Build →
   "API token" row (labeled "linkup-studios build token") via its edit pencil.
   Did not fix it — identical error on next build.
3. Fully disconnected and reconnected the GitHub repo (`MaximumStudios/cyrixtl`)
   from the project, re-entering build command / deploy command / root
   directory, and re-adding the two build secrets. An immediate deploy
   afterward showed as succeeded in the Deployments tab ("Active deployment",
   manually-triggered-looking version), but a subsequent **Git-push-triggered**
   build still failed with the exact same stale-build-token error.
4. Pushed a fresh empty commit to `main` to force a new Git-triggered build.
   Same error again.

Conclusion: this looks like a Cloudflare-side bug/stuck state specific to this
project's Workers Builds configuration — the Git-triggered CI pipeline cannot
mint/use a valid internal build token, even after resetting everything
reachable from the dashboard.

## Suggested next steps for whoever picks this up
Pick one:

1. **Switch to GitHub Actions + Wrangler for deploy**, bypassing Cloudflare's
   Workers Builds CI entirely:
   - Add `.github/workflows/deploy-cloudflare.yml` that runs on push to `main`:
     `npm ci`, `npm run build`, then
     `npx wrangler pages deploy out --project-name=linkup-studios`.
   - Store `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as GitHub repo
     secrets (Settings → Secrets and variables → Actions).
   - This is the standard, well-trodden way to deploy Cloudflare Pages from
     CI and avoids Workers Builds' internal build-token system altogether.
   - Can leave the Cloudflare "Connect to Git" build config in place or
     disconnect it — if left connected, disable auto-builds on push to avoid
     duplicate/conflicting deploys, since GitHub Actions would now own deploys.

2. **Delete the `linkup-studios` Workers project and recreate via the classic
   Pages flow**: Workers & Pages → Create → **Pages** (not "Connect a Worker
   to Git") → Connect to Git. This is the older, separate Pages project type
   that has historically been more stable and doesn't need a "deploy command"
   at all — just Build command (`npm run build`) + Build output directory
   (`out`), no Wrangler invocation or build-token juggling.

3. **Check Cloudflare status / file a support ticket** in case this is a
   transient platform-side incident affecting Workers Builds broadly, and
   retry the existing setup later without other changes.

Option 1 or 2 are more likely to actually resolve it than more retries within
the same broken project state.

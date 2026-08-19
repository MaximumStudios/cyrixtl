# Cloudflare Deploy — Handover

## Status: resolved

Live at **https://cyrixtl.maximumtab.workers.dev**, deploying automatically via
GitHub Actions on every push to `main`.

## Final working setup

- **Deploy mechanism**: GitHub Actions (`.github/workflows/deploy-cloudflare.yml`)
  runs `npm ci`, `npm run build`, then `npx wrangler deploy` on push to `main`.
  This entirely bypasses Cloudflare's own Git-triggered build/deploy pipeline.
- **Resource type**: `cyrixtl` is a **Worker with static assets**, not a classic
  Pages project — see "Why not classic Pages" below. Config lives in
  `wrangler.jsonc`:
  ```jsonc
  {
    "name": "cyrixtl",
    "compatibility_date": "2026-08-19",
    "assets": { "directory": "./out" }
  }
  ```
- **Next.js config**: `output: "export"` + `images.unoptimized: true` in
  `next.config.ts` — required since Cloudflare serves static files, not a Node
  server, and the site has no API routes/server actions/dynamic routes.
- **GitHub repo secrets** (`MaximumStudios/cyrixtl`):
  - `CLOUDFLARE_API_TOKEN` — custom token scoped to
    `Maximumtab@outlook.com`'s account (`2bc35715f6c98ed69c4422fc19cd3f46`),
    with **both** `Account → Cloudflare Pages → Edit` and
    `Account → Workers Scripts → Edit` permissions. Both are required —
    Pages-only fails with an authentication error against the Workers API.
  - `CLOUDFLARE_ACCOUNT_ID` = `2bc35715f6c98ed69c4422fc19cd3f46`
  - Same two values also kept in local `.env` (gitignored) for running
    `wrangler deploy` locally if needed.

## Outstanding cleanup (not yet done)

1. **Disable Cloudflare's own Git-connected auto-build** on the `cyrixtl`
   project (Settings → Build). It's still enabled, still fires on every push,
   and fails every time with `Unknown arguments: project-name, projectName`
   (a stale deploy command left over from troubleshooting, invalid for the
   new-syntax `wrangler deploy`). Harmless in that it doesn't affect the real
   deploy (GitHub Actions), but it errors loudly on every push and should be
   turned off or reconfigured so it stops firing.
2. Delete unused leftover API tokens from `dash.cloudflare.com/profile/api-tokens`:
   `linkup-studios-build-token`, `linkup-studios build token`,
   `linkup-studios-v3`, and the original Pages-only token (superseded by the
   Pages+Workers-scoped one currently in use).
3. `dev` branch still has the old Docker deploy files (`Dockerfile`,
   `docker-compose.yml`, `.dockerignore`, old workflow) that were already
   removed from `main` — not cleaned up there.
4. Consider attaching a custom domain to the Worker instead of the default
   `*.workers.dev` subdomain.

## Why not classic Pages (root cause of the original failure)

The original attempt used Cloudflare's dashboard "Connect a Worker to Git"
flow (Workers Builds), targeting a project named `linkup-studios`. Every
Git-triggered build failed at the deploy step with:

```
Failed: The build token selected for this build has been deleted or rolled and
cannot be used for this build.
```

This was Cloudflare's own internal CI build token (distinct from the
account-level API token), and it stayed broken across regenerating it,
fully disconnecting/reconnecting the GitHub repo, and forcing fresh commits —
persisting even after retrying a month later. Conclusion: a stuck
platform-side state specific to that project.

Recreating the project (even via the ostensibly "classic" Workers & Pages →
Create → Pages → Connect to Git flow) didn't produce a classic Pages
project either — `wrangler pages project list` against this account returns
**zero** projects. Cloudflare has apparently unified Workers and Pages on
this account such that anything created is a Worker resource under the hood,
regardless of which dashboard entry point is used. `wrangler pages deploy`
therefore can never find it (`Project not found`), and the classic Pages API
permission (`Cloudflare Pages: Edit`) isn't sufficient to deploy to it either
— it needs `Workers Scripts: Edit`, since it's actually being deployed via
the Workers API (`wrangler deploy` with a static `assets` directory, the
modern replacement for Workers Sites / classic Pages).

Switching to GitHub Actions + `wrangler deploy` (Workers static assets)
sidesteps both problems: no dependency on Cloudflare's own CI build-token
system, and the correct API surface (Workers, not Pages) for what this
account actually creates.

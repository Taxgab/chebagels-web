# Feature: Che Bagels redesign (parallel build)

## Status

| Field | Value |
| --- | --- |
| Branch | `feature/chebagels-redesign`, created from `main` @ `cad8d83` |
| `main` | Untouched. No commits, no deploys. |
| Production | `chebagels-web.vercel.app` keeps serving the current site |
| Approval gate | Client approval of the mockup before any merge |
| Delivery strategy | `ask-on-risk` (forecast exceeds budget — see Delivery) |

## Objective

Produce a client-presentable redesign of the Che Bagels one-page site on an
isolated branch with a fixed preview URL, without touching the production
deployment, until the client approves the work.

## Problem

The app is a Next.js 16 rewrite of the legacy static site that still serves
`chebagels.com`. The rewrite introduced regressions that a redesign is expected
to fix, not inherit:

| Regression | Evidence |
| --- | --- |
| Spanish copy lost all accents and mixed tuteo/voseo | Legacy `.com` reads "día", "hacé una pausa", "Jamón", "clásico" |
| Product images downgraded | `thumbnailUrl` (~360px) is the only one rendered; `imageUrl` (1200x750) is unused dead data |
| Category filter renders invisible cards | New nodes get `.animate-on-scroll` (opacity 0) and are never observed by the one-shot observer in `layout.tsx` |
| All 3 locations show the same map | Identical coordinates and place id in `LOCATIONS[*].mapsEmbedUrl` |
| Primary CTAs fail WCAG AA contrast | White on `#ff6b35` = 2.68:1; white on `#25d366` = 1.98:1 |
| `og:image` is 300x79 but declares 1200x630 | `/images/logo.png` on the legacy host |
| `og:image` is hosted by the site being replaced | Legacy URL path; breaks the day the domain moves |

## Constraints

- `main` is never modified in this change.
- `SITE_CONFIG.url` stays `https://chebagels.com`: it is the migration target,
  not a bug.
- Non-production deployments must be `noindex`.
- Assets: the 8 real Cloudinary product photos only. Gaps use deliberate,
  visibly-placeholder treatments, never convincing stock photography.
- Copy source of truth is the legacy site (correct accents and voseo).
- No new runtime dependencies without a written justification.

## Non-goals

- Checkout, cart, or an owned ordering flow.
- CMS or any data source beyond the existing typed constants.
- Multi-page information architecture.
- Moving the `chebagels.com` domain (blocked on the sale and on DNS ownership).

## Open decisions

1. **Visual direction** — resolved by building a concrete Hero, not by polling.
2. **Brand color** — the packaging is burgundy on white; the site uses
   `#ff6b35`. Whether flame is identity or leftover is unresolved.
3. **DNS ownership of `chebagels.com`** — may sit with the legacy agency
   (`imarkine.com.py`, credited in the legacy footer). Blocks cutover, not build.
4. **Chain strategy** — required before the first PR once the forecast is real.

## Tasks

| ID | Task | Acceptance |
| --- | --- | --- |
| T1 | Recover copy and data from the legacy site into `src/lib/types.ts`; promote `imageUrl` to rendered assets | Text matches the legacy wording including accents; zero unaccented Spanish in user-facing strings |
| T2 | Design tokens in `globals.css`: palette, type scale, spacing, radii | Color pairs used for text meet >= 4.5:1 (large text >= 3:1), measured |
| T3 | Extract layout primitives: container, section, button, placeholder surface | No duplicated class strings across sections; buttons use one component |
| T4 | Redesign Hero with real product photography | LCP element is the hero image with `priority`; no layout shift |
| T5 | Rebuild Menu; fix the filter lifecycle | Filtering between two disjoint categories keeps every card visible |
| T6 | Redesign SocialProof with honest, sourced claims | No unverifiable numeric claim without a documented source |
| T7 | Locations with per-location map embeds | Each location renders its own coordinates; `load` is lazy and only for the active tab |
| T8 | DeliveryCTA + Footer | Single conversion path documented; no dead claims (Rappi/Wolt links or removal) |
| T9 | Metadata, JSON-LD, and a repo-hosted OG image | `og:image` resolves inside the deployment at 1200x630; 3 `LocalBusiness` nodes with address, phone, hours |
| T10 | Environment-aware canonical + `noindex` on previews | Preview response carries `noindex`; production canonical is `SITE_CONFIG.url` |
| T11 | Verification pass | `npm run build`, `tsc --noEmit`, `eslint` clean; contrast table re-measured; filter walked by hand |

## Delivery

Authored-changed-line forecast at planning: **~1,300–1,800** (all sections
rewritten, new primitives, data migration). This exceeds the ~400 review
budget, so a chain strategy is required before the first PR under
`ask-on-risk`.

## Progress

| Task | Status | Commit | Notes |
| --- | --- | --- | --- |
| T1 | done | — | Accents and voseo restored from the legacy reference; `imageUrl` is now the rendered asset |
| T2 | done | — | New palette + legacy aliases; Lighthouse contrast clean |
| T3 | done | — | `Container`, `Button`; reveal is CSS-only, no observer |
| T4 | done | — | Two-column hero, real 1200x750 photo, `preload` (Next 16: `priority` deprecated) |
| T5 | done | — | Filter rebuilt without the expand interaction; no hidden state to strand |
| T6 | done | — | Count-up removed; static server-rendered numbers |
| T7 | done | — | Per-location coordinates recovered from the short links |
| T8 | done | — | Single conversion block with both channels; dead h4 headings removed |
| T9 | partial | — | OG image generated in-repo; JSON-LD still lacks per-location `LocalBusiness` |
| T10 | done | — | `siteUrl`/`isIndexable` from deployment env; previews are `noindex` |
| T11 | partial | — | Build + Lighthouse green; no mobile-viewport pass yet |

## Verification evidence

- `npm run build`: PASS (Next 16.2.6, Turbopack, 7 static routes incl.
  `/opengraph-image`), re-run after every section was rebuilt.
- Lighthouse on `localhost:3000`: **Accessibility 1.0, Best Practices 1.0,
  SEO 1.0, zero failures.**
- Category filter walked by hand: Dulces -> Salados renders 3 cards at
  `opacity: 1`. The stranded-card bug is gone.
- Location tabs: each of the three produces its own embed and all three
  embeds return HTTP 200.
  - Recoleta `-25.2958524, -57.5832832`
  - Las Lomas `-25.2749125, -57.5792031`
  - CDE `-25.5239444, -54.6199347`
- Heading outline: `h1` -> `h2`/`h3` only. No skipped levels.
- `meta robots` on a non-production deployment: `noindex, nofollow`.
- `og:image` resolves to `/opengraph-image` inside the deployment and returns
  `200 image/png`.
- Horizontal overflow at 1000px viewport: 0px.
- Not yet verified: mobile viewport (no resize tool), production Lighthouse
  performance budget.

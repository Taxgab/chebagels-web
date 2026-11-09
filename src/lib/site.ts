/**
 * Absolute origin of the current deployment.
 *
 * Indexability is opt-in and fails closed. It must NOT be derived from
 * `VERCEL_ENV`: the redesign ships as its own Vercel project, and that
 * project's production deployment has `VERCEL_ENV=production` even though it
 * is a preview for the client. Deriving it from `VERCEL_ENV` would publish an
 * indexable clone that claims `chebagels.com` as its canonical.
 *
 * The real production project sets:
 *   NEXT_PUBLIC_SITE_URL=https://chebagels.com
 *   NEXT_PUBLIC_ALLOW_INDEX=true
 *
 * Everything else stays `noindex` and advertises its own host.
 */
const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl =
  configuredOrigin ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const isProductionDeployment = process.env.NEXT_PUBLIC_ALLOW_INDEX === "true";

export const isIndexable = isProductionDeployment;

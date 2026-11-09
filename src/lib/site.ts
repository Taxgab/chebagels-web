/**
 * Absolute origin of the current deployment.
 *
 * `SITE_CONFIG.url` is the domain this site will eventually replace, so it is
 * used as the production origin. Preview deployments must never advertise it:
 * they resolve to their own host and are excluded from indexing in `layout.tsx`.
 */
const productionOrigin = "https://chebagels.com";

export const isProductionDeployment = process.env.VERCEL_ENV === "production";

export const siteUrl = isProductionDeployment
  ? productionOrigin
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const isIndexable = isProductionDeployment;

import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Non-production deployments must not be crawled at all, not merely
    // labelled noindex: their robots.txt previously pointed crawlers at the
    // production domain's sitemap.
    rules: isIndexable
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

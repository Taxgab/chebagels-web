import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // One URL, because this is a single-page site. Fragment identifiers
  // (#menu, #locales) are not separately indexable and do not belong in a
  // sitemap.
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

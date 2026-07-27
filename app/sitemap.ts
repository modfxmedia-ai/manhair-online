import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/pages";
import { POSTS } from "@/lib/posts";
import { SITE } from "@/lib/site";

/**
 * Site sitemap.
 *
 * URLs match the historical Yoast SEO output as closely as possible:
 * - All 26 top-level pages (page-sitemap.xml)
 * - All 3 category archives (category-sitemap.xml)
 * - All discoverable blog posts (was not present in the WP sitemap but is
 *   reachable via internal links; we surface them explicitly so search
 *   engines can (re)index the same URLs on the new build).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const items: MetadataRoute.Sitemap = [];

  for (const p of PAGES) {
    items.push({
      url: p.canonical,
      lastModified: now,
      changeFrequency: p.isCategory ? "monthly" : "yearly",
      priority: p.path === "/" ? 1 : 0.7,
    });
  }
  for (const post of POSTS) {
    items.push({
      url: post.canonical ?? `${SITE.origin}${post.path}`,
      lastModified: post.dateModified ? new Date(post.dateModified) : now,
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }
  return items;
}

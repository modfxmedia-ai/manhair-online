import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/pages";
import { POSTS } from "@/lib/posts";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/seo/services";
import { CONDITIONS } from "@/lib/seo/conditions";
import { TIER1_CITIES, TIER2_CITIES } from "@/lib/seo/cities";

/**
 * Site sitemap.
 *
 * URLs match the historical Yoast SEO output as closely as possible:
 * - All 26 top-level pages (page-sitemap.xml)
 * - All 3 category archives (category-sitemap.xml)
 * - All discoverable blog posts (was not present in the WP sitemap but is
 *   reachable via internal links; we surface them explicitly so search
 *   engines can (re)index the same URLs on the new build).
 * - Full programmatic build (ModFX Media SEO spec, all 3 phases): 8
 *   services, 10 hair-loss conditions, 35 Tier 1 + 89 Tier 2 city pages,
 *   and 280 Tier 1 city x service pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const items: MetadataRoute.Sitemap = [];
  const seen = new Set<string>();

  const add = (
    url: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number,
    lastModified: Date = now
  ) => {
    if (seen.has(url)) return;
    seen.add(url);
    items.push({ url, lastModified, changeFrequency, priority });
  };

  for (const p of PAGES) {
    if (p.path === "/landing-page/") continue;
    add(p.canonical, p.isCategory ? "monthly" : "yearly", p.path === "/" ? 1 : 0.7);
  }
  for (const post of POSTS) {
    add(
      post.canonical ?? `${SITE.origin}${post.path}`,
      "yearly",
      0.6,
      post.dateModified ? new Date(post.dateModified) : now
    );
  }
  for (const service of SERVICES) {
    const path =
      service.slug === "mens-hair-replacement-systems"
        ? "/mens-hair-replacement-systems/"
        : `/services/${service.slug}/`;
    add(`${SITE.origin}${path}`, "monthly", 0.8);
  }
  for (const condition of CONDITIONS) {
    add(`${SITE.origin}/hair-loss/${condition.slug}/`, "monthly", 0.7);
  }
  for (const city of TIER1_CITIES) {
    add(`${SITE.origin}/locations/${city.slug}/`, "monthly", 0.7);
    for (const service of SERVICES) {
      add(
        `${SITE.origin}/locations/${city.slug}/${service.slug}/`,
        "monthly",
        0.6
      );
    }
  }
  for (const city of TIER2_CITIES) {
    add(`${SITE.origin}/locations/${city.slug}/`, "monthly", 0.6);
  }
  add(`${SITE.origin}/sitemap/`, "weekly", 0.5);
  return items;
}

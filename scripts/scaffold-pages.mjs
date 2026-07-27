#!/usr/bin/env node
/**
 * Scaffold app-router page files for every static route in lib/pages.ts.
 * Idempotent — will not overwrite existing files.
 * Blog posts are routed via app/[slug]/page.tsx (see lib/posts.ts).
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP = path.join(ROOT, "app");

// Read lib/pages.ts, extract paths by matching { path: "..." }
const src = fs.readFileSync(path.join(ROOT, "lib/pages.ts"), "utf8");
const paths = [...src.matchAll(/path:\s*"([^"]+)"/g)].map((m) => m[1]);
// Exclude "/" (home has its own bespoke page)
const routes = paths.filter((p) => p !== "/");

function urlPathToDir(urlPath) {
  // "/about-us/" -> "app/about-us"
  // "/category/hair-loss/" -> "app/category/hair-loss"
  const seg = urlPath.replace(/^\/|\/$/g, "");
  return path.join(APP, seg);
}

const TEMPLATE = (urlPath, title, description) => `import type { Metadata } from "next";
import { JsonLd, buildPageGraph } from "@/components/JsonLd";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { SITE, SOCIAL } from "@/lib/site";
import { getPageMeta, toMetadata } from "@/lib/pages";

const PAGE = getPageMeta(${JSON.stringify(urlPath)})!;
export const metadata: Metadata = toMetadata(PAGE);

export default function Page() {
  const graph = buildPageGraph({
    origin: SITE.origin,
    path: PAGE.path,
    title: PAGE.title,
    description: PAGE.description,
    image: PAGE.og.image,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: ${JSON.stringify(deriveHeading(title))} },
    ],
    organization: {
      name: SITE.orgName,
      url: \`\${SITE.origin}/\`,
      logo: {
        url: \`\${SITE.origin}\${SITE.logo.url}\`,
        width: SITE.logo.width,
        height: SITE.logo.height,
        caption: SITE.logo.caption,
      },
      sameAs: SOCIAL.map((s) => s.href),
    },
    siteName: SITE.siteName,
    siteDescription: SITE.tagline,
  });

  return (
    <>
      <JsonLd data={graph} />
      <PagePlaceholder
        title={PAGE.title}
        description={PAGE.description}
        path={PAGE.path}
      />
    </>
  );
}
`;

function deriveHeading(title) {
  const suffixes = [
    " | ManHair | Hair Restoration Jacksonville and Atlanta",
    " | Jacksonville's Leading Hair Loss Solution for Men",
    " - Fast Hair Loss Solution In Jacksonville",
    " | ManHair",
    " | Hair Replacement for Men | ManHair",
    " - Best Hair Transplant In USA",
    " - hair restoration center costs",
    " - Man Hair Replacement System For Hair Loss",
    " - Learn About Men's Hair Transplant Alternative Options",
    " To Find A Hair Doctor Near Me",
    " Archives | ManHair | Hair Restoration Jacksonville and Atlanta",
  ];
  let h = title;
  for (const s of suffixes) if (h.endsWith(s)) h = h.slice(0, -s.length);
  return h;
}

// Also pull title + description strings from the source
function metaFor(urlPath) {
  const re = new RegExp(
    `path:\\s*"${urlPath.replace(/[/\-]/g, "\\$&")}"[\\s\\S]*?title:\\s*"([\\s\\S]*?)",[\\s\\S]*?description:\\s*(?:"([\\s\\S]*?)"|null)`
  );
  const m = re.exec(src);
  return { title: m?.[1] ?? "", description: m?.[2] ?? null };
}

let created = 0;
let skipped = 0;
for (const urlPath of routes) {
  const dir = urlPathToDir(urlPath);
  const file = path.join(dir, "page.tsx");
  if (fs.existsSync(file)) {
    skipped++;
    continue;
  }
  fs.mkdirSync(dir, { recursive: true });
  const { title, description } = metaFor(urlPath);
  fs.writeFileSync(file, TEMPLATE(urlPath, title, description));
  console.log("scaffolded", urlPath);
  created++;
}
console.log(`created=${created} skipped=${skipped}`);

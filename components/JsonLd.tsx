/**
 * JSON-LD injection helper.
 *
 * Renders a schema.org structured data payload inside a
 * `<script type="application/ld+json">` tag. We follow the
 * Next.js docs recommendation: scrub `<` characters to their
 * unicode form to prevent XSS via malicious string injection.
 *
 * See: node_modules/next/dist/docs/01-app/02-guides/json-ld.md
 */
export function JsonLd({ data }: { data: unknown | unknown[] }) {
  const payloads = Array.isArray(data) ? data : [data];
  return (
    <>
      {payloads.map((payload, i) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}

/** Utility: build a WebPage/BreadcrumbList/WebSite/Organization graph
 *  in the same shape Yoast SEO emits on the live site. */
export function buildPageGraph(opts: {
  origin: string;
  path: string;
  title: string;
  description?: string | null;
  image?: string | null;
  imageWidth?: number;
  imageHeight?: number;
  imageCaption?: string | null;
  breadcrumbs: Array<{ name: string; path?: string }>;
  datePublished?: string;
  dateModified?: string;
  organization: {
    name: string;
    url: string;
    logo: { url: string; width: number; height: number; caption: string };
    sameAs: readonly string[];
  };
  siteName: string;
  siteDescription?: string;
  inLanguage?: string;
}) {
  const {
    origin,
    path,
    title,
    description,
    image,
    imageWidth,
    imageHeight,
    imageCaption,
    breadcrumbs,
    datePublished,
    dateModified,
    organization,
    siteName,
    siteDescription,
    inLanguage = "en-US",
  } = opts;

  const pageUrl = `${origin}${path}`;
  const graph: Record<string, unknown>[] = [];

  const webPage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: title,
    isPartOf: { "@id": `${origin}/#website` },
    about: { "@id": `${origin}/#organization` },
    inLanguage,
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    potentialAction: [{ "@type": "ReadAction", target: [pageUrl] }],
  };
  if (description) webPage.description = description;
  if (datePublished) webPage.datePublished = datePublished;
  if (dateModified) webPage.dateModified = dateModified;
  if (image) {
    webPage.primaryImageOfPage = { "@id": `${pageUrl}#primaryimage` };
    webPage.image = { "@id": `${pageUrl}#primaryimage` };
    webPage.thumbnailUrl = image;
  }
  graph.push(webPage);

  if (image) {
    const img: Record<string, unknown> = {
      "@type": "ImageObject",
      inLanguage,
      "@id": `${pageUrl}#primaryimage`,
      url: image,
      contentUrl: image,
    };
    if (imageWidth) img.width = imageWidth;
    if (imageHeight) img.height = imageHeight;
    if (imageCaption) img.caption = imageCaption;
    graph.push(img);
  }

  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: breadcrumbs.map((b, i) => {
      const item: Record<string, unknown> = {
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
      };
      if (b.path) item.item = `${origin}${b.path}`;
      return item;
    }),
  });

  graph.push({
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    url: `${origin}/`,
    name: siteName,
    description: siteDescription,
    publisher: { "@id": `${origin}/#organization` },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${origin}/?s={search_term_string}`,
        },
        "query-input": {
          "@type": "PropertyValueSpecification",
          valueRequired: true,
          valueName: "search_term_string",
        },
      },
    ],
    inLanguage,
  });

  graph.push({
    "@type": "Organization",
    "@id": `${origin}/#organization`,
    name: organization.name,
    url: organization.url,
    logo: {
      "@type": "ImageObject",
      inLanguage,
      "@id": `${origin}/#/schema/logo/image/`,
      url: organization.logo.url,
      contentUrl: organization.logo.url,
      width: organization.logo.width,
      height: organization.logo.height,
      caption: organization.logo.caption,
    },
    image: { "@id": `${origin}/#/schema/logo/image/` },
    sameAs: [...organization.sameAs],
  });

  return { "@context": "https://schema.org", "@graph": graph };
}

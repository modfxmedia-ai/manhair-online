import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { SITE, SOCIAL } from "@/lib/site";
import { POSTS, getPostBySlug } from "@/lib/posts";

/**
 * Dynamic route for blog posts. Every historical /:slug/ URL that is a
 * blog post is generated statically here. `dynamicParams: false` ensures
 * unknown slugs return the 404 page (not accidentally rendered).
 *
 * Static top-level pages (about-us, faq, etc.) live in their own folders
 * and are matched by Next.js before this dynamic segment.
 */

export const dynamicParams = false;

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

type Params = { slug: string };
type Props = { params: Promise<Params> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  // Live site marks all blog posts `noindex, follow` and returns the generic
  // Organization title as <title>. We preserve `noindex, follow` but promote
  // the real post heading as the browser tab / social-preview title.
  const preferredTitle = post.heading ?? post.title;
  return {
    metadataBase: new URL(SITE.origin),
    title: preferredTitle,
    description: post.description ?? undefined,
    alternates: post.canonical ? { canonical: post.canonical } : undefined,
    robots: post.robots,
    openGraph: {
      title: preferredTitle,
      description: post.og.description ?? undefined,
      url: post.og.url ?? undefined,
      siteName: post.og.site_name ?? SITE.siteName,
      locale: post.og.locale ?? SITE.locale,
      type: "article",
      images: post.og.image ? [{ url: post.og.image }] : undefined,
      publishedTime: post.datePublished ?? undefined,
      modifiedTime: post.dateModified ?? undefined,
    },
    twitter: {
      card: (post.twitterCard as "summary_large_image") ?? "summary_large_image",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const pageUrl = post.canonical ?? `${SITE.origin}${post.path}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        isPartOf: { "@id": pageUrl },
        mainEntityOfPage: { "@id": pageUrl },
        headline: post.heading ?? post.title,
        datePublished: post.datePublished ?? undefined,
        dateModified: post.dateModified ?? undefined,
        publisher: { "@id": `${SITE.origin}/#organization` },
        articleSection: post.category ?? undefined,
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: post.title,
        isPartOf: { "@id": `${SITE.origin}/#website` },
        primaryImageOfPage: post.coverImage
          ? { "@id": `${pageUrl}#primaryimage` }
          : undefined,
        datePublished: post.datePublished ?? undefined,
        dateModified: post.dateModified ?? undefined,
        description: post.description ?? undefined,
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        inLanguage: "en-US",
        potentialAction: [{ "@type": "ReadAction", target: [pageUrl] }],
      },
      post.coverImage
        ? {
            "@type": "ImageObject",
            inLanguage: "en-US",
            "@id": `${pageUrl}#primaryimage`,
            url: post.coverImage,
            contentUrl: post.coverImage,
          }
        : null,
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.origin}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.origin}/blog/` },
          { "@type": "ListItem", position: 3, name: post.heading ?? post.title },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.origin}/#website`,
        url: `${SITE.origin}/`,
        name: SITE.siteName,
        publisher: { "@id": `${SITE.origin}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${SITE.origin}/#organization`,
        name: SITE.orgName,
        url: `${SITE.origin}/`,
        logo: {
          "@type": "ImageObject",
          inLanguage: "en-US",
          "@id": `${SITE.origin}/#/schema/logo/image/`,
          url: `${SITE.origin}${SITE.logo.url}`,
          contentUrl: `${SITE.origin}${SITE.logo.url}`,
          width: SITE.logo.width,
          height: SITE.logo.height,
          caption: SITE.logo.caption,
        },
        image: { "@id": `${SITE.origin}/#/schema/logo/image/` },
        sameAs: SOCIAL.map((s) => s.href),
      },
    ].filter(Boolean),
  };

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="mh-light">
      <JsonLd data={graph} />

      {/* Hero */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)]">
        <div className="mh-container py-10 md:py-24">
          <Link
            href="/blog/"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--mh-copper-400)] hover:text-[color:var(--mh-copper-300)]"
          >
            &larr; The ManHair Blog
          </Link>
          <h1 className="mt-6 mh-display text-[clamp(2rem,3.5vw+1rem,3.6rem)] max-w-4xl">
            {post.heading ?? post.title}
          </h1>
          <span className="mh-rule mt-8" aria-hidden="true" />
          {post.description ? (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
              {post.description}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-[color:var(--mh-ink-600)]">
            {post.category ? <span>{post.category}</span> : null}
            {post.datePublished ? (
              <time dateTime={post.datePublished}>
                {new Date(post.datePublished).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            ) : null}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="border-b border-[color:var(--mh-border)]">
        <div className="mh-container py-8 md:py-20">
          <article
            className="mh-prose mx-auto max-w-3xl"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: post.bodyHtml ?? "" }}
          />
        </div>
      </section>

      {/* Related */}
      {related.length ? (
        <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)]">
          <div className="mh-container py-16">
            <p className="mh-eyebrow">More From The Blog</p>
            <h2 className="mt-3 mh-display text-3xl">
              Keep <span className="mh-italic">reading.</span>
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={p.path}
                  className="mh-card group flex flex-col gap-4 p-6 transition-colors hover:border-[color:var(--mh-copper-600)]"
                >
                  {p.coverImage ? (
                    <div className="relative aspect-[16/9] overflow-hidden border border-[color:var(--mh-border)]">
                      <Image
                        src={p.coverImage}
                        alt={p.heading ?? p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <h3 className="mh-display text-xl text-[color:var(--mh-ink-950)] group-hover:text-[color:var(--mh-copper-400)]">
                    {p.heading ?? p.title}
                  </h3>
                  {p.excerpt ? (
                    <p className="text-sm leading-relaxed text-[color:var(--mh-ink-800)]">
                      {p.excerpt}
                    </p>
                  ) : null}
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--mh-copper-400)]">
                    Read More &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

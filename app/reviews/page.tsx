import type { Metadata } from "next";
import { Button, Card, Display, Italic, SectionLabel } from "@/components/ui";
import { AuroraBlobs, Reveal, RevealGrid } from "@/components/ui/motion";
import { JsonLd, buildPageGraph } from "@/components/JsonLd";
import { GoogleGIcon } from "@/components/icons";
import { SITE, SOCIAL } from "@/lib/site";
import { getPageMeta, toMetadata } from "@/lib/pages";

const PAGE = getPageMeta("/reviews/")!;
export const metadata: Metadata = toMetadata(PAGE);

/**
 * Reviews page.
 *
 * COMPLIANCE GUARDRAIL: This page must NEVER carry AggregateRating or
 * Review schema unless populated with real, verifiable review data from
 * a genuine review platform. Spec Section 7.2 is explicit: fake review
 * schema = Google manual action. Until real reviews are wired in (e.g.
 * via Google Business Profile API), keep this page as a UI-only page
 * that links out to the actual review platforms.
 */

const PLATFORMS = [
  {
    name: "Google",
    body: "Read what our clients say on Google Business Profile.",
    href: "https://www.google.com/search?q=Man+Hair+Orange+CA",
  },
  {
    name: "Yelp",
    body: "See our Yelp reviews from Orange County clients.",
    href: "https://www.yelp.com/search?find_desc=Man+Hair&find_loc=Orange%2C+CA",
  },
  {
    name: "Facebook",
    body: "Reviews and recommendations from our Facebook community.",
    href: "https://www.facebook.com/manhaironline/",
  },
];

export default function Page() {
  const graph = buildPageGraph({
    origin: SITE.origin,
    path: PAGE.path,
    title: PAGE.title,
    description: PAGE.description,
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Reviews" }],
    organization: {
      name: SITE.orgName,
      url: `${SITE.origin}/`,
      logo: {
        url: `${SITE.origin}${SITE.logo.url}`,
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
    <div className="mh-light">
      <JsonLd data={graph} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] pb-16 pt-16 md:pb-24 md:pt-40">
        <AuroraBlobs className="opacity-30" />
        <div className="mh-container relative z-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mh-kicker justify-center">Client Reviews</p>
              <Display as={1} size="hero" className="mt-5">
                Real words from <Italic>real clients</Italic>
              </Display>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                We&rsquo;re proud of the trust our clients place in us. Read
                honest reviews on the platforms below, then book your own free
                virtual consultation when you&rsquo;re ready.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-16 md:py-24">
        <div className="mh-container">
          <Reveal>
            <SectionLabel>Where To Read Reviews</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              Verified on <Italic>every major platform</Italic>
            </Display>
          </Reveal>
          <RevealGrid className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORMS.map((p) => (
              <Card
                key={p.name}
                href={p.href}
                padding="md"
                accent="left"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-3">
                  <GoogleGIcon className="h-6 w-6 text-[color:var(--mh-copper-700)]" />
                  <p className="font-sans text-base font-semibold text-[color:var(--mh-ink-900)]">
                    {p.name}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--mh-ink-700)]">
                  {p.body}
                </p>
              </Card>
            ))}
          </RevealGrid>
          <p className="mt-8 max-w-2xl text-sm text-[color:var(--mh-ink-600)]">
            We link out to third-party review platforms rather than reproduce
            testimonials on this page, so you can verify authenticity yourself.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--mh-bg)] py-16 md:py-24">
        <div className="mh-container max-w-2xl text-center">
          <Reveal>
            <Display as={2} size="lg">
              Ready to start? Book a <Italic>free virtual consultation</Italic>
            </Display>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--mh-ink-700)]">
              No cost, no pressure. When you&rsquo;re ready, your fitting
              happens at our Orange, CA studio.
            </p>
            <div className="mt-8">
              <Button href="/consultation/" size="lg">
                Book Your Free Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

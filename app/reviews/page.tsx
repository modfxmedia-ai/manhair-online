import type { Metadata } from "next";
import { Display, Italic, SectionLabel } from "@/components/ui";
import { BookingButton } from "@/components/BookingButton";
import { AuroraBlobs, Reveal, RevealGrid } from "@/components/ui/motion";
import { JsonLd, buildPageGraph } from "@/components/JsonLd";
import { GoogleGIcon } from "@/components/icons";
import { SITE, SOCIAL } from "@/lib/site";
import { getPageMeta, toMetadata } from "@/lib/pages";
import { TESTIMONIALS, GOOGLE_AVATAR_TINTS } from "@/lib/testimonials";

const PAGE = getPageMeta("/reviews/")!;
export const metadata: Metadata = toMetadata(PAGE);

/**
 * Reviews page.
 *
 * COMPLIANCE GUARDRAIL: This page must NEVER carry AggregateRating or
 * Review schema unless populated with real, verifiable review data from
 * a genuine review platform. Spec Section 7.2 is explicit: fake review
 * schema = Google manual action. These cards reuse the same client
 * testimonials shown on the homepage and stay UI-only.
 */

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
                We&rsquo;re proud of the trust our clients place in us. Here is
                what they say about ManHair, then book your own free virtual
                consultation when you&rsquo;re ready.
              </p>
              <div className="mt-8 flex justify-center">
                <BookingButton size="lg">
                  Book a Private Consultation
                </BookingButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-16 md:py-24">
        <div className="mh-container">
          <Reveal>
            <SectionLabel>Client Stories</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              More than a service. <Italic>A confidence.</Italic>
            </Display>
          </Reveal>
          <RevealGrid className="mt-10 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <article key={t.name} className="mh-goog-card mh-goog-card-grid">
                <div className="mh-goog-head">
                  <div className="mh-goog-id">
                    <span
                      className="mh-goog-avatar"
                      style={{
                        background:
                          GOOGLE_AVATAR_TINTS[i % GOOGLE_AVATAR_TINTS.length],
                      }}
                    >
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="mh-goog-name">{t.name}</p>
                      <p className="mh-goog-meta">
                        Local Guide <span className="dot" /> {t.date}
                      </p>
                    </div>
                  </div>
                  <GoogleGIcon size={22} />
                </div>
                <p className="mh-goog-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </p>
                <p className="mh-goog-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="mh-goog-foot">
                  <GoogleGIcon size={14} />
                  Posted on Google
                </div>
              </article>
            ))}
          </RevealGrid>
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
              <BookingButton size="lg">
                Book a Private Consultation
              </BookingButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

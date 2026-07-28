import type { Metadata } from "next";
import { Button, Display, Italic } from "@/components/ui";
import { AuroraBlobs, Reveal } from "@/components/ui/motion";
import { JsonLd, buildPageGraph } from "@/components/JsonLd";
import { SITE, SOCIAL } from "@/lib/site";
import { getPageMeta, toMetadata } from "@/lib/pages";

const PAGE = getPageMeta("/free-consultation/")!;
export const metadata: Metadata = toMetadata(PAGE);

const CTA_TICKER = [
  "100% Free Consultation",
  "Strictly Confidential",
  "In-Home or In-Studio",
  "Orange County, CA",
  "No Pressure, Ever",
];

export default function Page() {
  const graph = buildPageGraph({
    origin: SITE.origin,
    path: PAGE.path,
    title: PAGE.title,
    description: PAGE.description,
    image: PAGE.og.image,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Schedule Your Free Consultation" },
    ],
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

      {/* ============================================================
       * HERO — EyebrowTag + DisplayHeading (real page H1)
       * ============================================================ */}
      <section className="relative isolate overflow-hidden border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] pb-16 pt-16 md:pb-24 md:pt-40">
        <AuroraBlobs className="opacity-30" />
        <div className="mh-container relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mh-kicker justify-center">Free Consultation</p>
              <Display as={1} size="hero" className="mt-5">
                Complete the form below to schedule your{" "}
                <Italic>FREE consultation!</Italic>
              </Display>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                Your information will be kept strictly confidential.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
       * BOOKING FORM — LeadConnector embed (unchanged logic)
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-10 md:py-24">
        <div className="mh-container">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-[var(--mh-radius-md)] border border-[color:var(--mh-border-strong)] bg-[color:var(--mh-bg)] p-4 md:p-6">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/hh9qLIaLPQ8U3Lmqc9Nf"
                style={{ border: "none", width: "100%", minHeight: 760 }}
                scrolling="no"
                id="hh9qLIaLPQ8U3Lmqc9Nf"
                title="Schedule your free consultation"
              />
            </div>
          </Reveal>
        </div>
        <script async src="https://api.leadconnectorhq.com/js/form_embed.js" />
      </section>

      {/* ============================================================
       * TICKER BAND CTA — drives to booking
       * ============================================================ */}
      <section aria-hidden="true" className="mh-ticker">
        <div className="mh-marquee">
          <div
            className="mh-marquee-track"
            style={{ ["--mh-marquee-duration" as string]: "30s" } as React.CSSProperties}
          >
            {[0, 1].map((dup) => (
              <div key={dup} className="mh-marquee-group">
                {CTA_TICKER.map((t) => (
                  <span key={t + dup} className="inline-flex items-center gap-6">
                    <span className="mh-ticker-item">
                      <span>{t}</span>
                    </span>
                    <span className="mh-ticker-star">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-8 md:py-20">
        <div className="mh-container text-center">
          <p className="mh-kicker justify-center">Ready when you are</p>
          <Display as={2} size="lg" className="mt-4">
            Book your <Italic>appointment today.</Italic>
          </Display>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/book-my-appointment/" size="lg">
              Book My Appointment
            </Button>
            <Button href="/contact/" variant="ghost" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

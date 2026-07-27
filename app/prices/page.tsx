import type { Metadata } from "next";
import { Button, Display, Italic, StatCounter, StatStrip } from "@/components/ui";
import { AuroraBlobs, Reveal } from "@/components/ui/motion";
import { JsonLd, buildPageGraph } from "@/components/JsonLd";
import { SITE, SOCIAL } from "@/lib/site";
import { getPageMeta, toMetadata } from "@/lib/pages";

const PAGE = getPageMeta("/prices/")!;
export const metadata: Metadata = toMetadata(PAGE);

const CTA_TICKER = [
  "Transparent Pricing",
  "Most Affordable Prices",
  "Monthly Billing Available",
  "100% Free Discovery Call",
  "Highest Quality Systems",
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
      { name: "Hair Transplant Costs" },
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
    <div className="mh-dark">
      <JsonLd data={graph} />

      {/* ============================================================
       * HERO — EyebrowTag + DisplayHeading (real page heading)
       * ============================================================ */}
      <section className="relative isolate overflow-hidden border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] pb-16 pt-32 md:pb-24 md:pt-40">
        <AuroraBlobs className="opacity-30" />
        <div className="mh-container relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mh-kicker justify-center">Prices</p>
              <Display as={2} size="hero" className="mt-5">
                Our transparent prices and <Italic>order details.</Italic>
              </Display>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                At ManHair we aim to offer the highest quality of hair systems at
                the industries most affordable prices. An essential part of our
                vision is that every guy should have the chance to afford and
                benefit from this life changing solution. If needed we can offer
                monthly billing to pay as you go to keep the costs more convenient.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
       * VALUE CARDS — StatCounter-style, grounded in real copy
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-20 md:py-28">
        <div className="mh-container">
          <StatStrip>
            <StatCounter
              label="Discovery Call"
              value="Free"
              description="Book a 100% free discovery call with one of our hair specialists."
            />
            <StatCounter
              label="Billing Available"
              value="Monthly"
              description="If needed we can offer monthly billing to pay as you go to keep the costs more convenient."
            />
            <StatCounter
              label="Most Affordable Prices"
              value="Top Quality"
              description="The highest quality of hair systems at the industries most affordable prices."
            />
          </StatStrip>
        </div>
      </section>

      {/* ============================================================
       * SCHEDULE A CALL — real H2 + copy + discovery-call CTA
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-20 md:py-28">
        <div className="mh-container">
          <div className="mh-price-panel grid gap-10 p-8 md:grid-cols-12 md:items-center md:p-14">
            <Reveal direction="right" className="md:col-span-8">
              <p className="mh-kicker">Next step</p>
              <Display as={2} size="xl" className="mt-4">
                Click below to <Italic>schedule a call.</Italic>
              </Display>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                Click the link below where you can book a 100% free discovery call
                with one of our hair specialists. We can determine together if we
                are a good fit for one another and if so review the next steps to
                booking an in person meeting to get your shiny new beautiful head
                of hair.
              </p>
            </Reveal>
            <Reveal direction="left" className="md:col-span-4">
              <Button href="/contact/" size="lg" block>
                YES Schedule my FREE Discovery Call
              </Button>
            </Reveal>
          </div>
        </div>
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

      <section className="border-t border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-16 md:py-20">
        <div className="mh-container text-center">
          <p className="mh-kicker justify-center">Ready when you are</p>
          <Display as={2} size="lg" className="mt-4">
            Book your <Italic>free consultation.</Italic>
          </Display>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/book-my-appointment/" size="lg">
              Book My Appointment
            </Button>
            <Button href="/payment-plans/" variant="ghost" size="lg">
              See Payment Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { Button, Display, Italic, StatCounter, StatStrip } from "@/components/ui";
import { AuroraBlobs, Reveal } from "@/components/ui/motion";
import { CherryWidget } from "@/components/CherryWidget";
import { JsonLd, buildPageGraph } from "@/components/JsonLd";
import { SITE, SOCIAL } from "@/lib/site";
import { getPageMeta, toMetadata } from "@/lib/pages";

const PAGE = getPageMeta("/cherry/")!;
export const metadata: Metadata = toMetadata(PAGE);

const CTA_TICKER = [
  "Treat Now, Pay Later",
  "60-Second Approval",
  "No Hard Credit Check",
  "Easy Monthly Payments",
  "Powered By Cherry",
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
      { name: "Treat Now & Pay Later!" },
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
       * HERO — EyebrowTag + DisplayHeading
       * ============================================================ */}
      <section className="relative isolate overflow-hidden border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] pb-16 pt-32 md:pb-24 md:pt-40">
        <AuroraBlobs className="opacity-30" />
        <div className="mh-container relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mh-kicker justify-center">Jacksonville, FL</p>
              <Display as={1} size="hero" className="mt-5">
                Treat now. <Italic>Pay later.</Italic>
              </Display>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                Cherry is a payment plan designed for health, beauty, and wellness
                procedures. Easy monthly payments, no hard credit check, 60-second
                approval.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
       * VALUE CARDS — StatCounter-style
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-20 md:py-28">
        <div className="mh-container">
          <StatStrip>
            <StatCounter
              label="Approval"
              value="60-Second"
              description="A fast, simple application right from your phone."
            />
            <StatCounter
              label="To Apply"
              value="No Hard Credit Check"
              description={"Checking your options won\u2019t affect your credit score."}
            />
            <StatCounter
              label="Payments"
              value="Easy Monthly"
              description="Spread the cost of your hair system into manageable monthly payments."
            />
          </StatStrip>
        </div>
      </section>

      {/* ============================================================
       * CHERRY FINANCING WIDGET — third-party embed (unchanged)
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-16 md:py-24">
        <div className="mh-container">
          <div className="rounded-[var(--mh-radius-md)] border border-[color:var(--mh-border-strong)] bg-white p-4 md:p-6">
            <CherryWidget
              slug="manhaironline"
              name="ManHair LLC"
              primaryColor="#00c37d"
              secondaryColor="#00c37d10"
              fontFamily="Open Sans"
            />
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
            <Button href="/prices/" variant="ghost" size="lg">
              See Prices
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

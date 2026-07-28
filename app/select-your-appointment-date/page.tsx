import type { Metadata } from "next";
import { Button, Display, Italic } from "@/components/ui";
import { AuroraBlobs, Reveal } from "@/components/ui/motion";
import { JsonLd, buildPageGraph } from "@/components/JsonLd";
import { SITE, SOCIAL } from "@/lib/site";
import { getPageMeta, toMetadata } from "@/lib/pages";

const PAGE = getPageMeta("/select-your-appointment-date/")!;
export const metadata: Metadata = toMetadata(PAGE);

const CTA_TICKER = [
  "Thanks For Your Interest",
  "We\u2019ll Reach Out Soon",
  "Book Now, Skip The Wait",
  "100% Free Consultation",
  "Orange County, CA",
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
      { name: "Select Your Appointment Date and Time" },
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
              <p className="mh-kicker justify-center">You&rsquo;re all set</p>
              <Display as={1} size="hero" className="mt-5">
                Thanks for your <Italic>interest!</Italic>
              </Display>
              <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold uppercase tracking-[0.1em] text-[color:var(--mh-copper-300)]">
                A member of our team will reach out soon.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                Don&rsquo;t want to wait? Schedule your appointment now with the
                calendar below.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
       * BOOKING CALENDAR — LeadConnector embed (unchanged logic)
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-10 md:py-24">
        <div className="mh-container">
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-[var(--mh-radius-md)] border border-[color:var(--mh-border-strong)] bg-[color:var(--mh-bg)] p-4 md:p-6">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/iNHkfgxNGS98XfGnaXIt"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: 720 }}
                scrolling="no"
                id="msgsndr-calendar"
                title="Select your appointment date and time"
              />
            </div>
          </Reveal>
        </div>
        <script async src="https://api.leadconnectorhq.com/js/embed.js" />
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

      <section className="border-t border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-8 md:py-20">
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

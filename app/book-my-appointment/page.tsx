import type { Metadata } from "next";
import { Button, Display, Italic } from "@/components/ui";
import { AuroraBlobs, Reveal, RevealGrid } from "@/components/ui/motion";
import { JsonLd, buildPageGraph } from "@/components/JsonLd";
import { CONTACT, SITE, SOCIAL } from "@/lib/site";
import { getPageMeta, toMetadata } from "@/lib/pages";

const PAGE = getPageMeta("/book-my-appointment/")!;
export const metadata: Metadata = toMetadata(PAGE);

const CALENDLY = "https://calendly.com/manhaironline";

const CTA_TICKER = [
  "Book A Discovery Call",
  "100% Free",
  "Jacksonville & Atlanta",
  "Mon\u2013Fri · 10:30\u20136:00",
  "We Come To You",
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
      { name: "Contact Man Hair Online" },
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
       * HERO — EyebrowTag + DisplayHeading (real page H1)
       * ============================================================ */}
      <section className="relative isolate overflow-hidden border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] pb-16 pt-32 md:pb-24 md:pt-40">
        <AuroraBlobs className="opacity-30" />
        <div className="mh-container relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mh-kicker justify-center">Book my appointment</p>
              <Display as={1} size="hero" className="mt-5">
                Choose a relevant and desired{" "}
                <Italic>time slot.</Italic>
              </Display>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
       * BOOKING CALENDAR — LeadConnector embed (unchanged logic)
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-16 md:py-24">
        <div className="mh-container">
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-[var(--mh-radius-md)] border border-[color:var(--mh-border-strong)] bg-[color:var(--mh-bg)] p-4 md:p-6">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/iNHkfgxNGS98XfGnaXIt"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: 720 }}
                scrolling="no"
                id="msgsndr-calendar"
                title="Choose a relevant and desired time slot"
              />
            </div>
          </Reveal>
        </div>
        <script async src="https://api.leadconnectorhq.com/js/embed.js" />
      </section>

      {/* ============================================================
       * HOURS + LOCATIONS — FeaturePanels
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-20 md:py-28">
        <div className="mh-container">
          <RevealGrid className="grid gap-4 md:grid-cols-3" gap={0.08}>
            <article className="mh-index-card">
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                Working Hours
              </p>
              <p className="font-display text-2xl text-[color:var(--mh-ink-950)]">
                Monday to Friday
              </p>
              <p className="text-[color:var(--mh-ink-800)]">10:30 AM &ndash; 6:00 PM</p>
              <p>
                <a
                  href={CONTACT.emailHref}
                  className="font-semibold text-[color:var(--mh-copper-300)] hover:underline"
                >
                  {CONTACT.email}
                </a>
              </p>
            </article>

            <article className="mh-index-card">
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                <span className="mh-pin" />
                Jacksonville, FL
              </p>
              <p className="font-display text-2xl text-[color:var(--mh-ink-950)]">
                ManHair Jacksonville
              </p>
              <p className="text-[color:var(--mh-ink-800)]">
                {CONTACT.jacksonville.streetLine1}
                <br />
                {CONTACT.jacksonville.streetLine2}
              </p>
              <p>
                <a
                  href={CONTACT.jacksonville.phoneHref}
                  className="font-semibold text-[color:var(--mh-copper-300)] hover:underline"
                >
                  {CONTACT.jacksonville.phone}
                </a>
              </p>
            </article>

            <article className="mh-index-card">
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                <span className="mh-pin" />
                Atlanta, GA
              </p>
              <p className="font-display text-2xl text-[color:var(--mh-ink-950)]">
                ManHair Atlanta
              </p>
              <p className="text-[color:var(--mh-ink-800)]">
                {CONTACT.atlanta.streetLine1}
                <br />
                {CONTACT.atlanta.streetLine2}
              </p>
              <p>
                <a
                  href={CONTACT.atlanta.phoneHref}
                  className="font-semibold text-[color:var(--mh-copper-300)] hover:underline"
                >
                  {CONTACT.atlanta.phone}
                </a>
              </p>
            </article>
          </RevealGrid>
        </div>
      </section>

      {/* ============================================================
       * SCHEDULE A CALL — Calendly CTA panel (real H2 + copy)
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-20 md:py-28">
        <div className="mh-container">
          <div className="mh-price-panel grid gap-10 p-8 md:grid-cols-12 md:items-center md:p-14">
            <Reveal direction="right" className="md:col-span-7">
              <p className="mh-kicker">Prefer a call?</p>
              <Display as={2} size="xl" className="mt-4">
                Schedule a <Italic>call.</Italic>
              </Display>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                We will call you at the exact scheduled time selected to discuss
                your hair loss solutions. This is 100% free and we&rsquo;re only
                here to help.
              </p>
            </Reveal>
            <Reveal direction="left" className="md:col-span-5">
              <div className="flex flex-col gap-3">
                <Button href={CALENDLY} external size="lg" block>
                  Book A Discovery Call On Our Calendar
                </Button>
                <Button href={CALENDLY} external variant="ghost" size="lg" block>
                  Click here to schedule a call
                </Button>
              </div>
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

      <section className="border-t border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-16 md:py-20">
        <div className="mh-container text-center">
          <p className="mh-kicker justify-center">Ready when you are</p>
          <Display as={2} size="lg" className="mt-4">
            Start with a <Italic>free consultation.</Italic>
          </Display>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/free-consultation/" size="lg">
              Free Consultation
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

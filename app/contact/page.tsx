import type { Metadata } from "next";
import { Button, Display, Italic } from "@/components/ui";
import { AuroraBlobs, Reveal, RevealGrid } from "@/components/ui/motion";
import { JsonLd, buildPageGraph } from "@/components/JsonLd";
import { SITE, SOCIAL, CONTACT } from "@/lib/site";
import { getPageMeta, toMetadata } from "@/lib/pages";

const PAGE = getPageMeta("/contact/")!;
export const metadata: Metadata = toMetadata(PAGE);

const CALENDLY = "https://calendly.com/manhaironline";

const LOCATIONS = [
  {
    name: "Man Hair – Atlanta, Georgia",
    streetLine1: CONTACT.atlanta.streetLine1,
    streetLine2: CONTACT.atlanta.streetLine2,
    phone: CONTACT.atlanta.phone,
    phoneHref: CONTACT.atlanta.phoneHref,
    booking:
      "https://api.leadconnectorhq.com/widget/bookings/inhkfgxngs98xfgnaxit-0e5652ed-a332-4ad5-b464-5c59d5ddb6d5",
    details: "/atlanta-georgia/",
    schedule:
      "https://api.leadconnectorhq.com/widget/bookings/wxn5qbpbwtfy1x2dpxa3-c7d315b3-8178-4202-974d-44cf85caf1bd",
    scheduleLabel: "Schedule a Call in Atlanta, GA",
  },
  {
    name: "Man Hair – Jacksonville, Florida",
    streetLine1: CONTACT.jacksonville.streetLine1,
    streetLine2: CONTACT.jacksonville.streetLine2,
    phone: CONTACT.jacksonville.phone,
    phoneHref: CONTACT.jacksonville.phoneHref,
    booking: "https://api.leadconnectorhq.com/widget/bookings/wxn5qbpbwtfy1x2dpxa3",
    details: "/jacksonville-florida/",
    schedule: "https://api.leadconnectorhq.com/widget/bookings/wxn5qbpbwtfy1x2dpxa3",
    scheduleLabel: "Schedule a Call in Jacksonville, FL",
  },
];

const CTA_TICKER = [
  "Jacksonville, FL",
  "Roswell, GA",
  "Mon–Fri 10:30 AM – 6:00 PM",
  "100% Free Discovery Call",
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
      { name: "Contact" },
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
              <p className="mh-kicker justify-center">Contact</p>
              <Display as={1} size="hero" className="mt-5">
                Find the location <Italic>nearest you.</Italic>
              </Display>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
       * LOCATIONS — NAP cards + booking / schedule (OutlineButton)
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-20 md:py-28">
        <div className="mh-container">
          <RevealGrid className="grid gap-6 md:grid-cols-2" gap={0.1}>
            {LOCATIONS.map((loc) => (
              <article key={loc.name} className="mh-price-panel flex flex-col gap-6 p-8 md:p-10">
                <div>
                  <p className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                    <span className="mh-pin" />
                    Find the location nearest you
                  </p>
                  <h2 className="mt-4 font-display text-2xl font-bold text-[color:var(--mh-ink-950)] md:text-3xl">
                    {loc.name}
                  </h2>
                  <address className="mt-4 not-italic leading-relaxed text-[color:var(--mh-ink-800)]">
                    {loc.streetLine1}
                    <br />
                    {loc.streetLine2}
                    <br />
                    <a
                      href={loc.phoneHref}
                      className="font-semibold text-[color:var(--mh-copper-300)] hover:underline"
                    >
                      {loc.phone}
                    </a>
                  </address>
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                  <Button href={loc.booking} external variant="ghost" size="md">
                    Book Appointment
                  </Button>
                  <Button href={loc.details} variant="ghost" size="md">
                    Salon Details
                  </Button>
                </div>
              </article>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* ============================================================
       * WORKING HOURS + LOCATIONS + CONTACT INFO
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-20 md:py-28">
        <div className="mh-container">
          <RevealGrid className="grid gap-4 md:grid-cols-3" gap={0.1}>
            <article className="mh-index-card">
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                Working Hours
              </p>
              <p className="font-display text-2xl text-[color:var(--mh-ink-950)]">
                Monday to Friday
              </p>
              <p className="text-[color:var(--mh-ink-800)]">10:30 AM &ndash; 6:00 PM</p>
              <a
                href={CONTACT.emailHref}
                className="font-semibold lowercase text-[color:var(--mh-copper-300)] hover:underline"
              >
                {CONTACT.email}
              </a>
            </article>

            <article className="mh-index-card">
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                <span className="mh-pin" />
                Jacksonville, FL
              </p>
              <p className="text-[color:var(--mh-ink-800)]">
                {CONTACT.jacksonville.streetLine1}
                <br />
                {CONTACT.jacksonville.streetLine2}
              </p>
              <a
                href={CONTACT.jacksonville.phoneHref}
                className="font-semibold text-[color:var(--mh-copper-300)] hover:underline"
              >
                {CONTACT.jacksonville.phone}
              </a>
            </article>

            <article className="mh-index-card">
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                <span className="mh-pin" />
                Roswell, GA
              </p>
              <p className="text-[color:var(--mh-ink-800)]">
                {CONTACT.atlanta.streetLine1}
                <br />
                {CONTACT.atlanta.streetLine2}
              </p>
              <a
                href={CONTACT.atlanta.phoneHref}
                className="font-semibold text-[color:var(--mh-copper-300)] hover:underline"
              >
                {CONTACT.atlanta.phone}
              </a>
            </article>
          </RevealGrid>
        </div>
      </section>

      {/* ============================================================
       * SCHEDULE A CALL — real copy + OutlineButton actions
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-20 md:py-28">
        <div className="mh-container">
          <div className="mh-price-panel grid gap-10 p-8 md:grid-cols-12 md:items-center md:p-14">
            <Reveal direction="right" className="md:col-span-7">
              <p className="mh-kicker">Book a discovery call on our calendar</p>
              <Display as={2} size="xl" className="mt-4">
                Schedule a <Italic>call.</Italic>
              </Display>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                We will call you at the exact scheduled time selected to discuss your
                hair loss solutions. This is 100% free and we&rsquo;re only here to
                help.
              </p>
            </Reveal>
            <Reveal direction="left" className="md:col-span-5">
              <div className="flex flex-col gap-3">
                <Button href={CALENDLY} external variant="ghost" size="lg" block>
                  Book a Discovery Call
                </Button>
                {LOCATIONS.map((loc) => (
                  <Button
                    key={loc.scheduleLabel}
                    href={loc.schedule}
                    external
                    variant="ghost"
                    size="lg"
                    block
                  >
                    {loc.scheduleLabel}
                  </Button>
                ))}
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

      <section className="border-t border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-16 md:py-20">
        <div className="mh-container text-center">
          <p className="mh-kicker justify-center">Ready when you are</p>
          <Display as={2} size="lg" className="mt-4">
            Book your free <Italic>consultation.</Italic>
          </Display>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/book-my-appointment/" size="lg">
              Book My Appointment
            </Button>
            <Button href="/free-consultation/" variant="ghost" size="lg">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

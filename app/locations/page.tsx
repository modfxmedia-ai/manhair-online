import type { Metadata } from "next";
import Image from "next/image";
import { Button, Display, Italic } from "@/components/ui";
import { AuroraBlobs, Reveal, RevealGrid } from "@/components/ui/motion";
import { JsonLd, buildPageGraph } from "@/components/JsonLd";
import { SITE, SOCIAL, CONTACT } from "@/lib/site";
import { getPageMeta, toMetadata } from "@/lib/pages";

const PAGE = getPageMeta("/locations/")!;
export const metadata: Metadata = toMetadata(PAGE);

const LOCATIONS = [
  {
    name: "Man Hair \u2013 Atlanta, Georgia",
    streetLine1: CONTACT.atlanta.streetLine1,
    streetLine2: CONTACT.atlanta.streetLine2,
    phone: "(678) 664-9493",
    phoneHref: "tel:678-664-9493",
    detailsHref: "/atlanta-georgia/",
    map: "https://maps.google.com/maps?q=1570%20Holcomb%20Bridge%20RD%20STE%20130-103&t=m&z=11&output=embed&iwloc=near",
  },
  {
    name: "Man Hair \u2013 Jacksonville, Florida",
    streetLine1: CONTACT.jacksonville.streetLine1,
    streetLine2: CONTACT.jacksonville.streetLine2,
    phone: "(904) 526-8500",
    phoneHref: "tel:1-904-526-8500",
    detailsHref: "/jacksonville-florida/",
    map: "https://maps.google.com/maps?q=1845%20Town%20Center%20Blvd%20Suite%20205A%2C%20Fleming%20Island%2C%20FL%2032003&t=m&z=11&output=embed&iwloc=near",
  },
];

const EXPERIENCE = [
  {
    title: "consultation",
    body: "Schedule a free consultation with a hair expert.",
    img: "/wp-content/uploads/2018/10/1-consult-mens-hair-replacement-min.png",
  },
  {
    title: "selection",
    body: "Selection process of the best hair for your lifestyle.",
    img: "/wp-content/uploads/2018/10/2-selection-mens-hair-replacement-min.png",
  },
  {
    title: "fitting",
    body: "Applying your new thick and beautiful manhair system.",
    img: "/wp-content/uploads/2018/10/3-fitting-mens-hair-system-min.png",
  },
  {
    title: "servicing",
    body: "We will handle the maintenance on your unit.",
    img: "/wp-content/uploads/2018/10/4-servicing-mens-hair-system-min.png",
  },
];

const CTA_TICKER = [
  "Jacksonville, FL",
  "Roswell, GA",
  "Mon\u2013Fri 10:30 AM \u2013 6:00 PM",
  "We Come To You",
  "NO COST Consultations",
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
      { name: "Locations" },
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
       * HERO — EyebrowTag + DisplayHeading
       * ============================================================ */}
      <section className="relative isolate overflow-hidden border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] pb-16 pt-16 md:pb-24 md:pt-40">
        <AuroraBlobs className="opacity-30" />
        <div className="mh-container relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mh-kicker justify-center">Locations</p>
              <Display as={1} size="hero" className="mt-5">
                Two studios. <Italic>One promise.</Italic>
              </Display>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                Serving men across Jacksonville, FL and Atlanta, GA with
                non-surgical hair replacement. Find the studio nearest you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
       * LOCATION CARDS — map embed + NAP + phone
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-12 md:py-28">
        <div className="mh-container">
          <RevealGrid className="grid gap-6 lg:grid-cols-2" gap={0.1}>
            {LOCATIONS.map((loc) => (
              <article
                key={loc.name}
                className="mh-price-panel flex flex-col overflow-hidden p-0"
              >
                <div className="aspect-[16/10] w-full overflow-hidden border-b border-[color:var(--mh-border)]">
                  <iframe
                    src={loc.map}
                    title={`${loc.streetLine1}, ${loc.streetLine2}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full grayscale-[0.35]"
                    style={{ border: 0 }}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-5 p-8 md:p-10">
                  <p className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                    <span className="mh-pin" />
                    Studio location
                  </p>
                  <h2 className="font-display text-2xl font-bold text-[color:var(--mh-ink-950)] md:text-3xl">
                    {loc.name}
                  </h2>
                  <address className="not-italic leading-relaxed text-[color:var(--mh-ink-800)]">
                    {loc.streetLine1}
                    <br />
                    {loc.streetLine2}
                  </address>
                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <Button href={loc.detailsHref} variant="ghost" size="md">
                      Contact Us
                    </Button>
                    <a
                      href={loc.phoneHref}
                      className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--mh-copper-300)] hover:underline"
                    >
                      Or Call {loc.phone}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* ============================================================
       * THE MANHAIR EXPERIENCE — FeaturePanel rows
       * ============================================================ */}
      <section className="relative isolate overflow-hidden border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-12 md:py-28">
        <AuroraBlobs className="opacity-[0.22]" />
        <div className="mh-container relative z-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mh-kicker justify-center">The ManHair experience</p>
              <Display as={2} size="xl" className="mt-4">
                We keep it <Italic>simple.</Italic>
              </Display>
            </div>
          </Reveal>
          <RevealGrid
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            gap={0.08}
          >
            {EXPERIENCE.map((step, i) => (
              <a
                key={step.title}
                href="/how-it-works/"
                className="mh-index-card group flex flex-col"
              >
                <span className="mh-index-num">{`0${i + 1}`}</span>
                <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--mh-border)] bg-[color:var(--mh-surface-elevated)] p-3">
                  <Image
                    src={step.img}
                    alt="mens hair restoration"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold capitalize text-[color:var(--mh-ink-950)]">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-[color:var(--mh-ink-800)]">
                  {step.body}
                </p>
              </a>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* ============================================================
       * WORKING HOURS + LOCATIONS — info cards
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-12 md:py-28">
        <div className="mh-container">
          <RevealGrid className="grid gap-4 md:grid-cols-3" gap={0.1}>
            <article className="mh-index-card">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                Working Hours
              </p>
              <p className="mt-3 font-display text-2xl text-[color:var(--mh-ink-950)]">
                Monday to Friday
              </p>
              <p className="text-[color:var(--mh-ink-800)]">
                10:30 AM &ndash; 6:00 PM
              </p>
            </article>

            <article className="mh-index-card">
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                <span className="mh-pin" />
                Jacksonville, FL
              </p>
              <p className="mt-3 text-[color:var(--mh-ink-800)]">
                {CONTACT.jacksonville.streetLine1}
                <br />
                {CONTACT.jacksonville.streetLine2}
              </p>
              <a
                href={CONTACT.jacksonville.phoneHref}
                className="mt-2 inline-block font-semibold text-[color:var(--mh-copper-300)] hover:underline"
              >
                {CONTACT.jacksonville.phone}
              </a>
            </article>

            <article className="mh-index-card">
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                <span className="mh-pin" />
                Roswell, GA
              </p>
              <p className="mt-3 text-[color:var(--mh-ink-800)]">
                {CONTACT.atlanta.streetLine1}
                <br />
                {CONTACT.atlanta.streetLine2}
              </p>
              <a
                href={CONTACT.atlanta.phoneHref}
                className="mt-2 inline-block font-semibold text-[color:var(--mh-copper-300)] hover:underline"
              >
                {CONTACT.atlanta.phone}
              </a>
            </article>
          </RevealGrid>
        </div>
      </section>

      {/* ============================================================
       * CTA — "we come to you" + Book My Appointment
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-12 md:py-28">
        <div className="mh-container">
          <div className="mh-cinema mx-auto max-w-4xl p-10 text-center md:p-16">
            <p className="mh-kicker justify-center">Let&rsquo;s work together</p>
            <Display as={2} size="xl" className="mt-4">
              Find the perfect <Italic>hairstyle for you.</Italic>
            </Display>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
              We come to you in the privacy of your own home and do our initial
              consultation there. There is no need to feel afraid or embarrassed
              &ndash; we are here for you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/book-my-appointment/" size="lg">
                Book My Appointment
              </Button>
              <Button href="/free-consultation/" variant="ghost" size="lg">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
       * TICKER BAND
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
    </div>
  );
}

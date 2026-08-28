import type { Metadata } from "next";
import Link from "next/link";
import { Button, Card, Display, Italic, SectionLabel } from "@/components/ui";
import { AuroraBlobs, Reveal, RevealGrid } from "@/components/ui/motion";
import { JsonLd, buildPageGraph, buildServiceSchema } from "@/components/JsonLd";
import {
  ArrowRightIcon,
  CreditCardIcon,
  HelpCircleIcon,
  ScissorsIcon,
  SparklesIcon,
} from "@/components/icons";
import { SITE, SOCIAL } from "@/lib/site";
import { SERVICES, getService } from "@/lib/seo/services";
import { TIER1_CITIES } from "@/lib/seo/cities";

const PATH = "/mens-hair-replacement-systems/";
const PILLAR = getService("mens-hair-replacement-systems")!;
const OTHER_SERVICES = SERVICES.filter((s) => s.slug !== PILLAR.slug);
const NEARBY_CITIES = TIER1_CITIES.slice(0, 8);

const TITLE = "Men's Hair Replacement Systems | Orange, CA | ManHair";
const DESCRIPTION =
  "Custom men's hair replacement systems, real human hair, fitted and maintained at our Orange, CA studio. Start with a free virtual consultation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.origin}${PATH}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.origin}${PATH}`,
    siteName: SITE.siteName,
    locale: SITE.locale,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  const graph = buildPageGraph({
    origin: SITE.origin,
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    breadcrumbs: [{ name: "Home", path: "/" }, { name: PILLAR.name }],
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

  const serviceSchema = buildServiceSchema({
    origin: SITE.origin,
    path: PATH,
    name: PILLAR.name,
    description: PILLAR.whatItIs,
    providerName: SITE.orgName,
  });

  return (
    <div className="mh-light">
      <JsonLd data={[graph, serviceSchema]} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] pb-16 pt-16 md:pb-24 md:pt-40">
        <AuroraBlobs className="opacity-30" />
        <div className="mh-container relative z-10">
          <Reveal className="max-w-3xl">
            <p className="mh-kicker">{PILLAR.primaryKeyword}</p>
            <Display as={1} size="hero" className="mt-5">
              Men&rsquo;s Hair Replacement <Italic>Systems</Italic>
            </Display>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
              {PILLAR.whatItIs}
            </p>
            <p className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-xs text-[color:var(--mh-ink-600)]">
              <span className="font-semibold uppercase tracking-[0.1em] text-[color:var(--mh-copper-700)]">
                Also searched as:
              </span>
              {PILLAR.relatedSearches.join(" \u00b7 ")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/consultation/" size="lg">
                Free Virtual Consultation
              </Button>
              <Button href="/results/" variant="ghost" size="lg">
                See Results
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-16 md:py-24">
        <div className="mh-container max-w-3xl">
          <Reveal>
            <SectionLabel>Overview</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              How it <Italic>works</Italic>
            </Display>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--mh-ink-700)]">
              {PILLAR.overview[0]}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--mh-ink-700)]">
              {PILLAR.overview[1]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHO IT'S FOR + MATERIALS */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-16 md:py-24">
        <div className="mh-container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionLabel>Who It's For</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              Is this <Italic>right</Italic> for you?
            </Display>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--mh-ink-700)]">
              {PILLAR.whoItsFor}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <SectionLabel>Materials & Options</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              Built to your <Italic>spec</Italic>
            </Display>
            <ul className="mt-5 space-y-3">
              {PILLAR.materials.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-3 text-base text-[color:var(--mh-ink-700)]"
                >
                  <ScissorsIcon className="mt-1 h-4 w-4 shrink-0 text-[color:var(--mh-copper-700)]" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-16 md:py-24">
        <div className="mh-container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>Why This Approach</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              What you <Italic>get</Italic>
            </Display>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <ul className="space-y-4">
              {PILLAR.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-base text-[color:var(--mh-ink-700)]"
                >
                  <SparklesIcon className="mt-1 h-4 w-4 shrink-0 text-[color:var(--mh-copper-700)]" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CANDIDACY */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-16 md:py-24">
        <div className="mh-container max-w-3xl">
          <Reveal>
            <SectionLabel>Is This You?</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              Good signs you&rsquo;re a <Italic>fit</Italic>
            </Display>
            <ul className="mt-6 space-y-3">
              {PILLAR.signs.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-base text-[color:var(--mh-ink-700)]"
                >
                  <ArrowRightIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-[color:var(--mh-copper-700)]" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CARE & MAINTENANCE */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-16 md:py-24">
        <div className="mh-container max-w-3xl">
          <Reveal>
            <SectionLabel>Care & Maintenance</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              Keeping it looking like <Italic>day one</Italic>
            </Display>
            <ul className="mt-6 space-y-3">
              {PILLAR.careTips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 text-base text-[color:var(--mh-ink-700)]"
                >
                  <ScissorsIcon className="mt-1 h-4 w-4 shrink-0 text-[color:var(--mh-copper-700)]" />
                  {tip}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-[color:var(--mh-ink-700)]">
              Need a hand between fittings?{" "}
              <Link href="/services/hair-system-maintenance/" className="underline">
                See our maintenance & reattachment service
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ (visible content only — no FAQPage schema; reserved for /faq/) */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-16 md:py-24">
        <div className="mh-container max-w-3xl">
          <Reveal>
            <SectionLabel>Common Questions</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              {PILLAR.name} <Italic>FAQ</Italic>
            </Display>
          </Reveal>
          <div className="mt-10 space-y-6">
            {PILLAR.faqs.map((f, i) => (
              <Reveal key={f.question} delay={i * 0.05}>
                <Card padding="md" accent="left">
                  <div className="flex items-start gap-3">
                    <HelpCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--mh-copper-700)]" />
                    <div>
                      <p className="font-sans text-base font-semibold text-[color:var(--mh-ink-900)]">
                        {f.question}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[color:var(--mh-ink-700)]">
                        {f.answer}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVING ORANGE COUNTY — internal links to city x service combo pages */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-16 md:py-24">
        <div className="mh-container">
          <Reveal>
            <SectionLabel>Serving Orange County</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              Hair replacement <Italic>near you</Italic>
            </Display>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--mh-ink-700)]">
              Every fitting happens at our Orange, CA studio, but we serve
              clients from these communities and beyond. Start with a free
              virtual consultation from wherever you are.
            </p>
          </Reveal>
          <RevealGrid className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.05}>
            {NEARBY_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}/${PILLAR.slug}/`}
                className="mh-index-card !gap-2 !p-5"
              >
                <p className="font-display text-base font-semibold text-[color:var(--mh-ink-950)]">
                  {city.name}
                </p>
                <p className="flex items-center gap-1 text-sm text-[color:var(--mh-copper-700)]">
                  {PILLAR.name} <ArrowRightIcon className="h-3 w-3" />
                </p>
              </Link>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-16 md:py-24">
        <div className="mh-container">
          <Reveal>
            <SectionLabel>Explore By Term</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              Whatever you call it, we <Italic>build it</Italic>
            </Display>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--mh-ink-700)]">
              Toupee, hairpiece, unit, system, wig, non-surgical replacement:
              same craftsmanship, different vocabulary. Find the page that
              matches how you&rsquo;ve been searching.
            </p>
          </Reveal>
          <RevealGrid className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OTHER_SERVICES.map((s) => (
              <Card key={s.slug} href={`/services/${s.slug}/`} padding="md">
                <p className="font-sans text-base font-semibold text-[color:var(--mh-ink-900)]">
                  {s.name}
                </p>
                <p className="mt-2 flex items-center gap-1 text-sm text-[color:var(--mh-copper-700)]">
                  Learn more <ArrowRightIcon className="h-3 w-3" />
                </p>
              </Card>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* FINANCING */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-16 md:py-24">
        <div className="mh-container max-w-3xl text-center">
          <Reveal>
            <CreditCardIcon className="mx-auto h-8 w-8 text-[color:var(--mh-copper-700)]" />
            <Display as={2} size="lg" className="mt-4">
              Flexible <Italic>payment plans</Italic>
            </Display>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--mh-ink-700)]">
              We offer financing through Cherry so you can start today and pay
              over time.
            </p>
            <div className="mt-6">
              <Button href="/payment-plans/" variant="ghost" size="md">
                See Payment Plans
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--mh-bg)] py-16 md:py-24">
        <div className="mh-container max-w-2xl text-center">
          <Reveal>
            <Display as={2} size="lg">
              Start with a <Italic>free virtual consultation</Italic>
            </Display>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--mh-ink-700)]">
              No cost, no pressure. We&rsquo;ll walk through your options from
              anywhere, then schedule your fitting at our Orange, CA studio.
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

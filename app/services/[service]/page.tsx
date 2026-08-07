import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Card, Display, Italic, SectionLabel } from "@/components/ui";
import { AuroraBlobs, Reveal, RevealGrid } from "@/components/ui/motion";
import { JsonLd, buildPageGraph, buildServiceSchema } from "@/components/JsonLd";
import { ArrowRightIcon, CreditCardIcon, ScissorsIcon } from "@/components/icons";
import { SITE, SOCIAL } from "@/lib/site";
import { SERVICES, getService } from "@/lib/seo/services";

// The pillar service ("Men's Hair Replacement Systems") lives at the
// top-level route `/mens-hair-replacement-systems/`, not under
// `/services/`. This dynamic route only covers the other 7.
const ROUTED_SERVICES = SERVICES.filter((s) => s.slug !== "mens-hair-replacement-systems");

export const dynamicParams = false;

export function generateStaticParams() {
  return ROUTED_SERVICES.map((s) => ({ service: s.slug }));
}

type Params = { service: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service || slug === "mens-hair-replacement-systems") return {};

  const title = `${service.name} | Orange, CA | ManHair`;
  const description = `${service.whatItIs} Serving Orange County from our Orange, CA studio. Start with a free virtual consultation.`;
  const path = `/services/${service.slug}/`;

  return {
    metadataBase: new URL(SITE.origin),
    title,
    description,
    alternates: { canonical: `${SITE.origin}${path}` },
    openGraph: {
      title,
      description,
      url: `${SITE.origin}${path}`,
      siteName: SITE.siteName,
      locale: SITE.locale,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service || slug === "mens-hair-replacement-systems") notFound();

  const path = `/services/${service.slug}/`;
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  const graph = buildPageGraph({
    origin: SITE.origin,
    path,
    title: `${service.name} | ManHair`,
    description: service.whatItIs,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Men's Hair Replacement Systems", path: "/mens-hair-replacement-systems/" },
      { name: service.name },
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

  const serviceSchema = buildServiceSchema({
    origin: SITE.origin,
    path,
    name: service.name,
    description: service.whatItIs,
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
            <p className="mh-kicker">{service.primaryKeyword}</p>
            <Display as={1} size="hero" className="mt-5">
              {service.name} in <Italic>Orange County</Italic>
            </Display>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
              {service.whatItIs}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/consultation/" size="lg">
                Free Virtual Consultation
              </Button>
              <Button href="/mens-hair-replacement-systems/" variant="ghost" size="lg">
                All Services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-16 md:py-24">
        <div className="mh-container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionLabel>Who It's For</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              Is this <Italic>right</Italic> for you?
            </Display>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--mh-ink-700)]">
              {service.whoItsFor}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <SectionLabel>Materials & Options</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              Built to your <Italic>spec</Italic>
            </Display>
            <ul className="mt-5 space-y-3">
              {service.materials.map((m) => (
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

      {/* COMPARISON */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-16 md:py-24">
        <div className="mh-container max-w-3xl">
          <Reveal>
            <SectionLabel>How This Compares</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              Not sure this is the <Italic>right</Italic> term?
            </Display>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--mh-ink-700)]">
              {service.comparison}
            </p>
          </Reveal>
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
              over time. See our{" "}
              <Link href="/payment-plans/" className="underline">
                payment plans
              </Link>{" "}
              for details.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-16 md:py-24">
        <div className="mh-container">
          <Reveal>
            <SectionLabel>Explore More</SectionLabel>
            <Display as={2} size="lg" className="mt-3">
              Other <Italic>services</Italic>
            </Display>
          </Reveal>
          <RevealGrid className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => (
              <Card
                key={s.slug}
                href={
                  s.slug === "mens-hair-replacement-systems"
                    ? "/mens-hair-replacement-systems/"
                    : `/services/${s.slug}/`
                }
                padding="md"
              >
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

      {/* CTA */}
      <section className="bg-[color:var(--mh-surface)] py-16 md:py-24">
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

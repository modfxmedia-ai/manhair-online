import type { Metadata } from "next";
import { Display, Italic, SectionLabel } from "@/components/ui";
import { AuroraBlobs, Reveal } from "@/components/ui/motion";
import { JsonLd, buildPageGraph } from "@/components/JsonLd";
import { ClockIcon, MailIcon, PhoneIcon, SparklesIcon } from "@/components/icons";
import BookingEmbed from "@/components/BookingEmbed";
import { CONTACT, SITE, SOCIAL } from "@/lib/site";
import { getPageMeta, toMetadata } from "@/lib/pages";

const PAGE = getPageMeta("/booking/")!;
export const metadata: Metadata = toMetadata(PAGE);

const STEPS = [
  {
    n: "01",
    title: "Pick a time",
    body: "Choose a slot that works. The call is free and from anywhere.",
  },
  {
    n: "02",
    title: "Tell us your goals",
    body: "Hairline, density, lifestyle. We listen, then map a system to you.",
  },
  {
    n: "03",
    title: "Come in when ready",
    body: "Fitting and cut-in happen at our Orange, CA studio — one visit.",
  },
];

export default function Page() {
  const graph = buildPageGraph({
    origin: SITE.origin,
    path: PAGE.path,
    title: PAGE.title,
    description: PAGE.description,
    image: PAGE.og.image,
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Book a Consultation" }],
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

      <section className="relative isolate overflow-hidden border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] pb-10 pt-16 md:pb-16 md:pt-36">
        <AuroraBlobs className="opacity-30" />
        <div className="mh-container relative z-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mh-kicker justify-center">Free virtual consultation</p>
              <Display as={1} size="hero" className="mt-4 md:mt-5">
                Pick a time. We&rsquo;ll take it from <Italic>there.</Italic>
              </Display>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[color:var(--mh-ink-800)] md:mt-6 md:text-lg">
                No cost, no pressure. Start from your phone or laptop, then
                visit our Orange, CA studio when you&rsquo;re ready for a
                fitting.
              </p>
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 md:mt-8">
                {["Free", "From anywhere", "15–20 minutes"].map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--mh-ink-800)]"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-8 md:py-16">
        <div className="mh-container">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="order-2 space-y-6 lg:order-1 lg:col-span-4">
              <Reveal>
                <SectionLabel>What to expect</SectionLabel>
                <Display as={2} size="md" className="mt-3">
                  Three steps to a <Italic>private</Italic> consult
                </Display>
              </Reveal>
              <ol className="space-y-4">
                {STEPS.map((s) => (
                  <li
                    key={s.n}
                    className="rounded-2xl border border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] p-4 md:p-5"
                  >
                    <p className="font-mono text-[0.68rem] tracking-[0.14em] text-[color:var(--mh-copper-700)]">
                      {s.n}
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold text-[color:var(--mh-ink-950)]">
                      {s.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--mh-ink-700)]">
                      {s.body}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="rounded-2xl border border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] p-5">
                <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--mh-copper-700)]">
                  <SparklesIcon size={14} />
                  Prefer to call?
                </p>
                <a
                  href={CONTACT.studio.phoneHref}
                  className="mt-3 flex items-center gap-2 font-display text-2xl font-semibold text-[color:var(--mh-ink-950)] hover:text-[color:var(--mh-copper-700)]"
                >
                  <PhoneIcon size={18} />
                  {CONTACT.studio.phone}
                </a>
                <p className="mt-2 flex items-center gap-2 text-sm text-[color:var(--mh-ink-700)]">
                  <ClockIcon size={14} />
                  {CONTACT.hoursShort}
                </p>
                <a
                  href={CONTACT.emailHref}
                  className="mt-2 flex items-center gap-2 text-sm text-[color:var(--mh-ink-800)] underline-offset-4 hover:text-[color:var(--mh-copper-700)] hover:underline"
                >
                  <MailIcon size={14} />
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-8">
              <div className="rounded-[1.25rem] bg-white shadow-[0_24px_64px_-24px_rgba(26,19,14,0.28)] ring-1 ring-[color:var(--mh-border)] md:rounded-[1.5rem]">
                <div
                  aria-hidden="true"
                  className="h-1 w-full bg-gradient-to-r from-[color:var(--mh-red-600)] via-[color:var(--mh-copper-500)] to-[color:var(--mh-copper-300)]"
                />
                <div className="border-b border-[color:var(--mh-border)] px-4 py-4 text-center md:px-6 md:py-5">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--mh-copper-700)]">
                    ManHair calendar
                  </p>
                  <h2 className="mt-1 font-display text-xl font-semibold text-[color:var(--mh-ink-950)] md:text-2xl">
                    Select a day and time
                  </h2>
                </div>
                <BookingEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Button,
  Display,
  Field,
  Input,
  Italic,
  Rule,
} from "@/components/ui";
import {
  AuroraBlobs,
  BeforeAfterCard,
  CountUp,
  ParallaxY,
  Reveal,
  RevealGrid,
  SplitLines,
} from "@/components/ui/motion";
import { JsonLd, buildPageGraph } from "@/components/JsonLd";
import { CONTACT, SITE, SOCIAL } from "@/lib/site";
import { getPageMeta, toMetadata } from "@/lib/pages";
import { POSTS } from "@/lib/posts";

const PAGE = getPageMeta("/")!;
export const metadata: Metadata = toMetadata(PAGE);

/* ------------------------------------------------------------------
 * Home — dark editorial redesign (UNBRKN-inspired layout).
 *
 * The section flow mirrors the reference: a cinematic photo hero
 * with a mono "//" kicker + giant display headline + copper accent
 * underline, a scrolling ticker, a big 4-stat row, an editorial
 * two-column "standard" block with a numbered list, numbered
 * capability cards, a "why" grid, image-backed program cards, a
 * founder-style pull-quote, a client grid, an image + checklist
 * process split, a founding-offer pricing panel, FAQ + locations,
 * a blog teaser, and a final CTA + newsletter.
 *
 * Colour: the whole page body is wrapped in `.mh-dark`, which
 * inverts the warm ink ladder to a near-black canvas with cream
 * text while keeping the copper/gold accent. All verbatim SEO copy
 * from the live site is preserved. Motion is CSS-first and every
 * long-running keyframe respects `prefers-reduced-motion`.
 * ------------------------------------------------------------------ */

// Local hero + showcase photography.
const IMG_HERO = "/images/homepage-images/unnamed.jpg";
const IMG_STYLE_A = "/images/homepage-images/61N7r4BnlfL._AC_UF1000,1000_QL80_.jpg";
const IMG_GALLERY = "/images/homepage-images/c625fee2bb080f5336760df6c118f9b0.jpg";
const IMG_CLINIC = "/images/homepage-images/the-london-hair-clinic-17.jpg";
const IMG_HAIRLINE = "/images/homepage-images/hairline-hair-systems-before-and-after-new-times-hair.jpg";

// Seven paired before/after client photos.
const BEFORE_AFTER = [
  { src: "/images/before-after/11.jpg",          caption: "Density restored, hairline sharpened.", alt: "Client before and after — thinning crown to full styled hair" },
  { src: "/images/before-after/6.jpg",           caption: "Style rewritten from bald to defined.",  alt: "Client before and after — bald crown to textured fade" },
  { src: "/images/before-after/8.jpg",           caption: "Fullness returned to the frontal zone.", alt: "Client before and after — front thinning to full hair" },
  { src: "/images/before-after/12.jpg",          caption: "Shape restored, confidence returned.",   alt: "Client before and after — cropped top to sculpted quiff" },
  { src: "/images/before-after/IMG_2935.jpg",    caption: "Fresh volume, natural styling.",         alt: "Client before and after — thinning to full styled hair" },
  { src: "/images/before-after/images (2).jpeg", caption: "Coverage across the crown.",             alt: "Client before and after — receding to full crown coverage" },
  { src: "/images/before-after/images (3).jpeg", caption: "Complete transformation.",               alt: "Client before and after — bald to fully restored hair" },
];

// Scrolling ticker — trust signals paired station-style.
const TICKER = [
  { k: "Real Human Hair", v: "100%" },
  { k: "Custom Ordered", v: "Bespoke" },
  { k: "Undetectable Fit", v: "Seamless" },
  { k: "Free Consultation", v: "In-home" },
  { k: "No Surgery", v: "Non-invasive" },
  { k: "Established", v: "2014" },
  { k: "Studios", v: "JAX · ATL" },
];

// Big stat row.
const STATS = [
  { to: 10, suffix: "+", key: "Years of practice", sub: "in the hair-loss industry" },
  { to: 200, suffix: "+", key: "Men transformed", sub: "across FL & GA" },
  { to: 100, suffix: "%", key: "Real human hair", sub: "never synthetic" },
  { to: 2, suffix: "", key: "Studios", sub: "Jacksonville · Atlanta" },
];

// "The standard" — numbered principles.
const PRINCIPLES = [
  { n: "01", t: "Custom-matched to you" },
  { n: "02", t: "100% real human hair" },
  { n: "03", t: "Undetectable, natural finish" },
  { n: "04", t: "Lifetime one-on-one servicing" },
];

// "The system" — capability cards (verbatim bodies).
const FEATURES = [
  { n: "01", title: "Real Human Hair", body: "Custom ordered to match your color, density, and hairline exactly — 100% real hair, never synthetic." },
  { n: "02", title: "Undetectable finish.", body: "Get the realistic and totally undetectable look you've always wanted. No one will ever know." },
  { n: "03", title: "Sleep with hair on.", body: "Wake up with a full head of hair. No removal, no fuss." },
  { n: "04", title: "Shower with hair.", body: "Shampoo and condition your hair system like it were your own." },
  { n: "05", title: "Work out & be active.", body: "Sweat and physical activity are no problem with the right system." },
];

// "Why ManHair" — four reasons (first two verbatim).
const WHY = [
  { n: "01", title: "Free consultation", body: "We come to you in the privacy of your own home — or meet at either studio. No cost, no pressure, just a real conversation about your options." },
  { n: "02", title: "1-on-1 approach", body: "Personal, one-on-one support from your first consult to lifetime servicing — the exact opposite of what you get at the big chains." },
  { n: "03", title: "No surgery", body: "A non-surgical system fitted around your existing hair — zero procedures, zero downtime, zero scalpel." },
  { n: "04", title: "Every guy welcome", body: "Full head of hair, thinning, or bald? We cover it all — no matter the hair type, no matter where you're starting." },
];

// "The work" — three image-backed programs.
const PROGRAMS = [
  { kicker: "Custom", title: "Real Human Hair Systems", body: "Custom ordered and matched to your color, density, and hairline exactly, then hand-built for the way you live.", img: IMG_STYLE_A, alt: "Real human hair system detail" },
  { kicker: "Seamless", title: "Undetectable Fit", body: "Applied so it moves, washes, and behaves like your own hair — natural under any lighting, so no one will ever know.", img: IMG_HAIRLINE, alt: "Hairline hair system, before and after" },
  { kicker: "For life", title: "Lifetime Servicing", body: "We handle the ongoing maintenance on your unit so it always looks fresh — you just show up and look your best.", img: IMG_CLINIC, alt: "ManHair studio — men's hair replacement consultation" },
];

const PROCESS = [
  { step: "01", title: "Consultation", body: "Schedule a free consultation with a hair expert — in-home or in-studio, judgment-free." },
  { step: "02", title: "Selection",    body: "Selection process of the best hair for your lifestyle, matched to your color and density." },
  { step: "03", title: "Fitting",      body: "Applying your new thick and beautiful ManHair system, styled to your face." },
  { step: "04", title: "Servicing",    body: "We will handle the ongoing maintenance on your unit so it always looks fresh." },
];

const TESTIMONIALS = [
  {
    name: "Greg",
    photo: "/wp-content/uploads/2018/08/greg-mens-hair-replacement-testimony.jpg",
    quote:
      "I have been wearing hair systems for over 20 years and this is the best quality and service I have received without question I would recommend to everyone I know suffering with hair loss.",
  },
  {
    name: "Nick",
    photo: "/wp-content/uploads/2018/08/nick-hair-replacement-system-testimony.jpg",
    quote:
      "I have rocked a shaved head now for over 5 years and was sick of how I looked in the mirror and decided to make a change. Thank you Manhair for giving my confidence a major boost!",
  },
  {
    name: "Pam",
    photo: "/wp-content/uploads/2018/08/pam-hair-system-testimony-150x150.jpg",
    quote:
      "My husband was always thinning at an early age and then eventually decided to shave his head. I wasn't thrilled with the chrome dome and recommended Manhair to him and now he looks 20 years younger we are both so happy!",
  },
  {
    name: "William",
    photo: "/wp-content/uploads/2018/08/bill-hair-system-testimony.jpg",
    quote:
      "My entire family starting balding at very young age. We all decided to take the plunge to get new hair together and we are all so pleased with the end results thank you.",
  },
];

const FAQS = [
  {
    q: "Is a hair system the same as a wig or toupee?",
    a: "Our modern hair systems are custom-fit, made from 100% real human hair, and applied so they move, wash, and behave like your own hair — nothing like the wigs of the past.",
  },
  {
    q: "Will people be able to tell I'm wearing one?",
    a: "Undetectability is the entire point. We match your hair color, density, and hairline so it looks natural under any lighting.",
  },
  {
    q: "How long does a system last and what maintenance is required?",
    a: "With regular servicing at our studios, a single system typically lasts several months. We handle all the maintenance for you.",
  },
  {
    q: "Do I have to shave my head?",
    a: "Not at all. Systems are fitted around your existing hair — we work with what's already there.",
  },
];

const RECENT_POSTS = POSTS.slice(0, 3);

export default function HomePage() {
  const graph = buildPageGraph({
    origin: SITE.origin,
    path: "/",
    title: PAGE.title,
    description: PAGE.description,
    image: `${SITE.origin}/wp-content/uploads/2022/10/unnamed.jpg`,
    imageWidth: 886,
    imageHeight: 886,
    imageCaption: "Before and after",
    breadcrumbs: [{ name: "Home" }],
    datePublished: "2017-09-15T09:49:11+00:00",
    dateModified: "2025-07-28T19:14:15+00:00",
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
       * 1. HERO — cinematic photo + giant display headline
       * ============================================================ */}
      <section className="mh-hero-cine">
        <div className="mh-hero-cine-media">
          <video
            className="mh-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={IMG_HERO}
            aria-hidden="true"
          >
            <source src="/videos/4178139-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mh-container relative z-[2] w-full pb-14 pt-32 md:pb-24 md:pt-40">
          <Reveal direction="up" duration={0.6}>
            <p className="mh-kicker">
              Custom men&rsquo;s hair replacement &middot; Jacksonville &amp; Atlanta
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.1} duration={0.7}>
            <h1 className="mh-hero-word mt-6">
              Real human hair.
              <span className="mh-hero-word-accent">Made just for you.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.28}>
            <span aria-hidden="true" className="mh-hero-underline mt-9" />
          </Reveal>

          <Reveal direction="up" delay={0.36}>
            <h2 className="mt-9 max-w-2xl font-display text-xl font-light leading-snug text-[color:var(--mh-ink-900)] md:text-2xl">
              Custom men&rsquo;s{" "}
              <span className="font-semibold text-[color:var(--mh-ink-950)]">
                hair replacement systems
              </span>{" "}
              in{" "}
              <span className="text-[color:var(--mh-copper-300)]">
                Jacksonville, FL &amp; Atlanta, GA.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[color:var(--mh-ink-800)] md:text-lg">
              Our main focus is giving you the perfect hair replacement system
              allowing you to regain your confidence, and look your absolute best.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/contact/" size="lg">
                Book an Appointment
              </Button>
              <Button href="/how-it-works/" variant="ghost" size="lg">
                How It Works
              </Button>
            </div>
          </Reveal>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--mh-border)] pt-6">
            <p className="mh-scroll-tag">Scroll_to_transform</p>
            <div className="flex items-center gap-3">
              <span className="mh-avatar-stack">
                {[TESTIMONIALS[0], TESTIMONIALS[1], TESTIMONIALS[3]].map((t) => (
                  <span key={t.name} className="relative block h-8 w-8">
                    <Image src={t.photo} alt="" fill sizes="32px" className="object-cover" />
                  </span>
                ))}
                <span className="relative flex h-8 w-8 items-center justify-center bg-[color:var(--mh-copper-500)] font-display text-[0.6rem] font-bold text-[color:var(--mh-on-accent)]">
                  +200
                </span>
              </span>
              <div>
                <p className="text-[color:var(--mh-copper-300)]" aria-label="Rated 5.0 out of 5">
                  ★★★★★
                </p>
                <p className="text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.2em] text-[color:var(--mh-ink-700)]">
                  Trusted by 200+ men across FL &amp; GA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
       * 2. TICKER — scrolling trust signals
       * ============================================================ */}
      <section aria-hidden="true" className="mh-ticker">
        <div className="mh-marquee">
          <div className="mh-marquee-track" style={{ ["--mh-marquee-duration" as string]: "34s" } as React.CSSProperties}>
            {[0, 1].map((dup) => (
              <div key={dup} className="mh-marquee-group">
                {TICKER.map((item) => (
                  <span key={item.k + dup} className="inline-flex items-center gap-6">
                    <span className="mh-ticker-item">
                      <span>{item.k}</span>
                      <span>{item.v}</span>
                    </span>
                    <span className="mh-ticker-star">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
       * 3. STAT ROW — four big counters
       * ============================================================ */}
      <section className="bg-[color:var(--mh-bg)]">
        <div className="mh-container py-16 md:py-20">
          <RevealGrid className="mh-statrow" gap={0.1}>
            {STATS.map((s) => (
              <div key={s.key} className="mh-stat-cell">
                <p className="mh-stat-num">
                  <CountUp to={s.to} suffix={s.suffix} />
                </p>
                <p className="mh-stat-key">{s.key}</p>
                <p className="mh-stat-sub">{s.sub}</p>
              </div>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* ============================================================
       * 4. BEFORE / AFTER REEL — horizontal scroll gallery
       * ============================================================ */}
      <section className="border-t border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-24 md:py-28">
        <div className="mh-container">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="mh-kicker">The proof</p>
                <Display as={2} size="xl" className="mt-4">
                  Seven transformations. One belief: a full head of hair{" "}
                  <Italic>changes everything.</Italic>
                </Display>
              </div>
              <Button href="/before-after/" variant="ghost" size="sm">
                View All Transformations
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12" direction="up">
          <div className="mh-reel">
            <div className="mh-reel-track">
              {BEFORE_AFTER.map((b, i) => (
                <BeforeAfterCard
                  key={b.src}
                  src={b.src}
                  alt={b.alt}
                  caption={b.caption}
                  index={i + 1}
                  aspect="square"
                  priority={i === 0}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mh-container mt-10">
          <Reveal>
            <p className="mx-auto max-w-2xl text-center text-[color:var(--mh-ink-800)]">
              Each system is custom ordered — matched to hair color, density, and
              hairline — then applied so it moves, washes, and behaves like your own
              hair. Swipe through the gallery to see what happens when the mirror
              finally matches the man.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
       * 5. THE STANDARD — editorial two-column + numbered list
       * ============================================================ */}
      <section className="relative isolate overflow-hidden border-t border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-24 md:py-32">
        <AuroraBlobs className="opacity-[0.30]" />
        <div className="mh-container relative z-10 grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal direction="right" className="md:col-span-5">
            <p className="mh-kicker">The standard</p>
            <Display as={2} size="xl" className="mt-4">
              A community where every guy <Italic>is welcome.</Italic>
            </Display>
            <div className="mt-8">
              <Button href="/free-consultation/" size="lg">
                Book Free Consultation
              </Button>
            </div>
          </Reveal>

          <Reveal direction="left" className="md:col-span-7">
            <div className="space-y-5 text-[color:var(--mh-ink-800)] md:text-lg md:leading-relaxed">
              <p>
                Manhair is a community where every guy is welcome to have custom
                catered hair replacement solutions, no matter the hair type. Full
                head of hair, thinning or bald? We cover it all. No need to feel
                embarrassed or lost on where to start — we are here for you. Our
                thoughtfully curated and hand selected products are designed to
                unleash what makes you, you. Our unique and personalized services
                will give you the knowledge you need to look your absolute best and
                feel more confident and handsome.
              </p>
              <p>
                You NO LONGER have to settle for impersonal, overpriced over
                unsupportive services you get from the large hair chains. We offer
                personal, one on one support to get you started.
              </p>
            </div>

            <ul className="mh-idx-list mt-10">
              {PRINCIPLES.map((p) => (
                <li key={p.n} className="mh-idx-row">
                  <span className="n">{p.n}</span>
                  <span className="t">{p.t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
       * 6. THE SYSTEM — numbered capability cards
       * ============================================================ */}
      <section className="border-t border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-24 md:py-32">
        <div className="mh-container">
          <Reveal>
            <div className="max-w-3xl">
              <p className="mh-kicker">The system</p>
              <Display as={2} size="xl" className="mt-4">
                Everything a full head of hair <Italic>unlocks.</Italic>
              </Display>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                Whether you&rsquo;re thinning at the crown, receding at the temples,
                or living with full hair loss — each ManHair system is custom
                ordered to match your color, density, and hairline exactly.
              </p>
            </div>
          </Reveal>

          <RevealGrid className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {FEATURES.map((f) => (
              <article key={f.n} className="mh-index-card">
                <span className="mh-index-num">{f.n}</span>
                <h3 className="font-display text-2xl font-bold text-[color:var(--mh-ink-950)]">
                  {f.title}
                </h3>
                <p className="text-[color:var(--mh-ink-800)]">{f.body}</p>
              </article>
            ))}
            <article className="mh-index-card justify-between bg-[color:var(--mh-ink-200)]">
              <span className="mh-index-num">06</span>
              <h3 className="font-display text-2xl font-bold text-[color:var(--mh-ink-950)]">
                See it for <Italic>yourself.</Italic>
              </h3>
              <Button href="/how-it-works/" variant="ghost" size="sm">
                How It Works
              </Button>
            </article>
          </RevealGrid>
        </div>
      </section>

      {/* ============================================================
       * 7. WHY MANHAIR — four-reason grid
       * ============================================================ */}
      <section className="border-t border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-24 md:py-32">
        <div className="mh-container">
          <Reveal>
            <div className="max-w-3xl">
              <p className="mh-kicker">Why ManHair</p>
              <Display as={2} size="xl" className="mt-4">
                Built for the guy who tried <Italic>everything else.</Italic>
              </Display>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                Most places do one thing and neglect the rest. We fuse real human
                hair, an undetectable fit, expert one-on-one care, and a community
                that shows up — into one complete solution.
              </p>
            </div>
          </Reveal>

          <RevealGrid className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
            {WHY.map((w) => (
              <article key={w.n} className="mh-index-card">
                <span className="mh-index-num">{w.n}</span>
                <h3 className="font-display text-xl font-bold text-[color:var(--mh-ink-950)]">
                  {w.title}
                </h3>
                <p className="text-[color:var(--mh-ink-800)]">{w.body}</p>
              </article>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* ============================================================
       * 8. THE WORK — image-backed program cards
       * ============================================================ */}
      <section className="relative isolate overflow-hidden border-t border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-24 md:py-32">
        <AuroraBlobs className="opacity-25" />
        <div className="mh-container relative z-10">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="mh-kicker">The work</p>
                <Display as={2} size="xl" className="mt-4">
                  Every system has a <Italic>purpose.</Italic>
                </Display>
              </div>
              <Button href="/how-it-works/" variant="ghost" size="sm">
                Full Program Breakdown
              </Button>
            </div>
          </Reveal>

          <RevealGrid className="mt-14 grid gap-5 md:grid-cols-3" gap={0.1}>
            {PROGRAMS.map((p) => (
              <article key={p.title} className="mh-prog-card">
                <div className="mh-prog-media">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                    {p.kicker}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-[color:var(--mh-ink-950)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[color:var(--mh-ink-800)]">{p.body}</p>
                </div>
              </article>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* ============================================================
       * 9. PULL-QUOTE — dark cinema panel
       * ============================================================ */}
      <section className="relative">
        <div className="mh-cinema border-y border-[color:var(--mh-copper-700)]/40 px-6 py-28 md:py-36">
          <div className="mh-container relative">
            <Reveal>
              <p className="mh-kicker">The promise</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative mt-6">
                <SplitLines
                  as="h2"
                  className="max-w-4xl text-[clamp(2rem,4vw+1rem,4.25rem)] text-[#FDF6E4]"
                  lines={[
                    <>We don&rsquo;t sell hair.</>,
                    <>
                      We give men their{" "}
                      <span className="italic font-light text-[color:var(--mh-copper-300)]">
                        reflection back.
                      </span>
                    </>,
                  ]}
                  initialDelay={0.25}
                  gap={0.15}
                />
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#F5EFE3]/85">
                Ten years of building custom systems for men who&rsquo;d given up.
                Two studios. Zero surgical procedures. One promise: you walk in
                nervous, you walk out looking like the version of yourself you
                remember.
              </p>
              <p className="mt-8 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--mh-copper-300)]">
                ManHair &mdash; Jacksonville &amp; Atlanta
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
       * 10. CLIENTS — testimonial grid
       * ============================================================ */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-24 md:py-32">
        <div className="mh-container">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mh-kicker">The clients</p>
              <Display as={2} size="xl" className="mt-4">
                More than a service. <Italic>A confidence.</Italic>
              </Display>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                We love our clients and are always here to support them. Here is
                what some have to say about Manhair and the service we provide.
              </p>
            </div>
          </Reveal>

          <RevealGrid className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="mh-index-card">
                <div className="flex items-center gap-4">
                  <span className="mh-avatar-ring">
                    <span className="relative block h-14 w-14 overflow-hidden rounded-full">
                      <Image
                        src={t.photo}
                        alt={`${t.name} — ManHair client`}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </span>
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-[color:var(--mh-ink-950)]">
                      {t.name}
                    </p>
                    <p className="text-[color:var(--mh-copper-300)]" aria-label="5 out of 5 stars">
                      ★★★★★
                    </p>
                  </div>
                </div>
                <p className="text-[color:var(--mh-ink-800)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </article>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* ============================================================
       * 11. THE PROCESS — image + checklist split
       * ============================================================ */}
      <section className="bg-[color:var(--mh-bg)] py-24 md:py-32">
        <div className="mh-container grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal direction="right" className="md:col-span-5">
            <ParallaxY intensity={36} className="relative">
              <div className="mh-corners relative aspect-[4/5] overflow-hidden rounded-[var(--mh-radius-md)] border border-[color:var(--mh-border-strong)]">
                <span aria-hidden="true" className="mh-corner tl" />
                <span aria-hidden="true" className="mh-corner tr" />
                <span aria-hidden="true" className="mh-corner bl" />
                <span aria-hidden="true" className="mh-corner br" />
                <Image
                  src={IMG_GALLERY}
                  alt="Men's hair transformation gallery — ManHair"
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="mh-image-kenburns object-cover"
                />
              </div>
            </ParallaxY>
          </Reveal>

          <Reveal direction="left" className="flex flex-col justify-center md:col-span-7">
            <p className="mh-kicker">The process</p>
            <Display as={2} size="xl" className="mt-4">
              The ManHair experience — <Italic>we keep it simple.</Italic>
            </Display>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
              Take years off your look and boost your confidence. From the first
              hello to lifetime servicing, here is exactly how it goes.
            </p>

            <ul className="mh-check">
              {PROCESS.map((s) => (
                <li key={s.step}>
                  <strong className="font-display text-[color:var(--mh-ink-950)]">
                    {s.step} · {s.title}
                  </strong>{" "}
                  — {s.body}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/book-my-appointment/" size="lg">
                Start Step 01
              </Button>
              <Button href="/before-after/" variant="ghost" size="lg">
                Before &amp; After
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
       * 12. FOUNDING OFFER — pricing-style panel
       * ============================================================ */}
      <section className="border-t border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-24 md:py-32">
        <div className="mh-container">
          <div className="mh-price-panel grid gap-10 p-8 md:grid-cols-12 md:items-center md:p-14">
            <Reveal direction="right" className="md:col-span-7">
              <p className="mh-kicker">Founding offer</p>
              <Display as={2} size="xl" className="mt-4">
                Start with a <Italic>free consultation.</Italic>
              </Display>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                Get that promotion you deserve. ManHair will change your life,
                guaranteed. We come to you in the privacy of your own home and do
                our initial consultation there — no cost, no pressure.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/book-my-appointment/" size="lg">
                  Book My Appointment
                </Button>
                <Button href="/prices/" variant="ghost" size="lg">
                  See Prices
                </Button>
              </div>
            </Reveal>

            <Reveal direction="left" className="md:col-span-5">
              <div className="mh-price-figure">
                <span className="cur">$</span>
                <span className="amt">0</span>
                <span className="per">/ consultation</span>
              </div>
              <p className="mt-4 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--mh-ink-700)]">
                In-home or in-studio · Jacksonville &amp; Atlanta
              </p>
              <ul className="mh-check !mt-6">
                <li>100% real human hair, custom ordered to match you</li>
                <li>Undetectable, natural finish under any lighting</li>
                <li>Lifetime one-on-one servicing and support</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
       * 13. FAQ + LOCATIONS
       * ============================================================ */}
      <section className="border-t border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-24 md:py-32">
        <div className="mh-container grid gap-16 md:grid-cols-12 md:gap-12">
          <Reveal direction="right" className="md:col-span-7">
            <p className="mh-kicker">FAQ</p>
            <Display as={2} size="xl" className="mt-4">
              Answers to the questions <Italic>everyone starts with.</Italic>
            </Display>
            <p className="mt-6 max-w-xl text-[color:var(--mh-ink-800)]">
              Still have questions? Our full FAQ covers everything from maintenance
              schedules to how our custom systems are built.
            </p>

            <div className="mh-accordion mt-8">
              {FAQS.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>
                    <span>
                      <span className="mr-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                        Q{String(i + 1).padStart(2, "0")}
                      </span>
                      {f.q}
                    </span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/faq/" variant="ghost" size="md">
                Read All FAQs
              </Button>
            </div>
          </Reveal>

          <Reveal direction="left" className="md:col-span-5">
            <p className="mh-kicker">Locations</p>
            <Display as={2} size="lg" className="mt-4">
              Two studios. One <Italic>promise.</Italic>
            </Display>
            <div className="mt-8 space-y-4">
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
                  <a href={CONTACT.jacksonville.phoneHref} className="font-semibold text-[color:var(--mh-copper-300)] hover:underline">
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
                  <a href={CONTACT.atlanta.phoneHref} className="font-semibold text-[color:var(--mh-copper-300)] hover:underline">
                    {CONTACT.atlanta.phone}
                  </a>
                </p>
              </article>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/locations/" variant="ghost" size="sm">
                  All Locations
                </Button>
                <Button href="/book-my-appointment/" size="sm">
                  Book Appointment
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
       * 14. BLOG TEASER
       * ============================================================ */}
      <section className="border-t border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] py-24 md:py-28">
        <div className="mh-container">
          <Reveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mh-kicker">Journal</p>
                <Display as={2} size="lg" className="mt-4">
                  Recent from the <Italic>ManHair blog.</Italic>
                </Display>
              </div>
              <Button href="/blog/" variant="ghost" size="sm">
                All Articles
              </Button>
            </div>
          </Reveal>

          <RevealGrid className="grid gap-5 md:grid-cols-3" gap={0.1}>
            {RECENT_POSTS.map((p) => (
              <Link key={p.slug} href={p.path} className="mh-prog-card group">
                <div className="mh-prog-media">
                  {p.coverImage ? (
                    <Image
                      src={p.coverImage}
                      alt={p.heading || p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[color:var(--mh-ink-200)]" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                    Article
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold leading-tight text-[color:var(--mh-ink-950)] group-hover:text-[color:var(--mh-copper-300)]">
                    {p.heading || p.title}
                  </h3>
                  {p.excerpt ? (
                    <p className="mt-3 line-clamp-3 text-sm text-[color:var(--mh-ink-800)]">
                      {p.excerpt.slice(0, 160)}
                      {p.excerpt.length > 160 ? "…" : ""}
                    </p>
                  ) : null}
                  <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--mh-copper-400)]">
                    Read More →
                  </p>
                </div>
              </Link>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* ============================================================
       * 15. FINAL CTA + NEWSLETTER
       * ============================================================ */}
      <section className="relative isolate overflow-hidden border-t border-[color:var(--mh-border)] bg-[color:var(--mh-bg)] py-24 md:py-32">
        <AuroraBlobs intensity="strong" className="opacity-40" />
        <div className="mh-container relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mh-kicker justify-center">Next step</p>
              <Display as={2} size="hero" className="mt-5">
                Ready to find the{" "}
                <Italic>hairstyle for you?</Italic>
              </Display>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
                We come to you in the privacy of your own home and do our initial
                consultation there. There is no need to feel afraid or embarrassed
                — we are here for you.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button href="/book-my-appointment/" size="lg">
                  Book My Appointment
                </Button>
                <Button href="/contact/" variant="ghost" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-16" delay={0.1}>
            <div className="mx-auto max-w-4xl rounded-[var(--mh-radius-md)] border border-[color:var(--mh-border-strong)] bg-[color:var(--mh-surface)] p-6 md:p-8">
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-6">
                  <p className="mh-kicker">Newsletter</p>
                  <p className="mt-4 font-display text-2xl font-bold text-[color:var(--mh-ink-950)] md:text-3xl">
                    Join our newsletter.
                  </p>
                  <p className="mt-3 text-[color:var(--mh-ink-800)]">
                    Product releases, hair-care tips, and studio updates — straight
                    to your inbox.
                  </p>
                </div>
                <form className="md:col-span-6">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Field label="Email" htmlFor="newsletter-email" className="flex-1">
                      <Input
                        id="newsletter-email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        autoComplete="email"
                      />
                    </Field>
                    <div className="flex items-end">
                      <Button size="md" block>
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final kinetic tape band with phone numbers */}
      <section aria-hidden="false" className="relative">
        <div className="mh-tape">
          <div className="mh-tape-track reverse">
            <div className="mh-tape-group">
              <span>Free Consultation</span>
              <span className="mh-tape-dot" />
              <span>{CONTACT.jacksonville.phone} · Jacksonville</span>
              <span className="mh-tape-dot" />
              <span>{CONTACT.atlanta.phone} · Atlanta</span>
              <span className="mh-tape-dot" />
              <span>Undetectable Fit</span>
              <span className="mh-tape-dot" />
            </div>
            <div className="mh-tape-group" aria-hidden="true">
              <span>Free Consultation</span>
              <span className="mh-tape-dot" />
              <span>{CONTACT.jacksonville.phone} · Jacksonville</span>
              <span className="mh-tape-dot" />
              <span>{CONTACT.atlanta.phone} · Atlanta</span>
              <span className="mh-tape-dot" />
              <span>Undetectable Fit</span>
              <span className="mh-tape-dot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { SITE } from "./site";

/**
 * The full inventory of pages carried over from manhaironline.com.
 * Each entry preserves the verbatim <title>, meta description, canonical,
 * and OG values captured from the live site so metadata parity is 100%.
 *
 * `path` is always the exact live URL path (with trailing slash).
 */
export type PageMeta = {
  /** Verbatim URL path on the live site (with trailing slash). */
  path: string;
  /** Verbatim <title> from live site. */
  title: string;
  /** Verbatim meta description; null when the live page omits one. */
  description: string | null;
  /** Verbatim canonical URL. */
  canonical: string;
  /** Robots directive from the live page. */
  robots: string;
  /** OpenGraph values from the live page. */
  og: {
    title: string | null;
    description: string | null;
    image: string | null;
    type: string | null;
    url: string | null;
    siteName: string | null;
    locale: string | null;
  };
  twitterCard?: string | null;
  /** True if the page is a blog post (routed via [slug]/page.tsx). */
  isPost?: boolean;
  /** True if the page is a category archive. */
  isCategory?: boolean;
};

// NOTE: metadata objects below are the SAME strings served today by manhaironline.com.
// Do not paraphrase — SEO relies on exact-match tokens.

const R = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

function og(
  title: string | null,
  description: string | null,
  path: string,
  image: string | null = null,
  type: string = "website"
) {
  return {
    title,
    description,
    image,
    type,
    url: `${SITE.origin}${path}`,
    siteName: SITE.siteName,
    locale: SITE.locale,
  };
}

export const PAGES: PageMeta[] = [
  {
    path: "/",
    title: "Professional Men Toupee Hairstylists, Jacksonville | ManHair",
    description:
      "Professional men toupee hairstylists. ManHair is the most trusted hair replacement clinic in Jacksonville. Trust our restoration experts for hair loss solutions.",
    canonical: `${SITE.origin}/`,
    robots: R,
    og: og(
      "Professional Men Toupee Hairstylists, Jacksonville | ManHair",
      "Professional men toupee hairstylists. ManHair is the most trusted hair replacement clinic in Jacksonville. Trust our restoration experts for hair loss solutions.",
      "/",
      `${SITE.origin}/wp-content/uploads/2022/10/unnamed.jpg`
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/how-it-works/",
    title: "How It Works | Jacksonville's Leading Hair Loss Solution for Men",
    description:
      "ManHair is the leading hair loss solution for men in Jacksonville. Unique and personalized services every man deserves.",
    canonical: `${SITE.origin}/how-it-works/`,
    robots: R,
    og: og(
      "How It Works | Jacksonville's Leading Hair Loss Solution for Men",
      "ManHair is the leading hair loss solution for men in Jacksonville. Unique and personalized services every man deserves.",
      "/how-it-works/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/about-us/",
    title: "About ManHair Online - Fast Hair Loss Solution In Jacksonville",
    description:
      "ManHair Online offers a fast and affordable solution for any mens hair type. Learn about ManHair Online to discover your solution now.",
    canonical: `${SITE.origin}/about-us/`,
    robots: R,
    og: og(
      "About ManHair Online - Fast Hair Loss Solution In Jacksonville",
      "ManHair Online offers a fast and affordable solution for any mens hair type. Learn about ManHair Online to discover your solution now.",
      "/about-us/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/prices/",
    title: "Hair Transplant Costs - hair restoration center costs",
    description:
      "Review hair transplant costs of the ManHair hair system price with affordable services for every man's hair restoration needs.",
    canonical: `${SITE.origin}/prices/`,
    robots: R,
    og: og(
      "Hair Transplant Costs - hair restoration center costs",
      "Review hair transplant costs of the ManHair hair system price with affordable services for every man's hair restoration needs.",
      "/prices/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/before-after/",
    title: "Before and after | Jacksonville's Leading Hair Loss Solution for Men",
    description:
      "ManHair is the leading hair loss solution for men in Jacksonville. Unique and personalized services every man deserves.",
    canonical: `${SITE.origin}/before-after/`,
    robots: R,
    og: og(
      "Before and after | Jacksonville's Leading Hair Loss Solution for Men",
      "ManHair is the leading hair loss solution for men in Jacksonville. Unique and personalized services every man deserves.",
      "/before-after/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/faq/",
    title: "FAQ - Learn About Men's Hair Transplant Alternative Options",
    description:
      "Men searching for a great alternative to getting a hair transplant can find men's health answers at ManHair Online.",
    canonical: `${SITE.origin}/faq/`,
    robots: R,
    og: og(
      "FAQ - Learn About Men's Hair Transplant Alternative Options",
      "Men searching for a great alternative to getting a hair transplant can find men's health answers at ManHair Online.",
      "/faq/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/contact/",
    title: "Contact Man Hair Online To Find A Hair Doctor Near Me",
    description:
      "ManHair Online helps men find the best hair doctor near me around Jacksonville and Tampa Bay. Call today to begin 904-526-8500",
    canonical: `${SITE.origin}/contact/`,
    robots: R,
    og: og(
      "Contact Man Hair Online To Find A Hair Doctor Near Me",
      "ManHair Online helps men find the best hair doctor near me around Jacksonville and Tampa Bay. Call today to begin 904-526-8500",
      "/contact/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/locations/",
    title: "ManHair Online - Man Hair Replacement System For Hair Loss",
    description:
      "ManHair is Jacksonville's leading, innovative non-surgical Man Hair Replacement System. Get Started Today - Call (904) 526-8500",
    canonical: `${SITE.origin}/locations/`,
    robots: R,
    og: og(
      "ManHair Online - Man Hair Replacement System For Hair Loss",
      "ManHair is Jacksonville's leading, innovative non-surgical Man Hair Replacement System. Get Started Today - Call (904) 526-8500",
      "/locations/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/jacksonville-florida/",
    title: "ManHair Online - Man Hair Replacement System For Hair Loss",
    description:
      "ManHair is Jacksonville's leading, innovative non-surgical Man Hair Replacement System. Get Started Today - Call (904) 526-8500",
    canonical: `${SITE.origin}/jacksonville-florida/`,
    robots: R,
    og: og(
      "ManHair Online - Man Hair Replacement System For Hair Loss",
      "ManHair is Jacksonville's leading, innovative non-surgical Man Hair Replacement System. Get Started Today - Call (904) 526-8500",
      "/jacksonville-florida/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/atlanta-georgia/",
    title: "ManHair Online - Man Hair Replacement System For Hair Loss",
    description:
      "ManHair is Jacksonville's leading, innovative non-surgical Man Hair Replacement System. Get Started Today - Call (904) 526-8500",
    canonical: `${SITE.origin}/atlanta-georgia/`,
    robots: R,
    og: og(
      "ManHair Online - Man Hair Replacement System For Hair Loss",
      "ManHair is Jacksonville's leading, innovative non-surgical Man Hair Replacement System. Get Started Today - Call (904) 526-8500",
      "/atlanta-georgia/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/products/",
    title: "Hair Products | Jacksonville's Leading Hair Loss Solution for Men",
    description:
      "ManHair is the leading hair loss solution for men in Jacksonville, Florida. View our hair products online and get started from home.",
    canonical: `${SITE.origin}/products/`,
    robots: R,
    og: og(
      "Hair Products | Jacksonville's Leading Hair Loss Solution for Men",
      "ManHair is the leading hair loss solution for men in Jacksonville, Florida. View our hair products online and get started from home.",
      "/products/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/blog/",
    title: "Man Hair Online Blog - Best Hair Transplant In USA",
    description:
      "ManHair has become the best hair transplant in USA. Discover blog posts that cover several hair loss and hair transplant topics online.",
    canonical: `${SITE.origin}/blog/`,
    robots: R,
    og: og(
      "Man Hair Online Blog - Best Hair Transplant In USA",
      "ManHair has become the best hair transplant in USA. Discover blog posts that cover several hair loss and hair transplant topics online.",
      "/blog/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/alopecia-hair-loss/",
    title: "Alopecia for Men's Hair Growth | Hair Replacement for Men | ManHair",
    description:
      "Get rid of alopecia for hair growth. Cost effective Alopecia hair replacement for men. Regain your confidence and look your absolute best with ManHair.",
    canonical: `${SITE.origin}/alopecia-hair-loss/`,
    robots: R,
    og: og(
      "Alopecia for Men's Hair Growth | Hair Replacement for Men | ManHair",
      "Get rid of alopecia for hair growth. Cost effective Alopecia hair replacement for men. Regain your confidence and look your absolute best with ManHair.",
      "/alopecia-hair-loss/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/mens-hair-styles/",
    title: "Toupee Hair System Jacksonville | Hair Pieces for Men",
    description:
      "Toupee Hair System, Jacksonville. Shop for hair pieces for men. Check out these mens hair style trend at ManHair Online.10+ years of knowledge & experience.",
    canonical: `${SITE.origin}/mens-hair-styles/`,
    robots: R,
    og: og(
      "Toupee Hair System Jacksonville | Hair Pieces for Men",
      "Toupee Hair System, Jacksonville. Shop for hair pieces for men. Check out these mens hair style trend at ManHair Online.10+ years of knowledge & experience.",
      "/mens-hair-styles/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/receding-hairline-restoration/",
    title: "Non Surgical Hair Replacement for Men, Jacksonville | ManHair",
    description:
      "Acclaimed non surgical hair replacement for men in Jacksonville. we have the best hair replacement systems. Discover real solutions for receding hairline patients.",
    canonical: `${SITE.origin}/receding-hairline-restoration/`,
    robots: R,
    og: og(
      "Non Surgical Hair Replacement for Men, Jacksonville | ManHair",
      "Acclaimed non surgical hair replacement for men in Jacksonville. we have the best hair replacement systems. Discover real solutions for receding hairline patients.",
      "/receding-hairline-restoration/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/free-consultation/",
    title:
      "Schedule Your Free Consultation | ManHair | Hair Restoration Jacksonville and Atlanta",
    description: null,
    canonical: `${SITE.origin}/free-consultation/`,
    robots: R,
    og: og(
      "Schedule Your Free Consultation | ManHair | Hair Restoration Jacksonville and Atlanta",
      null,
      "/free-consultation/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/book-my-appointment/",
    title: "Contact Man Hair Online To Find A Hair Doctor Near Me",
    description:
      "ManHair Online helps men find the best hair doctor near me around Jacksonville and Tampa Bay. Call today to begin 904-526-8500",
    canonical: `${SITE.origin}/book-my-appointment/`,
    robots: R,
    og: og(
      "Contact Man Hair Online To Find A Hair Doctor Near Me",
      "ManHair Online helps men find the best hair doctor near me around Jacksonville and Tampa Bay. Call today to begin 904-526-8500",
      "/book-my-appointment/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/select-your-appointment-date/",
    title:
      "Select Your Appointment Date and Time | ManHair | Hair Restoration Jacksonville and Atlanta",
    description: null,
    canonical: `${SITE.origin}/select-your-appointment-date/`,
    robots: R,
    og: og(
      "Select Your Appointment Date and Time | ManHair | Hair Restoration Jacksonville and Atlanta",
      null,
      "/select-your-appointment-date/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/payment-plans/",
    title: "payment Plans | ManHair | Hair Restoration Jacksonville and Atlanta",
    description:
      "Cherry is a payment plan designed for health, beauty, and wellness procedures. Easy monthly payments, no hard credit check, 60-second approval.",
    canonical: `${SITE.origin}/payment-plans/`,
    robots: R,
    og: og(
      "payment Plans | ManHair | Hair Restoration Jacksonville and Atlanta",
      "Cherry is a payment plan designed for health, beauty, and wellness procedures. Easy monthly payments, no hard credit check, 60-second approval.",
      "/payment-plans/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/partnerprogram/",
    title: "ManHair Online Franchise - Fast Hair Loss Solution In Jacksonville",
    description:
      "ManHair Online offers a fast and affordable solution for any mens hair type. Learn about ManHair Online to discover your solution now.",
    canonical: `${SITE.origin}/partnerprogram/`,
    robots: R,
    og: og(
      "ManHair Online Franchise - Fast Hair Loss Solution In Jacksonville",
      "ManHair Online offers a fast and affordable solution for any mens hair type. Learn about ManHair Online to discover your solution now.",
      "/partnerprogram/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/privacy-policy/",
    title: "Privacy Policy | Jacksonville's Leading Hair Loss Solution for Men",
    description:
      "ManHair is the leading hair loss solution for men in Jacksonville, Florida. Unique and personalized services for every hair type.",
    canonical: `${SITE.origin}/privacy-policy/`,
    robots: R,
    og: og(
      "Privacy Policy | Jacksonville's Leading Hair Loss Solution for Men",
      "ManHair is the leading hair loss solution for men in Jacksonville, Florida. Unique and personalized services for every hair type.",
      "/privacy-policy/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/refund-policy/",
    title: "Refund Policy | Jacksonville's Leading Hair Loss Solution for Men",
    description:
      "ManHair is the leading hair loss solution for men in Jacksonville, Florida. Unique and personalized services for every hair type.",
    canonical: `${SITE.origin}/refund-policy/`,
    robots: R,
    og: og(
      "Refund Policy | Jacksonville's Leading Hair Loss Solution for Men",
      "ManHair is the leading hair loss solution for men in Jacksonville, Florida. Unique and personalized services for every hair type.",
      "/refund-policy/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/terms-of-service/",
    title: "Terms of Service | Jacksonville's Leading Hair Loss Solution for Men",
    description:
      "ManHair is the leading hair loss solution for men in Jacksonville, Florida. Unique and personalized services for every hair type.",
    canonical: `${SITE.origin}/terms-of-service/`,
    robots: R,
    og: og(
      "Terms of Service | Jacksonville's Leading Hair Loss Solution for Men",
      "ManHair is the leading hair loss solution for men in Jacksonville, Florida. Unique and personalized services for every hair type.",
      "/terms-of-service/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/landing-page/",
    title:
      "Manhair Landing Page | Jacksonville's Leading Hair Loss Solution for Men",
    description:
      "ManHair is the leading hair loss solution for men in Jacksonville, Florida. Unique and personalized services for every hair type.",
    canonical: `${SITE.origin}/landing-page/`,
    robots: R,
    og: og(
      "Manhair Landing Page | Jacksonville's Leading Hair Loss Solution for Men",
      "ManHair is the leading hair loss solution for men in Jacksonville, Florida. Unique and personalized services for every hair type.",
      "/landing-page/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/cherry/",
    title: "Treat Now & Pay Later! | ManHair | Hair Restoration Jacksonville and Atlanta",
    description: null,
    canonical: `${SITE.origin}/cherry/`,
    robots: R,
    og: og(
      "Treat Now & Pay Later! | ManHair | Hair Restoration Jacksonville and Atlanta",
      null,
      "/cherry/"
    ),
    twitterCard: "summary_large_image",
  },
  {
    path: "/cherry-atlanta/",
    title: "Cherry Atlanta | ManHair | Hair Restoration Jacksonville and Atlanta",
    description: null,
    canonical: `${SITE.origin}/cherry-atlanta/`,
    robots: R,
    og: og(
      "Cherry Atlanta | ManHair | Hair Restoration Jacksonville and Atlanta",
      null,
      "/cherry-atlanta/"
    ),
    twitterCard: "summary_large_image",
  },
  // Category archives
  {
    path: "/category/hair-loss/",
    title: "Hair Loss Archives | ManHair | Hair Restoration Jacksonville and Atlanta",
    description: null,
    canonical: `${SITE.origin}/category/hair-loss/`,
    robots: R,
    og: og(
      "Hair Loss Archives | ManHair | Hair Restoration Jacksonville and Atlanta",
      null,
      "/category/hair-loss/"
    ),
    twitterCard: "summary_large_image",
    isCategory: true,
  },
  {
    path: "/category/hair-replacement/",
    title:
      "Hair Replacement Archives | ManHair | Hair Restoration Jacksonville and Atlanta",
    description: null,
    canonical: `${SITE.origin}/category/hair-replacement/`,
    robots: R,
    og: og(
      "Hair Replacement Archives | ManHair | Hair Restoration Jacksonville and Atlanta",
      null,
      "/category/hair-replacement/"
    ),
    twitterCard: "summary_large_image",
    isCategory: true,
  },
  {
    path: "/category/uncategorized/",
    title: "Uncategorized Archives | ManHair | Hair Restoration Jacksonville and Atlanta",
    description: null,
    canonical: `${SITE.origin}/category/uncategorized/`,
    robots: R,
    og: og(
      "Uncategorized Archives | ManHair | Hair Restoration Jacksonville and Atlanta",
      null,
      "/category/uncategorized/"
    ),
    twitterCard: "summary_large_image",
    isCategory: true,
  },
];

/** Look up page metadata by exact live URL path. */
export function getPageMeta(path: string): PageMeta | undefined {
  return PAGES.find((p) => p.path === path);
}

/** Convert PageMeta to a Next.js Metadata object with SEO parity. */
export function toMetadata(m: PageMeta | undefined): Metadata {
  if (!m) {
    return {
      metadataBase: new URL(SITE.origin),
      title: SITE.siteName,
    };
  }
  return {
    metadataBase: new URL(SITE.origin),
    title: m.title,
    description: m.description ?? undefined,
    alternates: { canonical: m.canonical },
    robots: m.robots,
    openGraph: {
      title: m.og.title ?? undefined,
      description: m.og.description ?? undefined,
      url: m.og.url ?? undefined,
      siteName: m.og.siteName ?? undefined,
      locale: m.og.locale ?? undefined,
      type: (m.og.type as "website" | "article") ?? "website",
      images: m.og.image ? [{ url: m.og.image }] : undefined,
    },
    twitter: {
      card: (m.twitterCard as "summary_large_image") ?? "summary_large_image",
    },
  };
}

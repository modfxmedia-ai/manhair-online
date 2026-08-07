/**
 * ManHair site-wide constants.
 * Derived verbatim from the live site metadata + JSON-LD graph.
 * Do not "improve" copy here — this is a preservation project.
 */

export const SITE = {
  /** Canonical origin the new deployment lives at. Keep in sync with prod. */
  origin: "https://www.manhaironline.com",
  /** Business / organization display name (from Organization JSON-LD). */
  orgName: "Man Hair - Hair Replacement Solutions",
  /** Verbatim site name from og:site_name / <title> suffix. */
  siteName: "ManHair | Hair Restoration Orange County, CA",
  /** Short brand mark used in tight layouts. */
  brandMark: "ManHair",
  /** Verbatim tagline from JSON-LD WebSite.description. */
  tagline: "Hair Restoration Orange County",
  /** Public-facing brand statement used in hero / footer marketing copy. */
  brandStatement:
    "The leading non-surgical hair replacement system for men in Orange County, CA.",
  logo: {
    url: "/wp-content/uploads/2018/08/MH-Logo.png",
    width: 615,
    height: 156,
    caption: "Man Hair - Hair Replacement Solutions",
  },
  locale: "en_US",
} as const;

export const CONTACT = {
  studio: {
    label: "Orange County, CA",
    streetLine1: "Orange County",
    streetLine2: "California",
    phone: "(904) 526-8500",
    phoneHref: "tel:1-904-526-8500",
    region: "CA",
  },
  email: "info@manhaironline.com",
  emailHref: "mailto:info@manhaironline.com",
  hours: "Monday to Friday | 9:00 AM – 5:00 PM",
  hoursShort: "Mon – Fri · 9:00 AM – 5:00 PM",
} as const;

/** Verbatim short tagline + follow-us paragraph as rendered in the live footer. */
export const FOOTER_TAGLINE = {
  short: "Hair Loss Solutions.",
  long: "Be sure to follow us on Facebook, Instagram and Twitter to stay up-to-date on new product releases and tips on your hair system.",
} as const;

/** Social profiles.
 *
 *  Union of the JSON-LD Organization `sameAs` set (Yoast) AND the
 *  visible socials in the live footer. Preserving every URL verbatim
 *  keeps existing SEO signals and internal-link parity.
 *
 *  Notes:
 *  - `twitter.com/ManHair_Online` (visible footer) and `x.com/manhaironline`
 *    (Yoast schema) use DIFFERENT handles on the live site. Both are
 *    kept so no historical outbound link disappears.
 *  - `platform` doubles as the icon key in `components/icons.tsx`.
 */
export const SOCIAL: ReadonlyArray<{
  platform:
    | "facebook"
    | "instagram"
    | "twitter"
    | "x"
    | "tiktok"
    | "linkedin"
    | "youtube"
    | "pinterest"
    | "myspace";
  label: string;
  href: string;
  /** True if this profile is visible in the live footer icon row. */
  visibleInFooter: boolean;
}> = [
  {
    platform: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/ManHairOnline/",
    visibleInFooter: true,
  },
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/manhaironline/",
    visibleInFooter: true,
  },
  {
    platform: "twitter",
    label: "Twitter",
    href: "https://twitter.com/ManHair_Online",
    visibleInFooter: true,
  },
  {
    platform: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@manhair_online",
    visibleInFooter: true,
  },
  {
    platform: "x",
    label: "X",
    href: "https://x.com/manhaironline",
    visibleInFooter: false,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/man-hair-hair-replacement-837b4816a/",
    visibleInFooter: false,
  },
  {
    platform: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCEc9SIKrJyX-E2Sg2DnB1Gg?view_as=subscriber",
    visibleInFooter: false,
  },
  {
    platform: "pinterest",
    label: "Pinterest",
    href: "https://www.pinterest.com/manhaironline/",
    visibleInFooter: false,
  },
  {
    platform: "myspace",
    label: "MySpace",
    href: "https://myspace.com/man.hair.jax",
    visibleInFooter: false,
  },
];

/** Primary navigation, mirrored from the live desktop header. Nested
 *  children reflect the actual hover dropdowns on manhaironline.com.
 *  Href values are preserved exactly for SEO. */
export type NavItem = {
  label: string;
  /** Path relative to site root. `"#"` indicates a non-navigable dropdown parent. */
  href: string;
  children?: NavItem[];
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/mens-hair-replacement-systems/",
    children: [
      { label: "Men's Hair Systems", href: "/services/mens-hair-systems/" },
      { label: "Men's Toupees", href: "/services/mens-toupees/" },
      { label: "Men's Hairpieces", href: "/services/mens-hairpieces/" },
      { label: "Men's Hair Units", href: "/services/mens-hair-units/" },
      { label: "Men's Wigs", href: "/services/mens-wigs/" },
      { label: "Non-Surgical Hair Replacement", href: "/services/non-surgical-hair-replacement/" },
      { label: "Hair System Maintenance", href: "/services/hair-system-maintenance/" },
    ],
  },
  {
    label: "About",
    href: "/about/",
    children: [
      { label: "Payment Plans", href: "/payment-plans/" },
      { label: "Franchise", href: "/partnerprogram/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Blog", href: "/blog/" },
      { label: "Contact", href: "/contact/" },
      { label: "Locations", href: "/locations/" },
    ],
  },
  {
    label: "How It Works",
    href: "/how-it-works/",
    children: [
      { label: "Receding Hairline Restoration", href: "/receding-hairline-restoration/" },
      { label: "Our Prices", href: "/pricing/" },
      { label: "Alopecia Hair Loss", href: "/alopecia-hair-loss/" },
      { label: "Men's Hair Styles", href: "/mens-hair-styles/" },
    ],
  },
  { label: "Before & After", href: "/results/" },
  { label: "Locations", href: "/locations/" },
];

/** Header CTA. Preserves the live "Contact Us" pill's href target
 *  (`/contact/`) but relabels it to the new brand's action verb. */
export const HEADER_CTA = { label: "Book Appointment", href: "/contact/" } as const;

/** Services / sitemap-adjacent links exposed in the footer. */
export const SERVICES_NAV: Array<{ label: string; href: string }> = [
  { label: "How It Works", href: "/how-it-works/" },
  {
    label: "Receding Hairline Restoration",
    href: "/receding-hairline-restoration/",
  },
  { label: "Our Prices", href: "/pricing/" },
  { label: "Alopecia Hair Loss", href: "/alopecia-hair-loss/" },
  { label: "Men's Hair Styles", href: "/mens-hair-styles/" },
  { label: "Before & After", href: "/results/" },
  { label: "Locations", href: "/locations/" },
  { label: "Contact Us", href: "/contact/" },
];

/** Footer "Quick Links" column — mirrored verbatim from the live site's
 *  footer navigation menu. Preserving this list keeps the internal-link
 *  graph identical to what search engines have already crawled. */
export const FOOTER_QUICK_LINKS: Array<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "Sitemap", href: "/sitemap/" },
  { label: "About Us", href: "/about/" },
  { label: "Treat Now & Pay Later", href: "/payment-plans/" },
  { label: "Franchise", href: "/partnerprogram/" },
  { label: "Locations", href: "/locations/" },
  { label: "Blog", href: "/blog/" },
  { label: "FAQ", href: "/faq/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Terms of Service", href: "/terms-of-service/" },
  { label: "Refund Policy", href: "/refund-policy/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
];

/** Verbatim footer disclaimer / copyright line from the live site. */
export const FOOTER_LEGAL = {
  disclaimer:
    "**Disclaimer:  Image credit to their respectful owners.  Images used on this site are for example purposes only.  It is up to you to achieve the final look you want.**",
  copyright:
    "Copyright © 2026 ManHair | Hair Restoration Orange County, CA via JK Ingram Enterprises LLC",
  poweredBy: "Powered by ModFXMedia",
};

/**
 * Man Hair — Services data model.
 * Source: ModFX Media "Website Build & Programmatic SEO Specification" (Section 3).
 *
 * These 8 pages are NOT synonyms to Google — each targets a distinct
 * search-term cluster and must lead with its own vocabulary. Do not merge
 * copy between services or use the terms interchangeably within a page.
 */

export type Service = {
  slug: string;
  /** Display name used in H1s / nav. */
  name: string;
  /** Primary keyword this page targets. */
  primaryKeyword: string;
  /** Short reason this is a separate page (internal reference only). */
  rationale: string;
  /** One-sentence plain-language definition (feeds AI Overviews). */
  whatItIs: string;
  /** Who this service suits. */
  whoItsFor: string;
  /** Base/material options for the "Materials / options" block. */
  materials: string[];
  /** How this differs from the other 7 services / from a transplant. */
  comparison: string;
};

export const SERVICES: Service[] = [
  {
    slug: "mens-hair-replacement-systems",
    name: "Men's Hair Replacement Systems",
    primaryKeyword: "hair replacement systems for men",
    rationale: "Core pillar service. Custom human-hair systems, fitted and maintained.",
    whatItIs:
      "A men's hair replacement system is a custom-made overlay of real human hair, built to match your natural color, density, and hairline, then bonded to your scalp so it moves and wears like your own hair.",
    whoItsFor:
      "Men at any stage of hair loss, from early thinning to a full bald crown, who want a non-surgical, immediately-visible result.",
    materials: ["Lace base", "Skin (polyurethane) base", "Mono (monofilament) base", "100% real human hair"],
    comparison:
      "This is the umbrella service every other page on this list is a variation of. If you're not sure which term describes what you're picturing, start here.",
  },
  {
    slug: "mens-hair-systems",
    name: "Men's Hair Systems",
    primaryKeyword: "hair systems for men near me",
    rationale: "High-volume search term. Distinct page from the pillar.",
    whatItIs:
      "A hair system is a precision-fitted hairpiece built from your own measurements and hair pattern, designed to be worn full-time and blend seamlessly with your existing hair.",
    whoItsFor:
      "Men searching for a local, near-me fitting who want a discreet, everyday solution rather than a one-time cosmetic fix.",
    materials: ["Lace base", "Skin base", "Blended density matching", "Custom color ring matching"],
    comparison:
      "Where 'hair replacement system' is the clinical umbrella term, 'hair system' is how most men actually search for the everyday, wear-it-daily product.",
  },
  {
    slug: "mens-toupees",
    name: "Men's Toupees",
    primaryKeyword: "toupee near me",
    rationale: "Older, high-intent term. Owns the 'toupee' search cluster.",
    whatItIs:
      "A toupee is a hairpiece that covers the crown and top of the head, the classic term for a men's hair addition, now built with modern lace and skin bases instead of the visible wefts of the past.",
    whoItsFor:
      "Men who already know the word 'toupee' and are searching with that vocabulary, typically those comparing older solutions against modern systems.",
    materials: ["Lace front", "Skin crown", "Natural hairline taper", "Real human hair"],
    comparison:
      "Modern toupees are undetectable and nothing like the visible pieces of decades past, but we keep the familiar name since that's the term searchers use.",
  },
  {
    slug: "mens-hairpieces",
    name: "Men's Hairpieces",
    primaryKeyword: "professional hair pieces for men",
    rationale: "1,000/mo search term. Distinct intent from 'system'.",
    whatItIs:
      "A hairpiece is a professionally fitted section of real human hair attached to cover thinning or bald areas, sized and shaped to your specific hair loss pattern.",
    whoItsFor:
      "Men researching options in a more general, less brand-specific way, often earlier in their research than someone searching a specific product name.",
    materials: ["Partial-coverage lace pieces", "Full-cap pieces", "Color-matched human hair", "Reusable adhesive systems"],
    comparison:
      "A hairpiece can mean a partial or full-coverage piece; we fit the exact size and shape your hair loss pattern calls for, not a one-size template.",
  },
  {
    slug: "mens-hair-units",
    name: "Men's Hair Units",
    primaryKeyword: "man unit hair",
    rationale: "Urban/barber vernacular term with real search volume.",
    whatItIs:
      "A hair unit is barber-shop vernacular for a full or partial hair system, cut in and blended by a stylist the same way a fresh haircut would be.",
    whoItsFor:
      "Men who found us through barber-shop word of mouth or searched using barbershop terminology rather than clinical language.",
    materials: ["Full lace units", "Skin-base units", "Barber cut-in and blend service", "Custom density matching"],
    comparison:
      "Functionally the same product as our other systems; we use 'unit' here because that's the word many clients bring in with them on day one.",
  },
  {
    slug: "mens-wigs",
    name: "Men's Wigs",
    primaryKeyword: "wigs for men",
    rationale: "Broadest term. Captures searchers who don't know the terminology yet.",
    whatItIs:
      "A men's wig is a full-coverage hair replacement, real human hair built on a breathable cap, for men who want complete coverage rather than a partial system.",
    whoItsFor:
      "Men earliest in their research, often unfamiliar with the industry's other terms, or men who need full-head coverage rather than a partial piece.",
    materials: ["Full lace caps", "Machine-wefted caps", "100% real human hair", "Custom cap sizing"],
    comparison:
      "Unlike a partial system, a men's wig covers the entire head. We still build it from real human hair and fit it professionally, not off-the-shelf.",
  },
  {
    slug: "non-surgical-hair-replacement",
    name: "Non-Surgical Hair Replacement",
    primaryKeyword: "non surgical hair replacement",
    rationale: "Category-defining term. Key comparison-stage entry point vs. transplants.",
    whatItIs:
      "Non-surgical hair replacement restores a full, natural hairline with zero procedures, zero downtime, and zero scalpel, using a custom-fitted hair system instead of grafts.",
    whoItsFor:
      "Men actively comparing this approach against a hair transplant, and men who want a result visible the same day rather than waiting months to grow in.",
    materials: ["Lace, skin, or mono base", "Real human hair", "No incisions, no grafts, no anesthesia"],
    comparison:
      "Unlike a transplant, there's no surgery, no recovery period, and no risk of graft failure. Results are visible immediately and are fully reversible.",
  },
  {
    slug: "hair-system-maintenance",
    name: "Hair System Maintenance & Reattachment",
    primaryKeyword: "hair system maintenance near me",
    rationale: "Retention and competitor-switching traffic. High lifetime value.",
    whatItIs:
      "Ongoing maintenance keeps an existing hair system, from us or from another provider, looking fresh: reattachment, cleaning, density touch-ups, and cut-ins on a regular schedule.",
    whoItsFor:
      "Existing hair system wearers (ours or a competitor's) whose system needs reattachment, cleaning, or a switch to a new provider.",
    materials: ["Reattachment & bonding service", "Deep cleaning", "Cut-in & blend touch-ups", "Provider-switch onboarding"],
    comparison:
      "This is the retention service behind every other page on this list: once you have a system, this is how it keeps looking like day one.",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

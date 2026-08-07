/**
 * Man Hair — Hair-loss condition data model.
 * Source: ModFX Media spec, Section 4.
 *
 * COMPLIANCE GUARDRAIL (do not remove): Man Hair provides a cosmetic,
 * non-medical product. Condition pages must NOT diagnose, claim to treat,
 * or cure a medical condition. Frame every page as "here's how a hair
 * system covers this," never "we treat this." Every page must include a
 * line recommending the reader consult a physician about the underlying
 * cause — see `medicalNote` below, rendered verbatim on every page.
 */

export type Condition = {
  slug: string;
  name: string;
  primaryKeyword: string;
  /** Plain description of the condition. No medical claims. */
  whatItIs: string;
  /** What men typically notice/experience. */
  howItPresents: string;
  /** The solution framing: cosmetic, not medical. */
  howASystemCoversIt: string;
  /** Which service pages are most relevant, by slug (see services.ts). */
  recommendedServiceSlugs: string[];
};

export const MEDICAL_NOTE =
  "This page describes a cosmetic hair replacement option, not a medical treatment. Please speak with a physician about the underlying cause of your hair loss.";

export const CONDITIONS: Condition[] = [
  {
    slug: "male-pattern-baldness",
    name: "Male Pattern Baldness",
    primaryKeyword: "male pattern baldness solutions",
    whatItIs:
      "Male pattern baldness is the most common form of hair loss in men, typically showing up as a receding hairline and thinning at the crown over time.",
    howItPresents:
      "Most men notice a slowly receding hairline first, followed by thinning at the crown, eventually meeting in the middle for some.",
    howASystemCoversIt:
      "A custom hair system restores a full, natural hairline and crown density immediately, blended with your existing hair so the transition is undetectable.",
    recommendedServiceSlugs: ["mens-hair-replacement-systems", "non-surgical-hair-replacement", "mens-hair-systems"],
  },
  {
    slug: "receding-hairline",
    name: "Receding Hairline",
    primaryKeyword: "receding hairline solutions for men",
    whatItIs:
      "A receding hairline is the gradual movement of the hairline back from the forehead, often the earliest visible sign of hair loss.",
    howItPresents:
      "Men usually notice it first at the temples, creating an 'M' shape, before it progresses further back.",
    howASystemCoversIt:
      "A hair system rebuilds a natural, forward hairline shaped to your face, restoring the frame your face had before the recession started.",
    recommendedServiceSlugs: ["mens-hair-replacement-systems", "mens-hairpieces"],
  },
  {
    slug: "thinning-hair",
    name: "Thinning Hair",
    primaryKeyword: "thinning hair men solutions",
    whatItIs:
      "Thinning hair is a gradual reduction in hair density across the scalp, making the scalp more visible through existing hair.",
    howItPresents:
      "Often noticed first in photos or under bright light, where the scalp shows through more than it used to.",
    howASystemCoversIt:
      "A lighter-density system layered with your existing hair restores fullness without a full system, so the result reads as simply 'having more hair,' not a hairpiece.",
    recommendedServiceSlugs: ["mens-hair-systems", "mens-hairpieces"],
  },
  {
    slug: "crown-balding",
    name: "Crown Balding / Bald Spot",
    primaryKeyword: "bald spot on crown solutions",
    whatItIs:
      "Crown balding is hair loss concentrated at the top-back of the head, often the hardest spot for a man to see or manage himself.",
    howItPresents:
      "Usually noticed by others, or in a photo taken from behind, well before the man himself sees it in a mirror.",
    howASystemCoversIt:
      "A crown-targeted system or partial piece rebuilds density exactly where it's needed, blended into surrounding hair so there's no visible boundary.",
    recommendedServiceSlugs: ["mens-hairpieces", "mens-hair-units"],
  },
  {
    slug: "alopecia-areata",
    name: "Alopecia Areata",
    primaryKeyword: "alopecia hair replacement men",
    whatItIs:
      "Alopecia areata is hair loss that can appear as patches or, in some cases, affect the entire scalp, and can be unpredictable in how it progresses.",
    howItPresents:
      "Presentation varies widely, from small patches to more extensive loss, and can change over time.",
    howASystemCoversIt:
      "A full or partial hair system provides consistent, natural coverage regardless of how the underlying pattern shifts, restoring a complete look while you manage the condition with your doctor.",
    recommendedServiceSlugs: ["mens-wigs", "mens-hair-replacement-systems", "non-surgical-hair-replacement"],
  },
  {
    slug: "total-hair-loss",
    name: "Total Hair Loss",
    primaryKeyword: "full head hair replacement men",
    whatItIs:
      "Total hair loss means little to no hair remains across the scalp, requiring full-head rather than partial coverage.",
    howItPresents:
      "Complete or near-complete loss across the entire scalp.",
    howASystemCoversIt:
      "A full men's wig or full-cap system, built from real human hair on a breathable base, restores complete, natural-looking coverage.",
    recommendedServiceSlugs: ["mens-wigs", "mens-hair-replacement-systems"],
  },
  {
    slug: "chemotherapy-hair-loss",
    name: "Chemotherapy Hair Loss",
    primaryKeyword: "hair replacement after chemo men",
    whatItIs:
      "Hair loss during or after chemotherapy is a common, temporary side effect of many cancer treatments, and can affect the whole scalp.",
    howItPresents:
      "Typically rapid, whole-scalp loss beginning a few weeks into treatment.",
    howASystemCoversIt:
      "A comfortable, breathable full-coverage system can restore a natural look during treatment and recovery. We work gently and privately, on your schedule, alongside your medical care, never in place of it.",
    recommendedServiceSlugs: ["mens-wigs", "mens-hair-replacement-systems"],
  },
  {
    slug: "traction-alopecia",
    name: "Traction Alopecia",
    primaryKeyword: "traction alopecia men treatment",
    whatItIs:
      "Traction alopecia is hair loss caused by prolonged tension on the hair, often along the hairline or in a consistent pattern tied to how hair is regularly worn.",
    howItPresents:
      "Usually appears along the hairline or in a band matching where the hair experiences the most repeated tension.",
    howASystemCoversIt:
      "A hair system rebuilds density and hairline shape in the affected area without adding any further tension to your natural hair.",
    recommendedServiceSlugs: ["mens-hairpieces", "mens-hair-systems"],
  },
  {
    slug: "failed-hair-transplant",
    name: "Failed Hair Transplant Cover-Up",
    primaryKeyword: "cover failed hair transplant",
    whatItIs:
      "A failed or unsatisfying hair transplant can leave uneven density, visible scarring, or a hairline that doesn't look the way it was expected to.",
    howItPresents:
      "Patchy regrowth, visible donor scarring, or a hairline shape that doesn't match the rest of the face.",
    howASystemCoversIt:
      "A custom system is built around and over the existing transplant work, evening out density and correcting the hairline shape without further surgery.",
    recommendedServiceSlugs: ["mens-hair-replacement-systems", "non-surgical-hair-replacement"],
  },
  {
    slug: "scarring-alopecia",
    name: "Scarring / Scar Coverage",
    primaryKeyword: "cover scalp scars hair system",
    whatItIs:
      "Scalp scarring, from surgery, injury, or a past procedure, can leave permanent bald patches where hair no longer grows.",
    howItPresents:
      "A visible bald patch or line, often lighter or shinier than surrounding scalp skin.",
    howASystemCoversIt:
      "A hair system is bonded directly over the scarred area, restoring full coverage and blending seamlessly with the surrounding hair.",
    recommendedServiceSlugs: ["mens-hairpieces", "hair-system-maintenance"],
  },
];

export function getCondition(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}

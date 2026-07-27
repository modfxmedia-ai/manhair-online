/**
 * Design tokens — TypeScript mirror.
 *
 * The single source of truth for the design system is
 * `app/globals.css` (Tailwind v4 CSS-first `@theme` block). This
 * file mirrors the same values in TypeScript so that:
 *   - server-side code (metadata OG colors, JSON-LD, email
 *     templates, sitemap thumbnails) can reference exact hex codes
 *   - IDE autocomplete surfaces the palette
 *   - tokens can be imported into inline styles when Tailwind
 *     utility class syntax is inconvenient (e.g. dynamic values)
 *
 * If you change a value here, mirror it in `app/globals.css` and
 * vice-versa. NEVER introduce red or maroon shades — the old brand
 * used red (#b71c1c); the new brand is charcoal + copper only.
 */

export const color = {
  // Semantic anchors (spec)
  bg: "#0B0B0C",
  surface: "#151515",
  text: "#F5F1EC",
  muted: "#A8A29B",
  onAccent: "#0B0B0C",

  // Copper anchors (spec)
  copperBase: "#B87333",
  copperHighlight: "#D89B5D",
  copperShade: "#8C5A2B",

  // Neutral ramp
  ink: {
    50: "#FDFBF8",
    100: "#F5F1EC",
    200: "#DDD7CF",
    300: "#C4BEB6",
    400: "#A8A29B",
    500: "#6B6A66",
    600: "#3B3B3D",
    700: "#2A2A2C",
    800: "#1E1E1F",
    900: "#151515",
    950: "#0B0B0C",
  },

  // Copper ramp
  copper: {
    50: "#FAEBDA",
    100: "#F1D0AC",
    200: "#E5B485",
    300: "#D89B5D",
    400: "#C6874A",
    500: "#B87333",
    600: "#A5672F",
    700: "#8C5A2B",
    800: "#6B4319",
    900: "#46290F",
    950: "#2A1A0C",
  },
} as const;

export const radius = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "6px",
  pill: "999px",
} as const;

export const layout = {
  containerMax: "1200px",
} as const;

export const font = {
  /** CSS variable name for the serif display face (Cormorant Garamond). */
  display: "var(--font-display)",
  /** CSS variable name for the grotesk sans face (Inter). */
  sans: "var(--font-sans)",
} as const;

export const tracking = {
  /** Uppercase label letter-spacing. */
  label: "0.16em",
  tight: "0.06em",
} as const;

export const motion = {
  ease: "cubic-bezier(0.2, 0.65, 0.35, 1)",
  dur: "160ms",
} as const;

export const tokens = { color, radius, layout, font, tracking, motion } as const;
export type Tokens = typeof tokens;

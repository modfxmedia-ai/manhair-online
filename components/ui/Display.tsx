import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Display — the primary serif headline component.
 *
 * Use for large hero / section titles. Supports italic accent
 * phrases via the `<Italic>` sibling component which uses the
 * copper highlight tone and italic weight.
 *
 * <Display>
 *   Life isn't perfect — <Italic>but your hair can be.</Italic>
 * </Display>
 */

type Level = 1 | 2 | 3 | 4;
type Size = "sm" | "md" | "lg" | "xl" | "hero";

const SIZE: Record<Size, string> = {
  sm: "text-2xl md:text-3xl",
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl",
  xl: "text-5xl md:text-6xl",
  hero: "text-[clamp(2.4rem,4vw+1rem,4.4rem)]",
};

export function Display({
  as = 2,
  size = "md",
  className,
  children,
}: {
  as?: Level;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  const Tag = (`h${as}` as unknown) as "h1" | "h2" | "h3" | "h4";
  return (
    <Tag className={cn("mh-display", SIZE[size], className)}>{children}</Tag>
  );
}

/**
 * Italic — the copper-highlight italic accent phrase used inside
 * a `<Display>` headline. Alias for the `.mh-italic` atom.
 */
export function Italic({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("mh-italic", className)}>{children}</span>;
}

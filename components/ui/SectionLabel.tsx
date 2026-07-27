import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * SectionLabel — the small uppercase, tracked label that sits above
 * every section headline. Copper by default; supports muted variant
 * for use on already-copper accented cards.
 *
 * Renders a `<p>` by default but accepts `as="span" | "div" | "h2"` etc.
 * to fit whatever surrounding semantics you need.
 */

type Tone = "accent" | "muted" | "inverse";

type Props<T extends ElementType = "p"> = {
  as?: T;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  id?: string;
};

export function SectionLabel<T extends ElementType = "p">({
  as,
  tone = "accent",
  className,
  children,
  ...rest
}: Props<T>) {
  const Tag = (as ?? "p") as ElementType;
  return (
    <Tag
      className={cn(
        "font-sans font-semibold uppercase tracking-[0.16em] text-[0.72rem]",
        tone === "accent" && "text-[color:var(--mh-copper-700)]",
        tone === "muted" && "text-[color:var(--mh-ink-600)]",
        tone === "inverse" && "text-[color:var(--mh-bg)]",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

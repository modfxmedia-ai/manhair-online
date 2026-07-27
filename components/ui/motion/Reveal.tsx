"use client";

import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";

/**
 * Reveal — fades and slides children into view.
 *
 * Uses IntersectionObserver + CSS transitions (no external animation
 * lib). The element starts at its `direction`-shifted hidden state
 * via `.mh-reveal` classes in `globals.css`, then transitions to
 * visible when the observer flips `.is-visible` on.
 *
 * Falls back to always-visible when JS or IntersectionObserver
 * is unavailable, so no content is ever "stuck" hidden.
 */

type Direction = "up" | "down" | "left" | "right" | "none";
type Props = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
};

const DIR_CLASS: Record<Direction, string | undefined> = {
  up: undefined,
  down: "mh-reveal-down",
  left: "mh-reveal-left",
  right: "mh-reveal-right",
  none: "mh-reveal-none",
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  once = true,
  className,
}: Props) {
  const [ref, inView] = useInView<HTMLDivElement>({ once });
  const style: CSSProperties = {
    transitionDelay: delay ? `${delay}s` : undefined,
    transitionDuration: duration !== 0.7 ? `${duration}s` : undefined,
  };
  return (
    <div
      ref={ref}
      className={cn(
        "mh-reveal",
        DIR_CLASS[direction],
        inView && "is-visible",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

/**
 * RevealStagger — animates each direct child sequentially.
 * Sets `--mh-stagger-i` on each child so the CSS can offset its
 * `transition-delay` from a common base.
 */
export function RevealStagger({
  children,
  gap = 0.08,
  delay = 0,
  once = true,
  className,
}: {
  children: ReactNode;
  gap?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ once });
  const childArray = Array.isArray(children) ? children : [children];
  return (
    <div
      ref={ref}
      className={cn("mh-stagger", inView && "is-visible", className)}
      style={{
        // Base delay for the whole stagger group
        transitionDelay: delay ? `${delay}s` : undefined,
      }}
    >
      {childArray.map((c, i) => (
        <div
          key={i}
          style={{
            // Each child gets its own stagger index; the CSS multiplies
            // this by `gap` seconds. We convert `gap` into a per-child
            // delay directly since CSS can't multiply a var by a number.
            transitionDelay: `${delay + i * gap}s`,
          }}
        >
          {c}
        </div>
      ))}
    </div>
  );
}

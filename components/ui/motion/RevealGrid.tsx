"use client";

import { Children, cloneElement, isValidElement, useMemo, type CSSProperties, type ReactElement } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";

/**
 * RevealGrid — like RevealStagger, but does NOT wrap children in
 * extra `<div>`s. Instead it clones each child and injects a
 * staggered `transition-delay` inline style.
 *
 * Use this when the direct children need to be the layout's grid
 * items (e.g. cards with `col-span-*` classes). RevealStagger's
 * wrappers would swallow those classes and collapse the layout;
 * RevealGrid keeps the child element's className/props intact.
 *
 * The animation state (`opacity: 0` → `1`, translateY) still comes
 * from the `.mh-stagger > *` and `.mh-stagger.is-visible > *`
 * rules in `globals.css`, so the visual behaviour matches
 * RevealStagger 1:1.
 */
type Props<C extends { style?: CSSProperties }> = {
  children: React.ReactNode;
  gap?: number;
  delay?: number;
  once?: boolean;
  className?: string;
  /** Ignored — reserved for stricter typing hooks. */
  _phantom?: C;
};

export function RevealGrid({
  children,
  gap = 0.08,
  delay = 0,
  once = true,
  className,
}: Props<{ style?: CSSProperties }>) {
  const [ref, inView] = useInView<HTMLDivElement>({ once });

  const cloned = useMemo(() => {
    let idx = 0;
    return Children.map(children, (c) => {
      if (!isValidElement(c)) return c;
      const el = c as ReactElement<{ style?: CSSProperties }>;
      const i = idx++;
      const existingStyle = el.props.style ?? {};
      return cloneElement(el, {
        style: {
          ...existingStyle,
          transitionDelay: `${delay + i * gap}s`,
        },
      });
    });
  }, [children, gap, delay]);

  return (
    <div
      ref={ref}
      className={cn("mh-stagger", inView && "is-visible", className)}
    >
      {cloned}
    </div>
  );
}

"use client";

import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";

/**
 * ProgressBar — a slim animated "motion graph" meter.
 *
 * Fills from 0 to `value`% (CSS width transition) the first time it
 * scrolls into view. Purely CSS-driven off `useInView`; collapses to
 * an instant fill under `prefers-reduced-motion`.
 */
export function ProgressBar({
  value,
  duration = 1.4,
  className,
}: {
  value: number;
  duration?: number;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLSpanElement>({ amount: 0.4 });
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <span ref={ref} className={cn("mh-meter", className)}>
      <span
        className="mh-meter-fill"
        style={{
          width: inView ? `${clamped}%` : "0%",
          transitionDuration: `${duration}s`,
        }}
      />
    </span>
  );
}

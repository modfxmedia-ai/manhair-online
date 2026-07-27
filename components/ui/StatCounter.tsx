import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * StatCounter — a single label / value / description block.
 * StatStrip — a bordered row of StatCounters (matches the
 *   "bordered stat strip" pattern from the design spec).
 *
 * Uses the display serif for the value so numbers read as
 * headlines rather than data. Uppercase tracked label on top.
 */

export type StatCounterProps = {
  /** Uppercase tracked label above the value. */
  label: string;
  /** Large hero number/word — e.g. "10+ Yrs", "Free", "1-on-1". */
  value: string;
  /** Optional sentence under the value. */
  description?: string;
  className?: string;
};

export function StatCounter({
  label,
  value,
  description,
  className,
}: StatCounterProps) {
  return (
    <div className={cn("mh-stat", className)}>
      <p className="mh-eyebrow">{label}</p>
      <p className="mt-4 mh-display text-4xl md:text-[2.5rem] leading-none">
        {value}
      </p>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-[color:var(--mh-fg-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function StatStrip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mh-stats", className)}>{children}</div>;
}

import { cn } from "@/lib/cn";

/**
 * SplitLines — hero headline entrance.
 *
 * Wraps each `line` in a masked container so the text slides up
 * from below the baseline on mount. Staggers each line with a
 * `--mh-splitline-delay` CSS var. Pure CSS animation (see
 * `.mh-splitline` in globals.css) — no JS bundle cost.
 *
 *   <SplitLines lines={[
 *     "Man Hair Replacement",
 *     "System in Orange County",
 *   ]} />
 */
export function SplitLines({
  lines,
  as = "h1",
  className,
  lineClassName,
  gap = 0.09,
  initialDelay = 0.05,
}: {
  lines: React.ReactNode[];
  as?: "h1" | "h2" | "h3" | "div" | "p";
  className?: string;
  lineClassName?: string;
  gap?: number;
  initialDelay?: number;
}) {
  const Tag = as;
  return (
    <Tag className={cn("mh-display", className)}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={cn("mh-splitline", lineClassName)}
        >
          <span style={{ animationDelay: `${initialDelay + i * gap}s` }}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

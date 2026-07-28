"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";

/**
 * CountUp — animates a number from `from` to `to` via
 * requestAnimationFrame when the element scrolls into view.
 *
 * Uses `useInView` for the trigger and a simple eased tween
 * driven by RAF. No external animation library required.
 */
export function CountUp({
  to,
  from = 0,
  duration = 1.2,
  suffix,
  prefix,
  className,
  format,
  decimals,
  once = true,
}: {
  to: number;
  from?: number;
  duration?: number;
  suffix?: ReactNode;
  prefix?: ReactNode;
  className?: string;
  format?: (n: number) => string;
  /**
   * Fixed number of decimal places to display. Server-safe
   * alternative to `format` (functions can't cross the server →
   * client boundary). Ignored when `format` is provided.
   */
  decimals?: number;
  once?: boolean;
}) {
  const [ref, inView] = useInView<HTMLSpanElement>({ once, amount: 0.4 });
  const numRef = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState<number>(from);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic
    const step = (ts: number) => {
      if (start == null) start = ts;
      const elapsed = (ts - start) / 1000;
      const p = Math.min(1, elapsed / duration);
      setDisplayed(from + (to - from) * ease(p));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, from, to, duration]);

  const text = format
    ? format(displayed)
    : typeof decimals === "number"
    ? displayed.toFixed(decimals)
    : Math.round(displayed).toString();

  return (
    <span ref={ref} className={cn("inline-flex items-baseline", className)}>
      {prefix}
      <span ref={numRef} className="tabular-nums">{text}</span>
      {suffix}
    </span>
  );
}

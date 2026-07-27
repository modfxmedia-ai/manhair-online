"use client";

import { useId, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";
import { CountUp } from "./CountUp";

/**
 * ProgressRing — an animated SVG "motion graph" infographic.
 *
 * When scrolled into view the ring sweeps from empty to `value`%
 * (stroke-dashoffset transition) while a paired CountUp tweens the
 * numeric label. CSS-first: no external animation library, and the
 * transition is disabled under `prefers-reduced-motion`.
 */
export function ProgressRing({
  value,
  label,
  size = 96,
  stroke = 7,
  suffix = "%",
  duration = 1.4,
  className,
}: {
  value: number;
  label: ReactNode;
  size?: number;
  stroke?: number;
  suffix?: ReactNode;
  duration?: number;
  className?: string;
}) {
  const gid = useId().replace(/[:]/g, "");
  const [ref, inView] = useInView<HTMLDivElement>({ amount: 0.4 });

  const clamped = Math.min(100, Math.max(0, value));
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = inView ? circumference * (1 - clamped / 100) : circumference;
  const center = size / 2;

  return (
    <div ref={ref} className={cn("mh-ring", className)}>
      <span className="mh-ring-shell" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="mh-ring-svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`ring-${gid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--mh-copper-300)" />
              <stop offset="100%" stopColor="var(--mh-copper-700)" />
            </linearGradient>
          </defs>
          <circle
            cx={center}
            cy={center}
            r={r}
            fill="none"
            stroke="var(--mh-border-strong)"
            strokeWidth={stroke}
          />
          <circle
            cx={center}
            cy={center}
            r={r}
            fill="none"
            stroke={`url(#ring-${gid})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="mh-ring-track"
            style={{
              transitionDuration: `${duration}s`,
            }}
          />
        </svg>
        <span className="mh-ring-value">
          <CountUp to={value} suffix={suffix} duration={duration} />
        </span>
      </span>
      <span className="mh-ring-label">{label}</span>
    </div>
  );
}

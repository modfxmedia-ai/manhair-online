"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * ParallaxY — translates children on scroll for a subtle depth
 * effect. Pure JS + rAF, no external library.
 *
 * `intensity` in px. Positive translates children downward as
 * the page scrolls up (background feels "slower"). `reverse`
 * inverts direction. Respects `prefers-reduced-motion` and
 * disables itself on that setting.
 */
export function ParallaxY({
  children,
  intensity = 40,
  reverse = false,
  className,
}: {
  children: ReactNode;
  intensity?: number;
  reverse?: boolean;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    let ticking = false;
    const dir = reverse ? 1 : -1;
    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const winH = window.innerHeight || document.documentElement.clientHeight;
      // Progress goes -1 (below viewport) → 0 (centred) → 1 (above viewport)
      const p = (rect.top + rect.height / 2 - winH / 2) / (winH / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, p));
      inner.style.transform = `translate3d(0, ${clamped * intensity * dir}px, 0)`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [intensity, reverse]);

  return (
    <div ref={wrapRef} className={cn("relative", className)}>
      <div ref={innerRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}

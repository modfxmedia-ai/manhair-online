"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useInView — minimal IntersectionObserver hook.
 *
 * Returns [ref, inView]. Attach `ref` to the DOM element you want
 * to observe. `inView` flips to true when the element intersects
 * the viewport by at least `amount` fraction (default 5%).
 *
 * When `once` is true (default), the observer disconnects the
 * first time the element becomes visible so the animation only
 * plays once per page load.
 *
 * Falls back to `inView = true` on the server or when
 * `IntersectionObserver` is unavailable, so content never gets
 * "stuck" hidden if JS fails to hydrate.
 */
export function useInView<T extends Element = HTMLDivElement>({
  amount = 0.05,
  once = true,
  rootMargin = "0px",
}: {
  amount?: number;
  once?: boolean;
  rootMargin?: string;
} = {}): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setInView(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) {
      // Ref not attached yet — reveal after next paint so the animation
      // still fires even if IntersectionObserver misses.
      const t = window.setTimeout(() => setInView(true), 100);
      return () => window.clearTimeout(t);
    }

    // Safety net: if the element is already partially visible at mount
    // (very common for above-the-fold content), reveal immediately
    // — some browsers delay the first IntersectionObserver callback
    // for elements already intersecting, which can leave content stuck.
    const rect = el.getBoundingClientRect();
    const winH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < winH && rect.bottom > 0) {
      setInView(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: amount, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [amount, once, rootMargin]);

  return [ref, inView];
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { CONTACT, HEADER_CTA, PRIMARY_NAV, type NavItem } from "@/lib/site";
import { Wordmark } from "./Wordmark";

/**
 * MobileNav — the hamburger button + slide-in off-canvas panel.
 *
 * - Slides in from the right on top of a dimmed backdrop.
 * - Locks body scroll while open.
 * - Closes on Escape, backdrop click, or route change.
 * - Nested dropdowns use native <details> for a JS-lean disclosure.
 * - Shows the phone number and the "Book Appointment" CTA prominently.
 *
 * Desktop breakpoint (lg) hides the hamburger and hides the panel
 * entirely, so this component is a no-op above 1024px.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when the panel is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape to close.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mh-mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--mh-radius-sm)] border border-[color:var(--mh-border-strong)] text-[color:var(--mh-fg)] transition-colors hover:border-[color:var(--mh-copper-500)] hover:text-[color:var(--mh-copper-700)] lg:hidden"
      >
        <HamburgerIcon open={open} />
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-[color:var(--mh-ink-950)]/50 backdrop-blur-sm transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Slide-in panel */}
      <aside
        id="mh-mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Primary navigation"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[90vw] max-w-sm flex-col border-l border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-[color:var(--mh-border)] px-6 py-5">
          <Link href="/" onClick={() => setOpen(false)} aria-label="ManHair — home">
            <Wordmark size="sm" />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--mh-border-strong)] text-[color:var(--mh-ink-800)] transition-colors hover:border-[color:var(--mh-copper-500)] hover:text-[color:var(--mh-copper-700)]"
          >
            <CloseIcon />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="flex flex-col gap-1">
            {PRIMARY_NAV.map((item) => (
              <MobileItem key={item.label} item={item} onNavigate={() => setOpen(false)} />
            ))}
          </ul>
        </nav>

        <div className="border-t border-[color:var(--mh-border)] px-6 py-6">
          <a
            href={CONTACT.jacksonville.phoneHref}
            className="block text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--mh-copper-700)]"
            onClick={() => setOpen(false)}
          >
            {CONTACT.jacksonville.phone}
          </a>
          <Link
            href={HEADER_CTA.href}
            onClick={() => setOpen(false)}
            className="mh-btn mh-btn-primary mh-btn-block mt-4"
          >
            {HEADER_CTA.label}
          </Link>
        </div>
      </aside>
    </>
  );
}

function MobileItem({
  item,
  onNavigate,
  depth = 0,
}: {
  item: NavItem;
  onNavigate: () => void;
  depth?: number;
}) {
  if (!item.children || item.children.length === 0) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className={cn(
            "block py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--mh-fg)] transition-colors hover:text-[color:var(--mh-copper-700)]",
            depth > 0 && "text-[color:var(--mh-ink-800)] pl-4"
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }
  return (
    <li>
      <details className="group">
        <summary className="flex cursor-pointer items-center justify-between py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--mh-fg)] transition-colors hover:text-[color:var(--mh-copper-700)] [&::-webkit-details-marker]:hidden">
          <span>{item.label}</span>
          <span
            aria-hidden="true"
            className="ml-2 inline-flex h-6 w-6 items-center justify-center text-[color:var(--mh-ink-600)] transition-transform group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <ul className="mb-2 mt-1 border-l border-[color:var(--mh-border)] pl-3">
          {/* Also link to the parent's own href when it's a real page */}
          {item.href && item.href !== "#" ? (
            <li>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block py-2 text-xs uppercase tracking-[0.14em] text-[color:var(--mh-ink-600)] transition-colors hover:text-[color:var(--mh-copper-700)]"
              >
                {item.label} overview
              </Link>
            </li>
          ) : null}
          {item.children.map((c) => (
            <MobileItem
              key={c.label}
              item={c}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </ul>
      </details>
    </li>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="transition-transform"
      aria-hidden="true"
    >
      <line x1="1" y1={open ? 7 : 2} x2="17" y2={open ? 7 : 2} />
      <line x1="1" y1="7" x2="17" y2="7" opacity={open ? 0 : 1} />
      <line x1="1" y1={open ? 7 : 12} x2="17" y2={open ? 7 : 12} />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="2" y1="2" x2="12" y2="12" />
      <line x1="12" y1="2" x2="2" y2="12" />
    </svg>
  );
}

import Link from "next/link";
import { CONTACT, HEADER_CTA, PRIMARY_NAV, type NavItem } from "@/lib/site";
import { Wordmark } from "./Wordmark";
import { MobileNav } from "./MobileNav";

/**
 * Global site header.
 *
 * Layout:  [Wordmark]        [Primary nav]     [Phone] [Book Appointment] [Menu]
 *
 * - Sticky, dark charcoal background with a subtle backdrop blur.
 * - Copper "Book Appointment" pill CTA on the far right (renamed from
 *   the live "Contact Us" pill; same `/contact/` href, so internal
 *   linking / SEO stays intact).
 * - Primary nav hrefs match the live site exactly:
 *     Home, About (▾), How It Works (▾), Before & After, Locations
 *   Dropdowns are open-on-hover / open-on-focus using CSS only, so
 *   the header itself stays a server component. Mobile nav is
 *   handled by the `<MobileNav />` client component (hamburger +
 *   slide-in panel).
 */
export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)]/85 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--mh-bg)]/75">
      <div className="mh-container flex h-20 items-center justify-between gap-4 lg:gap-8">
        <Link
          href="/"
          className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--mh-copper-600)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--mh-bg)]"
          aria-label="ManHair — home"
        >
          <Wordmark size="md" priority />
        </Link>

        {/* Desktop primary nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {PRIMARY_NAV.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-3">
          <a
            href={CONTACT.jacksonville.phoneHref}
            className="hidden text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--mh-copper-700)] transition-colors hover:text-[color:var(--mh-copper-600)] md:inline-flex"
            aria-label={`Call ${CONTACT.jacksonville.phone}`}
          >
            {CONTACT.jacksonville.phone}
          </a>
          <Link
            href={HEADER_CTA.href}
            className="mh-btn mh-btn-primary hidden md:inline-flex"
          >
            {HEADER_CTA.label}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

/**
 * A top-level desktop nav item. If it has children, wraps its link
 * in a hover/focus group that reveals an absolutely-positioned
 * dropdown menu. Nested dropdowns (up to depth 2) render to the
 * side using the same pattern.
 */
function DesktopItem({ item }: { item: NavItem }) {
  const hasChildren = !!item.children?.length;
  return (
    <li className="relative group/top">
      <NavAnchor href={item.href} hasChildren={hasChildren} variant="top">
        {item.label}
        {hasChildren ? <Caret /> : null}
      </NavAnchor>
      {hasChildren ? (
        <div className="pointer-events-none absolute left-1/2 top-full z-40 mt-2 w-64 -translate-x-1/2 border border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] p-2 opacity-0 shadow-xl shadow-black/10 transition-opacity duration-150 group-hover/top:pointer-events-auto group-hover/top:opacity-100 group-focus-within/top:pointer-events-auto group-focus-within/top:opacity-100">
          <ul>
            {item.children!.map((c) => (
              <SubItem key={c.label} item={c} />
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}

function SubItem({ item }: { item: NavItem }) {
  const hasChildren = !!item.children?.length;
  return (
    <li className="relative group/sub">
      <NavAnchor href={item.href} hasChildren={hasChildren} variant="sub">
        <span>{item.label}</span>
        {hasChildren ? <span aria-hidden="true">›</span> : null}
      </NavAnchor>
      {hasChildren ? (
        <div className="pointer-events-none absolute left-full top-0 z-40 ml-1 w-56 border border-[color:var(--mh-border)] bg-[color:var(--mh-surface)] p-2 opacity-0 shadow-xl shadow-black/10 transition-opacity duration-150 group-hover/sub:pointer-events-auto group-hover/sub:opacity-100 group-focus-within/sub:pointer-events-auto group-focus-within/sub:opacity-100">
          <ul>
            {item.children!.map((cc) => (
              <SubItem key={cc.label} item={cc} />
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}

function NavAnchor({
  href,
  children,
  hasChildren,
  variant,
}: {
  href: string;
  children: React.ReactNode;
  hasChildren: boolean;
  variant: "top" | "sub";
}) {
  const isFakeParent = href === "#";
  // Non-navigable dropdown parents (href="#") render as a role="button"
  // span so screen readers don't announce a bogus destination.
  if (isFakeParent) {
    return (
      <span
        role="button"
        tabIndex={0}
        aria-haspopup={hasChildren ? "menu" : undefined}
        className={
          variant === "top"
            ? "inline-flex cursor-default items-center gap-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--mh-fg)]"
            : "flex cursor-default items-center justify-between gap-2 px-3 py-2 text-xs uppercase tracking-[0.14em] text-[color:var(--mh-ink-700)]"
        }
      >
        {children}
      </span>
    );
  }
  if (variant === "sub") {
    return (
      <Link
        href={href}
        className="flex items-center justify-between gap-2 px-3 py-2 text-xs uppercase tracking-[0.14em] text-[color:var(--mh-ink-800)] transition-colors hover:bg-[color:var(--mh-surface-elevated)] hover:text-[color:var(--mh-copper-700)] focus-visible:bg-[color:var(--mh-surface-elevated)] focus-visible:text-[color:var(--mh-copper-700)]"
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--mh-fg)] transition-colors hover:text-[color:var(--mh-copper-700)] focus:outline-none focus-visible:text-[color:var(--mh-copper-700)]"
      aria-haspopup={hasChildren ? "menu" : undefined}
    >
      {children}
    </Link>
  );
}

function Caret() {
  return (
    <svg
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-70"
      aria-hidden="true"
    >
      <polyline points="1 1.5 4 4.5 7 1.5" />
    </svg>
  );
}

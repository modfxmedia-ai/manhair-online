import Link from "next/link";
import type { ComponentType } from "react";
import { CONTACT, HEADER_CTA, PRIMARY_NAV, SOCIAL, type NavItem } from "@/lib/site";
import { Wordmark } from "./Wordmark";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui";
import {
  ArrowRightIcon,
  ArticleIcon,
  BuildingIcon,
  CompassIcon,
  CreditCardIcon,
  DropletIcon,
  HairStrandIcon,
  HelpCircleIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ScissorsIcon,
  SocialIcon,
  SparklesIcon,
  TagIcon,
} from "./icons";

/**
 * Global site header.
 *
 * Layout:
 *   Top utility bar (desktop only) — free-consultation note, both
 *   studio phone numbers, social icons.
 *   Main row — [Wordmark]   [Primary nav, centered]   [Phone] [Book Appointment] [Menu]
 *
 * - Sticky, light/cream background with a subtle backdrop blur + hairline shadow.
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
const TOPBAR_SOCIAL = SOCIAL.filter((s) => s.visibleInFooter).slice(0, 3);

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[color:var(--mh-bg)]/90 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--mh-bg)]/80 shadow-[0_1px_0_rgba(26,19,14,0.05)]">
      {/* Utility bar */}
      <div className="mh-topbar hidden lg:block">
        <div className="mh-container flex h-9 items-center justify-between gap-6">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--mh-ink-600)]">
            Free Consultation &middot; In-Home or In-Studio
          </p>
          <div className="flex items-center gap-5">
            <a href={CONTACT.studio.phoneHref} className="mh-topbar-link">
              <PhoneIcon size={12} />
              {CONTACT.studio.label}: {CONTACT.studio.phone}
            </a>
            <span aria-hidden="true" className="h-3 w-px bg-[color:var(--mh-border-strong)]" />
            <div className="flex items-center gap-1.5">
              {TOPBAR_SOCIAL.map((s) => {
                const Icon = SocialIcon[s.platform];
                return (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="mh-icon-btn"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main row */}
      <div className="mh-container flex h-16 items-center justify-between gap-3 md:h-20 md:gap-4 lg:gap-8">
        <Link
          href="/"
          className="mh-logo-link inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--mh-copper-600)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--mh-bg)]"
          aria-label="ManHair home"
        >
          <Wordmark size="md" priority />
        </Link>

        {/* Desktop primary nav */}
        <nav aria-label="Primary" className="hidden lg:flex lg:flex-1 lg:justify-center">
          <ul className="flex items-center gap-7 xl:gap-9">
            {PRIMARY_NAV.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        {/* Right-side actions. On mobile/tablet only the phone icon +
        hamburger show — the "Book Appointment" pill would crowd the
        row at those widths and duplicates the drawer's own CTA. */}
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={CONTACT.studio.phoneHref}
            className="mh-icon-btn !h-10 !w-10 border !border-[color:var(--mh-border-strong)]"
            aria-label={`Call ${CONTACT.studio.phone}`}
          >
            <PhoneIcon size={16} />
          </a>
          {/* CTA pill hidden on mobile/tablet — the drawer carries
          its own Book Appointment button. Wrapped in a span with
          `hidden lg:contents` so the utility overrides `.mh-btn`'s
          default `display: inline-flex`. */}
          <span className="hidden lg:contents">
            <Button href={HEADER_CTA.href} size="sm">
              {HEADER_CTA.label}
            </Button>
          </span>
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
 *
 * If a top-level label has an entry in `MEGA_MENU`, the panel
 * renders as a rich multi-column mega menu with icons, subtitles,
 * and a featured promo tile (see `MegaPanel`). Otherwise it falls
 * back to the compact vertical list dropdown.
 *
 * The dropdown container uses `pt-3` (not `mt-3`) so the trigger
 * and menu form ONE continuous hover target — the top gap becomes
 * an invisible "bridge" that prevents the group from losing hover
 * as the pointer travels down. Same trick with `pl-2` for the
 * nested side dropdown. Combined with the CSS `visibility` toggle
 * (see `.mh-navdrop` in globals.css) this eliminates flicker.
 */
function DesktopItem({ item }: { item: NavItem }) {
  const hasChildren = !!item.children?.length;
  const mega = MEGA_MENU[item.label];
  return (
    <li className="relative group/top">
      <NavAnchor href={item.href} hasChildren={hasChildren} variant="top">
        {item.label}
        {hasChildren ? <Caret /> : null}
      </NavAnchor>
      {hasChildren && mega ? (
        <div className="mh-mega-wrap absolute left-1/2 top-full z-40 -translate-x-1/2 pt-3">
          <MegaPanel config={mega} />
        </div>
      ) : hasChildren ? (
        <div className="mh-navdrop-wrap absolute left-1/2 top-full z-40 -translate-x-1/2 pt-3">
          <div className="mh-navdrop w-64 border border-[color:var(--mh-border)] p-2">
            <ul>
              {item.children!.map((c, i) => (
                <SubItem key={c.label} item={c} index={i} />
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </li>
  );
}

function SubItem({ item, index = 0 }: { item: NavItem; index?: number }) {
  const hasChildren = !!item.children?.length;
  return (
    <li
      className="relative group/sub mh-navdrop-item"
      style={{ ["--i" as string]: index }}
    >
      <NavAnchor href={item.href} hasChildren={hasChildren} variant="sub">
        <span>{item.label}</span>
        {hasChildren ? (
          <span aria-hidden="true" className="mh-navdrop-chev">
            ›
          </span>
        ) : null}
      </NavAnchor>
      {hasChildren ? (
        <div className="mh-navdrop-side-wrap absolute left-full top-0 z-40 pl-2">
          <div className="mh-navdrop-side w-56 border border-[color:var(--mh-border)] p-2">
            <ul>
              {item.children!.map((cc, i) => (
                <SubItem key={cc.label} item={cc} index={i} />
              ))}
            </ul>
          </div>
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
            ? "mh-nav-link cursor-default text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--mh-fg)]"
            : "mh-navdrop-link flex cursor-default items-center justify-between gap-2 rounded-[var(--mh-radius-sm)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[color:var(--mh-ink-700)]"
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
        className="mh-navdrop-link flex items-center justify-between gap-2 rounded-[var(--mh-radius-sm)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[color:var(--mh-ink-800)]"
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className="mh-nav-link text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--mh-fg)] transition-colors hover:text-[color:var(--mh-copper-700)] focus:outline-none focus-visible:text-[color:var(--mh-copper-700)]"
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
      className="mh-nav-caret opacity-70"
      aria-hidden="true"
    >
      <polyline points="1 1.5 4 4.5 7 1.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------
 * Mega menu — rich multi-column dropdown for top-level nav items
 * with substantial children. Each column has an eyebrow heading and
 * icon+title+description rows. A "Featured" tile on the right
 * highlights a marquee page with a soft gold-wash gradient.
 * ------------------------------------------------------------------ */

type MegaLink = {
  label: string;
  href: string;
  desc: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
};

type MegaColumn = {
  eyebrow: string;
  items: MegaLink[];
};

type MegaFeatured = {
  eyebrow: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
  Icon: ComponentType<{ size?: number; className?: string }>;
};

type MegaConfig = {
  columns: MegaColumn[];
  featured: MegaFeatured;
};

const MEGA_MENU: Record<string, MegaConfig> = {
  About: {
    columns: [
      {
        eyebrow: "Company",
        items: [
          {
            label: "Payment Plans",
            href: "/payment-plans/",
            desc: "Cherry financing: treat now, pay later.",
            Icon: CreditCardIcon,
          },
          {
            label: "Franchise",
            href: "/partnerprogram/",
            desc: "Partner with ManHair: become an owner.",
            Icon: BuildingIcon,
          },
          {
            label: "FAQ",
            href: "/faq/",
            desc: "The most-asked hair-system questions.",
            Icon: HelpCircleIcon,
          },
          {
            label: "Blog",
            href: "/blog/",
            desc: "The ManHair journal: stories & guides.",
            Icon: ArticleIcon,
          },
          {
            label: "Contact",
            href: "/contact/",
            desc: "Reach out, we usually reply same-day.",
            Icon: MailIcon,
          },
        ],
      },
      {
        eyebrow: "Studio",
        items: [
          {
            label: "Orange County, CA",
            href: "/orange-county-ca/",
            desc: "By-appointment studio serving Orange County.",
            Icon: MapPinIcon,
          },
          {
            label: "All Locations",
            href: "/locations/",
            desc: "Hours, map, and phone.",
            Icon: CompassIcon,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Founding offer",
      title: "Your first consultation is on us.",
      body: "In-home or in-studio: no cost, no pressure, no obligation.",
      cta: { label: "Book Free Consultation", href: "/book-my-appointment/" },
      Icon: SparklesIcon,
    },
  },
  "How It Works": {
    columns: [
      {
        eyebrow: "Solutions",
        items: [
          {
            label: "Receding Hairline Restoration",
            href: "/receding-hairline-restoration/",
            desc: "Rebuild the frontal zone and hairline.",
            Icon: HairStrandIcon,
          },
          {
            label: "Alopecia Hair Loss",
            href: "/alopecia-hair-loss/",
            desc: "A non-surgical answer to alopecia.",
            Icon: DropletIcon,
          },
          {
            label: "Men\u2019s Hair Styles",
            href: "/mens-hair-styles/",
            desc: "Cuts, textures, and styles built for you.",
            Icon: ScissorsIcon,
          },
        ],
      },
      {
        eyebrow: "Pricing & payments",
        items: [
          {
            label: "Our Prices",
            href: "/prices/",
            desc: "Transparent, session-based pricing.",
            Icon: TagIcon,
          },
          {
            label: "Payment Plans",
            href: "/payment-plans/",
            desc: "0% intro APR financing via Cherry.",
            Icon: CreditCardIcon,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "See it for yourself",
      title: "Before & After: real transformations.",
      body: "Seven case studies from actual ManHair clients.",
      cta: { label: "View the Gallery", href: "/before-after/" },
      Icon: CompassIcon,
    },
  },
};

function MegaPanel({ config }: { config: MegaConfig }) {
  const { columns, featured } = config;
  const FeaturedIcon = featured.Icon;
  return (
    <div className="mh-mega border border-[color:var(--mh-border)]" role="menu">
      <div className="mh-mega-inner">
        {columns.map((col) => (
          <div key={col.eyebrow} className="mh-mega-col">
            <p className="mh-mega-eyebrow">{col.eyebrow}</p>
            <ul>
              {col.items.map((it, i) => {
                const Icon = it.Icon;
                return (
                  <li
                    key={it.label}
                    className="mh-mega-item"
                    style={{ ["--i" as string]: i }}
                  >
                    <Link href={it.href} className="mh-mega-link" role="menuitem">
                      <span className="mh-mega-icon" aria-hidden="true">
                        <Icon size={18} />
                      </span>
                      <span className="mh-mega-body">
                        <span className="mh-mega-title">{it.label}</span>
                        <span className="mh-mega-desc">{it.desc}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <div
          className="mh-mega-featured"
          style={{ ["--i" as string]: columns.reduce((n, c) => n + c.items.length, 0) }}
        >
          <span aria-hidden="true" className="mh-mega-featured-glow" />
          <p className="mh-mega-eyebrow mh-mega-featured-eyebrow">{featured.eyebrow}</p>
          <span className="mh-mega-featured-icon" aria-hidden="true">
            <FeaturedIcon size={22} />
          </span>
          <p className="mh-mega-featured-title">{featured.title}</p>
          <p className="mh-mega-featured-body">{featured.body}</p>
          <Link href={featured.cta.href} className="mh-mega-featured-cta">
            {featured.cta.label}
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

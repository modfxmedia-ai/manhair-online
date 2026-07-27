import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Button — primary CTA and outlined/ghost variants.
 *
 * Design spec:
 *   - Solid copper primary, pill-shaped, uppercase tracked label
 *   - Outlined ghost secondary, transparent bg, copper hover
 *   - Renders as `<Link>` if `href` is provided, else `<button>`
 *
 * Base atoms live in `app/globals.css` (`.mh-btn` + variant classes)
 * so hover / focus / active states cascade from a single source.
 */

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  className?: string;
  children: ReactNode;
};

type LinkishProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonishProps = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children">;

function classes(variant: Variant, size: Size, block: boolean, extra?: string) {
  return cn(
    "mh-btn",
    variant === "primary" && "mh-btn-primary",
    variant === "ghost" && "mh-btn-ghost",
    size === "sm" && "mh-btn-sm",
    size === "lg" && "mh-btn-lg",
    block && "mh-btn-block",
    extra
  );
}

export function Button(
  props: LinkishProps | ButtonishProps
): React.ReactElement {
  const {
    variant = "primary",
    size = "md",
    block = false,
    className,
    children,
    ...rest
  } = props as CommonProps & Record<string, unknown>;
  const cls = classes(variant, size, block, className);

  if ("href" in props && typeof props.href === "string") {
    const {
      href,
      external,
      ...linkRest
    } = rest as { href: string; external?: boolean };
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={cls}
          rel={external ? "noopener noreferrer" : undefined}
          target={external ? "_blank" : undefined}
          {...(linkRest as ComponentProps<"a">)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...(linkRest as Omit<ComponentProps<typeof Link>, "href" | "className">)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}

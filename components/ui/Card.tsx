import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Card — the standard dark surface panel with a hairline border.
 *
 * Accent modes place a copper edge on the card:
 *   - accent="border": full copper-tinted border + inner ring
 *   - accent="top":    2px copper bar along the top
 *   - accent="left":   2px copper bar along the left
 *
 * When `href` is provided the whole card becomes a Link with a
 * subtle hover state (border → copper). Otherwise it renders a
 * plain `<div>`.
 */

type Accent = "none" | "border" | "top" | "left";

type CommonProps = {
  accent?: Accent;
  padding?: "sm" | "md" | "lg" | "none";
  className?: string;
  children: ReactNode;
};

type DivProps = CommonProps &
  Omit<ComponentProps<"div">, "className" | "children">;

type LinkProps = CommonProps &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

function classes(accent: Accent, padding: NonNullable<CommonProps["padding"]>, extra?: string, interactive?: boolean) {
  return cn(
    "mh-card block",
    accent === "border" && "mh-card-accent",
    accent === "top" && "mh-card-accent-top",
    accent === "left" && "mh-card-accent-left",
    padding === "sm" && "p-5",
    padding === "md" && "p-6 md:p-8",
    padding === "lg" && "p-8 md:p-10",
    padding === "none" && "p-0",
    interactive && "transition-colors hover:border-[color:var(--mh-copper-500)]",
    extra
  );
}

export function Card(props: DivProps | LinkProps) {
  const {
    accent = "none",
    padding = "md",
    className,
    children,
    ...rest
  } = props as CommonProps & Record<string, unknown>;

  if ("href" in props && typeof props.href === "string") {
    const { href, ...linkRest } = rest as { href: string };
    const cls = classes(accent, padding, className, true);
    return (
      <Link href={href} className={cls} {...(linkRest as Omit<ComponentProps<typeof Link>, "href" | "className">)}>
        {children}
      </Link>
    );
  }

  const cls = classes(accent, padding, className);
  return (
    <div className={cls} {...(rest as ComponentProps<"div">)}>
      {children}
    </div>
  );
}

"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { HEADER_CTA } from "@/lib/site";

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

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

/**
 * Site-wide booking CTA. Navigates to `/booking/` so every “Book a
 * Private Consultation” button opens the calendar page.
 */
export function BookingButton({
  variant = "primary",
  size = "md",
  block = false,
  className,
  children = HEADER_CTA.label,
  onClick,
  ...rest
}: {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentProps<typeof Link>, "className" | "children" | "href">) {
  return (
    <Link
      href="/booking/"
      className={classes(variant, size, block, className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Link>
  );
}

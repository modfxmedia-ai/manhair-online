"use client";

import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { HEADER_CTA } from "@/lib/site";
import { openBookingModal } from "@/components/BookingModal";

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
 * Drop-in replacement for `Button` that opens the site-wide booking
 * form modal instead of navigating anywhere. Same visual API as
 * `Button` (variant/size/block/className) so it can swap in wherever
 * a CTA used to link to the old `/contact/` or `/consultation/` pages.
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
} & Omit<ComponentProps<"button">, "className" | "children" | "type">) {
  return (
    <button
      type="button"
      className={classes(variant, size, block, className)}
      onClick={(e) => {
        onClick?.(e);
        openBookingModal();
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { openBookingModal } from "@/components/BookingModal";

/**
 * Inline text-link version of `BookingButton`, for CTAs embedded in a
 * sentence (e.g. "Call us today"). Opens the booking form modal.
 */
export function BookingLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={openBookingModal}
      className={cn("cursor-pointer border-0 bg-transparent p-0 font-inherit", className)}
    >
      {children}
    </button>
  );
}

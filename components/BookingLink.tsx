import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Inline text-link version of `BookingButton`, for CTAs embedded in a
 * sentence. Goes to the `/booking/` calendar page.
 */
export function BookingLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href="/booking/" className={cn("font-inherit", className)}>
      {children}
    </Link>
  );
}

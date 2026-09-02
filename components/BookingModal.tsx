"use client";

import { useEffect, useState } from "react";

const OPEN_EVENT = "manhair:open-booking-modal";

/** Dispatches the global event that opens the booking form modal. */
export function openBookingModal() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

/**
 * Site-wide booking form modal. Mounted once in the root layout and
 * opened from anywhere via `openBookingModal()` (see `BookingButton`
 * / `BookingLink`), since most trigger sites are Server Components.
 */
export function BookingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book an appointment"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-[20px] bg-white shadow-2xl"
        style={{ height: "min(85vh, 820px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--mh-ink-950)]/80 text-lg leading-none text-white transition-colors hover:bg-[color:var(--mh-copper-600)]"
        >
          &times;
        </button>
        <iframe
          src="https://link.manhaironline.com/widget/form/hh9qLIaLPQ8U3Lmqc9Nf"
          style={{ width: "100%", height: "100%", border: "none", borderRadius: "20px" }}
          id="inline-hh9qLIaLPQ8U3Lmqc9Nf"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="ManHair Optin"
          data-height="798"
          data-layout-iframe-id="inline-hh9qLIaLPQ8U3Lmqc9Nf"
          data-form-id="hh9qLIaLPQ8U3Lmqc9Nf"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="ManHair Optin"
        />
      </div>
    </div>
  );
}

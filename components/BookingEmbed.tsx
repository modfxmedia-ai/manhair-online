"use client";

import { useEffect, useRef } from "react";

const SRC = "https://link.manhaironline.com/widget/bookings/mh-consultation-call";

/**
 * GoHighLevel consultation calendar.
 *
 * The site-wide `form_embed.js` parks matching iframes off-screen
 * (`left: -9999px`, `opacity: 0`) until a resize handshake lands.
 * That handshake often never completes for this booking widget, so
 * we keep the iframe in normal flow and visible.
 */
export default function BookingEmbed() {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = ref.current;
    if (!frame) return;

    const reveal = () => {
      const parked =
        frame.style.visibility === "hidden" ||
        frame.style.opacity === "0" ||
        frame.style.left === "-9999px" ||
        frame.style.position === "absolute" ||
        frame.style.height === "0px";
      if (!parked) return;
      frame.style.opacity = "1";
      frame.style.visibility = "visible";
      frame.style.pointerEvents = "auto";
      frame.style.display = "block";
      frame.style.position = "relative";
      frame.style.left = "0";
      frame.style.width = "100%";
      if (!frame.style.height || frame.style.height === "0px") {
        frame.style.height = "1000px";
      }
      frame.style.minHeight = "720px";
    };

    reveal();
    const timers = [400, 1200, 3000].map((ms) => window.setTimeout(reveal, ms));
    frame.addEventListener("load", reveal);
    const mo = new MutationObserver(reveal);
    mo.observe(frame, {
      attributes: true,
      attributeFilter: ["style", "data-initial-iframe-hidden"],
    });

    return () => {
      timers.forEach(window.clearTimeout);
      frame.removeEventListener("load", reveal);
      mo.disconnect();
    };
  }, []);

  return (
    <div className="mh-booking-embed">
      <iframe
        ref={ref}
        src={SRC}
        title="Book a ManHair consultation"
        id="mh-consultation-call"
        scrolling="no"
        className="mh-booking-iframe"
        style={{ width: "100%", border: "none", overflow: "hidden" }}
      />
    </div>
  );
}

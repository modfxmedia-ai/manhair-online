import Script from "next/script";

/**
 * GoHighLevel consultation calendar. The widget script resizes the
 * iframe; we give it a tall initial frame so mobile does not clip
 * the first calendar month.
 */
export default function BookingEmbed() {
  return (
    <>
      <iframe
        src="https://link.manhaironline.com/widget/bookings/mh-consultation-call"
        title="Book a ManHair consultation"
        id="mh-consultation-call"
        scrolling="no"
        className="block w-full border-0 bg-white"
        style={{
          width: "100%",
          border: "none",
          overflow: "hidden",
          minHeight: "40rem",
          height: "clamp(40rem, 92dvh, 58rem)",
        }}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}

import { cn } from "@/lib/cn";

/**
 * Wordmark — brand mark used in the header + footer.
 *
 * Renders the official white PNG logo. On the light cream palette
 * (`tone="dark"`, the default) the mark is tinted to warm ink via a
 * CSS filter so it stays legible; on dark surfaces (`tone="light"`)
 * it renders as the original white artwork.
 */

const LOGO_SRC = "/images/logo-png/MH-white-Logo-copy-300x76.png";

type Size = "sm" | "md" | "lg";
type Tone = "dark" | "light";

/** Rendered heights per size; `w-auto` preserves the 300:76 aspect. */
const HEIGHT: Record<Size, string> = {
  sm: "h-7",
  md: "h-8 md:h-9",
  lg: "h-11 md:h-12",
};

export function Wordmark({
  size = "md",
  tone = "dark",
  className,
  priority = false,
}: {
  size?: Size;
  tone?: Tone;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC}
      alt="ManHair: Hair Restoration Jacksonville & Atlanta"
      width={300}
      height={76}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn(
        "block w-auto max-w-none select-none",
        HEIGHT[size],
        tone === "dark" && "mh-logo-ink",
        className
      )}
    />
  );
}

/** Legacy alias — the mark is now always the PNG logo. */
export function PngWordmark({
  size = "md",
  className,
}: {
  size?: Size;
  className?: string;
}) {
  return <Wordmark size={size} tone="light" className={className} />;
}

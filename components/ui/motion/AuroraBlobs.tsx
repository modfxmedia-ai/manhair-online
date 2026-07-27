import { cn } from "@/lib/cn";

/**
 * AuroraBlobs — slow-drifting soft-focus color blobs used as an
 * ambient background layer. Pure CSS keyframe animation.
 *
 * Absolutely positioned inside its parent, so wrap it in a
 * `relative overflow-hidden` container. Sits behind content
 * via low z-index; use `pointer-events-none` (baked in).
 */
export function AuroraBlobs({
  className,
  intensity = "soft",
}: {
  className?: string;
  intensity?: "soft" | "strong";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "mh-aurora",
        intensity === "strong" && "[&_.mh-aurora-blob]:opacity-80",
        className
      )}
    >
      <span className="mh-aurora-blob b1" />
      <span className="mh-aurora-blob b2" />
      <span className="mh-aurora-blob b3" />
    </div>
  );
}

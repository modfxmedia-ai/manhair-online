import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * BeforeAfterCard — a single before/after showcase tile.
 *
 * The seven images in `/public/images/before-after/` are already
 * side-by-side pairs (before on the left, after on the right of
 * the same photo). This card presents them full, uncropped, with:
 *
 * - Slow ambient KenBurns zoom on the image (server-CSS keyframe).
 * - Diagonal shine sweep on hover (see `.mh-ba-card` in globals).
 *
 * `aspect` controls the tile shape. Grid parent decides column
 * span via className; the card fills its container.
 */
export function BeforeAfterCard({
  src,
  alt,
  aspect = "square",
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  aspect?: "square" | "portrait" | "wide" | "video";
  className?: string;
  priority?: boolean;
}) {
  const aspectClass =
    aspect === "portrait"
      ? "aspect-[4/5]"
      : aspect === "wide"
      ? "aspect-[3/2]"
      : aspect === "video"
      ? "aspect-video"
      : "aspect-square";

  return (
    <figure
      className={cn(
        "mh-ba-card group",
        aspectClass,
        className
      )}
      tabIndex={0}
    >
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          priority={priority}
          unoptimized={src.includes("/wp-content/")}
          className="mh-image-kenburns object-contain"
        />
      </div>
    </figure>
  );
}

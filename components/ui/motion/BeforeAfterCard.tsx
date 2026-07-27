import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * BeforeAfterCard — a single before/after showcase tile.
 *
 * The seven images in `/public/images/before-after/` are already
 * side-by-side pairs (before on the left, after on the right of
 * the same photo). This card presents them full-bleed with:
 *
 * - Slow ambient KenBurns zoom on the image (server-CSS keyframe).
 * - Diagonal shine sweep on hover (see `.mh-ba-card` in globals).
 * - A "BEFORE / AFTER" chip pinned to the top-left in gold.
 * - A large italic caption in cream ivory over a soft
 *   bottom-gradient veil, sliding up on hover for extra
 *   interactivity.
 *
 * `aspect` controls the tile shape. Grid parent decides column
 * span via className; the card fills its container.
 */
export function BeforeAfterCard({
  src,
  alt,
  caption,
  index,
  aspect = "square",
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  /** Optional 1-based label displayed as "No. 01". */
  index?: number;
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
      <span className="mh-ba-badge">
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--mh-on-accent)]"
        />
        Before &middot; After
      </span>

      {typeof index === "number" ? (
        <span className="absolute right-4 top-4 z-[3] font-display text-3xl font-light text-[#FBF3DD]/70 drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)] md:text-4xl">
          <span className="text-xs align-super tracking-[0.16em] uppercase text-[color:var(--mh-copper-300)] mr-1">
            No.
          </span>
          {String(index).padStart(2, "0")}
        </span>
      ) : null}

      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          priority={priority}
          className="mh-image-kenburns object-cover"
        />
      </div>

      {caption ? (
        <figcaption className="mh-ba-caption transition-transform duration-500 ease-out group-hover:-translate-y-1 group-focus-within:-translate-y-1">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

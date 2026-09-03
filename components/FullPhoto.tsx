import Image from "next/image";

const SIZE_CLASS = {
  hero: "max-w-[26rem]",
  section: "max-w-[22rem]",
} as const;

/** Full, uncropped photo. Capped so low-res shots stay sharp instead of stretching. */
export function FullPhoto({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 1024px) 90vw, 416px",
  size = "section",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  size?: keyof typeof SIZE_CLASS;
}) {
  return (
    <figure className={`mx-auto w-full ${SIZE_CLASS[size]}`}>
      <div className="overflow-hidden rounded-[var(--mh-radius-md)] bg-[color:var(--mh-ink-50)] p-2 ring-1 ring-[color:var(--mh-border)]">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full rounded-[calc(var(--mh-radius-md)-4px)]"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </figure>
  );
}

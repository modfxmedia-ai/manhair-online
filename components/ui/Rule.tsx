import { cn } from "@/lib/cn";

/**
 * Rule — the short copper hairline that sits under the eyebrow +
 * headline pair. Alias for `.mh-rule`.
 */
export function Rule({
  className,
  width,
}: {
  className?: string;
  width?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("mh-rule", className)}
      style={width ? { width } : undefined}
    />
  );
}

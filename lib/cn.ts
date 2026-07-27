/**
 * Utility for merging class names.
 * Falsy values (undefined, null, false, "") are dropped so callers
 * can conditionally include classes without ternary noise.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

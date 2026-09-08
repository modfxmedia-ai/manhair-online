import NextLink from "next/link";
import type { ComponentProps } from "react";
import { siteUrl } from "@/lib/site";

type Props = ComponentProps<typeof NextLink>;

/**
 * Next.js Link that always publishes internal hrefs as
 * `https://www.manhaironline.com/...`, matching the live site.
 */
export function SiteLink({ href, ...props }: Props) {
  const resolved = typeof href === "string" ? siteUrl(href) : href;
  return <NextLink href={resolved} {...props} />;
}

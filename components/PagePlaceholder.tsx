import Link from "next/link";
import { CONTACT, SITE } from "@/lib/site";

/**
 * Scaffolded page shell. Renders correct H1 + verbatim meta description +
 * placeholder body copy while we finalize per-page templates. SEO parity
 * (title/desc/canonical/OG/JSON-LD) is handled by the route file.
 */
export function PagePlaceholder({
  title,
  description,
  path,
  eyebrow,
  children,
}: {
  title: string;
  description?: string | null;
  path: string;
  eyebrow?: string;
  children?: React.ReactNode;
}) {
  // Derive the H1 from the meta title by stripping the site suffix.
  const suffixes = [
    ` | ${SITE.siteName}`,
    ` | ManHair | Hair Restoration Jacksonville and Atlanta`,
    ` | Jacksonville's Leading Hair Loss Solution for Men`,
    ` | ManHair`,
    ` - ${SITE.siteName}`,
  ];
  let heading = title;
  for (const s of suffixes) if (heading.endsWith(s)) heading = heading.slice(0, -s.length);

  return (
    <>
      {/* Page hero */}
      <section className="border-b border-[color:var(--mh-border)] bg-[color:var(--mh-bg)]">
        <div className="mh-container py-24 md:py-28">
          <p className="mh-eyebrow">{eyebrow ?? "ManHair"}</p>
          <h1 className="mt-5 mh-display text-[clamp(2.2rem,3.4vw+1rem,3.8rem)] max-w-4xl">
            {heading}
          </h1>
          <span className="mh-rule mt-8" aria-hidden="true" />
          {description ? (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--mh-ink-800)]">
              {description}
            </p>
          ) : null}
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact/" className="mh-btn mh-btn-primary">
              Book an Appointment
            </Link>
            <a
              href={CONTACT.jacksonville.phoneHref}
              className="mh-btn mh-btn-ghost"
            >
              Call {CONTACT.jacksonville.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="border-b border-[color:var(--mh-border)]">
        <div className="mh-container py-20">
          <div className="mh-prose max-w-3xl">
            {children ?? (
              <>
                <p>
                  We&rsquo;re rebuilding this page with the new visual system
                  while preserving every word of the original content. Full
                  content is currently being migrated section-by-section &mdash;
                  the URL, title, and search metadata for{" "}
                  <code className="text-[color:var(--mh-copper-400)]">
                    {path}
                  </code>{" "}
                  are already in place for search engines.
                </p>
                <p>
                  In the meantime, please explore the site or{" "}
                  <Link href="/contact/">get in touch</Link> and one of our
                  hair specialists will follow up right away.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

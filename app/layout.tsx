import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntroSplash } from "@/components/IntroSplash";
import { JsonLd } from "@/components/JsonLd";
import { SITE, SOCIAL } from "@/lib/site";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Outfit — geometric sans used for all display headlines. Variable
// weight axis (100–900) so a single import covers everything from
// light accent phrases to bold H1s. Outfit ships no italic face,
// so the design system's italic accent below relies on a lighter
// weight + gold color instead of true italic.
const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

/**
 * Root metadata. Page-level `generateMetadata` / `metadata` exports
 * override title/description/canonical/OG per route. Values here act
 * as the default fallback and set `metadataBase` for relative URLs.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: SITE.siteName,
    template: "%s",
  },
  description: SITE.brandStatement,
  applicationName: SITE.siteName,
  openGraph: {
    siteName: SITE.siteName,
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  } as Metadata["robots"],
};

/** Site-wide Organization + WebSite graph (identical shape to the
 *  Yoast-generated payload on the live site, so search engines see
 *  the same entity references). */
const SITE_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE.origin}/#website`,
      url: `${SITE.origin}/`,
      name: SITE.siteName,
      description: SITE.tagline,
      publisher: { "@id": `${SITE.origin}/#organization` },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE.origin}/?s={search_term_string}`,
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${SITE.origin}/#organization`,
      name: SITE.orgName,
      url: `${SITE.origin}/`,
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": `${SITE.origin}/#/schema/logo/image/`,
        url: `${SITE.origin}${SITE.logo.url}`,
        contentUrl: `${SITE.origin}${SITE.logo.url}`,
        width: SITE.logo.width,
        height: SITE.logo.height,
        caption: SITE.logo.caption,
      },
      image: { "@id": `${SITE.origin}/#/schema/logo/image/` },
      sameAs: SOCIAL.map((s) => s.href),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--mh-bg)] text-[color:var(--mh-fg)] selection:bg-[color:var(--mh-copper-200)]">
        <JsonLd data={SITE_GRAPH} />
        <IntroSplash />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a95e182e48bae5398803e54"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}


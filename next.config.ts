import type { NextConfig } from "next";

// Live production origin whose assets we mirror during the migration.
// All references to /wp-content/uploads/* in existing content resolve here
// so the historical image URLs never 404 on the new deployment.
const LIVE_ORIGIN = "https://www.manhaironline.com";

const nextConfig: NextConfig = {
  // Every URL on the live site ends with a trailing slash. Preserve that.
  trailingSlash: true,

  // Image optimization: allow next/image to source from the live origin
  // (used until we finish migrating assets to first-party storage).
  //
  // Local /images/* go through the optimizer. WordPress /wp-content/*
  // images set `unoptimized` on the <Image> because the optimizer
  // cannot follow the rewrite fallback below.
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.manhaironline.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "manhaironline.com",
        pathname: "/wp-content/**",
      },
    ],
  },

  // Fallback rewrite: any /wp-content/* request that isn't served locally
  // is transparently proxied to the live origin so no historical asset URL
  // breaks during migration.
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        {
          source: "/wp-content/:path*",
          destination: `${LIVE_ORIGIN}/wp-content/:path*`,
        },
      ],
    };
  },

  // 301 redirects for URL restructuring per ModFX SEO spec.
  // Legacy paths -> consolidated new paths. Preserves incoming links
  // (backlinks, indexed URLs, bookmarks) and passes PageRank through
  // a permanent redirect.
  async redirects() {
    return [
      // Apex → www, matching the live WordPress host.
      {
        source: "/",
        has: [{ type: "host", value: "manhaironline.com" }],
        destination: `${LIVE_ORIGIN}/`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "manhaironline.com" }],
        destination: `${LIVE_ORIGIN}/:path*`,
        permanent: true,
      },
      { source: "/before-after", destination: "/results/", permanent: true },
      { source: "/about-us", destination: "/about/", permanent: true },
      { source: "/prices", destination: "/", permanent: true },
      { source: "/prices/", destination: "/", permanent: true },
      { source: "/pricing", destination: "/", permanent: true },
      { source: "/pricing/", destination: "/", permanent: true },
      { source: "/landing-page", destination: "/", permanent: true },
      { source: "/landing-page/", destination: "/", permanent: true },
      { source: "/partnerprogram", destination: "/partner-program/", permanent: true },
      { source: "/partnerprogram/", destination: "/partner-program/", permanent: true },
    ];
  },
};

export default nextConfig;

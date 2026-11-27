import type { NextConfig } from "next";
import {
  htmlCacheHeaders,
  securityHeaders,
  staticCacheHeaders,
} from "./lib/security-headers";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // AASA on the apex host must return 200 JSON with no redirect.
        source: "/:path((?!\\.well-known(?:/|$)).*)",
        has: [
          {
            type: "host",
            value: "genomatch\\.app",
          },
        ],
        destination: "https://www.genomatch.app/:path*",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    // Favicons must be usable cross-origin (Google SERP). Rules after catch-all
    // so CORP/Cache-Control win on merge.
    const faviconCorsHeaders = [
      { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
      { key: "Access-Control-Allow-Origin", value: "*" },
      {
        key: "Cache-Control",
        value: "public, max-age=86400, must-revalidate",
      },
    ];

    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [...securityHeaders, ...staticCacheHeaders],
      },
      {
        source: "/:path*",
        headers: [...securityHeaders, ...htmlCacheHeaders],
      },
      {
        source: "/favicon.ico",
        headers: faviconCorsHeaders,
      },
      {
        source: "/favicon.png",
        headers: faviconCorsHeaders,
      },
      {
        source: "/apple-touch-icon.png",
        headers: faviconCorsHeaders,
      },
    ];
  },
};

export default nextConfig;

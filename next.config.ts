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
        source: "/:path*",
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
    return [
      {
        source: "/_next/static/:path*",
        headers: [...securityHeaders, ...staticCacheHeaders],
      },
      {
        source: "/:path*",
        headers: [...securityHeaders, ...htmlCacheHeaders],
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    // TODO: Remove this when Next.js supports these packages natively
    "@prisma/client",
    "@prisma/adapter-neon",
    "@neondatabase/serverless",
  ],
  // TODO: Find what this does
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
        port: "",
      },
    ],
  },
  experimental: {
    nodeMiddleware: true,
  },
};

export default nextConfig;

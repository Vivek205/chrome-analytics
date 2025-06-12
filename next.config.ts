import type { NextConfig } from "next";


const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});


const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [
    // TODO: Remove these and test if the app still works
    "@prisma/client",
    "@prisma/adapter-neon",
    "@neondatabase/serverless"],
  poweredByHeader: false,
};


export default withBundleAnalyzer(nextConfig);

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

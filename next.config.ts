import type { NextConfig } from "next";


const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});


const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["@prisma/client", "./prisma/client"],
  poweredByHeader: false,
};


export default withBundleAnalyzer(nextConfig);

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

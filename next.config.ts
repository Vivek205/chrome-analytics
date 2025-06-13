import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
   serverExternalPackages: [
    "@prisma/client",
    "@prisma/adapter-neon",
    "@neondatabase/serverless"],
  poweredByHeader: false,
}
 
export default nextConfig
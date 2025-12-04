import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  serverExternalPackages: ['@prisma/client'],
  // Optimize images
  images: {
    domains: ['picsum.photos', 'drive.google.com', 'i.ytimg.com'],
    unoptimized: true,
  },
};

export default nextConfig;

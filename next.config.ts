import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
};

export default nextConfig;

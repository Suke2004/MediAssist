import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.cache = false; // disable webpack persistent cache
    return config;
  },
};

export default nextConfig;

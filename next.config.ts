import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;

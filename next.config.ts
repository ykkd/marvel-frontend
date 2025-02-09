import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "standalone",
  env: {
    MARVEL_API_PUBLIC_KEY: process.env.MARVEL_API_PUBLIC_KEY,
    MARVEL_API_PRIVATE_KEY: process.env.MARVEL_API_PRIVATE_KEY,
  },
};

export default nextConfig;

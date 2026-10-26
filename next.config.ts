import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  // The Docker image runs the standalone server (`node server.js`), while
  // Vercel expects its own build output layout. Vercel sets VERCEL=1.
  output: process.env.VERCEL ? undefined : "standalone",
};

export default nextConfig;


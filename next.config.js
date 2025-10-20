/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  // If you ever need to bypass type errors during local mobile dev:
  // typescript: { ignoreBuildErrors: true },
};
module.exports = nextConfig;

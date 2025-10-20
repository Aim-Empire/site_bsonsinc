/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  // If you absolutely must bypass TS on local mobile dev, uncomment:
  // typescript: { ignoreBuildErrors: true },
};
module.exports = nextConfig;

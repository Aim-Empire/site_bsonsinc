/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  output: 'export',          // build to /out
  trailingSlash: true        // static-safe URLs
};
module.exports = nextConfig;

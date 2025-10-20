/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  output: 'export'      // build fully static site to /out
};
module.exports = nextConfig;

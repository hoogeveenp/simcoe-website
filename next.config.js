/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/simcoe-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/simcoe-website' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing
};

module.exports = nextConfig;


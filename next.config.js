/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ['img.clerk.com'],
  },
};

module.exports = nextConfig;

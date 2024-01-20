/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    serverComponentsExternalPackages: ['bcrypt'],
  },
};

module.exports = nextConfig;

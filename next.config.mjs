/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['framer-motion', 'embla-carousel-react'],
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;

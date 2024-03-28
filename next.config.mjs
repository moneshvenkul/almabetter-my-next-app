/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    domains: ['images.example.com'],
    path: '/_next/image',
    loader: 'default',
  },
};

export default nextConfig;

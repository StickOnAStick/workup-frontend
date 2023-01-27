/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '127.0.0.1',
        port: '8090',
        pathname: '/api/files/**'
      }
    ]
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig

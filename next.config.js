/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      domains: ['res.cloudinary.com'],
    },
    api: {
      bodyParser: {
        sizeLimit: '10mb', // Adjust as needed
      },
    },
  }
  
  module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
  // 为API路由设置超时时间
  experimental: {
    serverComponentsExternalPackages: ['openai'],
  },
}

export default nextConfig

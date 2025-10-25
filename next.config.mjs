/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'www.itawgroup.com', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',  // 🔹 required for GitHub Pages
  basePath: isProd ? '/repo-name' : '', // 🔹 replace "repo-name" with your GitHub repo name
}

export default nextConfig

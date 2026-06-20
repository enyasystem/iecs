/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  outputFileTracingRoot: __dirname,
  trailingSlash: false,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const isProd = process.send.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/development-react/' : ''
}

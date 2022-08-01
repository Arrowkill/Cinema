/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = {
  
  env: {
    apiKey: process.env.API_KEY,
  },
  serverRuntimeConfig: {
    // Will only be available on server side
    apiKey: process.env.API_KEY,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiKey: process.env.API_KEY,
  },
}
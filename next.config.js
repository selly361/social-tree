/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdx.solo.to", "i.imgur.com"]
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '/',
  output: "export",
  distDir: 'out',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
      source:'/',
      destination:'/FrontPage',
      permanent: true,
      }
    ]
  }
}

module.exports = nextConfig

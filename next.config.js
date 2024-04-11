/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  sassOptions: {
    prependData: `
      @use '/styles/_varables.scss' as *;
      @use '/styles/_mixins.scss' as *;
    `,
  },
  images: {
    unoptimized: true,
   remotePatterns: [
     {
       hostname: '**'
     }
   ]
  },
}
module.exports = nextConfig

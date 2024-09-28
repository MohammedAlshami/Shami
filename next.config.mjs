/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  basePath: "/Shami",
  images: {
    unoptimized: true,
    domains: [
      "assets.aceternity.com",
      "images.unsplash.com",
      "d28hgpri8am2if.cloudfront.net",
      "*",
      "www.thebvnewspaper.com",
      "cdn2.penguin.com.au",
      "storage.highresaudio.com",
      "c4.wallpaperflare.com",
      "media.licdn.com",
      "camo.githubusercontent.com",
      "picsum.photos",
      "raw.githubusercontent.com",
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
      "6f99yjvsh5fhfkn4.public.blob.vercel-storage.com"
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
};

export default nextConfig;

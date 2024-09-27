// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "assets.aceternity.com",
//       "images.unsplash.com",
//       "d28hgpri8am2if.cloudfront.net",
//       "*",
//       "www.thebvnewspaper.com",
//       "cdn2.penguin.com.au",
//       "storage.highresaudio.com",
//       "c4.wallpaperflare.com"
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Reference the repository name in the basePath and assetPrefix
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true, // GitHub Pages doesn't support image optimization
  },
  trailingSlash: true, // GitHub Pages requires this to work properly
};

module.exports = nextConfig;

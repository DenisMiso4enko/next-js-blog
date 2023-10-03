/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   "cdn-icons-png.flaticon.com",
    //   "feature-sliced.design",
    //   "vgr.by",
    //   "media.cnn.com",
    //   "hips.hearstapps.com",
    //   "content.onliner.by",
    //   "lh3.googleusercontent.com",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;

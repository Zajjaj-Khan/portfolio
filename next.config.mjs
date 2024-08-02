/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
    ],
  },
};

export default nextConfig;

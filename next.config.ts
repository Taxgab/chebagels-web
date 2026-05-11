import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dftyzmbjc/**",
      },
      {
        protocol: "https",
        hostname: "chebagels.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

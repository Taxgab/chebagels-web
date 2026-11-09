import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in the user's home directory makes Next infer the wrong
  // workspace root, which breaks module resolution and file watching.
  turbopack: { root: process.cwd() },
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dftyzmbjc/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

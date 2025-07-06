import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://192.168.2.29:8000/:path*",
      },
    ];
  },
};

export default nextConfig;
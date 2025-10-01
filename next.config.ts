import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* other config options here */

  turbopack: {
    // explicitly set your project folder as root
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

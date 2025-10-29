import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: false },
  output: "export",
  basePath: "/craffiti",
  assetPrefix: "/craffiti/",
  trailingSlash: true,
};
export default nextConfig;




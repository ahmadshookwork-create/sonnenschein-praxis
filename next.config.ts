import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static Export für Strato Webhosting (kein Node.js Server)
  output: "export",
  basePath: "/sonnenschein-praxis",
  assetPrefix: "/sonnenschein-praxis/",
  trailingSlash: true, // Wichtig für statisches Hosting - erzeugt /kontakt/index.html statt /kontakt.html
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;

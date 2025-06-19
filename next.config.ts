import type { NextConfig } from "next";

const type = "spa";

const nextConfigForSPA: NextConfig = {
  /* config options here */
  output: "export", // Required for static export
  trailingSlash: true, // Optional: helps for GitHub Pages routing
  basePath: "/next-example", // Optional: if deploying to subpath (e.g. GitHub Pages)
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default type === "spa" ? nextConfigForSPA : nextConfig;

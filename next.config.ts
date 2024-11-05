import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    prependData: `@use 'src/styles/variables' as *;`,
  },
};

export default nextConfig;

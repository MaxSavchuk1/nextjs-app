import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    prependData: `@use 'src/styles/variables' as *;`,
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;

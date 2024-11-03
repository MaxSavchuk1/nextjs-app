// import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    // additionalData: `$var: red;`,
    // includePaths: [path.join(__dirname, "styles")],
    // prependData: `@import "variables.scss";`,
    prependData: `@use 'src/styles/variables' as *;`,
  },
};

export default nextConfig;

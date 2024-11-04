"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const NextThemesProvider = dynamic(() => import("next-themes").then((e) => e.ThemeProvider), {
  ssr: false,
});

export function ThemeProvider({ children, ...props }: Record<string, any>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
import type { Metadata } from "next";
import "@/styles/globals.scss";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Responsive christmas website",
  description: "Responsive christmas website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

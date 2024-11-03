import type { Metadata } from "next";
import "@/styles/globals.scss";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

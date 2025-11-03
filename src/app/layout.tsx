import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saji Nael | Portfolio",
  description: "Front-End Developer Portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

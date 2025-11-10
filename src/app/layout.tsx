import "./globals.css";
import "@mantine/core/styles.css";

import type { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import AnimatedBackground from "./components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Saji Nael | Front-End Developer Portfolio",
  description:
    "Portfolio of Saji Nael, a Front-End Developer building modern UI/UX interfaces using React, Next.js, Mantine, and Framer Motion.",
  keywords: [
    "Saji Nael",
    "Portfolio",
    "Front-End Developer",
    "React Developer",
    "Next.js",
    "UI/UX",
    "Web Developer",
  ],
  metadataBase: new URL("https://sajinael98.github.io"),
  openGraph: {
    type: "website",
    url: "https://sajinael98.github.io/portfolio",
    title: "Saji Nael | Portfolio",
    description:
      "Portfolio of Saji Nael, specializing in building modern, responsive web interfaces.",
    images: [
      {
        url: "/portfolio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saji DEV Logo Preview",
      },
    ],
  },
  alternates: {
    canonical: "https://sajinael98.github.io/portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/portfolio/favicon.ico" />
      </head>
      <body>
        <AnimatedBackground />

        <MantineProvider forceColorScheme="dark">
          <div className="appshell-wrapper">{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}

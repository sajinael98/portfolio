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
  title: "Saji Nael | Portfolio",
  description: "Front-End Developer Portfolio built with Next.js",
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

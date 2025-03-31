// Import Mantine core styles
import '@mantine/core/styles.css';

import type { Metadata } from "next";
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/styles/theme'; // Import our custom theme
import { ReactQueryProvider } from '@/providers/ReactQueryProvider'; // Import React Query Provider

// Remove Geist font imports as fontFamily is set in theme
// import { Geist, Geist_Mono } from "next/font/google";
// Remove globals.css import, rely on Mantine styles
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// 
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App", // TODO: Update with actual app name later
  description: "Generated by create next app", // TODO: Update description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      {/* Remove Geist font variables from body className */}
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body> 
        <ReactQueryProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

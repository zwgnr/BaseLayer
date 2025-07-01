import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";

import "./globals.css";

import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "BaseLayer",
  description: "BaseLayer is a component system for building web applications.",
  icons: {
    icon: "/bl.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} ${GeistMono.className} flex min-h-screen flex-col bg-surface font-sans antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

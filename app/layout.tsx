import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://ssgpt6.com"),
  alternates: {
    canonical: "https://ssgpt6.com",
  },
  title: "SSGPT6",
  description: "SSGPT6 Core Platform",
  applicationName: "SSGPT6",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SSGPT6",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* PWA (minimal, using ONLY apple-touch-icon as you requested) */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0b1b3a" />
      </head>

      <body>
        {/* Simple, stable navbar */}
        <header
          style={{
            padding: "14px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            gap: 14,
            alignItems: "center",
          }}
        >
          <Link href="/" style={{ fontWeight: 700 }}>
            SSGPT6
          </Link>
          <nav style={{ display: "flex", gap: 12 }}>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/tradehub">TradeHub</Link>
            <Link href="/settings">Settings</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main style={{ padding: 18 }}>{children}</main>
      </body>
    </html>
  );
}
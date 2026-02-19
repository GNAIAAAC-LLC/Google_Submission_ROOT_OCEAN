import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSGPT6",
  description: "SSGPT6 Intelligent Digital Access Platform",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/tradehub-icon-192.png",
    apple: "/apple-touch-icon.png"
  },
  themeColor: "#0b1b3f"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
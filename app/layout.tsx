import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SSGPT6",
  description: "GNAIAAAC LLC — Architect: Arifur Shanta (USA)",
  applicationName: "SSGPT6",
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
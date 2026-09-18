import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FolXchange — Simplify Your Finances",
    template: "%s | FolXchange",
  },

  description:
    "Convert digital assets to fiat, pay bills, manage your wallet and track transactions with FolXchange.",

  keywords: [
    "FolXchange",
    "TorexBit",
    "digital assets",
    "crypto",
    "fiat",
    "bill payments",
    "digital wallet",
    "fintech",
  ],

  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },

  robots: {
    index: true,
    follow: true,
  },
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
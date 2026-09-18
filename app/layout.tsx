import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.folxchange.com"),

  title: {
    default: "FolXchange — Move Money Without Borders",
    template: "%s | FolXchange",
  },

  description:
    "FolXchange makes it simple to exchange digital assets, currencies and pay everyday bills across Nigeria, the UK, the US and Europe.",

  applicationName: "FolXchange",

  keywords: [
    "FolXchange",
    "currency exchange",
    "digital assets",
    "crypto",
    "NGN",
    "USD",
    "GBP",
    "EUR",
    "BTC",
    "Nigeria",
    "United Kingdom",
    "United States",
    "Europe",
  ],

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
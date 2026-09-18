import type { Metadata, Viewport } from "next";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://folxchange-app-j4vl.vercel.app"
  ),

  title: {
    default: "FolXchange — Move Money Without Borders",
    template: "%s | FolXchange",
  },

  description:
    "FolXchange makes it simple to exchange digital assets and currencies across Nigeria, the UK, the US and Europe.",

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
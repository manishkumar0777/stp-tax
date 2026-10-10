import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Providers } from "./providers";

import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Your Trusted Partner for Business Solutions | Sterling Tax Partner",
    template: "%s | Sterling Tax Partner",
  },
  description: "Sterling Tax Partner offers comprehensive business solutions, including Company formation, GST registration, ITR filing, trademark registration, accounting services, and more.",
  keywords: ["Sterling Tax Partner", "Company formation", "GST registration", "ITR filing", "trademark registration"],
  authors: [{ name: "Sterling Tax Partner", url: BASE_URL }],
  creator: "Sterling Tax Partner",
  publisher: "Sterling Tax Partner",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Sterling Tax Partner",
    title: "Your Trusted Partner for Business Solutions | Sterling Tax Partner",
    description: "Sterling Tax Partner offers comprehensive business solutions, including Company formation, GST registration, ITR filing, trademark registration, accounting services, and more.",
    images: [
      {
        url: `${BASE_URL}/images/og-image.jpg`,
        secureUrl: `${BASE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Sterling Tax Partner - Business Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Trusted Partner for Business Solutions | Sterling Tax Partner",
    description: "Sterling Tax Partner offers comprehensive business solutions, including Company formation, GST registration, ITR filing, trademark registration, accounting services, and more.",
    images: [`${BASE_URL}/images/og-image.jpg`],
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Kolkata",
    "geo.position": "22.5726;88.3639",
    "ICBM": "22.5726, 88.3639"
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}

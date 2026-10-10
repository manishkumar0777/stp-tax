import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://stp-tax.vercel.app"),
  title: "Your Trusted Partner for Business Solutions - Sterling Tax Partner",
  description: "Sterling Tax Partner offers comprehensive business solutions, including Company formation, GST registration, ITR filing, trademark registration, accounting services, and more. Partner with us to streamline your business operations and achieve success.",
  openGraph: {
    title: "Your Trusted Partner for Business Solutions - Sterling Tax Partner",
    description: "Sterling Tax Partner offers comprehensive business solutions, including Company formation, GST registration, ITR filing, trademark registration, accounting services, and more. Partner with us to streamline your business operations and achieve success.",
    type: "website",
    images: [
      {
        url: "/perfect-og.png",
        width: 1200,
        height: 630,
        alt: "Sterling Tax Partner Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Trusted Partner for Business Solutions - Sterling Tax Partner",
    description: "Sterling Tax Partner offers comprehensive business solutions, including Company formation, GST registration, ITR filing, trademark registration, accounting services, and more. Partner with us to streamline your business operations and achieve success.",
    images: ["/perfect-og.png"],
  }
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

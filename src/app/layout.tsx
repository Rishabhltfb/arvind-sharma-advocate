import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_Devanagari, Source_Sans_3 } from "next/font/google";
import DisclaimerGate from "@/components/DisclaimerGate";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { metadataCopy, SITE_URL } from "@/data/advocate";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: metadataCopy.title,
  description: metadataCopy.description,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: metadataCopy.title,
    description: metadataCopy.description,
    type: "profile",
    locale: "en_IN",
    url: SITE_URL,
  },
  twitter: {
    card: "summary",
    title: metadataCopy.title,
    description: metadataCopy.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${devanagari.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <JsonLd />
        <DisclaimerGate>
          <div id="top" className="flex min-h-dvh flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </DisclaimerGate>
      </body>
    </html>
  );
}

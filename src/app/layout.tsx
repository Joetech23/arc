import type { Metadata } from "next";
import { Inter, Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { AIAgent } from "@/components/layout/AIAgent";
import { site } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Design & Construction Company in Abuja, Nigeria`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "construction company in Abuja",
    "building contractors Kurudu Abuja",
    "interior design and construction Abuja",
    "real estate land sales Abuja",
    "construction company Port Harcourt",
    "construction company Kaduna",
    "renovation company Nigeria",
    "Arcmarshal Dzine Koncept",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.legalName,
    title: `${site.shortName} | Design • Build • Inspire`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} | Design • Build • Inspire`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.legalName,
  alternateName: site.shortName,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Kurudu, Abuja",
    addressRegion: site.address.region,
    addressCountry: "NG",
  },
  areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  knowsAbout: [
    "Residential Construction",
    "Commercial Construction",
    "Industrial Construction",
    "Renovation",
    "Real Estate",
    "Interior Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${raleway.variable} ${inter.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <AIAgent />
      </body>
    </html>
  );
}

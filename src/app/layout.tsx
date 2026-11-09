import type { Metadata, Viewport } from "next";
import { SITE_CONFIG } from "@/lib/types";
import { isIndexable, siteUrl } from "@/lib/site";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ogTitle = `${SITE_CONFIG.brandName}: Hacemos bagels artesanales, cada uno hecho a mano`;

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.brandName}: ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "che bagels",
    "bagels en Paraguay",
    "bagels Asunción",
    "bagels gourmet",
    "bagels neoyorquinos",
    "bagels artesanales",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: siteUrl,
    siteName: `${SITE_CONFIG.brandName}: ${SITE_CONFIG.tagline}`,
    title: ogTitle,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    site: "@bagelsche",
    title: ogTitle,
    description: SITE_CONFIG.description,
  },
  // Only the production deployment may be indexed. Previews and branch
  // deployments must never compete with the domain they will replace.
  robots: isIndexable
    ? { index: true, follow: true }
    : { index: false, follow: false },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#f6efe3",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: SITE_CONFIG.brandName,
  description: SITE_CONFIG.description,
  url: siteUrl,
  sameAs: [
    "https://www.instagram.com/chebagels/",
    "https://www.tiktok.com/@chebagels",
    "https://www.facebook.com/profile.php?id=61576231635295",
    "https://x.com/bagelsche",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Asunción",
    addressCountry: "PY",
  },
  servesCuisine: "Bagels",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`h-full scroll-smooth ${fraunces.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}

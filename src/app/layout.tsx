import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/types";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.brandName}: ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "che bagels",
    "bagels en Paraguay",
    "bagels Asuncion",
    "bagels gourmet",
    "Bagels Neoyorquinos",
    "Bagels NY",
    "bagels artesanales",
  ],
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: SITE_CONFIG.url,
    siteName: `${SITE_CONFIG.brandName}: ${SITE_CONFIG.tagline}`,
    title: `${SITE_CONFIG.brandName}: Hacemos bagels artesanales, cada uno hecho a mano`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 300,
        height: 79,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bagelsche",
    title: `${SITE_CONFIG.brandName}: Hacemos bagels artesanales, cada uno hecho a mano`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: SITE_CONFIG.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: SITE_CONFIG.brandName,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  logo: SITE_CONFIG.ogImage,
  sameAs: [
    "https://www.instagram.com/chebagels/",
    "https://www.tiktok.com/@chebagels",
    "https://www.facebook.com/profile.php?id=61576231635295",
    "https://x.com/bagelsche",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Asuncion",
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
    <html lang="es" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <ScrollObserver />
      </body>
    </html>
  );
}

function ScrollObserver() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                }
              });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
          );
          document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
        `,
      }}
    />
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LeadModalProvider } from "@/contexts/LeadModalContext";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { JsonLd } from "@/components/JsonLd";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

/**
 * Montserrat Font Configuration
 *
 * Using Montserrat as the primary font family for both
 * headings (display) and body text per the Brand Design System.
 *
 * Weights used:
 * - 400 (regular): Body text
 * - 500 (medium): Labels, microcopy
 * - 600 (semibold): Subheadlines, emphasis
 * - 700 (bold): Headings, CTAs
 * - 900 (black): Hero headlines (massive typography)
 */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  // Base URL para canonical e OG (usando www - versão principal)
  metadataBase: new URL("https://www.nexusleiloes.com.br"),

  // Title com template
  title: {
    default: "Nexus Leilões - O Único Hub Completo Para Leilão Imobiliário",
    template: "%s | Nexus Leilões",
  },

  description:
    "Pare de perder oportunidades em leilões. A Nexus unifica busca, análise e gestão de leilões imobiliários em uma única plataforma. Cadastre-se na lista de espera.",

  keywords: [
    "leilão imobiliário",
    "investimento em leilão",
    "leilão de imóveis",
    "busca leilão",
    "análise leilão",
    "calculadora leilão",
    "hub leilão",
    "assessor leilão",
    "leilão judicial",
    "leilão extrajudicial",
  ],

  authors: [{ name: "Nexus Leilões" }],

  // App Config
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nexus Leilões",
  },

  // Icons - múltiplos tamanhos para melhor compatibilidade com Google
  icons: {
    icon: [
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // Canonical URL
  alternates: {
    canonical: "/",
  },

  // Robots
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

  // Open Graph (imagem gerada dinamicamente via opengraph-image.tsx)
  openGraph: {
    title: "Nexus Leilões - O Único Hub Completo Para Leilão Imobiliário",
    description:
      "Pare de perder oportunidades em leilões. A Nexus unifica busca, análise e gestão de leilões imobiliários em uma única plataforma.",
    url: "https://www.nexusleiloes.com.br",
    siteName: "Nexus Leilões",
    locale: "pt_BR",
    type: "website",
  },

  // Twitter Cards (imagem gerada dinamicamente via twitter-image.tsx)
  twitter: {
    card: "summary_large_image",
    title: "Nexus Leilões - O Único Hub Completo Para Leilão Imobiliário",
    description:
      "Pare de perder oportunidades em leilões. Busca, análise e gestão em uma única plataforma.",
  },

  // Verificação Google Search Console
  verification: {
    google: "Wx7_0ZqofQZ9oH7hAv7NsEC_9GWIdKYeC4Og-yCUXvo",
  },
};

// Schema.org - Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexus Leilões",
  url: "https://www.nexusleiloes.com.br",
  logo: "https://www.nexusleiloes.com.br/logo-nexus.png",
  description:
    "O único hub completo para leilão imobiliário no Brasil. Busca, análise e gestão em uma única plataforma.",
  sameAs: [
    "https://instagram.com/nexus.leiloes",
  ],
};

// Schema.org - WebSite
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nexus Leilões",
  url: "https://www.nexusleiloes.com.br",
  description:
    "Plataforma completa para investidores de leilões imobiliários no Brasil.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.nexusleiloes.com.br/busca?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Schema.org - SoftwareApplication (para quando lançar)
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nexus Leilões",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Hub completo para busca, análise e gestão de leilões imobiliários.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    price: "0",
    priceCurrency: "BRL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Theme color para browser UI */}
        <meta name="theme-color" content="#5C5CFF" />
        <meta name="msapplication-TileColor" content="#5C5CFF" />

        {/* Preconnect para recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* Preconnect para Google Tag Manager */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload hero image para melhor LCP */}
        <link
          rel="preload"
          href="/imagem_correta.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {/* Google Analytics 4 */}
        <GoogleAnalytics />

        {/* Schema.org JSON-LD */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={softwareSchema} />

        <LeadModalProvider>
          {children}
          <LeadCaptureModal />
        </LeadModalProvider>
      </body>
    </html>
  );
}

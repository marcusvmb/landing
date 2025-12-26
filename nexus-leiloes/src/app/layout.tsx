import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LeadModalProvider } from "@/contexts/LeadModalContext";
import LeadCaptureModal from "@/components/LeadCaptureModal";

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
  title: "Nexus Leiloes - O Unico Hub Completo Para Leilao Imobiliario",
  description:
    "Pare de perder oportunidades em leiloes. O Nexus unifica busca, analise e gestao de leiloes imobiliarios em uma unica plataforma. Cadastre-se na lista de espera.",
  keywords: [
    "leilao imobiliario",
    "investimento em leilao",
    "leilao de imoveis",
    "busca leilao",
    "analise leilao",
    "calculadora leilao",
    "hub leilao",
    "assessor leilao",
  ],
  authors: [{ name: "Nexus Leiloes" }],
  openGraph: {
    title: "Nexus Leiloes - O Unico Hub Completo Para Leilao Imobiliario",
    description:
      "Pare de perder oportunidades em leiloes. O Nexus unifica busca, analise e gestao de leiloes imobiliarios em uma unica plataforma.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <LeadModalProvider>
          {children}
          <LeadCaptureModal />
        </LeadModalProvider>
      </body>
    </html>
  );
}

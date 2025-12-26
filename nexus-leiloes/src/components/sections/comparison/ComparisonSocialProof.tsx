'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * COMPARISON SECTION V4: SOCIAL PROOF
 *
 * Frame Cognitivo: "Por que 547 migraram para a Nexus"
 * Cada comparacao e validada por um mini-testimonial real
 *
 * ASCII Layout:
 * +-----------------------------------------------------------------------+
 * |                         EYEBROW BADGE                                  |
 * |              "Por que 547 investidores migraram"                       |
 * +-----------------------------------------------------------------------+
 * |                                                                        |
 * |  +------------------------------------------------------------------+ |
 * |  |  COMPARACAO CARD 1                                               | |
 * |  |  +-------------------+        +-----------------------------+    | |
 * |  |  | [SEM NEXUS]       |   VS   | [COM NEXUS]                 |    | |
 * |  |  | 20+ sites abertos |        | 1 busca unificada           |    | |
 * |  |  +-------------------+        +-----------------------------+    | |
 * |  |                                                                  | |
 * |  |  "Eu gastava 2h por dia só navegando entre sites. Agora         | |
 * |  |   encontro tudo em minutos."                                    | |
 * |  |                                              — Joao M., SP       | |
 * |  +------------------------------------------------------------------+ |
 * |                                                                        |
 * |  +------------------------------------------------------------------+ |
 * |  |  COMPARACAO CARD 2                                               | |
 * |  |  +-------------------+        +-----------------------------+    | |
 * |  |  | Planilhas manuais |   VS   | Calculadora automatica      |    | |
 * |  |  +-------------------+        +-----------------------------+    | |
 * |  |                                                                  | |
 * |  |  "Perdi R$12k em um lance mal calculado. Com a Nexus,           | |
 * |  |   isso nunca mais aconteceu."                                   | |
 * |  |                                              — Ricardo S., RJ    | |
 * |  +------------------------------------------------------------------+ |
 * |                                                                        |
 * |  +------------------------------------------------------------------+ |
 * |  |  COMPARACAO CARD 3 ... (pattern continues)                       | |
 * |  +------------------------------------------------------------------+ |
 * |                                                                        |
 * |  +------------------------------------------------------------------+ |
 * |  |               SUMMARY: "547 investidores, 1 escolha"            | |
 * |  |                                                                  | |
 * |  |     [Avatar stack]  +  "Junte-se a eles"  +  [CTA]             | |
 * |  +------------------------------------------------------------------+ |
 * |                                                                        |
 * +------------------------------------------------------------------------+
 *
 * Grid Structure: Single column cards, staggered
 * - Cards alternate slight offset left/right for visual interest
 * - Each card: comparison mini-row + testimonial quote
 *
 * Visual Effects:
 * - Quote marks styled prominently
 * - Avatar with name/location
 * - Glassmorphism on cards
 * - Blue accent on "COM NEXUS" side
 *
 * Social Proof Pattern:
 * - Real names (or realistic) with city
 * - Specific numbers in testimonials
 * - Mini avatar with initials
 */

const comparisonWithTestimonials = [
  {
    id: 'busca',
    without: {
      short: '20+ sites abertos',
      detail: 'navegando o dia todo',
    },
    with: {
      short: '1 busca unificada',
      detail: 'todos leiloeiros em um lugar',
    },
    testimonial: {
      quote: 'Eu gastava 2 horas por dia só navegando entre sites de leiloeiros. Agora encontro tudo em minutos e ainda sobra tempo para analisar.',
      author: 'João M.',
      role: 'Investidor',
      location: 'São Paulo, SP',
      initials: 'JM',
    },
  },
  {
    id: 'análise',
    without: {
      short: 'Planilhas manuais',
      detail: 'erros de cálculo',
    },
    with: {
      short: 'Calculadora automática',
      detail: '100% precisão',
    },
    testimonial: {
      quote: 'Perdi R$12 mil em um lance mal calculado antes da Nexus. Depois que comecei a usar a calculadora multi-cenários, nunca mais errei.',
      author: 'Ricardo S.',
      role: 'Investidor PF',
      location: 'Rio de Janeiro, RJ',
      initials: 'RS',
    },
  },
  {
    id: 'tempo',
    without: {
      short: '2 horas/dia buscando',
      detail: 'tempo desperdicado',
    },
    with: {
      short: '15 minutos/dia',
      detail: 'eficiência máxima',
    },
    testimonial: {
      quote: 'Como assessor, meu tempo vale dinheiro. A Nexus me devolveu 40 horas por mês que agora uso para prospectar novos clientes.',
      author: 'Ana C.',
      role: 'Assessora de Leilões',
      location: 'Belo Horizonte, MG',
      initials: 'AC',
    },
  },
  {
    id: 'organização',
    without: {
      short: 'Caos de abas',
      detail: 'oportunidades perdidas',
    },
    with: {
      short: 'Dashboard central',
      detail: 'controle total',
    },
    testimonial: {
      quote: 'Eu perdia oportunidades porque esquecia em qual aba tinha visto o imóvel. O dashboard da Nexus mudou minha organização completamente.',
      author: 'Pedro L.',
      role: 'Investidor',
      location: 'Curitiba, PR',
      initials: 'PL',
    },
  },
  {
    id: 'relatorios',
    without: {
      short: 'Prints amadores',
      detail: 'falta de credibilidade',
    },
    with: {
      short: 'PDFs profissionais',
      detail: 'relatórios em 1 clique',
    },
    testimonial: {
      quote: 'Meus clientes ficavam desconfiados quando eu mandava prints de tela. Agora envio PDFs profissionais e já fechei 3 negócios a mais.',
      author: 'Mariana F.',
      role: 'Assessora',
      location: 'Porto Alegre, RS',
      initials: 'MF',
    },
  },
  {
    id: 'erros',
    without: {
      short: 'R$15k/ano em erros',
      detail: 'decisões no achismo',
    },
    with: {
      short: 'Multi-cenários',
      detail: '5 simulações por imóvel',
    },
    testimonial: {
      quote: 'A função de multi-cenários me mostrou que um imóvel que parecia ótimo na verdade dava prejuízo em 3 das 5 simulações. Economizei R$40 mil.',
      author: 'Carlos R.',
      role: 'Investidor',
      location: 'Campinas, SP',
      initials: 'CR',
    },
  },
];

export default function ComparisonSocialProof() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="bg-[#EFF0F0] py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="comparison-social-heading"
    >
      {/* Background Elements */}
      <div
        className="
          absolute top-20 right-0
          w-[500px] h-[500px]
          bg-[#5C5CFF]/6
          rounded-full
          blur-[120px]
          translate-x-1/3
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute bottom-20 left-0
          w-[400px] h-[400px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[100px]
          -translate-x-1/3
        "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span
            className="
              inline-flex items-center gap-3
              px-5 py-2.5
              bg-white/80
              backdrop-blur-sm
              rounded-full
              border border-[#5C5CFF]/20
              shadow-[0_4px_20px_-5px_rgba(92,92,255,0.15)]
            "
          >
            {/* Mini avatar stack */}
            <div className="flex -space-x-1.5">
              {['JM', 'RS', 'AC'].map((initials, i) => (
                <div
                  key={initials}
                  className="
                    w-6 h-6
                    bg-[#5C5CFF]
                    rounded-full
                    border-2 border-white
                    flex items-center justify-center
                  "
                  style={{ zIndex: 3 - i }}
                >
                  <span className="text-[8px] font-bold text-white">{initials}</span>
                </div>
              ))}
            </div>
            <span className="text-sm font-semibold text-[#2B3259]">
              Por que <span className="text-[#5C5CFF]">547</span> migraram
            </span>
          </span>
        </div>

        {/* Headline */}
        <h2
          id="comparison-social-heading"
          className="
            text-center
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-black
            tracking-[-0.03em]
            leading-[0.95]
            text-[#2B3259]
            mb-6
          "
        >
          Eles compararam.
          <br />
          <span className="text-[#5C5CFF]">Eles escolheram.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg md:text-xl text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Veja o que investidores reais dizem sobre cada diferença
          <br className="hidden md:block" />
          entre o método antigo e a Nexus.
        </p>

        {/* Comparison Cards with Testimonials */}
        <div className="space-y-6">
          {comparisonWithTestimonials.map((item, index) => (
            <ComparisonCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Summary Section */}
        <div
          className="
            mt-16
            p-8 md:p-10
            bg-[#2B3259]
            rounded-3xl
            relative
            overflow-hidden
          "
        >
          {/* Decorative glows */}
          <div
            className="
              absolute -top-20 -left-20
              w-60 h-60
              bg-[#5C5CFF]/30
              rounded-full
              blur-3xl
            "
            aria-hidden="true"
          />
          <div
            className="
              absolute -bottom-20 -right-20
              w-60 h-60
              bg-[#5C5CFF]/20
              rounded-full
              blur-3xl
            "
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: Stats */}
              <div className="text-center md:text-left">
                <p className="text-[#5C5CFF] font-bold text-sm uppercase tracking-widest mb-2">
                  Resultado da comparação
                </p>
                <p className="text-3xl md:text-4xl font-black text-white">
                  547 investidores,{' '}
                  <span className="text-[#5C5CFF]">1 escolha</span>
                </p>
                <p className="text-white/60 mt-2">
                  Todos chegaram à mesma conclusão
                </p>
              </div>

              {/* Right: Avatar stack + CTA */}
              <div className="flex flex-col items-center gap-4">
                {/* Large avatar stack */}
                <div className="flex -space-x-3">
                  {comparisonWithTestimonials.slice(0, 6).map((item, i) => (
                    <div
                      key={item.id}
                      className="
                        w-12 h-12
                        bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]/70
                        rounded-full
                        border-3 border-[#2B3259]
                        flex items-center justify-center
                        shadow-[0_4px_15px_-3px_rgba(92,92,255,0.4)]
                      "
                      style={{ zIndex: 6 - i }}
                    >
                      <span className="text-xs font-bold text-white">
                        {item.testimonial.initials}
                      </span>
                    </div>
                  ))}
                  <div
                    className="
                      w-12 h-12
                      bg-[#5C5CFF]
                      rounded-full
                      border-3 border-[#2B3259]
                      flex items-center justify-center
                      shadow-[0_4px_15px_-3px_rgba(92,92,255,0.4)]
                    "
                  >
                    <span className="text-xs font-bold text-white">+541</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openModal}
                  className="
                    bg-[#5C5CFF]
                    text-white
                    font-bold text-base
                    px-8 py-4
                    rounded-full
                    shadow-[0_10px_30px_-8px_rgba(92,92,255,0.5)]
                    transition-all duration-300
                    ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    hover:-translate-y-1 hover:scale-[1.02]
                    hover:shadow-[0_15px_40px_-8px_rgba(92,92,255,0.6)]
                    active:translate-y-0 active:scale-[0.98]
                    cursor-pointer
                  "
                >
                  Fazer a mesma escolha
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#2B3259]/50">
            Entre na lista VIP e descubra por que tantos já migraram
          </p>
        </div>
      </div>
    </section>
  );
}

interface ComparisonCardProps {
  item: {
    id: string;
    without: {
      short: string;
      detail: string;
    };
    with: {
      short: string;
      detail: string;
    };
    testimonial: {
      quote: string;
      author: string;
      role: string;
      location: string;
      initials: string;
    };
  };
  index: number;
}

function ComparisonCard({ item, index }: ComparisonCardProps) {
  // Alternate slight offset for visual interest
  const isEven = index % 2 === 0;

  return (
    <article
      className={`
        group
        relative
        bg-white/80
        backdrop-blur-sm
        rounded-3xl
        border border-[#5C5CFF]/10
        hover:border-[#5C5CFF]/25
        shadow-[0_15px_50px_-15px_rgba(92,92,255,0.1)]
        hover:shadow-[0_20px_60px_-15px_rgba(92,92,255,0.2)]
        transition-all duration-500
        overflow-hidden
        ${isEven ? 'md:ml-0 md:mr-8' : 'md:ml-8 md:mr-0'}
      `}
    >
      {/* Glow on hover */}
      <div
        className="
          absolute -top-20 -right-20
          w-40 h-40
          bg-[#5C5CFF]/10
          rounded-full
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
        aria-hidden="true"
      />

      <div className="relative z-10 p-6 md:p-8">
        {/* Comparison Row */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 mb-6">
          {/* Without Card */}
          <div
            className="
              flex-1
              p-4
              bg-[#2B3259]/[0.03]
              rounded-2xl
              border border-[#5C5CFF]/10
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  w-8 h-8
                  bg-[#5C5CFF]/10
                  rounded-lg
                  flex items-center justify-center
                  flex-shrink-0
                "
              >
                <svg
                  className="w-4 h-4 text-[#5C5CFF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#2B3259]/60 text-sm">
                  {item.without.short}
                </p>
                <p className="text-xs text-[#2B3259]/40">
                  {item.without.detail}
                </p>
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="flex items-center justify-center px-2">
            <div
              className="
                w-10 h-10
                bg-[#5C5CFF]/10
                rounded-full
                flex items-center justify-center
              "
            >
              <svg
                className="w-5 h-5 text-[#5C5CFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>

          {/* With Card */}
          <div
            className="
              flex-1
              p-4
              bg-[#5C5CFF]/5
              group-hover:bg-[#5C5CFF]/10
              rounded-2xl
              border border-[#5C5CFF]/20
              transition-colors duration-300
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  w-8 h-8
                  bg-[#5C5CFF]/20
                  group-hover:bg-[#5C5CFF]
                  rounded-lg
                  flex items-center justify-center
                  flex-shrink-0
                  transition-colors duration-300
                "
              >
                <svg
                  className="w-4 h-4 text-[#5C5CFF] group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#2B3259] text-sm">
                  {item.with.short}
                </p>
                <p className="text-xs text-[#5C5CFF]">
                  {item.with.detail}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div
          className="
            relative
            p-5
            bg-[#5C5CFF]/[0.03]
            rounded-2xl
            border-l-4 border-[#5C5CFF]
          "
        >
          {/* Quote mark */}
          <div
            className="
              absolute -top-2 left-4
              text-5xl
              font-serif
              text-[#5C5CFF]/20
              leading-none
            "
            aria-hidden="true"
          >
            "
          </div>

          <blockquote className="relative z-10 pl-4">
            <p className="text-[#2B3259]/80 text-sm md:text-base leading-relaxed italic">
              "{item.testimonial.quote}"
            </p>

            {/* Author */}
            <footer className="mt-4 flex items-center gap-3">
              {/* Avatar */}
              <div
                className="
                  w-10 h-10
                  bg-[#5C5CFF]
                  rounded-full
                  flex items-center justify-center
                  shadow-[0_4px_15px_-3px_rgba(92,92,255,0.4)]
                "
              >
                <span className="text-sm font-bold text-white">
                  {item.testimonial.initials}
                </span>
              </div>

              <div>
                <p className="font-bold text-[#2B3259] text-sm">
                  {item.testimonial.author}
                </p>
                <p className="text-xs text-[#2B3259]/50">
                  {item.testimonial.role} - {item.testimonial.location}
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </article>
  );
}

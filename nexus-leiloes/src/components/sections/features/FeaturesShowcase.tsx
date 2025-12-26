'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';
import { LazyVideo } from '@/components/ui/LazyVideo';

/**
 * FEATURES SECTION V2: SHOWCASE CINEMATOGRÁFICO
 *
 * Frame Cognitivo: "Aspiração e Transformação Profissional"
 * Inspirado em: Apple, Stripe, Linear, Vercel
 *
 * ASCII Layout:
 * ┌─────────────────────────────────────────────────────────────┐
 * │                    HEADLINE ASPIRACIONAL                    │
 * │              "Tudo em um só lugar. Finalmente."            │
 * ├─────────────────────────────────────────────────────────────┤
 * │                                                             │
 * │  HERO 1: BUSCA UNIFICADA (texto esquerda, vídeo direita)   │
 * │  ┌──────────────────┬──────────────────────────────────┐   │
 * │  │    COPY (33%)    │       VIDEO 16:9 (66%)           │   │
 * │  └──────────────────┴──────────────────────────────────┘   │
 * │                                                             │
 * │                      80px spacing                           │
 * │                                                             │
 * │  HERO 2: CALCULADORA (vídeo esquerda, texto direita)       │
 * │  ┌──────────────────────────────────┬──────────────────┐   │
 * │  │       VIDEO 16:9 (66%)           │    COPY (33%)    │   │
 * │  └──────────────────────────────────┴──────────────────┘   │
 * │                                                             │
 * │                      64px spacing                           │
 * │                                                             │
 * │  BENTO GRID 2x2 (features secundárias)                     │
 * │  ┌─────────────────┐  ┌─────────────────┐                  │
 * │  │   Relatórios    │  │    Dashboard    │                  │
 * │  └─────────────────┘  └─────────────────┘                  │
 * │  ┌─────────────────┐  ┌─────────────────┐                  │
 * │  │   Ocupantes     │  │   Assessores    │                  │
 * │  └─────────────────┘  └─────────────────┘                  │
 * │                                                             │
 * │                         CTA                                 │
 * └─────────────────────────────────────────────────────────────┘
 */

// Hero Features (com vídeo)
const heroFeatures = [
  {
    id: 'busca',
    title: 'Todo o mercado.',
    titleHighlight: 'Uma busca.',
    description:
      'Acesse imóveis de múltiplos leiloeiros em uma interface unificada. Economize horas de busca — invista esse tempo analisando.',
    tags: ['Atualização diária', 'Filtros avançados', 'Resultados em segundos'],
    videoSrc: '/videos/Filtro.webm',
    posterSrc: '/videos/posters/filtro.jpg',
    badge: null,
  },
  {
    id: 'calculadora-custos',
    title: 'Custo total.',
    titleHighlight: 'Sem surpresas.',
    description:
      'Veja todos os custos antes de dar seu lance — ITBI, cartório, reforma, desocupação. Arremate com a certeza de quem conhece cada centavo.',
    tags: ['Custos detalhados', 'Cálculo instantâneo', 'Decisão segura'],
    videoSrc: '/videos/calculadora.webm',
    posterSrc: '/videos/posters/calculadora.jpg',
    badge: 'NOVO',
  },
  {
    id: 'multi-cenario',
    title: 'Decisões com',
    titleHighlight: 'Precisão Cirúrgica.',
    description:
      'Simule múltiplos cenários de investimento antes de dar seu lance. A única calculadora do mercado que modela diferentes desfechos.',
    tags: ['Múltiplos cenários', 'Precisão total', 'Exclusivo do Hub'],
    videoSrc: '/videos/playground.webm',
    posterSrc: '/videos/posters/playground.jpg',
    badge: 'EXCLUSIVO',
  },
];

// Features secundárias (sem vídeo)
const secondaryFeatures = [
  {
    id: 'relatorios',
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    title: 'Relatórios Profissionais',
    description: 'Gere PDFs prontos para compartilhar com clientes e parceiros. Design que transmite credibilidade.',
  },
  {
    id: 'dashboard',
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
        />
      </svg>
    ),
    title: 'Pipeline Visual',
    description: 'Veja todas as suas oportunidades de um só olhar. Do lance ao lucro, tudo em um lugar.',
  },
  {
    id: 'ocupantes',
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    title: 'Consulta de Ocupantes',
    description: 'Saiba quem está no imóvel antes de dar o lance. Tome decisões informadas, evite surpresas.',
  },
  {
    id: 'assessores',
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: 'Gestão Multi-Cliente',
    description: 'Cada cliente organizado. Cada oportunidade rastreada. Para assessores profissionais.',
    badge: 'PARA ASSESSORES',
  },
];

export default function FeaturesShowcase() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="bg-[#EFF0F0] py-20 lg:py-28 relative overflow-hidden"
      aria-labelledby="features-showcase-heading"
    >
      {/* Background Glows */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#5C5CFF]/8 rounded-full blur-[150px] translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#5C5CFF]/6 rounded-full blur-[120px] -translate-x-1/3"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-16 lg:mb-20">
          <h2
            id="features-showcase-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.1] text-[#2B3259] mb-6"
          >
            Tudo em um só lugar.{' '}
            <span className="text-[#5C5CFF]">Finalmente.</span>
          </h2>
          <p className="text-lg lg:text-xl text-[#2B3259]/60 max-w-2xl mx-auto leading-relaxed">
            Busque, analise, decida e gerencie. Sem alternar entre abas, planilhas ou apps.
          </p>
        </header>

        {/* Hero Features */}
        <div className="space-y-16 lg:space-y-20 mb-16 lg:mb-20">
          {heroFeatures.map((feature, index) => (
            <HeroFeatureCard
              key={feature.id}
              feature={feature}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Secondary Features - Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto mb-16 lg:mb-20">
          {secondaryFeatures.map((feature) => (
            <SecondaryFeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={openModal}
            className="
              bg-[#5C5CFF]
              text-white
              font-bold text-lg
              px-10 py-5
              rounded-full
              shadow-[0_20px_50px_-12px_rgba(92,92,255,0.5)]
              transition-all duration-300
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:-translate-y-1 hover:scale-[1.02]
              hover:shadow-[0_25px_60px_-12px_rgba(92,92,255,0.6)]
              active:translate-y-0 active:scale-[0.98]
              cursor-pointer
            "
          >
            Garantir Meu Acesso Antecipado
          </button>
          <p className="mt-5 text-sm text-[#2B3259]/50">
            Vagas limitadas para o desconto de lançamento
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Hero Feature Card (com vídeo)
// ============================================
interface HeroFeatureCardProps {
  feature: {
    id: string;
    title: string;
    titleHighlight: string;
    description: string;
    tags: string[];
    videoSrc: string | null;
    posterSrc: string | null;
    badge: string | null;
  };
  reversed?: boolean;
}

function HeroFeatureCard({ feature, reversed = false }: HeroFeatureCardProps) {
  return (
    <article
      className={`
        group
        relative
        bg-white/30
        backdrop-blur-xl
        border border-white/20
        rounded-[28px]
        p-6 lg:p-10
        shadow-[0_30px_60px_-15px_rgba(92,92,255,0.15)]
        hover:shadow-[0_40px_80px_-15px_rgba(92,92,255,0.25)]
        transition-all duration-500
        hover:-translate-y-2
      `}
    >
      {/* Badge */}
      {feature.badge && (
        <span
          className="
            absolute top-5 right-5 lg:top-8 lg:right-8 z-20
            bg-gradient-to-r from-[#FF7A00] to-[#FF9500]
            text-white
            text-[10px] lg:text-xs
            font-bold
            uppercase
            tracking-wider
            px-3 py-1.5
            rounded-full
            shadow-[0_8px_20px_-5px_rgba(255,122,0,0.4)]
          "
        >
          {feature.badge}
        </span>
      )}

      <div
        className={`
          grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center
          ${reversed ? 'lg:flex-row-reverse' : ''}
        `}
      >
        {/* Content */}
        <div
          className={`
            lg:col-span-5
            ${reversed ? 'lg:order-2' : 'lg:order-1'}
          `}
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B3259] tracking-[-0.03em] leading-[1.1] mb-5">
            {feature.title}
            <br />
            <span className="text-[#5C5CFF]">{feature.titleHighlight}</span>
          </h3>

          <p className="text-base lg:text-lg text-[#2B3259]/70 leading-relaxed mb-6">
            {feature.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {feature.tags.map((tag) => (
              <span
                key={tag}
                className="
                  bg-[#5C5CFF]/8
                  text-[#5C5CFF]
                  text-sm
                  font-medium
                  px-3 py-1.5
                  rounded-full
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Video Container */}
        <div
          className={`
            lg:col-span-7
            ${reversed ? 'lg:order-1' : 'lg:order-2'}
          `}
        >
          <div
            className="
              relative
              aspect-video
              rounded-2xl lg:rounded-3xl
              overflow-hidden
              bg-[#2B3259]/5
              shadow-[0_20px_50px_-15px_rgba(92,92,255,0.2)]
              group-hover:shadow-[0_30px_70px_-15px_rgba(92,92,255,0.3)]
              transition-all duration-500
            "
          >
            {/* Glow behind video */}
            <div
              className="
                absolute -inset-4
                bg-[#5C5CFF]/10
                blur-3xl
                rounded-full
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-700
                -z-10
              "
              aria-hidden="true"
            />

            {feature.videoSrc ? (
              <LazyVideo
                src={feature.videoSrc}
                poster={feature.posterSrc || undefined}
                className="w-full h-full"
                playThreshold={0.3}
                pauseOnExit={true}
                rootMargin="300px"
              />
            ) : (
              // Placeholder para vídeo futuro
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#5C5CFF]/10 to-[#5C5CFF]/5">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#5C5CFF]/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#5C5CFF]/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[#2B3259]/40">Demo em breve</p>
                </div>
              </div>
            )}

            {/* Subtle shine overlay */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-br from-white/10 via-transparent to-transparent
                pointer-events-none
                rounded-2xl lg:rounded-3xl
              "
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

// ============================================
// Secondary Feature Card (sem vídeo)
// ============================================
interface SecondaryFeatureCardProps {
  feature: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    badge?: string;
  };
}

function SecondaryFeatureCard({ feature }: SecondaryFeatureCardProps) {
  return (
    <article
      className="
        group
        relative
        bg-white/25
        backdrop-blur-lg
        border border-white/15
        rounded-2xl
        p-6 lg:p-7
        shadow-[0_15px_40px_-10px_rgba(43,50,89,0.08)]
        hover:shadow-[0_25px_60px_-15px_rgba(92,92,255,0.15)]
        hover:bg-white/40
        hover:-translate-y-1
        transition-all duration-400
      "
    >
      {/* Badge */}
      {feature.badge && (
        <span
          className="
            absolute top-4 right-4
            bg-[#5C5CFF]/10
            text-[#5C5CFF]
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            px-2.5 py-1
            rounded-full
          "
        >
          {feature.badge}
        </span>
      )}

      {/* Icon */}
      <div
        className="
          w-14 h-14
          bg-[#5C5CFF]/10
          rounded-2xl
          flex items-center justify-center
          mb-5
          text-[#5C5CFF]
          group-hover:scale-110
          group-hover:bg-[#5C5CFF]/15
          transition-all duration-300
        "
      >
        {feature.icon}
      </div>

      {/* Content */}
      <h4 className="text-xl lg:text-2xl font-bold text-[#2B3259] mb-3 tracking-[-0.02em]">
        {feature.title}
      </h4>
      <p className="text-sm lg:text-base text-[#2B3259]/60 leading-relaxed">
        {feature.description}
      </p>
    </article>
  );
}

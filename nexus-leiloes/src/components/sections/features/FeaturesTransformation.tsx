'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * FEATURES SECTION V2: TRANSFORMATION
 *
 * Frame Cognitivo: "De X para Y" - cada feature como uma transformação
 *
 * ASCII Layout:
 * ┌─────────────────────────────────────────────────────────────┐
 * │                      EYEBROW BADGE                          │
 * │                                                             │
 * │           "Sua Transformação em 6 Passos"                  │
 * │                       (headline)                            │
 * ├─────────────────────────────────────────────────────────────┤
 * │                                                             │
 * │  ┌─────────────────────────────────────────────────────┐   │
 * │  │  [🔍] BUSCA UNIFICADA                               │   │
 * │  │                                                     │   │
 * │  │  De: 20+ abas abertas      ──────►  Para: 1 busca  │   │
 * │  │  ░░░░░░░░░░░░░░░░░░░░░░    ─────►   ▓▓▓▓▓▓▓▓▓▓▓▓   │   │
 * │  │  (opacity 40%)                       (opacity 100%) │   │
 * │  └─────────────────────────────────────────────────────┘   │
 * │                                                             │
 * │  ┌─────────────────────────────────────────────────────┐   │
 * │  │  [🧮] CALCULADORA MULTI-CENARIO         [EXCLUSIVO]│   │
 * │  │                                                     │   │
 * │  │  De: Chute no escuro       ──────►  Para: Certeza  │   │
 * │  │  (card maior, destaque visual)                      │   │
 * │  └─────────────────────────────────────────────────────┘   │
 * │                                                             │
 * │     ... (repeat for other features with arrow reveal) ...  │
 * │                                                             │
 * │  ┌──────────────────┐  ┌──────────────────┐                │
 * │  │  📄 Relatorios   │  │  📊 Dashboard    │                │
 * │  │  De → Para       │  │  De → Para       │                │
 * │  └──────────────────┘  └──────────────────┘                │
 * │                                                             │
 * │  ┌──────────────────┐  ┌──────────────────┐                │
 * │  │  🏠 Ocupantes    │  │  👥 Assessores   │                │
 * │  │  De → Para       │  │  [ASSESSORES]    │                │
 * │  └──────────────────┘  └──────────────────┘                │
 * └─────────────────────────────────────────────────────────────┘
 *
 * Grid Structure:
 * - Feature 1 (Busca): col-span-12 (full width)
 * - Feature 2 (Calculadora): col-span-12 (full width, larger)
 * - Features 3-6: col-span-6 each (2x2 grid)
 *
 * Visual Elements:
 * - Arrow animation on scroll/hover (from left to right)
 * - Before state: opacity 40%, desaturated
 * - After state: opacity 100%, vibrant blue
 * - Progressive reveal animation
 *
 * Hover States:
 * - Arrow pulses
 * - After section expands
 * - Glow intensifies on "Para" side
 */

const transformations = [
  {
    id: 'busca',
    icon: '🔍',
    name: 'Busca Unificada',
    fromState: '20+ abas abertas',
    fromDesc: 'Alternando entre dezenas de sites diferentes',
    toState: '1 busca unificada',
    toDesc: 'Todos os leilões do Brasil em um só lugar',
    size: 'full',
    badge: null,
  },
  {
    id: 'calculadora',
    icon: '🧮',
    name: 'Calculadora Multi-Cenário',
    fromState: 'Chute no escuro',
    fromDesc: 'Planilhas confusas e cálculos errados',
    toState: '5 cenários simulados',
    toDesc: 'Precisão total em cada decisão de investimento',
    size: 'featured',
    badge: 'EXCLUSIVO',
  },
  {
    id: 'relatorios',
    icon: '📄',
    name: 'Relatórios PDF',
    fromState: 'Prints amadores',
    fromDesc: 'Screenshots e mensagens no WhatsApp',
    toState: 'PDFs profissionais',
    toDesc: 'Documentos prontos para impressionar',
    size: 'half',
    badge: null,
  },
  {
    id: 'dashboard',
    icon: '📊',
    name: 'Dashboard Unificado',
    fromState: 'Planilhas confusas',
    fromDesc: 'Dezenas de abas e arquivos espalhados',
    toState: 'Pipeline visual',
    toDesc: 'Todas as oportunidades em um clique',
    size: 'half',
    badge: null,
  },
  {
    id: 'ocupantes',
    icon: '🏠',
    name: 'Dados de Ocupantes',
    fromState: 'Surpresas ruins',
    fromDesc: 'Descobrir ocupação após o arremate',
    toState: 'Consulta prévia',
    toDesc: 'Situação do imóvel antes de dar lance',
    size: 'half',
    badge: null,
  },
  {
    id: 'assessores',
    icon: '👥',
    name: 'Ferramentas para Assessores',
    fromState: 'Clientes perdidos',
    fromDesc: 'Gestão manual e desorganizada',
    toState: 'Portfólio organizado',
    toDesc: 'Multi-cliente com visão profissional',
    size: 'half',
    badge: 'PARA ASSESSORES',
  },
];

export default function FeaturesTransformation() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="bg-[#EFF0F0] py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="features-transform-heading"
    >
      {/* Background Gradient Glows */}
      <div
        className="
          absolute top-0 left-1/2
          w-[800px] h-[400px]
          bg-gradient-to-r from-[#5C5CFF]/5 via-transparent to-[#5C5CFF]/10
          rounded-full
          blur-[100px]
          -translate-x-1/2
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute bottom-0 right-0
          w-[500px] h-[500px]
          bg-[#5C5CFF]/8
          rounded-full
          blur-[120px]
          translate-x-1/4
        "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span
            className="
              inline-flex items-center gap-3
              px-5 py-2.5
              bg-white/60 backdrop-blur-sm
              rounded-full
              border border-[#5C5CFF]/15
              shadow-[0_8px_30px_-10px_rgba(92,92,255,0.15)]
            "
          >
            <span className="text-[#2B3259]/40 text-sm">Antes</span>
            <span className="text-[#5C5CFF] font-bold">→</span>
            <span className="text-[#5C5CFF] font-semibold text-sm">Depois</span>
          </span>
        </div>

        {/* Headline */}
        <h2
          id="features-transform-heading"
          className="
            text-center
            text-3xl sm:text-4xl md:text-5xl
            font-black
            tracking-[-0.03em]
            leading-[1.1]
            text-[#2B3259]
            mb-6
          "
        >
          Sua transformação{' '}
          <span className="text-[#5C5CFF]">começa aqui</span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Cada funcionalidade transforma um problema em solução.
          Veja o que muda na sua rotina de investimentos.
        </p>

        {/* Features Grid - Mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {transformations.map((feature) => (
            <div
              key={feature.id}
              className={`
                ${feature.size === 'full' || feature.size === 'featured' ? 'md:col-span-2' : 'md:col-span-1'}
              `}
            >
              <TransformationCard feature={feature} />
            </div>
          ))}
        </div>

        {/* Final Transformation Summary */}
        <div
          className="
            mt-16
            relative
            p-8 md:p-10
            bg-gradient-to-r from-white/70 via-white/80 to-white/70
            backdrop-blur-sm
            rounded-3xl
            border border-[#5C5CFF]/10
            shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)]
          "
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* From */}
            <div className="text-center opacity-50">
              <p className="text-sm text-[#2B3259]/60 mb-2">De</p>
              <p className="text-xl font-bold text-[#2B3259]">Investidor desorganizado</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <div
                className="
                  w-20 h-1
                  bg-gradient-to-r from-[#5C5CFF]/30 to-[#5C5CFF]
                  rounded-full
                  relative
                "
              >
                <div
                  className="
                    absolute right-0 top-1/2 -translate-y-1/2
                    w-0 h-0
                    border-t-[6px] border-t-transparent
                    border-b-[6px] border-b-transparent
                    border-l-[10px] border-l-[#5C5CFF]
                  "
                />
              </div>
            </div>
            <div className="md:hidden text-3xl text-[#5C5CFF]">↓</div>

            {/* To */}
            <div className="text-center">
              <p className="text-sm text-[#5C5CFF] mb-2 font-semibold">Para</p>
              <p className="text-2xl font-black text-[#5C5CFF]">Investidor profissional</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={openModal}
            className="
              bg-[#5C5CFF]
              text-white
              font-bold text-lg
              px-10 py-5
              rounded-full
              shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)]
              transition-all duration-300
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:-translate-y-1 hover:scale-[1.02]
              hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.5)]
              active:translate-y-0 active:scale-[0.98]
              cursor-pointer
            "
          >
            Iniciar minha transformação
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">
            Junte-se a centenas de investidores que já transformaram seus resultados
          </p>
        </div>
      </div>
    </section>
  );
}

interface TransformationCardProps {
  feature: {
    id: string;
    icon: string;
    name: string;
    fromState: string;
    fromDesc: string;
    toState: string;
    toDesc: string;
    size: string;
    badge: string | null;
  };
}

function TransformationCard({ feature }: TransformationCardProps) {
  const isFeatured = feature.size === 'featured';
  const isFull = feature.size === 'full' || isFeatured;

  return (
    <article
      className={`
        group
        relative
        bg-white/80 backdrop-blur-sm
        rounded-3xl
        border border-[#5C5CFF]/10
        hover:border-[#5C5CFF]/20
        shadow-[0_15px_50px_-15px_rgba(92,92,255,0.12)]
        hover:shadow-[0_25px_60px_-15px_rgba(92,92,255,0.2)]
        transition-all duration-500
        overflow-hidden
        ${isFeatured ? 'ring-2 ring-[#5C5CFF]/20' : ''}
      `}
    >
      {/* Badge */}
      {feature.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`
              px-3 py-1
              text-xs font-bold
              rounded-full
              ${feature.badge === 'EXCLUSIVO'
                ? 'bg-[#5C5CFF] text-white shadow-[0_4px_15px_-3px_rgba(92,92,255,0.5)]'
                : 'bg-[#2B3259]/10 text-[#2B3259]'
              }
            `}
          >
            {feature.badge}
          </span>
        </div>
      )}

      <div className={`relative z-10 ${isFeatured ? 'p-8' : 'p-6'}`}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`
              ${isFeatured ? 'w-16 h-16' : 'w-12 h-12'}
              bg-[#5C5CFF]/10
              rounded-2xl
              flex items-center justify-center
              group-hover:bg-[#5C5CFF]/15
              group-hover:scale-110
              transition-all duration-300
            `}
          >
            <span className={isFeatured ? 'text-4xl' : 'text-2xl'}>{feature.icon}</span>
          </div>
          <h3 className={`${isFeatured ? 'text-2xl' : 'text-xl'} font-black text-[#2B3259] tracking-[-0.02em]`}>
            {feature.name}
          </h3>
        </div>

        {/* Transformation Flow */}
        <div className={`
          grid
          ${isFull ? 'md:grid-cols-[1fr,auto,1fr]' : 'grid-cols-1'}
          gap-4 md:gap-6
          items-center
        `}>
          {/* FROM State */}
          <div
            className="
              p-4
              bg-[#2B3259]/5
              rounded-2xl
              opacity-50
              group-hover:opacity-40
              transition-opacity duration-300
            "
          >
            <span className="text-xs font-semibold text-[#2B3259]/40 uppercase tracking-widest">
              De
            </span>
            <p className={`${isFeatured ? 'text-xl' : 'text-lg'} font-bold text-[#2B3259]/70 mt-1`}>
              {feature.fromState}
            </p>
            <p className="text-sm text-[#2B3259]/40 mt-1">{feature.fromDesc}</p>
          </div>

          {/* Arrow */}
          <div className={`
            flex items-center justify-center
            ${isFull ? 'hidden md:flex' : 'py-2'}
          `}>
            {isFull ? (
              <div className="relative">
                {/* Arrow line */}
                <div
                  className="
                    w-16 h-1
                    bg-gradient-to-r from-[#2B3259]/20 via-[#5C5CFF]/50 to-[#5C5CFF]
                    rounded-full
                    group-hover:w-20
                    transition-all duration-500
                  "
                />
                {/* Arrow head */}
                <div
                  className="
                    absolute right-0 top-1/2 -translate-y-1/2 translate-x-1
                    w-0 h-0
                    border-t-[5px] border-t-transparent
                    border-b-[5px] border-b-transparent
                    border-l-[8px] border-l-[#5C5CFF]
                    group-hover:border-l-[10px]
                    transition-all duration-500
                  "
                />
              </div>
            ) : (
              <div className="text-2xl text-[#5C5CFF] group-hover:scale-125 transition-transform duration-300">
                ↓
              </div>
            )}
          </div>

          {/* TO State */}
          <div
            className="
              p-4
              bg-[#5C5CFF]/8
              group-hover:bg-[#5C5CFF]/12
              rounded-2xl
              border border-[#5C5CFF]/10
              group-hover:border-[#5C5CFF]/20
              transition-all duration-300
              relative
              overflow-hidden
            "
          >
            {/* Glow effect */}
            <div
              className="
                absolute -top-5 -right-5
                w-20 h-20
                bg-[#5C5CFF]/20
                rounded-full
                blur-xl
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-500
              "
              aria-hidden="true"
            />

            <span className="relative text-xs font-semibold text-[#5C5CFF] uppercase tracking-widest">
              Para
            </span>
            <p className={`relative ${isFeatured ? 'text-xl' : 'text-lg'} font-black text-[#5C5CFF] mt-1`}>
              {feature.toState}
            </p>
            <p className="relative text-sm text-[#2B3259]/60 mt-1">{feature.toDesc}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

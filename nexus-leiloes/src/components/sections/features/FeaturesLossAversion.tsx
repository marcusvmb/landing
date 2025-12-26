'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * FEATURES SECTION V1: LOSS AVERSION
 *
 * Frame Cognitivo: "Cada feature elimina uma perda especifica"
 *
 * ASCII Layout:
 * ┌─────────────────────────────────────────────────────────────┐
 * │                      EYEBROW BADGE                          │
 * │                                                             │
 * │              "Sem Essas Ferramentas, Você Perde"           │
 * │                       (headline)                            │
 * ├─────────────────────────────────────────────────────────────┤
 * │                                                             │
 * │  ┌─────────────────────┐  ┌─────────────────────┐          │
 * │  │ [!] BUSCA UNIFICADA │  │ [!] CALCULADORA     │          │
 * │  │                     │  │     MULTI-CENARIO   │          │
 * │  │ Sem isso: perda     │  │                     │          │
 * │  │ Com isso: ganho     │  │ Sem isso: perda     │          │
 * │  │ ─────────────────   │  │ Com isso: ganho     │          │
 * │  │ ▓▓▓▓▓▓▓▓░░ 2h/dia  │  │ ─────────────────   │          │
 * │  └─────────────────────┘  │ ▓▓▓▓▓▓▓▓░░ R$15k+  │          │
 * │                           │    [EXCLUSIVO]      │          │
 * │  ┌─────────────────────┐  └─────────────────────┘          │
 * │  │ [!] RELATORIOS PDF  │                                   │
 * │  │                     │  ┌─────────────────────┐          │
 * │  │ Sem isso: perda     │  │ [!] DASHBOARD       │          │
 * │  │ Com isso: ganho     │  │                     │          │
 * │  └─────────────────────┘  │ Sem isso: perda     │          │
 * │                           │ Com isso: ganho     │          │
 * │  ┌─────────────────────┐  └─────────────────────┘          │
 * │  │ [!] DADOS OCUPANTES │                                   │
 * │  │                     │  ┌─────────────────────┐          │
 * │  │ Sem isso: perda     │  │ [!] FERRAMENTAS     │          │
 * │  │ Com isso: ganho     │  │     ASSESSORES      │          │
 * │  └─────────────────────┘  │ [PARA ASSESSORES]   │          │
 * │                           └─────────────────────┘          │
 * └─────────────────────────────────────────────────────────────┘
 *
 * Grid Structure: 12 cols
 * - Left column (cards 1,3,5): col-span-6 on md, staggered -mt-X
 * - Right column (cards 2,4,6): col-span-6 on md, staggered mt-X
 *
 * Visual Elements:
 * - Warning glow (orange) that transitions to solution (blue) on hover
 * - Progress bar showing "loss recovered"
 * - Strikethrough on "loss" values
 *
 * Hover States:
 * - Card lifts, shadow intensifies
 * - Orange glow fades, blue glow appears
 * - "Gain" section expands slightly
 */

const features = [
  {
    id: 'busca',
    icon: '🔍',
    name: 'Busca Unificada',
    lossLabel: 'Sem isso você perde',
    lossValue: '2h por dia',
    lossDesc: 'alternando entre +20 sites de leiloeiros',
    gainLabel: 'Com isso você ganha',
    gainValue: '+40h/mês',
    gainDesc: 'para focar em análises que geram lucro',
    recoveryPercent: 85,
    badge: null,
  },
  {
    id: 'calculadora',
    icon: '🧮',
    name: 'Calculadora Multi-Cenário',
    lossLabel: 'Sem isso você perde',
    lossValue: '2h por análise',
    lossDesc: 'em planilhas e cálculos manuais',
    gainLabel: 'Com isso você ganha',
    gainValue: '100% precisão',
    gainDesc: 'com 5 cenários simulados por imóvel',
    recoveryPercent: 100,
    badge: 'EXCLUSIVO',
  },
  {
    id: 'relatorios',
    icon: '📄',
    name: 'Relatórios PDF',
    lossLabel: 'Sem isso você perde',
    lossValue: 'Credibilidade',
    lossDesc: 'enviando prints e planilhas amadoras',
    gainLabel: 'Com isso você ganha',
    gainValue: 'Profissionalismo',
    gainDesc: 'PDFs prontos para enviar a clientes',
    recoveryPercent: 90,
    badge: null,
  },
  {
    id: 'dashboard',
    icon: '📊',
    name: 'Dashboard Unificado',
    lossLabel: 'Sem isso você perde',
    lossValue: 'Oportunidades',
    lossDesc: 'esquecidas em abas e planilhas',
    gainLabel: 'Com isso você ganha',
    gainValue: 'Controle Total',
    gainDesc: 'pipeline visual de todas as oportunidades',
    recoveryPercent: 95,
    badge: null,
  },
  {
    id: 'ocupantes',
    icon: '🏠',
    name: 'Dados de Ocupantes',
    lossLabel: 'Sem isso você perde',
    lossValue: 'Tempo e Dinheiro',
    lossDesc: 'descobrindo ocupação depois do arremate',
    gainLabel: 'Com isso você ganha',
    gainValue: 'Segurança',
    gainDesc: 'consulta prévia da situação do imóvel',
    recoveryPercent: 80,
    badge: null,
  },
  {
    id: 'assessores',
    icon: '👥',
    name: 'Ferramentas para Assessores',
    lossLabel: 'Sem isso você perde',
    lossValue: 'Clientes',
    lossDesc: 'por falta de organização multi-cliente',
    gainLabel: 'Com isso você ganha',
    gainValue: '+87% retenção',
    gainDesc: 'gestão profissional de portfólio',
    recoveryPercent: 87,
    badge: 'PARA ASSESSORES',
  },
];

export default function FeaturesLossAversion() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="bg-[#EFF0F0] py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="features-loss-heading"
    >
      {/* Background Glows */}
      <div
        className="
          absolute top-1/4 right-0
          w-[500px] h-[500px]
          bg-[#5C5CFF]/8
          rounded-full
          blur-[120px]
          translate-x-1/3
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute bottom-1/4 left-0
          w-[400px] h-[400px]
          bg-[#5C5CFF]/10
          rounded-full
          blur-[100px]
          -translate-x-1/3
        "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Headline */}
        <h2
          id="features-loss-heading"
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
          Sem essas ferramentas,{' '}
          <span className="text-[#5C5CFF]">você perde tempo</span>
          <br />
          <span className="text-[#5C5CFF]">(e oportunidades) todos os dias</span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Cada funcionalidade da Nexus foi criada para eliminar uma perda específica.
          Veja o que você recupera com cada uma.
        </p>

        {/* Features Grid - 2x3 Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`
                ${index % 2 === 0 ? 'md:-mt-4' : 'md:mt-4'}
              `}
            >
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>

        {/* Summary */}
        <div
          className="
            mt-16
            p-8
            bg-white/70 backdrop-blur-sm
            rounded-3xl
            border border-[#5C5CFF]/10
            shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)]
            text-center
          "
        >
          <p className="text-lg text-[#2B3259]/60 mb-3">
            Tempo perdido toda semana sem a Nexus:
          </p>
          <p className="text-3xl md:text-4xl font-black text-[#5C5CFF] line-through decoration-2 mb-2">
            15h/semana
          </p>
          <p className="text-lg text-[#2B3259]/60">
            em navegação fragmentada, planilhas e decisões no escuro
          </p>
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
            Parar de perder agora
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">
            Entre na lista VIP e seja o primeiro a eliminar essas perdas
          </p>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: {
    id: string;
    icon: string;
    name: string;
    lossLabel: string;
    lossValue: string;
    lossDesc: string;
    gainLabel: string;
    gainValue: string;
    gainDesc: string;
    recoveryPercent: number;
    badge: string | null;
  };
}

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article
      className="
        group
        relative
        bg-white/80 backdrop-blur-sm
        rounded-3xl
        border border-[#5C5CFF]/10
        hover:border-[#5C5CFF]/20
        shadow-[0_15px_50px_-15px_rgba(92,92,255,0.15)]
        hover:shadow-[0_25px_60px_-15px_rgba(92,92,255,0.25)]
        transition-all duration-500
        overflow-hidden
      "
    >
      {/* Warning Glow - fades on hover */}
      <div
        className="
          absolute -top-10 -right-10
          w-32 h-32
          bg-[#5C5CFF]/20
          rounded-full
          blur-2xl
          group-hover:opacity-0
          transition-opacity duration-500
        "
        aria-hidden="true"
      />

      {/* Solution Glow - appears on hover */}
      <div
        className="
          absolute -top-10 -right-10
          w-32 h-32
          bg-[#5C5CFF]/20
          rounded-full
          blur-2xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
        aria-hidden="true"
      />

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          {/* Icon with glow transition */}
          <div
            className="
              w-14 h-14
              bg-[#5C5CFF]/10
              group-hover:bg-[#5C5CFF]/10
              rounded-2xl
              flex items-center justify-center
              transition-all duration-300
              group-hover:scale-110
            "
          >
            <span className="text-3xl">{feature.icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-black text-[#2B3259] tracking-[-0.02em]">
              {feature.name}
            </h3>
          </div>
        </div>

        {/* Loss Section */}
        <div
          className="
            p-4 mb-4
            bg-[#5C5CFF]/5
            group-hover:bg-[#5C5CFF]/3
            rounded-2xl
            border border-[#5C5CFF]/10
            transition-all duration-300
          "
        >
          <span className="text-xs font-semibold text-[#5C5CFF]/60 uppercase tracking-widest">
            {feature.lossLabel}
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-lg font-bold text-[#5C5CFF] line-through decoration-2 opacity-70">
              {feature.lossValue}
            </span>
          </div>
          <p className="text-sm text-[#2B3259]/50 mt-1">{feature.lossDesc}</p>
        </div>

        {/* Gain Section */}
        <div
          className="
            p-4
            bg-[#5C5CFF]/5
            group-hover:bg-[#5C5CFF]/8
            rounded-2xl
            border border-[#5C5CFF]/10
            group-hover:border-[#5C5CFF]/20
            transition-all duration-300
          "
        >
          <span className="text-xs font-semibold text-[#5C5CFF] uppercase tracking-widest">
            {feature.gainLabel}
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-xl font-black text-[#5C5CFF]">
              {feature.gainValue}
            </span>
          </div>
          <p className="text-sm text-[#2B3259]/60 mt-1">{feature.gainDesc}</p>

          {/* Recovery Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-[#2B3259]/40">Perda recuperada</span>
              <span className="font-semibold text-[#5C5CFF]">{feature.recoveryPercent}%</span>
            </div>
            <div className="h-2 bg-[#2B3259]/10 rounded-full overflow-hidden">
              <div
                className="
                  h-full
                  bg-gradient-to-r from-[#5C5CFF] via-[#5C5CFF] to-[#5C5CFF]
                  rounded-full
                  transition-all duration-700
                  group-hover:animate-pulse
                "
                style={{ width: `${feature.recoveryPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

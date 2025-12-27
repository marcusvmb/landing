'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * SEGMENTATION SECTION V1: LOSS AVERSION
 *
 * Frame Cognitivo: "Não importa quem você e, você esta perdendo sem isso"
 *
 * ASCII Layout:
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │                         EYEBROW BADGE                                │
 * │                                                                      │
 * │         "Para Quem e o Nexus? Para Quem Não Quer Perder"            │
 * │                          (headline)                                  │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │                                                                      │
 * │  ┌────────────────────────────┐    ┌─────────────────────────────┐  │
 * │  │ [!] INVESTIDORES PF        │    │ [!] ASSESSORES DE LEILAO   │  │
 * │  │     ───────────────        │    │     ─────────────────      │  │
 * │  │                            │    │                             │  │
 * │  │  PERDAS SEM O NEXUS:       │    │  PERDAS SEM O NEXUS:       │  │
 * │  │  ┌────────────────────┐    │    │  ┌─────────────────────┐   │  │
 * │  │  │ ⚠ R$15k em erros   │    │    │  │ ⚠ 3 clientes/mês    │   │  │
 * │  │  │ ⚠ 2h/dia buscando  │    │    │  │ ⚠ 5h/dia em tarefas │   │  │
 * │  │  │ ⚠ Oportunidades    │    │    │  │ ⚠ Credibilidade     │   │  │
 * │  │  └────────────────────┘    │    │  └─────────────────────┘   │  │
 * │  │                            │    │                             │  │
 * │  │  COM O NEXUS:              │    │  COM O NEXUS:              │  │
 * │  │  ✓ Encontre antes          │    │  ✓ Gerencie multiplos      │  │
 * │  │  ✓ Calcule o ROI real      │    │  ✓ Gere relatorios PRO     │  │
 * │  │  ✓ Organize tudo           │    │  ✓ Acompanhe comissoes     │  │
 * │  │  ✓ Decida com confiança    │    │  ✓ Impressione clientes    │  │
 * │  │                            │    │                             │  │
 * │  │  ┌────────────────────┐    │    │  ┌─────────────────────┐   │  │
 * │  │  │ PARAR DE PERDER    │    │    │  │ PARAR DE PERDER     │   │  │
 * │  │  │    (Primary)       │    │    │  │    (Secondary)      │   │  │
 * │  │  └────────────────────┘    │    │  └─────────────────────┘   │  │
 * │  └────────────────────────────┘    └─────────────────────────────┘  │
 * │          ↑ col-span-7                      ↑ col-span-5             │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * Grid Structure: 12 cols
 * - Investidores card: col-span-7 (assimetrico, ligeiramente maior)
 * - Assessores card: col-span-5
 *
 * Visual Elements:
 * - Warning glows laranja nos cards
 * - Badges de alerta com valores de perda
 * - Linha divisoria visual entre "perdas" e "ganhos"
 * - Sombras coloridas diferenciadas por persona
 *
 * Hover States:
 * - Investidores: glow azul (#5C5CFF) aparece, card eleva
 * - Assessores: glow laranja (#FF7A00) intensifica, card eleva
 */

const investidorLosses = [
  { value: 'Planilhas que mentem', desc: 'esqueceu uma taxa e lá se foi o lucro' },
  { value: 'Caos de ferramentas', desc: 'Excel, Notion, WhatsApp, planilha...' },
  { value: 'Sempre um passo atrás', desc: 'concorrentes viram antes de você' },
];

const investidorBenefits = [
  'Encontre oportunidades antes da concorrência',
  'Calcule o ROI real antes de arrematar',
  'Organize todos os seus leilões em um só lugar',
  'Tome decisões com confiança',
];

const assessorLosses = [
  { value: 'Concorrentes mais ágeis', desc: 'fechando seus próximos clientes' },
  { value: 'Crescimento travado', desc: 'você é o gargalo do seu negócio' },
  { value: 'Amadorismo visível', desc: 'relatórios que não transmitem confiança' },
];

const assessorBenefits = [
  'Gerencie múltiplos clientes em um painel',
  'Gere relatórios profissionais com sua marca',
  'Acompanhe comissões e resultados',
  'Impressione clientes com análises detalhadas',
];

export default function SegmentationLossAversion() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="bg-[#EFF0F0] py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="segmentation-loss-heading"
    >
      {/* Background Glows - Optimized for mobile */}
      <div
        className="
          absolute top-1/4 left-0
          w-[300px] md:w-[600px] h-[300px] md:h-[600px]
          bg-[#5C5CFF]/8
          rounded-full
          blur-[80px] md:blur-[150px]
          -translate-x-1/2
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute bottom-1/4 right-0
          w-[250px] md:w-[500px] h-[250px] md:h-[500px]
          bg-[#5C5CFF]/6
          rounded-full
          blur-[60px] md:blur-[120px]
          translate-x-1/3
        "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Headline */}
        <h2
          id="segmentation-loss-heading"
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
          Para quem é a Nexus?{' '}
          <br className="hidden sm:block" />
          <span className="text-[#5C5CFF]">Para quem não quer perder.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Não importa se você investe sozinho ou assessora dezenas de clientes.{' '}
          <span className="font-semibold text-[#2B3259]">
            Sem as ferramentas certas, você está deixando dinheiro na mesa.
          </span>
        </p>

        {/* Persona Cards - Equal Width Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Investidores Card */}
          <div>
            <PersonaCard
              persona="investidor"
              title="Investidor"
              subtitle="Pessoas físicas que investem em leilões"
              losses={investidorLosses}
              benefits={investidorBenefits}
              ctaText="Parar de perder oportunidades"
              ctaColor="primary"
              onOpenModal={openModal}
            />
          </div>

          {/* Assessores Card */}
          <div>
            <PersonaCard
              persona="assessor"
              title="Assessores de Leilão"
              subtitle="Profissionais que assessoram clientes"
              losses={assessorLosses}
              benefits={assessorBenefits}
              ctaText="Parar de perder clientes"
              ctaColor="secondary"
              onOpenModal={openModal}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface PersonaCardProps {
  persona: 'investidor' | 'assessor';
  title: string;
  subtitle: string;
  losses: { value: string; desc: string }[];
  benefits: string[];
  ctaText: string;
  ctaColor: 'primary' | 'secondary';
  onOpenModal: () => void;
}

function PersonaCard({
  persona,
  title,
  subtitle,
  losses,
  benefits,
  ctaText,
  ctaColor,
  onOpenModal,
}: PersonaCardProps) {
  const isInvestidor = persona === 'investidor';
  const primaryColor = '#5C5CFF';
  const hoverGlowColor = 'group-hover:shadow-[0_30px_80px_-20px_rgba(92,92,255,0.35)]';

  return (
    <article
      className={`
        group
        relative
        bg-white/80 backdrop-blur-sm
        rounded-3xl
        border border-[#5C5CFF]/15
        hover:border-[#5C5CFF]/30
        shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)]
        ${hoverGlowColor}
        transition-all duration-500
        overflow-hidden
        h-full
      `}
    >
      {/* Warning Glow */}
      <div
        className="
          absolute -top-20 -right-20
          w-48 h-48
          bg-[#5C5CFF]/15
          rounded-full
          blur-3xl
          group-hover:opacity-50
          transition-opacity duration-500
        "
        aria-hidden="true"
      />

      {/* Solution Glow - appears on hover */}
      <div
        className={`
          absolute -top-20 -right-20
          w-48 h-48
          bg-[${primaryColor}]/20
          rounded-full
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        `}
        style={{ backgroundColor: `${primaryColor}20` }}
        aria-hidden="true"
      />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="
                w-12 h-12
                bg-[#5C5CFF]/10
                group-hover:bg-opacity-20
                rounded-2xl
                flex items-center justify-center
                transition-all duration-300
              "
              style={{
                backgroundColor: 'rgba(92,92,255,0.1)',
              }}
            >
              <span className="text-2xl">{isInvestidor ? '💼' : '🎯'}</span>
            </div>
            <div>
              <h3
                className="text-2xl font-black tracking-[-0.02em]"
                style={{ color: primaryColor }}
              >
                {title}
              </h3>
              <p className="text-sm text-[#2B3259]/50">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Losses Section */}
        <div
          className="
            p-5 mb-5
            bg-[#5C5CFF]/5
            rounded-2xl
            border border-[#5C5CFF]/10
          "
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#5C5CFF]" aria-hidden="true">
              &#9888;
            </span>
            <span className="text-xs font-bold text-[#5C5CFF] uppercase tracking-widest">
              Perdas sem a Nexus
            </span>
          </div>

          <div className="space-y-3">
            {losses.map((loss, index) => (
              <div
                key={index}
                className="
                  flex items-start gap-3
                  p-3
                  bg-white/60
                  rounded-xl
                  border border-[#5C5CFF]/10
                "
              >
                <span className="text-[#5C5CFF] mt-0.5">&#9888;</span>
                <div>
                  <span className="font-bold text-[#5C5CFF] line-through decoration-2">
                    {loss.value}
                  </span>
                  <span className="text-sm text-[#2B3259]/60 ml-2">
                    {loss.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div
          className="
            p-5 mb-6
            rounded-2xl
            border
            transition-all duration-300
          "
          style={{
            backgroundColor: `${primaryColor}08`,
            borderColor: `${primaryColor}15`,
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span style={{ color: primaryColor }} aria-hidden="true">
              &#10003;
            </span>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: primaryColor }}
            >
              Com a Nexus
            </span>
          </div>

          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="mt-0.5 font-bold"
                  style={{ color: primaryColor }}
                >
                  &#10003;
                </span>
                <span className="text-sm text-[#2B3259]/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={onOpenModal}
          className={`
            w-full
            font-bold text-base
            px-6 py-4
            rounded-xl
            transition-all duration-300
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:-translate-y-0.5
            active:translate-y-0 active:scale-[0.98]
            cursor-pointer
            ${
              ctaColor === 'primary'
                ? `
                  bg-[#5C5CFF] text-white
                  shadow-[0_12px_35px_-10px_rgba(92,92,255,0.4)]
                  hover:shadow-[0_18px_45px_-10px_rgba(92,92,255,0.5)]
                `
                : `
                  bg-[#5C5CFF] text-white
                  shadow-[0_12px_35px_-10px_rgba(92,92,255,0.4)]
                  hover:shadow-[0_18px_45px_-10px_rgba(92,92,255,0.5)]
                `
            }
          `}
        >
          {ctaText}
        </button>

        <p className="mt-3 text-center text-xs text-[#2B3259]/40">
          Garanta seu desconto exclusivo
        </p>
      </div>
    </article>
  );
}

'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from '@/components/animations';

/**
 * SEGMENTATION SECTION V2: TRANSFORMATION
 *
 * Frame Cognitivo: "Sua jornada de evolução começa aqui"
 *
 * ASCII Layout:
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │                         EYEBROW BADGE                                │
 * │                                                                      │
 * │          "Cada Perfil, Uma Jornada de Transformação"                │
 * │                          (headline)                                  │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │                                                                      │
 * │  ┌─────────────────────────────┐  ┌──────────────────────────────┐  │
 * │  │      INVESTIDORES PF        │  │     ASSESSORES DE LEILAO     │  │
 * │  │      ───────────────        │  │     ─────────────────        │  │
 * │  │                             │  │                              │  │
 * │  │  HOJE                       │  │  HOJE                        │  │
 * │  │  ──┬──                      │  │  ──┬──                       │  │
 * │  │    │ ○ Buscas fragmentadas  │  │    │ ○ Planilhas por cliente │  │
 * │  │    │ ○ Calculos manuais     │  │    │ ○ Relatorios amadores   │  │
 * │  │    │ ○ Dados espalhados     │  │    │ ○ Zero visao de comissao│  │
 * │  │    │                        │  │    │                         │  │
 * │  │    ↓  (linha de progresso)  │  │    ↓  (linha de progresso)   │  │
 * │  │    │                        │  │    │                         │  │
 * │  │  COM NEXUS                  │  │  COM NEXUS                   │  │
 * │  │  ──┴──                      │  │  ──┴──                       │  │
 * │  │    ✓ Busca unificada        │  │    ✓ Painel multi-cliente    │  │
 * │  │    ✓ Calculadora precisa    │  │    ✓ PDFs profissionais      │  │
 * │  │    ✓ Dashboard central      │  │    ✓ Controle de comissoes   │  │
 * │  │    ✓ Decisões confiantes    │  │    ✓ Clientes impressionados │  │
 * │  │                             │  │                              │  │
 * │  │  ┌─────────────────────┐    │  │  ┌──────────────────────┐   │  │
 * │  │  │ INICIAR JORNADA     │    │  │  │ INICIAR JORNADA      │   │  │
 * │  │  └─────────────────────┘    │  │  └──────────────────────┘   │  │
 * │  └─────────────────────────────┘  └──────────────────────────────┘  │
 * │          ↑ col-span-5                      ↑ col-span-7             │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * Grid Structure: 12 cols (assimetrico invertido da V1)
 * - Investidores card: col-span-5
 * - Assessores card: col-span-7
 *
 * Visual Elements:
 * - Timeline vertical com dots e linha de progresso
 * - Gradiente de opacidade (muted -> vibrant)
 * - Checkmarks animados no hover
 * - Transicao visual de "hoje" (cinza) para "com Nexus" (colorido)
 *
 * Hover States:
 * - Timeline pulsa suavemente
 * - Cards elevam com glow da cor da persona
 * - Checkmarks fazem scale up
 */

const investidorToday = [
  '4 horas por dia vasculhando vários sites diferentes',
  'Planilhas com 47 colunas que ninguém entende',
  '15 abas abertas e ainda assim perde informação',
  'Oportunidades perdidas por falta de tempo',
];

const investidorWithNexus = [
  'Encontre leilões lucrativos em menos de 8 minutos',
  'Calcule ROI, custos e riscos em 3 cliques',
  'Todas as oportunidades em 1 painel organizado',
  'Relatórios prontos com 12 métricas essenciais',
];

const assessorToday = [
  'Limite de clientes que você consegue atender',
  'Tempo consumido em tarefas que não pagam',
  'Crescimento travado por falta de organização',
  'Renda estagnada mesmo trabalhando mais',
];

const assessorWithNexus = [
  'Dobre sua carteira sem dobrar seu trabalho',
  'Tempo livre para prospectar novos clientes',
  'Estrutura para crescer de forma organizada',
  'Ganhe mais atendendo cada cliente em menos tempo',
];

export default function SegmentationTransformation() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="bg-[#EFF0F0] py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="segmentation-transform-heading"
    >
      {/* Gradient transition background */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#EFF0F0] via-[#F5F5FF] to-[#EFF0F0]
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* Subtle journey line glow */}
      <div
        className="
          absolute top-1/2 left-1/2
          w-[800px] h-[400px]
          bg-gradient-to-r from-[#5C5CFF]/5 via-[#5C5CFF]/10 to-[#5C5CFF]/5
          rounded-full
          blur-[100px]
          -translate-x-1/2 -translate-y-1/2
        "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Headline */}
        <FadeInWhenVisible>
          <h2
            id="segmentation-transform-heading"
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
            Cada perfil,{' '}
            <br className="hidden sm:block" />
            uma <span className="text-[#5C5CFF]">jornada</span> de{' '}
            <span className="text-[#5C5CFF]">transformação</span>
          </h2>
        </FadeInWhenVisible>

        {/* Subheadline */}
        <FadeInWhenVisible delay={0.1}>
          <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
            Veja como a Nexus transforma sua operação, seja você um investidor
            individual ou um assessor gerenciando múltiplos clientes.
          </p>
        </FadeInWhenVisible>

        {/* Persona Cards - Equal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Investidores Card */}
          <FadeInWhenVisible direction="left" delay={0.1}>
            <TransformationCard
              persona="investidor"
              title="Investidores"
              subtitle="Pessoas que investem em leilões"
              todayItems={investidorToday}
              nexusItems={investidorWithNexus}
              ctaText="Reservar meu lugar"
              primaryColor="#5C5CFF"
              onOpenModal={openModal}
            />
          </FadeInWhenVisible>

          {/* Assessores Card */}
          <FadeInWhenVisible direction="right" delay={0.2}>
            <TransformationCard
              persona="assessor"
              title="Assessores de Leilão"
              subtitle="Profissionais que assessoram clientes"
              todayItems={assessorToday}
              nexusItems={assessorWithNexus}
              ctaText="Reservar meu lugar"
              primaryColor="#5C5CFF"
              onOpenModal={openModal}
            />
          </FadeInWhenVisible>
        </div>

      </div>
    </section>
  );
}

interface TransformationCardProps {
  persona: 'investidor' | 'assessor';
  title: string;
  subtitle: string;
  todayItems: string[];
  nexusItems: string[];
  ctaText: string;
  primaryColor: string;
  onOpenModal: () => void;
}

function TransformationCard({
  persona,
  title,
  subtitle,
  todayItems,
  nexusItems,
  ctaText,
  primaryColor,
  onOpenModal,
}: TransformationCardProps) {
  const isInvestidor = persona === 'investidor';

  return (
    <article
      className={`
        group
        relative
        bg-white/80 backdrop-blur-sm
        rounded-3xl
        border border-[#2B3259]/10
        hover:border-opacity-20
        shadow-[0_20px_60px_-15px_rgba(43,50,89,0.1)]
        transition-all duration-500
        overflow-hidden
        h-full
      `}
      style={{
        // @ts-expect-error - CSS custom property
        '--hover-shadow': isInvestidor
          ? '0 30px 80px -20px rgba(92,92,255,0.25)'
          : '0 30px 80px -20px rgba(255,122,0,0.25)',
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b from-transparent via-transparent to-white/50
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="
                w-12 h-12
                rounded-2xl
                flex items-center justify-center
                transition-all duration-300
                group-hover:scale-110
              "
              style={{ backgroundColor: `${primaryColor}15` }}
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

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Progress Line */}
          <div
            className="
              absolute left-[18px] top-8 bottom-8
              w-0.5
              bg-gradient-to-b from-[#2B3259]/20 via-[#5C5CFF]/50 to-[#5C5CFF]
              group-hover:via-[#5C5CFF]/70
              transition-all duration-500
            "
            style={{
              background: `linear-gradient(to bottom, rgba(43,50,89,0.2), ${primaryColor}80, ${primaryColor})`,
            }}
            aria-hidden="true"
          />

          {/* TODAY Section */}
          <div className="relative mb-8">
            {/* Timeline Dot - Today */}
            <div
              className="
                absolute left-0 top-0
                w-9 h-9
                bg-[#EFF0F0]
                rounded-full
                border-2 border-[#2B3259]/20
                flex items-center justify-center
                z-10
              "
            >
              <div className="w-2.5 h-2.5 bg-[#2B3259]/30 rounded-full" />
            </div>

            <div className="ml-14">
              <span className="text-xs font-bold text-[#2B3259]/40 uppercase tracking-widest">
                Hoje
              </span>

              <div className="mt-3 space-y-2">
                {todayItems.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex items-start gap-2
                      text-sm text-[#2B3259]/50
                    "
                  >
                    <span className="text-[#2B3259]/30 mt-0.5">&#9675;</span>
                    <span className="line-through decoration-[#2B3259]/20">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WITH NEXUS Section */}
          <div className="relative">
            {/* Timeline Dot - Nexus */}
            <div
              className="
                absolute left-0 top-0
                w-9 h-9
                rounded-full
                flex items-center justify-center
                z-10
                shadow-lg
                transition-transform duration-300
                group-hover:scale-110
              "
              style={{
                backgroundColor: primaryColor,
                boxShadow: `0 8px 25px -5px ${primaryColor}50`,
              }}
            >
              <span className="text-white font-bold text-sm">&#10003;</span>
            </div>

            <div className="ml-14">
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: primaryColor }}
              >
                Com Nexus
              </span>

              <div className="mt-3 space-y-3">
                {nexusItems.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex items-start gap-2
                      text-sm text-[#2B3259]/80
                      group-hover:translate-x-1
                      transition-transform duration-300
                    "
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span
                      className="mt-0.5 font-bold"
                      style={{ color: primaryColor }}
                    >
                      &#10003;
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 ml-14">
          <button
            type="button"
            onClick={onOpenModal}
            className="
              w-full
              font-bold text-base
              text-white
              px-6 py-4
              rounded-xl
              transition-all duration-300
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:-translate-y-0.5
              active:translate-y-0 active:scale-[0.98]
              cursor-pointer
            "
            style={{
              backgroundColor: primaryColor,
              boxShadow: `0 12px 35px -10px ${primaryColor}60`,
            }}
          >
            {ctaText}
          </button>

          <p className="mt-3 text-center text-xs text-[#2B3259]/40">
            Desconto exclusivo para fundadores
          </p>
        </div>
      </div>
    </article>
  );
}

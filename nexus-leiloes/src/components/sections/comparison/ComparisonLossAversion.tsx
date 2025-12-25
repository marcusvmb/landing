/**
 * COMPARISON SECTION V1: LOSS AVERSION
 *
 * Frame Cognitivo: "O custo de NAO ter a Nexus"
 * Foco em perdas quantificaveis - valores em vermelho/laranja
 *
 * ASCII Layout:
 * +-----------------------------------------------------------------------+
 * |                         EYEBROW BADGE                                  |
 * |              "Quanto você esta deixando na mesa?"                      |
 * +-----------------------------------------------------------------------+
 * |                                                                        |
 * |     SEM NEXUS (45%)              |          COM NEXUS (55%)           |
 * |     [Darker/Muted Side]          |          [Vibrant Side]            |
 * |                                  |                                     |
 * |  +---------------------------+   |   +-----------------------------+  |
 * |  |  [!] 20+ SITES ABERTOS   |   |   |  [v] 1 BUSCA UNIFICADA      |  |
 * |  |  -R$8.400/ano em tempo   |   |   |  +R$8.400/ano economizado   |  |
 * |  +---------------------------+   |   +-----------------------------+  |
 * |                                  |                                     |
 * |  +---------------------------+   |   +-----------------------------+  |
 * |  |  [!] 2H/DIA PERDIDAS     |   |   |  [v] 15MIN/DIA              |  |
 * |  |  -480h/ano desperdicadas |   |   |  +465h/ano recuperadas      |  |
 * |  +---------------------------+   |   +-----------------------------+  |
 * |                                  |                                     |
 * |  +---------------------------+   |   +-----------------------------+  |
 * |  |  [!] PLANILHAS MANUAIS   |   |   |  [v] CALCULADORA AUTO       |  |
 * |  |  -R$15k/ano em erros     |   |   |  +100% precisão garantida   |  |
 * |  +---------------------------+   |   +-----------------------------+  |
 * |                                  |                                     |
 * |  +---------------------------+   |   +-----------------------------+  |
 * |  |  [!] ERROS DE CALCULO    |   |   |  [v] MULTI-CENARIOS         |  |
 * |  |  "R$15k/ano em media"    |   |   |  Simulações lado a lado     |  |
 * |  +---------------------------+   |   +-----------------------------+  |
 * |                                  |                                     |
 * |  +---------------------------+   |   +-----------------------------+  |
 * |  |  [!] CAOS DE ABAS        |   |   |  [v] DASHBOARD CENTRAL      |  |
 * |  |  -Oportunidades perdidas |   |   |  Controle visual total      |  |
 * |  +---------------------------+   |   +-----------------------------+  |
 * |                                  |                                     |
 * |  +---------------------------+   |   +-----------------------------+  |
 * |  |  [!] PRINTS AMADORES     |   |   |  [v] PDFS PROFISSIONAIS     |  |
 * |  |  -Credibilidade arruinada|   |   |  +Profissionalismo          |  |
 * |  +---------------------------+   |   +-----------------------------+  |
 * |                                  |                                     |
 * +----------------------------------+------------------------------------+
 * |                                                                        |
 * |             [Total Loss: R$45k/ano]  vs  [Total Gain: +R$45k/ano]     |
 * |                                                                        |
 * |                    [ CTA: Parar de Perder Agora ]                     |
 * +------------------------------------------------------------------------+
 *
 * Grid Structure: 12 cols
 * - Left side (SEM): col-span-5, darker treatment
 * - Divider: col-span-2, animated gradient line
 * - Right side (COM): col-span-5, vibrant treatment
 *
 * Visual Effects:
 * - Left side: muted colors, bg-[#2B3259]/5, subtle red glow
 * - Right side: vibrant colors, bg-[#5C5CFF]/5, blue glow
 * - Loss values pulse subtly in orange
 * - Gain values have blue emphasis
 *
 * Hover States:
 * - Row hover highlights both sides
 * - Loss side dims further, gain side brightens
 */

const comparisonData = [
  {
    id: 'busca',
    without: {
      icon: '!',
      title: '20+ Sites Abertos',
      value: '-2h',
      suffix: '/dia',
      description: 'navegando entre leiloeiros',
    },
    with: {
      icon: 'check',
      title: '1 Busca Unificada',
      value: '+40h',
      suffix: '/mês',
      description: 'de tempo recuperado',
    },
  },
  {
    id: 'tempo',
    without: {
      icon: '!',
      title: '2 Horas/Dia Perdidas',
      value: '-480h',
      suffix: '/ano',
      description: 'alternando entre ferramentas',
    },
    with: {
      icon: 'check',
      title: '15 Minutos/Dia',
      value: '+465h',
      suffix: '/ano',
      description: 'recuperadas para análises',
    },
  },
  {
    id: 'análise',
    without: {
      icon: '!',
      title: 'Planilhas Manuais',
      value: '-2h',
      suffix: '/análise',
      description: 'em cálculos repetitivos',
    },
    with: {
      icon: 'check',
      title: 'Calculadora Automática',
      value: '100%',
      suffix: ' precisão',
      description: 'com 5 cenários por imóvel',
    },
  },
  {
    id: 'erros',
    without: {
      icon: '!',
      title: 'Decisões no Escuro',
      value: '0',
      suffix: ' cenários',
      description: 'analisados antes de dar lance',
    },
    with: {
      icon: 'check',
      title: 'Multi-Cenários',
      value: '5x',
      suffix: ' simulações',
      description: 'lado a lado por oportunidade',
    },
  },
  {
    id: 'organização',
    without: {
      icon: '!',
      title: 'Caos de Abas',
      value: '-3x',
      suffix: ' oportunidades',
      description: 'perdidas por mês por desorganização',
    },
    with: {
      icon: 'check',
      title: 'Dashboard Centralizado',
      value: '100%',
      suffix: ' controle',
      description: 'visual de todo pipeline',
    },
  },
  {
    id: 'relatorios',
    without: {
      icon: '!',
      title: 'Prints Amadores',
      value: '-87%',
      suffix: ' confiança',
      description: 'de clientes em apresentações',
    },
    with: {
      icon: 'check',
      title: 'PDFs Profissionais',
      value: '+92%',
      suffix: ' conversão',
      description: 'em fechamentos com clientes',
    },
  },
];

export default function ComparisonLossAversion() {
  return (
    <section
      className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="comparison-loss-heading"
    >
      {/* Background Elements */}
      {/* Loss Glow - Left */}
      <div
        className="
          absolute top-1/3 left-0
          w-[600px] h-[600px]
          bg-[#5C5CFF]/6
          rounded-full
          blur-[150px]
          -translate-x-1/2
        "
        aria-hidden="true"
      />
      {/* Gain Glow - Right */}
      <div
        className="
          absolute bottom-1/3 right-0
          w-[600px] h-[600px]
          bg-[#5C5CFF]/8
          rounded-full
          blur-[150px]
          translate-x-1/2
        "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Headline */}
        <h2
          id="comparison-loss-heading"
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
          O Custo de{' '}
          <span className="text-[#5C5CFF]">NAO</span> Ter
          <br />
          a Nexus
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg md:text-xl text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Cada dia sem o Hub completo e dinheiro saindo do seu bolso.
          <br className="hidden md:block" />
          Compare a realidade de quem ainda usa ferramentas fragmentadas.
        </p>

        {/* Comparison Container */}
        <div className="relative">
          {/* Column Headers */}
          <div className="grid grid-cols-12 gap-4 mb-8">
            {/* Left Header - SEM */}
            <div className="col-span-12 md:col-span-5">
              <div
                className="
                  p-4
                  bg-[#2B3259]/5
                  rounded-2xl
                  border border-[#5C5CFF]/10
                  text-center
                "
              >
                <span className="text-sm font-bold text-[#5C5CFF]/80 uppercase tracking-widest">
                  Sem Nexus
                </span>
                <p className="text-2xl font-black text-[#5C5CFF] mt-1">
                  Perdas Acumulando
                </p>
              </div>
            </div>

            {/* Center Spacer */}
            <div className="hidden md:flex md:col-span-2 items-center justify-center">
              <div className="text-[#2B3259]/30 text-4xl font-black">VS</div>
            </div>

            {/* Right Header - COM */}
            <div className="col-span-12 md:col-span-5">
              <div
                className="
                  p-4
                  bg-[#5C5CFF]/5
                  rounded-2xl
                  border border-[#5C5CFF]/20
                  text-center
                "
              >
                <span className="text-sm font-bold text-[#5C5CFF] uppercase tracking-widest">
                  Com Nexus
                </span>
                <p className="text-2xl font-black text-[#5C5CFF] mt-1">
                  Ganhos Garantidos
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {comparisonData.map((item, index) => (
              <ComparisonRow key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Divider Line (Desktop only) */}
          <div
            className="
              hidden md:block
              absolute top-0 bottom-0
              left-1/2 -translate-x-1/2
              w-[2px]
              bg-gradient-to-b from-[#5C5CFF]/20 via-[#2B3259]/10 to-[#5C5CFF]/20
            "
            style={{ top: '140px' }}
            aria-hidden="true"
          />
        </div>

        {/* Summary Totals */}
        <div className="grid grid-cols-12 gap-4 mt-12">
          {/* Left Total - Losses */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="
                p-6
                bg-[#5C5CFF]/5
                rounded-3xl
                border border-[#5C5CFF]/20
                text-center
              "
            >
              <p className="text-sm text-[#2B3259]/50 mb-2">
                Tempo perdido toda semana
              </p>
              <p className="text-4xl md:text-5xl font-black text-[#5C5CFF]">
                -15h/sem
              </p>
              <p className="text-sm text-[#2B3259]/40 mt-2">
                + ansiedade e decisões no escuro
              </p>
            </div>
          </div>

          {/* Center Arrow */}
          <div className="hidden md:flex md:col-span-2 items-center justify-center">
            <div
              className="
                w-16 h-16
                bg-[#5C5CFF]/10
                rounded-full
                flex items-center justify-center
                border-2 border-[#5C5CFF]/30
              "
            >
              <svg
                className="w-8 h-8 text-[#5C5CFF]"
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

          {/* Right Total - Gains */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="
                p-6
                bg-[#5C5CFF]/5
                rounded-3xl
                border border-[#5C5CFF]/20
                text-center
              "
            >
              <p className="text-sm text-[#2B3259]/50 mb-2">
                Tempo recuperado toda semana
              </p>
              <p className="text-4xl md:text-5xl font-black text-[#5C5CFF]">
                +15h/sem
              </p>
              <p className="text-sm text-[#2B3259]/40 mt-2">
                + confiança e controle total
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            type="button"
            className="
              bg-[#5C5CFF]
              text-white
              font-bold text-lg
              px-12 py-5
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
            Parar de Perder Agora
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">
            547 investidores já pararam de perder dinheiro
          </p>
        </div>
      </div>
    </section>
  );
}

interface ComparisonRowProps {
  item: {
    id: string;
    without: {
      icon: string;
      title: string;
      value: string;
      suffix: string;
      description: string;
    };
    with: {
      icon: string;
      title: string;
      value: string;
      suffix: string;
      description: string;
    };
  };
  index: number;
}

function ComparisonRow({ item, index }: ComparisonRowProps) {
  return (
    <div
      className="
        group
        grid grid-cols-12 gap-4
        transition-all duration-300
      "
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Left Card - SEM */}
      <div className="col-span-12 md:col-span-5">
        <div
          className="
            relative
            p-5
            bg-[#2B3259]/[0.03]
            group-hover:bg-[#5C5CFF]/5
            rounded-2xl
            border border-[#5C5CFF]/10
            group-hover:border-[#5C5CFF]/20
            transition-all duration-300
            overflow-hidden
          "
        >
          {/* Subtle loss glow */}
          <div
            className="
              absolute -top-8 -left-8
              w-24 h-24
              bg-[#5C5CFF]/10
              rounded-full
              blur-2xl
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-500
            "
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-start gap-4">
            {/* Warning Icon */}
            <div
              className="
                flex-shrink-0
                w-10 h-10
                bg-[#5C5CFF]/10
                rounded-xl
                flex items-center justify-center
              "
            >
              <span className="text-[#5C5CFF] font-bold text-lg">!</span>
            </div>

            <div className="flex-grow">
              <h3 className="font-bold text-[#2B3259]/80 text-base">
                {item.without.title}
              </h3>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-[#5C5CFF]">
                  {item.without.value}
                </span>
                <span className="text-sm text-[#5C5CFF]/60">
                  {item.without.suffix}
                </span>
              </div>
              <p className="text-sm text-[#2B3259]/50 mt-1">
                {item.without.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Center Mobile Connector */}
      <div className="col-span-12 md:hidden flex justify-center">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-[#5C5CFF]/40 rotate-90"
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

      {/* Center Spacer (Desktop) */}
      <div className="hidden md:block md:col-span-2" />

      {/* Right Card - COM */}
      <div className="col-span-12 md:col-span-5">
        <div
          className="
            relative
            p-5
            bg-[#5C5CFF]/[0.03]
            group-hover:bg-[#5C5CFF]/8
            rounded-2xl
            border border-[#5C5CFF]/10
            group-hover:border-[#5C5CFF]/30
            transition-all duration-300
            overflow-hidden
          "
        >
          {/* Solution glow */}
          <div
            className="
              absolute -top-8 -right-8
              w-24 h-24
              bg-[#5C5CFF]/15
              rounded-full
              blur-2xl
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-500
            "
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-start gap-4">
            {/* Check Icon */}
            <div
              className="
                flex-shrink-0
                w-10 h-10
                bg-[#5C5CFF]/10
                group-hover:bg-[#5C5CFF]/20
                rounded-xl
                flex items-center justify-center
                transition-colors duration-300
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
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="flex-grow">
              <h3 className="font-bold text-[#2B3259] text-base">
                {item.with.title}
              </h3>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-[#5C5CFF]">
                  {item.with.value}
                </span>
                <span className="text-sm text-[#5C5CFF]/60">
                  {item.with.suffix}
                </span>
              </div>
              <p className="text-sm text-[#2B3259]/60 mt-1">
                {item.with.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

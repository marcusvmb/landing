'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * COMPARISON SECTION V3: AUTHORITY
 *
 * Frame Cognitivo: "Compare você mesmo: amador vs profissional"
 * Foco em posicionar o usuario como profissional vs concorrência amadora
 *
 * ASCII Layout:
 * +-----------------------------------------------------------------------+
 * |                         EYEBROW BADGE                                  |
 * |              "Qual lado você quer estar?"                              |
 * +-----------------------------------------------------------------------+
 * |                                                                        |
 * |     +==================== TABLE HEADER ====================+          |
 * |     |   ASPECTO    |    [AMADOR]     |       [PRO]        |          |
 * |     |              |   (Gray Badge)  |   (Blue Badge)     |          |
 * |     +=================================================+   |          |
 * |     |              |                 |                    |          |
 * |     |   Busca      |    [X] 20+     |   [V] 1 unificada  |          |
 * |     |              |    sites       |                    |          |
 * |     +--------------+-----------------+--------------------+          |
 * |     |   Tempo      |    [X] 2h/dia  |   [V] 15min/dia    |          |
 * |     |              |                 |                    |          |
 * |     +--------------+-----------------+--------------------+          |
 * |     |   Análise    |    [X] Manual  |   [V] Automatica   |          |
 * |     |              |    planilhas   |   calculadora      |          |
 * |     +--------------+-----------------+--------------------+          |
 * |     |   Precisão   |    [X] -R$15k  |   [V] 100%         |          |
 * |     |              |    em erros    |   precisão         |          |
 * |     +--------------+-----------------+--------------------+          |
 * |     |   Controle   |    [X] Caos    |   [V] Dashboard    |          |
 * |     |              |    de abas     |   central          |          |
 * |     +--------------+-----------------+--------------------+          |
 * |     |   Relatórios |    [X] Prints  |   [V] PDFs         |          |
 * |     |              |    amadores    |   profissionais    |          |
 * |     +================================================+    |          |
 * |                                                                        |
 * |     +----------------------------------------------------------+      |
 * |     |   "Investidores profissionais não perdem tempo           |      |
 * |     |    com ferramentas amadoras"                             |      |
 * |     +----------------------------------------------------------+      |
 * |                                                                        |
 * |                    [ CTA: Virar Profissional Agora ]                  |
 * +------------------------------------------------------------------------+
 *
 * Grid Structure: 12 cols
 * - Table spans full width with internal 3-column structure
 * - Aspect column: 30%, Amateur: 35%, Pro: 35% (asymmetric)
 *
 * Visual Effects:
 * - "AMADOR" badge: gray, muted, slightly faded
 * - "PRO" badge: blue, glowing, highlighted
 * - X icons in orange/red
 * - Check icons in blue with glow
 * - Row hover highlights PRO column
 *
 * Typography:
 * - Bold badges at column headers
 * - Clear checkmark/x visual contrast
 */

const comparisonData = [
  {
    id: 'busca',
    aspect: 'Busca de Imóveis',
    amateur: {
      value: '20+ sites',
      description: 'abertos simultaneamente',
      status: 'fail',
    },
    pro: {
      value: '1 busca unificada',
      description: 'todos os leiloeiros em um lugar',
      status: 'pass',
    },
  },
  {
    id: 'tempo',
    aspect: 'Tempo Diário',
    amateur: {
      value: '2 horas/dia',
      description: 'alternando entre ferramentas',
      status: 'fail',
    },
    pro: {
      value: '15 minutos/dia',
      description: 'com tudo integrado',
      status: 'pass',
    },
  },
  {
    id: 'análise',
    aspect: 'Análise Financeira',
    amateur: {
      value: 'Planilhas manuais',
      description: 'erros de cálculo frequentes',
      status: 'fail',
    },
    pro: {
      value: 'Calculadora automática',
      description: '5 cenários por imóvel',
      status: 'pass',
    },
  },
  {
    id: 'precisão',
    aspect: 'Precisão',
    amateur: {
      value: '-R$15k/ano',
      description: 'em erros evitáveis',
      status: 'fail',
    },
    pro: {
      value: '100% precisão',
      description: 'cálculos automatizados',
      status: 'pass',
    },
  },
  {
    id: 'controle',
    aspect: 'Controle de Pipeline',
    amateur: {
      value: 'Caos de abas',
      description: 'oportunidades perdidas',
      status: 'fail',
    },
    pro: {
      value: 'Dashboard central',
      description: 'visão completa do pipeline',
      status: 'pass',
    },
  },
  {
    id: 'relatorios',
    aspect: 'Relatórios',
    amateur: {
      value: 'Prints e Word',
      description: 'apresentações amadoras',
      status: 'fail',
    },
    pro: {
      value: 'PDFs profissionais',
      description: 'gerados em 1 clique',
      status: 'pass',
    },
  },
];

export default function ComparisonAuthority() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="bg-[#EFF0F0] py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="comparison-authority-heading"
    >
      {/* Background Glow - Optimized for mobile */}
      <div
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[400px] md:w-[800px] h-[400px] md:h-[800px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[80px] md:blur-[150px]
        "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Headline */}
        <h2
          id="comparison-authority-heading"
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
          Qual lado você
          <br />
          <span className="text-[#5C5CFF]">quer estar?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg md:text-xl text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Investidores profissionais não perdem tempo com ferramentas amadoras.
          <br className="hidden md:block" />
          Compare e decida por você mesmo.
        </p>

        {/* Comparison Table - Desktop */}
        <div
          className="
            hidden md:block
            bg-white/90
            backdrop-blur-sm
            rounded-3xl
            border border-[#5C5CFF]/10
            shadow-[0_25px_80px_-20px_rgba(92,92,255,0.15)]
            overflow-hidden
          "
        >
          {/* Table Header */}
          <div
            className="
              grid grid-cols-12
              bg-[#2B3259]/[0.02]
              border-b border-[#2B3259]/10
            "
          >
            {/* Aspect Header */}
            <div className="col-span-4 p-5 border-r border-[#2B3259]/5">
              <span className="text-sm font-bold text-[#2B3259]/40 uppercase tracking-widest">
                Aspecto
              </span>
            </div>

            {/* Amateur Header */}
            <div className="col-span-4 p-5 border-r border-[#2B3259]/5 text-center">
              <div
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  bg-[#2B3259]/5
                  rounded-xl
                "
              >
                <div
                  className="
                    w-6 h-6
                    bg-[#2B3259]/10
                    rounded-full
                    flex items-center justify-center
                  "
                >
                  <span className="text-[#2B3259]/40 text-xs">x</span>
                </div>
                <span className="font-bold text-[#2B3259]/50 text-sm uppercase tracking-wider">
                  Amador
                </span>
              </div>
            </div>

            {/* Pro Header */}
            <div className="col-span-4 p-5 text-center relative overflow-hidden">
              {/* Glow effect */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r from-transparent via-[#5C5CFF]/5 to-transparent
                "
                aria-hidden="true"
              />
              <div
                className="
                  relative z-10
                  inline-flex items-center gap-2
                  px-4 py-2
                  bg-[#5C5CFF]
                  rounded-xl
                  shadow-[0_5px_20px_-5px_rgba(92,92,255,0.4)]
                "
              >
                <div
                  className="
                    w-6 h-6
                    bg-white/20
                    rounded-full
                    flex items-center justify-center
                  "
                >
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="font-bold text-white text-sm uppercase tracking-wider">
                  Profissional
                </span>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((item, index) => (
            <ComparisonTableRow key={item.id} item={item} isLast={index === comparisonData.length - 1} />
          ))}
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((item) => (
            <div
              key={item.id}
              className="
                bg-white/90
                backdrop-blur-sm
                rounded-2xl
                p-5
                border border-[#5C5CFF]/10
                shadow-[0_10px_40px_-15px_rgba(92,92,255,0.1)]
              "
            >
              <p className="font-bold text-[#2B3259] mb-4 text-base">
                {item.aspect}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {/* Amateur */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-[#2B3259]/10 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#2B3259]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-[#2B3259]/50 uppercase tracking-wide">
                      Amador
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#2B3259]/70">{item.amateur.value}</p>
                  <p className="text-xs text-[#2B3259]/40 mt-1">{item.amateur.description}</p>
                </div>

                {/* Pro */}
                <div className="bg-[#5C5CFF]/5 p-4 rounded-xl border border-[#5C5CFF]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-[#5C5CFF] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-[#5C5CFF] uppercase tracking-wide">
                      Pro
                    </span>
                  </div>
                  <p className="text-sm font-bold text-[#2B3259]">{item.pro.value}</p>
                  <p className="text-xs text-[#5C5CFF] mt-1">{item.pro.description}</p>
                </div>
              </div>
            </div>
          ))}
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
            Virar profissional agora
          </button>
        </div>
      </div>
    </section>
  );
}

interface ComparisonTableRowProps {
  item: {
    id: string;
    aspect: string;
    amateur: {
      value: string;
      description: string;
      status: string;
    };
    pro: {
      value: string;
      description: string;
      status: string;
    };
  };
  isLast: boolean;
}

function ComparisonTableRow({ item, isLast }: ComparisonTableRowProps) {
  return (
    <div
      className={`
        group
        grid grid-cols-12
        transition-all duration-300
        hover:bg-[#5C5CFF]/[0.02]
        ${!isLast ? 'border-b border-[#2B3259]/5' : ''}
      `}
    >
      {/* Aspect Column */}
      <div
        className="
          col-span-4
          p-5
          border-r border-[#2B3259]/5
          flex items-center
        "
      >
        <span className="font-bold text-[#2B3259] text-sm md:text-base">
          {item.aspect}
        </span>
      </div>

      {/* Amateur Column */}
      <div
        className="
          col-span-4
          p-5
          border-r border-[#2B3259]/5
          transition-all duration-300
          group-hover:opacity-60
        "
      >
        <div className="flex items-start gap-3">
          {/* X Icon */}
          <div
            className="
              flex-shrink-0
              w-7 h-7
              bg-[#5C5CFF]/10
              rounded-lg
              flex items-center justify-center
              mt-0.5
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
            <p className="font-semibold text-[#2B3259]/60 text-sm md:text-base">
              {item.amateur.value}
            </p>
            <p className="text-xs text-[#2B3259]/40 mt-0.5">
              {item.amateur.description}
            </p>
          </div>
        </div>
      </div>

      {/* Pro Column */}
      <div
        className="
          col-span-4
          p-5
          relative
          overflow-hidden
          transition-all duration-300
          group-hover:bg-[#5C5CFF]/5
        "
      >
        {/* Highlight effect on hover */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r from-[#5C5CFF]/0 to-[#5C5CFF]/5
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
          "
          aria-hidden="true"
        />

        <div className="relative z-10 flex items-start gap-3">
          {/* Check Icon */}
          <div
            className="
              flex-shrink-0
              w-7 h-7
              bg-[#5C5CFF]/10
              group-hover:bg-[#5C5CFF]
              rounded-lg
              flex items-center justify-center
              mt-0.5
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
            <p className="font-bold text-[#2B3259] text-sm md:text-base">
              {item.pro.value}
            </p>
            <p className="text-xs text-[#5C5CFF] mt-0.5">
              {item.pro.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

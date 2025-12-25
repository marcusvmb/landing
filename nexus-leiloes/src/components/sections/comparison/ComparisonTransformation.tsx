import React from 'react';

/**
 * COMPARISON SECTION V2: TRANSFORMATION
 *
 * Frame Cognitivo: "Antes e Depois da sua operação"
 * Foco na jornada de transformação visual
 *
 * ASCII Layout:
 * +-----------------------------------------------------------------------+
 * |                         EYEBROW BADGE                                  |
 * |                "Veja sua transformação"                                |
 * +-----------------------------------------------------------------------+
 * |                                                                        |
 * |            "ANTES"                    |           "DEPOIS"             |
 * |   [Grayscale/Desaturated]             |      [Full Color/Vibrant]     |
 * |                                       |                                |
 * |   +-----------------------------+     |     +------------------------+ |
 * |   |                             |     |     |                        | |
 * |   |     /---\      /---\        |     |     |    +=========+         | |
 * |   |    |Site|    |Site|         |     |     |    | NEXUS   |         | |
 * |   |     \---/      \---/        |     |     |    | ======  |         | |
 * |   |  /---\    /---\    /---\    |     |     |    | [::::]  |         | |
 * |   | |Site|   |Site|   |Site|    |     |     |    +=========+         | |
 * |   |  \---/    \---/    \---/    | === | === |                        | |
 * |   |       CAOS DE ABAS          |     |     |    1 DASHBOARD         | |
 * |   |                             |     |     |                        | |
 * |   +-----------------------------+     |     +------------------------+ |
 * |                                       |                                |
 * |   +-----------------------------+     |     +------------------------+ |
 * |   |  [Spreadsheet icon - gray]  |     |     | [Calculator - color]   | |
 * |   |  PLANILHAS MANUAIS          |     |     | CALCULADORA AUTO       | |
 * |   |  "Erros de cálculo"         |     |     | "100% precisão"        | |
 * |   +-----------------------------+     |     +------------------------+ |
 * |                                       |                                |
 * |   +-----------------------------+     |     +------------------------+ |
 * |   |  [Clock icon - gray]        |     |     | [Rocket - color]       | |
 * |   |  2H/DIA BUSCANDO            |     |     | 15MIN/DIA              | |
 * |   |  "Tempo perdido"            |     |     | "Tempo otimizado"      | |
 * |   +-----------------------------+     |     +------------------------+ |
 * |                                       |                                |
 * |   [Drag line here]------------------>[Transform to here]              |
 * |   ===============================================                      |
 * |   ^ Animated divider line with drag-to-transform visual               |
 * |                                       |                                |
 * +---------------------------------------+--------------------------------+
 * |                                                                        |
 * |                    [ CTA: Iniciar Minha Transformação ]               |
 * +------------------------------------------------------------------------+
 *
 * Grid Structure: 12 cols asymmetric
 * - Left (ANTES): col-span-5, grayscale filter, muted
 * - Divider: col-span-2, animated line with glow
 * - Right (DEPOIS): col-span-5, full saturation, vibrant
 *
 * Visual Effects:
 * - Left side: grayscale-[50%], opacity-80
 * - Right side: full color, subtle glow
 * - Divider line: gradient pulse animation
 * - Hover: left fades more, right glows brighter
 *
 * Animation:
 * - Scroll reveal: left appears first (grayscale), then divider animates, then right
 * - Continuous subtle pulse on divider
 */

const transformationData = [
  {
    id: 'busca',
    before: {
      icon: 'tabs',
      title: '20+ Sites Abertos',
      subtitle: 'Caos de abas e navegadores',
      visual: 'chaos',
    },
    after: {
      icon: 'dashboard',
      title: '1 Busca Unificada',
      subtitle: 'Tudo em um lugar só',
      visual: 'unified',
    },
  },
  {
    id: 'tempo',
    before: {
      icon: 'clock',
      title: '2 Horas/Dia',
      subtitle: 'Tempo perdido buscando',
      visual: 'slow',
    },
    after: {
      icon: 'rocket',
      title: '15 Minutos/Dia',
      subtitle: 'Eficiência máxima',
      visual: 'fast',
    },
  },
  {
    id: 'análise',
    before: {
      icon: 'spreadsheet',
      title: 'Planilhas Manuais',
      subtitle: 'Erros de cálculo frequentes',
      visual: 'manual',
    },
    after: {
      icon: 'calculator',
      title: 'Calculadora Automática',
      subtitle: '100% precisão garantida',
      visual: 'auto',
    },
  },
  {
    id: 'erros',
    before: {
      icon: 'error',
      title: 'R$15k/Ano em Erros',
      subtitle: 'Decisões baseadas em achismo',
      visual: 'loss',
    },
    after: {
      icon: 'check',
      title: 'Análise Multi-Cenários',
      subtitle: '5 simulações por imóvel',
      visual: 'precision',
    },
  },
  {
    id: 'organização',
    before: {
      icon: 'mess',
      title: 'Caos de Arquivos',
      subtitle: 'Oportunidades perdidas',
      visual: 'disorganized',
    },
    after: {
      icon: 'folder',
      title: 'Dashboard Central',
      subtitle: 'Controle visual total',
      visual: 'organized',
    },
  },
  {
    id: 'relatorios',
    before: {
      icon: 'screenshot',
      title: 'Prints Amadores',
      subtitle: 'Apresentações vergonhosas',
      visual: 'amateur',
    },
    after: {
      icon: 'pdf',
      title: 'PDFs Profissionais',
      subtitle: 'Relatórios em 1 clique',
      visual: 'professional',
    },
  },
];

// Icon components for visual representation
function BeforeIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactElement> = {
    tabs: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
        <rect x="2" y="6" width="8" height="6" rx="1" opacity="0.5" />
        <rect x="12" y="6" width="8" height="6" rx="1" opacity="0.4" />
        <rect x="22" y="6" width="8" height="6" rx="1" opacity="0.3" />
        <rect x="2" y="14" width="28" height="12" rx="2" opacity="0.6" />
      </svg>
    ),
    clock: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    spreadsheet: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
    error: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    ),
    mess: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 7h4M17 7h4M7 12h10M5 17h14" />
        <circle cx="12" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
    screenshot: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h4l2-2h6l2 2h4" />
      </svg>
    ),
  };
  return icons[type] || icons.tabs;
}

function AfterIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactElement> = {
    dashboard: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="9" rx="2" />
        <rect x="14" y="3" width="7" height="5" rx="2" />
        <rect x="14" y="12" width="7" height="9" rx="2" />
        <rect x="3" y="16" width="7" height="5" rx="2" />
      </svg>
    ),
    rocket: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    calculator: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M8 6h8M8 10h2M14 10h2M8 14h2M14 14h2M8 18h2M14 18h2" />
      </svg>
    ),
    check: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    folder: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        <path d="M12 11v6M9 14h6" />
      </svg>
    ),
    pdf: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M9 13h6M9 17h6" />
      </svg>
    ),
  };
  return icons[type] || icons.dashboard;
}

export default function ComparisonTransformation() {
  return (
    <section
      className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="comparison-transform-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#2B3259]/5 via-transparent to-[#5C5CFF]/5"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#2B3259]/10 to-[#5C5CFF]/10 rounded-full border border-[#5C5CFF]/20"
          >
            <span className="text-lg">
              <span className="grayscale opacity-50">x</span>
              <span className="mx-2 text-[#5C5CFF]">-&gt;</span>
              <span className="text-[#5C5CFF]">*</span>
            </span>
            <span className="text-sm font-semibold text-[#2B3259]">
              Veja sua transformação
            </span>
          </span>
        </div>

        {/* Headline */}
        <h2
          id="comparison-transform-heading"
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[0.95] text-[#2B3259] mb-6"
        >
          <span className="text-[#2B3259]/40">Antes</span>
          {' '}e{' '}
          <span className="text-[#5C5CFF]">Depois</span>
          <br />
          da Sua Operação
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg md:text-xl text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Veja a transformação que acontece quando você migra
          <br className="hidden md:block" />
          de ferramentas fragmentadas para o Hub completo.
        </p>

        {/* Transformation Container */}
        <div className="relative">
          {/* Column Headers with visual treatment */}
          <div className="grid grid-cols-12 gap-4 lg:gap-8 mb-10">
            {/* Left Header - ANTES (Grayscale) */}
            <div className="col-span-12 md:col-span-5">
              <div
                className="p-5 bg-[#2B3259]/5 grayscale-[30%] rounded-2xl border border-[#2B3259]/10 text-center relative overflow-hidden"
              >
                {/* Grayscale overlay effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <span className="text-xs font-bold text-[#2B3259]/40 uppercase tracking-[0.2em]">
                    Sua operação
                  </span>
                  <p className="text-3xl font-black text-[#2B3259]/50 mt-1">
                    ANTES
                  </p>
                  <p className="text-sm text-[#2B3259]/30 mt-1">
                    Ferramentas fragmentadas
                  </p>
                </div>
              </div>
            </div>

            {/* Center - Transformation Arrow */}
            <div className="hidden md:flex md:col-span-2 items-center justify-center">
              <div className="relative">
                {/* Animated glow ring */}
                <div
                  className="absolute inset-0 bg-[#5C5CFF]/20 rounded-full blur-xl animate-pulse"
                  aria-hidden="true"
                />
                <div
                  className="relative w-16 h-16 bg-gradient-to-r from-[#2B3259]/20 to-[#5C5CFF] rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(92,92,255,0.5)]"
                >
                  <svg
                    className="w-8 h-8 text-white"
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
            </div>

            {/* Right Header - DEPOIS (Full Color) */}
            <div className="col-span-12 md:col-span-5">
              <div
                className="p-5 bg-[#5C5CFF]/10 rounded-2xl border border-[#5C5CFF]/30 text-center relative overflow-hidden"
              >
                {/* Color glow effect */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-[#5C5CFF]/20 rounded-full blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <span className="text-xs font-bold text-[#5C5CFF] uppercase tracking-[0.2em]">
                    Sua operação
                  </span>
                  <p className="text-3xl font-black text-[#5C5CFF] mt-1">
                    DEPOIS
                  </p>
                  <p className="text-sm text-[#2B3259]/60 mt-1">
                    Hub completo Nexus
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Rows */}
          <div className="space-y-5">
            {transformationData.map((item, index) => (
              <TransformationRow key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Vertical Divider Line (Desktop) */}
          <div
            className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 overflow-hidden"
            style={{ top: '160px' }}
            aria-hidden="true"
          >
            {/* Animated gradient line */}
            <div
              className="w-full h-full bg-gradient-to-b from-[#2B3259]/20 via-[#5C5CFF] to-[#5C5CFF]/20 animate-pulse"
              style={{
                backgroundSize: '100% 200%',
                animation: 'gradientPulse 3s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Transformation Summary */}
        <div
          className="mt-16 p-8 md:p-10 bg-gradient-to-r from-[#2B3259]/5 via-white to-[#5C5CFF]/10 rounded-3xl border border-[#5C5CFF]/20 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)]"
        >
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* Before Summary */}
            <div className="col-span-12 md:col-span-4 text-center md:text-left">
              <p className="text-sm text-[#2B3259]/40 uppercase tracking-widest mb-1">
                De
              </p>
              <p className="text-xl font-bold text-[#2B3259]/50 grayscale-[30%]">
                Ferramentas Fragmentadas
              </p>
              <p className="text-sm text-[#2B3259]/30">
                Perda de tempo, erros, frustração
              </p>
            </div>

            {/* Arrow */}
            <div className="col-span-12 md:col-span-4 flex justify-center">
              <div
                className="flex items-center gap-4 px-6 py-3 bg-[#5C5CFF]/10 rounded-full border border-[#5C5CFF]/20"
              >
                <span className="text-[#2B3259]/30">- - -</span>
                <svg
                  className="w-6 h-6 text-[#5C5CFF]"
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
                <span className="text-[#5C5CFF] font-bold">NEXUS</span>
              </div>
            </div>

            {/* After Summary */}
            <div className="col-span-12 md:col-span-4 text-center md:text-right">
              <p className="text-sm text-[#5C5CFF] uppercase tracking-widest mb-1">
                Para
              </p>
              <p className="text-xl font-bold text-[#5C5CFF]">
                Hub Completo Integrado
              </p>
              <p className="text-sm text-[#2B3259]/60">
                Eficiência, precisão, confiança
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            className="bg-[#5C5CFF] text-white font-bold text-lg px-12 py-5 rounded-full shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.5)] active:translate-y-0 active:scale-[0.98] cursor-pointer"
          >
            Iniciar Minha Transformação
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">
            Junte-se aos 547 que já transformaram sua operação
          </p>
        </div>
      </div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradientPulse {
          0%, 100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 0% 100%;
          }
        }
      `}</style>
    </section>
  );
}

interface TransformationRowProps {
  item: {
    id: string;
    before: {
      icon: string;
      title: string;
      subtitle: string;
      visual: string;
    };
    after: {
      icon: string;
      title: string;
      subtitle: string;
      visual: string;
    };
  };
  index: number;
}

function TransformationRow({ item, index }: TransformationRowProps) {
  return (
    <div
      className="group grid grid-cols-12 gap-4 lg:gap-8 transition-all duration-500"
    >
      {/* Left Card - ANTES (Grayscale treatment) */}
      <div className="col-span-12 md:col-span-5">
        <div
          className="relative p-5 bg-white/50 rounded-2xl border border-[#2B3259]/10 grayscale-[50%] opacity-70 group-hover:grayscale-[70%] group-hover:opacity-60 transition-all duration-500 overflow-hidden"
        >
          {/* Fade overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30"
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-center gap-4">
            {/* Icon */}
            <div
              className="flex-shrink-0 w-14 h-14 bg-[#2B3259]/10 rounded-2xl flex items-center justify-center text-[#2B3259]/60"
            >
              <BeforeIcon type={item.before.icon} />
            </div>

            <div className="flex-grow">
              <h3 className="text-lg font-bold text-[#2B3259]/60">
                {item.before.title}
              </h3>
              <p className="text-sm text-[#2B3259]/40 mt-0.5">
                {item.before.subtitle}
              </p>
            </div>

            {/* X mark */}
            <div
              className="flex-shrink-0 w-8 h-8 bg-[#5C5CFF]/10 rounded-full flex items-center justify-center"
            >
              <svg
                className="w-4 h-4 text-[#5C5CFF]/60"
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
          </div>
        </div>
      </div>

      {/* Center Mobile Arrow */}
      <div className="col-span-12 md:hidden flex justify-center py-2">
        <div
          className="w-10 h-10 bg-gradient-to-b from-[#2B3259]/10 to-[#5C5CFF]/20 rounded-full flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 text-[#5C5CFF] rotate-90"
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

      {/* Right Card - DEPOIS (Full color, vibrant) */}
      <div className="col-span-12 md:col-span-5">
        <div
          className="relative p-5 bg-white/80 group-hover:bg-[#5C5CFF]/5 rounded-2xl border border-[#5C5CFF]/20 group-hover:border-[#5C5CFF]/40 shadow-[0_10px_30px_-10px_rgba(92,92,255,0.1)] group-hover:shadow-[0_15px_40px_-10px_rgba(92,92,255,0.2)] transition-all duration-500 overflow-hidden"
        >
          {/* Glow effect */}
          <div
            className="absolute -top-8 -right-8 w-24 h-24 bg-[#5C5CFF]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-center gap-4">
            {/* Icon */}
            <div
              className="flex-shrink-0 w-14 h-14 bg-[#5C5CFF]/10 group-hover:bg-[#5C5CFF]/20 rounded-2xl flex items-center justify-center text-[#5C5CFF] transition-colors duration-300"
            >
              <AfterIcon type={item.after.icon} />
            </div>

            <div className="flex-grow">
              <h3 className="text-lg font-bold text-[#2B3259]">
                {item.after.title}
              </h3>
              <p className="text-sm text-[#2B3259]/60 mt-0.5">
                {item.after.subtitle}
              </p>
            </div>

            {/* Check mark */}
            <div
              className="flex-shrink-0 w-8 h-8 bg-[#5C5CFF]/20 group-hover:bg-[#5C5CFF] rounded-full flex items-center justify-center transition-colors duration-300"
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
          </div>
        </div>
      </div>
    </div>
  );
}

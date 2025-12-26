/**
 * SOLUTION SECTION V4: CURIOSITY + SCARCITY
 *
 * Frame Cognitivo: Revelar PARCIALMENTE a solução
 *
 * Vieses Aplicados:
 * - Curiosity Gap: Mostrar categorias, esconder detalhes
 * - Endowment Effect preview: "Seu futuro dashboard"
 * - Exclusivity: Features marcadas como "exclusivo para fundadores"
 *
 * Design:
 * - Mix de elementos revelados e blur/teaser
 * - Badges de exclusividade
 * - Gradients misteriosos
 */

'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';

const pilares = [
  {
    id: 'buscar',
    titulo: 'BUSCAR',
    subtitulo: 'Encontre antes de todos',
    descricao: 'Agregador inteligente de todos os leiloeiros do Brasil.',
    icone: '🔍',
    revelado: true,
    detalhes: ['Filtros avançados', 'Alertas personalizados', 'Mapa interativo'],
  },
  {
    id: 'analisar',
    titulo: 'ANALISAR',
    subtitulo: 'Decisões com dados, não intuição',
    descricao: 'Calculadora multi-cenário exclusiva.',
    icone: '📊',
    revelado: true,
    detalhes: ['Simulador de cenários', 'Dados de ocupante', '???'],
    exclusivo: true,
  },
  {
    id: 'gerenciar',
    titulo: 'GERENCIAR',
    subtitulo: 'De caos para controle total',
    descricao: 'Pipeline completo para assessores e investidores.',
    icone: '📋',
    revelado: false,
    detalhes: ['???', '???', '???'],
    exclusivo: true,
  },
];

export default function SolutionCuriosityScarcity() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="bg-[#EFF0F0] py-16 lg:py-24 relative overflow-hidden"
      aria-labelledby="solution-curiosity-heading"
    >
      {/* Background glow */}
      <div
        className="
          absolute
          top-0 left-1/4
          w-[600px] h-[600px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[120px]
          -translate-y-1/4
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5C5CFF]/10 rounded-full">
            <span className="text-[#5C5CFF]">💡</span>
            <span className="text-sm font-medium text-[#5C5CFF]">
              Uma prévia do que está por vir
            </span>
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-16">
          <h2
            id="solution-curiosity-heading"
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              tracking-[-0.03em]
              leading-[0.95]
              text-[#2B3259]
              mb-6
            "
          >
            O Hub Completo que
            <br />
            <span className="text-[#5C5CFF]">Ninguém Mais Oferece</span>
          </h2>
          <p className="text-xl text-[#2B3259]/60 max-w-2xl mx-auto">
            Três pilares. Uma plataforma. Zero fragmentação.
            <br />
            <span className="text-[#5C5CFF] font-medium">Algumas funcionalidades só serão reveladas no lançamento.</span>
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pilares.map((pilar, index) => (
            <article
              key={pilar.id}
              className={`
                relative
                p-8
                rounded-3xl
                border
                transition-all duration-300
                ${pilar.revelado
                  ? 'bg-white/80 backdrop-blur-sm border-[#5C5CFF]/10 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)] hover:border-[#5C5CFF]/30'
                  : 'bg-gradient-to-br from-[#5C5CFF]/10 to-[#8B5CF6]/5 border-[#5C5CFF]/20 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.25)]'
                }
              `}
            >
              {/* Exclusive badge */}
              {pilar.exclusivo && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-[#5C5CFF] text-white text-xs font-bold rounded-full shadow-[0_4px_15px_rgba(92,92,255,0.4)]">
                    EXCLUSIVO FUNDADOR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#5C5CFF]/10 flex items-center justify-center mb-6 text-3xl">
                {pilar.icone}
              </div>

              {/* Title */}
              <span className="text-xs font-bold text-[#5C5CFF] uppercase tracking-widest">
                Pilar {index + 1}
              </span>
              <h3 className="text-2xl font-black text-[#2B3259] mt-1 mb-2">
                {pilar.titulo}
              </h3>
              <p className="text-sm text-[#5C5CFF] font-medium mb-4">
                {pilar.subtitulo}
              </p>
              <p className="text-[#2B3259]/70 mb-6">
                {pilar.descricao}
              </p>

              {/* Details list */}
              <ul className="space-y-2">
                {pilar.detalhes.map((detalhe, i) => (
                  <li
                    key={i}
                    className={`
                      flex items-center gap-2 text-sm
                      ${detalhe === '???'
                        ? 'text-[#5C5CFF]/50 blur-[2px] select-none'
                        : 'text-[#2B3259]/70'
                      }
                    `}
                  >
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${detalhe === '???' ? 'bg-[#5C5CFF]/20' : 'bg-[#5C5CFF]/10'}`}>
                      {detalhe === '???' ? '?' : '✓'}
                    </span>
                    {detalhe}
                  </li>
                ))}
              </ul>

              {/* Locked overlay for unrevealed */}
              {!pilar.revelado && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-[1px] rounded-3xl">
                  <div className="text-center">
                    <span className="text-4xl mb-2 block">🔒</span>
                    <span className="text-sm font-medium text-[#5C5CFF]">
                      Revelado no lançamento
                    </span>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Teaser CTA */}
        <div className="text-center">
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-2xl border border-[#5C5CFF]/10 p-8 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.1)]">
            <p className="text-lg text-[#2B3259]/70 mb-6">
              <span className="text-[#5C5CFF] font-semibold">+ 3 funcionalidades</span> que nenhum concorrente tem.
              <br />
              Quer saber quais são?
            </p>
            <button
              type="button"
              onClick={openModal}
              className="
                bg-[#5C5CFF]
                text-white
                font-bold
                text-lg
                px-8 py-4
                rounded-full
                shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)]
                transition-all
                duration-300
                ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.5)]
                active:translate-y-0
                active:scale-[0.98]
                cursor-pointer
              "
            >
              Descobrir Agora
              <span className="ml-2" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

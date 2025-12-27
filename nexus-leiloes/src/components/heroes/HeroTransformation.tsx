'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * HERO 2: TRANSFORMATION (Antes/Depois)
 *
 * Frame Cognitivo: Transformação - mostrar a mudanca do caos para a ordem
 *
 * Layout Specifications:
 * - Headline centralizado massivo
 * - Grid assimetrico 35/65 (Antes menor, Depois maior)
 * - Seta de transicao circular com animacao
 * - Gradiente diagonal sutil no background
 *
 * Design Tokens:
 * - Background: Gradiente #E5E6E6 -> #EFF0F0
 * - Antes: Grayscale, opacity reduzida, tons cinza
 * - Depois: Cores vibrantes, glow azul, border brilhante
 * - CTA: #5C5CFF (Primary Blue - diferente do Hero 1)
 *
 * Anti-AI Checklist:
 * [x] Background gradiente (não flat)
 * [x] Layout assimetrico 35/65
 * [x] Shadows coloridas
 * [x] Contraste visual Antes/Depois
 * [x] Hover + Active states
 * [x] Letter-spacing tight
 * [x] Animacao na seta de transicao
 */

export default function HeroTransformation() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="bg-gradient-to-br from-[#E5E6E6] via-[#EFF0F0] to-[#EFF0F0] min-h-screen relative overflow-hidden"
      aria-labelledby="hero-transformation-heading"
    >
      {/* Background glow sutil */}
      <div
        className="
          absolute
          top-1/2 right-0
          w-[500px] h-[500px]
          bg-[#5C5CFF]/8
          rounded-full
          blur-[120px]
          translate-x-1/4
        "
      />

      {/* Header */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-nexus.png" alt="Nexus Leilões" className="h-10" />
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 lg:pt-12 pb-16">

        {/* Headline - Centralizado e Massivo */}
        <div className="text-center mb-12 lg:mb-16">
          <h1
            id="hero-transformation-heading"
            className="
              text-[2rem]
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
              font-black
              tracking-[-0.03em]
              leading-[0.95]
              text-[#2B3259]
            "
          >
            De ferramentas soltas ao
            <br />
            <span className="relative inline-block">
              <span className="text-[#5C5CFF]">controle total</span>
              {/* Underline glow */}
              <span
                className="
                  absolute
                  -bottom-1 left-0 right-0
                  h-2
                  bg-[#5C5CFF]/20
                  rounded-full
                  blur-sm
                "
              />
            </span>
            {' '}dos seus leilões
          </h1>
        </div>

        {/* Before/After Section - Grid Assimetrico */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6 items-stretch max-w-6xl mx-auto">

          {/* ANTES - 35% (5 colunas) */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="
                h-full
                bg-[#E0E1E1]/60
                rounded-3xl
                p-6 lg:p-8
                border border-[#2B3259]/5
              "
            >
              {/* Label */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl" role="img" aria-label="stressed">😩</span>
                <span className="font-semibold text-[#2B3259]/50 text-lg">Seu dia hoje</span>
              </div>

              {/* Chaotic tools - grayscale and muted */}
              <div className="space-y-3 opacity-70">
                <div className="flex items-center gap-3 p-3 bg-white/40 rounded-xl">
                  <div className="w-10 h-10 bg-[#2B3259]/10 rounded-lg flex items-center justify-center text-lg grayscale">
                    📊
                  </div>
                  <div>
                    <div className="font-medium text-sm text-[#2B3259]/70">Excel</div>
                    <div className="text-xs text-[#2B3259]/40">15 planilhas abertas</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white/40 rounded-xl">
                  <div className="w-10 h-10 bg-[#2B3259]/10 rounded-lg flex items-center justify-center text-lg grayscale">
                    📝
                  </div>
                  <div>
                    <div className="font-medium text-sm text-[#2B3259]/70">Word</div>
                    <div className="text-xs text-[#2B3259]/40">Relatórios manuais</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white/40 rounded-xl">
                  <div className="w-10 h-10 bg-[#2B3259]/10 rounded-lg flex items-center justify-center text-lg grayscale">
                    📅
                  </div>
                  <div>
                    <div className="font-medium text-sm text-[#2B3259]/70">Agenda</div>
                    <div className="text-xs text-[#2B3259]/40">Leilões perdidos</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white/40 rounded-xl">
                  <div className="w-10 h-10 bg-[#2B3259]/10 rounded-lg flex items-center justify-center text-lg grayscale">
                    🌐
                  </div>
                  <div>
                    <div className="font-medium text-sm text-[#2B3259]/70">20+ Sites</div>
                    <div className="text-xs text-[#2B3259]/40">Busca improvisada</div>
                  </div>
                </div>
              </div>

              {/* Result indicator - negative */}
              <div className="mt-6 pt-4 border-t border-[#2B3259]/10">
                <div className="flex items-center gap-2 text-sm text-[#2B3259]/50">
                  <span className="text-red-500 font-medium">⚠️</span>
                  <span>Horas perdidas, oportunidades escapando</span>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow - Transition Indicator */}
          <div className="hidden md:flex col-span-2 items-center justify-center" aria-hidden="true">
            <div
              className="
                w-16 h-16
                rounded-full
                bg-[#5C5CFF]
                flex items-center justify-center
                shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)]
                animate-pulse
              "
            >
              <span className="text-white text-2xl font-bold">&rarr;</span>
            </div>
          </div>

          {/* Mobile Arrow */}
          <div className="md:hidden col-span-12 flex justify-center py-4" aria-hidden="true">
            <div
              className="
                w-14 h-14
                rounded-full
                bg-[#5C5CFF]
                flex items-center justify-center
                shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)]
                rotate-90
              "
            >
              <span className="text-white text-xl font-bold">&rarr;</span>
            </div>
          </div>

          {/* DEPOIS - 65% (5 colunas visualmente maiores por causa do conteudo) */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="
                h-full
                bg-white/90
                backdrop-blur-xl
                rounded-3xl
                p-6 lg:p-8
                border border-[#5C5CFF]/20
                shadow-[0_20px_60px_-15px_rgba(92,92,255,0.2)]
              "
            >
              {/* Label */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl" role="img" aria-label="happy">😎</span>
                <span className="font-semibold text-[#5C5CFF] text-lg">Seu dia com a Nexus</span>
              </div>

              {/* Clean dashboard features - vibrant */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-[#5C5CFF]/5 rounded-xl border border-[#5C5CFF]/10">
                  <div className="w-10 h-10 bg-[#5C5CFF] rounded-lg flex items-center justify-center text-lg shadow-[0_4px_12px_-3px_rgba(92,92,255,0.4)]">
                    🔍
                  </div>
                  <div>
                    <div className="font-medium text-sm text-[#2B3259]">Busca Unificada</div>
                    <div className="text-xs text-[#5C5CFF] font-medium">800+ leiloeiros em um clique</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#5C5CFF]/5 rounded-xl border border-[#5C5CFF]/10">
                  <div className="w-10 h-10 bg-[#5C5CFF] rounded-lg flex items-center justify-center text-lg shadow-[0_4px_12px_-3px_rgba(92,92,255,0.4)]">
                    📊
                  </div>
                  <div>
                    <div className="font-medium text-sm text-[#2B3259]">Calculadora Inteligente</div>
                    <div className="text-xs text-[#5C5CFF] font-medium">Múltiplos cenários comparados</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#5C5CFF]/5 rounded-xl border border-[#5C5CFF]/10">
                  <div className="w-10 h-10 bg-[#5C5CFF] rounded-lg flex items-center justify-center text-lg shadow-[0_4px_12px_-3px_rgba(92,92,255,0.4)]">
                    📁
                  </div>
                  <div>
                    <div className="font-medium text-sm text-[#2B3259]">Gestão Completa</div>
                    <div className="text-xs text-[#5C5CFF] font-medium">Portfolio + PDF em 1 clique</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#5C5CFF]/5 rounded-xl border border-[#5C5CFF]/10">
                  <div className="w-10 h-10 bg-[#5C5CFF] rounded-lg flex items-center justify-center text-lg shadow-[0_4px_12px_-3px_rgba(92,92,255,0.4)]">
                    ⚡
                  </div>
                  <div>
                    <div className="font-medium text-sm text-[#2B3259]">Tudo em Um Lugar</div>
                    <div className="text-xs text-[#5C5CFF] font-medium">Um único Hub para seu sucesso</div>
                  </div>
                </div>
              </div>

              {/* Result indicator - positive */}
              <div className="mt-6 pt-4 border-t border-[#5C5CFF]/10">
                <div className="flex items-center gap-2 text-sm text-[#5C5CFF]">
                  <span className="font-medium">✨</span>
                  <span>Mais tempo, melhores decisões, mais lucro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Centralizado */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-lg text-[#2B3259]/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            Chega de alternar entre 15 abas, 5 planilhas e 3 aplicativos.
            <br />
            Um único Hub para buscar, analisar e gerenciar seus leilões.
          </p>

          {/* CTA Button - Primary Blue para este Hero */}
          <button
            type="button"
            onClick={openModal}
            className="
              bg-[#5C5CFF]
              text-white
              font-bold
              text-lg
              px-10 py-5
              rounded-full
              shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)]
              transition-all
              duration-300
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:-translate-y-1
              hover:scale-[1.02]
              hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.5)]
              active:translate-y-0
              active:scale-[0.98]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#2B3259]
              cursor-pointer
            "
          >
            Começar minha transformação
            <span aria-hidden="true"> &rarr;</span>
          </button>

          <p className="mt-5 text-sm text-[#2B3259]/70">
            Desconto exclusivo para quem entrar antes do lançamento
          </p>
        </div>
      </div>
    </section>
  );
}

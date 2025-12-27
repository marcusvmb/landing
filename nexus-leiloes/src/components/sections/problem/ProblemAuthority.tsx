'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * PROBLEM SECTION V3: AUTHORITY
 *
 * Frame Cognitivo: "Por que ferramentas fragmentadas NUNCA vão funcionar"
 *
 * Vieses Aplicados:
 * - Authority: Posicionamento de expert com argumento lógico
 * - Cognitive Fluency: Argumento estruturado, facil de seguir
 * - Framing Effect: Frame o problema como estrutural
 *
 * Design:
 * - Background limpo com glow radial sutil
 * - Tipografia massiva (numero "5" como hero)
 * - Comparacao VS (fragmentado vs unificado)
 * - Minimalista e comandante
 */

export default function ProblemAuthority() {
  const { openModal } = useLeadModal();
  return (
    <section
      className="hidden md:block bg-[#EFF0F0] py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="problem-authority-heading"
    >
      {/* Subtle center glow - Optimized for mobile */}
      <div
        className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[400px] md:w-[800px] lg:w-[1000px] h-[400px] md:h-[800px] lg:h-[1000px]
          bg-[#5C5CFF]/[0.03]
          rounded-full
          blur-[80px] md:blur-[120px] lg:blur-[150px]
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Massive Typography Headline */}
        <div className="text-center mb-16 lg:mb-24">
          <h2
            id="problem-authority-heading"
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
              font-black
              tracking-[-0.04em]
              leading-[0.9]
              text-[#2B3259]
            "
          >
            O problema não é você.
            <br />
            É usar{' '}
            <span className="relative inline-block text-[#5C5CFF]">
              {/* Glow behind number */}
              <span
                className="
                  absolute inset-0
                  bg-[#5C5CFF]/10
                  blur-xl
                  rounded-full
                  scale-150
                "
                aria-hidden="true"
              />
              <span className="relative z-10">5</span>
            </span>
            {' '}ferramentas
            <br />
            <span className="text-[#2B3259]/40">para fazer o trabalho de 1.</span>
          </h2>
        </div>

        {/* VS Comparison - Asymmetric grid */}
        <div className="grid grid-cols-12 gap-6 items-center max-w-5xl mx-auto mb-16">
          {/* Fragmented side - 40% (5 cols) */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="
                p-6 lg:p-8
                bg-white/40
                rounded-3xl
                border border-[#2B3259]/5
              "
            >
              {/* Tool grid - scattered */}
              <div className="grid grid-cols-3 gap-3 mb-6" role="img" aria-label="Ferramentas soltas">
                <div className="aspect-square bg-[#2B3259]/5 rounded-xl flex items-center justify-center text-2xl grayscale opacity-60 rotate-[-3deg]">
                  &#128202;
                </div>
                <div className="aspect-square bg-[#2B3259]/5 rounded-xl flex items-center justify-center text-2xl grayscale opacity-60 rotate-[3deg]">
                  &#128221;
                </div>
                <div className="aspect-square bg-[#2B3259]/5 rounded-xl flex items-center justify-center text-2xl grayscale opacity-60 rotate-[-2deg]">
                  &#128197;
                </div>
                <div className="aspect-square bg-[#2B3259]/5 rounded-xl flex items-center justify-center text-2xl grayscale opacity-60 rotate-[1deg]">
                  &#127760;
                </div>
                <div className="aspect-square bg-[#2B3259]/5 rounded-xl flex items-center justify-center text-2xl grayscale opacity-60 rotate-[-3deg]">
                  &#128231;
                </div>
                <div className="aspect-square bg-transparent" />
              </div>

              {/* Strike through label */}
              <div className="text-center">
                <span
                  className="
                    text-[#2B3259]/40
                    font-semibold
                    line-through
                    decoration-[#5C5CFF]/50
                    decoration-2
                  "
                >
                  Improvisado
                </span>
              </div>
            </div>
          </div>

          {/* VS indicator */}
          <div className="hidden md:flex col-span-2 justify-center">
            <div
              className="
                w-16 h-16
                rounded-full
                bg-[#2B3259]/10
                flex items-center justify-center
                text-[#2B3259]/40
                font-bold
                text-lg
              "
              aria-hidden="true"
            >
              vs
            </div>
          </div>

          {/* Mobile VS */}
          <div className="md:hidden col-span-12 flex justify-center py-4" aria-hidden="true">
            <div
              className="
                w-14 h-14
                rounded-full
                bg-[#2B3259]/10
                flex items-center justify-center
                text-[#2B3259]/40
                font-bold
              "
            >
              vs
            </div>
          </div>

          {/* Unified side - 60% (5 cols but visually larger) */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="
                p-8 lg:p-10
                bg-white
                rounded-3xl
                border border-[#5C5CFF]/20
                shadow-[0_25px_70px_-20px_rgba(92,92,255,0.25)]
                relative
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  bg-[#5C5CFF]/5
                  rounded-3xl
                  blur-xl
                  -z-10
                "
                aria-hidden="true"
              />

              {/* Single hub icon */}
              <div className="flex justify-center mb-6">
                <img src="/logo-nexus-full.png" alt="Nexus" className="h-16" width={160} height={64} />
              </div>

              <div className="text-center">
                <span className="text-[#5C5CFF] font-bold text-lg">
                  Unificado
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Logical Argument Points */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/60 rounded-2xl border border-[#2B3259]/5">
              <h3 className="font-bold text-lg text-[#2B3259] mb-2">Sites de leiloeiros</h3>
              <p className="text-sm text-[#2B3259]/60">
                Foram feitos para leiloar, não para você buscar com eficiência.
              </p>
            </div>

            <div className="p-6 bg-white/60 rounded-2xl border border-[#2B3259]/5">
              <h3 className="font-bold text-lg text-[#2B3259] mb-2">Excel e Notion</h3>
              <p className="text-sm text-[#2B3259]/60">
                São ferramentas genéricas. Não entendem leilão.
              </p>
            </div>

            <div className="p-6 bg-white/60 rounded-2xl border border-[#2B3259]/5">
              <h3 className="font-bold text-lg text-[#2B3259] mb-2">Calculadoras simples</h3>
              <p className="text-sm text-[#2B3259]/60">
                Mostram um cenário. Investidores inteligentes precisam comparar vários.
              </p>
            </div>

            <div className="p-6 bg-white/60 rounded-2xl border border-[#2B3259]/5">
              <h3 className="font-bold text-lg text-[#2B3259] mb-2">Copiar dados manualmente</h3>
              <p className="text-sm text-[#2B3259]/60">
                Gera erros. Erros geram decisões ruins.
              </p>
            </div>
          </div>
        </div>

        {/* Logical Conclusion */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-[#2B3259]/60 leading-relaxed">
            Ferramentas separadas significam{' '}
            <span className="font-semibold text-[#2B3259]">informação espalhada</span>.
            <br />
            Informação espalhada significa{' '}
            <span className="font-semibold text-[#2B3259]">visão incompleta</span>.
          </p>
        </div>

        {/* Commanding CTA */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={openModal}
            className="
              bg-[#5C5CFF]
              text-white
              font-bold
              text-xl
              px-16 py-6
              rounded-full
              shadow-[0_20px_60px_-15px_rgba(92,92,255,0.4)]
              hover:-translate-y-2
              hover:shadow-[0_30px_80px_-15px_rgba(92,92,255,0.5)]
              transition-all duration-300
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#2B3259]
              cursor-pointer
            "
          >
            Conhecer a única solução completa
          </button>
        </div>
      </div>
    </section>
  );
}

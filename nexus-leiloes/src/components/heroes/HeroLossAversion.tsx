'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * HERO 1: LOSS AVERSION
 *
 * Frame Cognitivo: Aversão a perda - explorar o medo de perder oportunidades
 *
 * Layout Specifications:
 * - Grid: 12 colunas, assimetrico 7/5 (NAO 50/50)
 * - Content: col-span-7 com texto massivo
 * - Image: col-span-5 com overlap negativo (-40px) e breaking grid (-mr-20)
 *
 * Design Tokens:
 * - Background: #EFF0F0 (Ice Grey) com glow blur #5C5CFF
 * - Text: #2B3259 (Deep Navy)
 * - Accent: #5C5CFF (Electric Blue)
 * - CTA: #5C5CFF (Primary Blue) com colored shadow
 *
 * Anti-AI Checklist:
 * [x] Background #EFF0F0 (não branco puro)
 * [x] Texto #2B3259 (não preto)
 * [x] Shadows coloridas (não cinza)
 * [x] Layout assimetrico 7/5 (não 50/50)
 * [x] Hover + Active states em botoes
 * [x] Letter-spacing tight (-0.03em)
 * [x] CTA pill shape (rounded-full)
 * [x] Overlap/breaking grid na imagem
 */

export default function HeroLossAversion() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="bg-[#EFF0F0] relative overflow-hidden"
      aria-labelledby="hero-loss-aversion-heading"
    >
      {/* Background glow - posicionado no canto superior direito - Optimized for mobile */}
      <div
        className="
          absolute
          top-0 right-0
          w-[300px] md:w-[600px] h-[300px] md:h-[600px]
          bg-[#5C5CFF]/10
          rounded-full
          blur-[60px] md:blur-[100px]
          -translate-y-1/4 translate-x-1/4
        "
      />

      {/* Secondary glow - mais sutil, no centro - Optimized for mobile */}
      <div
        className="
          absolute
          top-1/2 left-1/3
          w-[200px] md:w-[400px] h-[200px] md:h-[400px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[50px] md:blur-[80px]
        "
      />

      {/* Header / Navigation */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo-nexus.png" alt="Nexus Leilões" className="h-10" width={120} height={40} />
        </div>
      </header>

      {/* Main Content - Typography as Hero (like V3) */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6
          pt-12 md:pt-16 lg:pt-20
          pb-16
          flex flex-col items-center justify-center
        "
      >
        {/* Massive Headline - Typography IS the visual */}
        <div className="text-center max-w-5xl">
          <h1
            id="hero-loss-aversion-heading"
            className="
              text-[2.75rem]
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
            O{' '}
            {/* "único" com efeito especial */}
            <span className="relative inline-block">
              {/* Glow behind */}
              <span
                className="
                  absolute
                  inset-0
                  bg-[#5C5CFF]/15
                  blur-2xl
                  rounded-full
                  scale-150
                "
              />
              {/* Text */}
              <span className="relative z-10 text-[#5C5CFF]">único</span>
              {/* Animated underline */}
              <span
                className="
                  absolute
                  -bottom-2 md:-bottom-3
                  left-0 right-0
                  h-3 md:h-4
                  bg-gradient-to-r from-[#5C5CFF]/40 via-[#5C5CFF]/60 to-[#5C5CFF]/40
                  rounded-full
                  animate-underline-glow
                "
              />
            </span>
            {' '}hub
            <br />
            completo para
            <br />
            leilão imobiliário
            <br />
            <span className="text-[#5C5CFF]/50">no Brasil</span>
          </h1>
        </div>

        {/* Subheadline - Curta e direta */}
        <p className="mt-8 md:mt-10 text-xl md:text-2xl text-[#2B3259]/60 text-center max-w-xl">
          Busque. Analise. Gerencie.{' '}
          <span className="text-[#5C5CFF] font-semibold">
            Tudo em um só lugar.
          </span>
        </p>

        {/* CTA Button - Maior que outros heroes */}
        <button
          type="button"
          onClick={openModal}
          className="
            mt-10 md:mt-12
            bg-[#5C5CFF]
            text-white
            font-bold
            text-xl
            px-12 py-6
            rounded-full
            shadow-[0_20px_50px_-12px_rgba(92,92,255,0.5)]
            transition-all
            duration-300
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:-translate-y-1.5
            hover:scale-[1.03]
            hover:shadow-[0_25px_60px_-12px_rgba(92,92,255,0.6)]
            active:translate-y-0
            active:scale-[0.98]
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#2B3259]
            cursor-pointer
          "
        >
          Garantir meu acesso antecipado
          <span aria-hidden="true"> &rarr;</span>
        </button>

        {/* Microcopy - Risk Removers */}
        <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#2B3259]/70" aria-label="Beneficios inclusos">
          <li className="flex items-center gap-1.5">
            <span className="text-[#5C5CFF] font-medium" aria-hidden="true">&#10003;</span>
            Vagas limitadas para fundadores
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-[#5C5CFF] font-medium" aria-hidden="true">&#10003;</span>
            Sem cartão de crédito
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-[#5C5CFF] font-medium" aria-hidden="true">&#10003;</span>
            7 dias grátis
          </li>
        </ul>
      </div>

    </section>
  );
}

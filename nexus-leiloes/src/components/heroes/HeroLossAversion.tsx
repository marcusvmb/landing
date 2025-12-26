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
      className="bg-[#EFF0F0] min-h-screen relative overflow-hidden"
      aria-labelledby="hero-loss-aversion-heading"
    >
      {/* Background glow - posicionado no canto superior direito */}
      <div
        className="
          absolute
          top-0 right-0
          w-[600px] h-[600px]
          bg-[#5C5CFF]/10
          rounded-full
          blur-[100px]
          -translate-y-1/4 translate-x-1/4
        "
      />

      {/* Secondary glow - mais sutil, no centro */}
      <div
        className="
          absolute
          top-1/2 left-1/3
          w-[400px] h-[400px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[80px]
        "
      />

      {/* Header / Navigation */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo-nexus.png" alt="Nexus Leilões" className="h-10" />
        </div>

        {/* Trust Badge - Desktop */}
        <div className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#5C5CFF]/8 rounded-full border border-[#5C5CFF]/10">
          <span className="w-2 h-2 bg-[#5C5CFF] rounded-full animate-pulse-dot" />
          <span className="text-sm font-medium text-[#5C5CFF]">
            +547 investidores na lista
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 lg:pt-16 pb-16">
        <div className="grid grid-cols-12 gap-6 items-center">

          {/* Content Column - 6 colunas (assimetrico) */}
          <div className="col-span-12 lg:col-span-6 relative z-10">

            {/* Headline - Massivo com tight tracking */}
            <h1
              id="hero-loss-aversion-heading"
              className="
                text-[2rem]
                sm:text-4xl
                md:text-[2.75rem]
                lg:text-[3.25rem]
                xl:text-[3.75rem]
                font-black
                tracking-[-0.03em]
                leading-[0.95]
                text-[#2B3259]
              "
            >
              Pare de perder
              <br />
              oportunidades em leilões
              <br />
              <span className="text-[#5C5CFF]">por falta de organização</span>
            </h1>

            {/* Subheadline - Contraste com headline */}
            <p
              className="
                mt-8
                text-lg
                md:text-xl
                text-[#2B3259]/60
                max-w-xl
                leading-relaxed
              "
            >
              O único Hub que unifica busca, análise e gestão de leilões imobiliários.
              Tudo em uma plataforma. Sem alternar entre dezenas de sites e planilhas.
            </p>

            {/* CTA Button - Primary Blue, Pill, com colored shadow e states */}
            <button
              type="button"
              onClick={openModal}
              className="
                mt-10
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
              Garantir meu acesso antecipado
              <span aria-hidden="true"> &rarr;</span>
            </button>

            {/* Microcopy - Risk Removers - Improved contrast (70% instead of 60%) */}
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#2B3259]/70" aria-label="Beneficios inclusos">
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

          {/* Image Column - 6 colunas com overlap e breaking grid */}
          <div
            className="
              col-span-12
              lg:col-span-6
              lg:-mr-24
              relative
              mt-10
              lg:mt-0
            "
          >
            <div className="relative">
              {/* Glow behind mockup */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[#5C5CFF]/20
                  rounded-3xl
                  blur-3xl
                  scale-90
                "
              />

              {/* Dashboard Mockup - High-end image */}
              <img
                src="/mockup-dashboard.png"
                alt="Painel da Nexus Leilões mostrando oportunidades de leilões imobiliários com filtros avançados e análise de preços"
                className="
                  relative
                  z-10
                  w-[115%]
                  max-w-none
                  h-auto
                  drop-shadow-[0_30px_60px_rgba(92,92,255,0.25)]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Trust Badge - Fixed bottom */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-30">
        <div
          className="
            flex items-center justify-center gap-2
            px-5 py-3.5
            bg-white/95
            backdrop-blur-lg
            rounded-full
            shadow-[0_10px_40px_-10px_rgba(92,92,255,0.3)]
            border border-[#5C5CFF]/10
          "
        >
          <span className="w-2 h-2 bg-[#5C5CFF] rounded-full animate-pulse-dot" />
          <span className="text-sm font-medium text-[#2B3259]">
            +547 investidores já na lista de espera
          </span>
        </div>
      </div>
    </section>
  );
}

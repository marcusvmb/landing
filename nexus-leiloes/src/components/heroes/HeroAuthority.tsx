/**
 * HERO 3: AUTHORITY (Typography as Hero)
 *
 * Frame Cognitivo: Autoridade e posição única - "somos os únicos"
 *
 * Layout Specifications:
 * - Typography IS the visual - headline massivo (text-8xl+)
 * - Sem imagem de produto - o texto domina
 * - "Único" com efeito especial (glow + underline animado)
 * - 3 pilares abaixo do CTA com glassmorphism
 * - Multiple aurora glows criando efeito atmosférico
 *
 * Design Tokens:
 * - Background: #EFF0F0 com múltiplos glows sobrepostos
 * - Headline: #2B3259 com "Único" em #5C5CFF + glow
 * - CTA: #5C5CFF (Primary Blue) - maior que outros heroes
 * - Cards: Glassmorphism com colored shadow
 *
 * Anti-AI Checklist:
 * [x] Typography as visual hero
 * [x] Aurora effect com múltiplos glows
 * [x] Shadows coloridas em tudo
 * [x] Underline animado em "Único"
 * [x] Cards com glassmorphism
 * [x] Hover states em todos elementos
 * [x] Breaking grid com escala massiva
 */

export default function HeroAuthority() {
  return (
    <section
      className="bg-[#EFF0F0] min-h-screen relative overflow-hidden"
      aria-labelledby="hero-authority-heading"
    >
      {/* Aurora Effect - Multiple overlapping glows */}
      <div
        className="
          absolute
          top-0 left-1/4
          w-[800px] h-[800px]
          bg-[#5C5CFF]/8
          rounded-full
          blur-[150px]
          -translate-y-1/3
        "
      />
      <div
        className="
          absolute
          bottom-0 right-1/4
          w-[600px] h-[600px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[120px]
          translate-y-1/3
        "
      />
      <div
        className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[1000px] h-[1000px]
          bg-[#5C5CFF]/4
          rounded-full
          blur-[180px]
        "
      />

      {/* Header */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo-nexus.png" alt="Nexus Leilões" className="h-10" />
        </div>

        {/* Authority Badge - Gradient */}
        <div
          className="
            hidden md:flex
            items-center gap-2
            px-5 py-2.5
            bg-gradient-to-r from-[#5C5CFF] to-[#5C5CFF]
            rounded-full
            shadow-[0_10px_30px_-8px_rgba(92,92,255,0.4)]
          "
        >
          <span className="text-white text-sm" role="img" aria-label="trophy">
            🏆
          </span>
          <span className="text-sm font-semibold text-white">
            Primeiro e Único Hub do Brasil
          </span>
        </div>
      </header>

      {/* Main Content - Typography as Hero */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6
          pt-16 md:pt-24 lg:pt-32
          pb-24
          flex flex-col items-center justify-center
          min-h-[80vh]
        "
      >
        {/* Massive Headline - Typography IS the visual */}
        <div className="text-center max-w-5xl">
          <h1
            id="hero-authority-heading"
            className="
              text-[3rem]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-9xl
              font-black
              tracking-[-0.04em]
              leading-[0.9]
              text-[#2B3259]
            "
          >
            O{' '}
            {/* "Único" com efeito especial */}
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
              <span className="relative z-10 text-[#5C5CFF]">Único</span>
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
            {' '}Hub
            <br />
            Completo Para
            <br />
            Leilão Imobiliário
            <br />
            <span className="text-[#5C5CFF]/50">no Brasil</span>
          </h1>
        </div>

        {/* Subheadline - Curta e direta */}
        <p className="mt-8 md:mt-10 text-xl md:text-2xl text-[#2B3259]/60 text-center max-w-xl">
          Busque. Analise. Gerencie.{' '}
          <span className="text-[#5C5CFF] font-semibold">
            Tudo em um lugar só.
          </span>
        </p>

        {/* CTA Button - Maior que outros heroes */}
        <button
          type="button"
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
          Conhecer o Hub
          <span aria-hidden="true"> &rarr;</span>
        </button>

        {/* 3 Pillars - Glassmorphism cards */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl w-full" role="list" aria-label="Funcionalidades principais do Hub">
          {/* Pilar 1: Buscar */}
          <article
            className="
              group
              bg-white/60
              backdrop-blur-xl
              rounded-2xl
              p-6
              text-center
              border border-white/60
              shadow-[0_10px_40px_-10px_rgba(92,92,255,0.15)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.25)]
              hover:border-[#5C5CFF]/20
            "
            role="listitem"
          >
            <div
              className="
                w-14 h-14
                mx-auto mb-4
                bg-[#5C5CFF]/10
                rounded-2xl
                flex items-center justify-center
                group-hover:bg-[#5C5CFF]/15
                transition-colors
              "
              aria-hidden="true"
            >
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="font-bold text-lg text-[#2B3259] mb-2">Buscar</h3>
            <p className="text-sm text-[#2B3259]/70">800+ leiloeiros em um clique</p>
          </article>

          {/* Pilar 2: Analisar */}
          <article
            className="
              group
              bg-white/60
              backdrop-blur-xl
              rounded-2xl
              p-6
              text-center
              border border-white/60
              shadow-[0_10px_40px_-10px_rgba(92,92,255,0.15)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.25)]
              hover:border-[#5C5CFF]/20
            "
            role="listitem"
          >
            <div
              className="
                w-14 h-14
                mx-auto mb-4
                bg-[#5C5CFF]/10
                rounded-2xl
                flex items-center justify-center
                group-hover:bg-[#5C5CFF]/15
                transition-colors
              "
              aria-hidden="true"
            >
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="font-bold text-lg text-[#2B3259] mb-2">Analisar</h3>
            <p className="text-sm text-[#2B3259]/70">Calculadora multi-cenários</p>
          </article>

          {/* Pilar 3: Gerenciar */}
          <article
            className="
              group
              bg-white/60
              backdrop-blur-xl
              rounded-2xl
              p-6
              text-center
              border border-white/60
              shadow-[0_10px_40px_-10px_rgba(92,92,255,0.15)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.25)]
              hover:border-[#5C5CFF]/20
            "
            role="listitem"
          >
            <div
              className="
                w-14 h-14
                mx-auto mb-4
                bg-[#5C5CFF]/10
                rounded-2xl
                flex items-center justify-center
                group-hover:bg-[#5C5CFF]/15
                transition-colors
              "
              aria-hidden="true"
            >
              <span className="text-3xl">📁</span>
            </div>
            <h3 className="font-bold text-lg text-[#2B3259] mb-2">Gerenciar</h3>
            <p className="text-sm text-[#2B3259]/70">Portfolio + PDF em 1 clique</p>
          </article>
        </div>
      </div>

      {/* Mobile Badge - Fixed bottom */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-30">
        <div
          className="
            flex items-center justify-center gap-2
            px-5 py-3.5
            bg-gradient-to-r from-[#5C5CFF] to-[#5C5CFF]
            rounded-full
            shadow-[0_15px_40px_-10px_rgba(92,92,255,0.5)]
          "
        >
          <span className="text-white text-sm" role="img" aria-label="trophy">
            🏆
          </span>
          <span className="text-sm font-semibold text-white">
            Primeiro e Único Hub do Brasil
          </span>
        </div>
      </div>
    </section>
  );
}

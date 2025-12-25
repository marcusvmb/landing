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
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 lg:pt-24 pb-24">
        <div className="grid grid-cols-12 gap-6 items-center">

          {/* Content Column - 7 colunas (assimetrico) */}
          <div className="col-span-12 lg:col-span-7 relative z-10">

            {/* Headline - Massivo com tight tracking */}
            <h1
              id="hero-loss-aversion-heading"
              className="
                text-[2.5rem]
                sm:text-5xl
                md:text-6xl
                lg:text-[4.5rem]
                xl:text-[5rem]
                font-black
                tracking-[-0.03em]
                leading-[0.95]
                text-[#2B3259]
              "
            >
              Pare de Perder
              <br />
              Oportunidades em Leilões
              <br />
              <span className="text-[#5C5CFF]">Por Falta de Organização</span>
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
              Garantir Meu Acesso Antecipado
              <span aria-hidden="true"> &rarr;</span>
            </button>

            {/* Microcopy - Risk Removers - Improved contrast (70% instead of 60%) */}
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#2B3259]/70" aria-label="Beneficios inclusos">
              <li className="flex items-center gap-1.5">
                <span className="text-[#5C5CFF] font-medium" aria-hidden="true">&#10003;</span>
                Vagas limitadas para Fundadores
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

          {/* Image Column - 5 colunas com overlap e breaking grid */}
          <div
            className="
              col-span-12
              lg:col-span-5
              lg:-mr-20
              lg:-mt-10
              relative
              mt-12
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
                  blur-2xl
                  scale-95
                "
              />

              {/* Dashboard Mockup - Glassmorphism */}
              <div
                className="
                  relative
                  z-10
                  bg-white/80
                  backdrop-blur-xl
                  rounded-3xl
                  p-6
                  md:p-8
                  shadow-[0_30px_80px_-20px_rgba(92,92,255,0.3)]
                  border border-white/50
                "
                role="img"
                aria-label="Visualização do painel da Nexus Leilões mostrando 23 imóveis em análise, 5 leilões hoje e 12 alertas ativos"
              >
                {/* Mockup Header - macOS style */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <div className="ml-auto text-xs text-[#2B3259]/40 font-medium">
                    Nexus Dashboard
                  </div>
                </div>

                {/* Mockup Content - Simplified UI representation */}
                <div className="space-y-5">
                  {/* Search bar */}
                  <div className="h-10 bg-[#5C5CFF]/8 rounded-xl flex items-center px-4">
                    <span className="text-[#5C5CFF]/60 text-sm">🔍 Buscar imóveis...</span>
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-4 bg-[#5C5CFF]/5 rounded-xl border border-[#5C5CFF]/10">
                      <div className="text-2xl font-bold text-[#5C5CFF]">23</div>
                      <div className="text-xs text-[#2B3259]/50">Em análise</div>
                    </div>
                    <div className="p-4 bg-[#5C5CFF]/5 rounded-xl border border-[#5C5CFF]/10">
                      <div className="text-2xl font-bold text-[#5C5CFF]">5</div>
                      <div className="text-xs text-[#2B3259]/50">Hoje</div>
                    </div>
                    <div className="p-4 bg-[#5C5CFF]/5 rounded-xl border border-[#5C5CFF]/10">
                      <div className="text-2xl font-bold text-[#5C5CFF]">12</div>
                      <div className="text-xs text-[#2B3259]/50">Alertas</div>
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-28 bg-gradient-to-r from-[#5C5CFF]/10 via-[#5C5CFF]/5 to-[#5C5CFF]/10 rounded-xl flex items-end p-4 gap-2">
                    <div className="w-1/6 h-[30%] bg-[#5C5CFF]/30 rounded-t" />
                    <div className="w-1/6 h-[50%] bg-[#5C5CFF]/40 rounded-t" />
                    <div className="w-1/6 h-[70%] bg-[#5C5CFF]/50 rounded-t" />
                    <div className="w-1/6 h-[45%] bg-[#5C5CFF]/40 rounded-t" />
                    <div className="w-1/6 h-[85%] bg-[#5C5CFF] rounded-t" />
                    <div className="w-1/6 h-[60%] bg-[#5C5CFF]/40 rounded-t" />
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <div className="h-8 bg-[#5C5CFF] rounded-lg flex-1 flex items-center justify-center">
                      <span className="text-white text-xs font-medium">Gerar Relatorio</span>
                    </div>
                    <div className="h-8 bg-[#2B3259]/10 rounded-lg w-24 flex items-center justify-center">
                      <span className="text-[#2B3259]/60 text-xs">Filtrar</span>
                    </div>
                  </div>
                </div>
              </div>
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

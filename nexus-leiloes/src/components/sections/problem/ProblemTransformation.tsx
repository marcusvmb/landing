/**
 * PROBLEM SECTION V2: TRANSFORMATION
 *
 * Frame Cognitivo: "Este é o seu dia hoje" (mostra o caos)
 *
 * Vieses Aplicados:
 * - Negativity Bias: Informação negativa pesa 2x mais
 * - Availability Heuristic: Exemplos vividos são memoráveis
 * - Unity: "Você reconhece?" cria identificacao
 * - Liking: Espelhar linguagem e frustração do cliente
 *
 * Design:
 * - Background gradiente escuro para claro (muted)
 * - Icones espalhados em grayscale (caos visual)
 * - Textura de ruido (stress feeling)
 * - Quote strip escuro
 */

export default function ProblemTransformation() {
  return (
    <section
      className="bg-gradient-to-b from-[#E0E1E1] via-[#E8E9E9] to-[#EFF0F0] py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="problem-transformation-heading"
    >
      {/* Noise overlay for stressed/chaotic feeling */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow - muted */}
        <div className="text-center mb-6">
          <span className="inline-block px-5 py-2.5 bg-[#2B3259]/5 rounded-full border border-[#2B3259]/10">
            <span className="text-sm font-semibold text-[#2B3259]/50 uppercase tracking-widest">
              Seu dia hoje
            </span>
          </span>
        </div>

        {/* Headline */}
        <h2
          id="problem-transformation-heading"
          className="
            text-center
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            tracking-[-0.03em]
            leading-[0.95]
            text-[#2B3259]
            mb-12
          "
        >
          15 abas abertas,
          <br />
          3 planilhas e{' '}
          <span className="text-[#2B3259]/40">zero clareza</span>
        </h2>

        {/* Scattered Icons - Chaos visualization */}
        <div className="relative h-[280px] md:h-[350px] max-w-4xl mx-auto mb-8" role="img" aria-label="Visualização do caos de ferramentas soltas">
          {/* Connecting dashed lines (chaos) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
            <line x1="20%" y1="25%" x2="45%" y2="40%" stroke="#2B3259" strokeWidth="1" strokeDasharray="5,5" strokeOpacity="0.1" />
            <line x1="55%" y1="20%" x2="75%" y2="45%" stroke="#2B3259" strokeWidth="1" strokeDasharray="5,5" strokeOpacity="0.1" />
            <line x1="30%" y1="60%" x2="60%" y2="70%" stroke="#2B3259" strokeWidth="1" strokeDasharray="5,5" strokeOpacity="0.1" />
            <line x1="65%" y1="35%" x2="40%" y2="55%" stroke="#2B3259" strokeWidth="1" strokeDasharray="5,5" strokeOpacity="0.1" />
          </svg>

          {/* Icon 1 - Excel */}
          <div
            className="
              absolute
              top-[10%] left-[15%]
              w-14 h-14 md:w-16 md:h-16
              bg-[#2B3259]/5
              rounded-xl
              flex items-center justify-center
              grayscale
              opacity-50
              rotate-[-8deg]
              hover:grayscale-0
              hover:opacity-100
              hover:rotate-0
              transition-all duration-500
            "
          >
            <span className="text-2xl md:text-3xl">&#128202;</span>
          </div>

          {/* Icon 2 - Word */}
          <div
            className="
              absolute
              top-[30%] left-[40%]
              w-12 h-12 md:w-14 md:h-14
              bg-[#2B3259]/5
              rounded-xl
              flex items-center justify-center
              grayscale
              opacity-40
              rotate-[12deg]
              hover:grayscale-0
              hover:opacity-100
              hover:rotate-0
              transition-all duration-500
            "
          >
            <span className="text-xl md:text-2xl">&#128221;</span>
          </div>

          {/* Icon 3 - Browser */}
          <div
            className="
              absolute
              top-[5%] right-[25%]
              w-14 h-14 md:w-16 md:h-16
              bg-[#2B3259]/5
              rounded-xl
              flex items-center justify-center
              grayscale
              opacity-55
              rotate-[-5deg]
              hover:grayscale-0
              hover:opacity-100
              hover:rotate-0
              transition-all duration-500
            "
          >
            <span className="text-2xl md:text-3xl">&#127760;</span>
          </div>

          {/* Icon 4 - Calendar */}
          <div
            className="
              absolute
              top-[55%] left-[20%]
              w-12 h-12 md:w-14 md:h-14
              bg-[#2B3259]/5
              rounded-xl
              flex items-center justify-center
              grayscale
              opacity-45
              rotate-[8deg]
              hover:grayscale-0
              hover:opacity-100
              hover:rotate-0
              transition-all duration-500
            "
          >
            <span className="text-xl md:text-2xl">&#128197;</span>
          </div>

          {/* Icon 5 - Email */}
          <div
            className="
              absolute
              top-[45%] right-[15%]
              w-14 h-14 md:w-16 md:h-16
              bg-[#2B3259]/5
              rounded-xl
              flex items-center justify-center
              grayscale
              opacity-50
              rotate-[-10deg]
              hover:grayscale-0
              hover:opacity-100
              hover:rotate-0
              transition-all duration-500
            "
          >
            <span className="text-2xl md:text-3xl">&#128231;</span>
          </div>

          {/* Icon 6 - Phone */}
          <div
            className="
              absolute
              bottom-[15%] left-[45%]
              w-12 h-12 md:w-14 md:h-14
              bg-[#2B3259]/5
              rounded-xl
              flex items-center justify-center
              grayscale
              opacity-40
              rotate-[15deg]
              hover:grayscale-0
              hover:opacity-100
              hover:rotate-0
              transition-all duration-500
            "
          >
            <span className="text-xl md:text-2xl">&#128241;</span>
          </div>

          {/* Icon 7 - Calculator */}
          <div
            className="
              absolute
              bottom-[25%] right-[30%]
              w-12 h-12 md:w-14 md:h-14
              bg-[#2B3259]/5
              rounded-xl
              flex items-center justify-center
              grayscale
              opacity-45
              rotate-[-12deg]
              hover:grayscale-0
              hover:opacity-100
              hover:rotate-0
              transition-all duration-500
            "
          >
            <span className="text-xl md:text-2xl">&#128290;</span>
          </div>
        </div>

        {/* Pain Points - Recognition list */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <div className="flex items-start gap-4 p-4 bg-white/40 rounded-xl border border-[#2B3259]/5">
            <span className="text-xl grayscale opacity-60" aria-hidden="true">&#128187;</span>
            <p className="text-[#2B3259]/70 text-sm md:text-base">
              <span className="font-medium text-[#2B3259]">Abre o computador</span> e começa a saga:
              Viva, Sodré, Zukerman, Lance Certo... Cada leiloeiro é uma nova aba.
            </p>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white/40 rounded-xl border border-[#2B3259]/5">
            <span className="text-xl grayscale opacity-60" aria-hidden="true">&#128203;</span>
            <p className="text-[#2B3259]/70 text-sm md:text-base">
              <span className="font-medium text-[#2B3259]">Depois vem a planilha.</span> Copiar dados.
              Colar. Formatar. Repetir até cansar.
            </p>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white/40 rounded-xl border border-[#2B3259]/5">
            <span className="text-xl grayscale opacity-60" aria-hidden="true">&#128558;</span>
            <p className="text-[#2B3259]/70 text-sm md:text-base">
              <span className="font-medium text-[#2B3259]">No final do dia,</span> a sensação:
              &quot;Será que perdi algo importante?&quot;
            </p>
          </div>
        </div>

        {/* Dark Quote Strip */}
        <div
          className="
            py-10
            bg-[#2B3259]
            -mx-6 px-6
            lg:-mx-[calc((100vw-72rem)/2)]
            lg:px-[calc((100vw-72rem)/2)]
          "
        >
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-white/80 italic leading-relaxed">
              &quot;Já perdi um imóvel com 40% de desconto porque esqueci a data do leilão.
              Estava em uma das 15 planilhas abertas...&quot;
            </p>
            <cite className="mt-4 block text-sm text-white/40 not-italic">
              - Investidor anônimo, 3 anos de experiência
            </cite>
          </blockquote>
        </div>

        {/* Agitation */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-[#2B3259]/60 leading-relaxed">
            Você trabalha demais para <span className="font-semibold text-[#2B3259]">organizar</span>{' '}
            e de menos para <span className="font-semibold text-[#2B3259]">decidir</span>.
            A energia vai toda para o processo, não para o resultado.
          </p>
        </div>

        {/* Muted CTA that reveals color */}
        <div className="mt-12 text-center">
          <button
            type="button"
            className="
              bg-[#2B3259]/10
              text-[#2B3259]/60
              font-bold
              text-lg
              px-10 py-5
              rounded-full
              border border-[#2B3259]/10
              transition-all
              duration-500
              hover:bg-[#5C5CFF]
              hover:text-white
              hover:border-transparent
              hover:shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)]
              hover:-translate-y-1
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#5C5CFF]
              cursor-pointer
            "
          >
            Sair do caos
          </button>
        </div>
      </div>
    </section>
  );
}

/**
 * SOLUTION SECTION V2: TRANSFORMATION
 *
 * Frame Cognitivo: "Do caos a clareza"
 *
 * Vieses Aplicados:
 * - Transformation: Jornada visual clara Antes → Depois
 * - Cognitive Fluency: Textos super claros e diretos
 * - Aspiration: Pintar o cenario futuro ideal
 *
 * Design:
 * - Timeline horizontal com steps progressivos
 * - Opacidade crescente nos steps
 * - Before card (muted) vs After card (vibrant)
 */

export default function SolutionTransformation() {
  return (
    <section
      className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="solution-transform-heading"
    >
      {/* Gradient transition - left to right */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#EFF0F0] via-[#EFF0F0] to-[#F8F8FF]
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* Journey line glow */}
      <div
        className="
          absolute top-1/2 left-0 right-0
          h-2
          bg-gradient-to-r from-[#2B3259]/5 via-[#5C5CFF]/20 to-[#5C5CFF]/40
          blur-xl
          -translate-y-1/2
        "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span
            className="
              inline-flex items-center gap-2
              px-5 py-2.5
              bg-[#5C5CFF]/8
              rounded-full
              border border-[#5C5CFF]/15
            "
          >
            <span className="text-sm font-semibold text-[#5C5CFF] uppercase tracking-widest">
              Sua Jornada de Transformação
            </span>
          </span>
        </div>

        {/* Headline */}
        <h2
          id="solution-transform-heading"
          className="
            text-center
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-black
            tracking-[-0.03em]
            leading-[1.05]
            text-[#2B3259]
            mb-6
          "
        >
          Do <span className="text-[#2B3259]/40">Caos</span> a{' '}
          <span className="text-[#5C5CFF]">Clareza</span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 mb-16 max-w-2xl mx-auto leading-relaxed">
          Imagine acordar e ver todas as oportunidades organizadas, analisadas e
          prontas para decisao. Sem abas abertas, sem planilhas confusas. Apenas
          clareza total.
        </p>

        {/* Before/After + Timeline - Desktop */}
        <div className="hidden lg:grid grid-cols-12 gap-6 mb-16 items-center">
          {/* Before State */}
          <div className="col-span-3">
            <BeforeStateCard />
          </div>

          {/* Timeline Steps - Center */}
          <div className="col-span-6">
            <TimelineSteps />
          </div>

          {/* After State */}
          <div className="col-span-3">
            <AfterStateCard />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8 mb-16">
          <BeforeStateCard />
          <TimelineStepsMobile />
          <AfterStateCard />
        </div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-12 gap-6">
          <TransformCard
            pillarName="BUSCAR"
            before="Horas pulando entre 20+ sites de leiloeiros"
            after="Todos os leilões do Brasil em uma única tela com filtros inteligentes"
            className="col-span-12 md:col-span-4"
          />
          <TransformCard
            pillarName="ANALISAR"
            before="Calculos manuais em planilhas confusas"
            after="Simulações automaticas com multiplos cenarios e ROI projetado"
            className="col-span-12 md:col-span-4"
          />
          <TransformCard
            pillarName="GERENCIAR"
            before="Informações perdidas em anotacoes espalhadas"
            after="Dashboard centralizado com relatorios PDF prontos para compartilhar"
            className="col-span-12 md:col-span-4"
          />
        </div>

        {/* Agitation */}
        <p className="mt-12 text-center text-lg text-[#2B3259]/60 max-w-2xl mx-auto">
          A diferenca entre investidores amadores e profissionais esta nas
          ferramentas que usam.{' '}
          <span className="font-semibold text-[#2B3259]">
            O Nexus e o upgrade que transforma sua operação.
          </span>
        </p>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            type="button"
            className="
              bg-[#5C5CFF]
              text-white
              font-bold text-lg
              px-10 py-5
              rounded-full
              shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)]
              transition-all duration-300
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:-translate-y-1 hover:scale-[1.02]
              hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.5)]
              active:translate-y-0 active:scale-[0.98]
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-[#2B3259]
              cursor-pointer
            "
          >
            Quero Transformar Minha Operação
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">
            Acesso antecipado com desconto exclusivo para os primeiros.
          </p>
        </div>
      </div>
    </section>
  );
}

function BeforeStateCard() {
  return (
    <div
      className="
        p-6
        bg-white/40
        backdrop-blur-sm
        rounded-2xl
        border border-[#2B3259]/10
        opacity-70
        relative
      "
    >
      {/* Chaos visual - scattered dots */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-[#2B3259]/10 rounded-full"
            style={{
              left: `${15 + (i % 4) * 20 + Math.random() * 10}%`,
              top: `${15 + Math.floor(i / 4) * 25 + Math.random() * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <span className="text-xs font-semibold text-[#2B3259]/40 uppercase tracking-widest">
          Antes
        </span>
        <h3 className="text-xl font-bold text-[#2B3259]/60 mt-2">Fragmentado</h3>
        <ul className="mt-4 space-y-2 text-sm text-[#2B3259]/50">
          <li className="flex items-center gap-2">
            <span className="text-[#5C5CFF]/60">&#10060;</span>
            20+ abas abertas
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#5C5CFF]/60">&#10060;</span>
            Planilhas confusas
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#5C5CFF]/60">&#10060;</span>
            Dados perdidos
          </li>
        </ul>
      </div>
    </div>
  );
}

function AfterStateCard() {
  return (
    <div
      className="
        p-6
        bg-white/80
        backdrop-blur-sm
        rounded-2xl
        border border-[#5C5CFF]/20
        shadow-[0_20px_60px_-15px_rgba(92,92,255,0.2)]
        relative
      "
    >
      {/* Clarity visual - organized grid */}
      <div
        className="absolute inset-0 overflow-hidden rounded-2xl opacity-20"
        aria-hidden="true"
      >
        <div className="grid grid-cols-3 gap-2 p-4 h-full">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-[#5C5CFF]/30 rounded" />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <span className="text-xs font-semibold text-[#5C5CFF] uppercase tracking-widest">
          Depois
        </span>
        <h3 className="text-xl font-bold text-[#2B3259] mt-2">Unificado</h3>
        <ul className="mt-4 space-y-2 text-sm text-[#2B3259]/70">
          <li className="flex items-center gap-2">
            <span className="text-[#5C5CFF]">&#10003;</span>1 painel central
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#5C5CFF]">&#10003;</span>
            Dados sincronizados
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#5C5CFF]">&#10003;</span>
            Visao completa
          </li>
        </ul>
      </div>
    </div>
  );
}

function TimelineSteps() {
  const steps = [
    { number: 1, name: 'BUSCAR', desc: 'Unifique +20 sites', opacity: 'opacity-70' },
    { number: 2, name: 'ANALISAR', desc: 'Calcule com precisão', opacity: 'opacity-85' },
    { number: 3, name: 'GERENCIAR', desc: 'Organize tudo', opacity: 'opacity-100' },
  ];

  return (
    <div className="relative">
      {/* Connection line */}
      <div
        className="
          absolute top-8 left-8 right-8 h-1
          bg-gradient-to-r from-[#2B3259]/20 via-[#5C5CFF]/40 to-[#5C5CFF]
          rounded-full
        "
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-3 gap-4">
        {steps.map((step) => (
          <div key={step.number} className={`text-center ${step.opacity}`}>
            {/* Step dot */}
            <div
              className="
                w-16 h-16 mx-auto
                bg-white
                rounded-full
                border-4 border-[#5C5CFF]
                flex items-center justify-center
                shadow-[0_8px_30px_-10px_rgba(92,92,255,0.3)]
                relative z-10
              "
            >
              <span className="text-xl font-black text-[#5C5CFF]">{step.number}</span>
            </div>

            {/* Step content */}
            <h4 className="text-lg font-bold text-[#2B3259] mt-4">{step.name}</h4>
            <p className="text-sm text-[#2B3259]/60 mt-1">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineStepsMobile() {
  const steps = [
    { number: 1, name: 'BUSCAR', desc: 'Unifique +20 sites' },
    { number: 2, name: 'ANALISAR', desc: 'Calcule com precisão' },
    { number: 3, name: 'GERENCIAR', desc: 'Organize tudo' },
  ];

  return (
    <div className="flex justify-center gap-4">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center gap-2">
          <div
            className="
              w-10 h-10
              bg-[#5C5CFF]
              rounded-full
              flex items-center justify-center
              shadow-[0_4px_15px_-5px_rgba(92,92,255,0.4)]
            "
          >
            <span className="text-sm font-bold text-white">{step.number}</span>
          </div>
          {index < steps.length - 1 && (
            <span className="text-[#5C5CFF]/40" aria-hidden="true">
              &rarr;
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

interface TransformCardProps {
  pillarName: string;
  before: string;
  after: string;
  className?: string;
}

function TransformCard({ pillarName, before, after, className = '' }: TransformCardProps) {
  return (
    <article
      className={`
        group
        bg-white/70 backdrop-blur-sm
        rounded-2xl
        border border-[#5C5CFF]/10
        shadow-[0_10px_40px_-15px_rgba(92,92,255,0.1)]
        hover:shadow-[0_20px_50px_-15px_rgba(92,92,255,0.2)]
        hover:border-[#5C5CFF]/20
        transition-all duration-300
        overflow-hidden
        ${className}
      `}
    >
      <div className="p-6">
        <h3 className="text-lg font-black text-[#5C5CFF] tracking-[-0.02em] mb-4">
          {pillarName}
        </h3>

        {/* Before */}
        <div className="mb-4">
          <span className="text-xs font-semibold text-[#2B3259]/40 uppercase tracking-widest">
            Antes
          </span>
          <p className="text-sm text-[#2B3259]/50 mt-1 line-through decoration-[#5C5CFF]/30">
            {before}
          </p>
        </div>

        {/* After */}
        <div>
          <span className="text-xs font-semibold text-[#5C5CFF] uppercase tracking-widest">
            Depois
          </span>
          <p className="text-sm text-[#2B3259]/80 mt-1 font-medium">{after}</p>
        </div>
      </div>
    </article>
  );
}

/**
 * SOLUTION SECTION V1: LOSS AVERSION
 *
 * Frame Cognitivo: "Pare de perder → Comece a ganhar"
 *
 * Vieses Aplicados:
 * - Loss Aversion: Cada pilar mostra o que você PARA de perder
 * - Endowment Effect: "Seu Hub", "Sua central de controle"
 * - Anchoring: Números de perdas antes, ganhos depois
 *
 * Design:
 * - Cards com Before/After vertical
 * - Staggered asymmetric layout
 * - Transição visual de laranja (perda) para azul (ganho)
 */

export default function SolutionLossAversion() {
  return (
    <section
      className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="solution-loss-heading"
    >
      {/* Subtle gradient transition from problem section */}
      <div
        className="
          absolute top-0 left-0 right-0 h-40
          bg-gradient-to-b from-[#FFF8F5] to-transparent
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* Primary glow - positioned left */}
      <div
        className="
          absolute top-1/3 left-0
          w-[500px] h-[500px]
          bg-[#5C5CFF]/8
          rounded-full
          blur-[120px]
          -translate-x-1/2
        "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow - Transition from loss to gain */}
        <div className="text-center mb-8">
          <span
            className="
              inline-flex items-center gap-3
              px-6 py-3
              bg-white/60 backdrop-blur-sm
              rounded-full
              border border-[#5C5CFF]/15
              shadow-[0_8px_30px_-10px_rgba(92,92,255,0.15)]
            "
          >
            <span className="text-[#FF7A00] line-through opacity-60 text-sm font-medium">
              Perder
            </span>
            <span className="text-[#5C5CFF]" aria-hidden="true">
              &rarr;
            </span>
            <span className="text-[#5C5CFF] font-semibold text-sm">Ganhar</span>
          </span>
        </div>

        {/* Headline */}
        <h2
          id="solution-loss-heading"
          className="
            text-center
            text-3xl sm:text-4xl md:text-5xl
            font-black
            tracking-[-0.03em]
            leading-[1.1]
            text-[#2B3259]
            mb-6
          "
        >
          Seu Hub de Leilões:{' '}
          <span className="text-[#5C5CFF]">Nunca Mais Perca</span>
          <br />
          Uma Oportunidade Lucrativa
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Enquanto você alterna entre dezenas de sites e planilhas, boas oportunidades
          escapam. O Nexus centraliza tudo em um só lugar — para você parar de perder
          e comecar a lucrar.
        </p>

        {/* Pillar Cards - Asymmetric stagger */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* BUSCAR Pillar - offset up */}
          <div className="col-span-12 md:col-span-4 md:-mt-4">
            <PillarCard
              beforeLabel="Você Perdia"
              beforeValue="2h/dia"
              beforeDesc="alternando entre 20+ sites"
              pillarName="BUSCAR"
              pillarIcon="&#128269;"
              pillarTitle="Chega de Perder Tempo em 20+ Sites"
              pillarDesc="Todos os leilões do Brasil em uma única busca. Ganhe tempo para analisar o que realmente importa."
              afterLabel="Agora Ganha"
              afterValue="+40h/mês"
              afterDesc="de tempo livre"
            />
          </div>

          {/* ANALISAR Pillar - centered */}
          <div className="col-span-12 md:col-span-4">
            <PillarCard
              beforeLabel="Você Errava"
              beforeValue="R$15k+"
              beforeDesc="em cálculos manuais"
              pillarName="ANALISAR"
              pillarIcon="&#129518;"
              pillarTitle="Nunca Mais Erre no Cálculo do Lucro"
              pillarDesc="Calculadora exclusiva simula multiplos cenarios. Elimine o risco de entrar em leilões que não compensam."
              afterLabel="Agora Acerta"
              afterValue="100%"
              afterDesc="precisão nos cálculos"
            />
          </div>

          {/* GERENCIAR Pillar - offset down */}
          <div className="col-span-12 md:col-span-4 md:mt-4">
            <PillarCard
              beforeLabel="Você Perdia"
              beforeValue="Clientes"
              beforeDesc="por falta de organização"
              pillarName="GERENCIAR"
              pillarIcon="&#128202;"
              pillarTitle="Controle Total, Oportunidades Seguras"
              pillarDesc="Dashboard unificado e relatorios PDF profissionais. Mantenha cada oportunidade sob seu controle."
              afterLabel="Agora Retem"
              afterValue="+87%"
              afterDesc="dos clientes satisfeitos"
            />
          </div>
        </div>

        {/* Result Summary */}
        <div
          className="
            mt-16
            p-8
            bg-white/70 backdrop-blur-sm
            rounded-3xl
            border border-[#5C5CFF]/10
            shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)]
            text-center
          "
        >
          <p className="text-lg text-[#2B3259]/70 mb-2">
            Resultado combinado dos 3 pilares:
          </p>
          <p className="text-2xl md:text-3xl font-bold text-[#2B3259]">
            <span className="text-[#5C5CFF]">+R$12.450/mês</span> em oportunidades
            recuperadas
          </p>
        </div>

        {/* Agitation */}
        <p className="mt-12 text-center text-lg text-[#2B3259]/60 max-w-2xl mx-auto">
          Cada dia sem uma ferramenta integrada e um dia de oportunidades perdidas.
          <br />
          <span className="font-semibold text-[#2B3259]">
            Seus concorrentes já estão se organizando.
          </span>
        </p>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            type="button"
            className="
              bg-[#FF7A00]
              text-white
              font-bold text-lg
              px-10 py-5
              rounded-full
              shadow-[0_15px_40px_-10px_rgba(255,122,0,0.4)]
              transition-all duration-300
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:-translate-y-1 hover:scale-[1.02]
              hover:shadow-[0_20px_50px_-10px_rgba(255,122,0,0.5)]
              active:translate-y-0 active:scale-[0.98]
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-[#2B3259]
              cursor-pointer
            "
          >
            Garantir Meu Acesso Antecipado
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">
            Vagas limitadas para a lista VIP. Sem cartao de credito.
          </p>
        </div>
      </div>
    </section>
  );
}

interface PillarCardProps {
  beforeLabel: string;
  beforeValue: string;
  beforeDesc: string;
  pillarName: string;
  pillarIcon: string;
  pillarTitle: string;
  pillarDesc: string;
  afterLabel: string;
  afterValue: string;
  afterDesc: string;
}

function PillarCard({
  beforeLabel,
  beforeValue,
  beforeDesc,
  pillarName,
  pillarIcon,
  pillarTitle,
  pillarDesc,
  afterLabel,
  afterValue,
  afterDesc,
}: PillarCardProps) {
  return (
    <article
      className="
        group
        h-full
        bg-white/80 backdrop-blur-sm
        rounded-3xl
        border border-[#5C5CFF]/10
        shadow-[0_15px_50px_-15px_rgba(92,92,255,0.15)]
        hover:shadow-[0_25px_60px_-15px_rgba(92,92,255,0.25)]
        hover:border-[#5C5CFF]/20
        transition-all duration-500
        overflow-hidden
      "
    >
      {/* Before State - Top, muted */}
      <div
        className="
          px-6 py-4
          bg-[#FF7A00]/5
          border-b border-[#FF7A00]/10
        "
      >
        <span className="text-xs font-semibold text-[#FF7A00]/60 uppercase tracking-widest">
          {beforeLabel}
        </span>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-xl font-bold text-[#FF7A00]/70 line-through decoration-2">
            {beforeValue}
          </span>
          <span className="text-sm text-[#2B3259]/50">{beforeDesc}</span>
        </div>
      </div>

      {/* Pillar Content - Center, prominent */}
      <div className="p-6">
        {/* Icon */}
        <div
          className="
            w-14 h-14
            bg-[#5C5CFF]/10
            rounded-2xl
            flex items-center justify-center
            mb-4
            group-hover:bg-[#5C5CFF]/15
            group-hover:scale-110
            transition-all duration-300
          "
          aria-hidden="true"
        >
          <span
            className="text-3xl"
            dangerouslySetInnerHTML={{ __html: pillarIcon }}
          />
        </div>

        {/* Pillar Name */}
        <span className="text-xs font-bold text-[#5C5CFF] uppercase tracking-widest">
          {pillarName}
        </span>

        {/* Title */}
        <h3
          className="
            text-xl font-black
            text-[#2B3259]
            tracking-[-0.02em]
            mt-2 mb-3
          "
        >
          {pillarTitle}
        </h3>

        {/* Description */}
        <p className="text-[#2B3259]/60 leading-relaxed text-sm">{pillarDesc}</p>
      </div>

      {/* After State - Bottom, highlighted */}
      <div
        className="
          px-6 py-4
          bg-[#5C5CFF]/5
          border-t border-[#5C5CFF]/10
        "
      >
        <span className="text-xs font-semibold text-[#5C5CFF] uppercase tracking-widest">
          {afterLabel}
        </span>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-2xl font-black text-[#5C5CFF]">{afterValue}</span>
          <span className="text-sm text-[#2B3259]/60">{afterDesc}</span>
        </div>
      </div>
    </article>
  );
}

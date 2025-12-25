/**
 * SOLUTION SECTION V4: SOCIAL PROOF
 *
 * Frame Cognitivo: "547+ já descobriram"
 *
 * Vieses Aplicados:
 * - Social Proof: Outros já estão usando
 * - Bandwagon Effect: "Junte-se a quem já..."
 * - FOMO: Contador ao vivo, urgencia
 *
 * Design:
 * - Testimonials embutidos em cada pilar
 * - Avatar stack com contador
 * - Live counter badge com pulse
 * - Estrelas de avaliação
 */

export default function SolutionSocialProof() {
  return (
    <section
      className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="solution-social-heading"
    >
      {/* Avatar scatter background */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="
              absolute
              w-12 h-12
              rounded-full
              bg-[#5C5CFF]/5
              border-2 border-[#5C5CFF]/10
            "
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + Math.sin(i) * 20}%`,
              opacity: 0.3 + i * 0.05,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Live Counter Badge */}
        <div className="text-center mb-8">
          <span
            className="
              inline-flex items-center gap-3
              px-6 py-3.5
              bg-white/80 backdrop-blur-sm
              rounded-full
              border border-[#5C5CFF]/15
              shadow-[0_10px_40px_-10px_rgba(92,92,255,0.15)]
            "
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5C5CFF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5C5CFF]"></span>
            </span>
            <span className="text-sm font-semibold text-[#2B3259]">
              <span className="text-[#5C5CFF] font-bold">547+</span> investidores
              na lista de espera
            </span>
          </span>
        </div>

        {/* Headline with Avatar Stack */}
        <div className="text-center mb-16">
          <h2
            id="solution-social-heading"
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-black
              tracking-[-0.03em]
              leading-[1.1]
              text-[#2B3259]
              mb-6
            "
          >
            Por Que <span className="text-[#5C5CFF]">547 Investidores</span>
            <br />
            Escolheram a Nexus
          </h2>

          {/* Avatar Stack */}
          <div className="flex justify-center items-center gap-2">
            <div className="flex -space-x-3">
              {['RM', 'AS', 'CM', 'JL', 'PO'].map((initials, i) => (
                <div
                  key={i}
                  className="
                    w-10 h-10
                    rounded-full
                    bg-gradient-to-br from-[#5C5CFF]/20 to-[#5C5CFF]/40
                    border-2 border-white
                    flex items-center justify-center
                    text-xs font-bold text-[#5C5CFF]
                    shadow-sm
                  "
                >
                  {initials}
                </div>
              ))}
              <div
                className="
                  w-10 h-10
                  rounded-full
                  bg-[#5C5CFF]
                  border-2 border-white
                  flex items-center justify-center
                  text-xs font-bold text-white
                  shadow-sm
                "
              >
                +542
              </div>
            </div>
          </div>
        </div>

        {/* Pillar Cards with Testimonials */}
        <div className="space-y-6">
          {/* BUSCAR - Full Width */}
          <TestimonialPillarCard
            pillarName="BUSCAR"
            pillarTitle="O Recurso Mais Pedido Por Investidores"
            pillarDesc="Agregador de +20 leiloeiras unificado"
            testimonial="Encontrei 3 oportunidades no primeiro dia. Antes eu passava 2 horas por dia alternando entre sites. Agora levo 15 minutos."
            authorName="Carlos Mendes"
            authorRole="Investidor PF, Rio de Janeiro"
            features={['+20 sites', 'Alertas WhatsApp', 'Filtros avançados']}
            isLarge={true}
          />

          {/* ANALISAR & GERENCIAR - Side by Side */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <TestimonialPillarCard
                pillarName="ANALISAR"
                pillarTitle="A Calculadora Que Assessores Sonhavam"
                pillarDesc="Calculadora multi-cenário"
                testimonial="Evitei um prejuízo de R$40k em um imóvel que parecia ótimo. A calculadora mostrou custos ocultos."
                authorName="Maria Santos"
                authorRole="Assessora, São Paulo"
                features={['Multi-cenário', 'Custos reais', 'ROI projetado']}
              />
            </div>

            <div className="col-span-12 lg:col-span-7">
              <TestimonialPillarCard
                pillarName="GERENCIAR"
                pillarTitle="Os Relatórios Que Clientes Valorizam"
                pillarDesc="Dashboard e relatórios PDF"
                testimonial="Meus clientes adoram os relatórios em PDF. Pareço muito mais profissional e fecho mais negócios."
                authorName="André Oliveira"
                authorRole="Escritório de Assessoria, BH"
                features={['Dashboard', 'PDF Reports', 'Multi-cliente', 'Pipeline']}
              />
            </div>
          </div>
        </div>

        {/* Social Proof Footer */}
        <div
          className="
            mt-12
            py-5
            px-8
            bg-[#5C5CFF]/5
            rounded-2xl
            border border-[#5C5CFF]/10
            flex flex-col sm:flex-row items-center justify-center gap-4
            text-center sm:text-left
          "
        >
          <div className="flex" aria-label="5 estrelas">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-xl text-yellow-400">
                &#9733;
              </span>
            ))}
          </div>
          <span className="text-[#2B3259]/70">
            <span className="font-semibold text-[#2B3259]">
              +23 avaliações 5 estrelas
            </span>{' '}
            esta semana
          </span>
        </div>

        {/* Agitation */}
        <p className="mt-10 text-center text-lg text-[#2B3259]/60 max-w-2xl mx-auto">
          A cada dia, mais investidores garantem seu lugar na lista VIP.{' '}
          <span className="font-semibold text-[#2B3259]">
            Quem entrar primeiro terá condições exclusivas.
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
            Entrar Para a Lista VIP
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">
            Mais de 547 investidores já na fila. Desconto exclusivo para quem entra
            agora.
          </p>
        </div>
      </div>
    </section>
  );
}

interface TestimonialPillarCardProps {
  pillarName: string;
  pillarTitle: string;
  pillarDesc: string;
  testimonial: string;
  authorName: string;
  authorRole: string;
  features: string[];
  isLarge?: boolean;
}

function TestimonialPillarCard({
  pillarName,
  pillarTitle,
  pillarDesc,
  testimonial,
  authorName,
  authorRole,
  features,
  isLarge = false,
}: TestimonialPillarCardProps) {
  return (
    <article
      className={`
        h-full
        bg-white/80 backdrop-blur-sm
        rounded-3xl
        border border-[#5C5CFF]/10
        shadow-[0_20px_60px_-20px_rgba(92,92,255,0.15)]
        hover:shadow-[0_25px_70px_-20px_rgba(92,92,255,0.25)]
        hover:border-[#5C5CFF]/20
        transition-all duration-300
        overflow-hidden
        ${isLarge ? 'p-8 lg:p-10' : 'p-6'}
      `}
    >
      <div className={isLarge ? 'grid grid-cols-12 gap-8' : ''}>
        {/* Pillar Info */}
        <div className={isLarge ? 'col-span-12 lg:col-span-5' : ''}>
          <span className="text-xs font-bold text-[#5C5CFF] uppercase tracking-widest">
            {pillarName}
          </span>
          <h3
            className={`
              font-black text-[#2B3259] tracking-[-0.02em]
              ${isLarge ? 'text-xl lg:text-2xl mt-2 mb-2' : 'text-lg mt-1 mb-1'}
            `}
          >
            {pillarTitle}
          </h3>
          <p
            className={`text-[#2B3259]/60 ${isLarge ? 'text-base' : 'text-sm'}`}
          >
            {pillarDesc}
          </p>

          {/* Features */}
          <div className="mt-4 flex flex-wrap gap-2">
            {features.map((feature) => (
              <span
                key={feature}
                className="
                  px-3 py-1.5
                  bg-[#5C5CFF]/8
                  rounded-full
                  text-xs font-medium
                  text-[#5C5CFF]
                "
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div
          className={`
            ${
              isLarge
                ? 'col-span-12 lg:col-span-7 lg:border-l lg:border-[#5C5CFF]/10 lg:pl-8'
                : 'mt-6 pt-6 border-t border-[#5C5CFF]/10'
            }
          `}
        >
          {/* Quote */}
          <blockquote
            className={`text-[#2B3259] leading-relaxed ${isLarge ? 'text-lg' : ''}`}
          >
            &ldquo;{testimonial}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="mt-4 flex items-center gap-3">
            <div
              className="
                w-10 h-10
                rounded-full
                bg-gradient-to-br from-[#5C5CFF]/20 to-[#5C5CFF]/40
                flex items-center justify-center
                text-sm font-bold text-[#5C5CFF]
              "
              aria-hidden="true"
            >
              {authorName
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <div>
              <div className="font-semibold text-[#2B3259] text-sm">
                {authorName}
              </div>
              <div className="text-xs text-[#2B3259]/50">{authorRole}</div>
            </div>
            <div className="ml-auto flex" aria-label="5 estrelas">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-yellow-400 text-sm">
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

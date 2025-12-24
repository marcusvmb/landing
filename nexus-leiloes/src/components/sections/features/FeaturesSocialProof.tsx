/**
 * FEATURES SECTION V4: SOCIAL PROOF
 *
 * Frame Cognitivo: "Features que nossos usuarios mais amam"
 *
 * ASCII Layout:
 * ┌─────────────────────────────────────────────────────────────┐
 * │                      EYEBROW BADGE                          │
 * │           "Baseado em feedback real de usuarios"            │
 * │                                                             │
 * │              "As Features Mais Amadas"                      │
 * │                       (headline)                            │
 * ├─────────────────────────────────────────────────────────────┤
 * │                                                             │
 * │  ┌───────────────────────────────────────────────────────┐ │
 * │  │  [🔍] BUSCA UNIFICADA                                 │ │
 * │  │                                                       │ │
 * │  │  ♥ 94% dos usuarios usam diariamente                 │ │
 * │  │                                                       │ │
 * │  │  "Economizei 2 horas por dia!"                       │ │
 * │  │   — Carlos M., Investidor                            │ │
 * │  │                                                       │ │
 * │  │  ████████████████████░░░░  94% satisfação            │ │
 * │  └───────────────────────────────────────────────────────┘ │
 * │                                                             │
 * │  ┌───────────────────────────────────────────────────────┐ │
 * │  │  [🧮] CALCULADORA MULTI-CENARIO    [MAIS AMADA ♥]    │ │
 * │  │                                                       │ │
 * │  │  ♥ 98% consideram essencial                          │ │
 * │  │                                                       │ │
 * │  │  "Nunca mais errei um cálculo de lucro."             │ │
 * │  │   — Patricia S., Assessora                           │ │
 * │  │                                                       │ │
 * │  │  ██████████████████████░░  98% satisfação            │ │
 * │  └───────────────────────────────────────────────────────┘ │
 * │                                                             │
 * │  ┌────────────────────────┐  ┌────────────────────────┐   │
 * │  │  📄 Relatorios PDF     │  │  📊 Dashboard          │   │
 * │  │  ♥ 87% usam semanal    │  │  ♥ 91% usam diario     │   │
 * │  │  "Clientes adoram!"    │  │  "Nunca perco nada"    │   │
 * │  └────────────────────────┘  └────────────────────────┘   │
 * │                                                             │
 * │  ┌────────────────────────┐  ┌────────────────────────┐   │
 * │  │  🏠 Dados Ocupantes    │  │  👥 Ferramentas        │   │
 * │  │  ♥ 76% evitou dor     │  │      Assessores        │   │
 * │  │  de cabeca            │  │  ♥ 89% retencao maior  │   │
 * │  └────────────────────────┘  └────────────────────────┘   │
 * └─────────────────────────────────────────────────────────────┘
 *
 * Grid Structure:
 * - Row 1: Busca (col-span-12)
 * - Row 2: Calculadora (col-span-12) - FEATURED
 * - Rows 3-4: 2x2 grid (col-span-6 each)
 *
 * Visual Elements:
 * - Heart icons for "love" metrics
 * - Usage percentage bars
 * - Mini-testimonials with avatars
 * - Satisfaction scores
 *
 * Hover States:
 * - Heart pulses
 * - Progress bar animates
 * - Testimonial expands
 */

const socialProofFeatures = [
  {
    id: 'busca',
    icon: '🔍',
    name: 'Busca Unificada',
    loveMetric: '94%',
    loveLabel: 'dos usuarios usam diariamente',
    testimonial: 'Economizei 2 horas por dia só com essa busca!',
    testimonialAuthor: 'Carlos M.',
    testimonialRole: 'Investidor PF',
    satisfactionPercent: 94,
    size: 'full',
    badge: null,
  },
  {
    id: 'calculadora',
    icon: '🧮',
    name: 'Calculadora Multi-Cenario',
    loveMetric: '98%',
    loveLabel: 'consideram essencial',
    testimonial: 'Nunca mais errei um cálculo de lucro. Isso já me salvou mais de R$20 mil.',
    testimonialAuthor: 'Patricia S.',
    testimonialRole: 'Assessora de Leilões',
    satisfactionPercent: 98,
    size: 'featured',
    badge: 'MAIS AMADA',
  },
  {
    id: 'relatorios',
    icon: '📄',
    name: 'Relatorios PDF',
    loveMetric: '87%',
    loveLabel: 'usam semanalmente',
    testimonial: 'Meus clientes adoram receber os relatorios!',
    testimonialAuthor: 'Fernando R.',
    testimonialRole: 'Corretor',
    satisfactionPercent: 87,
    size: 'half',
    badge: null,
  },
  {
    id: 'dashboard',
    icon: '📊',
    name: 'Dashboard Unificado',
    loveMetric: '91%',
    loveLabel: 'usam todos os dias',
    testimonial: 'Nunca mais perdi uma oportunidade.',
    testimonialAuthor: 'Amanda L.',
    testimonialRole: 'Investidora',
    satisfactionPercent: 91,
    size: 'half',
    badge: null,
  },
  {
    id: 'ocupantes',
    icon: '🏠',
    name: 'Dados de Ocupantes',
    loveMetric: '76%',
    loveLabel: 'evitaram surpresas ruins',
    testimonial: 'Me salvou de comprar imóvel com ocupante hostil.',
    testimonialAuthor: 'Ricardo T.',
    testimonialRole: 'Investidor',
    satisfactionPercent: 76,
    size: 'half',
    badge: null,
  },
  {
    id: 'assessores',
    icon: '👥',
    name: 'Ferramentas para Assessores',
    loveMetric: '89%',
    loveLabel: 'aumentaram retencao de clientes',
    testimonial: 'Meus clientes não vao mais embora.',
    testimonialAuthor: 'Juliana M.',
    testimonialRole: 'Assessora Senior',
    satisfactionPercent: 89,
    size: 'half',
    badge: 'PARA ASSESSORES',
  },
];

export default function FeaturesSocialProof() {
  return (
    <section
      className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="features-social-heading"
    >
      {/* Background Glows */}
      <div
        className="
          absolute top-0 right-1/4
          w-[500px] h-[500px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[120px]
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute bottom-0 left-1/4
          w-[400px] h-[400px]
          bg-[#5C5CFF]/8
          rounded-full
          blur-[100px]
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
              bg-white/60 backdrop-blur-sm
              rounded-full
              border border-[#5C5CFF]/15
              shadow-[0_8px_30px_-10px_rgba(92,92,255,0.15)]
            "
          >
            <span className="text-[#5C5CFF]">♥</span>
            <span className="text-sm font-semibold text-[#2B3259]/70">
              Baseado em feedback real de usuarios beta
            </span>
          </span>
        </div>

        {/* Headline */}
        <h2
          id="features-social-heading"
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
          As Features{' '}
          <span className="text-[#5C5CFF]">Mais Amadas</span>
          <br />
          Pelos Nossos Usuarios
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Não acredite apenas em nos. Veja o que os investidores que já usam
          o Nexus mais valorizam.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {socialProofFeatures.map((feature) => (
            <div
              key={feature.id}
              className={`
                ${feature.size === 'full' || feature.size === 'featured' ? 'md:col-span-2' : 'md:col-span-1'}
              `}
            >
              <SocialProofCard feature={feature} />
            </div>
          ))}
        </div>

        {/* Aggregate Stats */}
        <div
          className="
            mt-16
            p-8
            bg-white/70 backdrop-blur-sm
            rounded-3xl
            border border-[#5C5CFF]/10
            shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)]
          "
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-black text-[#5C5CFF]">547+</p>
              <p className="text-sm text-[#2B3259]/60 mt-1">Usuarios ativos</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-[#5C5CFF]">92%</p>
              <p className="text-sm text-[#2B3259]/60 mt-1">Satisfação geral</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-[#5C5CFF]">4.9★</p>
              <p className="text-sm text-[#2B3259]/60 mt-1">Avaliação media</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-[#5C5CFF]">R$2.4M+</p>
              <p className="text-sm text-[#2B3259]/60 mt-1">Em negociaoes gerenciadas</p>
            </div>
          </div>
        </div>

        {/* Social Proof Logos/Avatars */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#2B3259]/50 mb-4">
            Investidores de todo o Brasil confiam no Nexus
          </p>
          <div className="flex justify-center items-center gap-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="
                    w-10 h-10
                    bg-gradient-to-br from-[#5C5CFF]/20 to-[#5C5CFF]/10
                    border-2 border-white
                    rounded-full
                    flex items-center justify-center
                    text-xs font-bold text-[#5C5CFF]
                    shadow-sm
                  "
                >
                  {String.fromCharCode(65 + i - 1)}
                </div>
              ))}
            </div>
            <span className="text-sm text-[#5C5CFF] font-semibold ml-2">
              +539 outros
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
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
              cursor-pointer
            "
          >
            Juntar-me a Eles
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">
            Entre para a comunidade de investidores inteligentes
          </p>
        </div>
      </div>
    </section>
  );
}

interface SocialProofCardProps {
  feature: {
    id: string;
    icon: string;
    name: string;
    loveMetric: string;
    loveLabel: string;
    testimonial: string;
    testimonialAuthor: string;
    testimonialRole: string;
    satisfactionPercent: number;
    size: string;
    badge: string | null;
  };
}

function SocialProofCard({ feature }: SocialProofCardProps) {
  const isFeatured = feature.size === 'featured';
  const isFull = feature.size === 'full' || isFeatured;

  return (
    <article
      className={`
        group
        relative
        bg-white/80 backdrop-blur-sm
        rounded-3xl
        border
        ${isFeatured
          ? 'border-[#5C5CFF]/20 ring-2 ring-[#5C5CFF]/10'
          : 'border-[#5C5CFF]/10 hover:border-[#5C5CFF]/20'
        }
        shadow-[0_15px_50px_-15px_rgba(92,92,255,0.12)]
        hover:shadow-[0_25px_60px_-15px_rgba(92,92,255,0.2)]
        transition-all duration-500
        overflow-hidden
      `}
    >
      {/* Badge */}
      {feature.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span
            className="
              inline-flex items-center gap-1
              px-3 py-1.5
              text-xs font-bold
              uppercase tracking-wider
              rounded-full
              bg-[#5C5CFF] text-white
              shadow-[0_4px_15px_-3px_rgba(92,92,255,0.5)]
            "
          >
            <span>♥</span>
            {feature.badge}
          </span>
        </div>
      )}

      <div className={`relative z-10 ${isFeatured ? 'p-8' : 'p-6'}`}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          <div
            className={`
              ${isFeatured ? 'w-14 h-14' : 'w-12 h-12'}
              bg-[#5C5CFF]/10
              group-hover:bg-[#5C5CFF]/15
              rounded-2xl
              flex items-center justify-center
              group-hover:scale-110
              transition-all duration-300
            `}
          >
            <span className={isFeatured ? 'text-3xl' : 'text-2xl'}>{feature.icon}</span>
          </div>
          <div>
            <h3 className={`${isFeatured ? 'text-xl' : 'text-lg'} font-black text-[#2B3259] tracking-[-0.02em]`}>
              {feature.name}
            </h3>
          </div>
        </div>

        {/* Love Metric */}
        <div className="flex items-baseline gap-2 mb-4">
          <span
            className="
              text-[#5C5CFF]
              group-hover:animate-pulse
              transition-all duration-300
            "
          >
            ♥
          </span>
          <span className={`${isFeatured ? 'text-3xl' : 'text-2xl'} font-black text-[#5C5CFF]`}>
            {feature.loveMetric}
          </span>
          <span className="text-sm text-[#2B3259]/60">
            {feature.loveLabel}
          </span>
        </div>

        {/* Testimonial */}
        <div
          className="
            p-4
            bg-[#5C5CFF]/5
            group-hover:bg-[#5C5CFF]/8
            rounded-2xl
            border border-[#5C5CFF]/10
            transition-all duration-300
            mb-4
          "
        >
          <p className={`${isFeatured ? 'text-base' : 'text-sm'} text-[#2B3259]/80 italic leading-relaxed`}>
            &ldquo;{feature.testimonial}&rdquo;
          </p>
          <div className="flex items-center gap-2 mt-3">
            {/* Avatar */}
            <div
              className="
                w-8 h-8
                bg-gradient-to-br from-[#5C5CFF]/30 to-[#5C5CFF]/10
                rounded-full
                flex items-center justify-center
                text-xs font-bold text-[#5C5CFF]
              "
            >
              {feature.testimonialAuthor.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2B3259]">
                {feature.testimonialAuthor}
              </p>
              <p className="text-xs text-[#2B3259]/50">{feature.testimonialRole}</p>
            </div>
          </div>
        </div>

        {/* Satisfaction Bar */}
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-[#2B3259]/50">Satisfação</span>
            <span className="font-semibold text-[#5C5CFF]">{feature.satisfactionPercent}%</span>
          </div>
          <div className="h-2 bg-[#2B3259]/10 rounded-full overflow-hidden">
            <div
              className="
                h-full
                bg-gradient-to-r from-[#5C5CFF] to-[#5C5CFF]/80
                rounded-full
                transition-all duration-700
                group-hover:from-[#5C5CFF] group-hover:to-[#5C5CFF]
              "
              style={{ width: `${feature.satisfactionPercent}%` }}
            />
          </div>
          <div className="flex justify-end mt-1">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`
                    text-xs
                    ${star <= Math.round(feature.satisfactionPercent / 20)
                      ? 'text-[#5C5CFF]'
                      : 'text-[#2B3259]/20'
                    }
                  `}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

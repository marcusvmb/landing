/**
 * SEGMENTATION SECTION V4: SOCIAL PROOF
 *
 * Frame Cognitivo: "Investidores e assessores já escolheram"
 *
 * ASCII Layout:
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │                         EYEBROW BADGE                                │
 * │                                                                      │
 * │           "Quem Já Esta Usando o Nexus Leilões?"                    │
 * │                          (headline)                                  │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │                                                                      │
 * │  ┌────────────────────────────┐    ┌─────────────────────────────┐  │
 * │  │      INVESTIDORES PF       │    │     ASSESSORES DE LEILAO   │  │
 * │  │      ───────────────       │    │     ─────────────────       │  │
 * │  │                            │    │                              │  │
 * │  │  ┌──────────────────────┐  │    │  ┌───────────────────────┐  │  │
 * │  │  │  [AVATAR] [AVATAR]   │  │    │  │  [AVATAR] [AVATAR]    │  │  │
 * │  │  │  [AVATAR] [AVATAR]   │  │    │  │  [AVATAR] [AVATAR]    │  │  │
 * │  │  │     +347 outros      │  │    │  │     +89 outros        │  │  │
 * │  │  └──────────────────────┘  │    │  └───────────────────────┘  │  │
 * │  │                            │    │                              │  │
 * │  │  ★★★★★ 4.9 (127 reviews)  │    │  ★★★★★ 4.8 (43 reviews)     │  │
 * │  │                            │    │                              │  │
 * │  │  "O Nexus mudou minha      │    │  "Minha produtividade        │  │
 * │  │   forma de investir..."    │    │   triplicou com o Nexus..."  │  │
 * │  │   — Joao M., SP            │    │   — Maria S., RJ             │  │
 * │  │                            │    │                              │  │
 * │  │  BENEFICIOS MAIS CITADOS:  │    │  BENEFICIOS MAIS CITADOS:   │  │
 * │  │  ✓ Economia de tempo       │    │  ✓ Gestao multi-cliente      │  │
 * │  │  ✓ Calculos precisos       │    │  ✓ Relatorios profissionais  │  │
 * │  │  ✓ Organização             │    │  ✓ Controle de comissoes     │  │
 * │  │  ✓ Decisões confiantes     │    │  ✓ Clientes satisfeitos      │  │
 * │  │                            │    │                              │  │
 * │  │  ┌────────────────────┐    │    │  ┌─────────────────────┐    │  │
 * │  │  │ JUNTAR-SE A ELES   │    │    │  │ JUNTAR-SE A ELES    │    │  │
 * │  │  └────────────────────┘    │    │  └─────────────────────┘    │  │
 * │  └────────────────────────────┘    └─────────────────────────────┘  │
 * │          ↑ col-span-6                      ↑ col-span-6             │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * Grid Structure: 12 cols (simetrico com offset vertical)
 * - Investidores card: col-span-6
 * - Assessores card: col-span-6 com mt-8
 *
 * Visual Elements:
 * - Avatar stacks com fotos (placeholders)
 * - Contador animado de usuarios
 * - Star ratings
 * - Mini-testimonials com foto e nome
 * - Lista de beneficios mais citados
 *
 * Hover States:
 * - Avatar stack expande mostrando mais avatars
 * - Card eleva com glow
 * - Contador pisca
 */

const investidorStats = {
  userCount: 347,
  rating: 4.9,
  reviewCount: 127,
  testimonial: {
    quote:
      'O Nexus mudou completamente minha forma de investir em leilões. Encontro oportunidades que antes passavam despercebidas.',
    author: 'Joao M.',
    location: 'Sao Paulo, SP',
    avatar: 'JM',
  },
  topBenefits: [
    'Encontre oportunidades antes da concorrência',
    'Calcule o ROI real antes de arrematar',
    'Organize todos os seus leilões em um só lugar',
    'Tome decisões com confiança',
  ],
};

const assessorStats = {
  userCount: 89,
  rating: 4.8,
  reviewCount: 43,
  testimonial: {
    quote:
      'Minha produtividade triplicou. Consigo atender mais clientes com muito mais qualidade nos relatorios.',
    author: 'Maria S.',
    location: 'Rio de Janeiro, RJ',
    avatar: 'MS',
  },
  topBenefits: [
    'Gerencie multiplos clientes em um painel',
    'Gere relatorios profissionais com sua marca',
    'Acompanhe comissoes e resultados',
    'Impressione clientes com análises detalhadas',
  ],
};

export default function SegmentationSocialProof() {
  return (
    <section
      className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="segmentation-proof-heading"
    >
      {/* Subtle confetti-like particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              backgroundColor: i % 2 === 0 ? '#5C5CFF' : '#5C5CFF',
              left: `${5 + (i * 5) % 90}%`,
              top: `${10 + (i * 7) % 80}%`,
            }}
          />
        ))}
      </div>

      {/* Glows */}
      <div
        className="
          absolute top-1/4 left-1/4
          w-[500px] h-[500px]
          bg-[#5C5CFF]/6
          rounded-full
          blur-[150px]
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute bottom-1/4 right-1/4
          w-[500px] h-[500px]
          bg-[#5C5CFF]/6
          rounded-full
          blur-[150px]
        "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span
            className="
              inline-flex items-center gap-3
              px-5 py-2.5
              bg-white/80
              backdrop-blur-sm
              rounded-full
              border border-[#2B3259]/10
              shadow-[0_8px_30px_-15px_rgba(43,50,89,0.1)]
            "
          >
            {/* Mini avatar stack */}
            <div className="flex -space-x-2">
              {['bg-[#5C5CFF]', 'bg-[#FF7A00]', 'bg-[#2B3259]'].map(
                (bg, i) => (
                  <div
                    key={i}
                    className={`
                    w-6 h-6
                    ${bg}
                    rounded-full
                    border-2 border-white
                    flex items-center justify-center
                    text-[8px] font-bold text-white
                  `}
                  >
                    {['JM', 'MS', 'PL'][i]}
                  </div>
                )
              )}
            </div>
            <span className="text-sm font-semibold text-[#2B3259]">
              +436 profissionais já usam
            </span>
          </span>
        </div>

        {/* Headline */}
        <h2
          id="segmentation-proof-heading"
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
          Quem Já Esta{' '}
          <span className="text-[#5C5CFF]">Usando</span> o{' '}
          <span className="text-[#5C5CFF]">Nexus</span>?
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Investidores e assessores de todo o Brasil já escolheram o Nexus como
          sua ferramenta principal.{' '}
          <span className="font-semibold text-[#2B3259]">
            Veja o que eles dizem.
          </span>
        </p>

        {/* Persona Cards - Social Proof Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Investidores Card */}
          <div className="lg:col-span-6">
            <SocialProofCard
              persona="investidor"
              title="Investidores PF"
              stats={investidorStats}
              primaryColor="#5C5CFF"
              ctaText="Juntar-se aos Investidores"
            />
          </div>

          {/* Assessores Card */}
          <div className="lg:col-span-6 lg:mt-12">
            <SocialProofCard
              persona="assessor"
              title="Assessores de Leilão"
              stats={assessorStats}
              primaryColor="#5C5CFF"
              ctaText="Juntar-se aos Assessores"
            />
          </div>
        </div>

        {/* Combined Stats */}
        <div
          className="
            mt-16
            grid grid-cols-2 md:grid-cols-4 gap-4
          "
        >
          {[
            { value: '436+', label: 'Usuarios Ativos', color: '#5C5CFF' },
            { value: '4.9', label: 'Avaliação Media', color: '#5C5CFF' },
            { value: 'R$2.3M', label: 'Em Negocios Analisados', color: '#5C5CFF' },
            { value: '98%', label: 'Taxa de Satisfação', color: '#5C5CFF' },
          ].map((stat, index) => (
            <div
              key={index}
              className="
                p-5
                bg-white/70 backdrop-blur-sm
                rounded-2xl
                border border-[#2B3259]/5
                text-center
                hover:shadow-lg
                transition-shadow duration-300
              "
            >
              <p
                className="text-2xl md:text-3xl font-black"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-[#2B3259]/50 mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface SocialProofCardProps {
  persona: 'investidor' | 'assessor';
  title: string;
  stats: {
    userCount: number;
    rating: number;
    reviewCount: number;
    testimonial: {
      quote: string;
      author: string;
      location: string;
      avatar: string;
    };
    topBenefits: string[];
  };
  primaryColor: string;
  ctaText: string;
}

function SocialProofCard({
  title,
  stats,
  primaryColor,
  ctaText,
}: SocialProofCardProps) {
  const isInvestidor = primaryColor === '#5C5CFF';

  return (
    <article
      className="
        group
        relative
        bg-white/90 backdrop-blur-sm
        rounded-3xl
        border border-[#2B3259]/10
        hover:border-opacity-20
        shadow-[0_20px_60px_-15px_rgba(43,50,89,0.1)]
        transition-all duration-500
        overflow-hidden
        h-full
      "
    >
      {/* Hover glow */}
      <div
        className="
          absolute -top-20 -right-20
          w-48 h-48
          rounded-full
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
        style={{ backgroundColor: `${primaryColor}20` }}
        aria-hidden="true"
      />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3
              className="text-2xl font-black tracking-[-0.02em]"
              style={{ color: primaryColor }}
            >
              {title}
            </h3>
            <p className="text-sm text-[#2B3259]/50 mt-1">
              {isInvestidor ? 'Pessoas fisicas' : 'Profissionais'}
            </p>
          </div>

          {/* User Counter */}
          <div
            className="
              px-4 py-2
              rounded-full
              text-white
              font-bold text-sm
              shadow-lg
            "
            style={{
              backgroundColor: primaryColor,
              boxShadow: `0 8px 20px -5px ${primaryColor}50`,
            }}
          >
            +{stats.userCount}
          </div>
        </div>

        {/* Avatar Stack */}
        <div className="mb-6">
          <div className="flex items-center gap-4">
            {/* Avatars */}
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="
                    w-10 h-10
                    rounded-full
                    border-3 border-white
                    flex items-center justify-center
                    text-xs font-bold text-white
                    shadow-sm
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                  "
                  style={{
                    backgroundColor: primaryColor,
                    opacity: 1 - i * 0.15,
                    zIndex: 5 - i,
                    transitionDelay: `${i * 30}ms`,
                  }}
                >
                  {['JM', 'MS', 'PL', 'AC', 'RF'][i]}
                </div>
              ))}
              {/* More indicator */}
              <div
                className="
                  w-10 h-10
                  rounded-full
                  bg-[#EFF0F0]
                  border-3 border-white
                  flex items-center justify-center
                  text-xs font-bold text-[#2B3259]/60
                  shadow-sm
                "
              >
                +{stats.userCount - 5}
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="text-lg"
                    style={{ color: i < Math.floor(stats.rating) ? '#FBBF24' : '#E5E7EB' }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-[#2B3259]">
                {stats.rating}
              </span>
              <span className="text-sm text-[#2B3259]/40">
                ({stats.reviewCount} avaliacoes)
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div
          className="
            p-5 mb-6
            bg-[#EFF0F0]/50
            rounded-2xl
            border-l-4
          "
          style={{ borderLeftColor: primaryColor }}
        >
          <p className="text-sm text-[#2B3259]/80 italic leading-relaxed">
            &ldquo;{stats.testimonial.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div
              className="
                w-8 h-8
                rounded-full
                flex items-center justify-center
                text-xs font-bold text-white
              "
              style={{ backgroundColor: primaryColor }}
            >
              {stats.testimonial.avatar}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2B3259]">
                {stats.testimonial.author}
              </p>
              <p className="text-xs text-[#2B3259]/50">
                {stats.testimonial.location}
              </p>
            </div>
          </div>
        </div>

        {/* Top Benefits */}
        <div className="mb-6">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: primaryColor }}
          >
            Beneficios mais citados
          </p>
          <ul className="space-y-2">
            {stats.topBenefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-[#2B3259]/70"
              >
                <span
                  className="mt-0.5 font-bold"
                  style={{ color: primaryColor }}
                >
                  &#10003;
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="
            w-full
            font-bold text-base
            text-white
            px-6 py-4
            rounded-xl
            transition-all duration-300
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:-translate-y-0.5
            active:translate-y-0 active:scale-[0.98]
            cursor-pointer
          "
          style={{
            backgroundColor: primaryColor,
            boxShadow: `0 12px 35px -10px ${primaryColor}50`,
          }}
        >
          {ctaText}
        </button>

        <p className="mt-3 text-center text-xs text-[#2B3259]/40">
          Garanta seu lugar na lista VIP
        </p>
      </div>
    </article>
  );
}

/**
 * SEGMENTATION SECTION V3: AUTHORITY
 *
 * Frame Cognitivo: "A ferramenta profissional para cada perfil"
 *
 * ASCII Layout:
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │                         EYEBROW BADGE                                │
 * │                                                                      │
 * │          "Ferramentas Profissionais Para Cada Perfil"               │
 * │                          (headline)                                  │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │                                                                      │
 * │  ┌─────────────────────────────────────────────────────────────────┐│
 * │  │                                                                 ││
 * │  │   ┌───────────────────────┐     ┌───────────────────────────┐  ││
 * │  │   │  ┌─────┐              │     │  ┌─────┐                  │  ││
 * │  │   │  │ PRO │ INVESTIDOR   │     │  │ PRO │ ASSESSOR         │  ││
 * │  │   │  └─────┘  EDITION     │     │  └─────┘  EDITION         │  ││
 * │  │   │                       │     │                           │  ││
 * │  │   │  ╔═══════════════╗    │     │  ╔═══════════════════╗    │  ││
 * │  │   │  ║   [ICON]      ║    │     │  ║   [ICON]          ║    │  ││
 * │  │   │  ║   Feature 1   ║    │     │  ║   Feature 1       ║    │  ││
 * │  │   │  ╚═══════════════╝    │     │  ╚═══════════════════╝    │  ││
 * │  │   │  ╔═══════════════╗    │     │  ╔═══════════════════╗    │  ││
 * │  │   │  ║   [ICON]      ║    │     │  ║   [ICON]          ║    │  ││
 * │  │   │  ║   Feature 2   ║    │     │  ║   Feature 2       ║    │  ││
 * │  │   │  ╚═══════════════╝    │     │  ╚═══════════════════╝    │  ││
 * │  │   │  ...                  │     │  ...                      │  ││
 * │  │   │                       │     │                           │  ││
 * │  │   │  [ACESSAR VERSAO PRO] │     │  [ACESSAR VERSAO PRO]     │  ││
 * │  │   └───────────────────────┘     └───────────────────────────┘  ││
 * │  │         ↑ col-span-6                  ↑ col-span-6             ││
 * │  │         (slight left offset)          (slight right offset)    ││
 * │  └─────────────────────────────────────────────────────────────────┘│
 * │                                                                      │
 * │  ┌──────────────────────────────────────────────────────────────┐   │
 * │  │  [SELO]  Tecnologia de ponta para profissionais exigentes    │   │
 * │  └──────────────────────────────────────────────────────────────┘   │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * Grid Structure: 12 cols
 * - Investidores card: col-span-6 com ml-4 (offset left)
 * - Assessores card: col-span-6 com mr-4 (offset right)
 * - Cards com borda grossa e visual "premium"
 *
 * Visual Elements:
 * - Badges "PRO" proeminentes em cada card
 * - Icones grandes e bold
 * - Tipografia pesada (font-black)
 * - Selo de qualidade na base
 * - Bordas definidas com shadows intensos
 *
 * Hover States:
 * - Badge PRO pulsa
 * - Card eleva significativamente
 * - Features fazem slide in sutil
 */

const investidorFeatures = [
  {
    icon: '🔍',
    title: 'Busca Unificada',
    desc: 'Encontre oportunidades antes da concorrência',
  },
  {
    icon: '🧮',
    title: 'Calculadora Multi-Cenario',
    desc: 'Calcule o ROI real antes de arrematar',
  },
  {
    icon: '📊',
    title: 'Dashboard Centralizado',
    desc: 'Organize todos os seus leilões em um só lugar',
  },
  {
    icon: '📋',
    title: 'Relatorios PDF',
    desc: 'Tome decisões com confiança',
  },
];

const assessorFeatures = [
  {
    icon: '👥',
    title: 'Painel Multi-Cliente',
    desc: 'Gerencie multiplos clientes em um painel',
  },
  {
    icon: '📄',
    title: 'PDFs com Sua Marca',
    desc: 'Gere relatorios profissionais personalizados',
  },
  {
    icon: '💰',
    title: 'Controle de Comissoes',
    desc: 'Acompanhe comissoes e resultados',
  },
  {
    icon: '📈',
    title: 'Análises Avancadas',
    desc: 'Impressione clientes com dados detalhados',
  },
];

export default function SegmentationAuthority() {
  return (
    <section
      className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="segmentation-authority-heading"
    >
      {/* Subtle grid pattern */}
      <div
        className="
          absolute inset-0
          opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(#2B3259 1px, transparent 1px),
            linear-gradient(90deg, #2B3259 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Premium glows */}
      <div
        className="
          absolute top-1/3 left-1/4
          w-[400px] h-[400px]
          bg-[#5C5CFF]/8
          rounded-full
          blur-[120px]
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute bottom-1/3 right-1/4
          w-[400px] h-[400px]
          bg-[#FF7A00]/8
          rounded-full
          blur-[120px]
        "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span
            className="
              inline-flex items-center gap-3
              px-6 py-3
              bg-white/80
              backdrop-blur-sm
              rounded-full
              border border-[#2B3259]/10
              shadow-[0_10px_40px_-15px_rgba(43,50,89,0.15)]
            "
          >
            <span
              className="
                px-2.5 py-1
                bg-gradient-to-r from-[#5C5CFF] to-[#FF7A00]
                rounded-md
                text-[10px] font-black text-white
                uppercase tracking-widest
              "
            >
              PRO
            </span>
            <span className="text-sm font-semibold text-[#2B3259] uppercase tracking-wider">
              Ferramentas Profissionais
            </span>
          </span>
        </div>

        {/* Headline */}
        <h2
          id="segmentation-authority-heading"
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
          A Ferramenta <span className="text-[#5C5CFF]">Profissional</span>
          <br className="hidden sm:block" />
          Para Cada <span className="text-[#FF7A00]">Perfil</span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Recursos especializados que atendem exatamente o que você precisa.{' '}
          <span className="font-semibold text-[#2B3259]">
            Qualidade profissional, independente do seu perfil.
          </span>
        </p>

        {/* Persona Cards - Premium Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Investidores Card */}
          <div className="lg:col-span-6 lg:pr-4">
            <AuthorityCard
              persona="investidor"
              title="Investidor"
              edition="Pro Edition"
              features={investidorFeatures}
              ctaText="Acessar Versao Pro"
              primaryColor="#5C5CFF"
            />
          </div>

          {/* Assessores Card */}
          <div className="lg:col-span-6 lg:pl-4 lg:mt-12">
            <AuthorityCard
              persona="assessor"
              title="Assessor"
              edition="Pro Edition"
              features={assessorFeatures}
              ctaText="Acessar Versao Pro"
              primaryColor="#FF7A00"
            />
          </div>
        </div>

        {/* Quality Seal */}
        <div
          className="
            mt-16
            flex flex-col sm:flex-row items-center justify-center gap-6
            p-6
            bg-white/60 backdrop-blur-sm
            rounded-2xl
            border border-[#2B3259]/5
          "
        >
          {/* Seal Icon */}
          <div
            className="
              w-16 h-16
              bg-gradient-to-br from-[#5C5CFF] to-[#FF7A00]
              rounded-2xl
              flex items-center justify-center
              shadow-[0_10px_30px_-10px_rgba(92,92,255,0.3)]
            "
          >
            <span className="text-3xl">🏆</span>
          </div>

          <div className="text-center sm:text-left">
            <p className="font-black text-[#2B3259] text-lg">
              Tecnologia de Ponta Para Profissionais Exigentes
            </p>
            <p className="text-sm text-[#2B3259]/50 mt-1">
              Desenvolvido com base em anos de experiência no mercado de leilões
              imobiliarios
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex gap-3">
            {['SSL', '99.9%', '24/7'].map((badge) => (
              <div
                key={badge}
                className="
                  px-3 py-2
                  bg-[#2B3259]/5
                  rounded-lg
                  text-xs font-bold text-[#2B3259]/60
                "
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface AuthorityCardProps {
  persona: 'investidor' | 'assessor';
  title: string;
  edition: string;
  features: { icon: string; title: string; desc: string }[];
  ctaText: string;
  primaryColor: string;
}

function AuthorityCard({
  title,
  edition,
  features,
  ctaText,
  primaryColor,
}: AuthorityCardProps) {
  return (
    <article
      className="
        group
        relative
        bg-white
        rounded-3xl
        border-2 border-[#2B3259]/10
        hover:border-opacity-20
        shadow-[0_25px_80px_-20px_rgba(43,50,89,0.15)]
        transition-all duration-500
        overflow-hidden
        h-full
      "
      style={{
        // @ts-expect-error - CSS custom property
        '--card-color': primaryColor,
      }}
    >
      {/* Premium Corner Accent */}
      <div
        className="
          absolute top-0 right-0
          w-32 h-32
          opacity-10
          group-hover:opacity-20
          transition-opacity duration-500
        "
        style={{
          background: `linear-gradient(135deg, ${primaryColor} 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 p-8">
        {/* Header with PRO Badge */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-3">
              {/* PRO Badge */}
              <span
                className="
                  px-3 py-1.5
                  rounded-lg
                  text-xs font-black text-white
                  uppercase tracking-widest
                  shadow-lg
                  group-hover:animate-pulse
                "
                style={{
                  backgroundColor: primaryColor,
                  boxShadow: `0 8px 20px -5px ${primaryColor}50`,
                }}
              >
                PRO
              </span>
              <h3 className="text-2xl font-black text-[#2B3259] tracking-[-0.02em]">
                {title}
              </h3>
            </div>
            <p
              className="text-sm font-semibold mt-1 uppercase tracking-widest"
              style={{ color: primaryColor }}
            >
              {edition}
            </p>
          </div>

          {/* Decorative Icon */}
          <div
            className="
              w-14 h-14
              rounded-2xl
              flex items-center justify-center
              transition-transform duration-300
              group-hover:scale-110 group-hover:rotate-3
            "
            style={{ backgroundColor: `${primaryColor}10` }}
          >
            <span className="text-2xl">
              {primaryColor === '#5C5CFF' ? '💼' : '🎯'}
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                flex items-start gap-4
                p-4
                bg-[#EFF0F0]/50
                rounded-2xl
                border border-transparent
                hover:border-[#2B3259]/5
                transition-all duration-300
                group-hover:translate-x-1
              "
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Feature Icon */}
              <div
                className="
                  w-12 h-12
                  rounded-xl
                  flex items-center justify-center
                  flex-shrink-0
                  shadow-sm
                "
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <span className="text-xl">{feature.icon}</span>
              </div>

              {/* Feature Content */}
              <div>
                <h4 className="font-bold text-[#2B3259]">{feature.title}</h4>
                <p className="text-sm text-[#2B3259]/60 mt-0.5">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button
            type="button"
            className="
              w-full
              font-black text-base
              text-white
              px-6 py-5
              rounded-2xl
              transition-all duration-300
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:-translate-y-1
              active:translate-y-0 active:scale-[0.98]
              cursor-pointer
              uppercase tracking-wider
            "
            style={{
              backgroundColor: primaryColor,
              boxShadow: `0 15px 40px -10px ${primaryColor}50`,
            }}
          >
            {ctaText}
          </button>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#2B3259]/40">
            <span className="flex items-center gap-1">
              <span style={{ color: primaryColor }}>&#10003;</span>
              Acesso VIP
            </span>
            <span className="flex items-center gap-1">
              <span style={{ color: primaryColor }}>&#10003;</span>
              Desconto Exclusivo
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

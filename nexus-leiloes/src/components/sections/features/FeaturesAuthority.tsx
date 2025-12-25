/**
 * FEATURES SECTION V3: AUTHORITY
 *
 * Frame Cognitivo: "O único que oferece tudo isso"
 *
 * ASCII Layout - Bento Grid Assimetrico:
 * ┌─────────────────────────────────────────────────────────────┐
 * │                      EYEBROW BADGE                          │
 * │                                                             │
 * │            "O Ànico Hub Completo do Brasil"                │
 * │                       (headline)                            │
 * ├─────────────────────────────────────────────────────────────┤
 * │                                                             │
 * │  ┌───────────────────────────────┐  ┌───────────────────┐  │
 * │  │                               │  │                   │  │
 * │  │  [🔍] BUSCA UNIFICADA        │  │  [📄] RELATORIOS  │  │
 * │  │                               │  │                   │  │
 * │  │  +20 sites em 1 busca        │  │  [PROFISSIONAL]   │  │
 * │  │                               │  │                   │  │
 * │  │  col-span-7                   │  │  col-span-5       │  │
 * │  │  row-span-2                   │  └───────────────────┘  │
 * │  │                               │                         │
 * │  │  [UNICO]                      │  ┌───────────────────┐  │
 * │  │                               │  │                   │  │
 * │  └───────────────────────────────┘  │  [📊] DASHBOARD   │  │
 * │                                     │                   │  │
 * │  ┌───────────────────────────────┐  │  [COMPLETO]       │  │
 * │  │                               │  │                   │  │
 * │  │  [🧮] CALCULADORA             │  └───────────────────┘  │
 * │  │       MULTI-CENARIO           │                         │
 * │  │                               │                         │
 * │  │  5 cenarios, precisão total   │                         │
 * │  │                               │                         │
 * │  │  [★ EXCLUSIVO - SÓ AQUI ★]    │                         │
 * │  │                               │                         │
 * │  │  col-span-7, DESTAQUE MAXIMO  │                         │
 * │  └───────────────────────────────┘                         │
 * │                                                             │
 * │  ┌────────────────┐  ┌────────────────────────────────┐    │
 * │  │                │  │                                │    │
 * │  │  [🏠] OCUPANTES│  │  [👥] FERRAMENTAS ASSESSORES   │    │
 * │  │                │  │                                │    │
 * │  │  col-span-4    │  │  col-span-8                    │    │
 * │  │                │  │  [PARA ASSESSORES]             │    │
 * │  └────────────────┘  └────────────────────────────────┘    │
 * └─────────────────────────────────────────────────────────────┘
 *
 * Grid Structure: 12 cols
 * - Row 1: Busca (col-span-7, row-span-2) + Relatorios (col-span-5)
 * - Row 2: (Busca continues) + Dashboard (col-span-5)
 * - Row 3: Calculadora (col-span-7) - FEATURED
 * - Row 4: Ocupantes (col-span-4) + Assessores (col-span-8)
 *
 * Visual Elements:
 * - Bold typography with badges
 * - "UNICO", "EXCLUSIVO", "SÓ AQUI" badges
 * - Asymmetric bento layout
 * - Featured card with ring/glow effect
 *
 * Hover States:
 * - Cards lift with premium shadow
 * - Badge pulses
 * - Content slightly scales
 */

const authorityFeatures = [
  {
    id: 'busca',
    icon: '🔍',
    name: 'Busca Unificada',
    headline: '+20 sites de leiloeiros',
    description: 'Em uma única busca poderosa. Não existe outra ferramenta que agregue tantas fontes.',
    badge: 'UNICO',
    badgeStyle: 'primary',
    gridClass: 'col-span-12 md:col-span-7 md:row-span-2',
    size: 'large',
  },
  {
    id: 'relatorios',
    icon: '📄',
    name: 'Relatórios PDF',
    headline: 'Documentos Profissionais',
    description: 'Prontos para impressionar clientes e parceiros.',
    badge: 'PROFISSIONAL',
    badgeStyle: 'secondary',
    gridClass: 'col-span-12 md:col-span-5',
    size: 'medium',
  },
  {
    id: 'dashboard',
    icon: '📊',
    name: 'Dashboard Unificado',
    headline: 'Pipeline Visual Completo',
    description: 'Todas as oportunidades em um só lugar.',
    badge: 'COMPLETO',
    badgeStyle: 'secondary',
    gridClass: 'col-span-12 md:col-span-5',
    size: 'medium',
  },
  {
    id: 'calculadora',
    icon: '🧮',
    name: 'Calculadora Multi-Cenario',
    headline: '5 Cenários de Investimento',
    description: 'Simule otimista, conservador, pessimista e mais. Precisão total antes de dar qualquer lance.',
    badge: 'EXCLUSIVO - SÓ AQUI',
    badgeStyle: 'featured',
    gridClass: 'col-span-12 md:col-span-7',
    size: 'featured',
  },
  {
    id: 'ocupantes',
    icon: '🏠',
    name: 'Dados de Ocupantes',
    headline: 'Consulta Prévia',
    description: 'Saiba a situação do imóvel antes do arremate.',
    badge: null,
    badgeStyle: null,
    gridClass: 'col-span-12 md:col-span-4',
    size: 'small',
  },
  {
    id: 'assessores',
    icon: '👥',
    name: 'Ferramentas para Assessores',
    headline: 'Gestão Multi-Cliente',
    description: 'Organize o portfolio de todos os seus clientes em um só painel profissional.',
    badge: 'PARA ASSESSORES',
    badgeStyle: 'secondary',
    gridClass: 'col-span-12 md:col-span-8',
    size: 'medium',
  },
];

export default function FeaturesAuthority() {
  return (
    <section
      className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="features-authority-heading"
    >
      {/* Background Glows */}
      <div
        className="
          absolute top-1/4 left-0
          w-[600px] h-[600px]
          bg-[#5C5CFF]/10
          rounded-full
          blur-[120px]
          -translate-x-1/3
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute bottom-1/4 right-0
          w-[500px] h-[500px]
          bg-[#5C5CFF]/8
          rounded-full
          blur-[100px]
          translate-x-1/3
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
              bg-[#5C5CFF]/10
              rounded-full
              border border-[#5C5CFF]/20
            "
          >
            <span className="text-lg">👑</span>
            <span className="text-sm font-bold text-[#5C5CFF] uppercase tracking-wider">
              Liderança absoluta
            </span>
          </span>
        </div>

        {/* Headline */}
        <h2
          id="features-authority-heading"
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
          O <span className="text-[#5C5CFF] relative">
            Ànico
            <span
              className="
                absolute -bottom-1 left-0 right-0
                h-1.5 bg-[#5C5CFF]/30
                rounded-full
                animate-underline-glow
              "
              aria-hidden="true"
            />
          </span>{' '}
          Hub Completo
          <br />
          Para Leilões Imobiliários
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Enquanto outras ferramentas fazem apenas uma coisa, a Nexus faz{' '}
          <strong className="text-[#2B3259]">tudo</strong>.
          Busca, análise e gestao em uma só plataforma.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {authorityFeatures.map((feature) => (
            <div key={feature.id} className={feature.gridClass}>
              <AuthorityCard feature={feature} />
            </div>
          ))}
        </div>

        {/* Authority Statement */}
        <div
          className="
            mt-16
            p-8 md:p-10
            bg-gradient-to-br from-[#5C5CFF]/10 via-white/80 to-[#5C5CFF]/5
            backdrop-blur-sm
            rounded-3xl
            border border-[#5C5CFF]/15
            shadow-[0_20px_60px_-15px_rgba(92,92,255,0.2)]
            text-center
          "
        >
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-[#5C5CFF]">6</p>
              <p className="text-sm text-[#2B3259]/60">Ferramentas</p>
            </div>
            <div className="text-[#5C5CFF]/30 text-2xl">+</div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-[#5C5CFF]">1</p>
              <p className="text-sm text-[#2B3259]/60">Plataforma</p>
            </div>
            <div className="text-[#5C5CFF]/30 text-2xl">=</div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-[#5C5CFF]">Hub Completo</p>
              <p className="text-sm text-[#2B3259]/60">Ànico no Brasil</p>
            </div>
          </div>
        </div>

        {/* Competitor Comparison */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#2B3259]/50">
            Concorrentes como Auket, Leilão Ninja e QAchado fazem apenas{' '}
            <span className="font-semibold">parte</span> disso.
            <br />
            <span className="text-[#5C5CFF] font-semibold">
              Só a Nexus faz tudo.
            </span>
          </p>
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
            Quero o Hub Completo
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">
            Acesso antecipado com desconto exclusivo para fundadores
          </p>
        </div>
      </div>
    </section>
  );
}

interface AuthorityCardProps {
  feature: {
    id: string;
    icon: string;
    name: string;
    headline: string;
    description: string;
    badge: string | null;
    badgeStyle: string | null;
    gridClass: string;
    size: string;
  };
}

function AuthorityCard({ feature }: AuthorityCardProps) {
  const isFeatured = feature.size === 'featured';
  const isLarge = feature.size === 'large';

  const getBadgeClasses = (style: string | null) => {
    switch (style) {
      case 'featured':
        return 'bg-[#5C5CFF] text-white shadow-[0_4px_20px_-4px_rgba(92,92,255,0.6)] animate-pulse';
      case 'primary':
        return 'bg-[#5C5CFF]/20 text-[#5C5CFF] border border-[#5C5CFF]/30';
      case 'secondary':
        return 'bg-[#2B3259]/10 text-[#2B3259]/70';
      default:
        return '';
    }
  };

  return (
    <article
      className={`
        group
        h-full
        relative
        bg-white/80 backdrop-blur-sm
        rounded-3xl
        border
        ${isFeatured
          ? 'border-[#5C5CFF]/30 ring-2 ring-[#5C5CFF]/20'
          : 'border-[#5C5CFF]/10 hover:border-[#5C5CFF]/20'
        }
        shadow-[0_15px_50px_-15px_rgba(92,92,255,0.12)]
        hover:shadow-[0_25px_60px_-15px_rgba(92,92,255,0.2)]
        transition-all duration-500
        overflow-hidden
      `}
    >
      {/* Featured Glow */}
      {isFeatured && (
        <div
          className="
            absolute -top-20 -right-20
            w-40 h-40
            bg-[#5C5CFF]/30
            rounded-full
            blur-3xl
          "
          aria-hidden="true"
        />
      )}

      <div
        className={`
          relative z-10
          ${isFeatured || isLarge ? 'p-8' : 'p-6'}
          h-full
          flex flex-col
        `}
      >
        {/* Badge */}
        {feature.badge && (
          <div className="mb-4">
            <span
              className={`
                inline-flex items-center gap-1
                px-3 py-1.5
                text-xs font-bold
                uppercase tracking-wider
                rounded-full
                ${getBadgeClasses(feature.badgeStyle)}
              `}
            >
              {feature.badgeStyle === 'featured' && <span>★</span>}
              {feature.badge}
              {feature.badgeStyle === 'featured' && <span>★</span>}
            </span>
          </div>
        )}

        {/* Icon + Name */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`
              ${isFeatured || isLarge ? 'w-14 h-14' : 'w-12 h-12'}
              bg-[#5C5CFF]/10
              group-hover:bg-[#5C5CFF]/15
              rounded-2xl
              flex items-center justify-center
              group-hover:scale-110
              transition-all duration-300
            `}
          >
            <span className={isFeatured || isLarge ? 'text-3xl' : 'text-2xl'}>
              {feature.icon}
            </span>
          </div>
          <h3
            className={`
              ${isFeatured ? 'text-2xl' : isLarge ? 'text-xl' : 'text-lg'}
              font-black text-[#2B3259]
              tracking-[-0.02em]
            `}
          >
            {feature.name}
          </h3>
        </div>

        {/* Content */}
        <div className="flex-1">
          <p
            className={`
              ${isFeatured ? 'text-xl' : 'text-lg'}
              font-bold text-[#5C5CFF]
              mb-2
            `}
          >
            {feature.headline}
          </p>
          <p className="text-[#2B3259]/60 leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Visual Element for Featured */}
        {isFeatured && (
          <div className="mt-6 pt-6 border-t border-[#5C5CFF]/10">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="
                      w-8 h-8
                      bg-[#5C5CFF]/10
                      border-2 border-white
                      rounded-full
                      flex items-center justify-center
                      text-xs font-bold text-[#5C5CFF]
                    "
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#2B3259]/60">
                5 cenarios para cada imóvel
              </span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

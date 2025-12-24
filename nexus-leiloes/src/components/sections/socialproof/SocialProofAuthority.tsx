/**
 * SOCIAL PROOF SECTION V3: AUTHORITY
 *
 * Frame Cognitivo: "Os maiores especialistas confiam"
 *
 * Vieses Aplicados:
 * - Authority Bias: Badges de verificacao, titulos profissionais
 * - Halo Effect: Associacao com credenciais prestigiosas
 * - Social Proof: "Se especialistas usam, deve ser bom"
 *
 * Design:
 * - Bento grid assimetrico
 * - Badges de verificacao proeminentes
 * - Visual de certificacao/selo
 * - Cards com hierarquia clara de autoridade
 */

const testimonials = [
  {
    id: 1,
    name: 'Rodrigo M.',
    role: 'Investidor Profissional',
    credentials: ['CRECI Ativo', '8+ anos em leilões'],
    quote: 'Economizei R$32.000 em 6 meses evitando erros de cálculo. A precisão da calculadora e incomparavel.',
    metric: 'R$32.000',
    metricLabel: 'economizados',
    avatar: 'RM',
    verified: true,
    featured: true,
    gridClass: 'col-span-12 lg:col-span-7 lg:row-span-2',
  },
  {
    id: 2,
    name: 'Ana Paula',
    role: 'Assessora Certificada',
    credentials: ['Top 10 Assessores SP'],
    quote: 'Triplicei minha carteira de clientes com os relatorios profissionais.',
    metric: '3x',
    metricLabel: 'mais clientes',
    avatar: 'AP',
    verified: true,
    featured: false,
    gridClass: 'col-span-12 lg:col-span-5',
  },
  {
    id: 3,
    name: 'Marcos',
    role: 'Diretor de Assessoria',
    credentials: ['Escritorio Premium', '50+ clientes ativos'],
    quote: 'Gerenciamos 50+ clientes sem contratar mais funcionarios.',
    metric: '50+',
    metricLabel: 'clientes',
    avatar: 'MC',
    verified: true,
    featured: false,
    gridClass: 'col-span-12 lg:col-span-5',
  },
  {
    id: 4,
    name: 'Julia',
    role: 'Investidora Iniciante',
    credentials: ['Primeira compra bem-sucedida'],
    quote: 'Comprei meu primeiro imóvel em leilão com total seguranca. O Nexus me deu confiança.',
    metric: '100%',
    metricLabel: 'seguranca',
    avatar: 'JL',
    verified: true,
    featured: false,
    gridClass: 'col-span-12 lg:col-span-6',
  },
];

export default function SocialProofAuthority() {
  return (
    <section className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden" aria-labelledby="social-authority-heading">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#5C5CFF]/10 rounded-full blur-[120px] -translate-x-1/4" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#5C5CFF]/8 rounded-full blur-[100px] translate-x-1/4" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Trust Badge Header */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#5C5CFF]/20 shadow-[0_10px_30px_-10px_rgba(92,92,255,0.15)]">
            <span className="w-6 h-6 bg-[#5C5CFF] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-sm font-bold text-[#2B3259] uppercase tracking-wider">Profissionais Verificados</span>
          </span>
        </div>

        {/* Headline */}
        <h2 id="social-authority-heading" className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.1] text-[#2B3259] mb-6">
          Os <span className="text-[#5C5CFF]">Especialistas</span> Confiam
        </h2>
        <p className="text-center text-lg text-[#2B3259]/60 max-w-2xl mx-auto mb-16 leading-relaxed">
          Profissionais do mercado imobiliario validam o Nexus como ferramenta essencial.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Featured Card - Rodrigo */}
          <div className={testimonials[0].gridClass}>
            <FeaturedAuthorityCard testimonial={testimonials[0]} />
          </div>

          {/* Ana Paula */}
          <div className={testimonials[1].gridClass}>
            <AuthorityCard testimonial={testimonials[1]} />
          </div>

          {/* Marcos */}
          <div className={testimonials[2].gridClass}>
            <AuthorityCard testimonial={testimonials[2]} />
          </div>

          {/* Julia - offset for asymmetry */}
          <div className={`${testimonials[3].gridClass} lg:col-start-4`}>
            <AuthorityCard testimonial={testimonials[3]} />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#5C5CFF]/10 shadow-[0_15px_40px_-15px_rgba(92,92,255,0.1)]">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <TrustIndicator icon="shield" label="100% Verificados" />
            <TrustIndicator icon="users" label="2.500+ Usuarios" />
            <TrustIndicator icon="star" label="4.9/5 Avaliação" />
            <TrustIndicator icon="lock" label="Dados Seguros" />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button type="button" className="bg-[#FF7A00] text-white font-bold text-lg px-10 py-5 rounded-full shadow-[0_15px_40px_-10px_rgba(255,122,0,0.4)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(255,122,0,0.5)] active:translate-y-0 active:scale-[0.98] cursor-pointer">
            Juntar-me aos Especialistas
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">Faca parte do grupo seleto de profissionais</p>
        </div>
      </div>
    </section>
  );
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  credentials: string[];
  quote: string;
  metric: string;
  metricLabel: string;
  avatar: string;
  verified: boolean;
  featured: boolean;
  gridClass: string;
}

function FeaturedAuthorityCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="group relative h-full bg-white/90 backdrop-blur-sm rounded-3xl border border-[#5C5CFF]/20 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.2)] hover:shadow-[0_30px_80px_-15px_rgba(92,92,255,0.3)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#5C5CFF]/15 rounded-full blur-3xl" aria-hidden="true" />

      {/* Verified Badge - Corner */}
      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#5C5CFF] rounded-full shadow-[0_4px_15px_-3px_rgba(92,92,255,0.5)]">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-bold text-white">Verificado</span>
        </div>
      </div>

      <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">
        {/* Avatar + Info */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]/80 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-[0_10px_25px_-5px_rgba(92,92,255,0.4)]">
            {testimonial.avatar}
          </div>
          <div>
            <p className="font-black text-xl text-[#2B3259]">{testimonial.name}</p>
            <p className="text-sm text-[#5C5CFF] font-semibold">{testimonial.role}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {testimonial.credentials.map((cred, i) => (
                <span key={i} className="px-2 py-1 bg-[#5C5CFF]/10 rounded text-xs font-medium text-[#5C5CFF]">{cred}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="flex-1 text-xl md:text-2xl font-bold text-[#2B3259] leading-snug mb-8">"{testimonial.quote}"</blockquote>

        {/* Metric */}
        <div className="pt-6 border-t border-[#5C5CFF]/10">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-[#5C5CFF]">{testimonial.metric}</span>
            <span className="text-lg text-[#2B3259]/60">{testimonial.metricLabel}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function AuthorityCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="group relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-[#5C5CFF]/10 shadow-[0_15px_40px_-15px_rgba(92,92,255,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(92,92,255,0.2)] hover:border-[#5C5CFF]/20 hover:-translate-y-1 transition-all duration-400 overflow-hidden">
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#5C5CFF]/15 rounded-xl flex items-center justify-center text-[#5C5CFF] font-bold">
              {testimonial.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-[#2B3259]">{testimonial.name}</p>
                {testimonial.verified && (
                  <svg className="w-4 h-4 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <p className="text-sm text-[#2B3259]/60">{testimonial.role}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-black text-[#5C5CFF]">{testimonial.metric}</p>
            <p className="text-xs text-[#2B3259]/50">{testimonial.metricLabel}</p>
          </div>
        </div>

        {/* Credentials */}
        <div className="flex flex-wrap gap-2 mb-4">
          {testimonial.credentials.map((cred, i) => (
            <span key={i} className="px-2 py-1 bg-[#5C5CFF]/8 rounded text-xs font-medium text-[#5C5CFF]/80">{cred}</span>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="flex-1 text-[#2B3259]/80 leading-relaxed">"{testimonial.quote}"</blockquote>
      </div>
    </article>
  );
}

function TrustIndicator({ icon, label }: { icon: string; label: string }) {
  const getIcon = () => {
    switch (icon) {
      case 'shield':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'users':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        );
      case 'star':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      case 'lock':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-[#5C5CFF]/10 rounded-full flex items-center justify-center text-[#5C5CFF]">
        {getIcon()}
      </div>
      <span className="text-sm font-semibold text-[#2B3259]">{label}</span>
    </div>
  );
}

'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * SOCIAL PROOF SECTION V1: LOSS AVERSION
 *
 * Frame Cognitivo: "Eles quase perderam tudo... ate descobrirem a Nexus"
 *
 * Vieses Aplicados:
 * - Loss Aversion: Testimonials focados em perdas evitadas
 * - Anchoring: Numeros de economia em destaque (R$32.000)
 * - Social Proof: "Se outros evitaram perdas, eu também posso"
 *
 * Design:
 * - Cards flutuantes com offsets assimetricos
 * - Aspas gigantes (text-8xl) como elemento visual
 * - Valores em destaque com glow effect
 * - Layout 7/5 assimetrico
 */

const testimonials = [
  {
    id: 1,
    name: 'Rodrigo M.',
    role: 'Investidor PF',
    quote: 'Recuperei 15 horas por semana que perdia alternando entre sites e planilhas',
    lossAvoided: '15h/sem',
    lossContext: 'recuperadas',
    avatar: 'RM',
    offset: '-mt-4',
  },
  {
    id: 2,
    name: 'Ana Paula',
    role: 'Assessora',
    quote: 'Triplicei minha carteira de clientes com os relatórios profissionais',
    lossAvoided: '3x',
    lossContext: 'mais clientes',
    avatar: 'AP',
    offset: 'mt-8',
  },
  {
    id: 3,
    name: 'Marcos',
    role: 'Escritório de Assessoria',
    quote: 'Gerenciamos 50+ clientes sem contratar mais funcionários',
    lossAvoided: '50+',
    lossContext: 'clientes gerenciados',
    avatar: 'MC',
    offset: 'mt-2',
  },
  {
    id: 4,
    name: 'Julia',
    role: 'Compradora Residencial',
    quote: 'Comprei meu primeiro imóvel em leilão com total segurança',
    lossAvoided: '100%',
    lossContext: 'segurança',
    avatar: 'JL',
    offset: '-mt-6',
  },
];

export default function SocialProofLossAversion() {
  const { openModal } = useLeadModal();

  return (
    <section className="bg-[#EFF0F0] py-16 lg:py-20 relative overflow-hidden" aria-labelledby="social-loss-heading">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#5C5CFF]/8 rounded-full blur-[120px] translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#5C5CFF]/6 rounded-full blur-[100px] -translate-x-1/3" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Headline - Asymmetric */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 id="social-loss-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.1] text-[#2B3259] mb-6">
              Eles <span className="text-[#5C5CFF] line-through opacity-70">quase perderam</span>
              <br />
              <span className="text-[#5C5CFF]">até descobrirem a Nexus</span>
            </h2>
            <p className="text-lg text-[#2B3259]/60 max-w-2xl mx-auto leading-relaxed">
              Veja quanto investidores como você deixaram de perder usando nossa plataforma.
            </p>
          </div>
        </div>

        {/* Testimonial Cards - Floating Asymmetric */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* Large Featured Card - Rodrigo */}
          <div className="col-span-12 lg:col-span-7 lg:-mt-4">
            <FeaturedTestimonialCard testimonial={testimonials[0]} />
          </div>

          {/* Stacked Cards Right */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            {testimonials.slice(1, 3).map((t) => (
              <div key={t.id} className={t.offset}>
                <CompactTestimonialCard testimonial={t} />
              </div>
            ))}
          </div>

          {/* Bottom Card - Julia */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 lg:-mt-4">
            <CompactTestimonialCard testimonial={testimonials[3]} />
          </div>
        </div>

        {/* Total Savings Summary */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#5C5CFF]/10 via-white/80 to-[#5C5CFF]/5 backdrop-blur-sm rounded-3xl border border-[#5C5CFF]/15 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.2)] text-center">
          <p className="text-[#2B3259]/60 text-lg mb-2">Total de horas economizadas pela comunidade:</p>
          <p className="text-4xl md:text-5xl font-black text-[#5C5CFF]">+3.000 horas</p>
          <p className="text-sm text-[#2B3259]/50 mt-2">nos últimos 12 meses</p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button type="button" onClick={openModal} className="bg-[#5C5CFF] text-white font-bold text-lg px-10 py-5 rounded-full shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.5)] active:translate-y-0 active:scale-[0.98] cursor-pointer">
            Evitar minhas perdas também
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">Junte-se aos investidores que pararam de perder dinheiro</p>
        </div>
      </div>
    </section>
  );
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  lossAvoided: string;
  lossContext: string;
  avatar: string;
  offset: string;
}

function FeaturedTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="group relative h-full bg-white/80 backdrop-blur-sm rounded-3xl border border-[#5C5CFF]/15 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)] hover:shadow-[0_30px_80px_-15px_rgba(92,92,255,0.25)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
      {/* Giant Quote Mark */}
      <div className="absolute -top-4 -left-4 text-[120px] font-black text-[#5C5CFF]/10 leading-none select-none" aria-hidden="true">"</div>

      {/* Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#5C5CFF]/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 p-8 lg:p-10">
        {/* Loss Avoided - Prominent */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#5C5CFF]/10 rounded-2xl">
            <span className="text-3xl md:text-4xl font-black text-[#5C5CFF]">{testimonial.lossAvoided}</span>
            <span className="text-sm text-[#2B3259]/60">{testimonial.lossContext}</span>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl font-bold text-[#2B3259] leading-snug mb-8">"{testimonial.quote}"</blockquote>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#5C5CFF] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-[0_8px_20px_-5px_rgba(92,92,255,0.4)]">
            {testimonial.avatar}
          </div>
          <div>
            <p className="font-bold text-[#2B3259]">{testimonial.name}</p>
            <p className="text-sm text-[#2B3259]/60">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function CompactTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-[#5C5CFF]/10 shadow-[0_15px_40px_-15px_rgba(92,92,255,0.12)] hover:shadow-[0_20px_50px_-15px_rgba(92,92,255,0.2)] hover:-translate-y-1 transition-all duration-400 overflow-hidden">
      {/* Subtle Quote */}
      <div className="absolute -top-2 -left-2 text-[60px] font-black text-[#5C5CFF]/8 leading-none select-none" aria-hidden="true">"</div>

      <div className="relative z-10 p-6">
        {/* Header with Value */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#5C5CFF]/15 rounded-full flex items-center justify-center text-[#5C5CFF] font-bold text-sm">
              {testimonial.avatar}
            </div>
            <div>
              <p className="font-bold text-[#2B3259] text-sm">{testimonial.name}</p>
              <p className="text-xs text-[#2B3259]/50">{testimonial.role}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-black text-[#5C5CFF]">{testimonial.lossAvoided}</p>
            <p className="text-xs text-[#2B3259]/50">{testimonial.lossContext}</p>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-[#2B3259]/80 leading-relaxed">"{testimonial.quote}"</blockquote>
      </div>
    </article>
  );
}

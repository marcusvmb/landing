/**
 * SOCIAL PROOF SECTION V4: BANDWAGON (SOCIAL PROOF)
 *
 * Frame Cognitivo: "Junte-se aos 2.500+ investidores"
 *
 * Vieses Aplicados:
 * - Bandwagon Effect: "Todos estão fazendo isso"
 * - FOMO: Contador de usuarios em tempo real
 * - Social Proof Numerico: Grandes numeros = validacao
 *
 * Design:
 * - Contador de usuarios com animacao
 * - Grid dinamico de avatares empilhados
 * - Cards menores em layout fluido
 * - Numeros grandes e proeminentes
 */

'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rodrigo M.',
    role: 'Investidor PF',
    quote: 'Economizei R$32.000 em 6 meses evitando erros de cálculo',
    avatar: 'RM',
    joinedDaysAgo: 180,
  },
  {
    id: 2,
    name: 'Ana Paula',
    role: 'Assessora',
    quote: 'Triplicei minha carteira de clientes com os relatorios profissionais',
    avatar: 'AP',
    joinedDaysAgo: 120,
  },
  {
    id: 3,
    name: 'Marcos',
    role: 'Escritorio de Assessoria',
    quote: 'Gerenciamos 50+ clientes sem contratar mais funcionarios',
    avatar: 'MC',
    joinedDaysAgo: 90,
  },
  {
    id: 4,
    name: 'Julia',
    role: 'Compradora Residencial',
    quote: 'Comprei meu primeiro imóvel em leilão com total seguranca',
    avatar: 'JL',
    joinedDaysAgo: 45,
  },
];

const recentJoiners = [
  { id: 1, initials: 'PS', city: 'Sao Paulo' },
  { id: 2, initials: 'MR', city: 'Rio de Janeiro' },
  { id: 3, initials: 'CF', city: 'Belo Horizonte' },
  { id: 4, initials: 'LA', city: 'Curitiba' },
  { id: 5, initials: 'TB', city: 'Brasilia' },
  { id: 6, initials: 'RG', city: 'Salvador' },
  { id: 7, initials: 'AC', city: 'Fortaleza' },
  { id: 8, initials: 'DN', city: 'Porto Alegre' },
];

export default function SocialProofBandwagon() {
  const [userCount, setUserCount] = useState(2487);
  const [activeNow, setActiveNow] = useState(127);

  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setUserCount((prev) => prev + 1);
      }
      setActiveNow(Math.floor(120 + Math.random() * 30));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden" aria-labelledby="social-bandwagon-heading">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#5C5CFF]/6 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Live Counter Header */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-col items-center gap-2 px-8 py-5 bg-white/90 backdrop-blur-sm rounded-3xl border border-[#5C5CFF]/15 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.2)]">
            {/* Stacked Avatars */}
            <div className="flex items-center gap-4 mb-2">
              <div className="flex -space-x-3">
                {recentJoiners.slice(0, 6).map((joiner, i) => (
                  <div key={joiner.id} className="w-10 h-10 bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]/70 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-[0_4px_10px_-3px_rgba(92,92,255,0.4)]" style={{ zIndex: 10 - i }}>
                    {joiner.initials}
                  </div>
                ))}
                <div className="w-10 h-10 bg-[#FF7A00] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-[0_4px_10px_-3px_rgba(255,122,0,0.4)]">
                  +{userCount - 6}
                </div>
              </div>
            </div>

            {/* Main Counter */}
            <div className="flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-black text-[#5C5CFF] tabular-nums">{userCount.toLocaleString('pt-BR')}</span>
              <span className="text-lg text-[#2B3259]/60">investidores</span>
            </div>

            {/* Live Indicator */}
            <div className="flex items-center gap-2 mt-1">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm text-[#2B3259]/60">
                <strong className="text-green-600">{activeNow}</strong> ativos agora
              </span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h2 id="social-bandwagon-heading" className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.1] text-[#2B3259] mb-6">
          Junte-se a <span className="text-[#5C5CFF]">Comunidade</span>
          <br />
          Que Não Para de Crescer
        </h2>
        <p className="text-center text-lg text-[#2B3259]/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Investidores de todo o Brasil estão migrando para o Nexus.
          Faca parte do movimento.
        </p>

        {/* Recent Activity Stream */}
        <div className="mb-12 overflow-hidden">
          <div className="flex gap-4 animate-marquee">
            {[...recentJoiners, ...recentJoiners].map((joiner, i) => (
              <div key={`${joiner.id}-${i}`} className="flex-shrink-0 flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#5C5CFF]/10">
                <div className="w-8 h-8 bg-[#5C5CFF]/15 rounded-full flex items-center justify-center text-[#5C5CFF] text-xs font-bold">
                  {joiner.initials}
                </div>
                <span className="text-sm text-[#2B3259]/70">
                  <strong className="text-[#2B3259]">{joiner.initials}</strong> de {joiner.city} entrou
                </span>
                <span className="text-xs text-[#5C5CFF] bg-[#5C5CFF]/10 px-2 py-0.5 rounded-full">agora</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Cards - Dynamic Grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Top row - 2 cards asymmetric */}
          <div className="col-span-12 md:col-span-7">
            <BandwagonCard testimonial={testimonials[0]} showJoinDate />
          </div>
          <div className="col-span-12 md:col-span-5 md:mt-8">
            <BandwagonCard testimonial={testimonials[1]} showJoinDate />
          </div>

          {/* Bottom row - 2 cards asymmetric reversed */}
          <div className="col-span-12 md:col-span-5 md:-mt-4">
            <BandwagonCard testimonial={testimonials[2]} showJoinDate />
          </div>
          <div className="col-span-12 md:col-span-7">
            <BandwagonCard testimonial={testimonials[3]} showJoinDate />
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="2.500+" label="Usuarios ativos" icon="users" />
          <StatCard value="R$24M+" label="Em leilões analisados" icon="chart" />
          <StatCard value="98%" label="Taxa de satisfação" icon="heart" />
          <StatCard value="15 min" label="Tempo medio de análise" icon="clock" />
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button type="button" className="group bg-[#FF7A00] text-white font-bold text-lg px-10 py-5 rounded-full shadow-[0_15px_40px_-10px_rgba(255,122,0,0.4)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(255,122,0,0.5)] active:translate-y-0 active:scale-[0.98] cursor-pointer">
            Fazer Parte da Comunidade
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">+47 novos membros nas ultimas 24 horas</p>
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  joinedDaysAgo: number;
}

function BandwagonCard({ testimonial, showJoinDate }: { testimonial: Testimonial; showJoinDate?: boolean }) {
  const joinText = testimonial.joinedDaysAgo > 30
    ? `Ha ${Math.floor(testimonial.joinedDaysAgo / 30)} meses`
    : `Ha ${testimonial.joinedDaysAgo} dias`;

  return (
    <article className="group h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-[#5C5CFF]/10 shadow-[0_15px_40px_-15px_rgba(92,92,255,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(92,92,255,0.2)] hover:-translate-y-1 transition-all duration-400 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]/70 rounded-full flex items-center justify-center text-white font-bold shadow-[0_6px_15px_-3px_rgba(92,92,255,0.4)]">
              {testimonial.avatar}
            </div>
            <div>
              <p className="font-bold text-[#2B3259]">{testimonial.name}</p>
              <p className="text-sm text-[#2B3259]/60">{testimonial.role}</p>
            </div>
          </div>
          {showJoinDate && (
            <span className="px-3 py-1 bg-[#5C5CFF]/10 rounded-full text-xs font-medium text-[#5C5CFF]">
              Entrou {joinText}
            </span>
          )}
        </div>

        {/* Quote */}
        <blockquote className="text-[#2B3259]/80 leading-relaxed">"{testimonial.quote}"</blockquote>
      </div>
    </article>
  );
}

function StatCard({ value, label, icon }: { value: string; label: string; icon: string }) {
  const getIcon = () => {
    switch (icon) {
      case 'users':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'heart':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        );
      case 'clock':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#5C5CFF]/10 shadow-[0_10px_30px_-10px_rgba(92,92,255,0.1)] hover:shadow-[0_15px_40px_-10px_rgba(92,92,255,0.15)] hover:-translate-y-1 transition-all duration-300 text-center">
      <div className="w-10 h-10 bg-[#5C5CFF]/10 rounded-xl flex items-center justify-center text-[#5C5CFF] mx-auto mb-3">
        {getIcon()}
      </div>
      <p className="text-2xl font-black text-[#5C5CFF]">{value}</p>
      <p className="text-sm text-[#2B3259]/60 mt-1">{label}</p>
    </div>
  );
}

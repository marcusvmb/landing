'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * FINAL CTA V4: CURIOSITY + SCARCITY + FOOTER
 *
 * Frame Cognitivo: Urgência máxima + revelação final + escassez genuína
 * Combina countdown, vagas limitadas, código de desconto e teaser final
 *
 * ASCII Layout:
 * +----------------------------------------------------------------------+
 * |                         SECTION BACKGROUND                           |
 * |              (gradient dark com aurora glow dramático)               |
 * +----------------------------------------------------------------------+
 * |                                                                      |
 * |   +------------------ COUNTDOWN DRAMATIC ------------------+         |
 * |   |     D:H:M:S grande com glow pulsante                   |        |
 * |   +--------------------------------------------------------+         |
 * |                                                                      |
 * |         HEADLINE: "Sua Última Chance de Ver Primeiro"               |
 * |         SUBHEADLINE: "Antes que todos descubram..."                 |
 * |                                                                      |
 * |   +----- col-span-5 -----+  +----- col-span-7 -----+               |
 * |   |    BENEFICIOS        |  |    CTA + CÓDIGO      |               |
 * |   |    FUNDADOR          |  |    PROMO EXCLUSIVO   |               |
 * |   |    + exclusivos      |  |    + form + vagas    |               |
 * |   +---------------------+  +------------------------+               |
 * |                                                                      |
 * +----------------------------------------------------------------------+
 * |                          FOOTER                                      |
 * +----------------------------------------------------------------------+
 *
 * Grid Structure: 12 cols asymmetric (5/7)
 */

// Data de lançamento - ajuste conforme necessário
const LAUNCH_DATE = new Date('2025-01-31T23:59:59');
const TOTAL_SPOTS = 500;
const SPOTS_TAKEN = 347;
const PROMO_CODE = 'FUNDADOR40';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const beneficiosFundador = [
  { icon: 'discount', label: '40% OFF vitalício', desc: 'Desconto permanente na mensalidade' },
  { icon: 'early', label: 'Acesso antecipado', desc: '7 dias antes do lançamento oficial' },
  { icon: 'secret', label: 'Funcionalidades secretas', desc: 'Acesso a features exclusivas' },
  { icon: 'support', label: 'Suporte prioritário', desc: 'Atendimento VIP direto com a equipe' },
];

const footerLinks = {
  legal: [
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
  ],
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/nexus.leiloes/', icon: 'instagram' },
  ],
};

export default function FinalCTACuriosityScarcity() {
  const { openModal } = useLeadModal();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = LAUNCH_DATE.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const spotsRemaining = TOTAL_SPOTS - SPOTS_TAKEN;
  const progressPercent = (SPOTS_TAKEN / TOTAL_SPOTS) * 100;
  const formatTime = (num: number) => String(num).padStart(2, '0');

  const copyPromoCode = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* CTA Section */}
      <section
        className="bg-gradient-to-b from-[#2B3259] to-[#1a1f3d] py-16 lg:py-24 relative overflow-hidden"
        aria-labelledby="finalcta-curiosity-heading"
      >
        {/* Aurora Background Glows */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-br from-[#5C5CFF]/20 via-[#8B5CF6]/10 to-[#EC4899]/5 rounded-full blur-[150px] -translate-y-1/2"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5C5CFF]/10 rounded-full blur-[120px] translate-y-1/3 translate-x-1/4"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Dramatic Countdown - Top Center */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-[#5C5CFF] uppercase tracking-widest mb-6">
              Desconto de lançamento expira em
            </p>
            <div
              className="
                inline-flex items-center gap-4 sm:gap-6
                px-8 sm:px-12 py-6 sm:py-8
                bg-white/5
                backdrop-blur-xl
                rounded-3xl
                border border-white/10
                shadow-[0_30px_80px_-20px_rgba(92,92,255,0.3)]
              "
            >
              {[
                { value: timeLeft.days, label: 'dias' },
                { value: timeLeft.hours, label: 'horas' },
                { value: timeLeft.minutes, label: 'min' },
                { value: timeLeft.seconds, label: 'seg' },
              ].map((unit, index) => (
                <div key={unit.label} className="flex items-center gap-4 sm:gap-6">
                  <div className="text-center">
                    <div
                      className="
                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                        font-black
                        text-white
                        tabular-nums
                        min-w-[3rem] sm:min-w-[4rem]
                        drop-shadow-[0_0_20px_rgba(92,92,255,0.5)]
                      "
                    >
                      {formatTime(unit.value)}
                    </div>
                    <div className="text-xs sm:text-sm text-white/40 uppercase tracking-wider mt-2">
                      {unit.label}
                    </div>
                  </div>
                  {index < 3 && (
                    <span className="text-3xl sm:text-4xl text-[#5C5CFF]/50 font-light animate-pulse">:</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Headline */}
          <h2
            id="finalcta-curiosity-heading"
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white mb-4"
          >
            Sua última chance de
            <br />
            <span className="text-[#5C5CFF]">ver primeiro</span>
          </h2>

          {/* Subheadline */}
          <p className="text-center text-lg text-white/60 max-w-2xl mx-auto mb-12">
            Quando lançarmos, todos vão querer. Mas apenas{' '}
            <span className="text-[#5C5CFF] font-semibold">fundadores terão acesso às funcionalidades secretas</span>.
          </p>

          {/* Main Content - Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Benefícios Fundador - 5 columns */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-[0_30px_80px_-20px_rgba(92,92,255,0.15)]">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5C5CFF]/20 rounded-full mb-6">
                  <span className="text-[#5C5CFF]">⭐</span>
                  <span className="text-sm font-semibold text-[#5C5CFF]">Exclusivo para Fundadores</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">
                  O que você ganha entrando agora
                </h3>

                {/* Benefits List */}
                <div className="space-y-4">
                  {beneficiosFundador.map((beneficio, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#5C5CFF]/30 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 bg-[#5C5CFF]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BenefitIcon icon={beneficio.icon} />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{beneficio.label}</p>
                        <p className="text-sm text-white/50">{beneficio.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Teaser final */}
                <div className="mt-6 p-4 bg-gradient-to-r from-[#5C5CFF]/10 to-transparent rounded-2xl border-l-4 border-[#5C5CFF]">
                  <p className="text-sm text-white/70">
                    <span className="text-[#5C5CFF] font-medium">+ 3 surpresas</span> que só serão reveladas para quem entrar na lista.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA + Código Promo - 7 columns */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="h-full bg-gradient-to-br from-[#5C5CFF]/20 to-[#5C5CFF]/5 backdrop-blur-xl rounded-3xl border border-[#5C5CFF]/30 p-8 lg:p-10 shadow-[0_40px_100px_-30px_rgba(92,92,255,0.4)]">
                {/* Promo Code */}
                <div className="text-center mb-8">
                  <p className="text-sm font-medium text-white/60 mb-3">Seu código de fundador:</p>
                  <button
                    onClick={copyPromoCode}
                    className="
                      group
                      inline-flex items-center gap-3
                      px-6 py-4
                      bg-white/10
                      rounded-2xl
                      border-2 border-dashed border-[#5C5CFF]/50
                      hover:border-[#5C5CFF]
                      hover:bg-white/15
                      transition-all duration-300
                      cursor-pointer
                    "
                  >
                    <span className="text-2xl sm:text-3xl font-black text-[#5C5CFF] tracking-wider">
                      {PROMO_CODE}
                    </span>
                    <span className="text-white/50 group-hover:text-white/70 transition-colors">
                      {copied ? (
                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <p className="text-xs text-white/40 mt-2">
                    {copied ? 'Copiado!' : 'Clique para copiar'}
                  </p>
                </div>

                {/* Spots Progress */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Vagas de Fundador</span>
                    <span className="font-bold text-[#5C5CFF]">
                      Apenas {spotsRemaining} restantes
                    </span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#5C5CFF] to-[#8B5CF6] rounded-full transition-all duration-1000 relative"
                      style={{ width: `${progressPercent}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                  </div>
                  <p className="text-xs text-white/40 mt-2 text-center">
                    {SPOTS_TAKEN} investidores já garantiram vaga
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={openModal}
                  className="
                    w-full
                    bg-[#5C5CFF]
                    text-white
                    font-bold
                    text-lg
                    px-8 py-5
                    rounded-2xl
                    shadow-[0_20px_50px_-15px_rgba(92,92,255,0.6)]
                    transition-all
                    duration-300
                    ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    hover:-translate-y-1
                    hover:shadow-[0_25px_60px_-15px_rgba(92,92,255,0.7)]
                    active:translate-y-0
                    active:scale-[0.98]
                    cursor-pointer
                  "
                >
                  Garantir Minha Vaga de Fundador
                  <span className="ml-2" aria-hidden="true">→</span>
                </button>

                {/* Microcopy */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/50">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Acesso antecipado
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Sem cartão
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    40% OFF permanente
                  </span>
                </div>

                {/* Final curiosity hook */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-white/40">
                    Você vai descobrir por que <span className="text-[#5C5CFF]">nenhum concorrente oferece o que oferecemos</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f3d] py-12 border-t border-white/5" role="contentinfo">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Logo */}
            <div className="md:col-span-3">
              <img src="/logo-nexus.png" alt="Nexus Leilões" className="h-10" />
            </div>

            {/* Links */}
            <div className="md:col-span-4 flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-[#5C5CFF] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:contato@nexusleiloes.com.br"
                className="text-sm text-white/50 hover:text-[#5C5CFF] transition-colors duration-300"
              >
                Suporte
              </a>
            </div>

            {/* Social */}
            <div className="md:col-span-3 flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/50 hover:bg-[#5C5CFF]/20 hover:text-[#5C5CFF] transition-all duration-300"
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="md:col-span-2 text-right">
              <p className="text-sm text-white/30">&copy; 2025 Nexus</p>
            </div>
          </div>

          {/* Final curiosity reminder */}
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-[#5C5CFF]/80">
              A curiosidade trouxe você até aqui. A vaga de fundador leva você ainda mais longe.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function BenefitIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactElement> = {
    discount: (
      <svg className="w-6 h-6 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    early: (
      <svg className="w-6 h-6 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    secret: (
      <svg className="w-6 h-6 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    support: (
      <svg className="w-6 h-6 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  };
  return iconMap[icon] || null;
}

function SocialIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactElement> = {
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  };
  return iconMap[icon] || null;
}

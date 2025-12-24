'use client';
import React from 'react';

/**
 * FINAL CTA V1: LOSS AVERSION + FOOTER
 *
 * Frame Cognitivo: "Ultima chance antes de perder mais"
 * Headline foca em perdas acumuladas, contador de urgencia, numero de economia
 *
 * ASCII Layout:
 * +----------------------------------------------------------------------+
 * |                         SECTION BACKGROUND                           |
 * |                       (bg-[#2B3259] - dark)                          |
 * +----------------------------------------------------------------------+
 * |                                                                      |
 * |         EYEBROW: "Ultima Oportunidade"                               |
 * |                                                                      |
 * |   +-------------------- MAIN CONTENT ----------------------+         |
 * |   |                                                         |        |
 * |   |        "Cada Dia Sem o Nexus                           |        |
 * |   |         e Dinheiro Perdido"                            |        |
 * |   |                                                         |        |
 * |   |   +----- col-span-5 -----+  +----- col-span-7 -----+  |        |
 * |   |   |    ECONOMIA CARD     |  |    CTA + URGENCIA     | |        |
 * |   |   |    R$ 47.000/ano     |  |    Contador + Form    | |        |
 * |   |   |    + breakdown       |  |    + microcopy        | |        |
 * |   |   +---------------------+  +------------------------+ |        |
 * |   |                                                         |        |
 * |   +---------------------------------------------------------+        |
 * |                                                                      |
 * +----------------------------------------------------------------------+
 * |                          FOOTER                                      |
 * |   Logo     Links          Redes        Copyright                     |
 * +----------------------------------------------------------------------+
 *
 * Grid Structure: 12 cols asymmetric (5/7)
 * Visual Elements:
 * - Dark background com glow orange
 * - Savings card glassmorphism
 * - Urgency counter animado
 * - Footer minimalista
 */

import { useState, useEffect } from 'react';

const economiaData = {
  total: 'R$47.000',
  periodo: 'por ano',
  breakdown: [
    { label: 'Tempo economizado', value: '730h', icon: 'clock' },
    { label: 'Erros evitados', value: 'R$15k', icon: 'shield' },
    { label: 'Oportunidades extras', value: 'R$32k', icon: 'target' },
  ],
};

const footerLinks = {
  legal: [
    { label: 'Politica de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
  ],
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/nexus.leiloes/', icon: 'instagram' },
  ],
};

export default function FinalCTALossAversion() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 });
  const [spotsLeft, setSpotsLeft] = useState(47);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const spotTimer = setInterval(() => {
      if (Math.random() > 0.7 && spotsLeft > 10) {
        setSpotsLeft((prev) => prev - 1);
      }
    }, 30000);
    return () => clearInterval(spotTimer);
  }, [spotsLeft]);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <>
      {/* CTA Section */}
      <section className="bg-[#2B3259] py-24 lg:py-32 relative overflow-hidden" aria-labelledby="finalcta-loss-heading">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5C5CFF]/10 rounded-full blur-[200px] translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#5C5CFF]/10 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Headline */}
          <h2 id="finalcta-loss-heading" className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white mb-6">
            Cada Dia Sem o Nexus
            <br />
            <span className="text-[#5C5CFF]">e Dinheiro Perdido</span>
          </h2>

          {/* Subheadline */}
          <p className="text-center text-lg text-white/60 max-w-2xl mx-auto mb-16">
            Enquanto você hesita, investidores com o Nexus estão{' '}
            <span className="text-[#5C5CFF] font-semibold">economizando R$47.000 por ano</span>.
          </p>

          {/* Main Content - Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Economia Card - 5 columns */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-[0_30px_80px_-20px_rgba(92,92,255,0.2)]">
                {/* Total */}
                <div className="text-center mb-8">
                  <p className="text-sm font-semibold text-[#5C5CFF] uppercase tracking-wider mb-2">Economia Estimada</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl lg:text-7xl font-black text-white tracking-tight">{economiaData.total}</span>
                    <span className="text-xl text-white/50">/{economiaData.periodo.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

                {/* Breakdown */}
                <div className="space-y-4">
                  {economiaData.breakdown.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="w-12 h-12 bg-[#5C5CFF]/15 rounded-xl flex items-center justify-center">
                        <IconRenderer icon={item.icon} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white/50">{item.label}</p>
                        <p className="text-xl font-bold text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA + Urgencia - 7 columns */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-gradient-to-br from-[#5C5CFF]/15 to-[#5C5CFF]/5 backdrop-blur-xl rounded-3xl border border-[#5C5CFF]/20 p-8 lg:p-10 shadow-[0_40px_100px_-30px_rgba(92,92,255,0.3)]">
                {/* Urgency Counter */}
                <div className="text-center mb-8">
                  <p className="text-sm font-medium text-white/60 mb-4">Oferta de lancamento encerra em:</p>
                  <div className="flex items-center justify-center gap-3">
                    <TimeBlock value={formatTime(timeLeft.hours)} label="horas" />
                    <span className="text-3xl font-bold text-[#5C5CFF]">:</span>
                    <TimeBlock value={formatTime(timeLeft.minutes)} label="min" />
                    <span className="text-3xl font-bold text-[#5C5CFF]">:</span>
                    <TimeBlock value={formatTime(timeLeft.seconds)} label="seg" />
                  </div>
                </div>

                {/* Spots Counter */}
                <div className="flex items-center justify-center gap-3 mb-8 px-5 py-3 bg-white/5 rounded-full w-fit mx-auto border border-white/10">
                  <span className="w-2 h-2 bg-[#5C5CFF] rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">Apenas <span className="text-[#5C5CFF] font-bold">{spotsLeft} vagas</span> com desconto de fundador</span>
                </div>

                {/* Email Form */}
                <div className="space-y-4">
                  <input type="email" placeholder="Seu melhor e-mail" className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#5C5CFF]/50 focus:bg-white/15 transition-all duration-300" />

                  <button type="button" className="w-full bg-[#5C5CFF] text-white font-bold text-lg px-8 py-5 rounded-2xl shadow-[0_20px_50px_-15px_rgba(92,92,255,0.5)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-[0_25px_60px_-15px_rgba(92,92,255,0.6)] active:translate-y-0 active:scale-[0.98] cursor-pointer">
                    Garantir Minha Vaga
                    <span className="ml-2" aria-hidden="true">&rarr;</span>
                  </button>
                </div>

                {/* Microcopy */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/50">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    7 dias gratis
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Sem cartao
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Cancele quando quiser
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B3259] py-12 border-t border-white/5" role="contentinfo">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Logo */}
            <div className="md:col-span-3">
              <img src="/logo-nexus.png" alt="Nexus Leilões" className="h-10" />
            </div>

            {/* Links */}
            <div className="md:col-span-4 flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-white/50 hover:text-[#5C5CFF] transition-colors duration-300">
                  {link.label}
                </a>
              ))}
              <a href="mailto:contato@nexusleiloes.com.br" className="text-sm text-white/50 hover:text-[#5C5CFF] transition-colors duration-300">
                Suporte
              </a>
            </div>

            {/* Social */}
            <div className="md:col-span-3 flex gap-4">
              {footerLinks.social.map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/50 hover:bg-[#5C5CFF]/20 hover:text-[#5C5CFF] transition-all duration-300" aria-label={social.label}>
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="md:col-span-2 text-right">
              <p className="text-sm text-white/30">&copy; 2025 Nexus</p>
            </div>
          </div>

          {/* Urgency reminder */}
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-[#5C5CFF]/80">
              Não perca mais tempo. Cada hora conta.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-3 border border-white/10">
        <span className="text-3xl lg:text-4xl font-black text-white tracking-tight">{value}</span>
      </div>
      <span className="text-xs text-white/40 mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );
}

function IconRenderer({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactElement> = {
    clock: (
      <svg className="w-6 h-6 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    target: (
      <svg className="w-6 h-6 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  };
  return iconMap[icon] || null;
}

function SocialIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactElement> = {
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  };
  return iconMap[icon] || null;
}

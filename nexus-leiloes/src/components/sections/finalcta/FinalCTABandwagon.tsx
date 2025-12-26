'use client';
import React from 'react';
import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * FINAL CTA V4: BANDWAGON + FOOTER
 *
 * Frame Cognitivo: "Ultima semana de desconto"
 * Headlines focam em FOMO, prova social massiva, codigo promocional
 *
 * ASCII Layout:
 * +----------------------------------------------------------------------+
 * |                         SECTION BACKGROUND                           |
 * |                   (gradient orange to deep)                          |
 * +----------------------------------------------------------------------+
 * |                                                                      |
 * |         EYEBROW: "Ultima Semana de Desconto"                        |
 * |                                                                      |
 * |              "2.547 Investidores Já Estão                            |
 * |               Dentro. Falta Você."                                   |
 * |                                                                      |
 * |   +-------------------- MAIN CONTENT ----------------------+         |
 * |   |                                                         |        |
 * |   |   +------- LIVE COUNTER + AVATARS -------+            |        |
 * |   |   | [avatar stack] 2.547 usuarios ativos |            |        |
 * |   |   +-------------------------------------+            |        |
 * |   |                                                         |        |
 * |   |   +-- col-span-6 --+      +-- col-span-6 --+          |        |
 * |   |   |   PROMO CODE   |      |   CTA + TIMER  |          |        |
 * |   |   |   FUNDADOR50   |      |   Countdown    |          |        |
 * |   |   +---------------+      +----------------+          |        |
 * |   |                                                         |        |
 * |   +---------------------------------------------------------+        |
 * |                                                                      |
 * +----------------------------------------------------------------------+
 * |                          FOOTER                                      |
 * |   Logo    Avatars empilhados    Redes    Copyright                  |
 * +----------------------------------------------------------------------+
 *
 * Grid Structure: 12 cols com overlap visual
 * Visual Elements:
 * - Gradient quente (orange/red)
 * - Avatar stack animado
 * - Live counter de usuarios
 * - Codigo promocional em destaque
 * - Timer countdown
 */

import { useState, useEffect } from 'react';

const promoCode = {
  code: 'FUNDADOR50',
  discount: '50%',
  validUntil: '7 dias',
};

const liveStats = {
  totalUsers: 2547,
  activeNow: 127,
  lastSignup: '3 min atrás',
};

const recentSignups = [
  { name: 'Carlos M.', city: 'São Paulo', time: '3 min' },
  { name: 'Ana P.', city: 'Rio de Janeiro', time: '7 min' },
  { name: 'Roberto S.', city: 'Belo Horizonte', time: '12 min' },
  { name: 'Juliana F.', city: 'Curitiba', time: '18 min' },
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

export default function FinalCTABandwagon() {
  const { openModal } = useLeadModal();
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 23, minutes: 47, seconds: 32 });
  const [currentUsers, setCurrentUsers] = useState(liveStats.totalUsers);
  const [activeNow, setActiveNow] = useState(liveStats.activeNow);
  const [copied, setCopied] = useState(false);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate live user count
  useEffect(() => {
    const userTimer = setInterval(() => {
      if (Math.random() > 0.6) {
        setCurrentUsers((prev) => prev + 1);
      }
      setActiveNow(Math.floor(Math.random() * 50) + 100);
    }, 15000);
    return () => clearInterval(userTimer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  const copyCode = () => {
    navigator.clipboard.writeText(promoCode.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#5C5CFF] via-[#5C5CFF] to-[#2B3259] py-16 lg:py-20 relative overflow-hidden" aria-labelledby="finalcta-bandwagon-heading">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-10 left-10 w-60 h-60 border-2 border-white/30 rounded-full" />
          <div className="absolute bottom-20 right-10 w-80 h-80 border-2 border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 border-2 border-white/25 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[200px]" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2B3259]/20 rounded-full blur-[150px]" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Eyebrow */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Última Semana de Desconto</span>
            </span>
          </div>

          {/* Headline */}
          <h2 id="finalcta-bandwagon-heading" className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white mb-6">
            <span className="text-white/90">{currentUsers.toLocaleString('pt-BR')}</span> investidores
            <br />
            <span className="text-[#2B3259]">já estão dentro. Falta você.</span>
          </h2>

          {/* Live Counter + Avatars */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* Avatar Stack */}
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-white/30 to-white/10 border-2 border-white flex items-center justify-center shadow-[0_4px_15px_-3px_rgba(0,0,0,0.3)]">
                    <span className="text-xs font-bold text-white">{['CM', 'AP', 'RS', 'JF', 'LM'][i - 1]}</span>
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-[#2B3259] border-2 border-white flex items-center justify-center shadow-[0_4px_15px_-3px_rgba(0,0,0,0.3)]">
                  <span className="text-xs font-bold text-white">+{currentUsers - 5}</span>
                </div>
              </div>
            </div>

            {/* Live status */}
            <div className="flex items-center gap-3 px-5 py-2.5 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5C5CFF] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5C5CFF]" />
              </span>
              <span className="text-sm font-medium text-white">{activeNow} usuários online agora</span>
            </div>
          </div>

          {/* Main Content - Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Promo Code Card - 5 columns */}
            <div className="lg:col-span-5">
              <div className="h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 flex flex-col justify-center">
                <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-3">Código Exclusivo</p>

                {/* Code Display */}
                <button type="button" onClick={copyCode} className="group relative w-full bg-[#2B3259] rounded-2xl p-6 mb-6 border-2 border-dashed border-white/30 cursor-pointer transition-all duration-300 hover:border-white/50 hover:bg-[#2B3259]/90">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl lg:text-4xl font-black text-white tracking-wider">{promoCode.code}</span>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      {copied ? (
                        <svg className="w-6 h-6 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-white/50 mt-2">{copied ? 'Copiado!' : 'Clique para copiar'}</p>
                </button>

                {/* Discount Info */}
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <p className="text-sm text-white/50">Desconto</p>
                    <p className="text-2xl font-black text-white">{promoCode.discount} OFF</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/50">Válido por</p>
                    <p className="text-lg font-bold text-white">{promoCode.validUntil}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA + Timer - 7 columns */}
            <div className="lg:col-span-7">
              <div className="h-full bg-white rounded-3xl p-8 lg:p-10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.3)] flex flex-col justify-between">
                {/* Timer */}
                <div className="mb-8">
                  <p className="text-sm font-medium text-[#2B3259]/60 mb-4 text-center">Oferta expira em:</p>
                  <div className="flex items-center justify-center gap-3">
                    <TimeBlock value={formatTime(timeLeft.days)} label="dias" />
                    <span className="text-2xl font-bold text-[#5C5CFF]">:</span>
                    <TimeBlock value={formatTime(timeLeft.hours)} label="horas" />
                    <span className="text-2xl font-bold text-[#5C5CFF]">:</span>
                    <TimeBlock value={formatTime(timeLeft.minutes)} label="min" />
                    <span className="text-2xl font-bold text-[#5C5CFF]">:</span>
                    <TimeBlock value={formatTime(timeLeft.seconds)} label="seg" />
                  </div>
                </div>

                {/* Recent Signups */}
                <div className="mb-8">
                  <p className="text-xs font-medium text-[#2B3259]/40 uppercase tracking-wider mb-3">Últimas inscrições</p>
                  <div className="space-y-2">
                    {recentSignups.slice(0, 3).map((signup, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-[#EFF0F0] rounded-xl">
                        <div className="w-8 h-8 bg-[#5C5CFF]/10 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-bold text-[#5C5CFF]">{signup.name.charAt(0)}</span>
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-[#2B3259]">{signup.name}</span>
                          <span className="text-sm text-[#2B3259]/50"> de {signup.city}</span>
                        </div>
                        <span className="text-xs text-[#2B3259]/40">{signup.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email + CTA */}
                <div className="space-y-4">
                  <input type="email" placeholder="Seu melhor e-mail" className="w-full px-6 py-4 bg-[#EFF0F0] border border-[#2B3259]/10 rounded-2xl text-[#2B3259] placeholder:text-[#2B3259]/40 focus:outline-none focus:border-[#5C5CFF]/50 focus:bg-white transition-all duration-300" />

                  <button type="button" onClick={openModal} className="w-full bg-[#5C5CFF] text-white font-bold text-lg px-8 py-5 rounded-2xl shadow-[0_20px_50px_-15px_rgba(92,92,255,0.5)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-[0_25px_60px_-15px_rgba(92,92,255,0.6)] active:translate-y-0 active:scale-[0.98] cursor-pointer">
                    Garantir meu desconto
                    <span className="ml-2" aria-hidden="true">&rarr;</span>
                  </button>
                </div>

                {/* Microcopy */}
                <p className="mt-4 text-center text-sm text-[#2B3259]/50">
                  Junte-se aos {currentUsers.toLocaleString('pt-BR')} investidores que já economizam tempo e dinheiro
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Proof */}
      <footer className="bg-[#2B3259] py-16 border-t border-white/5" role="contentinfo">
        <div className="max-w-6xl mx-auto px-6">
          {/* Social Proof Banner */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12 p-6 bg-white/5 rounded-2xl border border-white/10">
            {/* Avatar Stack Large */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5C5CFF]/30 to-[#5C5CFF]/30 border-2 border-[#2B3259] flex items-center justify-center">
                    <span className="text-xs font-bold text-white/70">{['CM', 'AP', 'RS', 'JF', 'LM', 'PT', 'AS', 'MR'][i - 1]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-2xl font-black text-white">{currentUsers.toLocaleString('pt-BR')}+ investidores</p>
              <p className="text-sm text-white/50">confiam na Nexus para suas decisões</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          {/* Footer Content */}
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

          {/* Final FOMO */}
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-[#5C5CFF]">
              Não fique de fora. A oferta acaba em breve.
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
      <div className="bg-[#2B3259] rounded-xl px-4 py-3 shadow-[0_8px_25px_-8px_rgba(43,50,89,0.5)]">
        <span className="text-2xl lg:text-3xl font-black text-white tracking-tight">{value}</span>
      </div>
      <span className="text-xs text-[#2B3259]/50 mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );
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

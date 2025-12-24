'use client';
import React from 'react';

/**
 * FINAL CTA V2: TRANSFORMATION + FOOTER
 *
 * Frame Cognitivo: "Comece sua transformação agora"
 * Headlines focam em jornada before/after, timeline de onboarding
 *
 * ASCII Layout:
 * +----------------------------------------------------------------------+
 * |                         SECTION BACKGROUND                           |
 * |                    (gradient blue to navy)                           |
 * +----------------------------------------------------------------------+
 * |                                                                      |
 * |         EYEBROW: "Sua Transformação Começa Aqui"                    |
 * |                                                                      |
 * |              "De Buscas Caoticas Para                                |
 * |               Investimentos Precisos"                                |
 * |                                                                      |
 * |   +-------------------- MAIN CONTENT ----------------------+         |
 * |   |                                                         |        |
 * |   |   +-- col-span-6 --+      +-- col-span-6 --+          |        |
 * |   |   |   BEFORE CARD  |      |   AFTER CARD   |          |        |
 * |   |   |   (faded)      |  ->  |   (vibrant)    |          |        |
 * |   |   +---------------+      +----------------+          |        |
 * |   |                                                         |        |
 * |   |              [CTA: Iniciar Minha Jornada]              |        |
 * |   |                                                         |        |
 * |   +---------------------------------------------------------+        |
 * |                                                                      |
 * +----------------------------------------------------------------------+
 * |                          FOOTER                                      |
 * |   Logo    Timeline de Onboarding    Redes    Copyright              |
 * +----------------------------------------------------------------------+
 *
 * Grid Structure: 12 cols com overlap visual
 * Visual Elements:
 * - Gradient background azul para navy
 * - Before/After cards com contraste visual
 * - Arrow/line conectando cards
 * - Timeline de onboarding no footer
 */

const beforeState = {
  title: 'Antes do Nexus',
  items: [
    { icon: 'chaos', text: 'Dezenas de abas abertas' },
    { icon: 'time', text: 'Horas buscando imóveis' },
    { icon: 'error', text: 'Calculos manuais arriscados' },
    { icon: 'miss', text: 'Oportunidades perdidas' },
  ],
};

const afterState = {
  title: 'Com o Nexus',
  items: [
    { icon: 'unified', text: 'Busca unificada em um lugar' },
    { icon: 'fast', text: 'Encontre em minutos' },
    { icon: 'calc', text: 'Calculadora multi-cenarios' },
    { icon: 'alert', text: 'Alertas de oportunidades' },
  ],
};

const onboardingTimeline = [
  { day: '1', label: 'Acesso', desc: 'Crie sua conta' },
  { day: '3', label: 'Setup', desc: 'Configure alertas' },
  { day: '7', label: 'Dominio', desc: 'Use como expert' },
  { day: '30', label: 'Resultado', desc: 'Primeira economia' },
];

const footerLinks = {
  legal: [
    { label: 'Politica de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
  ],
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/nexus.leiloes/', icon: 'instagram' },
  ],
};

export default function FinalCTATransformation() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#5C5CFF] via-[#5C5CFF] to-[#2B3259] py-24 lg:py-32 relative overflow-hidden" aria-labelledby="finalcta-transformation-heading">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 left-10 w-40 h-40 border border-white/20 rounded-full" />
          <div className="absolute top-40 right-20 w-60 h-60 border border-white/20 rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-32 h-32 border border-white/20 rounded-full" />
        </div>

        {/* Glows */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Eyebrow */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-full border border-white/20">
              <span className="text-white" aria-hidden="true">&#10024;</span>
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Sua Transformação Começa Aqui</span>
            </span>
          </div>

          {/* Headline */}
          <h2 id="finalcta-transformation-heading" className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white mb-6">
            De Buscas Caoticas Para
            <br />
            <span className="text-[#EFF0F0]">Investimentos Precisos</span>
          </h2>

          {/* Subheadline */}
          <p className="text-center text-lg text-white/70 max-w-2xl mx-auto mb-16">
            A jornada de transformação do seu processo de investimento começa{' '}
            <span className="text-white font-semibold">com um único clique</span>.
          </p>

          {/* Before/After Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-stretch mb-12">
            {/* Before Card - 5 columns */}
            <div className="lg:col-span-5 lg:z-10">
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 opacity-70">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-red-400 text-xl" aria-hidden="true">&#10005;</span>
                  </div>
                  <h3 className="text-xl font-bold text-white/80">{beforeState.title}</h3>
                </div>

                <div className="space-y-4">
                  {beforeState.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                      <BeforeIcon icon={item.icon} />
                      <span className="text-white/60 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow connector */}
            <div className="lg:col-span-2 flex items-center justify-center py-4 lg:py-0">
              <div className="hidden lg:flex flex-col items-center gap-2">
                <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#EFF0F0]/50" />
                <div className="w-16 h-16 bg-[#EFF0F0] rounded-full flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(239,240,240,0.5)]">
                  <svg className="w-8 h-8 text-[#2B3259]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-[#EFF0F0]/50 to-transparent" />
              </div>
              <div className="lg:hidden flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#EFF0F0]/50" />
                <div className="w-12 h-12 bg-[#EFF0F0] rounded-full flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(239,240,240,0.5)]">
                  <svg className="w-6 h-6 text-[#2B3259] rotate-90 lg:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#EFF0F0]/50 to-transparent" />
              </div>
            </div>

            {/* After Card - 5 columns */}
            <div className="lg:col-span-5 lg:z-10">
              <div className="h-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-[0_30px_80px_-20px_rgba(255,255,255,0.1)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#EFF0F0]/20 rounded-xl flex items-center justify-center">
                    <span className="text-[#EFF0F0] text-xl" aria-hidden="true">&#10003;</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{afterState.title}</h3>
                </div>

                <div className="space-y-4">
                  {afterState.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-white/10 rounded-xl border border-white/10">
                      <AfterIcon icon={item.icon} />
                      <span className="text-white text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button type="button" className="bg-[#EFF0F0] text-[#2B3259] font-bold text-lg px-12 py-5 rounded-full shadow-[0_20px_50px_-15px_rgba(239,240,240,0.5)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_25px_60px_-15px_rgba(239,240,240,0.6)] active:translate-y-0 active:scale-[0.98] cursor-pointer">
              Iniciar Minha Jornada
              <span className="ml-2" aria-hidden="true">&rarr;</span>
            </button>

            {/* Microcopy */}
            <p className="mt-6 text-sm text-white/50">
              Junte-se a +2.500 investidores que já transformaram seu processo
            </p>
          </div>
        </div>
      </section>

      {/* Footer with Onboarding Timeline */}
      <footer className="bg-[#2B3259] py-16 border-t border-white/5" role="contentinfo">
        <div className="max-w-6xl mx-auto px-6">
          {/* Onboarding Timeline */}
          <div className="mb-12">
            <h3 className="text-center text-lg font-bold text-white mb-8">Sua jornada de onboarding</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {onboardingTimeline.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector line */}
                  {index < onboardingTimeline.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-[#5C5CFF]/50 to-[#5C5CFF]/20" aria-hidden="true" />
                  )}

                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 bg-[#5C5CFF]/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#5C5CFF]/30">
                      <span className="text-lg font-bold text-[#5C5CFF]">D{step.day}</span>
                    </div>
                    <p className="text-sm font-semibold text-white">{step.label}</p>
                    <p className="text-xs text-white/50 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
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
        </div>
      </footer>
    </>
  );
}

function BeforeIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactElement> = {
    chaos: (
      <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-red-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
    ),
    time: (
      <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-red-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    error: (
      <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-red-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
    ),
    miss: (
      <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-red-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      </div>
    ),
  };
  return iconMap[icon] || null;
}

function AfterIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactElement> = {
    unified: (
      <div className="w-8 h-8 bg-[#5C5CFF]/20 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </div>
    ),
    fast: (
      <div className="w-8 h-8 bg-[#5C5CFF]/20 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    ),
    calc: (
      <div className="w-8 h-8 bg-[#5C5CFF]/20 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
    ),
    alert: (
      <div className="w-8 h-8 bg-[#5C5CFF]/20 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>
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

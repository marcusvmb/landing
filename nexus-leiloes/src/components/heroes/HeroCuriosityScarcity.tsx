'use client';

import { useState, useEffect } from 'react';
import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * HERO 4: CURIOSITY + SCARCITY
 *
 * Frame Cognitivo: Lacuna de curiosidade + Urgência genuína
 * Mecanismo: Criar tensão entre o que sabem e o que não sabem + deadline real
 *
 * Layout Specifications:
 * - Grid: 12 colunas, centralizado com countdown flutuante
 * - Headline com curiosity gap no centro
 * - Countdown timer + contador de vagas como elementos de destaque
 * - Mockup com elementos "blur" para criar mistério
 *
 * Design Tokens:
 * - Background: #EFF0F0 (Ice Grey) com aurora glow multi-color
 * - Text: #2B3259 (Deep Navy)
 * - Accent: #5C5CFF (Electric Blue)
 * - Urgency: Countdown com glow pulsante
 *
 * Anti-AI Checklist:
 * [x] Background #EFF0F0 (não branco puro)
 * [x] Texto #2B3259 (não preto)
 * [x] Shadows coloridas (não cinza)
 * [x] Elemento breaking: countdown flutuante com glow
 * [x] Hover + Active states em botoes
 * [x] Letter-spacing tight (-0.03em)
 * [x] CTA pill shape (rounded-full)
 * [x] Blur/teaser elements para mistério
 */

// Data de lançamento - ajuste conforme necessário
const LAUNCH_DATE = new Date('2025-01-31T23:59:59');
const TOTAL_SPOTS = 500;
const SPOTS_TAKEN = 347; // Pode ser dinâmico via Supabase

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroCuriosityScarcity() {
  const { openModal } = useLeadModal();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  return (
    <section
      className="bg-[#EFF0F0] min-h-screen relative overflow-hidden"
      aria-labelledby="hero-curiosity-heading"
    >
      {/* Aurora glow effects - multiple layers for depth */}
      <div
        className="
          absolute
          top-0 left-1/2 -translate-x-1/2
          w-[800px] h-[600px]
          bg-gradient-to-br from-[#5C5CFF]/15 via-[#8B5CF6]/10 to-[#EC4899]/5
          rounded-full
          blur-[120px]
          -translate-y-1/3
        "
      />
      <div
        className="
          absolute
          bottom-0 right-0
          w-[500px] h-[500px]
          bg-[#5C5CFF]/8
          rounded-full
          blur-[100px]
          translate-y-1/3 translate-x-1/4
        "
      />

      {/* Header / Navigation */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo-nexus.png" alt="Nexus Leilões" className="h-10" />
        </div>

        {/* Live Counter Badge - Desktop */}
        <div className="hidden md:flex items-center gap-3 px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-full border border-[#5C5CFF]/15 shadow-[0_4px_20px_-4px_rgba(92,92,255,0.15)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5C5CFF] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5C5CFF]" />
          </span>
          <span className="text-sm font-medium text-[#2B3259]">
            <span className="text-[#5C5CFF] font-bold">{SPOTS_TAKEN}</span> investidores já garantiram acesso
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 lg:pt-12 pb-16">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow with mystery */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5C5CFF]/10 rounded-full mb-8">
            <span className="text-[#5C5CFF]">🔒</span>
            <span className="text-sm font-medium text-[#5C5CFF]">
              Acesso antecipado exclusivo
            </span>
          </div>

          {/* Headline - Curiosity Gap */}
          <h1
            id="hero-curiosity-heading"
            className="
              text-[2.25rem]
              sm:text-5xl
              md:text-6xl
              lg:text-[4.25rem]
              xl:text-[4.75rem]
              font-black
              tracking-[-0.03em]
              leading-[0.95]
              text-[#2B3259]
            "
          >
            O que 87% dos investidores
            <br />
            de leilão <span className="text-[#5C5CFF]">não sabem</span>
          </h1>

          {/* Subheadline - Teaser */}
          <p
            className="
              mt-6
              text-lg
              md:text-xl
              lg:text-2xl
              text-[#2B3259]/60
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Existe uma funcionalidade que <span className="text-[#2B3259] font-medium">nenhuma ferramenta de leilão oferece</span>.
            <br className="hidden sm:block" />
            E está custando milhares em oportunidades perdidas.
          </p>

          {/* Countdown Timer - Breaking element */}
          <div className="mt-10 mb-8">
            <p className="text-sm font-medium text-[#2B3259]/50 mb-4 uppercase tracking-wider">
              Desconto de lançamento expira em:
            </p>
            <div
              className="
                inline-flex items-center gap-3 sm:gap-4
                px-6 sm:px-8 py-4 sm:py-5
                bg-white/70
                backdrop-blur-xl
                rounded-2xl
                shadow-[0_20px_60px_-15px_rgba(92,92,255,0.25)]
                border border-white/50
              "
            >
              {[
                { value: timeLeft.days, label: 'dias' },
                { value: timeLeft.hours, label: 'horas' },
                { value: timeLeft.minutes, label: 'min' },
                { value: timeLeft.seconds, label: 'seg' },
              ].map((unit, index) => (
                <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
                  <div className="text-center">
                    <div
                      className="
                        text-2xl sm:text-3xl md:text-4xl
                        font-black
                        text-[#5C5CFF]
                        tabular-nums
                        min-w-[2.5rem] sm:min-w-[3rem]
                      "
                    >
                      {String(unit.value).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#2B3259]/50 uppercase tracking-wider mt-1">
                      {unit.label}
                    </div>
                  </div>
                  {index < 3 && (
                    <span className="text-xl sm:text-2xl text-[#5C5CFF]/30 font-light">:</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            type="button"
            onClick={openModal}
            className="
              bg-[#5C5CFF]
              text-white
              font-bold
              text-lg
              px-10 py-5
              rounded-full
              shadow-[0_15px_40px_-10px_rgba(92,92,255,0.5)]
              transition-all
              duration-300
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:-translate-y-1
              hover:scale-[1.02]
              hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.6)]
              active:translate-y-0
              active:scale-[0.98]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#2B3259]
              cursor-pointer
            "
          >
            Quero Ver Primeiro
            <span aria-hidden="true"> →</span>
          </button>

          {/* Spots Counter - Progress bar */}
          <div className="mt-8 max-w-sm mx-auto">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-[#2B3259]/60">Vagas de Fundador</span>
              <span className="font-medium text-[#5C5CFF]">
                {spotsRemaining} restantes
              </span>
            </div>
            <div className="h-2.5 bg-[#2B3259]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#5C5CFF] to-[#8B5CF6] rounded-full transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-[#2B3259]/50 mt-2">
              {SPOTS_TAKEN} de {TOTAL_SPOTS} vagas preenchidas
            </p>
          </div>

          {/* Risk Removers */}
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#2B3259]/70" aria-label="Benefícios inclusos">
            <li className="flex items-center gap-1.5">
              <span className="text-[#5C5CFF] font-medium" aria-hidden="true">✓</span>
              40% OFF vitalício para fundadores
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-[#5C5CFF] font-medium" aria-hidden="true">✓</span>
              Acesso prioritário ao lançamento
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-[#5C5CFF] font-medium" aria-hidden="true">✓</span>
              Sem cartão de crédito
            </li>
          </ul>
        </div>

        {/* Teaser Mockup - with blur elements */}
        <div className="mt-16 max-w-4xl mx-auto relative">
          {/* Glow behind mockup */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br from-[#5C5CFF]/20 to-[#8B5CF6]/10
              rounded-3xl
              blur-3xl
              scale-95
            "
          />

          {/* Dashboard Preview - Partially blurred */}
          <div
            className="
              relative
              z-10
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              p-6
              md:p-8
              shadow-[0_30px_80px_-20px_rgba(92,92,255,0.25)]
              border border-white/50
            "
            role="img"
            aria-label="Prévia do painel Nexus Leilões com algumas funcionalidades ocultas"
          >
            {/* Mockup Header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <div className="ml-auto text-xs text-[#2B3259]/40 font-medium">
                Nexus Dashboard • Preview
              </div>
            </div>

            {/* Grid with visible and blurred elements */}
            <div className="grid grid-cols-12 gap-4">
              {/* Visible: Search */}
              <div className="col-span-12 h-10 bg-[#5C5CFF]/8 rounded-xl flex items-center px-4">
                <span className="text-[#5C5CFF]/60 text-sm">🔍 Buscar imóveis em todo Brasil...</span>
              </div>

              {/* Visible: Basic stats */}
              <div className="col-span-4 p-4 bg-[#5C5CFF]/5 rounded-xl border border-[#5C5CFF]/10">
                <div className="text-2xl font-bold text-[#5C5CFF]">1.247</div>
                <div className="text-xs text-[#2B3259]/50">Leilões disponíveis</div>
              </div>

              {/* BLURRED: Secret feature 1 */}
              <div className="col-span-4 p-4 bg-[#5C5CFF]/5 rounded-xl border border-[#5C5CFF]/10 relative overflow-hidden">
                <div className="blur-sm">
                  <div className="text-2xl font-bold text-[#5C5CFF]">???</div>
                  <div className="text-xs text-[#2B3259]/50">Calculadora exclusiva</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
                  <span className="text-lg">🔒</span>
                </div>
              </div>

              {/* BLURRED: Secret feature 2 */}
              <div className="col-span-4 p-4 bg-[#5C5CFF]/5 rounded-xl border border-[#5C5CFF]/10 relative overflow-hidden">
                <div className="blur-sm">
                  <div className="text-2xl font-bold text-[#5C5CFF]">???</div>
                  <div className="text-xs text-[#2B3259]/50">Funcionalidade secreta</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
                  <span className="text-lg">🔒</span>
                </div>
              </div>

              {/* Visible: Chart */}
              <div className="col-span-8 h-32 bg-gradient-to-r from-[#5C5CFF]/10 via-[#5C5CFF]/5 to-[#5C5CFF]/10 rounded-xl flex items-end p-4 gap-2">
                <div className="w-1/6 h-[30%] bg-[#5C5CFF]/30 rounded-t" />
                <div className="w-1/6 h-[50%] bg-[#5C5CFF]/40 rounded-t" />
                <div className="w-1/6 h-[70%] bg-[#5C5CFF]/50 rounded-t" />
                <div className="w-1/6 h-[45%] bg-[#5C5CFF]/40 rounded-t" />
                <div className="w-1/6 h-[85%] bg-[#5C5CFF] rounded-t" />
                <div className="w-1/6 h-[60%] bg-[#5C5CFF]/40 rounded-t" />
              </div>

              {/* BLURRED: Secret panel */}
              <div className="col-span-4 h-32 bg-[#5C5CFF]/5 rounded-xl border border-[#5C5CFF]/10 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-transparent to-white/60 backdrop-blur-[3px]">
                  <span className="text-2xl">🔒</span>
                  <span className="text-xs text-[#5C5CFF] font-medium">Em breve</span>
                </div>
              </div>
            </div>

            {/* Teaser text */}
            <div className="mt-6 text-center">
              <p className="text-sm text-[#2B3259]/50">
                <span className="text-[#5C5CFF] font-medium">3 funcionalidades exclusivas</span> serão reveladas apenas para fundadores
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Urgency Badge - Fixed bottom */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-30">
        <button
          type="button"
          onClick={openModal}
          className="
            w-full
            flex items-center justify-center gap-3
            px-5 py-4
            bg-[#5C5CFF]
            rounded-full
            shadow-[0_10px_40px_-10px_rgba(92,92,255,0.5)]
          "
        >
          <span className="text-white font-bold">Garantir Minha Vaga</span>
          <span className="px-2 py-1 bg-white/20 rounded-full text-white text-xs font-medium">
            {spotsRemaining} restantes
          </span>
        </button>
      </div>
    </section>
  );
}

'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';
import { LazyVideo } from '@/components/ui/LazyVideo';

/**
 * SEÇÃO DEDICADA: GESTÃO MULTI-CLIENTE PARA ASSESSORES
 *
 * Layout: "Theater Mode"
 * - Fundo escuro (#2B3259) para criar quebra visual e sensação "pro"
 * - Vídeo em destaque central
 * - Card glassmorphism com texto sobrepondo (overlap)
 * - Inspiração: Linear, Stripe, Apple Pro sections
 *
 * ASCII Layout:
 * ┌─────────────────────────────────────────────────────────────┐
 * │                    bg-[#2B3259] (Deep Navy)                 │
 * │                                                             │
 * │   ┌─────────────────────────────────────────────────────┐   │
 * │   │                                                     │   │
 * │   │                   VIDEO 16:9                        │   │
 * │   │                                                     │   │
 * │   └─────────────────────────────────────────────────────┘   │
 * │                                                             │
 * │          ┌───────────────────────────────────┐              │
 * │          │  GLASSMORPHISM CARD (overlap)     │              │
 * │          │                                   │              │
 * │          │  BADGE: PARA ASSESSORES           │              │
 * │          │                                   │              │
 * │          │  "Vários clientes."               │              │
 * │          │  "Um só comando."                 │              │
 * │          │                                   │              │
 * │          │  (descrição)                      │              │
 * │          │                                   │              │
 * │          │  [Tags]  [Tags]  [Tags]           │              │
 * │          │                                   │              │
 * │          │  [ CTA BUTTON ]                   │              │
 * │          │                                   │              │
 * │          └───────────────────────────────────┘              │
 * │                                                             │
 * └─────────────────────────────────────────────────────────────┘
 */

export default function AssessoresShowcase() {
  const { openModal } = useLeadModal();

  const videoSrc = '/videos/assessor.webm';
  const posterSrc = '/videos/posters/assessor.jpg';

  return (
    <section
      className="bg-[#2B3259] py-20 lg:py-28 relative overflow-hidden"
      aria-labelledby="assessores-heading"
    >
      {/* Background Glows */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5C5CFF]/15 rounded-full blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#5C5CFF]/10 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Video Container */}
        <div className="relative mb-[-60px] lg:mb-[-80px]">
          {/* Glow behind video */}
          <div
            className="absolute inset-0 bg-[#5C5CFF]/20 blur-3xl rounded-3xl scale-95"
            aria-hidden="true"
          />

          <div
            className="
              relative
              aspect-video
              rounded-2xl lg:rounded-3xl
              overflow-hidden
              shadow-[0_40px_100px_-20px_rgba(92,92,255,0.4)]
              border border-white/10
            "
          >
            <LazyVideo
              src={videoSrc}
              poster={posterSrc}
              className="w-full h-full"
              playThreshold={0.3}
              pauseOnExit={true}
              rootMargin="300px"
            />

            {/* Subtle shine overlay */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-br from-white/10 via-transparent to-transparent
                pointer-events-none
                rounded-2xl lg:rounded-3xl
              "
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content Card - Overlapping */}
        <div
          className="
            relative z-20
            max-w-2xl mx-auto
            bg-white/[0.08]
            backdrop-blur-2xl
            border border-white/15
            rounded-2xl lg:rounded-3xl
            p-8 lg:p-12
            shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]
            text-center
          "
        >
          {/* Badge */}
          <span
            className="
              inline-flex items-center gap-2
              bg-[#5C5CFF]/20 text-[#5C5CFF]
              text-xs font-bold uppercase tracking-wider
              px-4 py-2 rounded-full mb-6
            "
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            Para Assessores
          </span>

          {/* Headline */}
          <h2
            id="assessores-heading"
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-black
              tracking-[-0.03em]
              leading-[1.1]
              text-white
              mb-5
            "
          >
            Vários clientes.
            <br />
            <span className="text-[#5C5CFF]">Um só comando.</span>
          </h2>

          {/* Subheadline */}
          <p className="text-base lg:text-lg text-white/60 leading-relaxed mb-8 max-w-xl mx-auto">
            Organize cada cliente, rastreie cada oportunidade. Gerencie toda sua carteira de
            assessoria em um painel unificado que transmite profissionalismo.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Carteira organizada', 'Relatórios por cliente', 'Escala sem caos'].map((tag) => (
              <span
                key={tag}
                className="
                  bg-white/10 text-white/80
                  text-sm font-medium
                  px-4 py-2 rounded-full
                  transition-colors duration-200
                  hover:bg-white/15
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={openModal}
            className="
              bg-[#5C5CFF]
              text-white
              font-bold text-lg
              px-10 py-5
              rounded-full
              shadow-[0_20px_50px_-12px_rgba(92,92,255,0.6)]
              transition-all duration-300
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:-translate-y-1 hover:scale-[1.02]
              hover:shadow-[0_25px_60px_-12px_rgba(92,92,255,0.7)]
              active:translate-y-0 active:scale-[0.98]
              cursor-pointer
            "
          >
            Quero Gerenciar Meus Clientes
          </button>
        </div>
      </div>
    </section>
  );
}

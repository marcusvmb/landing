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

            {/* Selo de Exclusividade no Vídeo */}
            <div
              className="
                absolute top-4 right-4 z-20
                bg-gradient-to-r from-amber-500 to-yellow-500
                text-[#1a1f36]
                px-3 py-1.5 rounded-lg
                font-bold text-xs uppercase tracking-wide
                shadow-lg shadow-amber-500/30
                transform rotate-1
              "
            >
              Pioneiro no Brasil
            </div>

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
          {/* Badge de Exclusividade */}
          <div className="flex justify-center mb-5">
            <span
              className="
                inline-flex items-center gap-2
                bg-gradient-to-r from-amber-500/20 to-yellow-500/20
                text-amber-400
                border border-amber-500/30
                text-xs font-bold uppercase tracking-wider
                px-4 py-2 rounded-full
              "
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Único no mercado
            </span>
          </div>

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
            Outras plataformas são feitas para investidores individuais. A Nexus foi criada para
            quem assessora — com painel multi-cliente, relatórios profissionais e gestão de
            carteira completa.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Exclusivo: Multi-cliente', 'Relatórios PDF por cliente', 'Escale de 5 para 50'].map((tag) => (
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

          {/* Microcopy de Exclusividade */}
          <p className="mt-4 text-sm text-white/40">
            Funcionalidade indisponível em outras plataformas
          </p>
        </div>
      </div>
    </section>
  );
}

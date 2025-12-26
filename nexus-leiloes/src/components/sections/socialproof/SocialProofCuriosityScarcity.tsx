/**
 * SOCIAL PROOF SECTION V4: CURIOSITY + SCARCITY (Momentum)
 *
 * Frame Cognitivo: Demanda/Momentum (NÃO prova social tradicional)
 *
 * Vieses Aplicados:
 * - Bandwagon Effect: Movimento crescente, não resultados
 * - FOMO: "Outros já estão entrando"
 * - Scarcity: Vagas diminuindo em tempo real
 *
 * Design:
 * - Contador de cadastros (sem depoimentos)
 * - Progress bar de vagas
 * - Atividade em tempo real (simulada)
 * - Sem fotos de clientes (não temos)
 */

'use client';

import { useState, useEffect } from 'react';
import { useLeadModal } from '@/contexts/LeadModalContext';

const TOTAL_SPOTS = 500;
const BASE_SIGNUPS = 347;

const atividadeRecente = [
  { cidade: 'São Paulo, SP', tempo: '2 min atrás' },
  { cidade: 'Rio de Janeiro, RJ', tempo: '5 min atrás' },
  { cidade: 'Belo Horizonte, MG', tempo: '8 min atrás' },
  { cidade: 'Curitiba, PR', tempo: '12 min atrás' },
  { cidade: 'Porto Alegre, RS', tempo: '15 min atrás' },
];

const estatisticas = [
  { numero: '347', label: 'investidores na lista', icone: '👤' },
  { numero: '23', label: 'assessores cadastrados', icone: '💼' },
  { numero: '12', label: 'estados representados', icone: '🗺️' },
];

export default function SocialProofCuriosityScarcity() {
  const { openModal } = useLeadModal();
  const [signups, setSignups] = useState(BASE_SIGNUPS);
  const [currentActivity, setCurrentActivity] = useState(0);

  // Simulate live activity
  useEffect(() => {
    const activityTimer = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % atividadeRecente.length);
    }, 4000);

    return () => clearInterval(activityTimer);
  }, []);

  // Simulate occasional signups
  useEffect(() => {
    const signupTimer = setInterval(() => {
      if (Math.random() > 0.7 && signups < TOTAL_SPOTS - 50) {
        setSignups((prev) => prev + 1);
      }
    }, 30000);

    return () => clearInterval(signupTimer);
  }, [signups]);

  const spotsRemaining = TOTAL_SPOTS - signups;
  const progressPercent = (signups / TOTAL_SPOTS) * 100;

  return (
    <section
      className="bg-[#2B3259] py-16 lg:py-24 relative overflow-hidden"
      aria-labelledby="momentum-heading"
    >
      {/* Background glow */}
      <div
        className="
          absolute
          top-0 left-1/2
          w-[800px] h-[400px]
          bg-[#5C5CFF]/10
          rounded-full
          blur-[120px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Live Activity Toast */}
        <div className="flex justify-center mb-12">
          <div
            className="
              inline-flex items-center gap-3
              px-5 py-3
              bg-white/10
              backdrop-blur-xl
              rounded-full
              border border-white/10
              shadow-[0_10px_40px_-10px_rgba(92,92,255,0.3)]
              animate-pulse
            "
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
            </span>
            <span className="text-white/80 text-sm">
              Novo cadastro de <span className="font-semibold text-white">{atividadeRecente[currentActivity].cidade}</span>
              <span className="text-white/50 ml-2">{atividadeRecente[currentActivity].tempo}</span>
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-12">
          <h2
            id="momentum-heading"
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              tracking-[-0.03em]
              leading-[0.95]
              text-white
              mb-6
            "
          >
            O movimento já
            <br />
            <span className="text-[#5C5CFF]">começou</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Investidores de todo Brasil estão garantindo seu lugar.
            <br />
            A pergunta é: <span className="text-[#5C5CFF] font-medium">você vai ficar de fora?</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {estatisticas.map((stat, index) => (
            <div
              key={index}
              className="
                text-center
                p-8
                bg-white/5
                backdrop-blur-sm
                rounded-3xl
                border border-white/10
              "
            >
              <span className="text-4xl mb-4 block">{stat.icone}</span>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                {stat.numero}
              </div>
              <p className="text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Progress Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Progress visualization */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Vagas de Fundador
              </h3>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#5C5CFF] to-[#8B5CF6] rounded-full transition-all duration-1000 relative"
                    style={{ width: `${progressPercent}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-white/50">{signups} preenchidas</span>
                <span className="text-[#5C5CFF] font-bold">{spotsRemaining} restantes</span>
              </div>

              {/* Warning message */}
              <div className="mt-6 p-4 bg-[#5C5CFF]/10 rounded-xl border border-[#5C5CFF]/20">
                <p className="text-sm text-white/70">
                  <span className="text-[#5C5CFF] font-semibold">Atenção:</span> Quando as vagas acabarem,
                  o desconto de 40% não estará mais disponível.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left">
              <p className="text-lg text-white/70 mb-6">
                Cada hora, mais investidores entram.
                <br />
                <span className="text-white font-medium">Garanta sua vaga antes que acabe.</span>
              </p>

              <button
                type="button"
                onClick={openModal}
                className="
                  bg-[#5C5CFF]
                  text-white
                  font-bold
                  text-lg
                  px-8 py-5
                  rounded-full
                  shadow-[0_15px_40px_-10px_rgba(92,92,255,0.5)]
                  transition-all
                  duration-300
                  ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.6)]
                  active:translate-y-0
                  active:scale-[0.98]
                  cursor-pointer
                "
              >
                Entrar Agora
                <span className="ml-2" aria-hidden="true">→</span>
              </button>

              <p className="mt-4 text-sm text-white/40">
                Sem compromisso. Sem cartão de crédito.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            Esses investidores já entenderam algo que você ainda não entendeu.
            <br />
            <span className="text-[#5C5CFF]">Quer descobrir o quê?</span>
          </p>
        </div>
      </div>
    </section>
  );
}

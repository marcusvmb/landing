/**
 * FEATURES SECTION V4: CURIOSITY + SCARCITY
 *
 * Frame Cognitivo: Mix de features reveladas e misteriosas
 *
 * Vieses Aplicados:
 * - Curiosity Gap: Algumas features completamente visíveis, outras em teaser
 * - Endowment Effect: "Sua calculadora", "Seu dashboard"
 * - Exclusivity: Features marcadas para fundadores
 *
 * Design:
 * - Bento grid com mix de revelado/blur
 * - Cards interativos com hover reveal parcial
 * - Badges de exclusividade
 */

'use client';

import { useState } from 'react';

const featuresReveladas = [
  {
    id: 'agregador',
    titulo: 'Agregador Nacional',
    descricao: 'Todos os leiloeiros do Brasil em um só lugar. Filtros avançados por região, tipo, valor.',
    icone: '🔍',
    tamanho: 'grande',
  },
  {
    id: 'alertas',
    titulo: 'Alertas Inteligentes',
    descricao: 'Receba notificações personalizadas sobre leilões que combinam com seu perfil.',
    icone: '🔔',
    tamanho: 'medio',
  },
  {
    id: 'calculadora',
    titulo: 'Calculadora de Viabilidade',
    descricao: 'Simule cenários e descubra o lucro potencial antes de dar o lance.',
    icone: '📊',
    tamanho: 'medio',
  },
];

const featuresMisteriosas = [
  {
    id: 'secret1',
    hint: 'Uma forma de saber antes...',
    icone: '🔒',
    exclusivo: true,
  },
  {
    id: 'secret2',
    hint: 'Dados que ninguém mostra...',
    icone: '🔒',
    exclusivo: true,
  },
  {
    id: 'secret3',
    hint: 'Gestão que multiplica resultados...',
    icone: '🔒',
    exclusivo: true,
  },
];

export default function FeaturesCuriosityScarcity() {
  const [hoveredSecret, setHoveredSecret] = useState<string | null>(null);

  return (
    <section
      className="bg-gradient-to-b from-[#EFF0F0] to-white py-16 lg:py-24 relative overflow-hidden"
      aria-labelledby="features-curiosity-heading"
    >
      {/* Background glow */}
      <div
        className="
          absolute
          bottom-0 right-0
          w-[600px] h-[600px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[120px]
          translate-x-1/4 translate-y-1/4
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2
            id="features-curiosity-heading"
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              tracking-[-0.03em]
              leading-[0.95]
              text-[#2B3259]
              mb-6
            "
          >
            Funcionalidades que você
            <br />
            <span className="text-[#5C5CFF]">vai querer ver</span>
          </h2>
          <p className="text-xl text-[#2B3259]/60 max-w-2xl mx-auto">
            Algumas já podemos mostrar. Outras{' '}
            <span className="text-[#5C5CFF] font-medium">só fundadores vão conhecer</span>.
          </p>
        </div>

        {/* Revealed Features - Bento Grid */}
        <div className="grid grid-cols-12 gap-5 mb-8">
          {/* Grande - spans 8 */}
          <article className="col-span-12 lg:col-span-8">
            <div
              className="
                h-full
                p-8 lg:p-10
                bg-white
                rounded-3xl
                border border-[#5C5CFF]/10
                shadow-[0_20px_60px_-15px_rgba(92,92,255,0.1)]
                hover:border-[#5C5CFF]/30
                hover:shadow-[0_25px_70px_-15px_rgba(92,92,255,0.2)]
                transition-all duration-300
              "
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#5C5CFF]/10 flex items-center justify-center text-3xl flex-shrink-0">
                  {featuresReveladas[0].icone}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#2B3259] mb-2">
                    {featuresReveladas[0].titulo}
                  </h3>
                  <p className="text-lg text-[#2B3259]/60 mb-4">
                    {featuresReveladas[0].descricao}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['50+ leiloeiros', 'Atualização diária', 'Filtros avançados'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#5C5CFF]/10 text-[#5C5CFF] text-sm font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Medio - spans 4 */}
          <article className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div
              className="
                h-full
                p-6
                bg-white
                rounded-3xl
                border border-[#5C5CFF]/10
                shadow-[0_15px_40px_-10px_rgba(92,92,255,0.1)]
                hover:border-[#5C5CFF]/30
                hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.2)]
                transition-all duration-300
              "
            >
              <div className="w-12 h-12 rounded-xl bg-[#5C5CFF]/10 flex items-center justify-center text-2xl mb-4">
                {featuresReveladas[1].icone}
              </div>
              <h3 className="text-xl font-bold text-[#2B3259] mb-2">
                {featuresReveladas[1].titulo}
              </h3>
              <p className="text-[#2B3259]/60">
                {featuresReveladas[1].descricao}
              </p>
            </div>
          </article>

          {/* Medio - spans 4 */}
          <article className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div
              className="
                h-full
                p-6
                bg-white
                rounded-3xl
                border border-[#5C5CFF]/10
                shadow-[0_15px_40px_-10px_rgba(92,92,255,0.1)]
                hover:border-[#5C5CFF]/30
                hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.2)]
                transition-all duration-300
              "
            >
              <div className="w-12 h-12 rounded-xl bg-[#5C5CFF]/10 flex items-center justify-center text-2xl mb-4">
                {featuresReveladas[2].icone}
              </div>
              <h3 className="text-xl font-bold text-[#2B3259] mb-2">
                {featuresReveladas[2].titulo}
              </h3>
              <p className="text-[#2B3259]/60">
                {featuresReveladas[2].descricao}
              </p>
            </div>
          </article>
        </div>

        {/* Secret Features - Teaser */}
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="bg-gradient-to-r from-[#5C5CFF]/10 via-[#8B5CF6]/10 to-[#5C5CFF]/10 rounded-3xl p-8 border border-[#5C5CFF]/20">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5C5CFF]/20 rounded-full">
                  <span className="text-[#5C5CFF]">⭐</span>
                  <span className="text-sm font-bold text-[#5C5CFF] uppercase tracking-wider">
                    Exclusivo para Fundadores
                  </span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {featuresMisteriosas.map((feature) => (
                  <div
                    key={feature.id}
                    className="
                      relative
                      p-6
                      bg-white/50
                      backdrop-blur-sm
                      rounded-2xl
                      border border-[#5C5CFF]/20
                      cursor-pointer
                      transition-all duration-300
                      hover:bg-white/70
                      hover:border-[#5C5CFF]/40
                    "
                    onMouseEnter={() => setHoveredSecret(feature.id)}
                    onMouseLeave={() => setHoveredSecret(null)}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-[#5C5CFF]/20 flex items-center justify-center text-2xl mx-auto mb-4">
                        {feature.icone}
                      </div>
                      <p
                        className={`
                          text-sm font-medium text-[#5C5CFF]
                          transition-all duration-300
                          ${hoveredSecret === feature.id ? 'blur-0' : 'blur-[3px]'}
                        `}
                      >
                        {feature.hint}
                      </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-white/60 to-transparent rounded-2xl">
                      <span className="text-xs font-bold text-[#5C5CFF] uppercase tracking-wider">
                        Em breve
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-sm text-[#2B3259]/50 mt-6">
                Passe o mouse para uma prévia. Detalhes completos só no lançamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

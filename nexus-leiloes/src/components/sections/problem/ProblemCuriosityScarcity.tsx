/**
 * PROBLEM SECTION V4: CURIOSITY + SCARCITY
 *
 * Frame Cognitivo: "Você sabe que algo está faltando"
 *
 * Vieses Aplicados:
 * - Curiosity Gap: Revelar sintomas, esconder solução
 * - Pattern recognition: Mostrar que há um padrão oculto
 * - Social comparison: Outros já descobriram
 *
 * Design:
 * - Background com subtle mystery (gradients)
 * - Cards com elementos "revelados" e "ocultos"
 * - Hint visual de que há mais para descobrir
 */

export default function ProblemCuriosityScarcity() {
  return (
    <section
      className="bg-gradient-to-br from-[#EFF0F0] via-[#EFF0F0] to-[#F5F5FF] py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="problem-curiosity-heading"
    >
      {/* Mystery gradient background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, #5C5CFF 0%, transparent 50%),
                            radial-gradient(circle at 70% 50%, #8B5CF6 0%, transparent 50%)`,
        }}
      />

      {/* Subtle glow */}
      <div
        className="
          absolute
          top-1/2 left-1/2
          w-[800px] h-[800px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[150px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5C5CFF]/10 rounded-full">
            <span className="text-[#5C5CFF]">🔍</span>
            <span className="text-sm font-medium text-[#5C5CFF]">
              Você percebeu isso?
            </span>
          </span>
        </div>

        {/* Headline - Curiosity focused */}
        <div className="text-center mb-12">
          <h2
            id="problem-curiosity-heading"
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
            Existe um padrão que os
            <br />
            <span className="text-[#5C5CFF]">melhores investidores</span> seguem
          </h2>
          <p className="text-xl text-[#2B3259]/60 max-w-2xl mx-auto">
            E a maioria nem sabe que está fazendo errado.
          </p>
        </div>

        {/* Symptoms Grid - What they know vs what they don't */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          {/* Visible symptoms - What you know */}
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#5C5CFF]/10 p-8 h-full shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)]">
              <h3 className="font-bold text-lg text-[#2B3259] mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#5C5CFF]/10 rounded-lg flex items-center justify-center text-sm">👁️</span>
                O que você sente
              </h3>
              <ul className="space-y-4">
                {[
                  'Passando horas em sites de leiloeiros diferentes',
                  'Planilhas que nunca ficam atualizadas',
                  'Perdendo leilões que pareciam perfeitos',
                  'Sensação de que está sempre um passo atrás',
                  'Decisões baseadas em intuição, não dados',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#5C5CFF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#5C5CFF] text-xs">✓</span>
                    </span>
                    <span className="text-[#2B3259]/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hidden insight - What you don't know */}
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-gradient-to-br from-[#5C5CFF]/10 to-[#8B5CF6]/5 backdrop-blur-sm rounded-3xl border border-[#5C5CFF]/20 p-8 h-full shadow-[0_20px_60px_-15px_rgba(92,92,255,0.2)] relative overflow-hidden">
              {/* Lock icon */}
              <div className="absolute top-4 right-4">
                <span className="text-2xl">🔒</span>
              </div>

              <h3 className="font-bold text-lg text-[#2B3259] mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#5C5CFF]/20 rounded-lg flex items-center justify-center text-sm">❓</span>
                O que você ainda não sabe
              </h3>

              <div className="space-y-4">
                {[
                  { visible: 'Por que alguns investidores', hidden: 'encontram antes de todos' },
                  { visible: 'O que diferencia quem lucra', hidden: 'de quem só observa' },
                  { visible: 'Existe uma forma de calcular', hidden: 'cenários que ninguém mostra' },
                  { visible: 'Como assessores profissionais', hidden: 'gerenciam 50+ clientes' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#5C5CFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#5C5CFF] text-xs">?</span>
                    </span>
                    <div>
                      <span className="text-[#2B3259]">{item.visible}</span>
                      <span className="ml-1 px-2 py-0.5 bg-[#5C5CFF]/20 rounded text-[#5C5CFF] text-sm font-medium blur-[2px] select-none">
                        {item.hidden}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Teaser */}
              <div className="mt-6 pt-6 border-t border-[#5C5CFF]/20">
                <p className="text-sm text-[#5C5CFF] font-medium">
                  Essas respostas serão reveladas apenas para fundadores.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof of pattern */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#5C5CFF]/10 p-6 text-center">
          <p className="text-lg text-[#2B3259]/80">
            <span className="text-[#5C5CFF] font-semibold">347 investidores</span> já descobriram o padrão.
            <br className="sm:hidden" />
            <span className="text-[#2B3259]/60"> Eles entenderam algo que você ainda não entendeu.</span>
          </p>
        </div>

        {/* Curiosity hook */}
        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl text-[#2B3259]/70 leading-relaxed max-w-3xl mx-auto">
            Se você sentiu que está fazendo algo errado, é porque está.
            <br />
            <span className="font-semibold text-[#5C5CFF]">A boa notícia? Existe um sistema para corrigir isso.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

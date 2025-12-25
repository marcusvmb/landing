/**
 * SOLUTION SECTION V3: AUTHORITY
 *
 * Frame Cognitivo: "A única plataforma completa"
 *
 * Vieses Aplicados:
 * - Authority: Posicionamento como expert/único
 * - Framing Effect: Posicionar como "o padrao" do mercado
 * - Cognitive Fluency: Argumento lógico e estruturado
 *
 * Design:
 * - Tipografia massiva, visual imponente
 * - Cards grandes com muito espacamento
 * - Badge de autoridade proeminente
 * - Underline glow no headline
 */

export default function SolutionAuthority() {
  return (
    <section
      className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="solution-authority-heading"
    >
      {/* Massive glow - center dominant */}
      <div
        className="
          absolute top-1/2 left-1/2
          w-[800px] h-[800px]
          bg-[#5C5CFF]/8
          rounded-full
          blur-[150px]
          -translate-x-1/2 -translate-y-1/2
        "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Authority Badge */}
        <div className="text-center mb-10">
          <span
            className="
              inline-flex items-center gap-3
              px-8 py-4
              bg-[#5C5CFF]
              rounded-full
              shadow-[0_15px_50px_-10px_rgba(92,92,255,0.5)]
            "
          >
            <span className="text-white font-bold uppercase tracking-widest text-sm">
              A Única Plataforma Completa
            </span>
          </span>
        </div>

        {/* Massive Headline */}
        <h2
          id="solution-authority-heading"
          className="
            text-center
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            font-black
            tracking-[-0.04em]
            leading-[0.95]
            text-[#2B3259]
            mb-8
          "
        >
          O Padrão Profissional Que o Mercado
          <br />
          <span className="relative inline-block">
            <span className="text-[#5C5CFF]">de Leilões Esperava</span>
            {/* Underline glow */}
            <span
              className="
                absolute -bottom-2 left-0 right-0
                h-3
                bg-[#5C5CFF]/30
                rounded-full
                blur-sm
              "
              aria-hidden="true"
            />
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg md:text-xl text-[#2B3259]/60 max-w-3xl mx-auto mb-20 leading-relaxed">
          Outras ferramentas resolvem pedacos do problema. A Nexus é a primeira e
          única hub que integra busca, análise e gestao em uma plataforma desenvolvida
          por quem entende do mercado.
        </p>

        {/* Massive Pillar 1 - Full Width */}
        <div
          className="
            mb-8
            p-8 lg:p-12
            bg-white/70 backdrop-blur-xl
            rounded-[2rem]
            border border-[#5C5CFF]/15
            shadow-[0_40px_100px_-30px_rgba(92,92,255,0.2)]
          "
        >
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Content */}
            <div className="col-span-12 lg:col-span-5">
              <div
                className="
                  w-20 h-20
                  bg-[#5C5CFF]/10
                  rounded-3xl
                  flex items-center justify-center
                  mb-6
                "
                aria-hidden="true"
              >
                <span className="text-5xl">&#128269;</span>
              </div>

              <h3
                className="
                  text-2xl lg:text-3xl
                  font-black
                  text-[#2B3259]
                  tracking-[-0.02em]
                  mb-4
                "
              >
                O Maior Agregador de Leilões do Brasil
              </h3>

              <p className="text-lg text-[#2B3259]/70 leading-relaxed mb-6">
                Integração exclusiva com mais de 20 leiloeiros oficiais. Cobertura
                nacional que nenhuma outra ferramenta oferece. Informações atualizadas
                em tempo real.
              </p>

              <ul className="space-y-3">
                {[
                  '+20 leiloeiras em um só lugar',
                  'Filtros por cidade, valor, tipo',
                  'Alertas automáticos por WhatsApp',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#2B3259]/80"
                  >
                    <span className="w-6 h-6 bg-[#5C5CFF]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#5C5CFF] text-sm">&#10003;</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Placeholder */}
            <div className="col-span-12 lg:col-span-7">
              <div
                className="
                  bg-[#5C5CFF]/5
                  rounded-2xl
                  p-6
                  h-64 lg:h-80
                  flex items-center justify-center
                  border border-[#5C5CFF]/10
                "
              >
                <div className="text-center">
                  <span className="text-6xl mb-4 block">&#128269;</span>
                  <span className="text-[#5C5CFF]/40 text-lg font-medium">
                    Interface de Busca Unificada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars 2 & 3 - Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Pillar 2 - ANALISAR - Smaller */}
          <div className="col-span-12 lg:col-span-5">
            <div
              className="
                h-full
                p-8
                bg-white/70 backdrop-blur-xl
                rounded-[2rem]
                border border-[#5C5CFF]/15
                shadow-[0_30px_80px_-25px_rgba(92,92,255,0.15)]
              "
            >
              <div
                className="
                  w-16 h-16
                  bg-[#5C5CFF]/10
                  rounded-2xl
                  flex items-center justify-center
                  mb-5
                "
                aria-hidden="true"
              >
                <span className="text-4xl">&#129518;</span>
              </div>

              <h3
                className="
                  text-xl lg:text-2xl
                  font-black
                  text-[#2B3259]
                  tracking-[-0.02em]
                  mb-3
                "
              >
                Calculadora Proprietária de Múltiplos Cenários
              </h3>

              <p className="text-[#2B3259]/70 leading-relaxed mb-5">
                Tecnologia exclusiva que simula diferentes condições de mercado,
                custos e margens. O nivel de análise que assessores profissionais
                exigem.
              </p>

              <div className="bg-[#5C5CFF]/5 rounded-xl p-4 border border-[#5C5CFF]/10">
                <div className="text-sm text-[#5C5CFF] font-semibold mb-1">
                  Diferencial Ànico
                </div>
                <div className="text-[#2B3259]/80">
                  Simule 5 cenários simultâneos
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3 - GERENCIAR - Larger */}
          <div className="col-span-12 lg:col-span-7">
            <div
              className="
                h-full
                p-8
                bg-white/70 backdrop-blur-xl
                rounded-[2rem]
                border border-[#5C5CFF]/15
                shadow-[0_30px_80px_-25px_rgba(92,92,255,0.15)]
              "
            >
              <div className="flex items-start gap-6">
                <div
                  className="
                    w-16 h-16
                    bg-[#5C5CFF]/10
                    rounded-2xl
                    flex items-center justify-center
                    flex-shrink-0
                  "
                  aria-hidden="true"
                >
                  <span className="text-4xl">&#128202;</span>
                </div>

                <div>
                  <h3
                    className="
                      text-xl lg:text-2xl
                      font-black
                      text-[#2B3259]
                      tracking-[-0.02em]
                      mb-3
                    "
                  >
                    Relatórios com Padrão Institucional
                  </h3>

                  <p className="text-[#2B3259]/70 leading-relaxed">
                    PDFs profissionais prontos para apresentar a clientes e
                    investidores. O mesmo nivel de documentação usado por grandes
                    assessorias do mercado.
                  </p>
                </div>
              </div>

              {/* Feature chips */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  'Dashboard',
                  'Pipeline',
                  'PDF Reports',
                  'Multi-cliente',
                  'Historico',
                ].map((chip) => (
                  <span
                    key={chip}
                    className="
                      px-4 py-2
                      bg-[#5C5CFF]/8
                      rounded-full
                      text-sm font-medium
                      text-[#5C5CFF]
                      border border-[#5C5CFF]/10
                    "
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Authority Statement */}
        <p
          className="
            mt-16
            text-center
            text-xl md:text-2xl
            text-[#2B3259]/60
            max-w-3xl mx-auto
          "
        >
          Nenhuma outra plataforma oferece{' '}
          <span className="font-bold text-[#2B3259]">
            BUSCAR + ANALISAR + GERENCIAR
          </span>{' '}
          em um só lugar.
        </p>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            className="
              bg-[#5C5CFF]
              text-white
              font-bold text-xl
              px-12 py-6
              rounded-full
              shadow-[0_20px_60px_-15px_rgba(92,92,255,0.5)]
              transition-all duration-300
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:-translate-y-1 hover:scale-[1.02]
              hover:shadow-[0_25px_70px_-15px_rgba(92,92,255,0.6)]
              active:translate-y-0 active:scale-[0.98]
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-[#2B3259]
              cursor-pointer
            "
          >
            Acessar a Plataforma Profissional
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">
            Lista de espera exclusiva. Vagas limitadas para o lançamento.
          </p>
        </div>
      </div>
    </section>
  );
}

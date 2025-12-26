/**
 * COMPARISON SECTION V4: CURIOSITY + SCARCITY
 *
 * Frame Cognitivo: "O que você está perdendo por não conhecer ainda"
 *
 * Vieses Aplicados:
 * - Curiosity Gap: Alguns benefícios revelados, outros em mistério
 * - Loss Aversion: Foco no que está perdendo
 * - Exclusivity: Vantagens de fundador
 *
 * Design:
 * - Duas colunas: "Sem Nexus" vs "Com Nexus (Fundador)"
 * - Items com mix de revelado/blur
 * - Destaque nos itens exclusivos
 */

export default function ComparisonCuriosityScarcity() {
  const comparisons = [
    {
      semNexus: 'Navegando em 50+ sites de leiloeiros',
      comNexus: 'Tudo em uma busca',
      revelado: true,
    },
    {
      semNexus: 'Planilhas manuais desatualizadas',
      comNexus: 'Dashboard automático',
      revelado: true,
    },
    {
      semNexus: 'Cálculos na intuição',
      comNexus: 'Simulador multi-cenário',
      revelado: true,
    },
    {
      semNexus: 'Perdendo leilões por falta de alerta',
      comNexus: 'Notificações em tempo real',
      revelado: true,
    },
    {
      semNexus: 'Sem dados sobre ocupante',
      comNexus: '[Funcionalidade exclusiva]',
      revelado: false,
      exclusivo: true,
    },
    {
      semNexus: 'Sem relatórios profissionais',
      comNexus: '[Revelado no lançamento]',
      revelado: false,
      exclusivo: true,
    },
    {
      semNexus: 'Gestão caótica de clientes',
      comNexus: '[Só para fundadores]',
      revelado: false,
      exclusivo: true,
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-[#EFF0F0] via-[#EFF0F0] to-[#F5F5FF] py-16 lg:py-24 relative overflow-hidden"
      aria-labelledby="comparison-curiosity-heading"
    >
      {/* Background elements */}
      <div
        className="
          absolute
          top-1/2 left-0
          w-[500px] h-[500px]
          bg-red-500/5
          rounded-full
          blur-[150px]
          -translate-x-1/2 -translate-y-1/2
        "
      />
      <div
        className="
          absolute
          top-1/2 right-0
          w-[500px] h-[500px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[150px]
          translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2
            id="comparison-curiosity-heading"
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
            Você vai continuar
            <br />
            <span className="text-[#5C5CFF]">perdendo tempo</span>?
          </h2>
          <p className="text-xl text-[#2B3259]/60 max-w-2xl mx-auto">
            Veja o que muda quando você entra para a lista de fundadores.
            <br />
            <span className="text-[#5C5CFF] font-medium">Alguns benefícios são exclusivos.</span>
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(92,92,255,0.15)] overflow-hidden border border-[#5C5CFF]/10">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-[#5C5CFF]/10">
            <div className="p-6 bg-red-50/50 text-center border-r border-[#5C5CFF]/10">
              <span className="text-2xl mb-2 block">😔</span>
              <h3 className="font-bold text-[#2B3259]">Sem Nexus</h3>
              <p className="text-sm text-[#2B3259]/50">Continuar como está</p>
            </div>
            <div className="p-6 bg-[#5C5CFF]/5 text-center">
              <span className="text-2xl mb-2 block">🚀</span>
              <h3 className="font-bold text-[#5C5CFF]">Com Nexus</h3>
              <p className="text-sm text-[#5C5CFF]/70">Acesso de Fundador</p>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`
                grid grid-cols-2
                ${index < comparisons.length - 1 ? 'border-b border-[#5C5CFF]/10' : ''}
              `}
            >
              {/* Sem Nexus */}
              <div className="p-5 border-r border-[#5C5CFF]/10 flex items-center gap-3">
                <span className="text-red-400">✗</span>
                <span className="text-[#2B3259]/70">{item.semNexus}</span>
              </div>

              {/* Com Nexus */}
              <div className="p-5 bg-[#5C5CFF]/[0.02] flex items-center gap-3">
                {item.revelado ? (
                  <>
                    <span className="text-[#5C5CFF]">✓</span>
                    <span className="text-[#2B3259] font-medium">{item.comNexus}</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#5C5CFF]">🔒</span>
                    <span className="text-[#5C5CFF] font-medium blur-[3px] select-none">
                      {item.comNexus}
                    </span>
                    {item.exclusivo && (
                      <span className="ml-auto px-2 py-1 bg-[#5C5CFF]/10 text-[#5C5CFF] text-xs font-bold rounded-full">
                        EXCLUSIVO
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-[#2B3259]/70 mb-4">
            <span className="text-[#5C5CFF] font-semibold">3 vantagens</span> só serão reveladas para quem entrar agora.
          </p>
          <p className="text-sm text-[#2B3259]/50">
            Fundadores terão acesso a tudo. Os outros, só ao básico.
          </p>
        </div>
      </div>
    </section>
  );
}

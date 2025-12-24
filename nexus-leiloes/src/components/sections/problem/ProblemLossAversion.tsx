/**
 * PROBLEM SECTION V1: LOSS AVERSION
 *
 * Frame Cognitivo: "O que você esta PERDENDO a cada dia"
 *
 * Vieses Aplicados:
 * - Loss Aversion: Perdas pesam 2x mais que ganhos
 * - Fear: Alerta sobre riscos e oportunidades perdidas
 * - Urgency: "A cada dia" cria senso de tempo passando
 *
 * Design:
 * - Background com undertone laranja/warning
 * - Contador de perda animado (-R$)
 * - Cards staggered (assimetricos)
 * - Shadows coloridas (CTA orange)
 */

export default function ProblemLossAversion() {
  return (
    <section
      className="bg-gradient-to-br from-[#EFF0F0] via-[#EFF0F0] to-[#FFF8F5] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="problem-loss-heading"
    >
      {/* Warning stripe pattern - subtle */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #FF7A00,
            #FF7A00 2px,
            transparent 2px,
            transparent 20px
          )`,
        }}
      />

      {/* Subtle glow */}
      <div
        className="
          absolute
          top-0 right-0
          w-[500px] h-[500px]
          bg-[#FF7A00]/5
          rounded-full
          blur-[120px]
          translate-x-1/4 -translate-y-1/4
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF7A00]/10 rounded-full border border-[#FF7A00]/15">
            <span className="w-2 h-2 bg-[#FF7A00] rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-sm font-semibold text-[#FF7A00] uppercase tracking-widest">
              Enquanto você espera
            </span>
          </span>
        </div>

        {/* Main Grid: Headline + Loss Counter */}
        <div className="grid grid-cols-12 gap-8 items-center mb-16">
          {/* Headline - 7 cols */}
          <div className="col-span-12 lg:col-span-7">
            <h2
              id="problem-loss-heading"
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                tracking-[-0.03em]
                leading-[0.95]
                text-[#2B3259]
              "
            >
              Enquanto você le isso,
              <br />
              um negocio lucrativo esta{' '}
              <span className="text-[#FF7A00]">escapando</span>
              <br />
              das suas maos
            </h2>
          </div>

          {/* Loss Counter - 5 cols */}
          <div className="col-span-12 lg:col-span-5">
            <div
              className="
                relative
                p-8 lg:p-10
                bg-white
                rounded-3xl
                border-2 border-[#FF7A00]/20
                shadow-[0_20px_60px_-15px_rgba(255,122,0,0.25)]
              "
            >
              {/* Pulsing dot */}
              <div
                className="
                  absolute -top-2 -right-2
                  w-5 h-5
                  bg-[#FF7A00]
                  rounded-full
                "
                aria-hidden="true"
              >
                <span className="absolute inset-0 bg-[#FF7A00] rounded-full animate-ping opacity-75" />
              </div>

              <span className="text-[#FF7A00]/50 text-sm font-bold uppercase tracking-widest">
                Perda Estimada
              </span>
              <div
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-black
                  text-[#FF7A00]
                  tracking-[-0.03em]
                  mt-2
                "
              >
                -R$12.450
              </div>
              <span className="text-lg text-[#2B3259]/60">/mês em oportunidades</span>
            </div>
          </div>
        </div>

        {/* Loss Cards - Staggered */}
        <div className="grid grid-cols-12 gap-5" role="list" aria-label="Perdas diarias">
          {/* Card 1 */}
          <article className="col-span-12 md:col-span-4 md:-mt-2" role="listitem">
            <div
              className="
                p-6
                bg-white/80
                backdrop-blur-sm
                rounded-2xl
                border border-[#FF7A00]/10
                shadow-[0_10px_30px_-10px_rgba(255,122,0,0.15)]
                hover:border-[#FF7A00]/30
                hover:shadow-[0_15px_40px_-10px_rgba(255,122,0,0.25)]
                transition-all duration-300
              "
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center mb-4" aria-hidden="true">
                <span className="text-2xl">&#9200;</span>
              </div>
              <h3 className="font-bold text-lg text-[#2B3259] mb-1">2 horas/dia</h3>
              <p className="text-sm text-[#2B3259]/60">alternando entre sites de leiloeiros</p>
            </div>
          </article>

          {/* Card 2 - shifted down */}
          <article className="col-span-12 md:col-span-4 md:mt-6" role="listitem">
            <div
              className="
                p-6
                bg-white/80
                backdrop-blur-sm
                rounded-2xl
                border border-[#FF7A00]/10
                shadow-[0_10px_30px_-10px_rgba(255,122,0,0.15)]
                hover:border-[#FF7A00]/30
                hover:shadow-[0_15px_40px_-10px_rgba(255,122,0,0.25)]
                transition-all duration-300
              "
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center mb-4" aria-hidden="true">
                <span className="text-2xl">&#10060;</span>
              </div>
              <h3 className="font-bold text-lg text-[#2B3259] mb-1">Oportunidades perdidas</h3>
              <p className="text-sm text-[#2B3259]/60">enquanto organiza planilhas</p>
            </div>
          </article>

          {/* Card 3 - shifted more */}
          <article className="col-span-12 md:col-span-4 md:mt-12" role="listitem">
            <div
              className="
                p-6
                bg-white/80
                backdrop-blur-sm
                rounded-2xl
                border border-[#FF7A00]/10
                shadow-[0_10px_30px_-10px_rgba(255,122,0,0.15)]
                hover:border-[#FF7A00]/30
                hover:shadow-[0_15px_40px_-10px_rgba(255,122,0,0.25)]
                transition-all duration-300
              "
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center mb-4" aria-hidden="true">
                <span className="text-2xl">&#128200;</span>
              </div>
              <h3 className="font-bold text-lg text-[#2B3259] mb-1">Vantagem competitiva</h3>
              <p className="text-sm text-[#2B3259]/60">para quem já usa ferramentas integradas</p>
            </div>
          </article>
        </div>

        {/* Agitation Quote */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-[#2B3259]/70 leading-relaxed">
            Cada minuto gasto organizando ferramentas fragmentadas e um minuto que{' '}
            <span className="font-semibold text-[#FF7A00]">seus concorrentes usam para fechar negocios</span>.
            Eles não estão perdendo tempo.{' '}
            <span className="font-semibold text-[#2B3259]">Você esta.</span>
          </p>
        </div>

        {/* Cost of Inaction */}
        <div
          className="
            mt-12
            py-6
            px-8
            bg-[#FF7A00]/5
            rounded-2xl
            border border-[#FF7A00]/10
            text-center
          "
        >
          <p className="text-lg text-[#2B3259]/80">
            <span className="text-[#FF7A00] font-semibold">&#9888;</span>{' '}
            A cada semana com esse caos, você deixa na mesa oportunidades que{' '}
            <span className="font-semibold">nunca mais voltarao</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

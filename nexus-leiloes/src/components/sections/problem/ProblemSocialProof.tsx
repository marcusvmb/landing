'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';

/**
 * PROBLEM SECTION V4: SOCIAL PROOF
 *
 * Frame Cognitivo: "Enquanto você luta, outros já resolveram isso"
 *
 * Vieses Aplicados:
 * - Social Proof: Mostrar que outros já encontraram a solução
 * - Bandwagon Effect: Tendencia a adotar o que outros estão fazendo
 * - Fear: FOMO - medo de ficar para tras
 * - Scarcity: Oportunidades estão sendo tomadas
 *
 * Design:
 * - Split layout 35/65 (sucesso vs luta)
 * - Success cards do lado esquerdo
 * - Pain points do lado direito (maior)
 * - Dot pattern matching hero
 */

export default function ProblemSocialProof() {
  const { openModal } = useLeadModal();
  return (
    <section
      className="bg-[#EFF0F0] py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="problem-social-heading"
    >
      {/* Dot pattern - matching hero but lighter */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(#5C5CFF 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Split layout - Asymmetric 35/65 */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* OTHERS side - Success stories (35%) */}
          <div className="col-span-12 lg:col-span-4 order-2 lg:order-1">
            {/* Eyebrow */}
            <span
              className="
                inline-block
                text-sm font-semibold
                text-[#5C5CFF]
                tracking-widest uppercase
                mb-6
              "
            >
              Eles já resolveram
            </span>

            {/* Success cards stack */}
            <div className="space-y-4">
              {/* Success Card 1 */}
              <article
                className="
                  p-5
                  bg-white
                  rounded-2xl
                  border border-[#5C5CFF]/15
                  shadow-[0_10px_30px_-10px_rgba(92,92,255,0.15)]
                "
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div
                    className="
                      w-12 h-12
                      rounded-full
                      bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]
                      flex items-center justify-center
                      shadow-[0_4px_12px_-3px_rgba(92,92,255,0.4)]
                      flex-shrink-0
                    "
                    aria-hidden="true"
                  >
                    <span className="text-white text-sm font-bold">RM</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-[#2B3259]">Ricardo M.</span>
                      <span className="text-green-500 text-sm" aria-label="verificado">&#10003;</span>
                    </div>
                    <p className="text-sm text-[#2B3259]/70">
                      &quot;Fechei 3 leilões esse mês usando o Hub. Antes perdia horas.&quot;
                    </p>
                  </div>
                </div>
              </article>

              {/* Success Card 2 - offset */}
              <article
                className="
                  ml-4
                  p-5
                  bg-white
                  rounded-2xl
                  border border-[#5C5CFF]/15
                  shadow-[0_10px_30px_-10px_rgba(92,92,255,0.15)]
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                      w-12 h-12
                      rounded-full
                      bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]
                      flex items-center justify-center
                      shadow-[0_4px_12px_-3px_rgba(92,92,255,0.4)]
                      flex-shrink-0
                    "
                    aria-hidden="true"
                  >
                    <span className="text-white text-sm font-bold">AS</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-[#2B3259]">Ana S.</span>
                      <span className="text-green-500 text-sm" aria-label="verificado">&#10003;</span>
                    </div>
                    <p className="text-sm text-[#2B3259]/70">
                      &quot;Meus clientes adoram os relatórios profissionais.&quot;
                    </p>
                  </div>
                </div>
              </article>

              {/* Counter badge */}
              <div
                className="
                  inline-flex items-center gap-3
                  px-5 py-3
                  bg-[#5C5CFF]/10
                  rounded-full
                  border border-[#5C5CFF]/15
                "
              >
                <div className="flex -space-x-2" aria-hidden="true">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="
                        w-8 h-8
                        rounded-full
                        bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]
                        border-2 border-white
                        flex items-center justify-center
                        text-white text-xs font-bold
                      "
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="font-bold text-[#5C5CFF]">+547</span>
                <span className="text-sm text-[#2B3259]/60">já simplificaram</span>
              </div>
            </div>
          </div>

          {/* Divider - desktop only */}
          <div className="hidden lg:flex col-span-1 justify-center order-2">
            <div
              className="
                w-px
                h-full
                bg-gradient-to-b
                from-transparent
                via-[#2B3259]/10
                to-transparent
              "
              aria-hidden="true"
            />
          </div>

          {/* YOU side - Struggle (65%) */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-3">
            {/* Eyebrow - warning tone */}
            <span
              className="
                inline-block
                text-sm font-semibold
                text-[#5C5CFF]/70
                tracking-widest uppercase
                mb-6
              "
            >
              E você?
            </span>

            {/* Headline */}
            <h2
              id="problem-social-heading"
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-black
                tracking-[-0.03em]
                leading-[1.1]
                text-[#2B3259]
                mb-8
              "
            >
              Seus concorrentes já abandonaram o Excel.
              <br />
              <span className="text-[#2B3259]/40">E você?</span>
            </h2>

            {/* Pain points - muted feeling */}
            <ul className="space-y-4 mb-8" aria-label="Seus desafios atuais">
              <li
                className="
                  flex items-center gap-4
                  p-4
                  bg-[#2B3259]/[0.03]
                  rounded-xl
                  border border-[#2B3259]/5
                "
              >
                <div
                  className="
                    w-10 h-10
                    rounded-lg
                    bg-[#5C5CFF]/10
                    flex items-center justify-center
                    text-[#5C5CFF]
                    flex-shrink-0
                  "
                  aria-hidden="true"
                >
                  &#9200;
                </div>
                <div>
                  <span className="font-medium text-[#2B3259]">3 horas/dia</span>
                  <span className="text-[#2B3259]/50"> buscando em 20+ sites</span>
                </div>
              </li>

              <li
                className="
                  flex items-center gap-4
                  p-4
                  bg-[#2B3259]/[0.03]
                  rounded-xl
                  border border-[#2B3259]/5
                "
              >
                <div
                  className="
                    w-10 h-10
                    rounded-lg
                    bg-[#5C5CFF]/10
                    flex items-center justify-center
                    text-[#5C5CFF]
                    flex-shrink-0
                  "
                  aria-hidden="true"
                >
                  &#10060;
                </div>
                <div>
                  <span className="font-medium text-[#2B3259]">Oportunidades perdidas</span>
                  <span className="text-[#2B3259]/50"> por desorganização</span>
                </div>
              </li>

              <li
                className="
                  flex items-center gap-4
                  p-4
                  bg-[#2B3259]/[0.03]
                  rounded-xl
                  border border-[#2B3259]/5
                "
              >
                <div
                  className="
                    w-10 h-10
                    rounded-lg
                    bg-[#5C5CFF]/10
                    flex items-center justify-center
                    text-[#5C5CFF]
                    flex-shrink-0
                  "
                  aria-hidden="true"
                >
                  &#128555;
                </div>
                <div>
                  <span className="font-medium text-[#2B3259]">Estresse constante</span>
                  <span className="text-[#2B3259]/50"> com falta de controle</span>
                </div>
              </li>
            </ul>

            {/* FOMO stat */}
            <div
              className="
                p-6
                bg-white
                rounded-2xl
                border border-[#5C5CFF]/15
                shadow-[0_10px_30px_-10px_rgba(92,92,255,0.1)]
              "
            >
              <p className="text-[#2B3259]/60 text-sm mb-2">
                Enquanto investidores com a Nexus fecham em média:
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-[#5C5CFF]">3x</span>
                <span className="text-lg text-[#2B3259]">mais leilões por mês</span>
              </div>
            </div>
          </div>
        </div>

        {/* Agitation */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-[#2B3259]/60 leading-relaxed">
            A cada dia, a distância entre você e{' '}
            <span className="font-semibold text-[#5C5CFF]">quem já usa ferramentas integradas</span>{' '}
            aumenta. As mesmas oportunidades.{' '}
            <span className="font-semibold text-[#2B3259]">A diferença é quem chega primeiro.</span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
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
              shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)]
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.5)]
              transition-all duration-300
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#2B3259]
              cursor-pointer
            "
          >
            Entrar para o grupo dos vencedores
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/60">
            Junte-se a 547+ investidores que já simplificaram
          </p>
        </div>
      </div>
    </section>
  );
}

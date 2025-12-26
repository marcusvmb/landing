/**
 * SEGMENTATION SECTION V4: CURIOSITY + SCARCITY
 *
 * Frame Cognitivo: "Benefícios exclusivos para quem entrar primeiro"
 *
 * Vieses Aplicados:
 * - Exclusivity: Badges de fundador por persona
 * - Curiosity: Benefícios especiais não revelados
 * - Unity: Criando identidade por tipo de usuário
 *
 * Design:
 * - Cards por persona com badge de fundador
 * - Mix de benefícios revelados e exclusivos
 * - Destaque visual para "entrar agora"
 */

'use client';

import { useLeadModal } from '@/contexts/LeadModalContext';

const personas = [
  {
    id: 'investidor',
    titulo: 'Investidor PF',
    subtitulo: 'Pessoa física que busca oportunidades',
    icone: '👤',
    cor: 'blue',
    beneficiosRevelados: [
      'Agregador nacional de leilões',
      'Alertas personalizados',
      'Calculadora de viabilidade',
    ],
    beneficiosExclusivos: 2,
  },
  {
    id: 'assessor',
    titulo: 'Assessor de Leilões',
    subtitulo: 'Profissional que atende clientes',
    icone: '💼',
    cor: 'purple',
    beneficiosRevelados: [
      'Gestão de carteira de clientes',
      'Relatórios profissionais em PDF',
      'Dashboard de oportunidades',
    ],
    beneficiosExclusivos: 3,
    destaque: true,
  },
  {
    id: 'escritorio',
    titulo: 'Escritório/Empresa',
    subtitulo: 'Times que precisam escalar',
    icone: '🏢',
    cor: 'green',
    beneficiosRevelados: [
      'Multi-usuários por conta',
      'Permissões personalizadas',
      'Integrações (em breve)',
    ],
    beneficiosExclusivos: 4,
  },
];

export default function SegmentationCuriosityScarcity() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="bg-[#EFF0F0] py-16 lg:py-24 relative overflow-hidden"
      aria-labelledby="segmentation-curiosity-heading"
    >
      {/* Background glow */}
      <div
        className="
          absolute
          top-0 right-1/4
          w-[500px] h-[500px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[120px]
          -translate-y-1/4
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5C5CFF]/10 rounded-full mb-6">
            <span className="text-[#5C5CFF]">⭐</span>
            <span className="text-sm font-medium text-[#5C5CFF]">
              Benefícios de Fundador por Perfil
            </span>
          </span>

          <h2
            id="segmentation-curiosity-heading"
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
            Qual É o
            <br />
            <span className="text-[#5C5CFF]">Seu Perfil</span>?
          </h2>
          <p className="text-xl text-[#2B3259]/60 max-w-2xl mx-auto">
            Cada tipo de usuário tem benefícios específicos.
            <br />
            <span className="text-[#5C5CFF] font-medium">Fundadores ganham extras exclusivos.</span>
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {personas.map((persona) => (
            <article
              key={persona.id}
              className={`
                relative
                p-8
                bg-white
                rounded-3xl
                border
                shadow-[0_20px_60px_-15px_rgba(92,92,255,0.1)]
                transition-all duration-300
                hover:shadow-[0_25px_70px_-15px_rgba(92,92,255,0.2)]
                ${persona.destaque
                  ? 'border-[#5C5CFF]/30 ring-2 ring-[#5C5CFF]/20'
                  : 'border-[#5C5CFF]/10 hover:border-[#5C5CFF]/30'
                }
              `}
            >
              {/* Badge de Fundador */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 bg-gradient-to-r from-[#5C5CFF] to-[#8B5CF6] text-white text-xs font-bold rounded-full shadow-[0_4px_15px_rgba(92,92,255,0.4)]">
                  FUNDADOR
                </span>
              </div>

              {/* Popular badge */}
              {persona.destaque && (
                <div className="absolute -top-3 -right-3">
                  <span className="px-3 py-1 bg-[#5C5CFF] text-white text-xs font-bold rounded-full shadow-lg">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#5C5CFF]/10 flex items-center justify-center text-3xl mb-6 mt-4">
                {persona.icone}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#2B3259] mb-1">
                {persona.titulo}
              </h3>
              <p className="text-sm text-[#2B3259]/50 mb-6">
                {persona.subtitulo}
              </p>

              {/* Revealed benefits */}
              <ul className="space-y-3 mb-6">
                {persona.beneficiosRevelados.map((beneficio, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#5C5CFF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#5C5CFF] text-xs">✓</span>
                    </span>
                    <span className="text-[#2B3259]/70">{beneficio}</span>
                  </li>
                ))}
              </ul>

              {/* Exclusive benefits teaser */}
              <div className="p-4 bg-gradient-to-r from-[#5C5CFF]/10 to-[#8B5CF6]/5 rounded-xl border border-[#5C5CFF]/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm">🔒</span>
                  <span className="text-sm font-semibold text-[#5C5CFF]">
                    + {persona.beneficiosExclusivos} benefícios exclusivos
                  </span>
                </div>
                <p className="text-xs text-[#2B3259]/50">
                  Revelados apenas para fundadores no lançamento
                </p>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={openModal}
                className={`
                  w-full
                  mt-6
                  font-bold
                  py-4
                  rounded-xl
                  transition-all
                  duration-300
                  cursor-pointer
                  ${persona.destaque
                    ? 'bg-[#5C5CFF] text-white shadow-[0_10px_30px_-10px_rgba(92,92,255,0.4)] hover:shadow-[0_15px_40px_-10px_rgba(92,92,255,0.5)] hover:-translate-y-0.5'
                    : 'bg-[#5C5CFF]/10 text-[#5C5CFF] hover:bg-[#5C5CFF]/20'
                  }
                `}
              >
                Garantir Vaga
              </button>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center">
          <p className="text-[#2B3259]/60">
            Não sabe qual perfil escolher? <span className="text-[#5C5CFF] font-medium">Cadastre-se e descubra</span>.
            <br />
            Você pode ajustar depois.
          </p>
        </div>
      </div>
    </section>
  );
}

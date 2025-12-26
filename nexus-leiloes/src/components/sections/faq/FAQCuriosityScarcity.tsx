/**
 * FAQ SECTION V4: CURIOSITY + SCARCITY
 *
 * Frame Cognitivo: Responder dúvidas + manter curiosidade
 *
 * Vieses Aplicados:
 * - Curiosity: Respostas parciais que incentivam cadastro
 * - Trust: Transparência sobre o que é conhecido
 * - Urgency: Foco em timing e escassez
 *
 * Design:
 * - Accordion com algumas respostas completas
 * - Algumas respostas com "teaser"
 * - Destaque para perguntas sobre exclusividade
 */

'use client';

import { useState } from 'react';

const faqs = [
  {
    pergunta: 'O que é a Nexus Leilões?',
    resposta: 'A Nexus é o primeiro Hub completo para investidores de leilões imobiliários. Unificamos busca, análise e gestão em uma única plataforma, eliminando a fragmentação de ferramentas.',
    completa: true,
  },
  {
    pergunta: 'O que vocês têm de diferente dos concorrentes?',
    resposta: 'Temos funcionalidades exclusivas que nenhum concorrente oferece. Não podemos revelar todas ainda, mas uma delas envolve dados que você não encontra em lugar nenhum.',
    completa: false,
    teaser: 'Cadastre-se para ver a lista completa no lançamento.',
  },
  {
    pergunta: 'Quanto vai custar?',
    resposta: 'O preço normal será revelado no lançamento. Mas fundadores que entrarem agora garantem 40% OFF vitalício - um desconto permanente na mensalidade, para sempre.',
    completa: true,
  },
  {
    pergunta: 'O que significa "vaga de fundador"?',
    resposta: 'Fundadores são os primeiros 500 usuários a se cadastrarem. Eles terão acesso antecipado, desconto vitalício de 40%, funcionalidades exclusivas e suporte prioritário.',
    completa: true,
  },
  {
    pergunta: 'Quando será o lançamento?',
    resposta: 'Estamos nos preparativos finais. Fundadores serão os primeiros a saber - com 7 dias de acesso antecipado antes do lançamento oficial.',
    completa: true,
  },
  {
    pergunta: 'O que são as "funcionalidades secretas"?',
    resposta: 'São recursos exclusivos que desenvolvemos e que nossos concorrentes não têm. Estamos guardando o anúncio para o lançamento, mas posso adiantar que envolvem...',
    completa: false,
    teaser: 'Só fundadores terão acesso a essa informação.',
  },
  {
    pergunta: 'Preciso pagar algo agora?',
    resposta: 'Não! O cadastro na lista de espera é 100% gratuito e sem compromisso. Você só decidirá se quer assinar depois de ver o produto.',
    completa: true,
  },
  {
    pergunta: 'Como sei que as vagas são realmente limitadas?',
    resposta: 'A escassez é real. Temos recursos limitados para onboarding personalizado e suporte prioritário. Quando as 500 vagas de fundador acabarem, o desconto e os benefícios exclusivos não estarão mais disponíveis.',
    completa: true,
  },
];

export default function FAQCuriosityScarcity() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-white py-16 lg:py-24 relative overflow-hidden"
      aria-labelledby="faq-curiosity-heading"
    >
      {/* Background glow */}
      <div
        className="
          absolute
          bottom-0 left-1/2
          w-[600px] h-[300px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[120px]
          -translate-x-1/2 translate-y-1/2
        "
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2
            id="faq-curiosity-heading"
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
              tracking-[-0.03em]
              leading-[0.95]
              text-[#2B3259]
              mb-6
            "
          >
            Perguntas
            <br />
            <span className="text-[#5C5CFF]">Frequentes</span>
          </h2>
          <p className="text-xl text-[#2B3259]/60">
            Tudo que você precisa saber sobre a Nexus e as vagas de fundador.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                bg-[#EFF0F0]
                rounded-2xl
                border
                transition-all duration-300
                ${openIndex === index
                  ? 'border-[#5C5CFF]/30 shadow-[0_10px_40px_-10px_rgba(92,92,255,0.15)]'
                  : 'border-transparent hover:border-[#5C5CFF]/20'
                }
              `}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#2B3259] pr-4">
                  {faq.pergunta}
                </span>
                <span
                  className={`
                    w-8 h-8
                    rounded-full
                    bg-[#5C5CFF]/10
                    flex items-center justify-center
                    flex-shrink-0
                    transition-transform duration-300
                    ${openIndex === index ? 'rotate-180' : ''}
                  `}
                >
                  <svg
                    className="w-4 h-4 text-[#5C5CFF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-[#5C5CFF]/10">
                    <p className="text-[#2B3259]/70 mt-4 leading-relaxed">
                      {faq.resposta}
                    </p>

                    {/* Teaser for incomplete answers */}
                    {!faq.completa && faq.teaser && (
                      <div className="mt-4 p-4 bg-[#5C5CFF]/5 rounded-xl border border-[#5C5CFF]/20">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🔒</span>
                          <span className="text-sm font-medium text-[#5C5CFF]">
                            {faq.teaser}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#2B3259]/60 mb-2">
            Ainda tem dúvidas?
          </p>
          <a
            href="mailto:contato@nexusleiloes.com.br"
            className="text-[#5C5CFF] font-medium hover:underline"
          >
            contato@nexusleiloes.com.br
          </a>
        </div>
      </div>
    </section>
  );
}

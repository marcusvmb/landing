'use client';

/**
 * FAQ SECTION V1: LOSS AVERSION
 *
 * Frame Cognitivo: "Duvidas que podem te custar caro"
 * Headlines focam em perdas evitadas, numeros de economia em cada resposta
 *
 * ASCII Layout:
 * +----------------------------------------------------------------------+
 * |                         EYEBROW BADGE [!]                            |
 * |                                                                      |
 * |         "Duvidas que Podem Te Custar Caro"                          |
 * |                       (headline)                                     |
 * +----------------------------------------------------------------------+
 * |                                                                      |
 * |   +------ col-span-7 ------+    +------ col-span-5 ------+          |
 * |   |                        |    |                        |          |
 * |   | [!] Quanto tempo...?   |    |   ECONOMIA TOTAL       |          |
 * |   | ▼ Resposta + savings   |    |   R$ 47.000+           |          |
 * |   |   "Evite perder R$5k"  |    |   estimada por ano     |          |
 * |   +------------------------+    |                        |          |
 * |   |                        |    |   +------------------+ |          |
 * |   | [!] O sistema...?      |    |   | Tempo: 730h/ano  | |          |
 * |   | ▼ Resposta + savings   |    |   | Erros: R$15k     | |          |
 * |   |                        |    |   | Oport: R$32k     | |          |
 * |   +------------------------+    |   +------------------+ |          |
 * |   |                        |    |                        |          |
 * |   | ... more questions     |    +------------------------+          |
 * |   |                        |                                        |
 * |   +------------------------+                                        |
 * |                                                                      |
 * +----------------------------------------------------------------------+
 *
 * Grid Structure: 12 cols asymmetric
 * - Questions accordion: col-span-7
 * - Savings summary: col-span-5 (sticky)
 *
 * Visual Elements:
 * - Warning icons on unopened questions
 * - Orange glow on hover
 * - Savings badges in each answer
 * - Running total in sidebar
 */

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  lossFrame: string;
  answer: string;
  savingsType: 'time' | 'money' | 'opportunity';
  savingsValue: string;
  savingsDesc: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'tempo',
    question: 'Quanto tempo leva para ver resultados?',
    lossFrame: 'Cada dia sem a Nexus = oportunidades perdidas',
    answer: 'A maioria dos usuários vê resultados significativos em 15-30 dias. A busca unificada economiza em média 2 horas por dia desde o primeiro acesso. Em um mês, você já terá recuperado o investimento em tempo.',
    savingsType: 'time',
    savingsValue: '60h',
    savingsDesc: 'economizadas no primeiro mês',
  },
  {
    id: 'tipos',
    question: 'O sistema funciona para qualquer tipo de leilão?',
    lossFrame: 'Limitar-se a um tipo = perder metade do mercado',
    answer: 'Sim! A Nexus cobre leilões judiciais e extrajudiciais de todos os principais leiloeiros do Brasil. Você não perde nenhuma oportunidade por estar "no site errado". Uma única busca, todos os leilões.',
    savingsType: 'opportunity',
    savingsValue: '2x',
    savingsDesc: 'mais oportunidades encontradas',
  },
  {
    id: 'experiência',
    question: 'Preciso de experiência em leilões para usar?',
    lossFrame: 'Inexperiência sem ferramenta = erros caros',
    answer: 'Não! A interface foi criada para ser intuitiva tanto para iniciantes quanto para experts. A calculadora multi-cenários guia você em cada decisão, eliminando erros de análise que consomem horas e geram insegurança.',
    savingsType: 'time',
    savingsValue: '100+ horas',
    savingsDesc: 'de cálculos manuais eliminados',
  },
  {
    id: 'calculadora',
    question: 'Como funciona a calculadora multi-cenários?',
    lossFrame: 'Cálculos manuais = decisões arriscadas',
    answer: 'Nossa calculadora exclusiva simula 5 cenários automaticamente: otimista, realista, conservador, com reforma e para revenda rápida. Você vê o ROI potencial de cada estratégia antes de dar um único lance.',
    savingsType: 'opportunity',
    savingsValue: '100%',
    savingsDesc: 'de confiança nas decisões',
  },
  {
    id: 'dados',
    question: 'Os dados são confiáveis?',
    lossFrame: 'Dados desatualizados = lances perdidos',
    answer: 'Absolutamente. Nossos dados vêm de fontes oficiais dos leiloeiros e são atualizados diariamente. Você nunca vai perder um leilão por informação desatualizada ou errada.',
    savingsType: 'opportunity',
    savingsValue: '3-5',
    savingsDesc: 'leilões salvos por mês',
  },
  {
    id: 'suporte',
    question: 'Qual suporte é oferecido?',
    lossFrame: 'Sem suporte = tempo perdido com dúvidas',
    answer: 'Oferecemos chat ao vivo, email e um onboarding gratuito personalizado. Você nunca fica sozinho. Nossa equipe responde em média em 2 horas, para que você nunca perca uma oportunidade esperando ajuda.',
    savingsType: 'time',
    savingsValue: '10h',
    savingsDesc: 'economizadas em suporte por mês',
  },
];

const savingsSummary = {
  total: '+15h/sem',
  breakdown: [
    { icon: '⏰', label: 'Tempo economizado', value: '730h/ano' },
    { icon: '🎯', label: 'Decisões seguras', value: '100% confiança' },
    { icon: '🔍', label: 'Oportunidades', value: 'Encontrar primeiro' },
  ],
};

export default function FAQLossAversion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden" aria-labelledby="faq-loss-heading">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#5C5CFF]/8 rounded-full blur-[150px] -translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#5C5CFF]/6 rounded-full blur-[120px] translate-x-1/3" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Headline */}
        <h2 id="faq-loss-heading" className="text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1.1] text-[#2B3259] mb-6">
          Duvidas que Podem{' '}
          <br className="hidden sm:block" />
          <span className="text-[#5C5CFF]">Te Custar Caro</span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Cada pergunta sem resposta é uma decisão adiada.{' '}
          <span className="font-semibold text-[#2B3259]">Cada decisão adiada custa dinheiro.</span>
        </p>

        {/* Main Content - Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* FAQ Accordion - 7 columns */}
          <div className="lg:col-span-7 space-y-4">
            {faqItems.map((item) => (
              <FAQAccordionItem key={item.id} item={item} isOpen={openId === item.id} onToggle={() => toggleFAQ(item.id)} />
            ))}
          </div>

          {/* Savings Summary - 5 columns, sticky */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#5C5CFF]/15 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)] overflow-hidden">
                {/* Header */}
                <div className="p-6 bg-gradient-to-br from-[#5C5CFF]/10 to-[#5C5CFF]/5 border-b border-[#5C5CFF]/10">
                  <p className="text-sm font-semibold text-[#5C5CFF] uppercase tracking-wider mb-2">Economia Total Estimada</p>
                  <p className="text-5xl font-black text-[#5C5CFF] tracking-tight">{savingsSummary.total}</p>
                  <p className="text-sm text-[#2B3259]/60 mt-1">por ano usando a Nexus</p>
                </div>

                {/* Breakdown */}
                <div className="p-6 space-y-4">
                  {savingsSummary.breakdown.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-[#EFF0F0]/80 rounded-2xl">
                      <div className="w-12 h-12 bg-[#5C5CFF]/10 rounded-xl flex items-center justify-center text-xl">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[#2B3259]/60">{item.label}</p>
                        <p className="text-lg font-bold text-[#2B3259]">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                  <button type="button" className="w-full bg-[#5C5CFF] text-white font-bold text-base px-6 py-4 rounded-xl shadow-[0_12px_35px_-10px_rgba(92,92,255,0.4)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-10px_rgba(92,92,255,0.5)] active:translate-y-0 active:scale-[0.98] cursor-pointer">
                    Parar de Perder Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FAQAccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQAccordionItem({ item, isOpen, onToggle }: FAQAccordionItemProps) {
  const savingsColor = item.savingsType === 'money' ? '#5C5CFF' : item.savingsType === 'time' ? '#5C5CFF' : '#2B3259';

  return (
    <div className={`group bg-white/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#5C5CFF]/30 shadow-[0_15px_40px_-10px_rgba(92,92,255,0.2)]' : 'border-[#5C5CFF]/10 shadow-[0_8px_30px_-15px_rgba(92,92,255,0.1)] hover:border-[#5C5CFF]/20 hover:shadow-[0_12px_35px_-10px_rgba(92,92,255,0.15)]'}`}>
      {/* Question Header */}
      <button type="button" onClick={onToggle} className="w-full p-6 text-left flex items-start gap-4 cursor-pointer" aria-expanded={isOpen}>
        {/* Warning Icon */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#5C5CFF] text-white' : 'bg-[#5C5CFF]/10 text-[#5C5CFF]'}`}>
          <span className="text-lg" aria-hidden="true">{isOpen ? '✓' : '!'}</span>
        </div>

        <div className="flex-1 min-w-0">
          {/* Loss Frame */}
          <p className="text-xs font-semibold text-[#5C5CFF] uppercase tracking-wider mb-1">{item.lossFrame}</p>
          {/* Question */}
          <h3 className="text-lg font-bold text-[#2B3259] leading-snug">{item.question}</h3>
        </div>

        {/* Toggle Arrow */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#EFF0F0] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4 text-[#2B3259]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pl-20">
          <p className="text-[#2B3259]/70 leading-relaxed mb-4">{item.answer}</p>

          {/* Savings Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl" style={{ backgroundColor: `${savingsColor}10` }}>
            <span className="text-2xl font-black" style={{ color: savingsColor }}>{item.savingsValue}</span>
            <span className="text-sm font-medium" style={{ color: `${savingsColor}CC` }}>{item.savingsDesc}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

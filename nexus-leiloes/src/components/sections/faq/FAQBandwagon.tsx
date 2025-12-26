'use client';

/**
 * FAQ SECTION V4: BANDWAGON
 *
 * Frame Cognitivo: "As duvidas mais comuns dos 2.500+ investidores"
 * Contador de "X pessoas também perguntaram", ordenado por popularidade
 *
 * ASCII Layout:
 * +----------------------------------------------------------------------+
 * |                         EYEBROW BADGE                                |
 * |                  2.547 investidores na lista                         |
 * |                                                                      |
 * |         "As Duvidas Mais Comuns dos Investidores"                   |
 * |                       (headline)                                     |
 * +----------------------------------------------------------------------+
 * |                                                                      |
 * |   +----------------------- FULL WIDTH -------------------------+    |
 * |   |                                                             |    |
 * |   |  ┌───────────────────────────────────────────────────────┐ |    |
 * |   |  │  #1 MAIS PERGUNTADA        [847 pessoas perguntaram]  │ |    |
 * |   |  │                                                       │ |    |
 * |   |  │  Q: Quanto tempo leva para ver resultados?            │ |    |
 * |   |  │                                                       │ |    |
 * |   |  │  R: 15-30 dias...                                    │ |    |
 * |   |  │                                                       │ |    |
 * |   |  │  [👍 Util: 94%]  [💬 23 comentarios]                  │ |    |
 * |   |  └───────────────────────────────────────────────────────┘ |    |
 * |   |                                                             |    |
 * |   |  ┌────────────────────┐  ┌────────────────────┐            |    |
 * |   |  │  #2                │  │  #3                │            |    |
 * |   |  │  [612 pessoas]     │  │  [589 pessoas]     │            |    |
 * |   |  │  Q: O sistema...?  │  │  Q: Preciso exp?   │            |    |
 * |   |  └────────────────────┘  └────────────────────┘            |    |
 * |   |                                                             |    |
 * |   |  ┌────────────────────┐  ┌────────────────────┐            |    |
 * |   |  │  #4                │  │  #5                │            |    |
 * |   |  │  [445 pessoas]     │  │  [398 pessoas]     │            |    |
 * |   |  └────────────────────┘  └────────────────────┘            |    |
 * |   |                                                             |    |
 * |   |  ┌───────────────────────────────────────────────────────┐ |    |
 * |   |  │  #6   [287 pessoas]                                   │ |    |
 * |   |  └───────────────────────────────────────────────────────┘ |    |
 * |   +-------------------------------------------------------------+    |
 * |                                                                      |
 * +----------------------------------------------------------------------+
 *
 * Grid Structure:
 * - #1 (most popular): full width, featured
 * - #2-3: 2 columns
 * - #4-5: 2 columns
 * - #6: full width
 *
 * Visual Elements:
 * - Popularity badges with people count
 * - "Util" percentage votes
 * - Ranking numbers
 * - Progress bars showing popularity
 */

import { useState } from 'react';
import { useLeadModal } from '@/contexts/LeadModalContext';

interface FAQItem {
  id: string;
  rank: number;
  question: string;
  answer: string;
  askedCount: number;
  helpfulPercent: number;
  commentCount: number;
}

const faqItems: FAQItem[] = [
  {
    id: 'tempo',
    rank: 1,
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'A maioria dos usuários vê resultados significativos em 15-30 dias. A busca unificada economiza em média 2 horas por dia desde o primeiro acesso. Em um mês, você já terá recuperado o investimento em tempo e estará operando muito mais rápido que a concorrência.',
    askedCount: 847,
    helpfulPercent: 94,
    commentCount: 23,
  },
  {
    id: 'tipos',
    rank: 2,
    question: 'O sistema funciona para qualquer tipo de leilão?',
    answer: 'Sim! A Nexus cobre leilões judiciais e extrajudiciais de todos os principais leiloeiros do Brasil. Você não perde nenhuma oportunidade por estar "no site errado". Uma única busca, todos os leilões disponíveis.',
    askedCount: 612,
    helpfulPercent: 97,
    commentCount: 18,
  },
  {
    id: 'experiência',
    rank: 3,
    question: 'Preciso de experiência em leilões para usar?',
    answer: 'Não! A interface foi criada para ser intuitiva tanto para iniciantes quanto para experts. A calculadora multi-cenários guia você em cada decisão, eliminando erros de cálculo que custam milhares de reais.',
    askedCount: 589,
    helpfulPercent: 92,
    commentCount: 31,
  },
  {
    id: 'calculadora',
    rank: 4,
    question: 'Como funciona a calculadora multicenários?',
    answer: 'Nossa calculadora exclusiva simula 5 cenários automaticamente: otimista, realista, conservador, com reforma e para revenda rápida. Você vê o ROI potencial de cada estratégia antes de dar um único lance.',
    askedCount: 445,
    helpfulPercent: 98,
    commentCount: 15,
  },
  {
    id: 'dados',
    rank: 5,
    question: 'Os dados são confiáveis?',
    answer: 'Absolutamente. Nossos dados vêm de fontes oficiais dos leiloeiros e são atualizados diariamente. Você nunca vai perder um leilão por informação desatualizada ou errada.',
    askedCount: 398,
    helpfulPercent: 96,
    commentCount: 12,
  },
  {
    id: 'suporte',
    rank: 6,
    question: 'Qual suporte é oferecido?',
    answer: 'Oferecemos chat ao vivo, email e um onboarding gratuito personalizado. Você nunca fica sozinho. Nossa equipe responde em média em 2 horas, para que você nunca perca uma oportunidade esperando ajuda.',
    askedCount: 287,
    helpfulPercent: 99,
    commentCount: 8,
  },
];

const totalInvestors = 2547;
const maxAskedCount = Math.max(...faqItems.map((item) => item.askedCount));

export default function FAQBandwagon() {
  const { openModal } = useLeadModal();
  const [openId, setOpenId] = useState<string | null>('tempo');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#EFF0F0] py-16 lg:py-20 relative overflow-hidden" aria-labelledby="faq-bandwagon-heading">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#5C5CFF]/8 rounded-full blur-[150px] translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#5C5CFF]/6 rounded-full blur-[120px] -translate-x-1/3" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow with Live Counter */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/60 backdrop-blur-sm rounded-full border border-[#5C5CFF]/15 shadow-[0_8px_30px_-10px_rgba(92,92,255,0.15)]">
            {/* Avatars Stack */}
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]/70 border-2 border-white flex items-center justify-center text-white text-xs font-bold">M</div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]/70 border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2B3259] to-[#2B3259]/70 border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
              <div className="w-7 h-7 rounded-full bg-[#5C5CFF] border-2 border-white flex items-center justify-center text-white text-xs font-bold">+</div>
            </div>
            <span className="text-sm font-semibold text-[#2B3259]">
              <span className="text-[#5C5CFF] font-bold">{totalInvestors.toLocaleString()}</span> investidores na lista
            </span>
          </span>
        </div>

        {/* Headline */}
        <h2 id="faq-bandwagon-heading" className="text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1.1] text-[#2B3259] mb-6">
          As dúvidas mais comuns{' '}
          <br className="hidden sm:block" />
          <span className="text-[#5C5CFF]">dos investidores</span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Ordenadas por popularidade.{' '}
          <span className="font-semibold text-[#2B3259]">Se outros investidores perguntaram, você também pode estar se perguntando.</span>
        </p>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {/* #1 - Featured, Full Width */}
          <FAQBandwagonCard item={faqItems[0]} isOpen={openId === faqItems[0].id} onToggle={() => toggleFAQ(faqItems[0].id)} maxCount={maxAskedCount} isFeatured={true} />

          {/* #2-3 - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqItems.slice(1, 3).map((item) => (
              <FAQBandwagonCard key={item.id} item={item} isOpen={openId === item.id} onToggle={() => toggleFAQ(item.id)} maxCount={maxAskedCount} isFeatured={false} />
            ))}
          </div>

          {/* #4-5 - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqItems.slice(3, 5).map((item) => (
              <FAQBandwagonCard key={item.id} item={item} isOpen={openId === item.id} onToggle={() => toggleFAQ(item.id)} maxCount={maxAskedCount} isFeatured={false} />
            ))}
          </div>

          {/* #6 - Full Width */}
          <FAQBandwagonCard item={faqItems[5]} isOpen={openId === faqItems[5].id} onToggle={() => toggleFAQ(faqItems[5].id)} maxCount={maxAskedCount} isFeatured={false} />
        </div>

        {/* Social Proof Summary */}
        <div className="mt-16 p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#5C5CFF]/10 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-4xl font-black text-[#5C5CFF]">{totalInvestors.toLocaleString()}+</p>
              <p className="text-sm text-[#2B3259]/60 mt-1">investidores na fila</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-[#5C5CFF]">96%</p>
              <p className="text-sm text-[#2B3259]/60 mt-1">acham as respostas úteis</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-[#2B3259]">107</p>
              <p className="text-sm text-[#2B3259]/60 mt-1">comentários da comunidade</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button type="button" onClick={openModal} className="bg-[#5C5CFF] text-white font-bold text-lg px-10 py-5 rounded-full shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.5)] active:translate-y-0 active:scale-[0.98] cursor-pointer">
            Entrar para a lista VIP
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">
            Junte-se aos {totalInvestors.toLocaleString()} investidores que já estão na fila
          </p>
        </div>
      </div>
    </section>
  );
}

interface FAQBandwagonCardProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  maxCount: number;
  isFeatured: boolean;
}

function FAQBandwagonCard({ item, isOpen, onToggle, maxCount, isFeatured }: FAQBandwagonCardProps) {
  const popularityPercent = (item.askedCount / maxCount) * 100;

  return (
    <div className={`group bg-white/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#5C5CFF]/30 shadow-[0_15px_40px_-10px_rgba(92,92,255,0.2)]' : 'border-[#5C5CFF]/10 shadow-[0_8px_30px_-15px_rgba(92,92,255,0.1)] hover:border-[#5C5CFF]/20 hover:shadow-[0_12px_35px_-10px_rgba(92,92,255,0.15)]'} ${isFeatured ? 'ring-2 ring-[#5C5CFF]/20' : ''}`}>
      {/* Question Header */}
      <button type="button" onClick={onToggle} className="w-full p-6 text-left cursor-pointer" aria-expanded={isOpen}>
        <div className="flex items-start gap-4">
          {/* Rank Badge */}
          <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black transition-all duration-300 ${item.rank === 1 ? 'bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]/80 text-white shadow-[0_8px_20px_-5px_rgba(92,92,255,0.4)]' : isOpen ? 'bg-[#5C5CFF] text-white' : 'bg-[#5C5CFF]/10 text-[#5C5CFF]'}`}>
            #{item.rank}
          </div>

          <div className="flex-1 min-w-0">
            {/* Popularity Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#5C5CFF]/10 rounded-full">
                <svg className="w-3.5 h-3.5 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="text-xs font-semibold text-[#5C5CFF]">{item.askedCount} pessoas perguntaram</span>
              </span>
              {item.rank === 1 && (
                <span className="px-2 py-0.5 bg-[#5C5CFF]/10 text-[#5C5CFF] text-xs font-bold rounded-full">MAIS PERGUNTADA</span>
              )}
            </div>

            {/* Question */}
            <h3 className={`font-bold text-[#2B3259] leading-snug ${isFeatured ? 'text-xl' : 'text-lg'}`}>{item.question}</h3>

            {/* Popularity Bar */}
            <div className="mt-3 h-1.5 bg-[#EFF0F0] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#5C5CFF] to-[#5C5CFF]/70 rounded-full transition-all duration-500" style={{ width: `${popularityPercent}%` }} />
            </div>
          </div>

          {/* Toggle Arrow */}
          <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#EFF0F0] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <svg className="w-4 h-4 text-[#2B3259]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Answer */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pl-20">
          <p className="text-[#2B3259]/70 leading-relaxed mb-4">{item.answer}</p>

          {/* Engagement Stats */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Helpful */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#5C5CFF]/10 rounded-full">
              <span className="text-[#5C5CFF]">&#128077;</span>
              <span className="text-sm font-semibold text-[#5C5CFF]">Útil: {item.helpfulPercent}%</span>
            </div>

            {/* Comments */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#5C5CFF]/10 rounded-full">
              <span className="text-[#5C5CFF]">&#128172;</span>
              <span className="text-sm font-semibold text-[#5C5CFF]">{item.commentCount} comentários</span>
            </div>

            {/* Share count implied */}
            <span className="text-xs text-[#2B3259]/40 ml-auto">Última atualização: Dez 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

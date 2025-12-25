'use client';

/**
 * FAQ SECTION V3: AUTHORITY
 *
 * Frame Cognitivo: "Especialistas respondem suas duvidas"
 * Cada resposta vem com badge "Verificado por especialista"
 *
 * ASCII Layout:
 * +----------------------------------------------------------------------+
 * |                         EYEBROW BADGE                                |
 * |                    [✓] Verificado por Especialistas                  |
 * |                                                                      |
 * |         "Especialistas Respondem Suas Dúvidas"                      |
 * |                       (headline)                                     |
 * +----------------------------------------------------------------------+
 * |                                                                      |
 * |   +------ col-span-8 ------+    +------ col-span-4 ------+          |
 * |   |                        |    |                        |          |
 * |   | ┌────────────────────┐ |    |  ┌──────────────────┐  |          |
 * |   | │ Q: Quanto tempo?   │ |    |  │ NOSSOS           │  |          |
 * |   | │                    │ |    |  │ ESPECIALISTAS    │  |          |
 * |   | │ R: 15-30 dias...   │ |    |  │                  │  |          |
 * |   | │                    │ |    |  │ [Avatar] Dr.     │  |          |
 * |   | │ ┌────────────────┐ │ |    |  │ [Avatar] Ana     │  |          |
 * |   | │ │ [Avatar]       │ │ |    |  │ [Avatar] Carlos  │  |          |
 * |   | │ │ Dr. Marcos     │ │ |    |  │                  │  |          |
 * |   | │ │ Especialista   │ │ |    |  │ 47 anos de       │  |          |
 * |   | │ │ em Leilões     │ │ |    |  │ experiência      │  |          |
 * |   | │ │ [✓] Verificado │ │ |    |  │ combinada        │  |          |
 * |   | │ └────────────────┘ │ |    |  └──────────────────┘  |          |
 * |   | └────────────────────┘ |    |                        |          |
 * |   |                        |    +------------------------+          |
 * |   | ┌────────────────────┐ |                                        |
 * |   | │ Q: O sistema...?  │ |                                        |
 * |   | └────────────────────┘ |                                        |
 * |   +------------------------+                                        |
 * +----------------------------------------------------------------------+
 *
 * Grid Structure: 12 cols asymmetric
 * - FAQ cards: col-span-8
 * - Expert panel: col-span-4 (sticky)
 *
 * Visual Elements:
 * - Expert avatars with credentials
 * - Verification badges
 * - Quote-style answers
 * - Professional color scheme (more navy, subtle accents)
 */

import { useState } from 'react';

interface Expert {
  id: string;
  name: string;
  role: string;
  credential: string;
  avatar: string;
  yearsExperience: number;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  expertId: string;
  verifiedDate: string;
}

const experts: Expert[] = [
  {
    id: 'marcos',
    name: 'Dr. Marcos Ribeiro',
    role: 'Especialista em Leilões Judiciais',
    credential: 'OAB/SP 123.456',
    avatar: 'MR',
    yearsExperience: 18,
  },
  {
    id: 'ana',
    name: 'Ana Carolina Santos',
    role: 'Analista de Investimentos',
    credential: 'CPA-20 Certificada',
    avatar: 'AC',
    yearsExperience: 12,
  },
  {
    id: 'carlos',
    name: 'Carlos Eduardo Lima',
    role: 'Consultor Imobiliário',
    credential: 'CRECI 54.321',
    avatar: 'CL',
    yearsExperience: 15,
  },
];

const faqItems: FAQItem[] = [
  {
    id: 'tempo',
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Na minha experiência com centenas de investidores, a maioria ve resultados significativos em 15 a 30 dias. A busca unificada economiza em media 2 horas por dia desde o primeiro acesso, e em um mês o investimento em tempo já está recuperado.',
    expertId: 'marcos',
    verifiedDate: 'Dez 2024',
  },
  {
    id: 'tipos',
    question: 'O sistema funciona para qualquer tipo de leilão?',
    answer: 'Sim, a Nexus cobre tanto leilões judiciais quanto extrajudiciais de todos os principais leiloeiros do Brasil. Como analista, posso afirmar que ter todas as opções em um só lugar e fundamental para não perder oportunidades de mercado.',
    expertId: 'ana',
    verifiedDate: 'Dez 2024',
  },
  {
    id: 'experiência',
    question: 'Preciso de experiência em leilões para usar?',
    answer: 'Absolutamente não. A interface foi desenhada para ser intuitiva tanto para iniciantes quanto para investidores experientes. A calculadora multi-cenarios guia cada decisao, eliminando a curva de aprendizado que normalmente levaria meses.',
    expertId: 'carlos',
    verifiedDate: 'Dez 2024',
  },
  {
    id: 'calculadora',
    question: 'Como funciona a calculadora multi-cenarios?',
    answer: 'Esta é uma das funcionalidades que mais recomendo. A calculadora simula automaticamente 5 cenários: otimista, realista, conservador, com reforma e para revenda rapida. Você visualiza o ROI potencial de cada estrategia antes de qualquer decisao.',
    expertId: 'ana',
    verifiedDate: 'Dez 2024',
  },
  {
    id: 'dados',
    question: 'Os dados são confiáveis?',
    answer: 'Como advogado especialista em leilões, posso garantir: os dados vem de fontes oficiais dos leiloeiros e sao atualizados diariamente. Essa confiabilidade é essencial para evitar problemas juridicos e financeiros no processo de arrematacao.',
    expertId: 'marcos',
    verifiedDate: 'Dez 2024',
  },
  {
    id: 'suporte',
    question: 'Qual suporte e oferecido?',
    answer: 'O suporte inclui chat ao vivo, email e onboarding gratuito personalizado. Na minha atuacao como consultor, vejo que esse acompanhamento inicial faz toda diferenca para o sucesso do investidor, especialmente nos primeiros negocios.',
    expertId: 'carlos',
    verifiedDate: 'Dez 2024',
  },
];

export default function FAQAuthority() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const totalYearsExperience = experts.reduce((sum, e) => sum + e.yearsExperience, 0);

  return (
    <section className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden" aria-labelledby="faq-authority-heading">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#2B3259]/5 rounded-full blur-[120px] -translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#5C5CFF]/8 rounded-full blur-[150px] translate-x-1/3" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2B3259]/5 rounded-full border border-[#2B3259]/10">
            <svg className="w-4 h-4 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-[#2B3259] uppercase tracking-wider">Verificado por Especialistas</span>
          </span>
        </div>

        {/* Headline */}
        <h2 id="faq-authority-heading" className="text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1.1] text-[#2B3259] mb-6">
          Especialistas Respondem{' '}
          <br className="hidden sm:block" />
          <span className="text-[#5C5CFF]">Suas Dúvidas</span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Respostas validadas por profissionais com{' '}
          <span className="font-semibold text-[#2B3259]">{totalYearsExperience} anos de experiência combinada</span>{' '}
          em leilões imobiliários.
        </p>

        {/* Main Content - Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* FAQ Cards - 8 columns */}
          <div className="lg:col-span-8 space-y-4">
            {faqItems.map((item) => {
              const expert = experts.find((e) => e.id === item.expertId)!;
              return (
                <FAQAuthorityCard key={item.id} item={item} expert={expert} isOpen={openId === item.id} onToggle={() => toggleFAQ(item.id)} />
              );
            })}
          </div>

          {/* Expert Panel - 4 columns, sticky */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#2B3259]/10 shadow-[0_20px_60px_-15px_rgba(43,50,89,0.15)] overflow-hidden">
                {/* Header */}
                <div className="p-6 bg-gradient-to-br from-[#2B3259] to-[#2B3259]/90">
                  <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">Nossos Especialistas</p>
                  <p className="text-3xl font-black text-white">{totalYearsExperience} anos</p>
                  <p className="text-sm text-white/70 mt-1">de experiência combinada</p>
                </div>

                {/* Experts List */}
                <div className="p-6 space-y-4">
                  {experts.map((expert) => (
                    <div key={expert.id} className="flex items-center gap-4 p-4 bg-[#EFF0F0]/80 rounded-2xl">
                      {/* Avatar */}
                      <div className="w-14 h-14 bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]/80 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-[0_8px_20px_-5px_rgba(92,92,255,0.4)]">
                        {expert.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[#2B3259] truncate">{expert.name}</p>
                        <p className="text-xs text-[#2B3259]/60 truncate">{expert.role}</p>
                        <p className="text-xs text-[#5C5CFF] font-medium">{expert.credential}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="p-6 pt-0">
                  <div className="p-4 bg-[#5C5CFF]/5 rounded-2xl border border-[#5C5CFF]/10 text-center">
                    <svg className="w-8 h-8 text-[#5C5CFF] mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-semibold text-[#2B3259]">Informações Verificadas</p>
                    <p className="text-xs text-[#2B3259]/60 mt-1">Todas as respostas são revisadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button type="button" className="bg-[#5C5CFF] text-white font-bold text-lg px-10 py-5 rounded-full shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.5)] active:translate-y-0 active:scale-[0.98] cursor-pointer">
            Falar com Especialista
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">
            Tire suas dúvidas diretamente com nossa equipe
          </p>
        </div>
      </div>
    </section>
  );
}

interface FAQAuthorityCardProps {
  item: FAQItem;
  expert: Expert;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQAuthorityCard({ item, expert, isOpen, onToggle }: FAQAuthorityCardProps) {
  return (
    <div className={`group bg-white/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#5C5CFF]/30 shadow-[0_15px_40px_-10px_rgba(92,92,255,0.2)]' : 'border-[#2B3259]/10 shadow-[0_8px_30px_-15px_rgba(43,50,89,0.1)] hover:border-[#5C5CFF]/20 hover:shadow-[0_12px_35px_-10px_rgba(92,92,255,0.15)]'}`}>
      {/* Question Header */}
      <button type="button" onClick={onToggle} className="w-full p-6 text-left flex items-start gap-4 cursor-pointer" aria-expanded={isOpen}>
        {/* Question Icon */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 ${isOpen ? 'bg-[#5C5CFF] text-white' : 'bg-[#5C5CFF]/10 text-[#5C5CFF]'}`}>
          ?
        </div>

        <div className="flex-1 min-w-0">
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
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pl-20">
          {/* Quote-style Answer */}
          <div className="relative pl-4 border-l-2 border-[#5C5CFF]/30 mb-6">
            <p className="text-[#2B3259]/70 leading-relaxed italic">&ldquo;{item.answer}&rdquo;</p>
          </div>

          {/* Expert Attribution */}
          <div className="flex items-center gap-4 p-4 bg-[#EFF0F0]/80 rounded-2xl">
            {/* Avatar */}
            <div className="w-12 h-12 bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]/80 rounded-xl flex items-center justify-center text-white font-bold shadow-[0_6px_15px_-4px_rgba(92,92,255,0.4)]">
              {expert.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[#2B3259]">{expert.name}</p>
              <p className="text-xs text-[#2B3259]/60">{expert.role}</p>
            </div>
            {/* Verified Badge */}
            <div className="flex items-center gap-1 px-3 py-1.5 bg-[#5C5CFF]/10 rounded-full">
              <svg className="w-3.5 h-3.5 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold text-[#5C5CFF]">{item.verifiedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

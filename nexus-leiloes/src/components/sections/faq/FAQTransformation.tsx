'use client';

/**
 * FAQ SECTION V2: TRANSFORMATION
 *
 * Frame Cognitivo: "De duvidas para decisões assertivas"
 * Perguntas organizadas em jornada: Antes > Durante > Depois
 *
 * ASCII Layout:
 * +----------------------------------------------------------------------+
 * |                         EYEBROW BADGE                                |
 * |                                                                      |
 * |         "De Duvidas para Decisões Assertivas"                       |
 * |                       (headline)                                     |
 * +----------------------------------------------------------------------+
 * |                                                                      |
 * |   +----- ANTES -----+  +----- DURANTE -----+  +----- DEPOIS -----+  |
 * |   |       (1)       |  |        (2)        |  |        (3)       |  |
 * |   |    ○ ─────────  |──|  ● ─────────────  |──|  ○ ────────────  |  |
 * |   |                 |  |                   |  |                  |  |
 * |   | ┌─────────────┐ |  | ┌───────────────┐ |  | ┌──────────────┐ |  |
 * |   | │ Q: Preciso  │ |  | │ Q: Como       │ |  | │ Q: Quanto    │ |  |
 * |   | │ experiência?│ |  | │ funciona a    │ |  | │ tempo para   │ |  |
 * |   | │             │ |  | │ calculadora?  │ |  | │ resultados?  │ |  |
 * |   | │ R: Não...   │ |  | │               │ |  | │              │ |  |
 * |   | └─────────────┘ |  | │ R: 5 cenarios │ |  | │ R: 15-30dias │ |  |
 * |   |                 |  | └───────────────┘ |  | └──────────────┘ |  |
 * |   | ┌─────────────┐ |  |                   |  |                  |  |
 * |   | │ Q: Tipos    │ |  | ┌───────────────┐ |  | ┌──────────────┐ |  |
 * |   | │ de leilão?  │ |  | │ Q: Dados      │ |  | │ Q: Suporte?  │ |  |
 * |   | └─────────────┘ |  | │ confiaveis?   │ |  | └──────────────┘ |  |
 * |   +-----------------+  | └───────────────┘ |  +------------------+  |
 * |                        +-------------------+                        |
 * +----------------------------------------------------------------------+
 *
 * Grid Structure:
 * - 3 columns for journey stages
 * - Timeline connector between stages
 * - Active stage highlighted
 *
 * Visual Elements:
 * - Progress dots on timeline
 * - Stage icons (search, calculate, success)
 * - Gradient flow from left to right
 */

import { useState } from 'react';
import { useLeadModal } from '@/contexts/LeadModalContext';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface JourneyStage {
  id: 'antes' | 'durante' | 'depois';
  title: string;
  subtitle: string;
  icon: string;
  questions: FAQItem[];
}

const journeyStages: JourneyStage[] = [
  {
    id: 'antes',
    title: 'Antes de começar',
    subtitle: 'Primeiros passos',
    icon: '🔍',
    questions: [
      {
        id: 'experiência',
        question: 'Preciso de experiência em leilões para usar?',
        answer: 'Não! A interface foi criada para ser intuitiva tanto para iniciantes quanto para experts. A calculadora multi-cenários guia você em cada decisão, eliminando a curva de aprendizado tradicional.',
      },
      {
        id: 'tipos',
        question: 'O sistema funciona para qualquer tipo de leilão?',
        answer: 'Sim! A Nexus cobre leilões judiciais e extrajudiciais de todos os principais leiloeiros do Brasil. Uma única busca, todos os leilões disponíveis.',
      },
    ],
  },
  {
    id: 'durante',
    title: 'Durante o uso',
    subtitle: 'Operação diária',
    icon: '🧮',
    questions: [
      {
        id: 'calculadora',
        question: 'Como funciona a calculadora multi-cenários?',
        answer: 'Nossa calculadora exclusiva simula 5 cenários automaticamente: otimista, realista, conservador, com reforma e para revenda rápida. Você vê o ROI potencial de cada estratégia antes de dar um único lance.',
      },
      {
        id: 'dados',
        question: 'Os dados são confiáveis?',
        answer: 'Absolutamente. Nossos dados vêm de fontes oficiais dos leiloeiros e são atualizados diariamente. Você nunca vai perder um leilão por informação desatualizada ou errada.',
      },
    ],
  },
  {
    id: 'depois',
    title: 'Depois dos resultados',
    subtitle: 'Sucesso contínuo',
    icon: '🏆',
    questions: [
      {
        id: 'tempo',
        question: 'Quanto tempo leva para ver resultados?',
        answer: 'A maioria dos usuários vê resultados significativos em 15-30 dias. A busca unificada economiza em média 2 horas por dia desde o primeiro acesso.',
      },
      {
        id: 'suporte',
        question: 'Qual suporte é oferecido?',
        answer: 'Oferecemos chat ao vivo, email e um onboarding gratuito personalizado. Você nunca fica sozinho. Nossa equipe responde em média em 2 horas.',
      },
    ],
  },
];

export default function FAQTransformation() {
  const { openModal } = useLeadModal();
  const [activeStage, setActiveStage] = useState<'antes' | 'durante' | 'depois'>('antes');
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  const currentStageIndex = journeyStages.findIndex((s) => s.id === activeStage);

  return (
    <section className="bg-[#EFF0F0] py-16 lg:py-20 relative overflow-hidden" aria-labelledby="faq-transform-heading">
      {/* Background Gradient Glows */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#5C5CFF]/5 via-transparent to-[#5C5CFF]/10 rounded-full blur-[100px] -translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5C5CFF]/8 rounded-full blur-[120px] translate-x-1/4" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/60 backdrop-blur-sm rounded-full border border-[#5C5CFF]/15 shadow-[0_8px_30px_-10px_rgba(92,92,255,0.15)]">
            <span className="text-[#2B3259]/40 text-sm">Dúvida</span>
            <span className="text-[#5C5CFF] font-bold">→</span>
            <span className="text-[#5C5CFF] font-semibold text-sm">Decisão</span>
          </span>
        </div>

        {/* Headline */}
        <h2 id="faq-transform-heading" className="text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1.1] text-[#2B3259] mb-6">
          De dúvidas para{' '}
          <span className="text-[#5C5CFF]">decisões assertivas</span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-lg text-[#2B3259]/60 max-w-3xl mx-auto mb-16 leading-relaxed">
          Sua jornada de transformação começa com as respostas certas.
          Navegue por cada etapa.
        </p>

        {/* Timeline Navigation */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {journeyStages.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                {/* Stage Button */}
                <button type="button" onClick={() => { setActiveStage(stage.id); setOpenQuestionId(null); }} className={`group flex flex-col items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer ${activeStage === stage.id ? 'bg-white shadow-[0_15px_40px_-10px_rgba(92,92,255,0.25)]' : 'hover:bg-white/50'}`}>
                  {/* Icon Circle */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${activeStage === stage.id ? 'bg-[#5C5CFF] text-white shadow-[0_8px_20px_-5px_rgba(92,92,255,0.5)]' : 'bg-[#5C5CFF]/10 text-[#5C5CFF] group-hover:bg-[#5C5CFF]/20'}`}>
                    {stage.icon}
                  </div>
                  {/* Label */}
                  <div className="text-center">
                    <p className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${activeStage === stage.id ? 'text-[#5C5CFF]' : 'text-[#2B3259]/40'}`}>
                      Etapa {index + 1}
                    </p>
                    <p className={`text-sm font-semibold transition-colors duration-300 ${activeStage === stage.id ? 'text-[#2B3259]' : 'text-[#2B3259]/60'}`}>
                      {stage.title}
                    </p>
                  </div>
                </button>

                {/* Connector Line */}
                {index < journeyStages.length - 1 && (
                  <div className="hidden md:block w-16 lg:w-24 h-1 mx-2 rounded-full overflow-hidden bg-[#2B3259]/10">
                    <div className={`h-full bg-gradient-to-r from-[#5C5CFF] to-[#5C5CFF]/50 transition-all duration-500 ${index < currentStageIndex ? 'w-full' : 'w-0'}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Stage Content */}
        <div className="relative">
          {journeyStages.map((stage) => (
            <div key={stage.id} className={`transition-all duration-500 ${activeStage === stage.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'}`}>
              {/* Stage Header Card */}
              <div className="bg-gradient-to-r from-[#5C5CFF]/10 via-white/80 to-white/60 backdrop-blur-sm rounded-3xl border border-[#5C5CFF]/15 p-8 mb-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-[#5C5CFF] rounded-2xl flex items-center justify-center text-4xl shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)]">
                    {stage.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#5C5CFF] uppercase tracking-wider mb-1">{stage.subtitle}</p>
                    <h3 className="text-3xl font-black text-[#2B3259] tracking-tight">{stage.title}</h3>
                  </div>
                </div>
              </div>

              {/* Questions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stage.questions.map((question, qIndex) => (
                  <div key={question.id} className={`${qIndex === 0 ? 'md:col-span-1' : ''}`}>
                    <QuestionCard question={question} isOpen={openQuestionId === question.id} onToggle={() => toggleQuestion(question.id)} stageColor={stage.id === 'antes' ? '#5C5CFF' : stage.id === 'durante' ? '#5C5CFF' : '#2B3259'} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Journey Summary */}
        <div className="mt-16 p-8 md:p-10 bg-gradient-to-r from-white/70 via-white/80 to-white/70 backdrop-blur-sm rounded-3xl border border-[#5C5CFF]/10 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* From */}
            <div className="text-center opacity-50">
              <p className="text-sm text-[#2B3259]/60 mb-2">De</p>
              <p className="text-xl font-bold text-[#2B3259]">Cheio de dúvidas</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <div className="w-20 h-1 bg-gradient-to-r from-[#5C5CFF]/30 to-[#5C5CFF] rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-[#5C5CFF]" />
              </div>
            </div>
            <div className="md:hidden text-3xl text-[#5C5CFF]">↓</div>

            {/* To */}
            <div className="text-center">
              <p className="text-sm text-[#5C5CFF] mb-2 font-semibold">Para</p>
              <p className="text-2xl font-black text-[#5C5CFF]">Decisões com confiança</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button type="button" onClick={openModal} className="bg-[#5C5CFF] text-white font-bold text-lg px-10 py-5 rounded-full shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.5)] active:translate-y-0 active:scale-[0.98] cursor-pointer">
            Iniciar minha transformação
          </button>
        </div>
      </div>
    </section>
  );
}

interface QuestionCardProps {
  question: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  stageColor: string;
}

function QuestionCard({ question, isOpen, onToggle, stageColor }: QuestionCardProps) {
  return (
    <div className={`group bg-white/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden h-full ${isOpen ? 'border-[#5C5CFF]/30 shadow-[0_15px_40px_-10px_rgba(92,92,255,0.2)]' : 'border-[#5C5CFF]/10 shadow-[0_8px_30px_-15px_rgba(92,92,255,0.1)] hover:border-[#5C5CFF]/20'}`}>
      <button type="button" onClick={onToggle} className="w-full p-6 text-left flex items-start gap-4 cursor-pointer" aria-expanded={isOpen}>
        {/* Progress Dot */}
        <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-1 transition-all duration-300 ${isOpen ? 'bg-[#5C5CFF] shadow-[0_0_15px_rgba(92,92,255,0.5)]' : 'bg-[#5C5CFF]/20'}`} style={{ backgroundColor: isOpen ? stageColor : undefined }} />

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-[#2B3259] leading-snug">{question.question}</h3>
        </div>

        {/* Toggle Arrow */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#EFF0F0] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4 text-[#2B3259]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pl-14">
          <p className="text-[#2B3259]/70 leading-relaxed">{question.answer}</p>

          {/* Transformation Indicator */}
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stageColor }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: stageColor }}>
              Transformação em andamento
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

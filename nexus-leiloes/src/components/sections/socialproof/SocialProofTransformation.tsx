/**
 * SOCIAL PROOF SECTION V2: TRANSFORMATION
 *
 * Frame Cognitivo: "Veja a jornada de transformação"
 *
 * Vieses Aplicados:
 * - Narrative Transportation: Historia de antes/depois
 * - Identifiable Victim Effect: Pessoas reais com jornadas reais
 * - Social Proof: Se eles mudaram, eu também posso
 *
 * Design:
 * - Timeline vertical com linha conectora
 * - Cards Before/After lado a lado
 * - Fotos de avatares com destaque visual
 * - Transicao de cores: laranja (antes) para azul (depois)
 */

const transformations = [
  {
    id: 1,
    name: 'Rodrigo M.',
    role: 'Investidor PF',
    avatar: 'RM',
    before: {
      title: 'Antes do Nexus',
      pain: 'Perdia horas em planilhas e errava cálculos',
      metric: '-R$32.000',
      metricLabel: 'em erros',
    },
    after: {
      title: 'Depois do Nexus',
      gain: 'Análises precisas em minutos',
      metric: 'R$32.000',
      metricLabel: 'economizados',
    },
    timeframe: '6 meses',
  },
  {
    id: 2,
    name: 'Ana Paula',
    role: 'Assessora de Leilões',
    avatar: 'AP',
    before: {
      title: 'Antes do Nexus',
      pain: 'Dificuldade em escalar a carteira de clientes',
      metric: '12',
      metricLabel: 'clientes',
    },
    after: {
      title: 'Depois do Nexus',
      gain: 'Relatorios profissionais que impressionam',
      metric: '36',
      metricLabel: 'clientes',
    },
    timeframe: '8 meses',
  },
  {
    id: 3,
    name: 'Marcos',
    role: 'Escritorio de Assessoria',
    avatar: 'MC',
    before: {
      title: 'Antes do Nexus',
      pain: 'Precisava contratar para crescer',
      metric: '+2',
      metricLabel: 'funcionarios',
    },
    after: {
      title: 'Depois do Nexus',
      gain: 'Automatizacao que dispensa contratacoes',
      metric: '50+',
      metricLabel: 'clientes gerenciados',
    },
    timeframe: '1 ano',
  },
  {
    id: 4,
    name: 'Julia',
    role: 'Compradora Residencial',
    avatar: 'JL',
    before: {
      title: 'Antes do Nexus',
      pain: 'Medo de leilões e processos obscuros',
      metric: '0',
      metricLabel: 'imóveis',
    },
    after: {
      title: 'Depois do Nexus',
      gain: 'Compra segura com visao completa',
      metric: '1',
      metricLabel: 'imóvel conquistado',
    },
    timeframe: '3 meses',
  },
];

export default function SocialProofTransformation() {
  return (
    <section className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden" aria-labelledby="social-transform-heading">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5C5CFF]/6 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#5C5CFF]/8 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#5C5CFF]/10 to-[#5C5CFF]/10 rounded-full border border-[#5C5CFF]/15">
            <span className="text-[#5C5CFF]">Antes</span>
            <span className="text-[#2B3259]/30">&rarr;</span>
            <span className="text-[#5C5CFF]">Depois</span>
          </span>
        </div>

        {/* Headline */}
        <h2 id="social-transform-heading" className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.1] text-[#2B3259] mb-6">
          Jornadas de <span className="text-[#5C5CFF]">Transformação</span>
        </h2>
        <p className="text-center text-lg text-[#2B3259]/60 max-w-2xl mx-auto mb-16 leading-relaxed">
          Investidores reais. Resultados reais. Veja como o Nexus mudou suas operacoes.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#5C5CFF]/30 via-[#5C5CFF]/30 to-[#5C5CFF]/30 -translate-x-1/2" aria-hidden="true" />

          {/* Transformation Cards */}
          <div className="space-y-12 lg:space-y-0">
            {transformations.map((t, index) => (
              <TransformationCard key={t.id} transformation={t} index={index} />
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#5C5CFF]/15 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.15)]">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-black text-[#5C5CFF] line-through opacity-60">Frustrado</p>
                  <p className="text-sm text-[#2B3259]/50 mt-1">Era assim</p>
                </div>
                <div className="text-3xl text-[#5C5CFF]">&rarr;</div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-black text-[#5C5CFF]">Lucrando</p>
                  <p className="text-sm text-[#2B3259]/50 mt-1">Agora sao assim</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button type="button" className="bg-[#5C5CFF] text-white font-bold text-lg px-10 py-5 rounded-full shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.5)] active:translate-y-0 active:scale-[0.98] cursor-pointer">
            Comecar Minha Transformação
          </button>
          <p className="mt-4 text-sm text-[#2B3259]/50">Sua jornada de sucesso começa aqui</p>
        </div>
      </div>
    </section>
  );
}

interface Transformation {
  id: number;
  name: string;
  role: string;
  avatar: string;
  before: {
    title: string;
    pain: string;
    metric: string;
    metricLabel: string;
  };
  after: {
    title: string;
    gain: string;
    metric: string;
    metricLabel: string;
  };
  timeframe: string;
}

function TransformationCard({ transformation, index }: { transformation: Transformation; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`lg:grid lg:grid-cols-12 lg:gap-8 lg:py-12 ${index > 0 ? '' : ''}`}>
      {/* Before Card */}
      <div className={`col-span-5 ${isEven ? 'lg:col-start-1' : 'lg:col-start-8 lg:order-2'}`}>
        <div className="group bg-white/60 backdrop-blur-sm rounded-2xl border border-[#5C5CFF]/15 p-6 shadow-[0_15px_40px_-15px_rgba(92,92,255,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(92,92,255,0.2)] hover:-translate-y-1 transition-all duration-400">
          <span className="inline-block px-3 py-1 bg-[#5C5CFF]/10 rounded-full text-xs font-bold text-[#5C5CFF] uppercase tracking-wider mb-4">{transformation.before.title}</span>
          <p className="text-[#2B3259]/70 mb-4">{transformation.before.pain}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#5C5CFF]/70 line-through">{transformation.before.metric}</span>
            <span className="text-sm text-[#2B3259]/50">{transformation.before.metricLabel}</span>
          </div>
        </div>
      </div>

      {/* Center - Avatar + Timeline Node */}
      <div className="col-span-2 hidden lg:flex flex-col items-center justify-center relative">
        {/* Timeline Node */}
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-[#5C5CFF] to-[#5C5CFF]/80 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-[0_10px_30px_-5px_rgba(92,92,255,0.5)] border-4 border-[#EFF0F0]">
            {transformation.avatar}
          </div>
          {/* Timeframe Badge */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="px-3 py-1 bg-[#5C5CFF]/10 rounded-full text-xs font-semibold text-[#5C5CFF]">{transformation.timeframe}</span>
          </div>
        </div>
      </div>

      {/* Mobile Avatar */}
      <div className="lg:hidden flex items-center justify-center my-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#5C5CFF] rounded-full flex items-center justify-center text-white font-bold shadow-[0_8px_20px_-5px_rgba(92,92,255,0.4)]">
            {transformation.avatar}
          </div>
          <div>
            <p className="font-bold text-[#2B3259]">{transformation.name}</p>
            <p className="text-sm text-[#2B3259]/60">{transformation.role}</p>
          </div>
          <span className="ml-4 px-3 py-1 bg-[#5C5CFF]/10 rounded-full text-xs font-semibold text-[#5C5CFF]">{transformation.timeframe}</span>
        </div>
      </div>

      {/* After Card */}
      <div className={`col-span-5 ${isEven ? 'lg:col-start-8' : 'lg:col-start-1 lg:order-1'}`}>
        <div className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-[#5C5CFF]/20 p-6 shadow-[0_15px_40px_-15px_rgba(92,92,255,0.15)] hover:shadow-[0_20px_50px_-15px_rgba(92,92,255,0.25)] hover:-translate-y-1 transition-all duration-400">
          <span className="inline-block px-3 py-1 bg-[#5C5CFF]/10 rounded-full text-xs font-bold text-[#5C5CFF] uppercase tracking-wider mb-4">{transformation.after.title}</span>
          <p className="text-[#2B3259] font-medium mb-4">{transformation.after.gain}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#5C5CFF]">{transformation.after.metric}</span>
            <span className="text-sm text-[#2B3259]/60">{transformation.after.metricLabel}</span>
          </div>
        </div>
      </div>

      {/* Desktop Name/Role - Below node */}
      <div className="col-span-2 hidden lg:flex flex-col items-center mt-12">
        <p className="font-bold text-[#2B3259] text-center">{transformation.name}</p>
        <p className="text-sm text-[#2B3259]/60 text-center">{transformation.role}</p>
      </div>
    </div>
  );
}

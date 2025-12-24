/**
 * Features Preview Page
 *
 * Pagina para visualizar as 4 variacoes da Features Section
 * lado a lado para comparacao e teste A/B.
 */

import {
  FeaturesLossAversion,
  FeaturesTransformation,
  FeaturesAuthority,
  FeaturesSocialProof,
} from '@/components/sections/features';

export default function FeaturesPreviewPage() {
  return (
    <main className="bg-[#EFF0F0]">
      {/* Header */}
      <div className="bg-[#2B3259] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Features Section - 4 Variacoes
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Cada versao aplica um frame cognitivo diferente para apresentar as mesmas
            6 features do Nexus Leiloes. Role para ver todas.
          </p>

          {/* Nav */}
          <nav className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#loss-aversion"
              className="px-4 py-2 bg-[#FF7A00] rounded-full text-sm font-semibold hover:bg-[#FF7A00]/90 transition-colors"
            >
              V1: Loss Aversion
            </a>
            <a
              href="#transformation"
              className="px-4 py-2 bg-[#5C5CFF] rounded-full text-sm font-semibold hover:bg-[#5C5CFF]/90 transition-colors"
            >
              V2: Transformation
            </a>
            <a
              href="#authority"
              className="px-4 py-2 bg-[#5C5CFF] rounded-full text-sm font-semibold hover:bg-[#5C5CFF]/90 transition-colors"
            >
              V3: Authority
            </a>
            <a
              href="#social-proof"
              className="px-4 py-2 bg-[#FF7A00] rounded-full text-sm font-semibold hover:bg-[#FF7A00]/90 transition-colors"
            >
              V4: Social Proof
            </a>
          </nav>
        </div>
      </div>

      {/* V1: Loss Aversion */}
      <div id="loss-aversion">
        <div className="bg-[#FF7A00]/10 py-4 px-6 border-b border-[#FF7A00]/20">
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            <span className="w-10 h-10 bg-[#FF7A00] rounded-xl flex items-center justify-center text-white font-bold">
              V1
            </span>
            <div>
              <h2 className="font-bold text-[#2B3259]">Loss Aversion</h2>
              <p className="text-sm text-[#2B3259]/60">
                Frame: &quot;Cada feature elimina uma perda especifica&quot;
              </p>
            </div>
          </div>
        </div>
        <FeaturesLossAversion />
      </div>

      {/* V2: Transformation */}
      <div id="transformation">
        <div className="bg-[#5C5CFF]/10 py-4 px-6 border-b border-[#5C5CFF]/20">
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            <span className="w-10 h-10 bg-[#5C5CFF] rounded-xl flex items-center justify-center text-white font-bold">
              V2
            </span>
            <div>
              <h2 className="font-bold text-[#2B3259]">Transformation</h2>
              <p className="text-sm text-[#2B3259]/60">
                Frame: &quot;De X para Y&quot; - cada feature como uma transformacao
              </p>
            </div>
          </div>
        </div>
        <FeaturesTransformation />
      </div>

      {/* V3: Authority */}
      <div id="authority">
        <div className="bg-[#5C5CFF]/10 py-4 px-6 border-b border-[#5C5CFF]/20">
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            <span className="w-10 h-10 bg-[#5C5CFF] rounded-xl flex items-center justify-center text-white font-bold">
              V3
            </span>
            <div>
              <h2 className="font-bold text-[#2B3259]">Authority</h2>
              <p className="text-sm text-[#2B3259]/60">
                Frame: &quot;O unico que oferece tudo isso&quot; - Bento Grid assimetrico
              </p>
            </div>
          </div>
        </div>
        <FeaturesAuthority />
      </div>

      {/* V4: Social Proof */}
      <div id="social-proof">
        <div className="bg-[#FF7A00]/10 py-4 px-6 border-b border-[#FF7A00]/20">
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            <span className="w-10 h-10 bg-[#FF7A00] rounded-xl flex items-center justify-center text-white font-bold">
              V4
            </span>
            <div>
              <h2 className="font-bold text-[#2B3259]">Social Proof</h2>
              <p className="text-sm text-[#2B3259]/60">
                Frame: &quot;Features que nossos usuarios mais amam&quot;
              </p>
            </div>
          </div>
        </div>
        <FeaturesSocialProof />
      </div>

      {/* Footer */}
      <div className="bg-[#2B3259] text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            Nexus Leiloes - Features Section Preview
          </p>
        </div>
      </div>
    </main>
  );
}

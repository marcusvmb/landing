'use client';

import { useState } from 'react';
import HeroLossAversion from '@/components/heroes/HeroLossAversion';
import HeroTransformation from '@/components/heroes/HeroTransformation';
import HeroAuthority from '@/components/heroes/HeroAuthority';
import HeroSocialProof from '@/components/heroes/HeroSocialProof';
import {
  ProblemLossAversion,
  ProblemTransformation,
  ProblemAuthority,
  ProblemSocialProof,
} from '@/components/sections/problem';
import {
  SolutionLossAversion,
  SolutionTransformation,
  SolutionAuthority,
  SolutionSocialProof,
} from '@/components/sections/solution';
import {
  FeaturesLossAversion,
  FeaturesTransformation,
  FeaturesAuthority,
  FeaturesSocialProof,
} from '@/components/sections/features';
import {
  SegmentationLossAversion,
  SegmentationTransformation,
  SegmentationAuthority,
  SegmentationSocialProof,
} from '@/components/sections/segmentation';
import {
  ComparisonLossAversion,
  ComparisonTransformation,
  ComparisonAuthority,
  ComparisonSocialProof,
} from '@/components/sections/comparison';
import {
  SocialProofLossAversion,
  SocialProofTransformation,
  SocialProofAuthority,
  SocialProofBandwagon,
} from '@/components/sections/socialproof';
import {
  FAQLossAversion,
  FAQTransformation,
  FAQAuthority,
  FAQBandwagon,
} from '@/components/sections/faq';
import {
  FinalCTALossAversion,
  FinalCTATransformation,
  FinalCTAAuthority,
  FinalCTABandwagon,
} from '@/components/sections/finalcta';

type LandingVariant = 'v1' | 'v2' | 'v3' | 'v4';

const VARIANT_INFO: Record<LandingVariant, { label: string; description: string; frame: string }> = {
  'v1': {
    label: 'V1: Loss Aversion',
    description: 'Medo de perder oportunidades',
    frame: 'Aversão à Perda'
  },
  'v2': {
    label: 'V2: Transformation',
    description: 'Antes/Depois - Caos → Ordem',
    frame: 'Transformação'
  },
  'v3': {
    label: 'V3: Authority',
    description: 'Único no mercado',
    frame: 'Autoridade'
  },
  'v4': {
    label: 'V4: Social Proof',
    description: 'Validação social + Form inline',
    frame: 'Prova Social'
  }
};

export default function Home() {
  const [activeVariant, setActiveVariant] = useState<LandingVariant>('v1');

  const renderLandingPage = () => {
    switch (activeVariant) {
      case 'v1':
        return (
          <>
            <HeroLossAversion />
            <ProblemLossAversion />
            <SolutionLossAversion />
            <FeaturesLossAversion />
            <SegmentationLossAversion />
            <ComparisonLossAversion />
            <SocialProofLossAversion />
            <FAQLossAversion />
            <FinalCTALossAversion />
          </>
        );
      case 'v2':
        return (
          <>
            <HeroTransformation />
            <ProblemTransformation />
            <SolutionTransformation />
            <FeaturesTransformation />
            <SegmentationTransformation />
            <ComparisonTransformation />
            <SocialProofTransformation />
            <FAQTransformation />
            <FinalCTATransformation />
          </>
        );
      case 'v3':
        return (
          <>
            <HeroAuthority />
            <ProblemAuthority />
            <SolutionAuthority />
            <FeaturesAuthority />
            <SegmentationAuthority />
            <ComparisonAuthority />
            <SocialProofAuthority />
            <FAQAuthority />
            <FinalCTAAuthority />
          </>
        );
      case 'v4':
        return (
          <>
            <HeroSocialProof />
            <ProblemSocialProof />
            <SolutionSocialProof />
            <FeaturesSocialProof />
            <SegmentationSocialProof />
            <ComparisonSocialProof />
            <SocialProofBandwagon />
            <FAQBandwagon />
            <FinalCTABandwagon />
          </>
        );
    }
  };

  return (
    <div className="relative">
      {/* Version Selector - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#2B3259] text-white py-3 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-bold">Landing Page Builder - Nexus Leilões</h2>
              <p className="text-xs text-white/60">Clique para alternar entre as 4 versões</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/60">Frame Cognitivo:</p>
              <p className="text-sm font-semibold text-[#FF7A00]">{VARIANT_INFO[activeVariant].frame}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {(Object.keys(VARIANT_INFO) as LandingVariant[]).map((variant) => (
              <button
                key={variant}
                onClick={() => setActiveVariant(variant)}
                className={`
                  flex-shrink-0
                  px-4 py-2 rounded-full
                  text-sm font-medium
                  transition-all duration-200
                  cursor-pointer
                  ${activeVariant === variant
                    ? 'bg-[#FF7A00] text-white shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }
                `}
              >
                <span className="block">{VARIANT_INFO[variant].label}</span>
                <span className="block text-xs opacity-70">{VARIANT_INFO[variant].description}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Landing Page Content - With padding for fixed header */}
      <div className="pt-28">
        {renderLandingPage()}
      </div>

      {/* Progress Indicator - Fixed bottom left */}
      <div className="fixed bottom-4 left-4 z-50 max-w-xs">
        <div className="bg-[#2B3259] text-white rounded-2xl p-4 shadow-lg">
          <h3 className="font-bold text-sm mb-2">📋 Progresso</h3>
          <p className="text-lg font-bold text-[#FF7A00]">{VARIANT_INFO[activeVariant].label}</p>

          {/* Section Progress */}
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">&#10003;</span>
              <span className="text-white/80">Hero</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">&#10003;</span>
              <span className="text-white/80">Problema</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">&#10003;</span>
              <span className="text-white/80">Solucao</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">&#10003;</span>
              <span className="text-white/80">Features</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">&#10003;</span>
              <span className="text-white/80">Segmentacao</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">&#10003;</span>
              <span className="text-white/80">Comparacao</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">&#10003;</span>
              <span className="text-white/80">Social Proof</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">&#10003;</span>
              <span className="text-white/80">FAQ</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">&#10003;</span>
              <span className="text-white/80">CTA + Footer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-[#5C5CFF] text-white rounded-full px-4 py-2 shadow-lg text-sm font-medium">
          ↓ Role para ver a página completa
        </div>
      </div>
    </div>
  );
}

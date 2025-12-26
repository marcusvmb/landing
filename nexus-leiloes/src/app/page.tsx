'use client';

import { useState } from 'react';
import HeroLossAversion from '@/components/heroes/HeroLossAversion';
import HeroTransformation from '@/components/heroes/HeroTransformation';
import HeroAuthority from '@/components/heroes/HeroAuthority';
import HeroCuriosityScarcity from '@/components/heroes/HeroCuriosityScarcity';
import {
  ProblemLossAversion,
  ProblemTransformation,
  ProblemAuthority,
  ProblemCuriosityScarcity,
} from '@/components/sections/problem';
import {
  SolutionLossAversion,
  SolutionTransformation,
  SolutionAuthority,
  SolutionCuriosityScarcity,
} from '@/components/sections/solution';
import {
  FeaturesLossAversion,
  FeaturesShowcase,
  FeaturesTransformation,
  FeaturesAuthority,
  FeaturesCuriosityScarcity,
} from '@/components/sections/features';
import {
  SegmentationLossAversion,
  SegmentationTransformation,
  SegmentationAuthority,
  SegmentationCuriosityScarcity,
} from '@/components/sections/segmentation';
import {
  ComparisonLossAversion,
  ComparisonTransformation,
  ComparisonAuthority,
  ComparisonCuriosityScarcity,
} from '@/components/sections/comparison';
import {
  SocialProofLossAversion,
  SocialProofTransformation,
  SocialProofAuthority,
  SocialProofCuriosityScarcity,
} from '@/components/sections/socialproof';
import {
  FAQLossAversion,
  FAQTransformation,
  FAQAuthority,
  FAQCuriosityScarcity,
} from '@/components/sections/faq';
import {
  FinalCTALossAversion,
  FinalCTATransformation,
  FinalCTAAuthority,
  FinalCTACuriosityScarcity,
} from '@/components/sections/finalcta';
import { AssessoresShowcase } from '@/components/sections/assessores';

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
    label: 'V4: Curiosity + Scarcity',
    description: 'Teaser + Escassez genuína',
    frame: 'Curiosidade + Urgência'
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
            <FeaturesShowcase />
            <AssessoresShowcase />
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
            <SolutionTransformation />
            <FeaturesTransformation />
            <SegmentationTransformation />
            <ComparisonTransformation />
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
            <HeroCuriosityScarcity />
            <ProblemCuriosityScarcity />
            <SolutionCuriosityScarcity />
            <FeaturesCuriosityScarcity />
            <SegmentationCuriosityScarcity />
            <ComparisonCuriosityScarcity />
            <SocialProofCuriosityScarcity />
            <FAQCuriosityScarcity />
            <FinalCTACuriosityScarcity />
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
              <p className="text-sm font-semibold text-[#5C5CFF]">{VARIANT_INFO[activeVariant].frame}</p>
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
                    ? 'bg-[#5C5CFF] text-white shadow-lg'
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

      {/* Scroll hint */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-[#5C5CFF] text-white rounded-full px-4 py-2 shadow-lg text-sm font-medium">
          ↓ Role para ver a página completa
        </div>
      </div>
    </div>
  );
}

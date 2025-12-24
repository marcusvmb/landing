'use client';

import { useState } from 'react';
import {
  ProblemLossAversion,
  ProblemTransformation,
  ProblemAuthority,
  ProblemSocialProof,
} from '@/components/sections/problem';

const PROBLEM_SECTIONS = [
  { id: 'v1', name: 'V1: Loss Aversion', component: ProblemLossAversion },
  { id: 'v2', name: 'V2: Transformation', component: ProblemTransformation },
  { id: 'v3', name: 'V3: Authority', component: ProblemAuthority },
  { id: 'v4', name: 'V4: Social Proof', component: ProblemSocialProof },
];

export default function ProblemPreviewPage() {
  const [activeVersion, setActiveVersion] = useState('v1');

  const ActiveComponent = PROBLEM_SECTIONS.find((s) => s.id === activeVersion)?.component || ProblemLossAversion;

  return (
    <main>
      {/* Version Selector */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#2B3259] shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-white/60 text-sm font-medium mr-2">
              Problem Section:
            </span>
            {PROBLEM_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveVersion(section.id)}
                className={`
                  px-4 py-2
                  rounded-full
                  text-sm font-semibold
                  transition-all duration-200
                  cursor-pointer
                  ${
                    activeVersion === section.id
                      ? 'bg-[#5C5CFF] text-white shadow-[0_4px_15px_-3px_rgba(92,92,255,0.5)]'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }
                `}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Active Section */}
      <ActiveComponent />

      {/* Navigation hint */}
      <div className="bg-[#2B3259] py-6 text-center">
        <p className="text-white/60 text-sm">
          Use os botoes acima para alternar entre as 4 versoes da secao Problema
        </p>
        <a
          href="/"
          className="inline-block mt-3 text-[#5C5CFF] hover:text-white transition-colors text-sm font-medium"
        >
          &larr; Voltar para Heroes
        </a>
      </div>
    </main>
  );
}

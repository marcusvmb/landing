import dynamic from 'next/dynamic';
import HeroLossAversion from '@/components/heroes/HeroLossAversion';
import { ProblemAuthority } from '@/components/sections/problem';

// Lazy load seções abaixo do fold para melhorar LCP
const FeaturesShowcase = dynamic(
  () => import('@/components/sections/features/FeaturesShowcase')
);
const AssessoresShowcase = dynamic(
  () => import('@/components/sections/assessores/AssessoresShowcase')
);
const SegmentationTransformation = dynamic(
  () => import('@/components/sections/segmentation/SegmentationTransformation')
);
const ComparisonTransformation = dynamic(
  () => import('@/components/sections/comparison/ComparisonTransformation')
);
const FAQLossAversion = dynamic(
  () => import('@/components/sections/faq/FAQLossAversion')
);
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <>
      <HeroLossAversion />
      <ProblemAuthority />
      <FeaturesShowcase />
      <AssessoresShowcase />
      <SegmentationTransformation />
      <ComparisonTransformation />
      <FAQLossAversion />
      <Footer />
    </>
  );
}

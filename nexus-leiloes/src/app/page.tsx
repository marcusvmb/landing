import HeroLossAversion from '@/components/heroes/HeroLossAversion';
import { ProblemAuthority } from '@/components/sections/problem';
import { FeaturesShowcase } from '@/components/sections/features';
import { SegmentationLossAversion } from '@/components/sections/segmentation';
import { ComparisonAuthority } from '@/components/sections/comparison';
import { FAQLossAversion } from '@/components/sections/faq';
import { AssessoresShowcase } from '@/components/sections/assessores';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <HeroLossAversion />
      <ProblemAuthority />
      <FeaturesShowcase />
      <AssessoresShowcase />
      <SegmentationLossAversion />
      <ComparisonAuthority />
      <FAQLossAversion />
      <Footer />
    </>
  );
}

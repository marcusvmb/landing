import HeroSocialProof from '@/components/heroes/HeroSocialProof';
import { ProblemSocialProof } from '@/components/sections/problem';
import { FeaturesSocialProof } from '@/components/sections/features';
import { SegmentationSocialProof } from '@/components/sections/segmentation';
import { ComparisonSocialProof } from '@/components/sections/comparison';
import { FAQBandwagon } from '@/components/sections/faq';
import { AssessoresShowcase } from '@/components/sections/assessores';
import Footer from '@/components/Footer';

export default function V4SocialProof() {
  return (
    <>
      <HeroSocialProof />
      <ProblemSocialProof />
      <FeaturesSocialProof />
      <AssessoresShowcase />
      <SegmentationSocialProof />
      <ComparisonSocialProof />
      <FAQBandwagon />
      <Footer />
    </>
  );
}

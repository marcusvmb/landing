import HeroTransformation from '@/components/heroes/HeroTransformation';
import { ProblemTransformation } from '@/components/sections/problem';
import { FeaturesTransformation } from '@/components/sections/features';
import { SegmentationTransformation } from '@/components/sections/segmentation';
import { ComparisonTransformation } from '@/components/sections/comparison';
import { FAQTransformation } from '@/components/sections/faq';
import { AssessoresShowcase } from '@/components/sections/assessores';
import Footer from '@/components/Footer';

export default function V3Transformation() {
  return (
    <>
      <HeroTransformation />
      <ProblemTransformation />
      <FeaturesTransformation />
      <AssessoresShowcase />
      <SegmentationTransformation />
      <ComparisonTransformation />
      <FAQTransformation />
      <Footer />
    </>
  );
}

import HeroCuriosityScarcity from '@/components/heroes/HeroCuriosityScarcity';
import { ProblemCuriosityScarcity } from '@/components/sections/problem';
import { FeaturesCuriosityScarcity } from '@/components/sections/features';
import { SegmentationCuriosityScarcity } from '@/components/sections/segmentation';
import { ComparisonCuriosityScarcity } from '@/components/sections/comparison';
import { FAQCuriosityScarcity } from '@/components/sections/faq';
import { AssessoresShowcase } from '@/components/sections/assessores';
import Footer from '@/components/Footer';

export default function V5CuriosityScarcity() {
  return (
    <>
      <HeroCuriosityScarcity />
      <ProblemCuriosityScarcity />
      <FeaturesCuriosityScarcity />
      <AssessoresShowcase />
      <SegmentationCuriosityScarcity />
      <ComparisonCuriosityScarcity />
      <FAQCuriosityScarcity />
      <Footer />
    </>
  );
}

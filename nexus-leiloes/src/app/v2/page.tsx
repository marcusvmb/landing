import HeroAuthority from '@/components/heroes/HeroAuthority';
import { ProblemAuthority } from '@/components/sections/problem';
import { FeaturesAuthority } from '@/components/sections/features';
import { SegmentationAuthority } from '@/components/sections/segmentation';
import { ComparisonAuthority } from '@/components/sections/comparison';
import { FAQAuthority } from '@/components/sections/faq';
import { AssessoresShowcase } from '@/components/sections/assessores';
import Footer from '@/components/Footer';

export default function V2Authority() {
  return (
    <>
      <HeroAuthority />
      <ProblemAuthority />
      <FeaturesAuthority />
      <AssessoresShowcase />
      <SegmentationAuthority />
      <ComparisonAuthority />
      <FAQAuthority />
      <Footer />
    </>
  );
}

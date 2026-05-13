import { DefendersGrid } from '@/components/sections/DefendersGrid';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { KitSection } from '@/components/sections/KitSection';
import { NewsCarousel } from '@/components/sections/NewsCarousel';
import { PecExplained } from '@/components/sections/PecExplained';
import { SignupCta } from '@/components/sections/SignupCta';
import { StatBlock } from '@/components/sections/StatBlock';
import { Ticker } from '@/components/sections/Ticker';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Ticker />
        <StatBlock />
        <DefendersGrid />
        <NewsCarousel />
        <PecExplained />
        <KitSection />
        <SignupCta />
      </main>
      <Footer />
    </>
  );
}

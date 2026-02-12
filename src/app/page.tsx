import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Offering } from '@/components/sections/Offering';
import { Process } from '@/components/sections/Process';
import { Benefits } from '@/components/sections/Benefits';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FooterCTA } from '@/components/sections/FooterCTA';
import { Footer } from '@/components/layout/Footer';
import { offerings } from '@/lib/constants/content';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Offering offering={offerings[0]} />
        <Offering offering={offerings[1]} />
        <Process />
        <Benefits />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}

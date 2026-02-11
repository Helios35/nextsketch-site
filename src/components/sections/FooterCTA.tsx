'use client';

import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { Button } from '@/components/ui/Button';
import { sectionIds } from '@/lib/constants/config';
import { useQualifier } from '@/components/qualifier/QualifierProvider';

export function FooterCTA() {
  const { open } = useQualifier();

  return (
    <section
      id={sectionIds.footerCta}
      className="relative overflow-hidden py-section"
    >
      {/* Gradient glow backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <AnimatedElement animation="slideUp">
          <h2 className="font-heading text-h2 font-bold text-neutral-50 lg:text-h1">
            Ready to move fast?
          </h2>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.2}>
          <p className="mt-4 text-body-lg text-neutral-300">
            Skip the discovery phase. Start with a conversation that
            determines fit — for both of us.
          </p>
        </AnimatedElement>

        <AnimatedElement animation="scale" delay={0.4}>
          <div className="mt-8">
            <Button size="lg" onClick={open}>
              Start a Conversation
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}

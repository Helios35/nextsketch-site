'use client';

import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { Button } from '@/components/ui/Button';
import { heroContent } from '@/lib/constants/content';
import { siteConfig, sectionIds } from '@/lib/constants/config';
import { useQualifier } from '@/components/qualifier/QualifierProvider';

export function Hero() {
  const { open } = useQualifier();

  return (
    <section
      id={sectionIds.hero}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-brand-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <AnimatedElement animation="fadeIn">
          <p className="font-heading text-lg font-semibold text-neutral-50">
            {siteConfig.name}
          </p>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.1}>
          <p className="mt-4 text-body-sm font-medium uppercase tracking-widest text-brand-primary">
            {heroContent.overline}
          </p>
        </AnimatedElement>

        <AnimatedElement animation="slideUp" delay={0.2}>
          <h1 className="mt-6 whitespace-pre-line font-heading text-[2.25rem] font-bold leading-tight text-neutral-50 sm:text-[3rem] lg:text-display">
            {heroContent.headline}
          </h1>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.4}>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-neutral-300">
            {heroContent.subheadline}
          </p>
        </AnimatedElement>

        <AnimatedElement animation="scale" delay={0.6}>
          <div className="mt-10">
            <Button size="lg" onClick={open}>
              {heroContent.ctaText}
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}

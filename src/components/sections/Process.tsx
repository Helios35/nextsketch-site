'use client';

import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { processSteps } from '@/lib/constants/content';
import { sectionIds } from '@/lib/constants/config';

export function Process() {
  return (
    <section id={sectionIds.process} className="py-section">
      <div className="mx-auto max-w-container px-6">
        <AnimatedElement animation="fadeIn">
          <p className="text-body-sm font-medium uppercase tracking-widest text-brand-accent">
            How We Work
          </p>
        </AnimatedElement>

        <AnimatedElement animation="slideUp" delay={0.1}>
          <h2 className="mt-4 font-heading text-h2 font-bold text-neutral-50 lg:text-h1">
            Strategy that moves at product speed.
          </h2>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.2}>
          <p className="mt-4 max-w-2xl text-body-lg text-neutral-300">
            No long discovery. No open-ended exploration. Fast, focused
            strategy followed by immediate execution and continuous
            validation.
          </p>
        </AnimatedElement>

        {/* Timeline — horizontal on lg, vertical on mobile */}
        <div className="mt-16">
          {/* Horizontal (desktop) */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting line */}
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-brand-primary via-brand-accent to-transparent"
              />
              <div className="grid grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <AnimatedElement
                    key={step.number}
                    animation="slideUp"
                    delay={0.3 + index * 0.15}
                  >
                    <div className="relative pt-12">
                      {/* Dot */}
                      <div className="absolute left-0 top-3 h-6 w-6 rounded-full border-2 border-brand-primary bg-brand-dark" />
                      <span className="text-body-sm font-medium text-brand-primary">
                        {step.timeframe}
                      </span>
                      <h3 className="mt-2 font-heading text-lg font-semibold text-neutral-50">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-body-sm text-neutral-300">
                        {step.description}
                      </p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical (mobile/tablet) */}
          <div className="lg:hidden">
            <div className="relative border-l-2 border-neutral-800 pl-8">
              {processSteps.map((step, index) => (
                <AnimatedElement
                  key={step.number}
                  animation="slideLeft"
                  delay={0.2 + index * 0.1}
                >
                  <div className="relative pb-12 last:pb-0">
                    {/* Dot */}
                    <div className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-brand-primary bg-brand-dark" />
                    <span className="text-body-sm font-medium text-brand-primary">
                      Step {step.number} &middot; {step.timeframe}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-semibold text-neutral-50">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-body text-neutral-300">
                      {step.description}
                    </p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

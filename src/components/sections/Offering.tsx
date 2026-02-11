'use client';

import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useQualifier } from '@/components/qualifier/QualifierProvider';
import { cn } from '@/lib/utils';
import type { OfferingContent } from '@/types';

interface OfferingProps {
  offering: OfferingContent;
}

export function Offering({ offering }: OfferingProps) {
  const { open } = useQualifier();

  return (
    <section
      id={offering.id}
      className="relative py-section"
    >
      <div className="mx-auto max-w-container px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Content column */}
          <div>
            <AnimatedElement animation="fadeIn">
              <span className="text-body-sm font-medium uppercase tracking-widest text-brand-accent">
                {offering.label}
              </span>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.1}>
              <h2 className="mt-4 font-heading text-h2 font-bold text-neutral-50 lg:text-h1">
                {offering.title}
              </h2>
            </AnimatedElement>

            <AnimatedElement animation="fadeIn" delay={0.2}>
              <p className="mt-2 font-heading text-xl text-brand-primary">
                {offering.tagline}
              </p>
            </AnimatedElement>

            <AnimatedElement animation="fadeIn" delay={0.3}>
              <p className="mt-4 text-body-lg text-neutral-300">
                {offering.description}
              </p>
            </AnimatedElement>

            <AnimatedElement animation="fadeIn" delay={0.4}>
              <ul className="mt-6 space-y-2">
                {offering.whatWeBuild.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-body text-neutral-200"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedElement>

            <AnimatedElement animation="scale" delay={0.5}>
              <div className="mt-8">
                <Button
                  variant={offering.isPrimary ? 'primary' : 'secondary'}
                  onClick={open}
                >
                  {offering.ctaText}
                </Button>
              </div>
            </AnimatedElement>
          </div>

          {/* Pillars column */}
          <div
            className={cn(
              'grid gap-4 sm:grid-cols-2',
              !offering.isPrimary && 'lg:order-first'
            )}
          >
            {offering.pillars.map((pillar, index) => (
              <AnimatedElement
                key={pillar.title}
                animation="slideUp"
                delay={0.2 + index * 0.1}
              >
                <Card
                  title={pillar.title}
                  description={pillar.description}
                  variant="offering"
                />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

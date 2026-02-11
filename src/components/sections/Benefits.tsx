'use client';

import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { Card } from '@/components/ui/Card';
import { benefitItems } from '@/lib/constants/content';
import { sectionIds } from '@/lib/constants/config';

export function Benefits() {
  return (
    <section id={sectionIds.benefits} className="py-section">
      <div className="mx-auto max-w-container px-6">
        <AnimatedElement animation="fadeIn">
          <p className="text-body-sm font-medium uppercase tracking-widest text-brand-accent">
            The Advantage
          </p>
        </AnimatedElement>

        <AnimatedElement animation="slideUp" delay={0.1}>
          <h2 className="mt-4 font-heading text-h2 font-bold text-neutral-50 lg:text-h1">
            Why Next Sketch
          </h2>
        </AnimatedElement>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefitItems.map((item, index) => (
            <AnimatedElement
              key={item.title}
              animation="slideUp"
              delay={0.2 + index * 0.1}
            >
              <Card
                title={item.title}
                description={item.description}
                variant="benefit"
                icon={
                  <span className="text-2xl" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                }
              />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}

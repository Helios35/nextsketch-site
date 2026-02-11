'use client';

import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { Accordion } from '@/components/ui/Accordion';
import { faqs } from '@/lib/constants/faqs';
import { sectionIds } from '@/lib/constants/config';

export function FAQ() {
  return (
    <section id={sectionIds.faq} className="py-section">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedElement animation="fadeIn">
          <p className="text-body-sm font-medium uppercase tracking-widest text-brand-accent">
            Common Questions
          </p>
        </AnimatedElement>

        <AnimatedElement animation="slideUp" delay={0.1}>
          <h2 className="mt-4 font-heading text-h2 font-bold text-neutral-50 lg:text-h1">
            Frequently Asked Questions
          </h2>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.2}>
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}

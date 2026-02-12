'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionPill } from '@/components/ui/SectionPill';
import { SlideButton } from '@/components/ui/SlideButton';
import { useQualifier } from '@/components/qualifier/QualifierProvider';
import { pricingTiers } from '@/lib/constants/content';
import { sectionIds } from '@/lib/constants/config';
import { cn, sectionStagger, fadeIn, slideUp } from '@/lib/utils';

export function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { open } = useQualifier();
  const [annual, setAnnual] = useState(false);

  return (
    <section ref={ref} id={sectionIds.pricing} className="py-section section-glow">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={sectionStagger}
          className="text-center"
        >
          <motion.div variants={fadeIn} className="flex justify-center">
            <SectionPill>Pricing</SectionPill>
          </motion.div>

          <motion.h2
            variants={slideUp}
            className="mt-4 font-heading text-h2 font-semibold text-neutral-50 lg:text-h1 italic"
          >
            The right partnership, at the right price.
          </motion.h2>

          <motion.p variants={fadeIn} className="mx-auto mt-4 max-w-2xl text-body-lg text-neutral-300">
            Choose a retainer plan that fits your stage and start building with AI-first workflows.
          </motion.p>

          {/* Monthly / Annual toggle */}
          <motion.div variants={fadeIn} className="mt-8 flex items-center justify-center gap-4">
            <span className={cn('text-sm transition-colors', !annual ? 'text-neutral-50' : 'text-neutral-400')}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative h-7 w-12 rounded-full bg-neutral-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50"
              aria-label="Toggle annual pricing"
            >
              <motion.div
                animate={{ x: annual ? 22 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 h-5 w-5 rounded-full bg-brand-primary"
              />
            </button>
            <span className={cn('text-sm transition-colors', annual ? 'text-neutral-50' : 'text-neutral-400')}>
              Annually
            </span>
            {annual && (
              <span className="rounded-full bg-green-400/10 px-2.5 py-0.5 text-xs text-green-400">
                Save 15%
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
          }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {pricingTiers.map((tier) => {
            const isCustom = !tier.period;
            const displayPrice = isCustom
              ? tier.price
              : annual
                ? `$${Math.round(parseInt(tier.price.replace(/\D/g, '')) * 0.85).toLocaleString()}`
                : tier.price;

            return (
              <motion.div
                key={tier.name}
                variants={slideUp}
                className={cn(
                  'relative flex flex-col rounded-2xl p-8',
                  tier.popular
                    ? 'glass-surface pricing-popular'
                    : 'glass-surface-hover',
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-brand-primary px-4 py-1 text-xs font-medium text-white shadow-glow">
                      Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-heading text-lg font-semibold text-neutral-50">
                    {tier.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-neutral-50">
                      {displayPrice}
                    </span>
                    {tier.period && (
                      <span className="text-sm text-neutral-400">{tier.period}</span>
                    )}
                  </div>
                  <p className="mt-3 text-body-sm text-neutral-300">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8 flex-1">
                  <p className="mb-4 text-xs font-medium uppercase tracking-wider text-neutral-400">
                    What&apos;s included:
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-body-sm text-neutral-200">
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-primary"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8l3.5 3.5L13 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <SlideButton
                  variant={tier.popular ? 'primary' : 'secondary'}
                  size="md"
                  onClick={open}
                  className="w-full"
                >
                  {tier.ctaText}
                </SlideButton>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

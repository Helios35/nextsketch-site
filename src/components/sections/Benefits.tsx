'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionPill } from '@/components/ui/SectionPill';
import { BenefitIcon } from '@/components/ui/BenefitIcon';
import { benefitItems } from '@/lib/constants/content';
import { sectionIds } from '@/lib/constants/config';
import { sectionStagger, fadeIn, slideUp } from '@/lib/utils';

export function Benefits() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} id={sectionIds.benefits} className="py-section section-glow">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={sectionStagger}
        >
          <motion.div variants={fadeIn}>
            <SectionPill>Benefits</SectionPill>
          </motion.div>

          <motion.h2
            variants={slideUp}
            className="mt-4 font-heading text-h2 font-semibold text-neutral-50 lg:text-h1 italic"
          >
            Why Next Sketch
          </motion.h2>

          <motion.p variants={fadeIn} className="mt-4 max-w-2xl text-body-lg text-neutral-300">
            Discover how our AI-first approach enhances velocity, reduces waste, and drives
            product growth with smarter, faster processes.
          </motion.p>
        </motion.div>

        {/* 3x2 benefit grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
          }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefitItems.map((item) => (
            <motion.article
              key={item.title}
              variants={slideUp}
              className="glass-surface-hover relative overflow-hidden rounded-xl p-6"
            >
              <BenefitIcon icon={item.icon} />
              <h3 className="mt-4 mb-2 text-lg font-semibold text-neutral-50">
                {item.title}
              </h3>
              <p className="text-body-sm text-neutral-300 leading-relaxed">
                {item.description}
              </p>
              {/* Bottom gradient line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Accordion } from '@/components/ui/Accordion';
import { SectionPill } from '@/components/ui/SectionPill';
import { faqs } from '@/lib/constants/faqs';
import { sectionIds } from '@/lib/constants/config';
import { sectionStagger, fadeIn, slideUp } from '@/lib/utils';

export function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} id={sectionIds.faq} className="py-section">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={sectionStagger}
        >
          <motion.div variants={fadeIn} className="flex justify-center">
            <SectionPill>FAQs</SectionPill>
          </motion.div>

          <motion.h2
            variants={slideUp}
            className="mt-4 text-center font-heading text-h2 font-semibold text-neutral-50 lg:text-h1 italic"
          >
            We&apos;ve Got the Answers You&apos;re Looking For
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="mx-auto mt-4 max-w-xl text-center text-body-lg text-neutral-300"
          >
            Quick answers to common questions about our process, pricing, and partnership model.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-12">
            <Accordion items={faqs} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

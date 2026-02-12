'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SlideButton } from '@/components/ui/SlideButton';
import { sectionIds } from '@/lib/constants/config';
import { useQualifier } from '@/components/qualifier/QualifierProvider';
import { sectionStagger, slideUp, fadeIn, scale } from '@/lib/utils';

export function FooterCTA() {
  const { open } = useQualifier();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id={sectionIds.footerCta} className="px-6 py-section">
      <div className="mx-auto max-w-4xl">
        <div className="noise-overlay relative overflow-hidden rounded-2xl border border-neutral-700 bg-gradient-to-br from-brand-primary/20 via-brand-surface to-brand-dark px-8 py-16 text-center sm:px-16 sm:py-20">
          {/* Animated background glows */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/15 blur-[100px] animate-glow-pulse" />
            <div className="absolute bottom-0 right-0 h-[200px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-brand-accent/10 blur-[80px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
          </div>

          {/* Floating decorative elements */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-brand-primary/30 animate-float" />
            <div className="absolute right-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-brand-accent/30 animate-float-reverse" />
            <div className="absolute bottom-[25%] left-[20%] h-1 w-1 rounded-full bg-neutral-400/20 animate-float-slow" />
            <div className="absolute bottom-[35%] right-[25%] h-2.5 w-2.5 rounded-full bg-brand-primary/20 animate-float" style={{ animationDelay: '2s' }} />
          </div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={sectionStagger}
            className="relative z-10"
          >
            <motion.h2
              variants={slideUp}
              className="font-heading text-h2 font-semibold text-neutral-50 lg:text-h1 italic"
            >
              Ready to move fast?
            </motion.h2>

            <motion.p variants={fadeIn} className="mt-4 text-body-lg text-neutral-300">
              Skip the discovery phase. Start with a conversation that
              determines fit — for both of us.
            </motion.p>

            <motion.div variants={scale} className="mt-8">
              <SlideButton size="lg" onClick={open}>
                Start a Conversation
              </SlideButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { SectionPill } from '@/components/ui/SectionPill';
import { processSteps } from '@/lib/constants/content';
import { sectionIds } from '@/lib/constants/config';
import { sectionStagger, fadeIn, slideUp } from '@/lib/utils';

/* Decorative visuals per step */
function StepVisual({ step }: { step: string }) {
  switch (step) {
    case '01':
      return (
        <div className="mockup-panel">
          <div className="mb-2 text-[10px] text-neutral-400">Analyzing requirements...</div>
          <div className="space-y-2">
            {['Product scope', 'Market fit', 'Technical constraints', 'User needs', 'Revenue model'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-sm border border-brand-primary/50 bg-brand-primary/20 flex items-center justify-center">
                  <svg className="h-2 w-2 text-brand-primary" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[10px] text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case '02':
      return (
        <div className="mockup-panel">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-red-400/50" />
              <div className="h-2 w-2 rounded-full bg-yellow-400/50" />
              <div className="h-2 w-2 rounded-full bg-green-400/50" />
            </div>
            <span className="text-[10px] text-neutral-400">building...</span>
          </div>
          <div className="mockup-panel-inner font-mono text-[10px] leading-relaxed">
            <div><span className="text-purple-400">async function</span> <span className="text-blue-300">ship</span><span className="text-neutral-400">()</span> <span className="text-yellow-300">{'{'}</span></div>
            <div className="pl-3"><span className="text-purple-400">const</span> <span className="text-blue-300">plan</span> <span className="text-neutral-400">=</span> <span className="text-purple-400">await</span> <span className="text-green-300">strategize</span><span className="text-neutral-400">();</span></div>
            <div className="pl-3"><span className="text-purple-400">const</span> <span className="text-blue-300">mvp</span> <span className="text-neutral-400">=</span> <span className="text-purple-400">await</span> <span className="text-green-300">build</span><span className="text-neutral-400">(plan);</span></div>
            <div className="pl-3"><span className="text-purple-400">return</span> <span className="text-green-300">deploy</span><span className="text-neutral-400">(mvp);</span></div>
            <div><span className="text-yellow-300">{'}'}</span></div>
          </div>
        </div>
      );
    case '03':
      return (
        <div className="mockup-panel">
          <div className="mb-2 text-[10px] text-neutral-400">Evidence signals</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Activation', value: '73%', good: true },
              { label: 'Retention D7', value: '41%', good: true },
              { label: 'NPS Score', value: '62', good: true },
              { label: 'Churn Risk', value: '8%', good: false },
            ].map((m) => (
              <div key={m.label} className="rounded-lg bg-black/30 p-2 text-center">
                <div className="text-sm font-semibold text-neutral-50">{m.value}</div>
                <div className={`text-[8px] ${m.good ? 'text-green-400' : 'text-yellow-400'}`}>
                  {m.good ? '↑ on track' : '↓ watch'}
                </div>
                <div className="mt-0.5 text-[8px] text-neutral-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case '04':
      return (
        <div className="mockup-panel">
          <div className="mb-2 text-[10px] text-neutral-400">Iteration cycle</div>
          <div className="space-y-2">
            {[
              { label: 'Onboarding flow v3', status: 'Shipped', color: 'bg-green-400' },
              { label: 'Pricing experiment', status: 'Testing', color: 'bg-yellow-400' },
              { label: 'AI feature rollout', status: 'Queued', color: 'bg-brand-primary' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg bg-black/30 px-3 py-2">
                <span className="text-[10px] text-neutral-300">{item.label}</span>
                <span className="flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${item.color}/60`} />
                  <span className="text-[9px] text-neutral-400">{item.status}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Animated connecting line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%']);

  return (
    <section ref={sectionRef} id={sectionIds.process} className="py-section section-glow">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={sectionStagger}
        >
          <motion.div variants={fadeIn}>
            <SectionPill>Our Process</SectionPill>
          </motion.div>

          <motion.h2
            variants={slideUp}
            className="mt-4 font-heading text-h2 font-semibold text-neutral-50 lg:text-h1 italic"
          >
            Strategy that moves at product speed.
          </motion.h2>

          <motion.p variants={fadeIn} className="mt-4 max-w-2xl text-body-lg text-neutral-300">
            No long discovery. No open-ended exploration. Fast, focused
            strategy followed by immediate execution and continuous
            validation.
          </motion.p>
        </motion.div>

        {/* Process steps — stacked cards with visual panels */}
        <div className="relative mt-16">
          {/* Animated vertical line */}
          <div className="absolute left-[28px] top-0 bottom-0 hidden w-px bg-neutral-700/30 lg:block">
            <motion.div
              className="w-full bg-gradient-to-b from-brand-primary to-brand-accent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8 lg:space-y-12">
            {processSteps.map((step, index) => (
              <ProcessStepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStepCard({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="grid items-start gap-6 lg:grid-cols-[56px_1fr_1fr] lg:gap-8"
    >
      {/* Step number badge */}
      <div className="hidden lg:flex lg:flex-col lg:items-center">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-primary/30 bg-brand-surface">
          <span className="font-heading text-lg font-bold text-gradient-bright">{step.number}</span>
          <div className="absolute inset-0 rounded-2xl bg-brand-primary/5 animate-glow-pulse" />
        </div>
      </div>

      {/* Text content */}
      <div className="pt-1">
        <div className="flex items-center gap-3 lg:hidden">
          <span className="text-sm font-bold text-gradient-bright">{step.number}</span>
          <span className="text-body-sm font-medium text-brand-primary">{step.timeframe}</span>
        </div>
        <span className="hidden text-body-sm font-medium text-brand-primary lg:block">
          {step.timeframe}
        </span>
        <h3 className="mt-2 font-heading text-xl font-semibold text-neutral-50 lg:text-2xl">
          {step.title}
        </h3>
        <p className="mt-2 text-body text-neutral-300 leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Visual panel */}
      <div>
        <StepVisual step={step.number} />
      </div>
    </motion.div>
  );
}

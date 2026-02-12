'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SlideButton } from '@/components/ui/SlideButton';
import { SectionPill } from '@/components/ui/SectionPill';
import { useQualifier } from '@/components/qualifier/QualifierProvider';
import { cn, sectionStagger, slideUp, fadeIn, scale } from '@/lib/utils';
import type { OfferingContent } from '@/types';
import {
  TaskBoardMockup,
  AnalyticsMockup,
  CodeEditorMockup,
  RoadmapMockup,
  AutomationFlowMockup,
  ChatInterfaceMockup,
  TeamDashboardMockup,
  IntegrationsMockup,
} from '@/components/ui/MockupPanel';

interface OfferingProps {
  offering: OfferingContent;
}

const primaryMockups = [
  <TaskBoardMockup key="task" />,
  <AnalyticsMockup key="analytics" />,
  <CodeEditorMockup key="code" />,
  <RoadmapMockup key="roadmap" />,
];

const secondaryMockups = [
  <AutomationFlowMockup key="flow" />,
  <ChatInterfaceMockup key="chat" />,
  <TeamDashboardMockup key="team" />,
  <IntegrationsMockup key="integrations" />,
];

export function Offering({ offering }: OfferingProps) {
  const { open } = useQualifier();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const mockups = offering.isPrimary ? primaryMockups : secondaryMockups;

  return (
    <section
      ref={ref}
      id={offering.id}
      className="relative py-section section-glow"
    >
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={sectionStagger}
          className="grid gap-12 lg:grid-cols-2 lg:items-start"
        >
          {/* Content column */}
          <div>
            <motion.div variants={fadeIn}>
              <SectionPill>{offering.label}</SectionPill>
            </motion.div>

            <motion.h2
              variants={slideUp}
              className="mt-4 font-heading text-h2 font-semibold text-neutral-50 lg:text-h1 italic"
            >
              {offering.title}
            </motion.h2>

            <motion.p variants={fadeIn} className="mt-2 font-heading text-xl text-brand-primary">
              {offering.tagline}
            </motion.p>

            <motion.p variants={fadeIn} className="mt-4 text-body-lg text-neutral-300">
              {offering.description}
            </motion.p>

            <motion.ul variants={fadeIn} className="mt-6 space-y-2">
              {offering.whatWeBuild.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-body text-neutral-200"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-primary" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* Tag badges */}
            <motion.div variants={fadeIn} className="mt-6 flex flex-wrap gap-2">
              {offering.pillars.slice(0, 3).map((pillar) => (
                <span
                  key={pillar.title}
                  className="rounded-full border border-neutral-700/50 bg-brand-surface px-3 py-1 text-xs text-neutral-300"
                >
                  {pillar.title}
                </span>
              ))}
            </motion.div>

            <motion.div variants={scale} className="mt-8">
              <SlideButton
                variant={offering.isPrimary ? 'primary' : 'secondary'}
                onClick={open}
              >
                {offering.ctaText}
              </SlideButton>
            </motion.div>
          </div>

          {/* Visual mockup panels column */}
          <motion.div
            variants={sectionStagger}
            className={cn(
              'grid gap-4 sm:grid-cols-2',
              !offering.isPrimary && 'lg:order-first',
            )}
          >
            {offering.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                variants={slideUp}
                className="glass-surface-hover rounded-xl p-5"
              >
                {/* Decorative mockup */}
                <div className="mb-4">
                  {mockups[index]}
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-neutral-50">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

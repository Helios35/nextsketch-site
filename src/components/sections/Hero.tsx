'use client';

import { motion } from 'framer-motion';
import { SlideButton } from '@/components/ui/SlideButton';
import { HeroOrb } from '@/components/ui/HeroOrb';
import { SectionPill } from '@/components/ui/SectionPill';
import { heroContent } from '@/lib/constants/content';
import { sectionIds } from '@/lib/constants/config';
import { useQualifier } from '@/components/qualifier/QualifierProvider';
import { heroStagger, fadeIn, slideUp, scale } from '@/lib/utils';

export function Hero() {
  const { open } = useQualifier();

  return (
    <section
      id={sectionIds.hero}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-16"
    >
      {/* Background dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />

      <HeroOrb />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroStagger}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        {/* Badge pill */}
        <motion.div variants={fadeIn} className="flex justify-center">
          <SectionPill glow>{heroContent.overline}</SectionPill>
        </motion.div>

        {/* Headline with gradient text */}
        <motion.div variants={slideUp} className="mt-8">
          <h1 className="font-heading text-display-sm font-semibold text-neutral-50 sm:text-[3.5rem] lg:text-display italic">
            {heroContent.headlineParts.map((part, i) => (
              <span key={i} className={part.gradient ? 'text-gradient-bright' : undefined}>
                {part.text}
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          variants={fadeIn}
          className="mx-auto mt-6 max-w-2xl text-body-lg text-neutral-300"
        >
          {heroContent.subheadline}
        </motion.p>

        {/* Two CTA buttons side by side */}
        <motion.div
          variants={scale}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <SlideButton variant="primary" size="lg" onClick={open}>
            {heroContent.ctaText}
          </SlideButton>
          <SlideButton
            variant="secondary"
            size="lg"
            href={`#${sectionIds.productDev}`}
            showArrow={false}
          >
            View services
          </SlideButton>
        </motion.div>

        {/* Trust / credibility strip */}
        <motion.div
          variants={fadeIn}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-body-sm text-neutral-400">
            Trusted by product-stage founders &amp; growing teams
          </p>
          <div className="flex items-center gap-6">
            {/* Abstract logo placeholders — branded shapes */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex h-8 items-center gap-1.5 opacity-30 transition-opacity hover:opacity-50"
              >
                <div
                  className="h-5 rounded bg-neutral-400/60"
                  style={{ width: `${40 + i * 12}px` }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade to dark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent"
      />
    </section>
  );
}

'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideButton } from '@/components/ui/SlideButton';
import { siteConfig, sectionIds } from '@/lib/constants/config';
import { useQualifier } from '@/components/qualifier/QualifierProvider';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Services', href: `#${sectionIds.productDev}` },
  { label: 'Process', href: `#${sectionIds.process}` },
  { label: 'Benefits', href: `#${sectionIds.benefits}` },
  { label: 'Pricing', href: `#${sectionIds.pricing}` },
  { label: 'FAQ', href: `#${sectionIds.faq}` },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { open } = useQualifier();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    // Determine active section
    const sections = navLinks
      .map((l) => l.href.replace('#', ''))
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    let current = '';
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120) {
        current = section.id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-neutral-700/50 bg-brand-dark/80 backdrop-blur-xl shadow-lg shadow-black/10'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto max-w-container px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="group font-heading text-lg font-bold text-neutral-50 transition-all duration-200 hover:text-brand-primary"
            >
              <span className="inline-block transition-transform duration-200 group-hover:scale-105">
                {siteConfig.name}
              </span>
            </a>

            {/* Center nav links — hidden on mobile */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      'relative text-sm transition-colors duration-200',
                      isActive
                        ? 'text-neutral-50'
                        : 'text-neutral-400 hover:text-neutral-50',
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-brand-primary"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <SlideButton variant="primary" size="sm" onClick={open}>
                  Start a Conversation
                </SlideButton>
              </div>

              {/* Hamburger — visible on mobile */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="h-px w-5 bg-neutral-50 transition-colors"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="h-px w-5 bg-neutral-50 transition-colors"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="h-px w-5 bg-neutral-50 transition-colors"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-brand-dark/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-brand-surface/95 backdrop-blur-xl border-l border-neutral-700/50 pt-20 md:hidden"
            >
              <div className="flex flex-col gap-2 px-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="rounded-lg px-4 py-3 text-base text-neutral-300 transition-colors hover:bg-neutral-700/30 hover:text-neutral-50"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-6 px-6">
                <SlideButton
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setMobileOpen(false);
                    open();
                  }}
                  className="w-full"
                >
                  Start a Conversation
                </SlideButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useQualifier } from '@/components/qualifier/QualifierProvider';

export function Navigation() {
  const [showCta, setShowCta] = useState(false);
  const { open } = useQualifier();

  useEffect(() => {
    const handleScroll = () => {
      setShowCta(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showCta && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 top-6 z-50"
        >
          <Button
            variant="primary"
            size="sm"
            onClick={open}
            className="shadow-lg shadow-brand-primary/20"
          >
            Start a Conversation
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

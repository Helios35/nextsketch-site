'use client';

import type { ReactNode } from 'react';
import { QualifierProvider } from '@/components/qualifier/QualifierProvider';
import { QualifierModal } from '@/components/qualifier/QualifierModal';

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <QualifierProvider>
      {children}
      <QualifierModal />
    </QualifierProvider>
  );
}

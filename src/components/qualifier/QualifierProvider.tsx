'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';

interface QualifierContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const QualifierContext = createContext<QualifierContextValue | null>(null);

export function useQualifier() {
  const ctx = useContext(QualifierContext);
  if (!ctx) {
    throw new Error('useQualifier must be used within QualifierProvider');
  }
  return ctx;
}

export function QualifierProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <QualifierContext.Provider value={{ isOpen, open, close }}>
      {children}
    </QualifierContext.Provider>
  );
}

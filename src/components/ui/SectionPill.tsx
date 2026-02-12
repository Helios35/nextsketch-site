import { cn } from '@/lib/utils';

interface SectionPillProps {
  children: string;
  className?: string;
  glow?: boolean;
}

export function SectionPill({ children, className, glow }: SectionPillProps) {
  return (
    <span
      className={cn(
        'section-pill',
        glow && 'border-brand-primary/40 text-brand-accent shadow-glow',
        className,
      )}
    >
      {glow && (
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse-soft" />
      )}
      {children}
    </span>
  );
}

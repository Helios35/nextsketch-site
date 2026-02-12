import { cn } from '@/lib/utils';
import type { CardProps } from '@/types';

const variantStyles = {
  default: 'glass-surface',
  offering:
    'glass-surface-hover group/card cursor-default',
  benefit: 'glass-surface-hover relative overflow-hidden',
} as const;

export function Card({
  title,
  description,
  icon,
  variant = 'default',
  className,
  children,
}: CardProps) {
  return (
    <article
      className={cn(
        'rounded-xl p-6',
        variantStyles[variant],
        className,
      )}
    >
      {icon && (
        <div className="mb-4 text-brand-primary">{icon}</div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-neutral-50">
        {title}
      </h3>
      <p className="text-body-sm text-neutral-300">{description}</p>
      {children}
      {variant === 'benefit' && (
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"
        />
      )}
    </article>
  );
}

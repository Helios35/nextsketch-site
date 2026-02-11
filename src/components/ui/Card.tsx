import { cn } from '@/lib/utils';
import type { CardProps } from '@/types';

const variantStyles = {
  default: 'border-neutral-800 bg-brand-surface',
  offering: 'border-neutral-800 bg-brand-surface hover:border-brand-primary/40',
  benefit:
    'border-neutral-800 bg-brand-surface border-t-2 border-t-brand-primary',
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
        'rounded-xl border p-6 transition-colors duration-200',
        variantStyles[variant],
        className
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
    </article>
  );
}

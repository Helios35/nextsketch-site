import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';

const variantStyles = {
  primary:
    'bg-brand-primary text-neutral-50 hover:bg-brand-primary/90 focus-visible:ring-brand-primary/50',
  secondary:
    'border border-neutral-700 text-neutral-200 hover:border-brand-primary hover:text-neutral-50 focus-visible:ring-brand-primary/50',
  text: 'text-neutral-300 hover:text-neutral-50 underline-offset-4 hover:underline focus-visible:ring-neutral-400/50',
} as const;

const sizeStyles = {
  sm: 'px-4 py-2 text-body-sm',
  md: 'px-6 py-3 text-body',
  lg: 'px-8 py-4 text-body-lg',
} as const;

export function Button({
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  children,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const styles = cn(
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark',
    'disabled:opacity-50 disabled:pointer-events-none',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}

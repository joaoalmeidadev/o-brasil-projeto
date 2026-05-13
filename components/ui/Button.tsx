import { cn } from '@/lib/utils';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

type Variant = 'accent' | 'outline' | 'ghost';
type Size = 'md' | 'lg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  trailingIcon?: React.ReactNode;
};

const baseStyles =
  'inline-flex items-center justify-between gap-3 rounded-full font-semibold uppercase tracking-[0.18em] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) disabled:opacity-60 disabled:cursor-not-allowed';

const variantStyles: Record<Variant, string> = {
  accent: 'bg-(--color-accent) text-(--color-accent-ink) hover:bg-(--color-accent-strong)',
  outline:
    'border border-(--color-border) text-(--color-ink) hover:border-(--color-accent) hover:text-(--color-accent)',
  ghost: 'text-(--color-ink) hover:text-(--color-accent)',
};

const sizeStyles: Record<Size, string> = {
  md: 'px-5 py-3 text-xs',
  lg: 'px-6 py-4 text-sm',
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = 'accent', size = 'md', trailingIcon, className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={rest.type ?? 'button'}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...rest}
    >
      <span>{children}</span>
      <span aria-hidden className="text-base leading-none">
        {trailingIcon ?? '+'}
      </span>
    </button>
  );
});

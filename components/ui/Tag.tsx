import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  tone?: 'default' | 'accent';
  className?: string;
};

export function Tag({ children, tone = 'default', className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.2em]',
        tone === 'accent'
          ? 'border-(--color-accent) text-(--color-accent)'
          : 'border-(--color-border) text-(--color-muted)',
        className,
      )}
    >
      {children}
    </span>
  );
}

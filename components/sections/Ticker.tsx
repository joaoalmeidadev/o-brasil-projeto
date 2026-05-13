'use client';

import { site } from '@/lib/content/site';
import { motion } from 'framer-motion';

export function Ticker() {
  const items = [...site.ticker, ...site.ticker, ...site.ticker];

  return (
    <div className="ticker-mask overflow-hidden border-y border-(--color-border) bg-(--color-bg) py-3">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
        aria-hidden
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 text-sm font-semibold uppercase tracking-[0.24em] text-(--color-muted)"
          >
            <span className="size-1.5 rounded-full bg-(--color-accent)" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

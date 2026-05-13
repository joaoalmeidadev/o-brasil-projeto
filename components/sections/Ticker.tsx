'use client';

import { site } from '@/lib/content/site';
import { motion } from 'framer-motion';

export function Ticker() {
  const items = [...site.ticker, ...site.ticker, ...site.ticker, ...site.ticker];

  return (
    <div className="ticker-mask overflow-hidden border-y border-(--color-border) bg-(--color-bg) py-4">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
        aria-hidden
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.28em] text-(--color-ink)"
          >
            <span className="inline-block size-2 rounded-full bg-(--color-accent)" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

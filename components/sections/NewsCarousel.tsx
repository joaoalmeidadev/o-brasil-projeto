'use client';

import { Container } from '@/components/ui/Container';
import { news } from '@/lib/content/news';
import { site } from '@/lib/content/site';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

export function NewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-(--color-bg) py-20 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:items-start">
          <header>
            <h2 className="text-display text-4xl md:text-6xl leading-[0.95]">
              A Realidade que faz a <span className="text-(--color-accent)">PEC 32/2019</span>{' '}
              necessária
            </h2>
            <p className="mt-6 text-sm md:text-base text-(--color-muted) leading-relaxed max-w-prose">
              {site.news.body}
            </p>
          </header>

          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <ul className="flex gap-4">
                {news.map((item) => (
                  <li
                    key={item.id}
                    className="min-w-0 shrink-0 grow-0 basis-[80%] sm:basis-[55%] md:basis-[48%] rounded-2xl border border-(--color-accent) bg-(--color-surface) p-6 flex flex-col gap-6"
                  >
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-(--color-accent) px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-(--color-accent-ink)">
                      {item.date}
                    </span>
                    <p className="text-sm md:text-base leading-snug text-(--color-ink)">
                      {item.headline}
                    </p>
                    <footer className="mt-auto text-[0.6875rem] uppercase tracking-[0.2em] text-(--color-muted)">
                      {item.source}
                    </footer>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Anterior"
                className="size-12 rounded-full border border-(--color-border) text-(--color-ink) transition hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                ←
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Próxima"
                className="size-12 rounded-full bg-(--color-accent) text-(--color-accent-ink) transition hover:bg-(--color-accent-strong)"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

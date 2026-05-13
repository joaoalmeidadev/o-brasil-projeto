'use client';

import { Container } from '@/components/ui/Container';
import { news } from '@/lib/content/news';
import { site } from '@/lib/content/site';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
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
    <section className="bg-(--color-bg) py-24 md:py-32">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:items-start">
          <header>
            <h2 className="text-display text-4xl md:text-6xl leading-[0.92]">
              A Realidade que faz a <span className="text-(--color-accent)">PEC 32/2019</span>{' '}
              necessária
            </h2>
            <p className="mt-6 max-w-[42ch] text-sm md:text-base text-(--color-muted) leading-relaxed">
              {site.news.body}
            </p>
          </header>

          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <ul className="flex gap-4">
                {news.map((item) => (
                  <li
                    key={item.id}
                    className="min-w-0 shrink-0 grow-0 basis-[70%] sm:basis-[45%] md:basis-[38%]"
                  >
                    <div className="relative aspect-[323/549] w-full overflow-hidden rounded-2xl bg-(--color-surface)">
                      <Image
                        src={item.image}
                        alt="Manchete recente sobre crimes graves cometidos por adolescentes"
                        fill
                        sizes="(min-width: 768px) 30vw, 70vw"
                        className="object-contain"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Notícia anterior"
                className="size-14 rounded-full border border-(--color-border) text-lg text-(--color-ink) transition hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                ←
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Próxima notícia"
                className="size-14 rounded-full bg-(--color-accent) text-lg text-(--color-accent-ink) transition hover:bg-(--color-accent-strong)"
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

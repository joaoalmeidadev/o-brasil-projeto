'use client';

import { Container } from '@/components/ui/Container';
import { news } from '@/lib/content/news';
import { site } from '@/lib/content/site';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';

type EmblaApi = NonNullable<UseEmblaCarouselType[1]>;
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

export function NewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: EmblaApi) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-(--color-paper) py-24 md:py-32 text-(--color-deep-green)">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-center">
          <header>
            <h2 className="text-display text-5xl md:text-7xl leading-[0.9]">
              <span className="block">A Realidade</span>
              <span className="block">Que Faz a</span>
              <span className="block">PEC 32/2019</span>
              <span className="mt-1 inline-flex bg-(--color-deep-green) px-2 text-(--color-paper)">
                Necessária
              </span>
            </h2>
            <p className="mt-6 max-w-[40ch] text-sm md:text-base text-(--color-paper-muted) leading-relaxed">
              {site.news.body}
            </p>
          </header>

          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden [perspective:1400px]">
              <ul className="flex">
                {news.map((item, i) => (
                  <li
                    key={item.id}
                    className="min-w-0 shrink-0 grow-0 basis-[55%] sm:basis-[42%] md:basis-[36%]"
                    style={{
                      transform: `rotateY(${-8 + i * 4}deg) translateX(${i > 0 ? -i * 18 : 0}px)`,
                      transformOrigin: 'left center',
                      zIndex: news.length - i,
                    }}
                  >
                    <div className="relative aspect-[323/549] w-full">
                      <Image
                        src={item.image}
                        alt="Manchete recente sobre crimes graves cometidos por adolescentes"
                        fill
                        sizes="(min-width: 768px) 30vw, 55vw"
                        className="object-contain drop-shadow-[0_20px_30px_rgba(15,34,24,0.15)]"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {canNext && (
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Próxima notícia"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 grid size-16 place-items-center rounded-full bg-(--color-deep-green) text-2xl text-(--color-paper) transition hover:bg-(--color-accent) hover:text-(--color-deep-green)"
              >
                →
              </button>
            )}
            {canPrev && (
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Notícia anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 hidden size-12 place-items-center rounded-full border-2 border-(--color-deep-green) text-(--color-deep-green) transition hover:bg-(--color-deep-green) hover:text-(--color-paper) md:grid"
              >
                ←
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

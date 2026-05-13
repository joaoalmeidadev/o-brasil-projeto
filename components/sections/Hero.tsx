import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  const { hero } = site;

  return (
    <section className="relative overflow-hidden bg-(--color-bg) pt-16 pb-24 md:pt-24 md:pb-36">
      <Container className="grid items-end gap-12 md:grid-cols-[1.15fr_1fr]">
        <div className="space-y-10">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="text-display text-[clamp(3.5rem,11vw,9rem)]">
            <span className="block">{hero.titleLine1}</span>
            <span className="block text-(--color-accent)">{hero.titleLine2}</span>
          </h1>
          <Link href="#stat" aria-label={hero.cta}>
            <Button variant="outline" size="lg" trailingIcon="↓">
              {hero.cta}
            </Button>
          </Link>
        </div>

        <figure className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-(--color-surface)">
          <Image
            src="/images/hero.png"
            alt={`${hero.attribution.name}, ${hero.attribution.role}`}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-top"
            priority
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-(--color-bg)/85 via-transparent to-transparent"
          />
          <figcaption className="absolute right-5 bottom-5 text-right">
            <span className="block text-[0.6875rem] uppercase tracking-[0.3em] text-(--color-accent)">
              {hero.attribution.name}
            </span>
            <span className="block text-[0.6875rem] uppercase tracking-[0.2em] text-(--color-muted)">
              {hero.attribution.role}
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

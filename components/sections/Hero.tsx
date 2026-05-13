import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Link from 'next/link';

export function Hero() {
  const { hero } = site;

  return (
    <section className="relative overflow-hidden bg-(--color-bg) pt-12 pb-20 md:pt-20 md:pb-32">
      <Container className="grid items-end gap-10 md:grid-cols-[1.1fr_1fr]">
        <div className="space-y-8">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="text-display text-6xl sm:text-7xl md:text-[7.5rem]">
            {hero.title.map((word, i) => (
              <span
                key={word}
                className={
                  i === hero.titleAccentLineIndex ? 'block text-(--color-accent)' : 'block'
                }
              >
                {word}
              </span>
            ))}
          </h1>
          <Link href="#stat" aria-label={hero.cta}>
            <Button variant="outline" size="lg">
              {hero.cta}
            </Button>
          </Link>
        </div>

        <figure
          className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-(--color-surface) to-(--color-surface-2)"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(31,203,79,0.18),transparent_60%)]" />
          <figcaption className="absolute bottom-6 right-6 text-right">
            <span className="block text-xs uppercase tracking-[0.3em] text-(--color-accent)">
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

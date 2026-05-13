import { Container } from '@/components/ui/Container';
import { pecPoints } from '@/lib/content/pec-points';
import { site } from '@/lib/content/site';

export function PecExplained() {
  return (
    <section className="bg-(--color-surface) py-20 md:py-28">
      <Container>
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-display text-5xl md:text-7xl text-(--color-accent) leading-[0.95]">
            {site.pecExplained.title}
          </h2>
          <p className="mt-4 text-display text-2xl md:text-3xl text-(--color-ink)">
            {site.pecExplained.subtitle}
          </p>
          <p className="mt-8 text-sm md:text-base text-(--color-muted) leading-relaxed">
            {site.pecExplained.body}
          </p>
        </header>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pecPoints.map((point) => (
            <li
              key={point.number}
              className="rounded-2xl border border-(--color-border) bg-(--color-surface-2) p-6 flex flex-col gap-4 min-h-[14rem]"
            >
              <span className="text-display text-5xl md:text-6xl text-(--color-accent)">
                {point.number}
              </span>
              <h3 className="text-display text-xl md:text-2xl text-(--color-ink)">{point.title}</h3>
              <p className="text-sm text-(--color-muted) leading-relaxed">{point.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

import { Container } from '@/components/ui/Container';
import { pecPoints } from '@/lib/content/pec-points';
import { site } from '@/lib/content/site';

export function PecExplained() {
  return (
    <section className="bg-(--color-surface) py-24 md:py-32">
      <Container>
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-display text-6xl md:text-8xl text-(--color-accent) leading-[0.92]">
            {site.pecExplained.title}
          </h2>
          <div className="mt-3 inline-flex items-center gap-3">
            <span className="h-px w-12 bg-(--color-accent)" />
            <p className="text-display text-2xl md:text-3xl text-(--color-ink)">
              {site.pecExplained.subtitle}
            </p>
            <span className="h-px w-12 bg-(--color-accent)" />
          </div>
          <p className="mx-auto mt-10 max-w-[72ch] text-sm md:text-base text-(--color-muted) leading-relaxed">
            {site.pecExplained.body}
          </p>
        </header>

        <ul className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pecPoints.map((point) => (
            <li
              key={point.number}
              className="flex min-h-[16rem] flex-col gap-4 rounded-2xl border border-(--color-border) bg-(--color-surface-2) p-6"
            >
              <span className="text-display text-6xl md:text-7xl text-(--color-accent) leading-none">
                {point.number}
              </span>
              <span className="h-px w-10 bg-(--color-border)" />
              <h3 className="text-display text-xl md:text-2xl text-(--color-ink)">{point.title}</h3>
              <p className="text-sm text-(--color-muted) leading-relaxed">{point.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

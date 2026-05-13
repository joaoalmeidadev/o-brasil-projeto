import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { defenders } from '@/lib/content/defenders';
import { site } from '@/lib/content/site';
import Link from 'next/link';

export function DefendersGrid() {
  return (
    <section className="bg-(--color-bg) py-20 md:py-28 border-y border-(--color-border)">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div>
          <h2 className="text-display text-4xl md:text-6xl leading-[0.95]">
            {site.defenders.title}
          </h2>
          <p className="mt-6 text-sm md:text-base text-(--color-muted) leading-relaxed max-w-prose">
            {site.defenders.body}
          </p>
          <div className="mt-10">
            <Button variant="accent">{site.defenders.cta}</Button>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {defenders.map((d) => (
            <li
              key={d.id}
              className="flex items-center gap-4 rounded-2xl border border-(--color-border) bg-(--color-surface) p-4"
            >
              <div
                className="size-16 shrink-0 overflow-hidden rounded-xl bg-(--color-surface-2)"
                aria-hidden
              />
              <div className="flex-1 min-w-0">
                <p className="text-display text-xl uppercase leading-tight">{d.name}</p>
                <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-(--color-muted)">
                  {d.role} · {d.party}
                </p>
                {d.socials?.instagram && (
                  <Link
                    href={d.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-[0.6875rem] uppercase tracking-[0.2em] text-(--color-accent) hover:underline"
                  >
                    Instagram →
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

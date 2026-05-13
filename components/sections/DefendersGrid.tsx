import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { defenders } from '@/lib/content/defenders';
import { site } from '@/lib/content/site';
import Image from 'next/image';
import Link from 'next/link';

export function DefendersGrid() {
  return (
    <section className="bg-(--color-bg) py-24 md:py-32 border-y border-(--color-border)">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-start">
        <div>
          <h2 className="text-display text-5xl md:text-7xl leading-[0.9]">
            {site.defenders.title}
          </h2>
          <p className="mt-6 max-w-[42ch] text-sm md:text-base text-(--color-muted) leading-relaxed">
            {site.defenders.body}
          </p>
          <div className="mt-10">
            <Button variant="accent">{site.defenders.cta}</Button>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {defenders.map((d) => (
            <li
              key={d.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface)"
            >
              <div className="relative aspect-[3/4] w-full bg-(--color-surface-2)">
                <Image
                  src={d.photo}
                  alt={d.name}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="text-display text-2xl leading-tight">{d.name}</p>
                <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-(--color-muted)">
                  {d.role}
                  <span className="ml-1 text-(--color-accent)">{d.party}</span>
                </p>
                {d.socials?.instagram && (
                  <Link
                    href={d.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 text-[0.6875rem] uppercase tracking-[0.2em] text-(--color-accent) hover:underline"
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

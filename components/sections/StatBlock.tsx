import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Link from 'next/link';

export function StatBlock() {
  const { stat } = site;

  return (
    <section id="stat" className="bg-(--color-bg) py-24 md:py-32">
      <Container className="grid gap-16 md:grid-cols-[1.25fr_1fr] md:items-center">
        <div>
          <div className="flex items-end gap-2 sm:gap-4">
            <span className="text-display text-(--color-accent) text-[clamp(9rem,22vw,18rem)] leading-[0.78] -mb-2">
              {stat.big}
            </span>
            <p className="pb-3 text-display text-2xl md:text-4xl max-w-[10ch] text-(--color-ink) leading-[0.92]">
              {stat.headline}
            </p>
          </div>
          <p className="mt-10 max-w-[44ch] text-sm md:text-base text-(--color-muted) leading-relaxed">
            {stat.body}
          </p>
          <div className="mt-10">
            <Link href="#signup">
              <Button variant="accent" size="lg">
                {stat.cta}
              </Button>
            </Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-8 md:p-10">
          <DotChart />
          <p className="mt-8 text-display text-3xl md:text-4xl leading-tight text-(--color-ink)">
            {stat.cardTitle}
          </p>
          <p className="mt-4 text-sm text-(--color-muted) leading-relaxed">{stat.cardBody}</p>
        </aside>
      </Container>
    </section>
  );
}

function DotChart() {
  return (
    <div className="grid grid-cols-5 gap-3 w-fit" aria-hidden>
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className={
            i < 9
              ? 'size-5 rounded-full bg-(--color-accent)'
              : 'size-5 rounded-full border-2 border-(--color-border)'
          }
        />
      ))}
    </div>
  );
}

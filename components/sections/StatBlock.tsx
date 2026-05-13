import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Link from 'next/link';

export function StatBlock() {
  const { stat } = site;

  return (
    <section id="stat" className="bg-(--color-bg) py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <div className="flex items-end gap-6">
            <span className="text-display text-(--color-accent) text-[clamp(8rem,18vw,16rem)] leading-[0.8]">
              {stat.big}
            </span>
            <p className="pb-2 text-display text-xl md:text-3xl max-w-[14ch] text-(--color-ink)">
              {stat.headline}
            </p>
          </div>
          <p className="mt-8 max-w-prose text-sm md:text-base text-(--color-muted) leading-relaxed">
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

        <aside className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-8">
          <DotChart />
          <p className="mt-6 text-display text-2xl md:text-3xl leading-tight text-(--color-ink)">
            {stat.cardTitle}
          </p>
          <p className="mt-3 text-sm text-(--color-muted) leading-relaxed">{stat.cardBody}</p>
        </aside>
      </Container>
    </section>
  );
}

function DotChart() {
  const total = 30;
  return (
    <div className="grid grid-cols-10 gap-2" aria-hidden>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={
            i < 27
              ? 'size-3 rounded-full bg-(--color-accent)'
              : 'size-3 rounded-full bg-(--color-border)'
          }
        />
      ))}
    </div>
  );
}

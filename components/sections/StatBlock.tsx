import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Link from 'next/link';

export function StatBlock() {
  const { stat } = site;

  return (
    <section id="stat" className="bg-(--color-paper) py-20 md:py-28 text-(--color-deep-green)">
      <Container>
        <div className="grid items-end gap-10 md:grid-cols-[1.3fr_1fr]">
          <div className="flex items-end gap-2 sm:gap-6">
            <span
              className="text-display text-[clamp(11rem,26vw,22rem)] leading-[0.75] -mb-2"
              style={{ color: 'var(--color-deep-green)' }}
            >
              {stat.big}
            </span>
            <div className="pb-4 text-display text-3xl md:text-5xl leading-[0.9] flex flex-col gap-1 max-w-[10ch]">
              <span>em</span>
              <span>cada 10</span>
              <span className="inline-flex w-fit bg-(--color-deep-green) px-2 text-(--color-paper)">
                BRASILEIROS
              </span>
              <span>são</span>
              <span className="inline-flex w-fit bg-(--color-deep-green) px-2 text-(--color-paper)">
                A FAVOR
              </span>
            </div>
          </div>

          <aside className="border-2 border-(--color-deep-green) p-6 md:p-8">
            <DotChart />
            <p className="mt-6 text-display text-2xl md:text-3xl leading-tight">{stat.cardTitle}</p>
            <p className="mt-3 text-xs md:text-sm text-(--color-paper-muted) leading-relaxed">
              {stat.cardBody}
            </p>
          </aside>
        </div>

        <p className="mt-10 max-w-[60ch] text-sm md:text-base text-(--color-paper-muted) leading-relaxed">
          {stat.body}
        </p>

        <Link
          href="#signup"
          className="mt-10 inline-flex w-full items-center justify-center bg-(--color-deep-green) px-8 py-5 text-display text-xl md:text-2xl text-(--color-paper) tracking-[0.05em] uppercase transition hover:bg-(--color-accent) hover:text-(--color-deep-green)"
        >
          {stat.cta}
        </Link>
      </Container>
    </section>
  );
}

function DotChart() {
  return (
    <div className="grid grid-cols-5 gap-3 w-fit" aria-hidden>
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} className="size-5 rounded-full bg-(--color-deep-green)" />
      ))}
      <span className="relative grid size-5 place-items-center rounded-full border-2 border-(--color-deep-green)">
        <span className="absolute inset-1 rotate-45 border-t-2 border-(--color-deep-green)" />
      </span>
    </div>
  );
}

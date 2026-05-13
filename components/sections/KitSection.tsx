import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Link from 'next/link';

export function KitSection() {
  const { kit } = site;

  return (
    <section className="bg-(--color-bg) py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <h2 className="text-display text-5xl md:text-7xl leading-[0.95]">
            {kit.title.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className={i === kit.titleAccentLineIndex ? 'block text-(--color-accent)' : 'block'}
              >
                {word}
              </span>
            ))}
          </h2>
          <p className="mt-8 max-w-prose text-sm md:text-base text-(--color-muted) leading-relaxed">
            {kit.body}
          </p>
          <div className="mt-10">
            <Link href="#signup">
              <Button variant="accent" size="lg">
                {site.signup.cta}
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-(--color-surface) to-(--color-surface-2)">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(31,203,79,0.18),transparent_55%)]"
            aria-hidden
          />
          <div
            className="relative h-[85%] w-[40%] -rotate-6 rounded-[2rem] border border-(--color-border) bg-(--color-bg) p-3 shadow-2xl"
            aria-hidden
          >
            <div className="size-full rounded-[1.5rem] bg-(--color-surface)/80">
              <div className="p-4 text-display text-3xl md:text-4xl text-(--color-accent) leading-tight">
                9<span className="text-(--color-ink)">EM CADA</span>10
              </div>
              <p className="px-4 text-[0.6875rem] uppercase tracking-[0.2em] text-(--color-muted)">
                brasileiros defendem a redução
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

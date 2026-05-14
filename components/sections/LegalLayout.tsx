import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  title: ReactNode;
  effectiveDate: string;
  kicker: string;
  toc: { id: string; label: string }[];
  children: ReactNode;
};

export function LegalLayout({ title, effectiveDate, kicker, toc, children }: Props) {
  return (
    <>
      <header className="border-b border-(--color-border) bg-(--color-bg)">
        <Container className="flex h-16 items-center justify-between gap-6">
          <Link href="/" aria-label={site.title} className="flex items-center gap-3">
            <Image
              src="/images/logo-mark.png"
              alt={site.title}
              width={150}
              height={82}
              className="h-9 w-auto"
              priority
            />
            <div className="hidden text-display text-sm leading-[0.95] text-(--color-ink) sm:block">
              <span className="block">O Brasil Não</span>
              <span className="block">Aguenta Mais</span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-[0.6875rem] uppercase tracking-[0.2em] text-(--color-muted) hover:text-(--color-accent)"
          >
            ← Voltar ao início
          </Link>
        </Container>
      </header>

      <main className="bg-(--color-bg) py-16 md:py-24">
        <Container className="max-w-3xl">
          <div className="space-y-6">
            <span className="eyebrow">{kicker}</span>
            <h1 className="text-display text-5xl md:text-7xl leading-[0.95]">{title}</h1>
            <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-(--color-muted)">
              Vigência: {effectiveDate}
            </p>
          </div>

          {toc.length > 0 && (
            <nav
              aria-label="Sumário"
              className="mt-12 rounded-2xl border border-(--color-border) bg-(--color-surface) p-6"
            >
              <p className="text-display text-sm uppercase tracking-[0.18em] text-(--color-accent)">
                Sumário
              </p>
              <ol className="mt-4 space-y-2 text-sm text-(--color-ink)">
                {toc.map((item, i) => (
                  <li key={item.id} className="flex gap-3">
                    <span className="w-6 shrink-0 text-(--color-muted) tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <a
                      href={`#${item.id}`}
                      className="text-(--color-ink) hover:text-(--color-accent) hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <article className="legal-prose mt-16 space-y-12">{children}</article>
        </Container>
      </main>

      <Footer />
    </>
  );
}

type SectionProps = {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
};

export function LegalSection({ id, number, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <div className="flex items-baseline gap-4">
        <span className="text-display text-2xl text-(--color-accent) tabular-nums">
          {String(number).padStart(2, '0')}
        </span>
        <h2 className="text-display text-2xl md:text-3xl leading-tight">{title}</h2>
      </div>
      <div className="space-y-4 text-sm md:text-base text-(--color-muted) leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-(--color-accent)/15 px-1.5 py-0.5 font-mono text-[0.85em] text-(--color-accent)">
      {children}
    </span>
  );
}

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  const { hero } = site;

  return (
    <section className="relative isolate overflow-hidden bg-(--color-bg) min-h-[88dvh]">
      <div className="absolute inset-y-0 right-0 w-full md:w-[58%] lg:w-[52%]">
        <Image
          src="/images/hero.png"
          alt={`${hero.attribution.name}, ${hero.attribution.role}`}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover object-[30%_top] grayscale"
          priority
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-(--color-bg) via-(--color-bg)/40 to-transparent md:from-(--color-bg) md:via-(--color-bg)/30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-(--color-bg) via-transparent to-transparent"
        />
      </div>

      <Container className="relative z-10 flex min-h-[88dvh] flex-col justify-between gap-12 pt-6 pb-12 md:pt-8">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-mark.png"
              alt={site.title}
              width={150}
              height={82}
              className="h-10 w-auto"
              priority
            />
            <div className="text-display text-base leading-[0.95] text-(--color-ink)">
              <span className="block">O Brasil Não</span>
              <span className="block">Aguenta Mais</span>
            </div>
          </div>
          <div className="hidden md:block text-[0.7rem] uppercase tracking-[0.2em] text-(--color-ink) leading-[1.5]">
            <span className="block">{site.pec}</span>
            <span className="block">{site.pecHeadline}</span>
          </div>
        </div>

        <div className="grid items-end gap-10 md:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <span className="eyebrow text-(--color-accent)">{hero.eyebrow}</span>
            <h1 className="text-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.88]">
              <span className="block text-(--color-ink)">Nossa</span>
              <span className="block text-(--color-ink)">Geração</span>
              <span className="block text-(--color-accent)">Precisa</span>
              <span className="block text-(--color-accent)">Responder</span>
            </h1>
            <Link href="#stat" aria-label={hero.cta}>
              <Button variant="outline" size="lg" trailingIcon="↘">
                {hero.cta}
              </Button>
            </Link>
          </div>

          <div className="self-end md:justify-self-end text-right">
            <span className="block text-[0.7rem] uppercase tracking-[0.25em] text-(--color-ink)">
              Flávio
            </span>
            <span className="block text-display text-2xl md:text-3xl leading-none text-(--color-accent)">
              Bolsonaro
            </span>
            <span className="mt-1 block text-[0.7rem] uppercase tracking-[0.2em] text-(--color-muted)">
              Senador
            </span>
            <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-(--color-muted)">
              (PL/RJ)
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

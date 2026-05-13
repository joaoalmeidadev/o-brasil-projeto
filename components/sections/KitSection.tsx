import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Image from 'next/image';
import Link from 'next/link';

export function KitSection() {
  const { kit } = site;

  return (
    <section className="relative overflow-hidden bg-(--color-surface) py-20 md:py-28">
      <Container className="relative grid items-center gap-8 md:grid-cols-[1fr_1.35fr]">
        <div>
          <h2 className="text-display text-5xl md:text-[5.5rem] leading-[0.88]">
            <span className="block text-(--color-ink)">Faça</span>
            <span className="block text-(--color-ink)">Parte da</span>
            <span className="block text-(--color-accent)">Mudança</span>
          </h2>
          <p className="mt-8 max-w-[40ch] text-sm md:text-base text-(--color-muted) leading-relaxed">
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

        <div className="relative aspect-[1180/1180] w-full md:-mr-12 lg:-mr-24">
          <Image
            src="/images/kit/composed.png"
            alt="Mockup de Instagram + materiais da campanha PEC 32/2019"
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-contain"
            priority={false}
          />
        </div>
      </Container>
    </section>
  );
}

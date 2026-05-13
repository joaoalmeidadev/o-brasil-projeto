import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Image from 'next/image';
import Link from 'next/link';

export function KitSection() {
  const { kit } = site;

  return (
    <section className="relative overflow-hidden bg-(--color-surface) py-24 md:py-32">
      <Container className="relative grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <h2 className="text-display text-6xl md:text-[7rem] leading-[0.88]">
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

        <div className="relative h-[32rem] md:h-[34rem]">
          <div className="absolute top-10 left-0 w-[40%] -rotate-[14deg]">
            <Image
              src="/images/kit/2.png"
              alt="Material gráfico em formato story"
              width={959}
              height={808}
              className="h-auto w-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="absolute top-12 right-0 w-[40%] rotate-[14deg]">
            <Image
              src="/images/kit/3.png"
              alt="Material gráfico em formato reel"
              width={959}
              height={808}
              className="h-auto w-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="absolute top-0 left-1/2 z-10 w-[55%] -translate-x-1/2 rotate-[5deg]">
            <Image
              src="/images/kit/1.png"
              alt="Mockup de celular com material da campanha"
              width={1600}
              height={1186}
              className="h-auto w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

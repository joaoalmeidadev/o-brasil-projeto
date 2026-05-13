import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Image from 'next/image';
import Link from 'next/link';

export function KitSection() {
  const { kit } = site;

  return (
    <section className="bg-(--color-bg) py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.15fr] md:items-center">
        <div>
          <h2 className="text-display text-6xl md:text-[7rem] text-(--color-accent) leading-[0.88]">
            {kit.title}
          </h2>
          <p className="mt-8 max-w-[42ch] text-sm md:text-base text-(--color-muted) leading-relaxed">
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

        <div className="relative h-[28rem] md:h-[32rem]">
          <div className="absolute top-4 left-1/2 z-10 w-[55%] -translate-x-1/2 rotate-3">
            <Image
              src="/images/kit/1.png"
              alt="Mockup de celular com material da campanha"
              width={1600}
              height={1186}
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
          <div className="absolute top-24 left-0 w-[42%] -rotate-12">
            <Image
              src="/images/kit/2.png"
              alt="Material gráfico em formato story"
              width={959}
              height={808}
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
          <div className="absolute top-24 right-0 w-[42%] rotate-12">
            <Image
              src="/images/kit/3.png"
              alt="Material gráfico em formato reel"
              width={959}
              height={808}
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

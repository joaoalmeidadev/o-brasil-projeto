import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Obrigado!',
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <>
      <Header />
      <main className="bg-(--color-bg) py-32">
        <Container className="text-center">
          <span className="eyebrow">Cadastro confirmado</span>
          <h1 className="mt-6 text-display text-5xl md:text-7xl leading-[0.95]">
            Obrigado por se <span className="text-(--color-accent)">somar</span>
          </h1>
          <p className="mx-auto mt-6 max-w-prose text-sm md:text-base text-(--color-muted) leading-relaxed">
            Em instantes você receberá no e-mail informado a confirmação e os próximos passos para
            participar da mobilização pela PEC 32/2019.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/">
              <Button variant="outline" size="lg" trailingIcon="←">
                Voltar ao início
              </Button>
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

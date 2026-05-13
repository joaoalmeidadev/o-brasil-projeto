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
          <span className="eyebrow">Confirme seu e-mail</span>
          <h1 className="mt-6 text-display text-5xl md:text-7xl leading-[0.95]">
            Falta um <span className="text-(--color-accent)">passo</span>
          </h1>
          <p className="mx-auto mt-6 max-w-prose text-sm md:text-base text-(--color-muted) leading-relaxed">
            Enviamos um e-mail para o endereço informado. Abra a caixa de entrada e clique em{' '}
            <strong className="text-(--color-ink)">Confirmar</strong> para começar a receber o kit
            completo de materiais da mobilização pela PEC 32/2019.
          </p>
          <p className="mx-auto mt-3 max-w-prose text-xs text-(--color-muted)">
            Não chegou? Verifique a pasta de spam ou promoções.
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

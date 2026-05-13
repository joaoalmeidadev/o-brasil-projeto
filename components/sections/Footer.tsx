import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-(--color-bg) py-14 border-t border-(--color-border)">
      <Container className="flex flex-col items-center gap-5 text-center">
        <Image
          src="/images/logo-flavio.png"
          alt="Flávio Bolsonaro"
          width={251}
          height={104}
          className="h-14 w-auto"
        />
        <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-(--color-muted)">
          {site.footer.rights}
          {site.footer.links.map((link) => (
            <span key={link.href}>
              {' · '}
              <Link href={link.href} className="hover:text-(--color-accent)">
                {link.label}
              </Link>
            </span>
          ))}
        </p>
      </Container>
    </footer>
  );
}

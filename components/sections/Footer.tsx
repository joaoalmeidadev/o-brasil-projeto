import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-(--color-bg) py-12 border-t border-(--color-border)">
      <Container className="flex flex-col items-center gap-4 text-center">
        <p className="text-display text-3xl text-(--color-ink)">{site.footer.brand}</p>
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">
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

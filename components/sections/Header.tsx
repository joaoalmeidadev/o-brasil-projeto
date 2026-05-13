import { Container } from '@/components/ui/Container';
import { Tag } from '@/components/ui/Tag';
import { site } from '@/lib/content/site';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-(--color-bg)/80 border-b border-(--color-border)">
      <Container className="flex h-14 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]"
        >
          <span aria-hidden className="inline-block size-2 rounded-full bg-(--color-accent)" />
          {site.title}
        </Link>
        <div className="hidden md:flex items-center gap-3">
          <Tag tone="accent">{site.pec}</Tag>
          <Tag>{site.pecHeadline}</Tag>
        </div>
      </Container>
    </header>
  );
}

import { Container } from '@/components/ui/Container';
import { Tag } from '@/components/ui/Tag';
import { site } from '@/lib/content/site';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-(--color-bg)/85 border-b border-(--color-border)">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label={site.title} className="flex items-center">
          <Image
            src="/images/logo-mark.png"
            alt={site.title}
            width={150}
            height={82}
            className="h-9 w-auto"
            priority
          />
        </Link>
        <div className="hidden items-center gap-3 md:flex">
          <Tag tone="accent">{site.pec}</Tag>
          <Tag>{site.pecHeadline}</Tag>
        </div>
      </Container>
    </header>
  );
}

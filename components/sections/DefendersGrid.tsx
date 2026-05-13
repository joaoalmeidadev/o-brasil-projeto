import { Container } from '@/components/ui/Container';
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { defenders } from '@/lib/content/defenders';
import { site } from '@/lib/content/site';
import Image from 'next/image';
import Link from 'next/link';

export function DefendersGrid() {
  return (
    <section className="bg-(--color-bg) py-24 md:py-32 border-y border-(--color-border)">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-start">
        <div className="md:sticky md:top-24 self-start">
          <h2 className="text-display text-6xl md:text-8xl leading-[0.9]">
            <span className="block">Conheça os</span>
            <span className="block text-(--color-accent)">Defensores</span>
            <span className="block text-(--color-accent)">do Brasil</span>
          </h2>
          <p className="mt-6 max-w-[40ch] text-sm md:text-base text-(--color-muted) leading-relaxed">
            {site.defenders.body}
          </p>
        </div>

        <ul className="flex flex-col">
          {defenders.map((d, i) => {
            const [first, ...rest] = d.name.split(' ');
            const last = rest.join(' ');
            return (
              <li
                key={d.id}
                className={`grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-5 rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 sm:p-5 ${
                  i > 0 ? '-mt-3' : ''
                }`}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-(--color-surface-2)">
                  <Image
                    src={d.photo}
                    alt={d.name}
                    fill
                    sizes="(min-width: 640px) 160px, 120px"
                    className="object-cover object-top origin-top"
                    style={{ transform: `scale(1.4) translateY(${d.photoOffsetY ?? '0'})` }}
                  />
                </div>
                <div className="flex flex-col justify-between gap-3 py-1">
                  <div>
                    <p className="text-display text-3xl sm:text-4xl leading-[0.95] text-(--color-ink)">
                      {first}
                    </p>
                    <p className="text-display text-3xl sm:text-4xl leading-[0.95] text-(--color-accent)">
                      {last}
                    </p>
                    <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-(--color-muted) leading-tight">
                      <span className="block">{d.role}</span>
                      <span className="block">({d.party})</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-(--color-ink)">
                    {d.socials?.instagram && (
                      <Link
                        href={d.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${d.name} no Instagram`}
                        className="grid size-8 place-items-center rounded-full border border-(--color-border) transition hover:border-(--color-accent) hover:text-(--color-accent)"
                      >
                        <InstagramIcon className="size-4" />
                      </Link>
                    )}
                    <Link
                      href="#"
                      aria-label={`${d.name} no Facebook`}
                      className="grid size-8 place-items-center rounded-full border border-(--color-border) transition hover:border-(--color-accent) hover:text-(--color-accent)"
                    >
                      <FacebookIcon className="size-4" />
                    </Link>
                    {d.socials?.twitter && (
                      <Link
                        href={d.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${d.name} no X`}
                        className="grid size-8 place-items-center rounded-full border border-(--color-border) transition hover:border-(--color-accent) hover:text-(--color-accent)"
                      >
                        <XIcon className="size-4" />
                      </Link>
                    )}
                    <Link
                      href="#"
                      aria-label={`${d.name} no YouTube`}
                      className="grid size-8 place-items-center rounded-full border border-(--color-border) transition hover:border-(--color-accent) hover:text-(--color-accent)"
                    >
                      <YoutubeIcon className="size-4" />
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

import { SignupForm } from '@/components/form/SignupForm';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Image from 'next/image';

export function SignupCta() {
  const { signup } = site;

  return (
    <section id="signup" className="bg-(--color-surface) py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-stretch">
        <div className="flex flex-col justify-between gap-12">
          <h2 className="text-display text-5xl md:text-[5.5rem] leading-[0.9]">
            <span className="block">{signup.titleLine1}</span>
            <span className="block text-(--color-accent)">{signup.titleAccent1}</span>
            <span className="block">{signup.titleLine2}</span>
            <span className="block text-(--color-accent)">{signup.titleAccent2}</span>
          </h2>

          <div className="rounded-2xl border border-(--color-border) bg-(--color-bg) p-6 md:p-8">
            <p className="text-display text-xl md:text-2xl text-(--color-ink)">{signup.body}</p>
            <div className="mt-6">
              <SignupForm />
            </div>
          </div>
        </div>

        <div className="relative min-h-[28rem] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/congresso.png"
            alt="Congresso Nacional"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-(--color-surface)/40 to-transparent"
          />
        </div>
      </Container>
    </section>
  );
}

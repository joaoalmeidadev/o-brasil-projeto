import { SignupForm } from '@/components/form/SignupForm';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Image from 'next/image';

export function SignupCta() {
  const { signup } = site;

  return (
    <section id="signup" className="relative overflow-hidden bg-(--color-surface) pt-20 md:pt-24">
      <Image
        src="/images/congresso.png"
        alt="Congresso Nacional"
        width={379}
        height={535}
        sizes="(min-width: 1024px) 32vw, (min-width: 768px) 38vw, 70vw"
        className="pointer-events-none absolute bottom-0 right-4 hidden h-auto w-[38%] select-none md:block md:right-8 lg:right-16 lg:w-[32%]"
        priority={false}
      />

      <Container className="relative z-10 grid gap-12 pb-20 md:grid-cols-[1fr_1fr] md:pb-24">
        <div className="flex flex-col gap-10 md:gap-12">
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

        <div aria-hidden className="hidden md:block" />
      </Container>
    </section>
  );
}

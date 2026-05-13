import { SignupForm } from '@/components/form/SignupForm';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';
import Image from 'next/image';

export function SignupCta() {
  const { signup } = site;

  return (
    <section id="signup" className="relative overflow-hidden bg-(--color-surface) pt-12 md:pt-16">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] select-none md:block lg:w-[42%]">
        <Image
          src="/images/congresso.png"
          alt="Congresso Nacional"
          fill
          sizes="(min-width: 1024px) 42vw, (min-width: 768px) 46vw, 80vw"
          className="object-cover object-bottom"
          quality={90}
          priority={false}
        />
      </div>

      <Container className="relative z-10 grid gap-8 pb-12 md:grid-cols-[1fr_1fr] md:pb-16">
        <div className="flex flex-col gap-6 md:gap-8">
          <h2 className="text-display text-4xl md:text-[4.5rem] leading-[0.9]">
            <span className="block">{signup.titleLine1}</span>
            <span className="block text-(--color-accent)">{signup.titleAccent1}</span>
            <span className="block">{signup.titleLine2}</span>
            <span className="block text-(--color-accent)">{signup.titleAccent2}</span>
          </h2>

          <div className="rounded-2xl border border-(--color-border) bg-(--color-bg) p-5 md:p-6">
            <p className="text-display text-lg md:text-xl text-(--color-ink)">{signup.body}</p>
            <div className="mt-4">
              <SignupForm />
            </div>
          </div>
        </div>

        <div aria-hidden className="hidden md:block" />
      </Container>
    </section>
  );
}

import { SignupForm } from '@/components/form/SignupForm';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/content/site';

export function SignupCta() {
  const { signup } = site;
  const accents = new Set<number>(signup.accentSegments);

  return (
    <section id="signup" className="bg-(--color-surface) py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <h2 className="text-display text-5xl md:text-[5.5rem] leading-[0.95]">
            {signup.title.map((segment, i) => (
              <span
                key={`${segment}-${i}`}
                className={accents.has(i) ? 'block text-(--color-accent)' : 'block'}
              >
                {segment}
              </span>
            ))}
          </h2>
          <p className="mt-6 text-display text-lg md:text-xl text-(--color-ink)">{signup.body}</p>
        </div>

        <div className="rounded-2xl border border-(--color-border) bg-(--color-bg) p-6 md:p-8">
          <SignupForm />
        </div>
      </Container>
    </section>
  );
}

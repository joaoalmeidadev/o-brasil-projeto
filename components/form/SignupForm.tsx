'use client';

import { subscribe } from '@/app/actions/subscribe';
import { Button } from '@/components/ui/Button';
import { site } from '@/lib/content/site';
import { type LeadInput, brazilianStates, leadSchema } from '@/lib/schemas/lead';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

export function SignupForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      state: undefined,
      consent: false as unknown as true,
    },
    mode: 'onBlur',
  });

  const onSubmit = (values: LeadInput) => {
    setSubmitError(null);
    startTransition(async () => {
      const result = await subscribe(values);
      if (result.ok) {
        router.push('/obrigado');
        return;
      }
      if (result.fieldErrors) {
        for (const [key, message] of Object.entries(result.fieldErrors)) {
          setError(key as keyof LeadInput, { message });
        }
      }
      setSubmitError(result.error);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4"
      aria-describedby={submitError ? 'form-error' : undefined}
    >
      <Field label="Nome completo" name="name" error={errors.name?.message}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={inputClass}
          {...register('name')}
        />
      </Field>

      <Field label="E-mail" name="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          className={inputClass}
          {...register('email')}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Telefone (opcional)" name="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="(11) 99999-0000"
            {...register('phone')}
          />
        </Field>

        <Field label="Estado (opcional)" name="state" error={errors.state?.message}>
          <select id="state" className={inputClass} defaultValue="" {...register('state')}>
            <option value="">UF</option>
            {brazilianStates.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <label className="flex items-start gap-3 text-sm text-(--color-muted)">
        <input
          type="checkbox"
          className="mt-1 size-4 accent-(--color-accent)"
          {...register('consent')}
        />
        <span>{site.signup.consent}</span>
      </label>
      {errors.consent && <p className="text-xs text-red-400">{errors.consent.message}</p>}

      {submitError && (
        <p id="form-error" className="text-sm text-red-400">
          {submitError}
        </p>
      )}

      <Button type="submit" size="lg" disabled={isPending}>
        {isPending ? 'Enviando…' : site.signup.cta}
      </Button>
    </form>
  );
}

const inputClass =
  'w-full rounded-lg border border-(--color-border) bg-(--color-bg)/60 px-4 py-3 text-sm text-(--color-ink) placeholder:text-(--color-muted) focus:border-(--color-accent) focus:outline-none focus:ring-2 focus:ring-(--color-accent)/40';

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[0.6875rem] uppercase tracking-[0.2em] text-(--color-muted)"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

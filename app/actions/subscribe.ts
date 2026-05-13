'use server';

import { prisma } from '@/lib/db';
import { sendWelcomeEmail } from '@/lib/email';
import { type LeadInput, leadSchema } from '@/lib/schemas/lead';
import { headers } from 'next/headers';

export type SubscribeResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Partial<Record<keyof LeadInput, string>> };

export async function subscribe(payload: unknown): Promise<SubscribeResult> {
  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof LeadInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof LeadInput | undefined;
      if (key && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return { ok: false, error: 'Dados inválidos', fieldErrors };
  }

  const data = parsed.data;
  const h = await headers();
  const ip = (h.get('x-forwarded-for') ?? h.get('x-real-ip') ?? '').split(',')[0].trim() || null;
  const userAgent = h.get('user-agent') ?? null;

  try {
    await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        state: data.state,
        consent: data.consent,
        source: 'landing',
        ip,
        userAgent,
      },
    });
  } catch (err) {
    console.error('[subscribe] db error', err);
    return { ok: false, error: 'Não foi possível salvar agora. Tente novamente em instantes.' };
  }

  try {
    await sendWelcomeEmail({ to: data.email, name: data.name });
  } catch (err) {
    console.error('[subscribe] email error', err);
  }

  return { ok: true };
}

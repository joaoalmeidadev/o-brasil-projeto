import { env } from '@/lib/env';

const LOOPS_API = 'https://app.loops.so/api/v1';

type SubscribeArgs = {
  email: string;
  name: string;
  phone?: string;
  state?: string;
  source?: string;
};

export type LoopsResult =
  | { skipped: true }
  | { skipped: false; created?: boolean; updated?: boolean; transactional?: boolean };

export async function subscribeToLoops({
  email,
  name,
  phone,
  state,
  source = 'landing',
}: SubscribeArgs): Promise<LoopsResult> {
  if (!env.LOOPS_API_KEY) {
    console.warn('[loops] LOOPS_API_KEY ausente — skip envio para', email);
    return { skipped: true };
  }

  const [firstName, ...rest] = name.trim().split(/\s+/);
  const lastName = rest.join(' ') || undefined;

  const contactPayload = {
    email,
    firstName,
    lastName,
    source,
    subscribed: true,
    userGroup: 'PEC 32/2019',
    ...(phone ? { phone } : {}),
    ...(state ? { state } : {}),
  };

  // Tenta criar; se já existir (409), faz update
  const createRes = await fetch(`${LOOPS_API}/contacts/create`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(contactPayload),
  });

  const created = createRes.ok;
  let updated = false;

  if (!createRes.ok) {
    const errText = await createRes.text().catch(() => '');
    const alreadyExists = createRes.status === 409 || /already exists/i.test(errText);

    if (!alreadyExists) {
      throw new Error(`Loops create error: ${createRes.status} ${errText}`);
    }

    const updateRes = await fetch(`${LOOPS_API}/contacts/update`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify(contactPayload),
    });
    if (!updateRes.ok) {
      const updateErr = await updateRes.text().catch(() => '');
      throw new Error(`Loops update error: ${updateRes.status} ${updateErr}`);
    }
    updated = true;
  }

  let transactional = false;
  if (env.LOOPS_WELCOME_TRANSACTIONAL_ID) {
    try {
      await sendTransactional({
        email,
        transactionalId: env.LOOPS_WELCOME_TRANSACTIONAL_ID,
        dataVariables: { firstName: firstName ?? name },
      });
      transactional = true;
    } catch (err) {
      console.error('[loops] transactional error', err);
    }
  }

  return { skipped: false, created, updated, transactional };
}

type TransactionalArgs = {
  email: string;
  transactionalId: string;
  dataVariables?: Record<string, string | number | boolean>;
};

export async function sendTransactional({
  email,
  transactionalId,
  dataVariables,
}: TransactionalArgs): Promise<void> {
  if (!env.LOOPS_API_KEY) return;

  const res = await fetch(`${LOOPS_API}/transactional`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ transactionalId, email, dataVariables }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    throw new Error(`Loops transactional error: ${res.status} ${errText}`);
  }
}

function authHeaders() {
  return {
    Authorization: `Bearer ${env.LOOPS_API_KEY}`,
    'Content-Type': 'application/json',
  };
}

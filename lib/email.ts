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
  | { skipped: false; created?: boolean; updated?: boolean };

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

  // Loops dispara o double opt-in apenas quando o contato é adicionado a uma
  // mailing list pública. Sem a lista, o contato é criado "Unsubscribed" mas
  // nenhum e-mail de confirmação é enviado.
  const mailingLists = env.LOOPS_MAILING_LIST_ID
    ? { [env.LOOPS_MAILING_LIST_ID]: true }
    : undefined;

  const baseContact = {
    email,
    firstName,
    lastName,
    source,
    userGroup: 'PEC 32/2019',
    ...(phone ? { phone } : {}),
    ...(state ? { state } : {}),
    ...(mailingLists ? { mailingLists } : {}),
  };

  // No create: subscribed=false força o Loops a disparar o double opt-in (e-mail
  // de confirmação). O contato só vira subscribed=true após clicar no link.
  const createRes = await fetch(`${LOOPS_API}/contacts/create`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ ...baseContact, subscribed: false }),
  });

  const created = createRes.ok;
  let updated = false;

  if (!createRes.ok) {
    const errText = await createRes.text().catch(() => '');
    const alreadyExists = createRes.status === 409 || /already exists/i.test(errText);

    if (!alreadyExists) {
      throw new Error(`Loops create error: ${createRes.status} ${errText}`);
    }

    // No update: NÃO mandamos `subscribed` para preservar o status atual do
    // contato (se já confirmou, não queremos desinscrever; se está pendente,
    // não vamos forçar confirmar).
    const updateRes = await fetch(`${LOOPS_API}/contacts/update`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify(baseContact),
    });
    if (!updateRes.ok) {
      const updateErr = await updateRes.text().catch(() => '');
      throw new Error(`Loops update error: ${updateRes.status} ${updateErr}`);
    }
    updated = true;
  }

  // Double opt-in está ativo no Loops — a criação dispara automaticamente o
  // e-mail de confirmação. Não fazemos sendTransactional manual aqui.
  return { skipped: false, created, updated };
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

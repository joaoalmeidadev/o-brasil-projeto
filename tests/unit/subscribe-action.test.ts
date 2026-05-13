import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('next/headers', () => ({
  headers: async () =>
    new Map([
      ['x-forwarded-for', '203.0.113.7'],
      ['user-agent', 'vitest'],
    ]) as unknown as Headers,
}));

const createMock = vi.fn();
vi.mock('@/lib/db', () => ({
  prisma: {
    lead: {
      create: (...args: unknown[]) => createMock(...args),
    },
  },
}));

const sendMock = vi.fn();
vi.mock('@/lib/email', () => ({
  sendWelcomeEmail: (...args: unknown[]) => sendMock(...args),
}));

const validInput = {
  name: 'Maria da Silva',
  email: 'maria@example.com',
  phone: '11999990000',
  state: 'SP',
  consent: true,
};

describe('subscribe action', () => {
  beforeEach(() => {
    createMock.mockReset();
    sendMock.mockReset();
    createMock.mockResolvedValue({ id: 'lead_1' });
    sendMock.mockResolvedValue({ skipped: true });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('persiste lead válido e tenta envio de e-mail', async () => {
    const { subscribe } = await import('@/app/actions/subscribe');
    const result = await subscribe(validInput);

    expect(result).toEqual({ ok: true });
    expect(createMock).toHaveBeenCalledTimes(1);
    expect(createMock.mock.calls[0][0].data).toMatchObject({
      name: 'Maria da Silva',
      email: 'maria@example.com',
      state: 'SP',
      consent: true,
      source: 'landing',
    });
    expect(sendMock).toHaveBeenCalledWith({
      to: 'maria@example.com',
      name: 'Maria da Silva',
    });
  });

  it('devolve erros de validação quando payload é inválido', async () => {
    const { subscribe } = await import('@/app/actions/subscribe');
    const result = await subscribe({ ...validInput, email: 'invalido' });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.fieldErrors?.email).toBeDefined();
    }
    expect(createMock).not.toHaveBeenCalled();
  });

  it('continua respondendo ok mesmo se o e-mail falhar', async () => {
    sendMock.mockRejectedValueOnce(new Error('SMTP down'));
    const { subscribe } = await import('@/app/actions/subscribe');
    const result = await subscribe(validInput);
    expect(result).toEqual({ ok: true });
    expect(createMock).toHaveBeenCalledTimes(1);
  });

  it('retorna erro se DB falhar', async () => {
    createMock.mockRejectedValueOnce(new Error('connection refused'));
    const { subscribe } = await import('@/app/actions/subscribe');
    const result = await subscribe(validInput);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toMatch(/n[ãa]o foi poss[íi]vel salvar/i);
    }
  });
});

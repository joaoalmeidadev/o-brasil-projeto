import { leadSchema } from '@/lib/schemas/lead';
import { describe, expect, it } from 'vitest';

const valid = {
  name: 'Maria da Silva',
  email: 'Maria@Example.COM',
  consent: true,
};

describe('leadSchema', () => {
  it('aceita um payload mínimo válido e normaliza o email', () => {
    const result = leadSchema.parse(valid);
    expect(result.email).toBe('maria@example.com');
    expect(result.name).toBe('Maria da Silva');
    expect(result.consent).toBe(true);
    expect(result.phone).toBeUndefined();
    expect(result.state).toBeUndefined();
  });

  it('rejeita nome muito curto', () => {
    const r = leadSchema.safeParse({ ...valid, name: 'A' });
    expect(r.success).toBe(false);
    if (!r.success) {
      expect(r.error.issues[0].path[0]).toBe('name');
    }
  });

  it('rejeita email inválido', () => {
    const r = leadSchema.safeParse({ ...valid, email: 'foo' });
    expect(r.success).toBe(false);
    if (!r.success) {
      expect(r.error.issues[0].path[0]).toBe('email');
    }
  });

  it('rejeita consent diferente de true', () => {
    const r = leadSchema.safeParse({ ...valid, consent: false });
    expect(r.success).toBe(false);
    if (!r.success) {
      expect(r.error.issues[0].path[0]).toBe('consent');
    }
  });

  it('aceita UF válida e remove string vazia', () => {
    const a = leadSchema.parse({ ...valid, state: 'SP' });
    expect(a.state).toBe('SP');
    const b = leadSchema.parse({ ...valid, state: '' });
    expect(b.state).toBeUndefined();
  });

  it('rejeita UF inválida', () => {
    const r = leadSchema.safeParse({ ...valid, state: 'XX' });
    expect(r.success).toBe(false);
  });

  it('aceita phone vazio como undefined', () => {
    const r = leadSchema.parse({ ...valid, phone: '' });
    expect(r.phone).toBeUndefined();
  });
});

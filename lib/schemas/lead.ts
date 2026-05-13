import { z } from 'zod';

const BR_STATES = [
  'AC',
  'AL',
  'AM',
  'AP',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MG',
  'MS',
  'MT',
  'PA',
  'PB',
  'PE',
  'PI',
  'PR',
  'RJ',
  'RN',
  'RO',
  'RR',
  'RS',
  'SC',
  'SE',
  'SP',
  'TO',
] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome completo').max(120, 'Nome muito longo'),
  email: z.string().trim().toLowerCase().email('E-mail inválido').max(180),
  phone: z
    .string()
    .trim()
    .max(20)
    .optional()
    .transform((v) => (v?.length ? v : undefined)),
  state: z
    .union([z.enum(BR_STATES), z.literal('')])
    .optional()
    .transform((v) => (v ? (v as (typeof BR_STATES)[number]) : undefined)),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'É necessário aceitar para continuar' }),
  }),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const brazilianStates = BR_STATES;

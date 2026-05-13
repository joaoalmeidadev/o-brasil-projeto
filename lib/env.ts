import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  LOOPS_API_KEY: z.string().optional().default(''),
  LOOPS_WELCOME_TRANSACTIONAL_ID: z.string().optional().default(''),
  SITE_URL: z.string().url().default('http://localhost:3000'),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

export type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  LOOPS_API_KEY: process.env.LOOPS_API_KEY,
  LOOPS_WELCOME_TRANSACTIONAL_ID: process.env.LOOPS_WELCOME_TRANSACTIONAL_ID,
  SITE_URL: process.env.SITE_URL,
  NODE_ENV: process.env.NODE_ENV,
});

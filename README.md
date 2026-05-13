# O Brasil Não Aguenta Mais — Landing PEC 32/2019

Landing page de campanha (Next.js 15 App Router) com captação de leads via Server Action, Prisma + Postgres e deploy via Kamal 2 na DigitalOcean.

## Requisitos

- Node 22+
- pnpm 11+
- Docker (apenas para o Postgres local e build da imagem)

## Setup

```bash
pnpm install
cp .env.example .env             # ajuste se necessário
pnpm db:up                       # sobe Postgres local em 127.0.0.1:5432
pnpm db:migrate -- --name init   # cria a migration inicial
pnpm dev                         # http://localhost:3000
```

## Comandos

| Comando | O que faz |
| --- | --- |
| `pnpm dev` | Servidor Next em modo desenvolvimento |
| `pnpm build` | Build de produção (gera Prisma Client antes) |
| `pnpm start` | Roda o build localmente |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm lint` | `biome check .` |
| `pnpm lint:fix` | `biome check --write .` |
| `pnpm test` | Suíte Vitest (schema + Server Action) |
| `pnpm test:e2e` | Playwright (fluxo de cadastro) |
| `pnpm db:up` / `pnpm db:down` | Postgres local via Docker |
| `pnpm db:migrate` | Cria/aplica migration em dev |
| `pnpm db:studio` | Prisma Studio |

## Estrutura

```
app/                 # Routes + Server Actions + globals.css
components/          # ui/ (primitivos), sections/ (blocos da landing), form/
lib/                 # content/ (textos), schemas/, db.ts, env.ts, email.ts
prisma/              # schema.prisma + migrations/
tests/               # unit (vitest) + e2e (playwright)
.kamal/              # deploy.yml + hooks + secrets.example
Dockerfile           # multi-stage, output: 'standalone'
docker-compose.yml   # Postgres local
```

## Deploy (Kamal 2 → DigitalOcean)

1. Provisione um Droplet (1 vCPU / 2 GB já basta para MVP).
2. Aponte o domínio (registro A) para o IP do Droplet.
3. Edite `.kamal/deploy.yml` substituindo `TROCAR_*` por valores reais (IP, domínio, usuário do registry).
4. Copie `.kamal/secrets.example` para `.kamal/secrets` e preencha:
   - `KAMAL_REGISTRY_PASSWORD` (PAT GHCR)
   - `DATABASE_URL` e `POSTGRES_PASSWORD` (mesmas credenciais nos dois)
   - `RESEND_API_KEY` (https://resend.com)
5. Primeiro deploy: `kamal setup` (instala Docker + proxy + sobe a app).
6. Deploys subsequentes: `kamal deploy`.
7. Para rodar migrations sem deploy completo: `kamal migrate`.

## Observações

- O conteúdo (defensores, notícias, pontos da PEC, textos) vive em `lib/content/*.ts`. Hard-coded por enquanto — quando migrar para CMS, basta trocar a fonte mantendo a mesma forma.
- Imagens placeholder: substitua os arquivos em `public/images/` pelos assets finais.
- LGPD: checkbox de consentimento obrigatório no formulário; ainda falta página de Política de Privacidade e Termos de Uso.
- Nenhum tracking de terceiros foi adicionado no MVP.

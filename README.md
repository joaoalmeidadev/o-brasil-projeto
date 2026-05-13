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
.kamal/              # deploy.yml + hooks + secrets.example (Kamal/DigitalOcean)
Dockerfile           # multi-stage, output: 'standalone'
docker-entrypoint.sh # roda prisma migrate deploy + node server.js
docker-compose.yml   # Postgres local
render.yaml          # Render Blueprint (deploy gratuito)
```

## Deploy gratuito no Render (preview / staging)

Para mostrar o site online ao seu chefe sem custo (plano free), o repositório já vem com um **Render Blueprint** (`render.yaml`) que provisiona em um clique:
- 1 web service (Docker build do projeto)
- 1 Postgres gratuito (vinculado por env var)

### Passos

1. Faça push do repositório para o **GitHub** (ou GitLab/Bitbucket).
2. Acesse https://dashboard.render.com → **New +** → **Blueprint**.
3. Conecte o repositório. O Render lê `render.yaml` e cria os 2 recursos.
4. Após o primeiro deploy, copie a URL gerada (algo como `https://brasil-nao-aguenta-mais.onrender.com`) e preencha no painel da web app:
   - `SITE_URL` = URL final
   - `LOOPS_API_KEY` = sua chave em https://app.loops.so/settings/api (ou deixe vazio para pular o envio)
   - `LOOPS_WELCOME_TRANSACTIONAL_ID` (opcional) = ID do template transactional para e-mail de boas-vindas
5. Trigger um redeploy (botão **Manual Deploy** → **Clear cache & deploy latest commit**) para pegar as env vars.

### Limitações do tier free

- **Web service free dorme após 15min** sem tráfego (primeiro request demora ~30s pra acordar).
- **Postgres free expira em 30 dias** (Render avisa por e-mail). Para uso prolongado, upgrade ($7/mês).
- **750h de execução/mês** — suficiente para um service rodando 24×7.
- Região fixa em **Oregon** no free.

### Como funciona o deploy

- O `Dockerfile` faz build multi-stage com `next build` + `output: 'standalone'` (~150MB final).
- O `docker-entrypoint.sh` roda `prisma migrate deploy` antes de iniciar o servidor — primeiro boot cria a tabela `Lead` automaticamente.
- Healthcheck do Render bate em `/api/health` — se falhar, o Render reinicia.

---

## Deploy alternativo (Kamal 2 → DigitalOcean)

Para produção dedicada (sem o limite de "sleep" do free):

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

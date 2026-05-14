import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Senha hardcoded por padrão; pode ser sobrescrita via env SITE_PASSWORD.
// Como é proteção temporária pra revisão privada, hardcoded está OK.
const USER = process.env.SITE_USERNAME ?? 'flavio';
const PASS = process.env.SITE_PASSWORD ?? 'pec32-2026';
const REALM = 'O Brasil Nao Aguenta Mais - Acesso restrito';

export function middleware(req: NextRequest) {
  // /api/health permanece público para o healthcheck do Render.
  if (req.nextUrl.pathname === '/api/health') {
    return NextResponse.next();
  }

  const auth = req.headers.get('authorization');
  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic' && encoded) {
      try {
        const decoded = atob(encoded);
        const idx = decoded.indexOf(':');
        const user = decoded.slice(0, idx);
        const pass = decoded.slice(idx + 1);
        if (user === USER && pass === PASS) {
          return NextResponse.next();
        }
      } catch {
        // base64 inválido cai no 401 abaixo
      }
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
    },
  });
}

export const config = {
  // Aplica em todas as rotas, exceto:
  // - /api/health (healthcheck precisa ser público)
  // - /_next/static (assets já estáticos)
  // - /_next/image (otimizador de imagens)
  // - /favicon.ico
  matcher: ['/((?!api/health|_next/static|_next/image|favicon.ico).*)'],
};

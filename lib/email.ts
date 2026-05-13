import { env } from '@/lib/env';
import { Resend } from 'resend';

type SendArgs = {
  to: string;
  name: string;
};

export async function sendWelcomeEmail({ to, name }: SendArgs) {
  if (!env.RESEND_API_KEY) {
    console.warn('[email] RESEND_API_KEY ausente — skip envio para', to);
    return { skipped: true as const };
  }

  const resend = new Resend(env.RESEND_API_KEY);
  const firstName = name.split(' ')[0] ?? name;

  const html = welcomeTemplate({ firstName });

  const { error } = await resend.emails.send({
    from: env.EMAIL_FROM,
    to,
    subject: 'Bem-vindo à mobilização pela PEC 32/2019',
    html,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }

  return { skipped: false as const };
}

function welcomeTemplate({ firstName }: { firstName: string }) {
  return `<!doctype html>
<html lang="pt-BR">
  <body style="margin:0;font-family:Inter,Arial,sans-serif;background:#0b0e0b;color:#f5f5f0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0b0e0b;padding:32px 0;">
      <tr>
        <td align="center">
          <table width="560" cellpadding="0" cellspacing="0" style="background:#0f2218;border-radius:14px;padding:32px;">
            <tr>
              <td>
                <p style="margin:0 0 12px;color:#1fcb4f;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;">PEC 32/2019</p>
                <h1 style="margin:0 0 16px;color:#f5f5f0;font-size:28px;line-height:1.2;">Olá, ${escapeHtml(firstName)} —<br/>boas-vindas à mobilização.</h1>
                <p style="margin:0 0 16px;color:#9aa39a;font-size:14px;line-height:1.6;">Seu cadastro foi confirmado. Em breve você receberá o kit completo de materiais: reels, stories, cards, narrações e textos prontos para multiplicar a luta pela PEC 32/2019.</p>
                <p style="margin:0;color:#9aa39a;font-size:12px;line-height:1.6;">Se você não solicitou este cadastro, basta ignorar este e-mail.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

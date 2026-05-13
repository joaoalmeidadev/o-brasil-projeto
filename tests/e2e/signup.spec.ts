import { expect, test } from '@playwright/test';

test.describe('Fluxo de cadastro', () => {
  test('carrega a landing e mostra seções principais', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByText('A PEC Explicada')).toBeVisible();
    await expect(page.getByText('Defensores do Brasil', { exact: false })).toBeVisible();
  });

  test('valida formulário antes de submeter', async ({ page }) => {
    await page.goto('/#signup');
    await page
      .locator('#signup form')
      .getByRole('button', { name: /preencha o formul[áa]rio/i })
      .click();
    await expect(page.getByText(/informe seu nome/i)).toBeVisible();
    await expect(page.getByText(/é necessário aceitar/i)).toBeVisible();
  });

  test('envia formulário e redireciona para /obrigado', async ({ page }) => {
    const email = `e2e+${Date.now()}@example.com`;
    await page.goto('/#signup');
    const form = page.locator('#signup form');
    await form.locator('#name').fill('Visitante E2E');
    await form.locator('#email').fill(email);
    await form.locator('#phone').fill('11999990000');
    await form.locator('#state').selectOption('SP');
    await form.getByRole('checkbox').check();
    await form.getByRole('button', { name: /preencha o formul[áa]rio/i }).click();
    await page.waitForURL(/\/obrigado/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/somar/i);
  });
});

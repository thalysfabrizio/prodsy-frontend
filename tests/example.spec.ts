// tests/example.spec.ts (Frontend)
import { test, expect } from '@playwright/test';

const FRONTEND_URL = 'http://localhost:3000'; 

test.beforeEach(async ({ page }) => {
  await page.goto(FRONTEND_URL);
});

test('has title', async ({ page }) => {
  
  await expect(page).toHaveTitle(/Prodsy/i);
});

test('navigate to example form and check heading', async ({ page }) => {

  await page.goto(`${FRONTEND_URL}/form`);
  await expect(page.getByRole('heading', { name: 'Formulário de Exemplo' })).toBeVisible();
});

test('fill and submit example form', async ({ page, browserName }) => { // Adicione browserName aqui
  await page.goto(`${FRONTEND_URL}/form`); // Ou /exemplo-form se você mudou

  await page.getByLabel('Usuário').fill('Test User Playwright');
  await page.getByLabel('Email').fill('test.user@playwright.com');
  await page.getByLabel('Idade (Opcional)').fill('30');

  let submittedData = {};
  page.on('console', async (msg) => {
    // Log específico para debug no WebKit
    if (browserName === 'webkit') {
      console.log(`[CONSOLE DO WEBKIT - Tipo: <span class="math-inline">\{msg\.type\(\)\}\] Texto\: "</span>{msg.text()}"`);
    }

    // Sua lógica original (que funciona para Chromium/Firefox)
    if (msg.type() === 'log' && msg.text().startsWith('{')) {
      try {
        submittedData = JSON.parse(msg.text());
        if (browserName === 'webkit') {
          console.log('[CONSOLE DO WEBKIT - Dados Parseados]:', submittedData);
        }
      } catch (e) {
        if (browserName === 'webkit') {
          console.error('[CONSOLE DO WEBKIT - Erro no Parse]:', e, 'Texto Original:', `"${msg.text()}"`);
        }
      }
    }
  });
});
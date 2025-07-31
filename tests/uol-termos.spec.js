const { test, expect } = require('@playwright/test');

test.setTimeout(60000);

test('Validar termos da UOL com texto de atualização', async ({ page }) => {
  // Acessa o site da UOL
  await page.goto('https://www.uol.com.br/', { waitUntil: 'domcontentloaded' });

  // Clica no link dos termos de uso
  await page.getByText('Termos de Uso', { exact: false }).click();

  // Aguarda navegação para a página correta
  await page.waitForURL('**/regras/termos-de-uso/**', { timeout: 15000 });

  // Espera o conteúdo da página carregar
  await page.waitForSelector('body');

  // Captura o conteúdo da página
  const text = await page.textContent('body');

  // Verifica o trecho esperado
  expect(text).toContain(
    'tais como a possibilidade de atualização desse documento a qualquer momento'
  );

  console.log('✅ Termos da UOL validados com sucesso!');
});

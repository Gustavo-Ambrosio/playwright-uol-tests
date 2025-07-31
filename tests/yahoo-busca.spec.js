const { test, expect } = require('@playwright/test');

test('Buscar “Pacto Soluções” no Yahoo e verificar resultados', async ({ page }) => {
  await page.goto('https://br.search.yahoo.com/');
  await page.fill('input[name="p"]', 'Pacto Soluções');
  await page.keyboard.press('Enter');
  await page.waitForSelector('#web ol li');
  const results = await page.$$('#web ol li');
  expect(results.length).toBeGreaterThan(0);

  console.log('✅ Teste Yahoo: Resultados encontrados com sucesso');
});


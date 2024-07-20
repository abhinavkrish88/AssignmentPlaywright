import { test, expect } from '@playwright/test';

test.describe('group1', ()=>{
test.beforeEach(async({page}) => {
  await page.goto('https://www.amazon.in/ref=nav_logo');

})


test('has title', async ({ page }) => {
  // await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await page.getByRole('link', { name: 'Get started' }).click();
});

test('get started link', async ({ page }) => {
  // await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('testCase1', async({page}) => {
  // await page.goto('https://playwright.dev/');
  const test1 = page.getByRole('link', { name: 'Get started' });

  await page.getByRole('link', { name: 'Get started' }).hover()
  await expect(test1).toHaveText('Get started1');


});

test('test3', async({page}) => {

  

});

});



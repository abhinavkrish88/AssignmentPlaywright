import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
//import { Page } from "@playwright/test";
import login   from "../pages/login"; 
import  test1  from "../testdata/test1.json"

//const data1 = new test1();

test('testing', async ({ page }) => {
  const Login = new login(page);

   await Login.clickOnSpecialHotMenu();
   await console.log(test1.forbidOnly);

});

test('Amazon Iphone and Apple Watch Search', async ({ page, context }) => {



  await page.goto('https://www.amazon.in/');
  //Navigating to Amazon India  
  await page.locator('#twotabsearchtextbox').click();
  await page.getByPlaceholder('Search Amazon.in').fill('iphone 13');
  //Searching iphone13 in search
  //await page.setViewportSize({width: 3840, height: 2160});  Uncomment this to view in Maximize Browser

  await page.getByLabel('iphone 13', { exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  const test1 = page.getByRole('link', { name: 'Apple iPhone 13 (128GB) - Midnight' }).nth(1);  

  await expect(test1).toHaveText('Apple iPhone 13 (128GB) - Midnight');
  //Verifying 'Apple iPhone 13 (128GB) - Midnight' is corrctly searched.

  await page.getByRole('link', { name: 'Apple iPhone 13 (128GB) - Midnight' }).nth(1).click();
  //Clicking 'Apple iPhone 13 (128GB) - Midnight' is corrctly searched.

  const newTab = await context.newPage();
  await newTab.goto('https://www.apple.com/in');
  //Navigating to Apple India

  await newTab.locator('div.globalnav-item.globalnav-item-watch.globalnav-item-menu.globalnav-item-submenu').click();
  //Searching Apple SE Watch

  await newTab.locator('li.chapternav-item.chapternav-item-se > a > span').click();
  //Selecting Apple SE Watch
  await newTab.locator('[class="apple-watch-se-logo"]').hover();  
  //Hovering Apple SE Watch

});


test('Demo API Test', async ({ request }) => {

  // Send a GET request & store response in a variable 
  const response = await request.get('https://reqres.in/api/users/2')

  // Verify the status code of the response is 200
  expect(response.status()).toBe(200);

  //  Check response contains some text    
  const text = await response.text();
  expect(text).toContain('Janet');

  ///  Write response on the console    
  console.log(await response.json());



});
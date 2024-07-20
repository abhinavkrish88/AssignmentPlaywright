import { test, expect } from '@playwright/test';
import {amazon} from '../pages/amazon';


const Amazon = new amazon();


test('Amazon and Apple Search', async ({ page , context}) => {
  
  await page.goto(Amazon.url);
  //await page.goto('https://www.amazon.in/');  
  await page.locator('#twotabsearchtextbox').click();
  await page.getByPlaceholder('Search Amazon.in').fill('iphone 13');
  
  //await page.setViewportSize({width: 3840, height: 2160});  Uncoomect this to view in Maximize Browser
  
  await page.getByLabel('iphone 13', { exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  const test1 = page.getByRole('link', { name: 'Apple iPhone 13 (128GB) - Midnight' }).nth(1);
  //await page.screenshot({path : 'screenshotab.png'});
  await expect(test1).toHaveText('Apple iPhone 13 (128GB) - Midnight');
  await page.getByRole('link', { name: 'Apple iPhone 13 (128GB) - Midnight' }).nth(1).click();
  
  
 const newTab = await context.newPage();
 await newTab.goto('https://www.apple.com/in'); 
 
 await newTab.locator('div.globalnav-item.globalnav-item-watch.globalnav-item-menu.globalnav-item-submenu').click();
 await newTab.locator('li.chapternav-item.chapternav-item-se > a > span').click();
 
 
});


test('Demo API Test', async ({ request}) => {

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
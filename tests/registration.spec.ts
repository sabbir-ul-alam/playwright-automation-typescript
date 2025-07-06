import { test, expect } from '@playwright/test';

test('test registation', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Name' }).fill('sabbir1');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('sabbirulalam1@gmail.com')
  await page.getByRole('button', { name: 'Signup' }).click();
  await expect(page.locator('#form')).toContainText('Enter Account Information');
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).fill('123456789');
  await page.locator('#days').selectOption('29');
  await page.locator('#months').selectOption('10');
  await page.locator('#years').selectOption('1996');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).fill('sabbir ul alam');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('sabbir');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('zero');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('matikata');
  await page.getByRole('textbox', { name: 'Address 2' }).fill('dhaka');
  await page.getByLabel('Country *').selectOption('Australia');
  await page.getByRole('textbox', { name: 'State *' }).fill('dhaka');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('dhak cantonment');
  await page.locator('#zipcode').fill('1206');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('01670412438');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByText('Account Created!')).toBeVisible();
  await expect(page.locator('b')).toContainText('Account Created!');
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.locator('#header')).toContainText('Logged in as sabbir1');
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await expect(page.locator('b')).toContainText('Account Deleted!');
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
});
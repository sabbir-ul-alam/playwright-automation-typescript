import { test as base, expect } from '@playwright/test';
import path from 'path';
import { HomePage } from '../pages/home.page';

//  Extend the base test to use storageState
const test = base.extend({
  storageState: path.resolve(__dirname, '../playwright/.auth/user.json'),
});

test.describe('Authenticated test cases', () => {
  test('Test Case: 4', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.visit();
    await homePage.isHomePageLoaded();

    const testCasePage = await homePage.goToTestCasePage();
    await testCasePage.isLoaded();
  });
});

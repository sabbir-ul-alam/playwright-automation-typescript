import { expect } from '@playwright/test';
import path from 'path';
import { homePageFixture as test} from './helper/homepage'; 

// //  Extend the base test to use storageState
// const test = homePageFixture.extend({
//   storageState: path.resolve(__dirname, '../playwright/.auth/user.json'),
// });

test.describe('Authenticated test cases', () => {
  test('Test Case: 4', async ({ homePage }) => {
    const validatedHomePage = homePage;
    const testCasePage = await validatedHomePage.goToTestCasePage();
    await testCasePage.isLoaded();
  });
});

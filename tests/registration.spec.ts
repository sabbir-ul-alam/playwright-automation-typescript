import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { userRegistrationDataList } from '../test-data/registration-data';





const newUser = userRegistrationDataList[0];


test.afterEach(async ({page}, testInfo) =>{
    if(testInfo.status != testInfo.expectedStatus){
        console.log(`Cleaning up after failed test: ${testInfo.title}`);
    }

});

test('test registation', async ({ page }) => {
    let homePage = new HomePage(page);
    await homePage.visit();
    await homePage.isHomePageLoaded();
    const loginPage = await homePage.goToLogin();
    await loginPage.isLoginPageLoaded();
    const signupPage = await loginPage.signUp(newUser.name, newUser.email);
    await signupPage.isSignUpPageLoaded();
    let confirmationPage = await signupPage.createAccount(newUser);
    await confirmationPage.isAccountCreated();
    homePage = await confirmationPage.goBackToHomePage();
    await homePage.isUserLoggedIn();
    confirmationPage = await homePage.deleteAccount();
    await confirmationPage.isAccountDeleted();
    homePage = await confirmationPage.goBackToHomePage();
    await homePage.isHomePageLoaded();

});
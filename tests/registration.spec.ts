import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { userRegistrationDataList } from '../test-data/registration-data';
import { LoginData } from '../test-data/login-data';





const newUser = userRegistrationDataList[0];


test.afterEach(async ({page}, testInfo) =>{
    if(testInfo.status != testInfo.expectedStatus){
        console.log(`Cleaning up after failed test: ${testInfo.title}`);
        let homePage = new HomePage(page);
        await homePage.visit();
        await homePage.isHomePageLoaded();
        let loginPage = await homePage.goToLoginPage();
        const data = new LoginData(newUser.email,newUser.password,true,newUser.name);
        homePage = await loginPage.login(data);
        let confirmationPage = await homePage.deleteAccount();
        await confirmationPage.isAccountDeleted();
    }

});

test('Tese Case 1: User registation', async ({ page }) => {
    let homePage = new HomePage(page);
    await homePage.visit();
    await homePage.isHomePageLoaded();
    const loginPage = await homePage.goToLoginPage();
    await loginPage.isLoginPageLoaded();
    const signupPage = await loginPage.signUp(newUser.name, newUser.email);
    await signupPage.isSignUpPageLoaded();
    let confirmationPage = await signupPage.createAccount(newUser);
    await confirmationPage.isAccountCreated();
    homePage = await confirmationPage.goBackToHomePage();
    await homePage.isUserLoggedIn(newUser.name);
    confirmationPage = await homePage.deleteAccount();
    await confirmationPage.isAccountDeleted();
    homePage = await confirmationPage.goBackToHomePage();
    await homePage.isHomePageLoaded();

});
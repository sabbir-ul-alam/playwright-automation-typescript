import {test as setup, expect} from '@playwright/test';
import path from 'path';
import { loginDataList } from '../test-data/login-data';
import { HomePage } from '../pages/home.page';

const authFile = path.join(__dirname,'../playwright/.auth/user.json');

setup("Authenticate and save the data", async ({page})=>{
    let homePage = new HomePage(page);
    await homePage.visit();
    await homePage.isHomePageLoaded();
    let data = loginDataList[0];
    let loginPage = await homePage.goToLoginPage();
    homePage =  await loginPage.login(data);
    await homePage.isUserLoggedIn(data.user_name);

    await page.context().storageState({path: authFile});

});
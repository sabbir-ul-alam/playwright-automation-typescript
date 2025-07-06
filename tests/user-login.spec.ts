import {test, Page} from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { loginDataList } from "../test-data/login-data";
import { log } from "console";

test.describe("User login",()=>{

    loginDataList.forEach((data,index)=>{
         test(`Test Case 2: Paremeterized User Login valid: ${data.valid}`, async ({page})=>{
          let homePage = new HomePage(page);
          await homePage.visit();
          await homePage.isHomePageLoaded();

          let loginPage = await homePage.goToLoginPage();

          if (data.valid){
            homePage = await loginPage.login(data);
            await homePage.isUserLoggedIn(data.user_name);
          }
          else{
            await loginPage.login(data);
            await loginPage.isInvalidLogin();
          }

    });
    });

    test("Test case 3: loguout",async ({page})=>{
        let homePage = new HomePage(page);
        await homePage.visit();
        await homePage.isHomePageLoaded();

        let loginPage = await homePage.goToLoginPage();
        homePage =  await loginPage.login(loginDataList[0]);
        loginPage = await homePage.logout();
        await loginPage.isLoginPageLoaded()


    });

});
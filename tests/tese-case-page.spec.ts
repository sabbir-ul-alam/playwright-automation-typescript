import {test, Page} from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { TestCasePage } from "../pages/testcase.page";

test("Test Case: 4",async({page})=>{
    let homePage = new HomePage(page);
    await homePage.visit();
    await homePage.isHomePageLoaded();
    let testCasePage = await homePage.goToTestCasePage(); 
    await testCasePage.isLoaded();

});
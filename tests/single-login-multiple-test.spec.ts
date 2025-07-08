// import{test as homePageFixture } from '@playwright/test';
import path from 'path';
import { homePageFixture } from "./helper/homepage";


const test = homePageFixture.extend({
  storageState: path.resolve(__dirname, '../playwright/.auth/user.json'),
});

test.describe("Test case 5,6: Single login multi test",()=>{
    //  Extend the base test to use storageState


    test("Test case:4 Add cart to product",async ({homePage})=>{
        let productPage = await homePage.gotToProductPage();
        await productPage.searchProduct();
        await productPage.addToCart();
        let cartPage = await productPage.goToCartFromModal();
        await cartPage.cartIsNotEmpty();
    })

    test("Test Case 5: Verify persitant cart page after reopenning browser",async ({homePage})=>{
        let cartPage = await homePage.goToCartPage();
        await cartPage.cartIsNotEmpty();
    });
});
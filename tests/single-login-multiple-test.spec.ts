// import{test} from '@playwright/test';
import { homePageFixture as test } from "./helper/homepage";


test.describe("Test case 5,6: Single login multi test",()=>{

    test("Test case:4 Add cart to product",async ({homePage})=>{
        let productPage = await homePage.gotToProductPage();
        await productPage.searchProduct();
        await productPage.addToCart();
        let cartPage = await productPage.goToCartFromModal();
        await cartPage.cartIsNotEmpty();
    })
});
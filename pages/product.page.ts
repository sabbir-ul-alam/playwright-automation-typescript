import { Page } from "@playwright/test";
import { CartPage } from "./cart.page";

export class ProductPage{
    readonly page: Page;

    constructor(page:Page){
        this.page = page
    }

    async searchProduct(): Promise<void>{
    await this.page.getByRole('textbox', { name: 'Search Product' }).fill('Blue Top');
    await this.page.getByRole('button', { name: '' }).click();    }

    async addToCart(): Promise<void>{
        await this.page.getByText('Add to cart').nth(1).click();
    }

    async goToCartFromModal(): Promise<CartPage>{
        await this.page.getByRole('link', { name: 'View Cart' }).click();
        return new CartPage(this.page);
    }
}

import { expect, Page } from "@playwright/test";

export class CartPage{
    readonly page: Page

    constructor(page: Page){
        this.page = page;
    }

    async cartIsNotEmpty(): Promise<void>{
        await expect(this.page.getByText('Cart is empty!')).not.toBeVisible();
    }
}
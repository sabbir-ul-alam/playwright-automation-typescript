import { expect, Page } from "@playwright/test";
import { HomePage } from "./home.page";

export class ConfirmationPage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async isAccountCreated(): Promise<void>{
        await expect(this.page.getByText('Account Created!')).toBeVisible();
        await expect(this.page.locator('b')).toContainText('Account Created!');
    }

    async goBackToHomePage(): Promise<HomePage>{

        await this.page.getByRole('link', { name: 'Continue' }).click();
        return new HomePage(this.page);
    }

    async isAccountDeleted(): Promise<void>{
        await expect(this.page.locator('b')).toContainText('Account Deleted!');


    }


}
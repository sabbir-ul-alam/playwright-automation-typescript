import { Page, expect } from "@playwright/test";
import { LoginPape } from "./login.page";
import type { ConfirmationPage } from "./confirmation.page";

export class HomePage{

    readonly page: Page;

    constructor(page: Page){
        this.page = page;

    }

    async visit(): Promise<void>{
        await this.page.goto("/");
    }

    async isHomePageLoaded(): Promise<void>{
        await expect(this.page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
    }

    async goToLogin(): Promise<LoginPape>{
        await this.page.getByRole('link', { name: ' Signup / Login' }).click();
        return new LoginPape(this.page)
    }

    async isUserLoggedIn(): Promise<void>{
        await expect(this.page.locator('#header')).toContainText('Logged in as Sabbir');

    }

    async deleteAccount(): Promise<ConfirmationPage>{
        await this.page.getByRole('link', { name: ' Delete Account' }).click();
        const { ConfirmationPage } = await import('./confirmation.page');
        return new ConfirmationPage(this.page);

    }


}

//  await page.goto('/');
//   await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
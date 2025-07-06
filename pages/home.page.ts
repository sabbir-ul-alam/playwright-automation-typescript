import { Page, expect } from "@playwright/test";
import { LoginPage } from "./login.page";
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

    async goToLoginPage(): Promise<LoginPage>{
        await this.page.getByRole('link', { name: ' Signup / Login' }).click();
        return new LoginPage(this.page)
    }

    async isUserLoggedIn(userName: String): Promise<void>{
        await expect(this.page.locator('#header')).toContainText(`Logged in as ${userName}`);

    }

    async deleteAccount(): Promise<ConfirmationPage>{
        await this.page.getByRole('link', { name: ' Delete Account' }).click();
        // await this.page.getByRole('listitem').filter({ hasText: 'Delete Account' });

        const { ConfirmationPage } = await import('./confirmation.page');
        return new ConfirmationPage(this.page);

    }

    async logout(): Promise<LoginPage>{
        await this.page.getByRole('link', { name: ' Logout' }).click();
        return new LoginPage(this.page);
    }


}

//  await page.goto('/');
//   await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
import { expect, Page } from "@playwright/test";
import { SignupPage } from "./signup.page";

export class LoginPape{

    readonly page: Page;

    constructor(page:Page){
        this.page = page;
    }

    async isLoginPageLoaded(): Promise<void>{
        await expect(this.page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
    }

    async signUp(name: string, email: string): Promise<SignupPage>{

        await this.page.getByRole('textbox', { name: 'Name' }).fill(name);
        await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email)
        await this.page.getByRole('button', { name: 'Signup' }).click();
        return new SignupPage(this.page);


    }





}
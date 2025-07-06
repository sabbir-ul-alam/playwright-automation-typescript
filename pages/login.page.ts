import { expect, Page } from "@playwright/test";
import { SignupPage } from "./signup.page";
import { LoginData } from "../test-data/login-data";

export class LoginPage{

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

    async login(loginData: LoginData): Promise<any>{
        await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(loginData.email);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(loginData.password);
        await this.page.getByRole('button', { name: 'Login' }).click();

        if(loginData.valid){
            const { HomePage } = await import ("./home.page");
            return new HomePage(this.page);
        }
        else{
            return null;
        }

    }
    async isInvalidLogin(): Promise<void>{
        await expect(this.page.getByText('Your email or password is')).toBeVisible();

    }





}
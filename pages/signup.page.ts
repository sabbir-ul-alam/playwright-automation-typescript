import { expect, Page } from "@playwright/test";
import { ConfirmationPage } from "./confirmation.page";
import { UserRegisterData } from "../test-data/registration-data";

export class SignupPage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page
    }
    async isSignUpPageLoaded(): Promise<void>{

        await expect(this.page.locator('#form')).toContainText('Enter Account Information');

    }
    async createAccount(user: UserRegisterData): Promise<ConfirmationPage>{
        await this.page.getByRole('radio', { name: 'Mr.' }).check();
        await this.page.getByRole('textbox', { name: 'Password *' }).fill('123456789');
        await this.page.locator('#days').selectOption('29');
        await this.page.locator('#months').selectOption('10');
        await this.page.locator('#years').selectOption('1996');
        await this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
        await this.page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
        await this.page.getByRole('textbox', { name: 'First name *' }).fill('sabbir ul alam');
        await this.page.getByRole('textbox', { name: 'Last name *' }).fill('sabbir');
        await this.page.getByRole('textbox', { name: 'Company', exact: true }).fill('zero');
        await this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('matikata');
        await this.page.getByRole('textbox', { name: 'Address 2' }).fill('dhaka');
        await this.page.getByLabel('Country *').selectOption('Australia');
        await this.page.getByRole('textbox', { name: 'State *' }).fill('dhaka');
        await this.page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('dhak cantonment');
        await this.page.locator('#zipcode').fill('1206');
        await this.page.getByRole('textbox', { name: 'Mobile Number *' }).fill('01670412438');
        await this.page.getByRole('button', { name: 'Create Account' }).click();


        return new ConfirmationPage(this.page);

    }

}
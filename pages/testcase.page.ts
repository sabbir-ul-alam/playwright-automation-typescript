import { expect, Page } from "@playwright/test";

export class TestCasePage{

    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async isLoaded(): Promise<void>{
        // await expect(this.page.url()).toContain("/test_cases");
        await expect(this.page).toHaveURL(/\/test_cases/)
    }


}
import {test as base, Page} from '@playwright/test';
import { HomePage } from '../../pages/home.page';

export const homePageFixture = base.extend<{homePage: HomePage}>({
    homePage: async({page}, use) =>{
        const homePage = new HomePage(page);
        await homePage.visit();
        await homePage.isHomePageLoaded();
        use(homePage);
    }
});
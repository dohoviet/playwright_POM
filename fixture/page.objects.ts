import { test as base } from "@playwright/test";
import { LoginPage } from '../pages/login.page';
import { PublicPage } from '../pages/public.page';
import { PanelsPage } from '../pages/panels.page';

export type PageObjects = {
    loginPage: LoginPage;
    publicPage: PublicPage;
    panelsPage: PanelsPage;
};

export const test = base.extend<PageObjects>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    publicPage: async ({ page }, use) => {
        await use(new PublicPage(page));
    },
    panelsPage: async ({ page }, use) => {
        await use(new PanelsPage(page));
    },
});

export { expect, Page, Locator } from "@playwright/test";
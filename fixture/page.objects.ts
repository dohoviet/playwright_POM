import { test as base } from "@playwright/test";
import { LoginPage } from '../pages/login.page';
import { PublicPage } from '../pages/public.page';
import { PanelsPage } from '../pages/panels.page';
import { ProfilessPage } from "../pages/profiles.page";

export type PageObjects = {
    loginPage: LoginPage;
    publicPage: PublicPage;
    panelsPage: PanelsPage;
    profilesPage: ProfilessPage;
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
    profilesPage: async ({ page }, use) => {
        await use(new ProfilessPage(page));
        // new ProfilessPage(page);
    },
});

export { expect, Page, Locator } from "@playwright/test";
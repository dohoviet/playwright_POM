import { Locator, Page } from '@playwright/test';

export abstract class BasePage {
    readonly page: Page;
    readonly logoutLink: Locator;
    readonly settingLink: Locator;
    readonly profileLink: Locator;
    readonly addPageLink: Locator;
    readonly deletePageLink: Locator;
    readonly overviewLink: Locator;
    readonly administerLink: Locator;
    readonly panelsLink: Locator;
    readonly dataProfileLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoutLink =  page.getByRole('link', { name: 'Logout' });
        this.settingLink =  page.locator('li').filter({ hasText: 'Global Setting Add Page' }).getByRole('link').first();
        this.profileLink =  page.getByRole('link', { name: 'administrator' });
        this.addPageLink = page.getByRole('link', { name: 'Add Page' });
        this.deletePageLink = page.getByRole('link', { name: 'Delete' });
        this.overviewLink = page.getByRole('link', { name: 'Overview' });
        this.administerLink = page.getByRole('link', { name: 'Administer' });
        this.panelsLink = page.getByRole('link', { name: 'Panels', exact: true });
        this.dataProfileLink = page.getByRole('link', { name: 'Data Profiles', exact: true });
    }
}
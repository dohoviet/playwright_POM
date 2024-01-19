import { Locator, Page } from '@playwright/test';

//abstract?
export  class UserTable {
    page: Page;
    readonly baseURL = 'https://datatables.net/extensions/select/examples/initialisation/checkbox.html';
    tatbleId: string;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoutLink =  page.getByRole('link', { name: 'Logout' });
    }

    async getRows(){
        const parentBody = await this.page.locator('table#example tbody');
        await this.page.waitForTimeout(3000);
        return (await parentBody.locator('tr').count());
    }
    
}
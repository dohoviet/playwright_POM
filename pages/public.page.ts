import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class PublicPage extends BasePage {
    readonly pageName: Locator;
    readonly publicCheckbox: Locator;
    readonly okButton: Locator;
        
    readonly profileLink: Locator;
    readonly logoutLink: Locator;
        
    readonly newlyAddedPageLink: Locator;

    constructor(page: Page) {
        super(page);
       
        this.pageName = page.locator('#name');
        this.publicCheckbox = page.locator('#ispublic');
        this.okButton = page.getByRole('button', { name: 'OK' });
        
        this.profileLink = page.getByRole('link', { name: 'administrator' });
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        
        this.newlyAddedPageLink = page.getByRole('link', { name: 'TC014' });
    }

    async addPage(pageName: string) {
        //Go to Global Setting -> Add page 
        await this.settingLink.click();
        await this.addPageLink.click();

        //Fill page's info then click OK
        //Enter Page Name field
        await this.pageName.fill(pageName);
        //Check Public checkbox
        await this.publicCheckbox.check();
        //Click OK button
        await this.okButton.click();
    }

    async removePage(pageName: string) {
        //Click on newly added page
        await this.newlyAddedPageLink.click();
        //Click on Delete button from Setting
        await this.settingLink.click();
        this.page.on('dialog', dialog => dialog.accept());
        await this.deletePageLink.click();
    }
}
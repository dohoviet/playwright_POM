import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class PublicPage extends BasePage {
    readonly pageName: Locator;
    readonly publicCheckbox: Locator;
    readonly okButton: Locator;
    readonly parentOption: Locator;
        
    readonly newlyAddedPageLink: Locator;
    readonly newlyAddedChildPageLink: Locator;

    constructor(page: Page) {
        super(page);
       
        this.pageName = page.locator('#name');
        this.publicCheckbox = page.locator('#ispublic');
        this.okButton = page.getByRole('button', { name: 'OK' });
        this.parentOption =  page.locator('#parent');
        
        this.newlyAddedPageLink = page.getByRole('link', { name: 'Test', exact: true });
        this.newlyAddedChildPageLink = page.getByRole('link', { name: 'Test Child' });
    }

    async addPage(pageinfo: {name: string, parent?: string}) {
        console.log("Test step: Add a page");
        //Go to Global Setting -> Add page 
        await this.settingLink.click();
        await this.addPageLink.click();

        //Fill page's info then click OK
        //Enter Page Name field
        await this.pageName.fill(pageinfo.name);

        if (pageinfo.parent!=undefined){
            this.parentOption.selectOption(pageinfo.parent);
        }

        //Check Public checkbox
        await this.publicCheckbox.check();
        //Click OK button
        await this.okButton.click();
    }

    async removePage(pageinfo: {name: string, parent?: string}, errMessage: string) {
        console.log("Test step: Remove a page");
        if (pageinfo.parent != undefined){
            //Hover over newly added page/parent page
            await this.newlyAddedPageLink.hover();
            //Click on newly added child page
            await this.newlyAddedChildPageLink.click();
        }
        else{
            await this.newlyAddedPageLink.click();
        }
        
        //Dialog handler register
        this.page.once('dialog', async dialog => {
            await expect(dialog.message()).toEqual(errMessage);
            console.log(dialog.message());
            if (pageinfo.parent == undefined){
                this.page.once('dialog', async dialog => {
                    await expect.soft(dialog.message().trim()).toEqual("Cannot delete page 'Test' since it has child page(s)."); //code them de ko phai hard code!!!
                    console.log(dialog.message());
                    dialog.accept();
                    });
            }
            dialog.accept();
            });

        //Click on Delete button from Setting
        await this.settingLink.click();
        await this.deletePageLink.click();
    }

    async checkPageExist(pageinfo: {name: string, parent?: string}) {
        console.log("Test step: Check if a page exits");
        if (pageinfo.parent != undefined){
            //Hover over parent page
            await this.newlyAddedPageLink.hover();
        }
        await expect(this.page.getByRole('link', { name: pageinfo.name, exact: true })).not.toBeVisible();
    }

    async checkDeleteButton() {
        console.log("Test step: Check if Delete button disapppear after clicking on Overview menu item");
        //Click on Overview
        this.overviewLink.click();
        //Click on Setting icon
        await this.settingLink.click();

        await expect(this.deletePageLink).not.toBeVisible();
    }

}
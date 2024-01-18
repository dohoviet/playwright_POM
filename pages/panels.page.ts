import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";
const playwright = require('playwright');

export class PanelsPage extends BasePage {
    readonly addNewPanelink: Locator;
    readonly deletePanellink: Locator;
    readonly overlaydiv: Locator = this.page.locator('xpath=//div[@class="ui-dialog-overlay custom-overlay"]');
    constructor(page: Page) {
        super(page);
        this.addNewPanelink = page.getByRole('link', { name: 'Add New' });
        this.deletePanellink = page.getByRole('link', { name: 'Delete' }).first();
    }

    async gotoPanelsPage() {
        await this.administerLink.hover();
        await this.panelsLink.click();
    }

    async addPanel (){
        await this.addNewPanelink.click();
    }

    async verifyAllControlDisable() {
        try {
            await this.addNewPanelink.click({
                timeout: 100,
              });
            return false;
        } catch (error){
            if (error instanceof playwright.errors.TimeoutError) {
                // Do something if this is a timeout.
                return true;                
              }
        }
    }
}
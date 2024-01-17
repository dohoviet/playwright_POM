import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class PanelsPage extends BasePage {
    readonly addNewPanelink: Locator;
    readonly deletePanellink: Locator;

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
        await expect(this.page.locator("#cppCategoryField")).toBeDisabled();
    }
    
}
import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { UserTable } from "../elements/user_table";

export class ProfilessPage extends BasePage {
    // readonly tblDataProfiles = new UserTable(this.page.locator('table#example'));
    readonly tblDataProfiles = new UserTable(this.page.locator('table.GridView'));
    
    constructor(page: Page) {
        super(page);
    }

    async open(url: string){
        await this.page.goto(url);
    }

    async getTable(){
        return this.tblDataProfiles;
    } 
    async gotoDataProfiles() {
        await this.administerLink.hover();
        await this.dataProfileLink.click();
    }

}
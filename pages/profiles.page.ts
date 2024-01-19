import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { UserTable } from "../elements/user_table";

export class ProfilessPage extends BasePage {
    readonly table: UserTable;

    constructor(page: Page) {
        super(page);
        this.table = new UserTable(page);
        }

    async open(url?: string){
        await this.page.goto(this.table.baseURL);
    } 
    async gotoDataProfiles() {
        await this.administerLink.hover();
        await this.panelsLink.click();
    }
}
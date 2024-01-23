import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { UserTable } from "../elements/user_table";

export class ProfilessPage extends BasePage {
    readonly table: UserTable;

    constructor(page: Page) {
        super(page);
        this.table = new UserTable(page);
    }

    async open(url: string){
        await this.page.goto(url);
    }

    async getTableById(tableId: string){
        this.table.tableId = tableId;
        return this.table;
    } 
    async gotoDataProfiles() {
        await this.administerLink.hover();
        await this.dataProfileLink.click();
    }

}
import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    readonly username_textbox: Locator;
    readonly password_textbox: Locator;
    readonly login_button: Locator;

    constructor(page: Page) {
        super(page);
        this.username_textbox =  page.getByPlaceholder('Username');
        this.password_textbox = page.getByPlaceholder('Password');
        this.login_button =  page.getByText('Login').nth(1);
    }

    async gotoLoginPage() {
        await this.page.goto("/TADashboard/login.jsp");
    }

    async login (username: string, password: string){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

    async verifyErrorMessage(message: string): Promise<void> {
        this.page.on('dialog', async dialog => {
        await expect(dialog.message()).toEqual(message);
        console.log(dialog.message());
        await dialog.accept();
        });
    }

    async logout (profile: string){
        await this.profileLink.click();
        await this.logoutLink.click();
    }
}
import { Page, test } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {


    constructor(page: Page) {
        super(page);
    }

    xpathUsernameTextbox = "//input[@id='username']";
    xpathEmailTextbox = "//input[@id='email']";

    async goToRegisterPage() {
        await this.goToUrl("https://material.playwrightvn.com/01-xpath-register-page.html");
    }

    async fillInUsername(username: string) {
        await this.typeInTextbox(this.xpathUsernameTextbox, username);
    }

    async fillInEmail(email: string) {
        await this.typeInTextbox(this.xpathEmailTextbox, email);
    }

}
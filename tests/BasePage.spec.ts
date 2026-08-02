import { Page, test } from "@playwright/test";

class BasePage {

    page: Page;
    pageUrl = "https://material.playwrightvn.com/";

    constructor(page: Page) {
        this.page = page;
    }

    goToUrl(url: string) {
        this.page.goto(this.pageUrl);
    }

    type(textboxXpath: string, content: string) {
        this.page.locator(textboxXpath).fill(content);
    }
}
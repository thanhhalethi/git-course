import { Page, test } from "@playwright/test";

export class BasePage {

    page: Page;
    xpathRegisterPage: string = "//a[@href='01-xpath-register-page.html']";
    xpathProductPage: string = "//a[@href='02-xpath-product-page.html']";
    xpathTodoPage: string = "//a[@href='03-xpath-todo-list.html']";
    pageUrl: string = "https://material.playwrightvn.com/";

    registerPageUrl: string = "https://material.playwrightvn.com/01-xpath-register-page.html"

    constructor(page: Page) {
        this.page = page;
    }

    async goToUrl(url: string) {
        await this.page.goto(url);
    }

    async typeInTextbox(xpath: string, content: string) {
        await this.page.locator(xpath).fill(content);
    }

}
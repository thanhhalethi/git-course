import { Page, test } from "@playwright/test";
import { BasePage } from "./BasePage.spec.ts";

class Test1 extends BasePage {
    constructor(page: Page) {
        super(page);
    }
}
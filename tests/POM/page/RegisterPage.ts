import { Page, test } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {


    constructor(page: Page) {
        super(page);
    }

    xpathUsernameTextbox = "//input[@id='username']";
    xpathEmailTextbox = "//input[@id='email']";
    xpathHobby = "";
    xpathRegisterButton = "//button[text()='Register']"

    async goToRegisterPage() {
        await this.goToUrl("https://material.playwrightvn.com/01-xpath-register-page.html");
    }

    async fillInUsername(username: string) {
        await this.typeInTextbox(this.xpathUsernameTextbox, username);
    }

    async fillInEmail(email: string) {
        await this.typeInTextbox(this.xpathEmailTextbox, email);
    }

    async getXpathOptionHobby(hobby: "Reading" | "Traveling" | "Cooking") {
        this.xpathHobby = `//input[@type='checkbox' and @id='${hobby.toLowerCase()}']`;
    }

    async checkHobbies(hobby: "Reading" | "Traveling" | "Cooking") {
        await this.getXpathOptionHobby(hobby);
        await this.selectCheckbox(this.xpathHobby);
    }

    async fillFormRegister(information: {
        username: string;
        email: string;
        gender: "Male" | "Female";
        hobbies: "Reading" | "Traveling" | "Cooking";
        interests: "Technology" | "Science" | "Art" | "Music" | "Sports";
        country: "United States" | "Canada" | "United Kingdom" | "Australia";
        dateOfBirth: string;
        profilePictureFilePath: string;
        biography: string;
    }) {
        await this.fillInUsername(information.username);
        await this.fillInEmail(information.email);
        await this.checkHobbies(information.hobbies);
    }

    async clickRegisterButton() {
        await this.page.locator(this.xpathRegisterButton).click();
    }

    async getInformationInTable() {
        const numberOfRows = await this.page.locator("//tbody/tr").count();
        let userInformationTable = {
            username: await this.page.locator(`//tbody/tr[${numberOfRows}]/td[2]`).textContent(),
            email: await this.page.locator(`//tbody/tr[${numberOfRows}]/td[3]`).textContent(),
            generalInformation: await this.page.locator(`//tbody/tr[${numberOfRows}]/td[4]`).textContent()
        }
        return userInformationTable;
    }
}
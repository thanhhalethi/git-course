import { Page, test } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {


    constructor(page: Page) {
        super(page);
    }

    xpathUsernameTextbox = "//input[@id='username']";
    xpathEmailTextbox = "//input[@id='email']";
    xpathHobby = "";

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
}
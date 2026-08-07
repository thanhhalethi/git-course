import { expect, test } from "@playwright/test";
// import { BasePage } from "./page/BasePage";
import { RegisterPage } from "./page/RegisterPage";

test("Register Page tests", async ({ page }) => {

    const username = "haltt";
    const email = "halee@gmail.com";

    // let basePage = new BasePage(page);
    let registerPage = new RegisterPage(page);

    await test.step("Step 1: Navigate to Register Page", async () => {
        await registerPage.goToRegisterPage();
    })

    // --- fill in EACH element ---

    // await test.step("Step 2: Fill in Username textbox", async () => {
    //     await registerPage.fillInUsername("haltt");
    // })

    // await test.step("Step 3: Fill in Email textbox", async () => {
    //     await registerPage.fillInEmail("haltt@gem-corp.global");
    // })

    // await test.step("Step 4: Select Hobbies", async () => {
    //     await registerPage.checkHobbies("cooking");
    // })

    // --- fill in ALL elements ---

    await test.step("Fill in all information", async () => {
        await registerPage.fillFormRegister({
            username: username,
            email: email,
            gender: "Male",
            hobbies: "Reading",
            interests: "Technology",
            country: "United States",
            dateOfBirth: "2026-08-07",
            profilePictureFilePath: "string",
            biography: "string",
        });
    })

    await test.step("Click button Register", async () => {
        await registerPage.clickRegisterButton();
    })

    await test.step("Verify all information in table", async () => {
        const userInfo = await registerPage.getInformationInTable();
        const actualUsername = userInfo.username;
        const actualEmail = userInfo.email;
        const actualOtherInformation = userInfo.generalInformation;

        expect(actualUsername).toBe(username);
        expect(actualEmail).toBe(email);
        expect(actualOtherInformation).toContain("reading");
    })
})
import { test } from "@playwright/test";
// import { BasePage } from "./page/BasePage";
import { RegisterPage } from "./page/RegisterPage";

test("Register Page tests", async ({ page }) => {

    // let basePage = new BasePage(page);
    let registerPage = new RegisterPage(page);

    await test.step("Step 1: Navigate to Register Page", async () => {
        await registerPage.goToRegisterPage();
    })

    // await test.step("Step 2: Fill in Username textbox", async () => {
    //     await registerPage.fillInUsername("haltt");
    // })

    // await test.step("Step 3: Fill in Email textbox", async () => {
    //     await registerPage.fillInEmail("haltt@gem-corp.global");
    // })

    // await test.step("Step 4: Select Hobbies", async () => {
    //     await registerPage.checkHobbies("cooking");
    // })

    await test.step("Fill in all information", async () => {
        await registerPage.fillFormRegister({
            username: "haltt",
            email: "haltt@gmail.com",
            gender: "Male",
            hobbies: "Reading",
            interests: "Technology",
            country: "United States",
            dateOfBirth: "2026-08-07",
            profilePictureFilePath: "string",
            biography: "string",
        });
    })
})
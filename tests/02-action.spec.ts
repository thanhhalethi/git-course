//https://gem-corp.udemy.com/course/automation-test-voi-playwright-typescript-khoa-6/learn/lecture/54618073#overview

import { test } from '@playwright/test'

const registerPage = "https://material.playwrightvn.com/01-xpath-register-page.html"
// goto

// test("Navigate basic", async ({ page }) => {
//     await page.goto("https://tailieu.hoctest.com/")
// })

// test("Navigate with option - referer", async ({ page }) => {
//     await page.goto("https://tailieu.hoctest.com/", {
//         referer: "https://playwrightvn.com"
//     })
// })

// test("Navigate with option - timeout", async ({ page }) => {
//     await page.goto("https://tailieu.hoctest.com/", {
//         timeout: 1000
//     });
// })

// test("Navigate with option - waitUntil", async ({ page }) => {
//     await page.goto("https://tailieu.hoctest.com/", {
//         waitUntil: "load"
//     });
// })

// // click

// test("Click", async ({ page }) => {
//     await page.goto("https://material.playwrightvn.com/018-mouse.html");
//     const clickArea = page.locator("//div[@id='clickArea']");
//     await clickArea.click();
// })

// fill

// test("Fill", async ({ page }) => {
//     await page.goto("https://material.playwrightvn.com/03-input-practice.html");
//     const input = page.locator("//input[@id='username']");
//     await input.fill("hoctest1");
// })

// press

// test("Press", async ({ page }) => {
//     await page.goto("https://material.playwrightvn.com/03-input-practice.html");
//     const input = page.locator("//input[@id='username']");
//     await input.press("a");
// })

// pressSequentially

// test("pressSequentially", async ({ page }) => {
//     await page.goto("https://material.playwrightvn.com/03-input-practice.html");
//     const input = page.locator("//input[@id='username']");
//     await input.pressSequentially("aaaaahoctest", {
//         delay: 200,
//         timeout: 10_000
//     })
// })

//https://material.playwrightvn.com/018-mouse.html
// test("Click", async ({ page }) => {
//     await page.goto("https://material.playwrightvn.com/018-mouse.html");
//     const clickArea = page.locator("//div[@id='clickArea']");
// click
// await clickArea.click();

// double click
// await clickArea.dblclick();

// right click, left click
//     await clickArea.click({
//         // button: 'right',
//         button: 'left',
//     }
//     )
// })

test("Radio button / Checkbox", async ({ page }) => {
    await page.goto(registerPage);
    const radioMale = page.locator("//input[@id='male']");
    const checkboxReading = page.locator("//input[@id='reading']");
    const checkboxTraveling = page.locator("//input[@id='traveling']");

    // kiem tra radio/checkbox da duoc check hay chua
    const isChecked = await radioMale.isChecked();

    // tich vao checkbox/radio
    await radioMale.check();
    await checkboxReading.check();
    await checkboxTraveling.check();

    // bo tich tai checkbox/radio
    await checkboxTraveling.uncheck();
})

// date, range, color picker
// sẽ có html là: 
// <input type="date"> 
// <input type = "range">
// <input type = "color">

test("date, range, color picker", async ({ page }) => {
    await page.goto(registerPage);

    const datePicker = page.locator("//input[@id='dob']");
    const rangeSlide = page.locator("//input[@id='rating']");
    const colorPicker = page.locator("//input[@id='favcolor']");

    await datePicker.fill("2026-08-01"); // bat buoc phai fill format yyyy-mm-dd
    await rangeSlide.fill("5");
    await colorPicker.fill("#24f4a3"); // fill gia tri hex
})


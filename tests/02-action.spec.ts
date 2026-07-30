//https://gem-corp.udemy.com/course/automation-test-voi-playwright-typescript-khoa-6/learn/lecture/54618073#overview

import { test } from '@playwright/test'

// goto

test("Navigate basic", async ({ page }) => {
    await page.goto("https://tailieu.hoctest.com/")
})

test("Navigate with option - referer", async ({ page }) => {
    await page.goto("https://tailieu.hoctest.com/", {
        referer: "https://playwrightvn.com"
    })
})

test("Navigate with option - timeout", async ({ page }) => {
    await page.goto("https://tailieu.hoctest.com/", {
        timeout: 1000
    });
})

test("Navigate with option - waitUntil", async ({ page }) => {
    await page.goto("https://tailieu.hoctest.com/", {
        waitUntil: "load"
    });
})

// click

test("Click", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/018-mouse.html");
    const clickArea = page.locator("//div[@id='clickArea']");
    await clickArea.click();
})



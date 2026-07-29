//https://gem-corp.udemy.com/course/automation-test-voi-playwright-typescript-khoa-6/learn/lecture/54618071#overview

import { test } from '@playwright/test'

test.describe('Locate', async () => {
    test("Locate basic", async ({ page }) => {
        await page.goto("");

        const bai1Locator = page.locator('//a[@href="01-xpath-register-page.html"]');
        const adsLocator = page.locator("");
    })
})
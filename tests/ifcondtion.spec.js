import { ur } from '@faker-js/faker';
import { test, expect } from '@playwright/test';

test('verify add job broser', async function ({ page, browserName }) {


    if (browserName == 'chromium') {
        await page.goto("https://www.flipkart.com/");

    }
    if (browserName == 'firefox') {
        await page.goto("https://www.myntra.com/");

    }
    if (browserName == 'chrome') {

        await page.goto("https://www.amazon.in/");

    } else {
        console.log("no broser defin");

    }

});



test('verify if condition', async function ({ page }) {

    await page.goto("https://the-internet.herokuapp.com/disappearing_elements");

    if (await page.locator("//a[text()='Gallery']").isVisible()) {

        await page.locator("//a[text()='Gallery']").click()
    }
    else {
            await page.locator("//a[@href='/portfolio/']").click()
        }


    });
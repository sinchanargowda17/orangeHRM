import { test, expect } from '@playwright/test';


test('verify add job catagories', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ");

    const usernametext = await page .locator("").allTextContents
    console.log(usernametext);
    const usernamearr = username.split(" ")
    console.log(usernamearr);
    const username = (usernamearr[usernamearr.length-1])
    console.log(username);
    console.log(usernametext);
    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    const passwordtext = await page .locator("").allTextContents
    const passwordarr = username.split(" ")
    const password = (usernamearr[usernamearr.length-1])
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
});
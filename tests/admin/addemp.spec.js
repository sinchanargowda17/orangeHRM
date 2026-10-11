import { test, expect } from '@playwright/test';

import logindata from "../../testdata/login.json";

test('verify add job catagories', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ");
    await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByText('job', { exact: true }).click();
    await page.getByRole('menuitem', { name: 'Job Categories' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('testing');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('heading' ,{name: "job categories"})).toBeVisible({timeout: 5000});
});
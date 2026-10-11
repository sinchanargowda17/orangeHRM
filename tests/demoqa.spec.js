import { test, expect } from '@playwright/test';


test('Verify with vaild crediantial ', async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    await page.getByRole('textbox', { name: 'Full Name' }).fill(process.env.username);
    await page.getByRole('textbox', { name: 'Full Name' }).fill(process.env.username);   

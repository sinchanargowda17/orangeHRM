import { test, expect } from '@playwright/test';

test('verify add job catagories', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
    await page.locator('//input[@name: "username"]').fill('student',{dealy:1000})
    await page.locator('//input[@password: "password"]').pressSequentially("Password123")
    await page.locator('//button[@id:"submit"]').click()

});
  


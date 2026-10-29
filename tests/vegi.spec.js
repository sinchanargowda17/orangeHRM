import { test, expect } from '@playwright/test';

test('verify add job catagories', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/ ")
    const vegitable = 'Onion - 1 Kg'
    await page.locator("(//button[text()='ADD TO CART'])[1]").click()   //it will always click one first add to cart button   
    await expect(page.locator("//button[text()='ADD TO CART']")).toHaveCount(30)  //it always check the add to chatr have 30                     
    await page.locator(`//h4[text()='${vegitable}']/../div[3]/button`).click()
});
 
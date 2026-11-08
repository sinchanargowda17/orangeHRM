import { test, expect } from '@playwright/test';


test('verify add job catagories', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    await page.locator('(//input[@class="nw1UBF v1zwn26"])[1]').fill('iphone');
    await page.locator('(//input[@class="nw1UBF v1zwn26"])[1]').press('Enter');
    await page.waitForTimeout(3000);

    await page.locator('//div[@class="s6YJlm"]/div[3]').click();

    await page.waitForTimeout(3000);
    const prices_count=await page.locator('//div[@class="hZ3P6w DeU9vF"]').count();
    console.log(prices_count)

    const prices = await page.locator('//div[@class="hZ3P6w DeU9vF"]').allTextContents();
    console.log(prices);
    prices.forEach((price,index)=>{
        prices[index]=Number(price.replace('₹','').replaceAll(',',''));
    });
    console.log("This is prices");
    console.log(prices);
    const sorted_prices=prices.sort((a, b) => a - b);
    console.log("This is sorted_prices prices");
    console.log(sorted_prices);

 if (prices.length > 0) {
    expect(prices).toEqual(sorted_prices);
    console.log("Price is verified successfully");
} else {
    console.log("No prices found to verify.");
}
    
    // const sortedPrices=[...prices].sort((a, b) => a - b);
    // console.log(sortedPrices);
      
        
        

    
    //  prices.forEach((price,index) =>{
    //     prices[index]=Number(price.replace('₹','').replaceAll(',',''));
//   });
   



});

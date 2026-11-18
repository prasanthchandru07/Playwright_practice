import {test,expect} from '@playwright/test'

//hard assertion
// test ("assertion", async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");

//     await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
//     await expect(page).toHaveTitle("Automation Testing Practic");
//     await expect(page.locator('//img[@class="wikipedia-icon"]')).toBeVisible();

// })

//soft assertion

test ("assertion", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // await expect.soft(page).toHaveURL("https://testautomationpractce.blogspot.com/");
    // await expect.soft(page).toHaveTitle("Automation Testing Practice");
    // await expect.soft(page.locator('//img[@class="wikipedia-icon"]')).toBeVisible();

    await expect(page.locator('//h1[@class="title"]')).toHaveText("Automation Testing Practice");
    await expect(page.locator('//h1[@class="title"]')).toContainText("Automation Testing");

})
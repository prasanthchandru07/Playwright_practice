import {test,expect} from '@playwright/test'

test ("date picker", async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//input[@id="datepicker"]').click()

    await page.locator('//a[text()="25"]').click();

    await page.pause();

})

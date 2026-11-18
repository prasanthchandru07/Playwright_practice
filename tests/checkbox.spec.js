import {test,expect} from '@playwright/test'

test ("radiobutton", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('//input[@id="male"]').check();

    await expect(page.locator ('//input[@id="male"]')).toBeChecked();

    await page.pause();

    await expect(page.locator ('//input[@id="male"]')).uncheck();


    
})

test ("checkbox", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    

    await page.locator('//input[@id="monday"]').check();
    await expect(page.locator('//input[@id="monday"]')).toBeChecked();

    await page.pause();

    await page.locator('//input[@id="monday"]').uncheck();

    await page.pause();
})

test ("radio&checkbox", async({page})=>{

    await page.goto("https://letcode.in/radio");
    await page.locator('//input[@id="yes"]').check();
    await page.locator('//input[@id="one"]').check();
    await expect(page.locator('//input[@id="one"]')).toBeChecked();

    await page.locator('//input[@id="nobug"]').check();
    await page.locator('//input[@id="bug"]').check();
    //await expect(page.locator('//input[@id="bug"]')).not.toBeChecked();

    await expect(page.locator('//input[@id="notfoo"]')).toBeEnabled();

    await expect(page.locator('//input[@id="maybe"]')).toBeDisabled();

    await expect(page.locator('//span[text()="Remember me"]/preceding::input[@type="checkbox"]')).toBeEnabled();

    await page.locator('//span[text()="I agree to the "]/preceding-sibling::input[@type="checkbox"]').check();

    await page.pause();

})

test ("multicheckbox", async({page})=>{

       await page.goto("https://testautomationpractice.blogspot.com/");
    
       let days=["monday","wednesday","friday","sunday"]

       for(let i of days){
        await page.locator(`//input[@id="${i}"]`).check();
       }

       await page.pause();
    
    })


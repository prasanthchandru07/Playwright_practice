import {test,expect} from '@playwright/test'

// test ("page navigation", async({page})=>{ 
//     await page.goto("https://www.facebook.com/");

//     await page.waitForTimeout(3000)
// })

// test ("login css", async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//     await page.locator('[name="username"]').fill("Admin")
//     await page.locator('[name="password"]').fill("admin123")

//     await page.locator('[type="submit"]').click

//     await page.waitForTimeout(3000)
// })


// test ("login xpath", async({page})=>{
//     await page.goto("https://www.facebook.com/");

//     await page.locator('//input[@id="_R_c9l6neappb6amH1_"]').fill("example@gmail.com")
//     await page.locator('//input[@id="_R_cdl6neappb6amH1_"]').fill("admin123")

//     await page.locator('[type="submit"]').click

//     await page.waitForTimeout(3000)
// })

test ("login using build-in locators", async({page})=>{
    await page.goto("https://demoqa.com/login");

    await page.getByText("New User").click();
    await page.getByPlaceholder("First Name").fill("play");
    await page.getByPlaceholder("Last Name").fill("wright");
    await page.getByPlaceholder("UserName").fill("play");
    await page.getByPlaceholder("Password").fill("play@123");
    await page.getByRole("button",{name:"Register"}).click()
    await page.getByRole("button",{name:"Back to Login"}).click()
    await page.getByPlaceholder("UserName").fill("play");
    await page.getByPlaceholder("Password").fill("play@123");
    await page.getByRole("button",{name:"Login"}).click()
   // await page.pause()
    await page.waitForTimeout(3000)
})
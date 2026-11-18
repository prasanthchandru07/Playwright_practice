import {test,expect, chromium} from '@playwright/test'


test ("handling tabs", async()=>{
    
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const pageOne=await context.newPage();

    await pageOne.goto("https://demo.automationtesting.in/Frames.html")

    console.log(await pageOne.title());
    await pageOne.waitForTimeout(3000);


    const pageTwo=await context.newPage();

    await pageTwo.goto("https://www.facebook.com/")

    console.log(await pageOne.title());
    await pageTwo.waitForTimeout(3000);

})


test ("handling multiple tabs", async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log(await page.title());

    await page.locator('//input[@name="username"]').fill("admin")

    const[newTab]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('//a[text()="OrangeHRM, Inc"]').click()
    ])
    
    await newTab.waitForLoadState();

    console.log(await newTab.title());

    await newTab.locator('//button[text()="Book a Free Demo"]').click()

    await newTab.pause();

})


test ("handling tab in flipkart", async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://www.flipkart.com/ss-26-base-inline-at-store?pageUID=1792497177780");
    
    console.log(await page.title());

    await page.locator('//div[text()="Shirts,tees "]').click()
  
    const[newTab]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('//div[@data-id="TSHH4D2FGURWBGAS"]').click()
    ])

    await newTab.waitForLoadState();

    await expect(newTab.locator('//div[text()="₹549"]')).toContainText("₹549")

    await page.pause()
    
})



test ("page navigation", async({page})=>{


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button",{name:"Login"}).click();

    await page.waitForTimeout(3000);

    await page.goBack();

    await page.waitForTimeout(3000);

    await page.goForward();

    await page.waitForTimeout(3000);

    await page.reload();

    await page.waitForTimeout(3000);

})

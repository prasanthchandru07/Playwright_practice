import {test,expect} from '@playwright/test'

test ("frame-handling", async({page})=>{

    await page.goto("https://practice-automation.com/iframes/");

    await expect(page.locator('//h1[text()="Iframes"]')).toBeVisible();

    const automationFrame=await page.frames()

    console.log("Count :",automationFrame.length);

    for(let i of automationFrame){
        console.log("URL : ",i.url());
        
    }

    //name and url==>frame
    //locators==> framelocator

    const playwright=await page.frame({name:"top-iframe"})

    await playwright.locator('//a[text()="Docs"]').click();

        const selenium=await page.frame({url:"https://www.selenium.dev/"})

        await selenium.locator('//span[text()="Documentation"]').click()

    await page.pause();
    


})

test ("frame", async({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html");

    await expect(page.locator('//h1[text()="Automation Demo Site "]')).toBeVisible();

    const frameHandling=await page.frames()

    console.log("Count :",frameHandling.length);

    for(let i of frameHandling){
        console.log("URL : ",i.url());
        
    }

    const playwrightdemo=await page.frame("#singleframe")

    await playwrightdemo.locator('//input[@type="text"]').fill("hi")

    await page.pause();

})

test("framelocator", async({page})=>{

    await page.goto("https://practice-automation.com/iframes/");

    await expect(page.locator('//p[text()="I’m an iframe"]')).toHaveText("I’m an iframe")

    const playwright=await page.frameLocator('//iframe[@id="iframe-1"]')

    await playwright.locator('//a[text()="MCP"]').click()

    const selenium =await page.frameLocator('//iframe[@title="Selenium"]')
    await selenium.locator('//span[text()="Projects"]').click()

    await page.pause()

})
    

test("nested frame using frame method", async({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html");

    await page.locator('//a[text()="Iframe with in an Iframe"]').click()

    const iFrame=await page.frame({url:"https://demo.automationtesting.in/MultipleFrames.html"})

    await expect(iFrame.locator('//h5[text()="Nested iFrames"]')).toBeVisible()

    const childFrame=await iFrame.childFrames()[0]

    await childFrame.locator('//input[@type="text"]').fill("playwright")

    await page.pause();

})


test("nested frame using framelocator method", async({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html");

    await page.locator('//a[text()="Iframe with in an Iframe"]').click()

    const iFrame=await page.frameLocator('//div[@id="Multiple"]/iframe')

    await expect(iFrame.locator('//h5[text()="Nested iFrames"]')).toBeVisible()

    const childFrame=await iFrame.frameLocator('//h5[text()="Nested iFrames"]/following-sibling::iframe')

    await childFrame.locator('//input[@type="text"]').fill("playwright")

    await page.pause();

})



test("nested using frame", async({page})=>{

    await page.goto("https://letcode.in/frame");

    //await page.locator('//a[text()="Iframe with in an Iframe"]').click()

    const iFrame=await page.frame({name:"firstFr"})
    await iFrame.locator('//input[@name="fname"]').fill("Prasanth");
    await iFrame.locator('//input[@name="lname"]').fill("Chandru");

    //const childFrame=await iFrame.frame({url:"/innerframe"})
    const childFrame=await iFrame.childFrames()[0]
    await childFrame.locator('//input[@name="email"]').fill("prasanth@gmail.com")

    await page.pause();

})
import{test,expect} from '@playwright/test'

test.beforeAll("test started",()=>{
    console.log("test started succesfully");
    
})

test.beforeEach("navigation",async({page})=>{
    await page.setViewportSize({width:375, height:667})
    await page.goto("https://www.saucedemo.com/")

})

test.afterEach("logout",async({page})=>{
    await page.locator('//button[@id="react-burger-menu-btn"]').click()
    await page.locator('//a[@id="logout_sidebar_link"]').click()
})

test.afterAll("test ended",()=>{
    console.log(("test ended successfully"));
    
})

test("user one",async({page})=>{

    await page.locator('//input[@id="user-name"]').fill("standard_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")

    await page.locator('//input[@id="login-button"]').click()
})

test("user two",async({page})=>{

    await page.locator('//input[@id="user-name"]').fill("problem_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")

    await page.locator('//input[@id="login-button"]').click()
})

test("user three",async({page})=>{

    await page.locator('//input[@id="user-name"]').fill("performance_glitch_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")

    await page.locator('//input[@id="login-button"]').click()
})

test("user four",async({page})=>{

    await page.locator('//input[@id="user-name"]').fill("visual_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")

    await page.locator('//input[@id="login-button"]').click()
})
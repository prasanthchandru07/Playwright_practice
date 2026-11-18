import {test,expect} from '@playwright/test'

test("screenshot",async({page})=>{
    await page.goto("https://practice-automation.com/iframes/")

   // await page.screenshot({path:"F:/Playwright/.github/files/"+"automation.png"})
      await page.screenshot({path:"F:/Playwright/.github/files/"+"fullpage.png",fullPage:true})
})
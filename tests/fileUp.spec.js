import {test,expect} from '@playwright/test'

test("single file upload", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="singleFileInput"]').setInputFiles("F:/Playwright/.github/files/automation.png")
    await page.click('//input[@id="singleFileInput"]/following-sibling::button');

    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText('Single file selected: automation.png')

    await page.pause();

})


test("multiple file upload", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles("F:/Playwright/.github/files/automation.png","F:/Playwright/.github/files/fullpage.png")
    await page.click('//input[@id="multipleFilesInput"]/following-sibling::button');

    await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText('Multiple files selected:')
    
    await page.pause();

    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([]);

    await page.pause();

})


test("file download", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/download")

    const[download]=await Promise.all([
        page.waitForEvent('download'),
        page.locator('//a[text()="Images.txt"]').click()
    ])

    const file="F:/Playwright/.github/files/Images.txt"

    await download.saveAs(file)

    await page.pause()

})

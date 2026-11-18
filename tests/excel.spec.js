import{test,expect} from '@playwright/test'
import * as xlsx from 'xlsx'

  const workbook=xlsx.readFile("C:/Users/HP/Downloads/saucedemo_cred.xlsx");
  const sheet=workbook.Sheets["LOGIN"];
 const jsonData= xlsx.utils.sheet_to_json(sheet);

 for(let cred of jsonData){
    test(`login swaglabs using excel cred user ${cred.USERNAME}`,async({page})=>{

        await page.goto("https://www.saucedemo.com/")
    await page.locator('//input[@id="user-name"]').fill(cred.USERNAME.trim())
    await page.locator('//input[@id="password"]').fill(cred.PASSWORD.trim())

    await page.locator('//input[@id="login-button"]').click()

    await page.pause()
})
 }
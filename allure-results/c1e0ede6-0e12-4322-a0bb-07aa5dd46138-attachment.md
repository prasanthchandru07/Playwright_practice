# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: excel.spec.js >> login swaglabs using excel cred user standard_user
- Location: tests\excel.spec.js:9:9

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@id="user-name"]')

```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import * as xlsx from 'xlsx'
  3  | 
  4  |   const workbook=xlsx.readFile("C:/Users/HP/Downloads/saucedemo_cred.xlsx");
  5  |   const sheet=workbook.Sheets["LOGIN"];
  6  |  const jsonData= xlsx.utils.sheet_to_json(sheet);
  7  | 
  8  |  for(let cred of jsonData){
  9  |     test(`login swaglabs using excel cred user ${cred.USERNAME}`,async({page})=>{
  10 | 
> 11 |     await page.locator('//input[@id="user-name"]').fill("cred.USERNAME.trim()")
     |                                                    ^ Error: locator.fill: Target page, context or browser has been closed
  12 |     await page.locator('//input[@id="password"]').fill("cred.PASSWORD.trim()")
  13 | 
  14 |     await page.locator('//input[@id="login-button"]').click()
  15 | 
  16 |     await page.pause()
  17 | })
  18 |  }
```
import {test,expect} from '@playwright/test'
import { waitForDebugger } from 'node:inspector';

test ("table handling", async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    const column=await page.locator('//table[@id="productTable"]/descendant::th')
    const row=await page.locator('//table[@id="productTable"]/tbody/tr')

    console.log("Column :", await column.count());
    console.log("Rows :", await row.count());

    //method1
    //await page.locator('//table[@id="productTable"]/descendant::td[text()="Smartphone"]/following-sibling::td/child::input[@type="checkbox"]').check

    //method2
    //await row.locator('//td[text()="Smartphone"]/following-sibling::td/child::input[@type="checkbox"]').check()

    //method3
    const phone=await row.filter({
        has:page.locator('td'),
        hasText:"Smartphone"
    })
    await phone.locator('//input[@type="checkbox"]').check()
    await page.pause()
})
  

test ("table handling for multiple checkboxes", async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    const column=await page.locator('//table[@id="productTable"]/descendant::th')
    const rows=await page.locator('//table[@id="productTable"]/tbody/tr')

    // console.log("Column :", await column.count());
    // console.log("Rows :", await row.count());

    

    //method1
    // const product = ["Smartphone", "Smartwatch", "Laptop"]

    // for(let i of product){
    //     await rows.locator(`//td[text()="${i}"]/following-sibling::td/child::input[@type="checkbox"]`).check()
    // }

    //method2
    const phone=await rows.filter({
        has:page.locator('td'),
        hasText:/Smartphone|Smartwatch|Laptop/
    })

    const product=await phone.all()
    for (let i of product){
    await i.locator('//input[@type="checkbox"]').check()
    }
    await page.pause()
})

test('paginatoin tables', async ({ page }) => {
  
  await page.goto('https://testautomationpractice.blogspot.com/');

  let row=0 ;

  for (let i = 1; i <= 4; i++) {

    row += await page.locator('//table[@id="productTable"]/descendant::tbody/child::tr').count();

  }

  console.log('total rows:', row);
})
    
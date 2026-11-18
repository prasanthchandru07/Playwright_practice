import {test,expect} from '@playwright/test'
import { log } from 'node:console';

test ("multicheckbox", async({page})=>{

       await page.goto("https://testautomationpractice.blogspot.com/");
    
    //    await page.locator('//select[@id="country"]').selectOption("India");

           //await page.locator('//select[@id="country"]').selectOption({label:"Canada"});

           await page.locator('//select[@id="country"]').selectOption({index:2});

           
           await page.locator('//select[@id="country"]').selectOption({value:"uk"});

       await page.pause();
    
    
    })


    test ("multi-select", async({page})=>{

       await page.goto("https://testautomationpractice.blogspot.com/");

       //await page.locator('//select[@id="colors"]').selectOption(["Red","White"]);

    //    const text=await page.locator('//select[@id="country"]').textContent()

    //    console.log(text);

         const text=await page.locator('//select[@id="country"]/option').allTextContents()

         for(let i of text){
            console.log(i.trim());
            
         }

         const dummy=await page.locator('//select[@id="country"]/option').count()

         console.log("count: ", dummy);

         await expect(page.locator('//select[@id="country"]/option')).toHaveCount(10)

                      

       await page.pause();

    })

    
    test("google-lang", async({page})=>{

        await page.goto("https://www.google.com/")

        
        const lang=await page.locator('//div[text()="Google offered in:  "]').textContent();
        console.log(lang);
        
        await page.pause()
        
    })

        

    
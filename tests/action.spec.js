import { test, expect } from '@playwright/test';
import { waitForDebugger } from 'node:inspector';

//keyboardaction
test("action from keyboard", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//input[@id="name"]').fill("hello")

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')

    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')

    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')

    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')

    await page.pause();
})


//mouseaction

test("mouse hover", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//button[@class="dropbtn"]').hover()

    await page.pause();

})


test("mouse right click", async({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    await page.locator('//span[text()="right click me"]').click({button:"right"})

    await page.pause()

})

test("mouse double click", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.fill('//input[@id="field1"]', "playwright")

    await page.locator('//button[text()="Copy Text"]').dblclick();

    await expect(page.locator('//input[@id="field2"]')).toHaveValue("playwright");

    await page.pause();

})


test("mouse scroll", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.mouse.wheel(0,2000);

    await page.pause();

    await page.mouse.wheel(0,-2000);

    await page.pause();

    await page.locator('//div[@id="footer-3"]/descendant::div[@class="widget-content"]').scrollIntoViewIfNeeded();

    await page.pause();

})


test("drag and drop", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // const source=page.locator('//div[@id="draggable"]');
    // const target=page.locator('//div[@id="droppable"]');

    // await source.dragTo(target);

    await page.locator('//div[@id="draggable"]').dragTo(page.locator('//div[@id="droppable"]'));

    await page.pause();
})



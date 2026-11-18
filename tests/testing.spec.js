import{test,expect} from '@playwright/test'
import cred from '../.github/test-data/creds.json'
import checkout from '../.github/test-data/checkout.json'

test("end2end",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await expect(page).toHaveTitle("Swag Labs");

    await page.locator('//input[@id="user-name"]').fill(cred.username);
    await page.locator('//input[@id="password"]').fill(cred.password);

    await page.locator('//input[@id="login-button"]').click();

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.locator('//span[text()="Products"]')).toHaveText("Products");

    await page.locator('//select[@class="product_sort_container"]').selectOption({index:2})


    const oneshirt= await page.locator('//div[text()="Sauce Labs Onesie"]')
    const twoshirt= await page.locator('//div[text()="Sauce Labs Bike Light"]')

    await oneshirt.click();
    await page.locator('//button[@id="add-to-cart"]').click();

    await page.locator('//button[@name="back-to-products"]').click();

    await twoshirt.click();
    await page.locator('//button[@id="add-to-cart"]').click();

    await expect(page.locator('//a[@aria-label="Cart, 2 items"]')).toHaveText("2");

    await page.locator('//div[@id="shopping_cart_container"]').click();

    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    await expect(page.locator('//span[text()="Your Cart"]')).toHaveText("Your Cart");

    await expect(page.locator('//div[text()="Sauce Labs Onesie"]')).toHaveText("Sauce Labs Onesie");
    
    await expect(page.locator('//div[text()="7.99"]')).toContainText("7.99");

    await expect(page.locator('//div[text()="Sauce Labs Bike Light"]')).toHaveText("Sauce Labs Bike Light");
    
    await expect(page.locator('//div[text()="9.99"]')).toContainText("9.99");

    await page.locator('//button[@id="checkout"]').click();

    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
    await expect(page.locator('//span[text()="Checkout: Your Information"]')).toHaveText("Checkout: Your Information");

    await page.locator('//input[@id="first-name"]').fill(checkout['First Name']);
    await page.locator('//input[@id="last-name"]').fill(checkout['Last Name']);
    await page.locator('//input[@id="postal-code"]').fill(checkout['Zip code']);

    await page.locator('//input[@id="continue"]').click();

    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")
    await expect(page.locator('//span[text()="Checkout: Overview"]')).toHaveText("Checkout: Overview")

    await expect(page.locator('//div[text()="SauceCard #31337"]')).toContainText("SauceCard");
    await expect(page.locator('//div[text()="Free Pony Express Delivery!"]')).toContainText("Free Pony Express Delivery")
    await expect(page.locator('//div[@data-test="total-label"]')).toContainText("19.42")

    await page.locator('//button[@name="finish"]').click()

    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
    await expect(page.locator('//span[text()="Checkout: Complete!"]')).toContainText("Complete")

    await expect(page.locator('//img[@class="pony_express"]')).toBeVisible()
    await expect(page.locator('//h2[@class="complete-header"]')).toHaveText("Thank you for your order!")

    await page.locator('//button[@id="back-to-products"]').click()

    await page.locator('//button[@id="react-burger-menu-btn"]').click()

    await page.locator('//a[@id="logout_sidebar_link"]').click()

    await expect(page).toHaveTitle("Swag Labs");

    await page.pause()
})
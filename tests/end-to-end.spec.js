const { test,expect } = require("@playwright/test")

test('end to end',async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.locator("//input[@id='email1']").fill("admin@gmail.com");

    await page.locator("//input[@id='password1']").fill("admin123");

    await page.locator("//button[@type='submit']").click();

    await page.locator("//div[@class='home-container']//div[1]//div[2]//button[1]").click();

    await page.locator("//div[@class='container-child']//div[2]//div[2]//button[1]").click();

    await page.locator("//button[@class='cartBtn']").click();

    await page.locator("//img[@alt='menu']").click();

    await page.locator("//button[@class='nav-menu-item']").click();

    await page.pause();
})

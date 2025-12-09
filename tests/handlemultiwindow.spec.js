const { test,expect } = require("@playwright/test")

test('handle multi window',async function({browser})
{
    const context= await browser.newContext();

    const page= await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const [newPage] = await Promise.all
            (
                [
                    context.waitForEvent("page"),

                    page.locator("//div[@class='container-child']//a[4]").click()
                ]
            )

    await newPage.locator("(//input[@name='email'])[2]").fill("The om pokar");

    await newPage.waitForTimeout(5000)

    await newPage.close()
})

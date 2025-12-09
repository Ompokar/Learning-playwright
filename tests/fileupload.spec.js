const { test,expect } = require("@playwright/test")

test("file upload",async function({page})

{
    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("/home/cloudmate-pc-23/Desktop/playwright/image.png");

    await page.waitForTimeout(10000)

    await page.locator("#file-submit").click()

    expect (await page.locator("//h3")).toHaveText("File Uploaded!")


})
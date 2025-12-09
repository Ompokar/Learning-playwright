const { test,expect } = require("@playwright/test")

test("Keyboard event in playwright",async function({page})
 
{
   
    await page.goto("https://google.com")

    await page.locator("textarea[name='q']").type("narendra modi")

    await page.keyboard.press("Control+A")

    await page.keyboard.press("Control+C")

    await page.keyboard.press("Backspace")

    //await page.locator("textarea[name='q']").type("nirav modi")

    await page.keyboard.press("Control+V")
   
    //await page.keyboard.press("Enter")

   // await page.waitForTimeout(10000)


   // await page.locator("textarea[name='q']").focus()

   // await page.keyboard.type("narendra modi!")

    await page.keyboard.press("ArrowLeft")

    await page.keyboard.down("Shift")

    for(let i=0;i<4;i++)
    {
        await page.keyboard.press("ArrowLeft")
    }

    await page.keyboard.up("Shift")

    await page.keyboard.press("Backspace")


})
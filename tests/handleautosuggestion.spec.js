const { test,expect } = require("@playwright/test")

test("verify application title",async function({page}){

   await page.goto("https://google.com")

   await page.locator("textarea[name='q']").type("narendra modi")

   await page.waitForSelector("//li[@role='presentation']")

   await page.keyboard.press("ArrowDown")

   await page.keyboard.press("ArrowDown")

   await page.keyboard.press("ArrowDown")

   await page.keyboard.press("ArrowDown")

   await page.keyboard.press("ArrowDown")

   await page.keyboard.press("Enter")

})



test("verify application title using loop",async function({page}){

    await page.goto("https://google.com")
 
    await page.locator("textarea[name='q']").type("narendra modi")
 
    await page.waitForSelector("//li[@role='presentation']")
 
    const elements=await page.$$("//li[@role='presentation']")

    for(let i=0;i<elements.length;i++)

    {
        const text= await elements[i].textContent()

        if(text.includes('salary'))
        {
            await elements[i].click()
            break
        }
    }
  
 
 })
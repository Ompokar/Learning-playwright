const { test,expect } = require("@playwright/test")

test("handle alert",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async function (d) {
    
       //wrong thing added insteed of confimr we have to add alert
       // expect(d.type()).toContain("confirm") 

        expect(d.type()).toContain("alert") 

        expect(d.message()).toContain("I am a JS Alert")

        await d.accept()

    })

    await page.locator("//button[text()='Click for JS Alert']").click()   

})

test("handle confrim",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async function (dialogWindow) {   
     
        expect(dialogWindow.type()).toContain("confirm") 

        expect(dialogWindow.message()).toContain("I am a JS Confirm")
        
        //await dialogWindow.accept()
        await dialogWindow.dismiss()

    })

    await page.locator("//button[text()='Click for JS Confirm']").click()   
})

test("handle prompt",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async function (dialogWindow) {   
     
        expect(dialogWindow.type()).toContain("prompt") 

        expect(dialogWindow.message()).toContain("I am a JS prompt")

        await dialogWindow.accept("Om Pokar")       

    })

    await page.locator("//button[text()='Click for JS Prompt']").click()   

    //await page.waitForTimeout(5000)
})
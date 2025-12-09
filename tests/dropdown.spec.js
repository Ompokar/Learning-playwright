const { test,expect } = require("@playwright/test")

test("select value for dropdown",async function({page})

{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#state").selectOption({label:"Goa"})

    await page.waitForTimeout(5000)

    await page.locator("#state").selectOption({value:"Gujarat"})

    await page.locator("#state").selectOption({index:4}) 

    const value= await page.locator("#state").textContent()

    console.log ("all dropdown value"+value);

    await expect(value.includes("Kerala")).toBeTruthy()

    let state=await page.$("#state")

    let allelements=await state.$$("option")

    let ddstatus=false

    for(let i=0;i<allelements.length;i++)
    {
        let element=allelements[i]

        let value=await element.textContent()        

        console.log("value from dropdown list using for loop "+value);

        if(value.includes("Lakshadweep"))

            { ddstatus=true
                break
            }

       
    }

    await expect(ddstatus).toBeTruthy()

    await page.locator("#hobbies").selectOption(['Playing','Swimming'])


})
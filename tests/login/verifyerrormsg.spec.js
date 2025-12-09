const {test,expect}=require("@playwright/test");

test.skip("valid login",async function({page}){

    await page.goto("https://app.echoplate.ai/login")

  

    await page.getByPlaceholder("email").type("robert@gmail.com")

    await page.getByPlaceholder("password").type("Test@523")

    await page.getByRole('button', { name: 'Login' }).click();
    
    const errorLocator = page.locator('div.bg-destructive\\/10.border.border-destructive\\/20');
    
    await expect(errorLocator).toBeVisible();
    
    const errorMessage = await errorLocator.textContent();
    
    console.log("Error message is: " + errorMessage);

  });



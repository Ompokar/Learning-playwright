const {test,expect}=require("@playwright/test")

test.skip("valid login",async function({page}){

    await page.goto("https://app.echoplate.ai/login")

    await page.getByPlaceholder("email").type("robert@gmail.com")

    await page.getByPlaceholder("password").type("Test@123")

    await page.getByRole('button', { name: 'Login' }).click();
    
    await page.getByRole('button', { name: 'RL' }).click();
    
    await page.getByText('Log out').click();

  })



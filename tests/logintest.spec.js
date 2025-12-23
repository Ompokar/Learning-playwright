const { test, expect } = require("@playwright/test");
const testdata= JSON.parse(JSON.stringify(require("../testdata.json")))

test("test data login",async function({page})

{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.locator("//input[@id='email1']").fill(testdata.username);

    await page.locator("//input[@id='password1']").fill(testdata.password);
    
    //await page.pause();
    
    await page.getByText("New user? Signup").click();

    await page.locator("//input[@id='name']").fill(testdata.name);

    await page.locator("//input[@id='email']").fill(testdata.username);

    await page.locator("//input[@id='password']").fill(testdata.password);

    await page.getByRole('checkbox', { name: 'TestNG' }).check();

    await page.getByRole('checkbox', { name: 'Cypress' }).check();

    await page.getByRole('checkbox', { name: 'AWS' }).check();

    await page.locator('#gender2').check();

    await page.locator('#state').selectOption('Gujarat');

    await page.locator("#hobbies").selectOption(['Playing','Swimming']);

    await page.pause();

    await page.locator("//button[@type='submit']").click();

});

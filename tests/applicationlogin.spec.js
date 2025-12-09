const { test, expect } = require("@playwright/test");
const LoginPage=require("../pages/loginpage");
const HomePage=require('../pages/homepage');

test('application loginpage',async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const loginPage=new LoginPage(page);

    await loginPage.loginToApplication();

    const homePage=new HomePage(page);

    await homePage.logoutFromApplication();
}); 
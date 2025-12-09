const { test,expect } = require("@playwright/test")

test.skip("handle frames",async function({page})
{
    await page.goto("https://docs.oracle.com/javase/B/docs/api/")

 })

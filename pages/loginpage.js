class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.username="//input[@id='email1']";
        this.password="//input[@id='password1']";
        this.loginbutton="//button[@type='submit']";
    }

    async loginToApplication()
    {
        await this.page.fill(this.username,"admin@gmail.com");
        await this.page.fill(this.password,"admin123");
        await this.page.click(this.loginbutton);
    }
}

module.exports=LoginPage;
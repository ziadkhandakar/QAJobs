exports.LoginPage = class LoginPage
{
    constructor(page)
    {
        this.page= page;
        this.emailField= page.locator('#email');
        this.passwordField= page.locator('#password');
        this.loginBtn= page.locator('button:has-text("Login")');
        this.lostPass= page.getByText('Lost Password');
        this.registerNow= page.getByText('Register Now');

       

    }

    async gotoLogin()
    {
        await this.page.goto("https://labsqajobs.qaharbor.com/login/");
    }

    async login(email,password)
    {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }
    async lostpass(){
        await this.lostPass.click();

    }
    async registernow(){
        await this.registerNow.click();
    }

} 

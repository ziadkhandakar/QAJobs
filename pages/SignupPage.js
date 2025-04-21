exports.SignupPage = class SignupPage{
    constructor(page)
    {
        this.page= page;
        this.heading = page.locator('div.elementor-widget-heading h1.elementor-heading-title');
        this.userField= page.locator('#username');
        this.emailField= page.getByPlaceholder('Email Address');
        this.passwordField= page.locator('#password');
        this.confPassField= page.getByPlaceholder('Confirm Password');
        this.registerBtn= page.getByRole('button', { name: 'REGISTER NOW' });
        this.loginLink= page.getByRole('link', { name: 'Login' });  
        this.userErr= page.locator('#username__error');
        this.emailErr= page.locator('#email__error');
        this.passErr= page.locator('#password__error');
        this.confPassErr= page.locator('#conf-pass__error');
        this.passNotMatchErr= page.locator('div.jet-form-builder-message.jet-form-builder-message--error');    

    }

    async gotoSignupCandidate()
    {
        await this.page.goto("https://labsqajobs.qaharbor.com/candidate-registration/");
    }

    async gotoSinupRecruiter()
    {
        await this.page.goto("https://labsqajobs.qaharbor.com/recruiter-registration/");
    }

    async signUpCandidate(user,email,password){
        await this.userField.fill(user);
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.confPassField.fill(password);
        await this.registerBtn.click();
    }
}

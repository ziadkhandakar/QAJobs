exports.HomePage = class HomePage
{
    constructor(page)
    {
        this.page= page;
        this.searchTxtField= page.locator('input[name="query"]');
        this.searchLocationField= page.locator('select[name="vacancy-country"]');
        this.searchBtn= page.getByRole('button', { name: 'Search' });
        this.footer= page.locator('#jet-theme-core-footer');
        this.aboutQAJobs = page.locator('div.elementor-widget-container', { hasText: 'About QAJobs' });
        this.Terms_of_Service = page.locator('div.elementor-widget-container', { hasText: 'Terms of Service' });
        this.candidateSignUp = page.locator('a[href="https://labsqajobs.qaharbor.com/candidate-registration/"]', {
            hasText: 'Create Account'
          });
        this.findJobsLink = page.locator('a[href="https://labsqajobs.qaharbor.com/find-jobs/"]', {
            hasText: 'Find Jobs'
          });
        this.recruiterSignUp = page.locator('a[href="hhttps://labsqajobs.qaharbor.com/recruiter-registration/"]', {
            hasText: 'Create Account'
          });


    }

    async gotoHome()
    {
        await this.page.goto("https://labsqajobs.qaharbor.com/");
    }
    async search(text,location){
        await this.searchTxtField.fill(text);
        await this.searchLocationField.selectOption({ label: location });;
        await this.searchBtn.click();
    }
    
}
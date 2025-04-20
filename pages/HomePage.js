exports.HomePage = class HomePage
{
    constructor(page)
    {
        this.page= page;
        this.searchTxtField= page.locator('input[name="query"]');
        this.searchLocationField= page.locator('select[name="vacancy-country"]');
        this.searchBtn= page.getByRole('button', { name: 'Search' });


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
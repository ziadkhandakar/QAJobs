exports.RecruiterDashboard = class RecruiterDash
{
    constructor(page)
    {
        this.page= page;
        this.emailText= page.locator('.jet-listing-dynamic-field__content', {hasText: 'Email:'}).locator('.profile-info');
        this.phoneNumber= page.locator('.jet-listing-dynamic-field__content', {hasText: 'Phone:'}).locator('.profile-info');
        this.profileLink= page.getByRole('link', { name: 'My Profile' });
        this.postJobLink= page.locator('a.jet-profile-menu__item-link', { hasText: 'Post a Job' });
        this.postJobBtn= page.locator('a.jet-button__instance--icon-right span.jet-button__label');
        this.applicantsLink = page.getByRole('link', { name: 'Applicants' });
        this.jobsLink= page.locator('a[href="https://labsqajobs.qaharbor.com/find-jobs/"]');
        this.logoutLink= page.getByRole('link', { name: 'Log Out' });
        this.popupOverlay= page.locator('.jet-popup__container-overlay');
        this.popupCloseBtn = page.locator('.jet-popup__close-button');
        this.fillUpButton = page.locator('a.elementor-button', { hasText: 'Fill Up' });
        this.editBtnProfile = page.locator('[data-id="9e106cb"]');
        this.editBtnAbout = page.locator('[data-id="56a45c5"]');

    }
}
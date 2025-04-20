import {test, expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Recruiter Create Account Link is Clickable and Redirected', async ({ page }) => {
    const home= new HomePage(page);
    await home.gotoHome();
    await expect(home.recruiterSignUp).toBeVisible;
    await home.recruiterSignUp.click();
    await expect(page).toHaveURL(/recruiter-registration/);

});
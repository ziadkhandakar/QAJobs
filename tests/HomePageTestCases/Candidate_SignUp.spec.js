import {test, expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Recruiter Create Account link is Clickable and Redirected', async ({ page }) => {
    const home= new HomePage(page);
    await home.gotoHome();
    await expect(home.candidateSignUp).toBeVisible;
    await home.candidateSignUp.click();
    await expect(page).toHaveURL(/candidate-registration/);

});
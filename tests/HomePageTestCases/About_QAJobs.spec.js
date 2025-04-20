import {test, expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('About QAJobs Link is Clickable and Redirected', async ({ page }) => {
    const home= new HomePage(page);
    await home.gotoHome();
    await expect(home.aboutQAJobs).toBeVisible;
    await home.aboutQAJobs.click();
    await expect(page).toHaveURL(/about-qajobs/);

});
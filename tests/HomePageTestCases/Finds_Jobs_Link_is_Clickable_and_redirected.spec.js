import {test, expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Find Jobs Link is Clickable and Redirected', async ({ page }) => {
    const home= new HomePage(page);
    await home.gotoHome();
    await expect(home.findJobsLink).toBeVisible;
    await home.findJobsLink.click();
    await expect(page).toHaveURL(/find-jobs/);

});
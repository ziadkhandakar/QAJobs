import {test, expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Terms of services Link is Clickable and Redirected', async ({ page }) => {
    const home= new HomePage(page);
    await home.gotoHome();
    await expect(home.Terms_of_Service).toBeVisible;
    await home.Terms_of_Service.click();
    await expect(page).toHaveURL(/terms-of-service/);

});
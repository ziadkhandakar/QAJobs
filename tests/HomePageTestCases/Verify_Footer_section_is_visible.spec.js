import {test, expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Verify Footer section is visible', async({page}) => {
    const home= new HomePage(page); 
    await home.gotoHome();
    await expect(home.footer).toBeVisible();
});
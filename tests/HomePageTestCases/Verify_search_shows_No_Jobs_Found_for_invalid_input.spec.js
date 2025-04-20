import {test, expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('1. Filter Job with filling all fields', async({page})=> 
    {
        const home= new HomePage(page);
        await home.gotoHome();
        await home.search('abcdefghijk','Bangladesh');
        await expect(page).toHaveURL('https://labsqajobs.qaharbor.com/find-jobs/');
        const noJobMsg= await page.locator('div.jet-listing-not-found.jet-listing-grid__items', { hasText: 'No Jobs Found.' });
        const textNoJobMsg= await noJobMsg.textContent();
        console.log(textNoJobMsg);
        await expect(noJobMsg).toBeVisible();

    });

    
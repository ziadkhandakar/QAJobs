import {test, expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('1. Filter Job with filling all fields', async({page})=> 
    {
        const home= new HomePage(page);
        await home.gotoHome();
        await home.search('abc','Bangladesh');
        await expect(page).toHaveURL('https://labsqajobs.qaharbor.com/find-jobs/');

    });
import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage'; 
test('4-Verify Lost Password', async({page})=> {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.lostpass();
    await expect(page).toHaveURL('https://labsqajobs.qaharbor.com/reset-password/');
    
    });
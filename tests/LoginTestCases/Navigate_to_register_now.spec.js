import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage'; 
test('5-Register Now', async({page})=> {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.registernow();
    await expect(page).toHaveURL('https://labsqajobs.qaharbor.com/registration/');
    
    });
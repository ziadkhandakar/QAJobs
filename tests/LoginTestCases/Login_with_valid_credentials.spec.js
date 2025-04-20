import {test, expect} from '@playwright/test';
import{LoginPage} from '../../pages/LoginPage';

test('3- Login Test', async({page}) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.login('em2@yopmail.com','12345678');
    await expect(page).toHaveURL('https://labsqajobs.qaharbor.com/account/');
});
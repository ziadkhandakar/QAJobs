import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage'; 
test('1.1- Keep email field blank', async({page})=> {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.login('','123456');
    const expErrMsg = 'Please write your registered email address.';
    const errorMsg= await page.locator('#email__error').textContent();
    console.log('Expected: ',expErrMsg);
    expect(errorMsg).toContain('Please write your registered email address.');
        console.log('Actual: ',errorMsg);
    });

    test('1.2- Keep password field blank', async({page})=> {
        const login = new LoginPage(page);
        await login.gotoLogin();
        await login.login('jiad@yopmail.com','');
        const expErrMsg2 = 'Please fill out with your password.';
        const errorMsg2 = await page.locator('#password__error').textContent();
        console.log('Expected: ',expErrMsg2);
        expect(errorMsg2).toContain('Please fill out with your password.');
            console.log('Actual: ',errorMsg2);
        });
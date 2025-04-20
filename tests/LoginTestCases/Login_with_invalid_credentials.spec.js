import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage'; 

test('2.1- login with invalid email', async({page}) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.login('z@yopmail.com','12345678');
    const expErrorMsg= 'Unknown email address. Check again or try your username'; 
    console.log('Expected: ', expErrorMsg);

    const errorMsg= await page.locator('div.jet-form-builder-message.jet-form-builder-message--error').textContent();
    expect(errorMsg).toContain('Unknown email address');
    
    console.log('Actual: ', errorMsg);
});

test('2.2- Login with wrong password', async({page})=> {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.login('em2@yopmail.com','123456');
    const errorMsg2= await page.locator('div.jet-form-builder-message.jet-form-builder-message--error').textContent();
    expect(errorMsg2).toContain('The password you entered for the email address');
        console.log(errorMsg2);
    });

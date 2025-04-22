import {test, expect} from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';
import { faker } from '@faker-js/faker';

test('Verify that a recruiter can successfully sign up using valid credentials.', async ({ page }) => {
    const signup= new SignupPage(page);
    await signup.gotoSignupRecruiter();
    // Generate fake user data
    const company = faker.company.name();    
    console.log('Company Name: ',company);  
    const phoneNum = `+8801${faker.string.numeric(9)}`;
    console.log('Phone: ',phoneNum);
    const username= faker.internet.username().toLowerCase();  
    const email = faker.internet.email(username, '', 'yopmail.com'); 
    console.log('email- ',email);
    const password = 'Demo1234';
    const confPass = 'Demo1234';
    await expect(signup.heading).toHaveText('Recruiter Registration');
    await signup.signUpRecruiter(company,email,phoneNum,password, confPass);
    await expect(page).toHaveURL(/status=success/);
});

test('Verify that an appropriate error message is displayed when a Recruiter attempts to sign up using an existing Company Name.', async ({ page }) => {
    const signup= new SignupPage(page);
    await signup.gotoSignupRecruiter();
    // Generate fake user data
            
    const phoneNum = `+8801${faker.string.numeric(9)}`;
    const username= faker.internet.username().toLowerCase();  
    const email = faker.internet.email(username, '', 'yopmail.com'); 
    console.log('email- ',email);
    const password = 'Demo1234';
    const confPass = 'Demo1234';
    await signup.signUpRecruiter("test",email,phoneNum,password, confPass);
    await expect(signup.companyNameErr).toBeVisible();
    const errorText= await signup.companyNameErr.textContent();
    console.log('Expexted Error: The company is already registered as recruiter. Contact us to recover your account.');
    console.log('Actual Result: ', errorText);
    await expect(signup.companyNameErr).toContainText("The company is already registered as recruiter. Contact us to recover your account.")
        
    
    });

test('Verify that an appropriate error message is displayed when a Recruiter attempts to sign up using an existing email.', async ({ page }) => {
    const signup= new SignupPage(page);
    await signup.gotoSignupRecruiter();
    // Generate fake user data
    const company = faker.company.name();    
    console.log('Company Name: ',company);         
    const phoneNum = `+8801${faker.string.numeric(9)}`;
    console.log('Phone : ',phoneNum);
    const password = 'Demo1234';
    const confPass = 'Demo1234';
    await signup.signUpRecruiter(company,'Mallory.Haley-Goodwin@hotmail.com',phoneNum,password, confPass);
    await expect(signup.emailErrR).toBeVisible();
    const errorText= await signup.emailErrR.textContent();
    console.log('Expexted Error: The email address already associated with an existing account.');
    console.log('Actual Result: ', errorText);
    await expect(signup.emailErrR).toContainText("The email address already associated with an existing account.")
            
        
    });

    test('Verify error message when signing up with an already registered phone number', async ({ page }) => {
        const signup= new SignupPage(page);
        await signup.gotoSignupRecruiter();
        // Generate fake user data
        const company = faker.company.name();    
        console.log('Company Name: ',company);  
        //const phoneNum = `+8801${faker.string.numeric(9)}`;
        //console.log('Phone: ',phoneNum);
        const username= faker.internet.username().toLowerCase();  
        const email = faker.internet.email(username, '', 'yopmail.com'); 
        console.log('email- ',email);
        const password = 'Demo1234';
        const confPass = 'Demo1234';
        await expect(signup.heading).toHaveText('Recruiter Registration');
        await signup.signUpRecruiter(company,email,'+8801683695675',password, confPass);
        //await expect(signup.errMsg).toBeVisible()
        try {
            await expect(errMsg).toBeVisible({ timeout: 2000 });
            console.log('✅ Error message displayed');
          } catch {
            console.log('❌ Phone Number is not Unique');
            throw new Error('Expected error message was not displayed for duplicate phone number');
          }

        }); 

    
    test('Verify error message for not matched password', async ({ page }) => {     
        const signup= new SignupPage(page);
    await signup.gotoSignupRecruiter();
    // Generate fake user data
    const company = faker.company.name();    
    console.log('Company Name: ',company);  
    const phoneNum = `+8801${faker.string.numeric(9)}`;
    console.log('Phone: ',phoneNum);
    const username= faker.internet.username().toLowerCase();  
    const email = faker.internet.email(username, '', 'yopmail.com'); 
    console.log('email- ',email);
    const password = 'Demo1234';
    const confPass = 'Demo1235';
    await signup.signUpRecruiter(company,email,phoneNum,password, confPass);
    await expect(signup.passNotMatchErr).toBeVisible();
    const errorMsg= await signup.passNotMatchErr.textContent();
    console.log(errorMsg);
    await expect(signup.passNotMatchErr).toContainText("Passwords don't match.");
    });    
import {test} from '@playwright/test'
import { POManager } from '../pages/POManager';

test.describe('Logins', () =>{
    

    test(`Valid Login`, async ({page}) =>{
        const poManager = new POManager(page);
        const loginPage = await poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin("standard_user", "secret_sauce");
        const homePage = await poManager.getHomePage();
        await homePage.validHeaderText();
    });

    test('user locked', async ({page})=>{
        const poManager = new POManager(page);
        const loginPage = await poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin("locked_out_user", "secret_sauce");
        await loginPage.errorMessage('Epic sadface: Sorry, this user has been locked out.')
    })
});
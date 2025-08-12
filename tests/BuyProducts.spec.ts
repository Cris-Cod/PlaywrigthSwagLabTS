import {test} from '@playwright/test'
import { POManager } from '../pages/POManager';


test.describe('products', () =>{

    test('Validate is product is page', async ({page}) =>{
        const poManager = new POManager(page);
        const loginPage = await poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin("standard_user", "secret_sauce");
        const homePage = await poManager.getHomePage();
        await homePage.validHeaderText();
        const productPage = await poManager.getProductPage();
        await productPage.validateVisibleProduct('Sauce Labs Fleece Jacket');
    });

    test('Validate detail product', async ({page}) =>{
        const poManager = new POManager(page);
        const loginPage = await poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin("standard_user", "secret_sauce");
        const homePage = await poManager.getHomePage();
        await homePage.validHeaderText();
        const productPage = await poManager.getProductPage();
        productPage.selectProduct('Sauce Labs Bike Light');
        const detailProduct = await poManager.getDetailProduct();
        await detailProduct.validateDetailProduct('Sauce Labs Bike Light', '$9.99');
    });

    test.only('Add one product to cart', async ({page}) =>{
        const poManager = new POManager(page);
        const loginPage = await poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin("standard_user", "secret_sauce");
        const homePage = await poManager.getHomePage();
        await homePage.validHeaderText();
        const productPage = await poManager.getProductPage();
        await productPage.addOneProductToCart('Sauce Labs Fleece Jacket');
        await productPage.selectBtnCart();
        const cartPage = await poManager.getCartPage();
        await cartPage.validateProduct("Sauce Labs Fleece Jacket","$49.99");
    })
    
});
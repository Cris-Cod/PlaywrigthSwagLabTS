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

    test('Add one product to cart', async ({page}) =>{
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

    test.only('buy one product', async ({page}) =>{
        const poManager = new POManager(page);
        const loginPage = await poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin("standard_user", "secret_sauce");
        const homePage = await poManager.getHomePage();
        await homePage.validHeaderText();
        const productPage = await poManager.getProductPage();
        await productPage.addOneProductToCart('Sauce Labs Bike Light');
        await productPage.selectBtnCart();
        const cartPage = await poManager.getCartPage();
        await cartPage.validateProduct("Sauce Labs Bike Light","$9.99");
        await cartPage.clickBtnCheckout();
        const checkoutInfo = await poManager.getCheckoutPage();
        await checkoutInfo.fillInformatio("pruebaN","pruebaL","0101");
        const checkoutOver = await poManager.getCheckoutOverviewPage();
        await checkoutOver.validateProductInfo("Sauce Labs Bike Light", "$9.99", "SauceCard #31337", "Free Pony Express Delivery!", "$0.80", "$10.79");
        const checkoutComplete = await poManager.getCheckoutComplete();
        checkoutComplete.validateMessageThanYou("Thank you for your order!");
        checkoutComplete.clickBtnBackHome();
        await homePage.validHeaderText();
    })
    
});
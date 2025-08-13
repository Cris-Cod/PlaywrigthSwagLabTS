import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Page } from "@playwright/test";
import { ProductPage } from "./ProductsPage";
import { DetailProductPage } from "./DetailProductPage";
import { CartPage } from "./CartPage";
import { CheckoutPage } from "./CheckoutPage";
import { CheckoutOverviewPage } from "./CheckoutOverviewPage";
import { CheckoutComplete } from "./CheckoutComplete";

export class POManager{

    page : Page;
    loginPage : LoginPage;
    homePage : HomePage;
    products : ProductPage;
    detailProduct : DetailProductPage;
    cartPage : CartPage;
    checkoutPage : CheckoutPage;
    checkoutOverPage : CheckoutOverviewPage;
    checkoutCompletePage : CheckoutComplete;


    constructor(page:Page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.homePage = new HomePage(this.page);
        this.products = new ProductPage(this.page);
        this.detailProduct = new DetailProductPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.checkoutOverPage = new CheckoutOverviewPage(this.page);
        this.checkoutCompletePage = new CheckoutComplete(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getHomePage(){
        return this.homePage;
    }

    getProductPage(){
        return this.products;
    }

    getDetailProduct(){
        return this.detailProduct;
    }

    getCartPage(){
        return this.cartPage;
    }

    getCheckoutPage(){
        return this.checkoutPage;
    }

    getCheckoutOverviewPage(){
        return this.checkoutOverPage;
    }

    getCheckoutComplete(){
        return this.checkoutCompletePage;
    }
}
module.exports = {POManager};
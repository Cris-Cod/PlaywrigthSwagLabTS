import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Page } from "@playwright/test";
import { ProductPage } from "./ProductsPage";
import { DetailProductPage } from "./DetailProductPage";
import { CartPage } from "./CartPage";

export class POManager{

    page : Page;
    loginPage : LoginPage;
    homePage : HomePage;
    products : ProductPage;
    detailProduct : DetailProductPage;
    cartPage : CartPage;

    constructor(page:Page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.homePage = new HomePage(this.page);
        this.products = new ProductPage(this.page);
        this.detailProduct = new DetailProductPage(this.page);
        this.cartPage = new CartPage(this.page);
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
}
module.exports = {POManager};
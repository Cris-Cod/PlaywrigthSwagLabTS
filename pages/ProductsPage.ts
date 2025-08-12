import { expect, Locator, Page } from "@playwright/test";

export class ProductPage {

    page: Page;
    textProduct: Locator;
    priceProduct: Locator;
    btnAddTocart: Locator;
    btnCart: Locator;
    products : Locator;

    constructor(page: Page) {
        this.page = page;
        this.textProduct = page.locator('.inventory_item_name');
        this.priceProduct = page.locator('.inventory_item_price ');
        this.btnAddTocart = page.locator('.pricebar .btn_primary');
        this.btnCart = page.locator('.shopping_cart_link');
        this.products = page.locator('.inventory_item_description');
    }

    async validateVisibleProduct(name: string) {
        const nameProducts = this.textProduct;
        const totalProducts = await nameProducts.count();
        let found: boolean = false;

        for (let i = 0; i < totalProducts; i++) {
            const text = await nameProducts.nth(i).textContent();
            if (text?.trim().toLowerCase() === name.trim().toLowerCase()) {
                await Promise.all([
                    expect(nameProducts.nth(i)).toHaveText(name),
                    expect(nameProducts.nth(i)).toBeVisible()
                ]);
                found = true;
                break;
            }
        }

        expect.soft(found).toBeTruthy();
    }

    async selectProduct(name: string) {
        const nameProducts = this.textProduct;
        const totalProducts = await nameProducts.count();
        let found: boolean = false;

        for (let i = 0; i < totalProducts; i++) {
            const text = await nameProducts.nth(i).textContent();
            if (text?.trim().toLowerCase() === name.trim().toLowerCase()) {
                nameProducts.nth(i).click();

                found = true;
                break;
            }

        }

        expect.soft(found).toBeTruthy();

    }

    async addOneProductToCart(name: string) {
        const allProducts = this.products;
        const nameProducts = this.textProduct;
        const totalProducts = await allProducts.count();
        let found: boolean = false;
        const btnToAdd = this.btnAddTocart;

        for (let i = 0; i < totalProducts; i++) {
            const text = await allProducts.nth(i).locator(nameProducts).textContent();
            if (text?.trim().toLowerCase() === name.trim().toLowerCase()) {
                await allProducts.nth(i).locator(btnToAdd).click();

                found = true;
                break;
            }

        }

        expect.soft(found).toBeTruthy();


    }

    async selectBtnCart(){
        this.btnCart.click();
    }

}
module.exports = { ProductPage };
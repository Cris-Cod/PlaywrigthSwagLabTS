import { expect, Locator, Page } from "@playwright/test";

export class DetailProductPage{

    page : Page;
    titleProduct : Locator;
    priceProduct : Locator;
    btnAddtoCart : Locator;

    constructor(page : Page){
        this.page = page;
        this.titleProduct = page.locator('.inventory_details_name');
        this.priceProduct = page.locator('.inventory_details_price');
        this.btnAddtoCart = page.locator('.btn_inventory');
    }

    async validateDetailProduct(nameProduct :string, price :string){
        await Promise.all([
            expect(this.titleProduct).toHaveText(nameProduct),
            expect(this.titleProduct).toBeVisible(),
            expect(this.priceProduct).toHaveText(price),
            expect(this.priceProduct).toBeVisible()
        ]);
    }
}
module.exports = {DetailProductPage};
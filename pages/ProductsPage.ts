import { expect, Locator, Page } from "@playwright/test";

export class ProductPage {

    page: Page;
    textProduct: Locator;
    priceProduct: Locator;
    btnAddTocart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textProduct = page.locator('.inventory_item_name');
        this.priceProduct = page.locator('.inventory_item_price ');
        this.btnAddTocart = page.locator('.btn btn_primary');
    }

    async validateVisibleProduct(name: string) {
        const nameProducts = this.textProduct;
        const totalProducts = await nameProducts.count();
        let found : boolean = false;
        
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

    async selectProduct(name: string){
        const nameProducts = this.textProduct;
        const totalProducts = await nameProducts.count();
        let found : boolean = false;

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

}
module.exports = {ProductPage};
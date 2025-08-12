import { expect, Locator, Page } from "@playwright/test";

export class CartPage{

    page : Page;
    nameProduct : Locator;
    textPrice : Locator;
    btnRemove : Locator;
    btnContinueShopping : Locator;
    btnCheckout : Locator;

    constructor(page : Page){
        this.page = page;
        this.nameProduct = page.locator('.inventory_item_name');
        this.textPrice = page.locator('.inventory_item_price');
        this.btnRemove = page.getByTestId('remove-sauce-labs-backpack');
        this.btnContinueShopping = page.getByTestId('continue-shopping');
        this.btnCheckout = page.locator('checkout');
    }


    async validateProduct(name : string, price : string){
        await this.page.waitForTimeout(1000);
        expect(this.nameProduct).toHaveText(name);
        expect(this.textPrice).toContainText(price);
    }
}
import { Locator, Page, expect } from "@playwright/test";


export class CheckoutOverviewPage{

    page : Page;
    txtNameProduct : Locator;
    txtPrice : Locator;
    txtPaymentInfo : Locator;
    txtShippingInfo : Locator;
    txtTax : Locator;
    txtTotal : Locator;
    btnFinish : Locator;

    constructor(page : Page){
        this.page = page;
        this.txtNameProduct = page.locator(".inventory_item_name");
        this.txtPrice = page.locator(".inventory_item_price");
        this.txtPaymentInfo = page.locator("//div[@class='summary_value_label'][1]");
        this.txtShippingInfo = page.locator("//div[@class='summary_value_label'][2]");
        this.txtTax = page.locator(".summary_tax_label");
        this.txtTotal = page.locator(".summary_total_label");
        this.btnFinish = page.locator(".btn_action");
    }

    async validateProductInfo(nameP : string, priceP : string, payInfo : string, shippingInfo : string, tax :string, total : string){
        const taxes = (await this.txtTax.textContent())?.trim().split(" ") ?? [];
        const totalP = (await this.txtTotal.textContent())?.trim().split(" ") ?? [];
        await Promise.all([
            expect(this.txtNameProduct).toBeVisible(),
            expect(this.txtNameProduct).toHaveText(nameP),
            expect(this.txtPrice).toBeVisible(),
            expect(this.txtPrice).toHaveText(priceP),
            expect(this.txtPaymentInfo).toBeVisible(),
            expect(this.txtPaymentInfo).toHaveText(payInfo),
            expect(this.txtShippingInfo).toBeVisible(),
            expect(this.txtShippingInfo).toHaveText(shippingInfo),
            expect(this.txtTax).toBeVisible(),
            expect(taxes.at(-1)).toBe(tax),
            expect(this.txtTotal).toBeVisible(),
            expect(totalP.at(-1)).toBe(total),

        ]);

        await this.btnFinish.click();
        
    }
}
module.exports = {CheckoutOverviewPage};
import { Locator, Page, expect } from "@playwright/test";


export class CheckoutComplete{

    page : Page;
    txtThankYou : Locator;
    btnBackHome : Locator;

    constructor(page : Page){
        this.page = page;
        this.txtThankYou = page.locator(".complete-header");
        this.btnBackHome = page.locator(".btn_primary");
    }

    //Thank you for your order!

    async validateMessageThanYou(message : string){
        await Promise.all([
            expect(this.txtThankYou).toBeVisible(),
            expect(this.txtThankYou).toHaveText(message)
        ]);
    }
    
    async clickBtnBackHome(){
        await this.btnBackHome.click();
    }
}
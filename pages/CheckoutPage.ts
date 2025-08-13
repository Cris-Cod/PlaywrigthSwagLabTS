import { Locator, Page } from "@playwright/test";


export class CheckoutPage{

    page : Page;
    txtFirstName : Locator;
    txtLastName : Locator;
    txtPostaLCode : Locator;
    btnContinue : Locator;

    constructor(page : Page){
        this.page = page;
        this.txtFirstName = page.locator("#first-name");
        this.txtLastName = page.getByPlaceholder("Last Name");
        this.txtPostaLCode = page.getByPlaceholder("Zip/Postal Code");
        this.btnContinue = page.locator("#continue");
    }

    async fillInformatio(name : string, lastName : string, code : string){
        await this.txtFirstName.fill(name);
        await this.txtLastName.fill(lastName);
        await this.txtPostaLCode.fill(code);
        await this.btnContinue.click();
    }
}
module.exports = {CheckoutPage};
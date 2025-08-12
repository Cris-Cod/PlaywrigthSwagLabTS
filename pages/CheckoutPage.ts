import { Locator, Page } from "@playwright/test";


export class CheckoutPage{

    page : Page;
    txtFirstName : Locator;
    txtLastName : Locator;
    txtPostaLCode : Locator;
    btnContinue : Locator;

    constructor(page : Page){
        this.page = page;
        this.txtFirstName = page.getByPlaceholder("First Name");
        this.txtLastName = page.getByPlaceholder("Last Name");
        this.txtPostaLCode = page.getByPlaceholder("Zip/Postal Code");
        this.btnContinue = page.getByTestId("continue");
    }

    async fillInformatio(name : string, lastName : string, code : string){
        this.txtFirstName.fill(name);
        this.txtLastName.fill(lastName);
        this.txtPostaLCode.fill(code);
        this.btnContinue.click();
    }
}
import {expect, Locator, Page} from "@playwright/test";

export class HomePage{
    
    page : Page;
    textHeader : Locator;

    constructor(page:Page){
        this.page = page;
        this.textHeader = page.locator(".app_logo");
    }

    async validHeaderText(){
        await expect(this.textHeader).toBeVisible();
    }
}
module.exports = {HomePage};
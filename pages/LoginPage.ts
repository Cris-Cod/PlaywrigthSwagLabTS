import {expect, Locator, Page} from "@playwright/test";

export class LoginPage{

    page : Page;
    userrName : Locator;
    password : Locator;
    btnLogin : Locator;
    textError : Locator;

    constructor(page: Page){
        this.page = page;
        this.userrName = page.locator("#user-name");
        this.password = page.locator("#password");
        this.btnLogin = page.locator("#login-button");
        this.textError = page.locator(".error-message-container");
    }

    async goTo(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async validLogin(user:string, pass:string){
        await this.userrName.fill(user);
        await this.password.fill(pass);
        await this.btnLogin.click();
        await this.page.waitForLoadState('networkidle');
    }

    async errorMessage(text: string){
        const text_Locator = this.textError;
        await expect(text_Locator).toHaveText(text);
    }
}
module.exports = {LoginPage};
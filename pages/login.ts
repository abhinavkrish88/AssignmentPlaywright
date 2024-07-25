import { Page } from "@playwright/test";


export default class Login {


    constructor(public page: Page) {

    }

    async clickOnSpecialHotMenu() {
        await this.page.goto('https://www.amazon.in/');
      
    }
}
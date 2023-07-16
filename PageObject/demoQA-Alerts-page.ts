import { test, type Locator, type Page } from "@playwright/test";
import { DemoQaPageBase } from "../BaseClass/demoQA-PageBase";

export class DemoQaAlerts extends DemoQaPageBase{
    readonly page: Page;
    
    constructor(page: Page){
        super(page);
        this.page = page;
    }
}
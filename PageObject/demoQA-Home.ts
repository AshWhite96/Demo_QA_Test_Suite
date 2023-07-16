import { test, type Locator, type Page } from "@playwright/test";
import { DemoQaPageBase } from "../BaseClass/demoQA-PageBase";
import { DemoQaElements } from "./demoQA-Elements-page";
import { DemoQaForms } from "./demoQA-Forms-page";
import { DemoQaAlerts } from "./demoQA-Alerts-page";
import { DemoQaWidgets } from "./demoQA-Widgets-page";
import { DemoQaInteractions } from "./demoQA-Interactions-page";

export class DemoQaHome extends DemoQaPageBase{
    readonly page: Page;
    readonly seleniumTrainingPnl: Locator;
    readonly elementsBtn: Locator;
    readonly formsBtn: Locator;
    readonly alertsBtn: Locator;
    readonly widgetsBtn: Locator;
    readonly interactionsBtn: Locator;
    
    constructor(page: Page){
        super(page);
        this.page = page;
        this.seleniumTrainingPnl = this.page.getByRole('link', { name: 'Selenium Online Training' });
        this.elementsBtn = this.page.getByRole('heading', { name: 'Elements' });
        this.formsBtn = this.page.getByRole('heading', { name: 'Forms'});
        this.alertsBtn = this.page.getByRole('heading', { name: 'Alerts, Frame & Windows'});
        this.widgetsBtn = this.page.getByRole('heading', { name: 'Widgets'});
        this.interactionsBtn = this.page.getByRole('heading', { name: 'Interactions'})

    }

    async NavigateToDemoQaHomepage(){
        await test.step("Navigating to Demo QA Homepage", async () => {
            await this.page.goto(this.GetDemoQAUrl());
        });
    };

    async ClickSeleniumTrainingHeadingPanel(){
        await test.step("Clicking selenium certification training header panel", async () =>{
            await this.seleniumTrainingPnl.click();  
        });
    };

    async ClickElementsButton(): Promise<DemoQaElements>{
        await test.step('Clicking Elements button on homepage', async () => {
            await this.elementsBtn.click();
        });
        return new DemoQaElements(this.page);
    };

    async ClickFormsButton(): Promise<DemoQaForms> {
        await test.step('Clicking Forms button on homepage', async () => {
            await this.formsBtn.click();
        });
        return new DemoQaForms(this.page);
    };

    async ClickAlertsButton(): Promise<DemoQaAlerts> {
        await test.step('Clicking Alerts button on homepage', async () => {
            await this.alertsBtn.click();
        });
        return new DemoQaAlerts(this.page);
    };

    async ClickWidgetsButton(): Promise<DemoQaWidgets> {
        await test.step('Clicking Widgets button on homepage', async () => {
            await this.widgetsBtn.click();
        });
        return new DemoQaWidgets(this.page);
    };

    async ClickInteractionsButton(): Promise<DemoQaInteractions> {
        await test.step('Clicking Interactions button on homepage', async () => {
            await this.interactionsBtn.click();
        });
        return new DemoQaInteractions(this.page);
    };


}
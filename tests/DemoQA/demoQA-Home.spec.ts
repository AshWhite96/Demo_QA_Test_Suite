import {test, expect, type Page} from '@playwright/test';
import { DemoQaHome } from '../../PageObject/demoQA-Home';
import { DemoQaElements } from '../../PageObject/demoQA-Elements-page';
import { DemoQaForms } from '../../PageObject/demoQA-Forms-page';
import { DemoQaAlerts } from '../../PageObject/demoQA-Alerts-page';
import { DemoQaWidgets } from '../../PageObject/demoQA-Widgets-page';
import { DemoQaInteractions } from '../../PageObject/demoQA-Interactions-page';


let demoQaHome: DemoQaHome;

test.describe("Demo QA Homepage Tests", () =>{

    test.step('Initial Setup - Navigation to Demo QA Homepage', async () => {
    test.beforeEach(async ({ page }) => {
            demoQaHome = new DemoQaHome(page);
            await demoQaHome.NavigateToDemoQaHomepage();

    });
});

    test('User_Can_Click_Header_To_Navigate_To_Tools_QA_Page', async ({ page }) => {
        const popupPromise = page.waitForEvent('popup');
        await demoQaHome.ClickSeleniumTrainingHeadingPanel();
        const popup = await popupPromise;
        await expect(popup.url()).toEqual('https://www.toolsqa.com/selenium-training/');
    });
    
    test('User_Can_Click_Elements_Button_And_Navigate_To_Elements_Page', async ({page}) => {
        const elementsPage: DemoQaElements = await demoQaHome.ClickElementsButton();

        await expect(elementsPage.pageTitle).toHaveText("Elements");
        await expect(elementsPage.page).toHaveURL(elementsPage.GetDemoQAElementsUrl());
    });

    test('User_Can_Click_Forms_Button_And_Navigate_To_Forms_Page', async ({page}) => {
        const formsPage: DemoQaForms = await demoQaHome.ClickFormsButton();

        await expect(formsPage.pageTitle).toHaveText("Forms");
        await expect(formsPage.page).toHaveURL(formsPage.GetDemoQAFormsUrl());
    });

    test('User_Can_Click_Alerts_Button_And_Navigate_To_Alerts_Page', async ({ page }) => {
        const alertsPage: DemoQaAlerts = await demoQaHome.ClickAlertsButton();

        await expect(alertsPage.pageTitle).toHaveText("Alerts, Frame & Windows");
        await expect(alertsPage.page).toHaveURL(alertsPage.GetDemoQAAlertsUrl());
    });

    test('User_Can_Click_Widgets_Button_And_Navigate_To_Widgets_Page', async ({ page }) => {
        const widgetsPage: DemoQaWidgets = await demoQaHome.ClickWidgetsButton();

        await expect(widgetsPage.pageTitle).toHaveText("Widgets");
        await expect(widgetsPage.page).toHaveURL(widgetsPage.GetDemoQAWidgetsUrl());
    });

    test('User_Can_Click_Interactions_Button_And_Navigate_To_Interactions_Page', async ({ page }) => {
        const interactionsPage: DemoQaInteractions = await demoQaHome.ClickInteractionsButton();

        await expect(interactionsPage.pageTitle).toHaveText("Interactions");
        await expect(interactionsPage.page).toHaveURL(interactionsPage.GetDemoQAInteractionsUrl());
    });

    test('User_Can_Click_BookStoreApp_Button_And_Navigate_To_BookStoreApp_Page', async ({ page }) => {
        
    }); 

    test.afterEach(async ({page}, testInfo) =>{
        await test.step('Generating screenshot at assertion step', async () => {
            await page.screenshot({ path: './screenshots/' + testInfo.title +'_screenshot.png' });
        })        
    });

});
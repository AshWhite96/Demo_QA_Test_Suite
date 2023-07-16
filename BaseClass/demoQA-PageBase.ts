import { test, expect, type Page, Locator} from '@playwright/test';

const environment: string = 'Dev';
const toolsQaUrl: string = 'https://www.toolsqa.com/selenium-training/';
export class DemoQaPageBase
{
    readonly page: Page;
    readonly pageTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.pageTitle = page.locator('.main-header');
    }

    GetDemoQAUrl() :string{
        switch(environment){
            case "Dev": 
                return "https://demoqa.com/";
            default:
                return "";
        }
    }

    GetDemoQAElementsUrl(): string{
        switch(environment){
            case "Dev":
                return "https://demoqa.com/elements";
            default:
                return ""; 
        }
    }

    GetDemoQAFormsUrl(): string{
        switch(environment){
            case "Dev":
                return "https://demoqa.com/forms";
            default:
                return ""; 
        };
    };

    GetDemoQAAlertsUrl(): string{
        switch(environment){
            case "Dev":
                return "https://demoqa.com/alertsWindows";
            default:
                return ""; 
        };
    };

    GetDemoQAWidgetsUrl(): string{
        switch(environment){
            case "Dev":
                return "https://demoqa.com/widgets";
            default:
                return ""; 
        };
    };

    GetDemoQAInteractionsUrl(): string{
        switch(environment){
            case "Dev":
                return "https://demoqa.com/interaction";
            default:
                return ""; 
        };
    };
}
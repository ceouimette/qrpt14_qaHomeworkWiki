import { Builder, By, Capabilities, until, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require("chromedriver");

export class employeeManager {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
    nameInput: By = By.name("nameEntry")
    titleInput: By = By.name(`titleEntry`);
    addEmployee: By = By.name("addEmployee");
    newEmployee: By = By.xpath('//li[text() = "New Employee"]');
    bernice: By = By.name("employee1");
    phillip: By = By.name("employee3");
    saveButton: By = By.id("saveBtn");

    constructor(driver:WebDriver){
        this.driver =driver;
    };
    async navigate(){
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.bernice)); 
    };
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy)); 
        let element = await this.driver.findElement(elementBy); 
        await this.driver.wait(until.elementIsVisible(element)); 
        return element;
    };
    async sendKeys(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy); 
        await input.clear(); 
        return input.sendKeys(keys);
    };
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return (await this.driver.findElement(elementBy)).click(); 
    };
};
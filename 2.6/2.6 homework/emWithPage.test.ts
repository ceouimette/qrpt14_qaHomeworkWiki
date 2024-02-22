import { Builder, Capabilities, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver =require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

import { employeeManager } from "./employeeManagerPage";
const employMan = new employeeManager(driver);

test("employee manager works", async () => {
    await employMan.navigate();
    await employMan.click(employMan.bernice);
    await employMan.sendKeys(employMan.nameInput, "Bob Teller");
    await employMan.click(employMan.saveButton);
    //^ changeing bernice name
    await employMan.click(employMan.phillip);
    await employMan.sendKeys(employMan.titleInput, "CEO");
    await employMan.click(employMan.saveButton);
    //^ changing phillip title
    await employMan.click(employMan.addEmployee);
    await employMan.click(employMan.newEmployee);
    await employMan.sendKeys(employMan.nameInput, "ReinHart");
    await employMan.sendKeys(employMan.titleInput, "Tank");
    await employMan.click(employMan.saveButton);
    //^ adding new employee
    await employMan.driver.sleep(10000);
    await employMan.driver.quit();
});
import {BasePage} from '../basePage/BasePage.js'

/**
 * LoginPage class represents the login page of the OrangeHRM application.
 * Extends BasePage to inherit common page functionality.
 * Manages all interactions and locators related to the login page.
 */
export class LoginPage extends BasePage {

    /**
     * Constructor initializes all the locators for the login page elements.
     * @param {Page} page - The Playwright page object
     */
    constructor(page) {
        // Call parent class (BasePage) constructor to initialize the page object
        // This allows access to inherited methods like click() from BasePage
        super(page)
        this.loginHeaderText = this.page.getByRole('heading',{name : "Login"})
        this.userName = this.page.getByPlaceholder('Username')
        this.passWord = this.page.getByPlaceholder('Password')
        this.loginBtn = this.page.getByRole('button', { name: 'Login' })
        this.upgradeBtn = this.page.getByRole('button', { name: 'Upgrade' })
        this.ErrorMessageWhenBothFieldsBlank = this.page.getByText("Required").first()
        this.ErrorMessageWhenInvalidCredential = this.page.getByText("Invalid credentials")
        this.leftsideMenuList = this.page.locator('aside.oxd-sidepanel li')
    }

    async validatePageHeading(){
        return await this.getTextFromLocator(this.loginHeaderText);
    }

    /**
     * Performs login by filling username and password fields and clicking login button.
     * @param {string} username - The username to enter
     * @param {string} password - The password to enter
     */
    async login(username, password) {
        // Fill username field
        await this.userName.fill(username);
        // Fill password field
        await this.passWord.fill(password);
        // Click login button
        await this.click(this.loginBtn)
    }
    /**
     * Retrieves the text content of the Upgrade button.
     * @returns {Promise<string>} The text content of the upgrade button
     */
    async getUpgradeBtnText() {
        const upgradebtn = await this.upgradeBtn.textContent();
        return upgradebtn;
    }

    /**
     * Retrieves error message text from a specified locator.
     * @param {Locator} locator - The locator element to extract text from
     * @returns {Promise<string>} The text content of the error message
     */
    async getErrorMessage(locator) {
        return await locator.textContent();
    }

    /**
     * Iterates through all menu items in the left sidebar and clicks on the 'Admin' menu.
     * Loops through each menu item, trims whitespace, and matches the 'Admin' text.
     */
    async getLeftSideMenuListAndClickOnSpecificMenu() {
        // Get total count of menu items
        let counts = await this.leftsideMenuList.count();
        console.log(counts)
        // Iterate through each menu item
        for (let i = 0; i < counts; i++) {
            // Get menu name and trim whitespace
            let menuname = await this.leftsideMenuList.nth(i).textContent()
            let finalName = menuname.trim()
            console.log(`Menu ${i} ,${finalName}`)
            // Click on Admin menu when found
            if (finalName === 'Admin') {
                await this.leftsideMenuList.nth(i).click()
                break
            }
        }
    }
}   
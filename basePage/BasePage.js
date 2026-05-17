/**
 * BasePage class serves as a base class for all page objects.
 * Contains common functionality and methods shared across all pages.
 */
export class BasePage {
    /**
     * Constructor initializes the base page with the Playwright page object.
     * @param {Page} page - The Playwright page object
     */
    constructor(page) {
        this.page = page;
    }

    /**
     * Performs a click action on a given locator element.
     * @param {Locator} locator - The element to click
     */
    async click(locator) {
        await locator.click()
    }

    async getTextFromLocator(locator) {
        return await locator.textContent()
    }

}
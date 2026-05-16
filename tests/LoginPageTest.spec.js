import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'

/**
 * Test suite for Login functionality of OrangeHRM application.
 * Contains tests for valid credentials, empty fields, and invalid credentials scenarios.
 */
test.describe("Login in test cases", async () => {
    let loginpage
    // Before each test, navigate to the login page and initialize LoginPage object
    test.beforeEach("Go to the Test url", async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        loginpage = new LoginPage(page);
    })

    /**
     * Test: Verify successful login with valid admin credentials.
     * Steps: Login with valid credentials, verify Upgrade button appears, click Admin menu
     */
    test("Verify login with valid credential", async ({ page }) => {
        // Login with valid credentials
        await loginpage.login("Admin", "admin123")
        // Verify Upgrade button is displayed
        const getUpgradeText = await loginpage.getUpgradeBtnText()
        expect(getUpgradeText).toBe(" Upgrade")
        // Navigate to Admin menu
        await loginpage.getLeftSideMenuListAndClickOnSpecificMenu()
    })

    /**
     * Test: Verify error message when login fields are left blank.
     * Steps: Attempt login without credentials, verify 'Required' error message
     */
    test("Verify login with without provide username and password credential", async ({ page }) => {
        // Attempt login without entering credentials
        await loginpage.login("", "")
        // Verify error message for required fields
        const getErrorTextMsg = await loginpage.
        getErrorMessage(loginpage.ErrorMessageWhenBothFieldsBlank);
        expect(getErrorTextMsg).toBe("Required")
    })

    /**
     * Test: Verify error message when logging in with invalid credentials.
     * Steps: Attempt login with wrong username/password, verify 'Invalid credentials' error
     */
    test("Verify login with invalid user name and password", async ({ page }) => {
        // Attempt login with invalid credentials
        await loginpage.login("abc", "abc")
        // Verify error message for invalid credentials
        const getErrorTextMsg = await loginpage.
        getErrorMessage(loginpage.ErrorMessageWhenInvalidCredential)
        expect(getErrorTextMsg).toBe("Invalid credentials")
    })

})




import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'


test.describe("Login in test cases", async () => {
    let loginpage
    test.beforeEach("Go to the Test url", async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        loginpage = new LoginPage(page);
    })

    test("Verify login with valid credential", async ({ page }) => {

        await loginpage.login("Admin", "admin123")
        const getUpgradeText = await loginpage.getUpgradeBtnText()
        expect(getUpgradeText).toBe(" Upgrade")
        await loginpage.getLeftSideMenuListAndClickOnSpecificMenu()

    })

    test("Verify login with without provide username and password credential", async ({ page }) => {
        // const loginpage = new LoginPage(page);
        await loginpage.login("", "")
        const getErrorTextMsg = await loginpage.
        getErrorMessage(loginpage.ErrorMessageWhenBothFieldsBlank);
        expect(getErrorTextMsg).toBe("Required")

    })

    test("Verify login with invalid user name and password", async ({ page }) => {
        //const loginpage = new LoginPage(page);
        await loginpage.login("abc", "abc")
        const getErrorTextMsg = await loginpage.
        getErrorMessage(loginpage.ErrorMessageWhenInvalidCredential)
        expect(getErrorTextMsg).toBe("Invalid credentials")
    })

})




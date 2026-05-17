import { test, expect } from '@playwright/test'
import { ObjectManager } from '../objectManager/ObjectManager.js'



test("Verify that dashboard text visbile on after login on dashboard", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    let objmanager = new ObjectManager(page);
    let loginpage = objmanager.getLoginPage()
    let dashboard = objmanager.getDashboardPage();


    //verify the dashboard text
    await loginpage.login("Admin", "admin123")
    const dashboardText = await dashboard.verifyDashboardTextAfterLogin();
    console.log(dashboardText)
    expect(dashboardText).toBe("Dashboard")
})

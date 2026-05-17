import { BasePage } from '../basePage/BasePage.js'
export class DashBoardPage extends BasePage {
    constructor(page) {
        super(page)
        this.dashboardText = this.page.getByRole('heading', { name: 'Dashboard' })

    }

    async verifyDashboardTextAfterLogin() {
        return await this.getTextFromLocator(this.dashboardText);
    }
}
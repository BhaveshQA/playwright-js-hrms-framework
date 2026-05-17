import { LoginPage } from '../pages/LoginPage.js'
import { DashBoardPage } from '../pages/DashBoardPage.js'


export class ObjectManager {
    constructor(page) {
        this.page = page
    }


    getLoginPage() {
        return new LoginPage(this.page)
    }

    getDashboardPage() {
        return new DashBoardPage(this.page)
    }

}
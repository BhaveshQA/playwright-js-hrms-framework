import {BasePage} from '../basePage/BasePage.js'
export class LoginPage  extends BasePage{

    constructor(page) {
        super(page)
       // this.page = page;
        this.userName = this.page.getByPlaceholder('Username')
        this.passWord = this.page.getByPlaceholder('Password')
        this.loginBtn = this.page.getByRole('button', { name: 'Login' })
        this.upgradeBtn = this.page.getByRole('button', { name: 'Upgrade' })
        this.ErrorMessageWhenBothFieldsBlank = this.page.getByText("Required").first()
        this.ErrorMessageWhenInvalidCredential = this.page.getByText("Invalid credentials")
        this.leftsideMenuList = this.page.locator('aside.oxd-sidepanel li')
    }

    async login(username, password) {

        await this.userName.fill(username);
        await this.passWord.fill(password);
        //await this.loginBtn.click();
        await this.click(this.loginBtn)

    }
    async getUpgradeBtnText() {
        const upgradebtn = await this.upgradeBtn.textContent();
        return upgradebtn;
    }

    async getErrorMessage(locator) {
        // const errorMsg = await this.ErrorMessageWhenBothFieldsBlank.textContent()
        return await locator.textContent();
    }

    async getLeftSideMenuListAndClickOnSpecificMenu() {
        let counts = await this.leftsideMenuList.count();
        console.log(counts)
        for (let i = 0; i < counts; i++) {
            let menuname = await this.leftsideMenuList.nth(i).textContent()
            let finalName = menuname.trim()
            console.log(`Menu ${i} ,${finalName}`)
            if (finalName === 'Admin') {
                await this.leftsideMenuList.nth(i).click()
                break
            }
        } 

        /**  let elementList = await this.leftsideMenuList.all()
 
         for ( const element of elementList) {
             const text = await element.textContent();
             console.log(text);
         } **/

    }
}   
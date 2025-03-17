import estimateActions from '../estimate/estimate.actions'
import loginPages from '../../page-objects/login/login.pages'
import authActions from '../authentication/auth.actions'
import { scrollToSelector } from '../../utils/scroll'
import { userModel } from '../../interface/user.model'

class LoginActions {
  constructor() {

  }

  public async performLogin(user: userModel) {
    await this.clickLoginButton()
    await this.clickPhoneButton()
    await this.fillPhoneInput(user.phone)
    await this.clickContinueLoginButton()
    await authActions.fillOTPAuth(user.OTPAuth)
  }


  public async performLogout() {
    await estimateActions.clickEstimatesButton()
    await this.clickEngineButton()
    await scrollToSelector("~logout, Sign out")
    await browser.pause(1000)
    await this.clickLogoutButton()
    await browser.pause(3000)
  }

  public async fillPhoneInput(phone: string) {
    await loginPages.inputLoginPhone.setValue(phone)
  }
  public async clickLoginButton() {
    await loginPages.loginButton.click()
  }

public async clickPhoneButton() {
    await loginPages.phoneButton.click()
}
  public async clickContinueLoginButton() {
    await loginPages.continueLoginButton.click()
  }

  public async clickEngineButton() {
    await loginPages.engineButton.click()
  }

  public async clickLogoutButton() {
    await loginPages.logoutButton.click()
  }

  public async checkUserLogout() {
    browser.pause(1000)
    expect(await loginPages.phoneButton.isDisplayed()).toBeTruthy()
  }
}
export default new LoginActions()

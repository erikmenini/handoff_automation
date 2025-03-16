import { userModel } from '../../interface/user.model'
import onboardingPage from '../../page-objects/onboarding/onboarding.pages'
import homePages from '../../page-objects/home/home.pages'
import authActions from '../authentication/auth.actions'


class OnboardingActions {
  constructor() {

  }

  public async createAccess(user :userModel
  ) {
    await this.fillFullName(user.name)
    await this.fillCompany(user.company)
    await this.fillEmail(user.email)
    await this.fillPhone(user.phone)
    await this.clickGetStartedButton()
    await authActions.fillOTPAuth(user.OTPAuth)
  }


    public async fillFullName(fullName: string) {
        await onboardingPage.inputFullName.setValue(fullName)
    }
    public async fillCompany(company: string) {
        await onboardingPage.inputCompany.setValue(company)
    }
    public async fillEmail(email: string) {
        await onboardingPage.inputEmail.setValue(email)
    }       
    public async fillPhone(phone: string) {
        await onboardingPage.inputPhone.setValue(phone)
    }
    public async clickGetStartedButton() {
        await onboardingPage.buttonGetStarted.click()
    }
}
export default new OnboardingActions()

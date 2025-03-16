import { $ } from '@wdio/globals'

class OnboardingPage {
  public get inputFullName() {
    return $('android=new UiSelector().text("Full Name *")')
  }
  public get inputCompany() {
    return $('android=new UiSelector().text("Company *")')
  }
  public get inputEmail() {
    return $('android=new UiSelector().text("Email *")')
  }
  public get inputPhone() {
    return $('android=new UiSelector().text("Phone *")')
  }
  public get buttonGetStarted() {
    return $('~Get Started Free')
  }

}

export default new OnboardingPage()

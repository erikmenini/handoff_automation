import { $ } from '@wdio/globals'

class AuthPage {
  public get inputOTPAuth() {
    return $('android=new UiSelector().className("android.widget.EditText")')
  }
}

export default new AuthPage()

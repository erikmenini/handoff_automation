import authPage from '../../page-objects/authentication/auth.pages'

class AuthActions {
  constructor() {}
    public async fillOTPAuth(OTP: string) {
        await authPage.inputOTPAuth.click()
        await driver.execute('mobile: type', {text: OTP})
    }
}
export default new AuthActions()

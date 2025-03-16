//import loginActions from '../../steps/login/login.actions'
import onboardingActions from '../../steps/onboarding/onboarding.actions'
import homeActions from '../../steps/home/homeActions'
import loginActions from '../../steps/login/login.actions'
import { activeUser } from '../../data/user'

describe('Onboarding feature', () => {
  context('Create a new user', () => {

    it('Create a new user and logout', async () => {
        await onboardingActions.createAccess(activeUser())
        await homeActions.checkHomePage()
        await loginActions.performLogout()
        await loginActions.checkUserLogout()
    })
  })
})

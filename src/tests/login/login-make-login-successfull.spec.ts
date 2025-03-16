import loginActions from '../../steps/login/login.actions'
import homeActions from '../../steps/home/homeActions'
import { activeUser } from '../../data/user'

describe('Onboarding feature', () => {
  context('Create a new user', () => {

    it('Create a new user and logout', async () => {
        await loginActions.performLogin(activeUser())
        await homeActions.checkHomePage()
    })
  })
})

import loginActions from '../../steps/login/login.actions'
import { activeUser } from '../../data/user'
import estimateActions from '../../steps/estimate/estimate.actions'

describe('Onboarding feature', () => {
  context('Create a new user', () => {

    it('Create a new user and logout', async () => {
        await loginActions.performLogin(activeUser())
        await estimateActions.checkEstimatesPage()
    })
  })
})

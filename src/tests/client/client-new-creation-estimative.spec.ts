import loginActions from '../../steps/login/login.actions'
import { activeUser } from '../../data/user'
import clientActions from '../../steps/client/client.actions'
import { client } from '../../data/client'
import estimateActions from '../../steps/estimate/estimate.actions'
import { bathroomEstimate } from '../../data/estimate'

describe('Client feature', () => {
  context('Create a client', () => {

    it('Create a new client, estimative and logout', async () => {
        await loginActions.performLogin(activeUser())
        await clientActions.clickClientButtonMenu()
        await clientActions.createNewClient(client())
        await estimateActions.clickAddEstimateButton()
        await estimateActions.createEstimate(bathroomEstimate())
        await estimateActions.clickReviewEstimateButton()
        await estimateActions.clickCreateProposalButton()
        await estimateActions.clickPreviewSendButton()
        await estimateActions.clickSendProposalButton()
        await estimateActions.clickCheckboxEmail()
        await estimateActions.clickSendButton()
        await estimateActions.clickEstimateButton()
        await estimateActions.checkProposalStatus()
        await estimateActions.clickArrowBackButton()
        await estimateActions.clickArrowBackButton()
        await loginActions.performLogout()
        await loginActions.checkUserLogout()
    })
  })
})

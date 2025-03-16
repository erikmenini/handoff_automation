import loginActions from '../../steps/login/login.actions'
import { activeUser } from '../../data/user'
import estimateActions from '../../steps/estimate/estimate.actions'
import { bathroomEstimate, bathroomEstimateEdit} from '../../data/estimate'
//import { client } from '../../data/client'

describe('Estimate feature', () => {
  context('Create a estimative', () => {

    it('Create a new estimative and logout', async () => {
        await loginActions.performLogin(activeUser())
        await estimateActions.createEstimate(bathroomEstimate())
        await estimateActions.editEstimate(bathroomEstimateEdit())
        await estimateActions.clickReviewEstimateButton()
        await estimateActions.clickCreateProposalButton()
        await estimateActions.clickPreviewSendButton()
        await estimateActions.clickSendProposalButton()
        await estimateActions.searchClient("Erik")
        await estimateActions.checkProposalStatus()
        await estimateActions.clickArrowBackButton()
        await loginActions.performLogout()
        await loginActions.checkUserLogout()
    })
  })
})

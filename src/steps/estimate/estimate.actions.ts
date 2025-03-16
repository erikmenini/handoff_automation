import { clientModel } from '../../interface/client.model'
import { estimateModel } from '../../interface/estimate.model'
import estimatePages from '../../page-objects/estimate/estimate.pages'

class estimateActions {
  constructor() {}
  public async clickEstimatesButton() {
    await estimatePages.estimatesMenuButton.click()
  }
  public async checkEstimatesPage() {
    expect(await estimatePages.estimateTitle.isDisplayed()).toBeTruthy()
}
  public async clickNewButton(){
    await estimatePages.newButton.click()
  }
  public async createEstimate(input: estimateModel) {  
    await this.clickNewButton()
    await this.fillInputHandoffAI(input.message)
    await this.clickArrowbutton()
  }

  public async editEstimate(inputEdit: estimateModel) {
    await browser.pause(10000)
    await this.fillInputHandoffAI(inputEdit.message)
    await this.clickArrowbutton()
  }

  public async clickReviewEstimateButton() {
    await browser.pause(15000)
    await estimatePages.reviewEstimateButton.click()
  }

  public async clickArrowbutton() {
    await estimatePages.arrowButton.click()
  }

  public async fillInputHandoffAI(message: string) {
    await estimatePages.inputHandoffAI.click()
    await (await estimatePages.inputHandoffAI).setValue(message)
  }

  public async clickCreateProposalButton() {
    await estimatePages.createProposalButton.click()
  }

  public async clickPreviewSendButton() {
    await estimatePages.previewSendButton.click()
  }

  public async clickSendProposalButton() {
    await estimatePages.sendProposalButton.click()
  }


  public async searchClient(clientName: string){
    await estimatePages.inputSearchClient.click()
    await estimatePages.inputSearchClient.setValue(clientName)
    await estimatePages.clientSelect.click()
    await estimatePages.emailCheckbox.click()
    await estimatePages.sendButton.click()
    await estimatePages.estimateButton.click()
  }

  public async checkProposalStatus() {
    const statusText = await estimatePages.statusLabel.getText()
    expect(statusText).toEqual('Proposal')
  }

  public async clickArrowBackButton() {
    await estimatePages.arrowBackbottom.click()
  }

}
export default new estimateActions()

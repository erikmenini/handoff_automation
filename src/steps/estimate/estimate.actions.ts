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
    await this.fillInputHandoffAI(input.message)
    await this.clickArrowbutton()
  }

  public async clickAddEstimateButton() {
    await estimatePages.addEstimateButton.click()
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
    await browser.pause(2000)
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

  public async clickCheckboxEmail(){
    await estimatePages.emailCheckbox.click()
  }

  public async fillInputSearchCient(clientName: string){
    await estimatePages.inputSearchClient.click()
    await estimatePages.inputSearchClient.setValue(clientName)
  }

  public async clickClientSelect(){
    await estimatePages.clientSelect.click()
  }

  public async clickSendButton(){
    await estimatePages.sendButton.click()
  }

  public async clickEstimateButton(){
    await estimatePages.estimateButton.click()
  }



  public async searchClient(clientName: string){
    await this.fillInputSearchCient(clientName)
    await this.clickClientSelect()
    await this.clickCheckboxEmail()
    await this.clickSendButton()
    await this.clickEstimateButton()
  }

  public async checkProposalStatus() {
    const statusText = await estimatePages.statusLabel.getText()
    expect(statusText).toEqual('Proposal')
  }

  public async clickArrowBackButton() {
    await browser.pause(1000)
    await estimatePages.arrowBackbottom.click()
  }

}
export default new estimateActions()

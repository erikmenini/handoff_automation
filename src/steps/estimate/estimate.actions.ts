import estimatePages from '../../page-objects/estimate/estimate.pages'

class estimateActions {
  constructor() {

  }
  public async clickEstimatesButton() {
    await estimatePages.estimatesButton.click()
  }
  public async checkEstimatesPage() {
    expect(await estimatePages.estimateTitle.isDisplayed()).toBeTruthy()
}
}
export default new estimateActions()

import homePages from '../../page-objects/home/home.pages'

class HomeActions {
  constructor() {

  }
  public async clickEstimatesButton() {
    await homePages.estimatesButton.click()
  }
  public async checkHomePage() {
    expect(await homePages.estimateTitle.isDisplayed()).toBeTruthy()
}
}
export default new HomeActions()

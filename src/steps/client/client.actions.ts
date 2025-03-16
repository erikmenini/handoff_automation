import { clientModel } from '../../interface/client.model'
import clientPage from '../../page-objects/client/client.pages'

class ClientActions {
  constructor() {}
    public async clickClientButtonMenu() {
      await clientPage.clientMenuButton.click()
    }

    public async clickNewClientButton() {
      await clientPage.newClient.click()
    }

    public async fillClientName(clientName: string) {
      await clientPage.nameInput.setValue(clientName)
    }

    public async fillClientEmail(clientEmail: string) {
      await clientPage.emailInput.setValue(clientEmail)
    }

    public async fillClientPhone(clientPhone: string) {
      await clientPage.phoneInput.setValue(clientPhone)
    }

    public async fillClientAddress(clientAddress: string) {
      await clientPage.AddressInput.setValue(clientAddress)
    }

    public async clickSaveButton() {
      await clientPage.saveButton.click()
    }

    public async createNewClient(client:clientModel) {
      await this.clickNewClientButton()
      await this.fillClientName(client.name)
      await this.fillClientEmail(client.email)
      await this.fillClientPhone(client.phone)
      await this.fillClientAddress(client.address)
      await this.clickSaveButton()
    }
}
export default new ClientActions()

import { $ } from '@wdio/globals'

class ClientPage {
  public get clientMenuButton() {
    return $('~Clients')
  }

  public get newClient(){
    return $('~add, New')
  }

  public get nameInput(){
    return $('android=new UiSelector().text("Enter a name")')
  }

  public get emailInput(){
    return $('android=new UiSelector().text("Enter an email")')
  }

  public get phoneInput(){
    return $('android=new UiSelector().text("Enter a phone number")')
  }

  public get AddressInput(){
    return $('android=new UiSelector().text("Search for an address")')
  }

  public get saveButton(){
    return $('~Save')
  }

}

export default new ClientPage()

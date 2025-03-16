import { $ } from '@wdio/globals'

class HomePage {
  public get estimatesButton(){
    return $('~Estimates')
  }
  public get estimateTitle(){
    return $('android=new UiSelector().text("Estimates").instance(0)')
  }

}

export default new HomePage()

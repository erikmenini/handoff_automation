import { $ } from '@wdio/globals'

class HomePage {
  public get estimatesMenuButton(){
    return $('~Estimates')
  }
  public get estimateTitle(){
    return $('android=new UiSelector().text("Estimates").instance(0)')
  }
  public get inputHandoffAI(){
    return $('android=new UiSelector().text("Use Handoff AI")')
  }
  public get arrowButton(){
    return $('~arrow_upward')
  }
  public get reviewEstimateButton(){
    return $('~Review estimate')
  }
  public get newButton(){
    return $('~add, New')
  }
  public get createProposalButton(){
    return $('android=new UiSelector().text("Create proposal")')
  }

  public get previewSendButton(){
    return $('~Preview & Send')
  } 

  public get sendProposalButton(){
    return $('~Send proposal')
  }

  public get inputSearchClient(){
    return $('android=new UiSelector().text("Search for a Client")')
  }

  public get clientSelect(){
    return $('android=new UiSelector().className("android.view.ViewGroup").instance(42)')
  }

  public get emailCheckbox(){
    return $('android=new UiSelector().text("").instance(1)')
  }
  public get sendButton(){
    return $('~Send')
  }

  public get estimateButton(){
    return $('~Estimate')
  }

  public get statusLabel(){
    return $('android=new UiSelector().text("Proposal").instance(1)')
  }

  public get arrowBackbottom() {
    return $('~arrow_back')
  }
}

export default new HomePage()

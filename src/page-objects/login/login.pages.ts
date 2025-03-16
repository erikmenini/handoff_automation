import { $ } from '@wdio/globals'

class LoginPage {
    public get engineButton() {
        return $('android=new UiSelector().description("settings")')
    }
    public get logoutButton(){
        return $('~logout, Sign out')
    }
    public get logoutScroll(){
        return $('logout, Sign out')
    }
    public get phoneButton(){
        return $('~Phone')
    }
    public get loginButton(){
        return $('android=new UiSelector().text("Log in")')
    }
    public get continueLoginButton(){
        return $('~Continue')
    }
    public get inputLoginPhone(){
        return $('android=new UiSelector().resourceId("text-input-outlined")')
    }

}

export default new LoginPage()

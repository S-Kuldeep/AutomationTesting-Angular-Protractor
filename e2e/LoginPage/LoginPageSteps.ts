import { ApploginPage } from './app.login-po';

export class LoginPageSteps{
    _loginpage:ApploginPage;
    constructor(){
        this._loginpage=new ApploginPage();
    }
    doLogin():void{
        this._loginpage.navigateTo();
        this._loginpage.enterUserName();
        this._loginpage.enterPassword();
        this._loginpage.ClickLogin();
    }
}
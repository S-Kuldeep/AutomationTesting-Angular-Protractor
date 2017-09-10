import { LoginPageSteps } from './LoginPageSteps';
import { browser } from "protractor";
import { ApploginPage } from "./app.login-po";


describe('sports-site App', () => {
  let _loginPageSteps: LoginPageSteps;

  beforeEach(() => {
    this._loginPageSteps = new LoginPageSteps();
  });

  it('Login', () => {
    this._loginPageSteps.doLogin();
    expect(browser.getCurrentUrl()).toContain('home');
  });
});

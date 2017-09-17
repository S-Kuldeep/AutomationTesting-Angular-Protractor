import { LoginPageSteps } from './LoginPageSteps';
import { browser } from "protractor";
import { ApploginPage } from "./app.login-po";


describe('Login Test Suite', () => {
  let _loginPageSteps: LoginPageSteps;

  beforeEach(() => {
    this._loginPageSteps = new LoginPageSteps();
  });

  it('Login', () => {
    this._loginPageSteps.doLogin();
    expect(browser.getCurrentUrl()).toContain('home');
  });
});

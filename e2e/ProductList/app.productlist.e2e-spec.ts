import { LoginPageSteps } from '../LoginPage/LoginPageSteps';
import { browser } from "protractor";
import { AppProductListPage } from "./app.productlist-po";


describe('sports-site App', () => {
  let _loginPageSteps: LoginPageSteps;
  let _AppProductListPage:AppProductListPage;
  
  beforeEach(() => {
    this._loginPageSteps = new LoginPageSteps();
    this._AppProductListPage=new AppProductListPage();
    this._loginPageSteps.doLogin();
  });

  it('NavigateProductList', () => {
    this._AppProductListPage.ClickproductlistLink();
    expect(browser.getCurrentUrl()).toContain('product');
  });
  it('SearchProductListByName', () => {
    this._AppProductListPage.ClickproductlistLink();
    this._AppProductListPage.EnterproductName();
    this._AppProductListPage.ClickproductlistSearch();
    expect(this._AppProductListPage.getProductListCount()).toEqual(5);
  });
});

import { LoginPageSteps } from '../LoginPage/LoginPageSteps';
import { browser } from "protractor";
import { AppProductListPage } from "./app.productlist-po";


describe('sports-site App', () => {
  let _loginPageSteps: LoginPageSteps;
  let _AppProductListPage:AppProductListPage;
  
  beforeEach(() => {
    this._loginPageSteps = new LoginPageSteps();
    this._AppProductListPage=new AppProductListPage();
   // this._loginPageSteps.doLogin();
  });

  it('NavigateProductList', () => {
    this._AppProductListPage.ClickproductlistLink();
    expect(browser.getCurrentUrl()).toContain('product');
  });
  it('SearchProductListByName', () => {
    let expectedProductList:string[]=[ 'A', 'B', 'C' ];

    //this._AppProductListPage.ClickproductlistLink();

    this._AppProductListPage.EnterproductName();

    this._AppProductListPage.ClickproductlistSearch();

    this._AppProductListPage.getProductListCount().then(function(count){
      //first assert to check product count
      expect(count).toEqual(expectedProductList.length);
    });

    this._AppProductListPage.getProductListItems().then(function(items){
      //second assert to check product items
      expect(items).toEqual(expectedProductList);
    });
  });
});

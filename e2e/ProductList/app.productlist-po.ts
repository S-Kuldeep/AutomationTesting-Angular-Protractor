import { browser, by, element, Key, protractor } from 'protractor';

export class AppProductListPage {
  ClickproductlistLink(): void {
    var productlistLink = element(by.id("productList"));
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(productlistLink), 10000)
      .then(function () {
        productlistLink.click();
      })
  }
  EnterproductName(): void {
    element(by.id("productName")).sendKeys("SPOT");
  }
  ClickproductlistSearch(): void {
    var productsearchbtn = element(by.id("btnSearch"));
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(productsearchbtn), 10000)
      .then(function () {
        productsearchbtn.click();
      })
  }
  getProductListCount():number{
    let productlist:string[];
    var products=element(by.className("productlist"));
    return productlist.length;
  }
}


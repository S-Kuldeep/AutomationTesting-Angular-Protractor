import { browser, by, element, Key, protractor, ElementFinder, $ } from 'protractor';

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
  getProductListCount(){
   return browser.wait(this.checkIfProductLoaded(".productlist"), 10000).then(function(){
       return element.all(by.css(".productlist")).count()
    });
  }  
  getProductListItems(){
   return browser.wait(this.checkIfProductLoaded(".productlist"), 10000).then(function(){
       return element.all(by.css(".productlist")).map(function(element,index){
          return element.getText();
       });
   });
  }
 checkIfProductLoaded(cssname:string){
    var elements=element.all(by.css(cssname))
    return elements.count().then(function (elementcount){
        return elementcount > 0;
    })
  }                               
}  


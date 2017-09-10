import { browser, by, element,Key,protractor } from 'protractor';

export class ApploginPage {
  navigateTo():void {
   browser.get('/');
  }
  enterUserName():void{
    element(by.id("username")).sendKeys("kuldeepbit@gmail.com");
  }
  enterPassword():void{
    element(by.id("password")).sendKeys("kuldeepbit@gmail.com");
  }
  ClickLogin():void{
    var button=element(by.id("enter"));
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(button), 10000)
    .then ( function () {
      button.click();
    });
  }
}


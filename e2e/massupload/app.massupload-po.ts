import { browser, by, element, Key, protractor, ElementFinder, $ } from 'protractor';

export class AppMassUploadPage {
  ClickmassuploadLink(): void {
    var massimportLink = element(by.id("massimport"));
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(massimportLink), 10000)
      .then(function () {
        massimportLink.click();
      })
  }
  UploadFile(path:string):void{
    element(by.id("massimportfileuploader")).sendKeys(path);
  } 
  CheckFileStatus(statustoBeChecked:string){
   return browser.wait(
       protractor.ExpectedConditions.textToBePresentInElement($("#filestatus")
       ,statustoBeChecked),10000).then(function(isStatusExists){
      return isStatusExists;
     });
  }
}  


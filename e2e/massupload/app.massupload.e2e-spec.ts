import { LoginPageSteps } from '../LoginPage/LoginPageSteps';
import { browser } from "protractor";
import { AppMassUploadPage } from "./app.massupload-po";
import {fs} from "fs-extra"

describe('Mass Upload Test Suite', () => {
  let _loginPageSteps: LoginPageSteps;
  let _AppProductListPage:AppMassUploadPage;

  beforeEach(() => {
    this._loginPageSteps = new LoginPageSteps();
    this._AppMassUploadPage=new AppMassUploadPage();
       // this._loginPageSteps.doLogin();
  });

  it('NavigateMassUploadPage', () => {
    browser.get("http://localhost:4200/home");
    this._AppMassUploadPage.ClickmassuploadLink();
    expect(browser.getCurrentUrl()).toContain('massimport');
  });
  it('UploadFile', () => {
    var uploadfilepath=__dirname+"\\massuploadfiles\\uploadfile\\test.xls";
    this._AppMassUploadPage.UploadFile(uploadfilepath);
    this._AppMassUploadPage.CheckFileStatus("Uploaded Sucessfully").then(function(isStatusExist){
      expect(isStatusExist).toEqual(true);
    });
  });
});

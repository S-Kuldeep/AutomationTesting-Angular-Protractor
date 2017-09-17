// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  multiCapabilities: [{
    'browserName': 'chrome',
    chromeOptions: {
      args: [ "--headless", "--window-size=800x600" ]
    }
  }],
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './e2e/e2e-TestResult/LastExecution/TestResultXML',
        filePrefix: 'xmlresults'
    }));

    var fs = require('fs-extra');
    
    // fs.renameSync('./e2e/e2e-TestResult/LastExecution'
    // ,"./e2e/e2e-TestResult/ArchivedOn-"+ Math.floor(Date.now()/1000));

    fs.emptyDir('./e2e/e2e-TestResult/LastExecution/screenshots', function (err) {
           console.log(err);
       });
       jasmine.getEnv().addReporter({
           specDone: function(result) {
               if (result.status == 'failed') {
                   browser.getCapabilities().then(function (caps) {
                       var browserName = caps.get('browserName');
    
                       browser.takeScreenshot().then(function (png) {
                           var stream = fs.createWriteStream('./e2e/e2e-TestResult/LastExecution/screenshots/' + browserName + '-' + result.fullName+ '.png');
                           stream.write(new Buffer(png, 'base64'));
                           stream.end();
                       });
                   });
               }
           }
       });
  },
  onComplete() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
       browserName = caps.get('browserName');
       browserVersion = caps.get('version');

       var HTMLReport = require('protractor-html-reporter');

       testConfig = {
           reportTitle: 'e2e Test Execution Report',
           outputPath: './e2e/e2e-TestResult/LastExecution',
           screenshotPath: './screenshots',
           testBrowser: browserName,
           browserVersion: browserVersion,
           modifiedSuiteName: false,
           screenshotsOnlyOnFailure: true
       };
       new HTMLReport().from('./e2e/e2e-TestResult/LastExecution/TestResultXML/xmlresults.xml', testConfig);
   });
}
};

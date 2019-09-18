let calculatorPageObj = require('../pages/CalculatorPage');

describe('demo calculator', function(){

    it('should open calculator web app link', function(){
        calculatorPageObj.getUrl('http://juliemr.github.io/protractor-demo/');
    });

    it('should insert first number', function(){
        calculatorPageObj.enterFirstNumber('11');
    });

    it('should insert second number', function(){
        calculatorPageObj.enterSecondNumber('10');
    });

    it('should click go! button', function(){
        calculatorPageObj.calculate();
    });

    it('should expect answer', function(){
        calculatorPageObj.expectAnswer('11');
        browser.sleep(5000);
    });


    // it('should open calculator web app link', function(){
    //     calculatorPageObj.getUrl('http://juliemr.github.io/protractor-demo/');
    // });

    // it('should insert first number', function(){
    //     calculatorPageObj.enterFirstNumber('11');
    // });

    // it('should insert second number', function(){
    //     calculatorPageObj.enterSecondNumber('10');
    // });

    // it('should click go! button', function(){
    //     calculatorPageObj.calculate();
    // });

    // it('should expect answer', function(){
    //     calculatorPageObj.expectAnswer('11');
    // });
});























        // browser.get('http://juliemr.github.io/protractor-demo/');

        // browser.sleep(2000);

        // let firstNumber = element(by.model('first'));
        // let secondNumber = element(by.model('second'));
  
        // firstNumber.sendKeys(11);
        // secondNumber.sendKeys(10);

        // let goButton = element(by.css('[ng-click="doAddition()"]'));
        // goButton.click();
        // browser.sleep(5000);

        // let answer = element(by.cssContainingText('.ng-binding', '21'));
        // expect(answer.getText()).toEqual('21')

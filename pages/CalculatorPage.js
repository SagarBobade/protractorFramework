let calculatorPage = function(){

    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.enterFirstNumber= function(firstNo){
        firstNumber.sendKeys(firstNo);
    }

    this.enterSecondNumber= function(secondtNo){
        secondNumber.sendKeys(secondtNo);
    }

    this.calculate= function(){
        goButton.click();
    }
    
    this.getUrl = function(openUrl){
        browser.get(openUrl);
        browser.manage().window().maximize();
        browser.sleep(2000);
    }

    this.expectAnswer = function(expectAnswer){
    //    let answer = element(by.cssContainingText('.ng-binding', expectAnswer));
    let answer = element(by.xpath('//*[@class=\'ng-binding\']/../h2'))
    expect(answer.getText()).toEqual(expectAnswer);
    }
};

module.exports = new calculatorPage();
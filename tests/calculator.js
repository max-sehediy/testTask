let calcPage = require('../pages/calcPage');

describe('demo calculator tests=1', function () {

    it('addition test=1', function () {

        calcPage.get('http://juliemr.github.io/protractor-demo/');

        calcPage.enterFirstNumber('10');

        calcPage.optionsSel(0)

        calcPage.enterSecondNumber('11');

        calcPage.clickGo();

        calcPage.verifyResult('21');

        browser.sleep(5000)

    });

    it('division test=1', function () {

        calcPage.get('http://juliemr.github.io/protractor-demo/');

        calcPage.enterFirstNumber('10');

        calcPage.optionsSel(1)

        calcPage.enterSecondNumber('11');

        calcPage.clickGo();

        calcPage.verifyResult('0.9090909090909091');

        browser.sleep(2000)

    });

    it('modulo test=1', function () {

        calcPage.get('http://juliemr.github.io/protractor-demo/');

        calcPage.enterFirstNumber('10');

        calcPage.optionsSel(2)

        calcPage.enterSecondNumber('11');

        calcPage.clickGo();

        calcPage.verifyResult('10');

        browser.sleep(2000)

    });

    it(' multiplication test=1', function () {

        calcPage.get('http://juliemr.github.io/protractor-demo/');

        calcPage.enterFirstNumber('10');

        calcPage.optionsSel(3)

        calcPage.enterSecondNumber('11');

        calcPage.clickGo();

        calcPage.verifyResult('110');

        browser.sleep(2000)

    });

    it(' subtration test=1', function () {

        calcPage.get('http://juliemr.github.io/protractor-demo/');

        calcPage.enterFirstNumber('10');

        calcPage.optionsSel(4)

        calcPage.enterSecondNumber('11');

        calcPage.clickGo();

        calcPage.verifyResult('-1');

        browser.sleep(2000)

    });

    it('addition test=2', function () {

        calcPage.get('http://juliemr.github.io/protractor-demo/');

        calcPage.enterFirstNumber('10');

        calcPage.optionsSel(0)

        calcPage.enterSecondNumber('0.1');

        calcPage.clickGo();

        calcPage.verifyResult('10.1');

        browser.sleep(5000)

    });

    it('division test=2', function () {

        calcPage.get('http://juliemr.github.io/protractor-demo/');

        calcPage.enterFirstNumber('10');

        calcPage.optionsSel(1)

        calcPage.enterSecondNumber('0');

        calcPage.clickGo();

        calcPage.verifyResult('error');

        browser.sleep(2000)

    });

    it('modulo test=2', function () {

        calcPage.get('http://juliemr.github.io/protractor-demo/');

        calcPage.enterFirstNumber('10.5');

        calcPage.optionsSel(2)

        calcPage.enterSecondNumber('2.5');

        calcPage.clickGo();

        calcPage.verifyResult('0.5');

        browser.sleep(2000)

    });

    it(' multiplication test=2', function () {

        calcPage.get('http://juliemr.github.io/protractor-demo/');

        calcPage.enterFirstNumber('10');

        calcPage.optionsSel(3)

        calcPage.enterSecondNumber('0');

        calcPage.clickGo();

        calcPage.verifyResult('error');

        browser.sleep(2000)

    });


    it(' subtration test=2', function () {

        calcPage.get('http://juliemr.github.io/protractor-demo/');

        calcPage.enterFirstNumber('10.3');

        calcPage.optionsSel(4)

        calcPage.enterSecondNumber('0.1');

        calcPage.clickGo();

        calcPage.verifyResult('10.1');

        browser.sleep(2000)

    });
});
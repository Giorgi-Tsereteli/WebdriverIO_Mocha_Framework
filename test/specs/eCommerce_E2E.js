const expectchai = require('chai').expect;
const loginPage = require('../pageObjects/LoginPage');
const shopPage = require('../pageObjects/ShopPage');
const reviewPage = require('../pageObjects/ReviewPage');
const checkoutPage = require('../pageObjects/CheckoutPage');
const fs = require('fs');
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginCredentials.json'));
let productsForCart = JSON.parse(fs.readFileSync('test/testData/ProductsData.json'));

describe('Login Automation using POM', async () => {
  xit('TC1 - Basics', async () => {
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
    loginPage.login('rahulshettyacademy', 'learningggg');
    //loginPage.login(username, password);

    // When accessing properties of object(not method), u don't need (). Just call the property
    // Remember to wait for or until something is displayed/enabled/clickable and etc..
    await console.log(await loginPage.alert.getText()); // logs nothing
    await browser.waitUntil(async () => (await loginPage.alert.isDisplayed()) === true, {
      timeout: 5000,
      timeoutMsg: 'Failed'
    });
    await console.log(await loginPage.alert.getText()); // logs something
    await expect(loginPage.textInfo).toHaveTextContaining('username is rahul');

    //loginPage.login(username, password);
    loginPage.login('rahulshettyacademy', 'learning');
    await browser.pause(2000);
    await shopPage.shopPageHeading.waitForExist();

    // Review Page
    let itemsToChoose = ['iphone X', 'Blackberry'];
    await shopPage.addProductsToCart(itemsToChoose);
    await shopPage.checkoutBtn.click();

    let sumFromCart = await reviewPage.calculatedSUM();
    let sumFromWebsite = await reviewPage.websiteSUM();

    await expectchai(await parseInt(sumFromCart)).to.equal(sumFromWebsite);
    await reviewPage.doneButton.click();

    // Checkout Page
    await checkoutPage.countryInputField.waitForDisplayed();
    await checkoutPage.countryInputField.setValue('Ind');
    await checkoutPage.countrySuggestions.waitForDisplayed();
    await checkoutPage.indiaSuggestion.click();
    await checkoutPage.purchaseButton.click();
    await checkoutPage.successMessage.waitForDisplayed();
    expect(await checkoutPage.successMessage).toHaveTextContaining('Success');
  }); // 1st it block

  credentials.forEach(({ username, password }) => {
    xit('TC2 - Login', async () => {
      await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');

      loginPage.login(username, password);

      // await browser.waitUntil(
      //   async () => (await loginPage.alert.isDisplayed()) === true,
      //   {
      //     timeout: 5000,
      //     timeoutMsg: 'Failed'
      //   }
      // );
      // await console.log(await loginPage.alert.getText()); // logs something
      // await expect(loginPage.textInfo).toHaveTextContaining('username is rahul');

      //loginPage.login(username, password);
      //loginPage.login('rahulshettyacademy', 'learning');
      await browser.pause(3000);
      await shopPage.shopPageHeading.waitForExist();

      // Review Page
      let itemsToChoose = ['iphone X', 'Blackberry'];
      await shopPage.addProductsToCart(itemsToChoose);
      await shopPage.checkoutBtn.click();

      let sumFromCart = await reviewPage.calculatedSUM();
      let sumFromWebsite = await reviewPage.websiteSUM();

      await expectchai(await parseInt(sumFromCart)).to.equal(sumFromWebsite);
      await reviewPage.doneButton.click();

      // Checkout Page
      await checkoutPage.countryInputField.waitForDisplayed();
      await checkoutPage.countryInputField.setValue('Ind');
      await checkoutPage.countrySuggestions.waitForDisplayed();
      await checkoutPage.indiaSuggestion.click();
      await checkoutPage.purchaseButton.click();
      await checkoutPage.successMessage.waitForDisplayed();
      expect(await checkoutPage.successMessage).toHaveTextContaining('Success');
    }); // 2nd it block
  }); // end of foreach loop (TC parametrized)

  productsForCart.forEach(({ products }) => {
    it('TC3 - Items', async () => {
      await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
      loginPage.login('rahulshettyacademy', 'learning');
      await browser.pause(2000);
      await shopPage.shopPageHeading.waitForExist();

      // Review Page
      //let itemsToChoose = products;
      await shopPage.addProductsToCart(products);
      await shopPage.checkoutBtn.click();

      let sumFromCart = await reviewPage.calculatedSUM();
      let sumFromWebsite = await reviewPage.websiteSUM();

      await expectchai(await parseInt(sumFromCart)).to.equal(sumFromWebsite);
      await reviewPage.doneButton.click();

      // Checkout Page
      await checkoutPage.countryInputField.waitForDisplayed();
      await checkoutPage.countryInputField.setValue('Ind');
      await checkoutPage.countrySuggestions.waitForDisplayed();
      await checkoutPage.indiaSuggestion.click();
      await checkoutPage.purchaseButton.click();
      await checkoutPage.successMessage.waitForDisplayed();
      expect(await checkoutPage.successMessage).toHaveTextContaining('Success');
    });
  });
}); // describe block

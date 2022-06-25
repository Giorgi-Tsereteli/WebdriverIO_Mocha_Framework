const expectchai = require('chai').expect;

describe('E2E example', async () => {
  it('Login and Choose products', async () => {
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
    await $("//input[@name='username']").setValue('rahulshettyacademy');
    await $("//*[@id='password']").setValue('learning');
    await $("//*[@id='signInBtn']").click();
    await $('//h1').waitForExist();

    let itemsToChoose = ['iphone X', 'Blackberry'];
    let products = await $$("//div[@class='card-body']");

    // when loops picks card, all your following locators work within that card
    for (let i = 0; i < (await products.length); i++) {
      let eachItem = await $$("//div[@class='card-body']/h4/a");
      if (itemsToChoose.includes(await eachItem[i].getText())) {
        // dynamic xpath with traversing back. U target each item <a> and go back in DOM
        // Ask Deepak if this is okay to do in real work
        await $(
          "//div[@class='card-body']/h4/a[text()='" +
            (await eachItem[i].getText()) +
            "']/parent::h4/parent::div/following-sibling::div/button"
        ).click();
      }
    }
    await $("//ul//a[contains(text(),'Checkout')]").click();

    // It did not let me use split() on getText()
    let cartItemPrices = await $$('//tr/td[4]/strong');
    let trimmedPrices = await Promise.all(
      await cartItemPrices.map(async (item) => await item.getText())
    );

    let combinedPrice = trimmedPrices
      .map((price) => parseInt(price.split(' ')[1]))
      .reduce((total, eachPrice) => total + eachPrice, 0);

    let totalFromWebsite = await $('//h3/strong').getText(); // again, not letting me do split()
    totalFromWebsite = await parseInt(await totalFromWebsite.split(' ')[1]);

    await expectchai(await parseInt(totalFromWebsite)).to.equal(combinedPrice);

    await $('(//tr//td[5]//button)[3]').click();

    await $("//*[@id='country']").waitForDisplayed();
    await $("//*[@id='country']").setValue('Ind');
    await $("//div[@class='suggestions']//a").waitForDisplayed();
    await $("//div[@class='suggestions']//a[text()='India']").click();
    await $("//*[@value='Purchase']").click();
    await $('//strong').waitForDisplayed();
    expect(await $('//strong')).toHaveTextContaining('Success');
  });
});

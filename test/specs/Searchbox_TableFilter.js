const expectchai = require('chai').expect;

describe('Search Box and Table Verification', async () => {
  it('TC1', async () => {
    await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await $("//*[@id='search-field']").setValue('tomato');
    const shownProducts = await $$('//tbody/tr//td[1]');
    await expect(shownProducts).toBeElementsArrayOfSize({ eq: 1 });
    await expect(await shownProducts[0]).toHaveTextContaining('Tomato');
    // above toHaveTextContaining() method itself gets the webElements text.
    // Do not try to get text yourself and then try to verify. It works right away
    // Here, u don't compare 2 string, so u don't need chai. U check if it contains.

    console.log(await shownProducts.length);
    console.log(await shownProducts[0].getText());
    await browser.pause(3000);
  });
});

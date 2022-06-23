const expectchai = require('chai').expect;
describe('Sort Table and Verify prices', async () => {
  xit('Scenario 1', async () => {
    await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await browser.pause(1000);
    await $('(//thead//th)[1]').click();
    await browser.pause(1000);
    const productNames = await $$('//tbody/tr//td[1]');
    //const namesArray = await productNames.map(async (veggie) => await veggie.getText());

    const namesArray = await Promise.all(
      productNames.map(async (veggie) => await veggie.getText())
    );
    console.log(namesArray);
    for (let i = 0; i < (await namesArray.length); i++) {
      console.log(await namesArray[i]);
    }
    console.log(await namesArray.length);
  });
  xit('Scenario 2 - clean', async () => {
    await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await $('(//thead//th)[1]').click();
    const productNames = await $$('//tbody/tr//td[1]');
    const veggieArray = await Promise.all(
      productNames.map(async (veggie) => await veggie.getText())
    );
    let veggiesSorted = veggieArray.sort();
    expectchai(veggiesSorted).to.equal(veggieArray);
  });
  it('Scenario 3 - clean with array copy', async () => {
    await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await $('(//thead//th)[1]').click();
    const productNames = await $$('//tbody/tr//td[1]');
    const veggieArray = await Promise.all(
      productNames.map(async (veggie) => await veggie.getText())
    );
    const veggieArrayCopy = veggieArray.slice(); // to not affect original array, using slice() u made a copy
    let veggiesSorted = veggieArrayCopy.sort(); // copied array got sorted and is ready to verify
    expectchai(veggiesSorted).to.equal(veggieArray);
  });
});

//tbody/tr//td[1] <--- remember that u can select all children of tr, and select first td in ALL tr
//tbody/tr//td[1]/following-sibling::td[1]

// don't forget to use async before each function
//await console.log(await productNames[2].getText());
//productNames.map(async (i) => console.log(await i.getText())); // <-- u can also log text from map

// Ask someone what is Promise.All(rest of the code goes here, including awaits)

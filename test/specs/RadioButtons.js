// describe
// it
describe('Radio Buttons Automation', async () => {
  it('Select button', async () => {
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
    //await $("(//label[@class='customradio']//span[@class='checkmark'])[2]").click();

    // Following is another way of selecting multiple elementes.
    // $$ returns array of webElements. You can then select [index] for element
    const radioButtons = await $$(
      "//label[@class='customradio']//span[@class='checkmark']"
    );
    radioButtons[1].click();

    await browser.pause(2000);
  }); // end of it
}); // end of describe

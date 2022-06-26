// describe
// it
describe('Radio Buttons Automation', async () => {
  it('Select button Smoke', async () => {
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/'); // <-- partial url was used to test second wadio.conf file

    // Following is another way of selecting multiple elements.
    // $$ returns array of webElements. You can then select [index] for element
    await browser.pause(2000);
    const radioButtons = await $$(
      "//label[@class='customradio']//span[@class='checkmark']"
    );
    radioButtons[1].click();

    await browser.pause(2000);
  });
});
